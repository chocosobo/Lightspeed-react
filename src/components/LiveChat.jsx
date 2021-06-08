import React from "react";
import {
  ChatContainer,
} from "../styles/liveChatStyles";

import WidgetBot from '@widgetbot/react-embed'

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
