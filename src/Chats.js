import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you 😀"
        timestamp="35 minutes ago"
        profilePic="https://riseuptogether.org/wp-content/uploads/2017/08/Sarah-1.jpg"
      />
      <Chat
        name="Ellen"
        message="Whats up ♥?"
        timestamp="55 minutes ago"
        profilePic="https://www.cheatsheet.com/wp-content/uploads/2020/08/Ellen-DeGeneres-3-1024x711.jpg"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWGJdB5-_puKAEjCaBpJl1bOJIg-NvIqSfZA&usqp=CAU"
      />
      <Chat
        name="Natasha"
        message="Oops there he iss...🐕"
        timestamp="1 week ago"
        profilePic="https://www.chatblink.com/up/231/231852/1-49919983.jpg"
      />
    </div>
  );
}

export default Chats;
