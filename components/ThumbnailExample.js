import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <Text>Square Thumbnail</Text>
          <Thumbnail square small source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} />
          <Thumbnail square source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} />
          <Thumbnail square large source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} />
          <Text>Circular Thumbnail</Text>
          <Thumbnail small source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} />
          <Thumbnail source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} />
          <Thumbnail large source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} />
        </Content>
      </Container>
    );
  }
}
