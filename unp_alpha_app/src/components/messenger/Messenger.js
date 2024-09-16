import "./messenger.css";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message.js";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const user={'_id':2, };
  const scrollRef = useRef();

  useEffect(() => {
     socket.current = io("ws://localhost:8900");
     socket.current.on("getMessage", (data) => {
       setArrivalMessage({
         sender: data.senderId,
         text: data.text,
         createdAt: Date.now(),
       });
     });
   }, []);

   useEffect(() => {
       arrivalMessage &&
       currentChat?.members.includes(arrivalMessage.sender) &&
       setMessages((prev) => [...prev, arrivalMessage]);
   }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   socket.current.emit("addUser", user._id);
  //   socket.current.on("getUsers", (users) => {
  //     setOnlineUsers(
  //       user.followings.filter((f) => users.some((u) => u.userId === f))
  //     );
  //   });
  // }, [user]);

   useEffect(() => {
     const getConversations = async () => {
       try {
         const res = await axios.get("http://localhost:8080/conversations/byusers/" + user._id);
         setConversations(res.data.message);         
       } catch (err) {
         console.log(err);
       }
     };
     getConversations();
   }, [user._id]);

   useEffect(() => {
     const getMessages = async () => {
       try {
        //console.log(currentChat);
        if(currentChat!==null)
        {
         const res = await axios.get("http://localhost:8080/message/byconversation/" + currentChat?._id);
         //console.log("message api res:",res);
         setMessages(res.data.message);
        }
       } catch (err) {
         console.log(err);
       }
     };
     getMessages();
   }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("http://localhost:8080/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleconvclick = async (e) => {
    console.log(e);
    setCurrentChat( e , () => {
      console.log(currentChat);
    });

    //console.log(currentChat)
  };

   useEffect(() => {
     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages]);

  return (
    <>      
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {/* <input placeholder="Search for friends" className="chatMenuInput" /> */}
            {conversations.map((c) => (            
               <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (conversations.length===0 ?
              <span className="noConversationText">
                No Conversations available.
              </span>
              :
              <span className="noConversationText">
                Select a chat.
              </span>
            )}
          </div>
        </div>        
      </div>
    </>
  );
}