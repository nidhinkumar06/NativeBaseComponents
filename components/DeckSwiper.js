import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from "native-base";
const cards = [
  {
    text: "Card One",
    name: "One",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tenali-raman-5cf23.appspot.com/o/Kanakkupillai%2FAdvance%20adding%20-%20Page%201.png?alt=media&token=547879a0-7f9d-4b94-94eb-c34b8be97f74"
  },
  {
    text: "Card Two",
    name: "Two",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tenali-raman-5cf23.appspot.com/o/Kanakkupillai%2FVehicleTrade.png?alt=media&token=c120203e-8f1b-4d40-a1d5-e546bde0742d"
  },
  {
    text: "Card Three",
    name: "Three",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tenali-raman-5cf23.appspot.com/o/Kanakkupillai%2FLogin.png?alt=media&token=774f2fe1-d1c7-4c21-abb1-49825b086c40"
  }
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: "#ED4A6A" }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
