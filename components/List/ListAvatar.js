import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              </Left>
              <Body>
                <Text>Circled Avatar</Text>
                <Text note>circled avatar . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
              </Left>
              <Body>
                <Text>Avatar Squared</Text>
                <Text note>Squared Avatar by giving square in Thumbnail. .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
