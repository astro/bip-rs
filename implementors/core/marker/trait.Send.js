(function() {var implementors = {};
implementors['slab'] = ["impl&lt;T, I: <a class='trait' href='slab/trait.Index.html' title='slab::Index'>Index</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='slab/struct.Slab.html' title='slab::Slab'>Slab</a>&lt;T, I&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];implementors['bytes'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='bytes/alloc/struct.MemRef.html' title='bytes::alloc::MemRef'>MemRef</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='bytes/struct.RingBuf.html' title='bytes::RingBuf'>RingBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='bytes/struct.Bytes.html' title='bytes::Bytes'>Bytes</a>",];implementors['crossbeam'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='crossbeam/mem/epoch/struct.Atomic.html' title='crossbeam::mem::epoch::Atomic'>Atomic</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='crossbeam/mem/struct.CachePadded.html' title='crossbeam::mem::CachePadded'>CachePadded</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='crossbeam/sync/struct.AtomicOption.html' title='crossbeam::sync::AtomicOption'>AtomicOption</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='crossbeam/sync/struct.MsQueue.html' title='crossbeam::sync::MsQueue'>MsQueue</a>&lt;T&gt;",];implementors['libc'] = [];implementors['mio'] = [];implementors['chrono'] = ["impl&lt;Tz: <a class='trait' href='chrono/offset/trait.TimeZone.html' title='chrono::offset::TimeZone'>TimeZone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='chrono/date/struct.Date.html' title='chrono::date::Date'>Date</a>&lt;Tz&gt; <span class='where'>where Tz::Offset: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;Tz: <a class='trait' href='chrono/offset/trait.TimeZone.html' title='chrono::offset::TimeZone'>TimeZone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='chrono/datetime/struct.DateTime.html' title='chrono::datetime::DateTime'>DateTime</a>&lt;Tz&gt; <span class='where'>where Tz::Offset: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
