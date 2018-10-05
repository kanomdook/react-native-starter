import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  Card,
  CardItem
} from "native-base";

export default class App extends React.Component {
  monney = 0;
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      vat: 0
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  calc = () => {
    let vat = (this.monney * 7) / 100 + parseInt(this.monney);
    this.setState({ vat: vat });
  }

  valChange = (num) => {
    this.monney = num;
  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>VAT Calculator</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>จำนวนเงิน</Label>
              <Input placeholder='เช่น 100' onChangeText={this.valChange} />
            </Item>
            <Button full info onPress={this.calc}>
              <Text>คำนวณ</Text>
            </Button>
            <Card transparent>
              <CardItem>
                <Body style={styles.center}>
                  <Text style={styles.textStyle}>
                    VAT(7%): {this.state.vat ? this.state.vat : 0} บาท
                </Text>
                </Body>
              </CardItem>
            </Card>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 30.0,
    fontWeight: 'bold',
    color: 'red'
  }
})