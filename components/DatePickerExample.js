import React, { Component } from "react";
import { Container, Header, Content, DatePicker, Text } from "native-base";
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <DatePicker
            minimumDate={new Date()}
            maximumDate={new Date(2018, 12, 31)}
            placeHolderText="Select date"
            textStyle={{ color: "red" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
          />
          <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
        </Content>
      </Container>
    );
  }
}
