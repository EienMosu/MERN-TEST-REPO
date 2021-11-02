import React from "react";
// Components
import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import WidgetSmall from "../../components/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge";
// Styled Components
import { Container, Widgets } from "./HomePage.styles";
// Chart Data
import { userData } from "../../chartData";


const HomePage = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <Widgets>
        <WidgetSmall />
        <WidgetLarge />
      </Widgets>
    </Container>
  );
};

export default HomePage;
