import React from "react";
// Material UI Icons
import { Visibility } from "@material-ui/icons";
// Styled Components
import {
  Button,
  Container,
  Image,
  JobTitle,
  List,
  ListItem,
  Title,
  User,
  Username,
} from "./WidgetSmall.styles";
// Images
import woman1 from "../../assets/woman1.jpg";
import woman2 from "../../assets/woman2.jpg";
import woman3 from "../../assets/woman3.jpg";
import woman4 from "../../assets/woman4.jpg";
import woman5 from "../../assets/woman5.jpg";

const WidgetSmall = () => {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <ListItem>
          <Image src={woman1} />
          <User>
            <Username>Anna Keller</Username>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Visibility style={{ marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src={woman2} />
          <User>
            <Username>Anna Keller</Username>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Visibility style={{ marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src={woman3} />
          <User>
            <Username>Anna Keller</Username>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Visibility style={{ marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src={woman4} />
          <User>
            <Username>Anna Keller</Username>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Visibility style={{ marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src={woman5} />
          <User>
            <Username>Anna Keller</Username>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Visibility style={{ marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};

export default WidgetSmall;
