import React, { FC } from "react";
import { Button, View, Image, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constans/Colors";

const WelcomeText = styled.Text`
  margin: 120px 20px;
  font-size: 16px;
  color: ${Colors.black};
`;

const CustomImage = styled.Image`
  width: 150px;
  height: 150px;
`;
const WelcomeTextHeader = styled.Text`
  font-size: 20px;
  color: ${Colors.silverWhite};
  padding: 30px 10px;
  text-align: center;
`;
const WelcomeTextHome = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  padding: 10px 10px;
  line-height: 24px;
  text-align: justify;
`;
const WrapperHome = styled.View`
  flex: 1;
  background-color: ${Colors.bluePurple};
`;

const HeaderHome = styled.View`
  flex: 1;
  flex-direction: row;
`;
const ImgWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SectionHome = styled.View`
  flex: 1;
  background-color: ${Colors.bluePurple};
  align-items: center;
`;
const TitleHeaderHome = styled.View`
  flex: 1;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  const navigation = useNavigation();

  return (
    <WrapperHome>
      <HeaderHome>
        <ImgWrapper>
          {<CustomImage source={require("../../assets/checkV2.png")} />}
        </ImgWrapper>
        <TitleHeaderHome>
          <WelcomeTextHeader>WELCOM IN MY TODO APP</WelcomeTextHeader>
        </TitleHeaderHome>
      </HeaderHome>
      <SectionHome>
        <WelcomeTextHeader>EXAMPLE HEADER </WelcomeTextHeader>
        <WelcomeTextHome>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          elementum urna diam, in dictum libero volutpat et. Fusce a maximus
          leo, a ultricies nisi. Integer non mollis velit. Donec vitae augue
          vitae ante porta sollicitudin in id leo. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </WelcomeTextHome>
      </SectionHome>
    </WrapperHome>
  );
};

export default Home;
