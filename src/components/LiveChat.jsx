import React from "react";
import {
  ChatContainer,
  ChatMain,
  ChatHeading,
  ChatBody,
} from "../styles/liveChatStyles";

const LiveChat = () => {
  return (
    <ChatContainer>

      <WidgetBot
        server="299881420891881473"
        channel="355719584830980096"
      />

    </ChatContainer>
  );
};

export default LiveChat;
