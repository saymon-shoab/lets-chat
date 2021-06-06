import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../../features/chatSlice';
import { selectUser } from '../../features/userSlice';
import db from '../Firebase/Firebase';
import Massage from '../Massage/Massage';
import firebase from 'firebase'
import FlipMove from "react-flip-move";
import './Chat.css'
const Chat = () => {
    const user = useSelector(selectUser);
    const [input, setInput]=useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages]= useState([]);

    useEffect(()=>{
        if(chatId){
            db.collection("chats").doc(chatId).collection("message")
            .orderBy("timestamp", "desc").onSnapshot((snapshot)=>
                setMessages(snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data: doc.data(),
                    
                }))
                )
            );
        }
    },[])

    const sendMessage = (e) =>{
        e.preventDefault();
          // firebase magic
     
        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        })

        setInput("");
    }

    return (
        <div className="chat">
          
             {/* chat header  */}
              <div className="chat_header">
                  <h4>To: <span className="Chat_name">{chatName}</span>  </h4>
                  <strong>Details</strong>
              </div>
             {/* chat message  */}
             <div className="chat_message">
                 
                 <FlipMove>
                    {messages.map(({ id, data }) => (
                        <Massage key={id} contents={data} />
                    ))}
                </FlipMove>
             
                 
             </div>

             {/* chat input */}
             <div className="chat_input">
                 <form action="">
                   <input
                    value={input}
                    onChange={(e) =>setInput(e.target.value)}
                    type="text"
                    placeholder="message"
                    />
                   <button onClick={sendMessage}>send message</button>
                  </form>
                  <IconButton>
                      <MicIcon className="chat_mic"></MicIcon>
                  </IconButton>
             </div>

        </div>
    );
};

export default Chat;