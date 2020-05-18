import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  goToChat = () => {
    Actions.chat();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity onPress={this.goToChat}>
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
