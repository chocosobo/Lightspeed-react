import * as React from 'react';
import {
  ChatContainer,
  WidgetBot,
} from "../styles/liveChatStyles";
import WidgetBot from '@widgetbot/react-embed';

const LiveChat = () => (
  <ChatContainer>
    <WidgetBot
      server="847601882851704862"
      channel="847601882851704865"
    />
  </ChatContainer>
);


export default LiveChat;