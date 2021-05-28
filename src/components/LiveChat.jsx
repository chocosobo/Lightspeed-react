import * as React from 'react';
import {
  ChatContainer,
  ChatMain,
  ChatHeading,
  ChatBody,
} from "../styles/liveChatStyles";
import WidgetBot from '@widgetbot/react-embed';

const LiveChat = () => (
  <WidgetBot
    server="847601882851704862"
    channel="847601882851704865"
  />
);


export default LiveChat;