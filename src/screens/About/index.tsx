import React, { FC } from "react";
import { Button, View, Image, Text } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

const WelcomeText = styled.Text`
  margin: 120px 20px;
  font-size: 16px;
  color: ${Colors.black};
`;
const CustomImage = styled.Image`
  width: 40%;
  height: 70%;
  margin-left: 10px;
  margin-right: 10px;
`;
const WelcomeTextHeader = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  padding: 30px 10px;
  text-align: center;
`;
const WelcomeTextAbout = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  padding: 5px 10px;
`;
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
`;
const Titlerr = styled.Text`
  color: pink;
`;
const HeaderAbout = styled.View`
  flex: 2;
  padding-top: 20px;
  align-items: flex-start;
  justify-content: center;
`;
const SectionDescribe = styled.View`
  flex: 3;
`;
const FooterAbout = styled.View`
  flex: 2;
  align-items: flex-end;
  justify-content: center;
`;
interface IAboutProps {}

const About = ({ navigation }) => {
  return (
    <Container>
      <HeaderAbout>
        {<CustomImage source={require("../../assets/logo.png")} />}
      </HeaderAbout>
      <SectionDescribe>
        <WelcomeTextHeader>About</WelcomeTextHeader>
        <WelcomeTextAbout>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          elementum urna diam, in dictum libero volutpat et. Fusce a maximus
          leo, a ultricies nisi. Integer non mollis velit. Donec vitae augue
          vitae ante porta sollicitudin in id leo. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </WelcomeTextAbout>
      </SectionDescribe>
      <FooterAbout>
        {<CustomImage source={require("../../assets/logo.png")} />}
      </FooterAbout>
    </Container>
  );
};

export default About;
