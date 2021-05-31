import * as React from 'react';
import {
  ChatContainer
} from "../styles/liveChatStyles";

import WidgetBot, { API } from '@widgetbot/react-embed'


const LiveChat = () => (
  <ChatContainer>
    <WidgetBot
      server="299881420891881473"
      channel="355719584830980096"
      onAPI={this.onAPI.bind(this)}
    />
  </ChatContainer>
);


export default LiveChat;