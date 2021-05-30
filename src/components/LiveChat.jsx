import * as React from 'react';
import {
  ChatContainer
} from "../styles/liveChatStyles";
import WidgetBot from '@widgetbot/react-embed';

class App extends React.Component {
  api: API

  onAPI(api: API) {
    this.api = api
    api.on('signIn', user => {
      console.log(`Signed in as ${user.name}`, user)
    })
  }

  handleClick() {
    this.api.emit('sendMessage', `Hello world! from \`@widgetbot/react-embed\``)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          {`Send "Hello world"`}
        </button>
        <WidgetBot
          server="847601882851704862"
          channel="847601882851704865"
          onAPI={this.onAPI.bind(this)}
        />
      </div>
    )
  }
}

export default WidgetBothawawa;




const LiveChat = () => (
  <ChatContainer>
    <WidgetBothawawa
    />
  </ChatContainer>
);


export default LiveChat;