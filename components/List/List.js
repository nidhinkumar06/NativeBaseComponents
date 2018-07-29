import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem selected>
              <Text>Item Selected</Text>
            </ListItem>
            <ListItem>
              <Text>User Two</Text>
            </ListItem>
            <ListItem>
              <Text>User Three</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

// Replacing Component
// ----------------------
// List: React Native View
// ListItem:
// React Native TouchableHighlight for iOS
// React Native TouchableNativeFeedback for Android
