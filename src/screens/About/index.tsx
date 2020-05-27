import React, { FC } from "react";
import { Button, View, Image, Text } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

// const WelcomeText = styled.Text`
//   margin: 120px 20px;
//   font-size: 16px;
//   color: ${Colors.black};
// `;
const CustomImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-left: 15px;
  margin-right: 15px;
`;
const WelcomeTextHeader = styled.Text`
  font-size: 26px;
  color: ${Colors.bluePurple};
  background-color: ${Colors.green};

  text-align: center;
`;
const WelcomeTextAbout = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  line-height: 24px;
  text-align: justify;
`;
const Container = styled.View`
  flex: 1;
  background-color: ${Colors.silverWhite};
`;
const Titlerr = styled.Text`
  color: pink;
`;
const HeaderAbout = styled.View`
  flex: 2;

  align-items: flex-start;
  justify-content: center;
`;
const SectionDescribe = styled.View`
  flex: 3;
  width: 100%;
  background-color: ${Colors.purple};
`;
const FooterAbout = styled.View`
  flex: 2;
  align-items: flex-end;
  justify-content: center;
`;
const WrapperText = styled.View`
  flex: 3;
  align-items: flex-end;
  justify-content: center;
`;
interface IAboutProps {}

const About = ({ navigation }) => {
  return (
    <Container>
      <HeaderAbout>
        {<CustomImage source={require("../../assets/checkV3.png")} />}
      </HeaderAbout>
      <SectionDescribe>
        <WelcomeTextHeader>About</WelcomeTextHeader>
        <WrapperText>
          <WelcomeTextAbout>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            elementum urna diam, in dictum libero volutpat et. Fusce a maximus
            leo, a ultricies nisi. Integer non mollis velit. Donec vitae augue
            vitae ante porta sollicitudin in id leo. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </WelcomeTextAbout>
        </WrapperText>
      </SectionDescribe>
      <FooterAbout>
        {<CustomImage source={require("../../assets/checkV3.png")} />}
      </FooterAbout>
    </Container>
  );
};

export default About;
