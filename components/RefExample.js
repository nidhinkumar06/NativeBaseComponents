import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class RefExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button ref={ (c) => this._button = c }>
            <Text>Click Me</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
