import React, { Component } from "react";
import { Container, Body, Title, Subtitle, Left, Right,  Header, Content, Badge, Text, Icon } from "native-base";
export default class BadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Badge</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          <Badge style={{backgroundColor: 'lightgray'}}>
            <Text>884545453434343434348+</Text>
          </Badge>
          <Badge primary>
            <Icon
              name="star"
              style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
            />
          </Badge>
          <Badge style={{ backgroundColor: "black" }}>
            <Text style={{ color: "red" }}>183+</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}
