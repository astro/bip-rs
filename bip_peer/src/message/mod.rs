
pub enum MessageType<'a> {
    KeepAlive,
    Choke,
    UnChoke,
    Interested,
    NotInterested,
    Have,
    BitField,
    Request,
    Piece,
    Cancel,
    Extension(ExtensionType)
}

impl MessageType {
    pub fn from_bytes(bytes: &'a [u8]) -> IResult<&'a [u8], MessageType<'a>> {
        
    }
}

