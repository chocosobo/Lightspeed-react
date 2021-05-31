import * as React from 'react';
import {
  ChatContainer
} from "../styles/liveChatStyles";

import WidgetBot, { API } from '@widgetbot/react-embed'


const LiveChat = () => (
  <ChatContainer>
    <WidgetBot
      style={{
        height: "100%"
      }}
      server="847601882851704862"
      channel="847601882851704865"
    />
  </ChatContainer>
);


export default LiveChat;