(function() {var implementors = {};
implementors['bytes'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='bytes/alloc/struct.MemRef.html' title='bytes::alloc::MemRef'>MemRef</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='bytes/struct.Bytes.html' title='bytes::Bytes'>Bytes</a>",];implementors['crossbeam'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='crossbeam/mem/epoch/struct.Atomic.html' title='crossbeam::mem::epoch::Atomic'>Atomic</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='crossbeam/mem/struct.CachePadded.html' title='crossbeam::mem::CachePadded'>CachePadded</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='crossbeam/sync/struct.AtomicOption.html' title='crossbeam::sync::AtomicOption'>AtomicOption</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='crossbeam/sync/struct.MsQueue.html' title='crossbeam::sync::MsQueue'>MsQueue</a>&lt;T&gt;",];implementors['libc'] = [];implementors['mio'] = ["impl&lt;H: <a class='trait' href='mio/trait.Handler.html' title='mio::Handler'>Handler</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='mio/struct.EventLoop.html' title='mio::EventLoop'>EventLoop</a>&lt;H&gt;","impl&lt;M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='mio/struct.Sender.html' title='mio::Sender'>Sender</a>&lt;M&gt;",];implementors['umio'] = ["impl&lt;M&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='umio/external/struct.Sender.html' title='umio::external::Sender'>Sender</a>&lt;M&gt; <span class='where'>where M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
