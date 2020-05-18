import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.1.17:3000');
    this.socket.on('chat message', (msg) => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({ chatMessage: '' });
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text style={{ borderWidth: 2, top: 500 }}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        {chatMessages}
        <TextInput
          style={{ height: 40, borderWidth: 2, top: 600 }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({ chatMessage });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
