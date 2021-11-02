import React from "react";
// Material UI Icons
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// Styled Components
import {
  Container,
  Item,
  Money,
  MoneyContainer,
  MoneyRate,
  Sub,
  Title,
} from "./FeaturedInfo.styles";

const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>$2.485</Money>
          <MoneyRate>
            -11.4
            <ArrowDownward style={{ color: "red" }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$4.485</Money>
          <MoneyRate>
            -9.2
            <ArrowDownward style={{ color: "red" }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$3.231</Money>
          <MoneyRate>
            +1.2
            <ArrowUpward style={{ color: "green" }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
