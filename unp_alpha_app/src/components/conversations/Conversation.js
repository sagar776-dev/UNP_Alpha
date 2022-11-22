import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    
    const friendId = conversation.members.find((m) => m !== currentUser._id);   
    //console.log(conversation);
    const getUser = async () => {
      try {
        //const res = await axios("http://localhost:3001/users?userId=" + friendId);
        const res= {
          id:1,
          //profilePicture: "person/1.jpeg",
          username: "Safak Kocaoglu"
        };
        //setUser(res.data);
        setUser(res);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : "./person/noAvatar.png"
        }
        alt="./person/noAvatar.png"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
