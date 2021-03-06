use bip_util::bt::{self};
use bip_utracker::{TrackerClient, ClientRequest, ClientError};
use bip_utracker::announce::{ClientState, AnnounceEvent};

use {MockHandshaker};

#[test]
#[allow(unused)]
fn positive_client_request_failed() {
    let server_addr = "127.0.0.1:3503".parse().unwrap();
    // Dont actually create the server :) since we want the request to wait for a little bit until we drop
    
    let mock_handshaker = MockHandshaker::new();
    let (send_token, responses) = {
        let mut client = TrackerClient::new("127.0.0.1:4503".parse().unwrap(), mock_handshaker.clone()).unwrap();
        let responses = client.responses();
        
        let send_token = client.request(server_addr, ClientRequest::Announce(
            [0u8; bt::INFO_HASH_LEN].into(),
            ClientState::new(0, 0, 0, AnnounceEvent::None)
        )).unwrap();
        
        (send_token, responses)
    };
    // Client is now dropped
    
    let (recv_token, res) = responses.recv().unwrap();
    
    assert_eq!(send_token, recv_token);
    
    match res {
        Err(ClientError::ClientShutdown) => (),
        _ => panic!("Did Not Receive ClientShutdown...")
    }
    
    mock_handshaker.connects_received(|connects| {
        assert_eq!(connects.len(), 0);
    });
}