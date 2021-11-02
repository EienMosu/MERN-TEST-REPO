import React from "react";
// Styled Components
import {
  Amount,
  Button,
  Container,
  Date,
  Image,
  Status,
  Table,
  Td,
  Th,
  Title,
  Tr,
  Username,
} from "./WidgetLarge.styles";
// Images
import woman1 from "../../assets/woman6.jpg";

const WidgetLarge = () => {
  const MyButton = ({ type, color }) => {
    return <Button color={color}>{type}</Button>;
  };

  return (
    <Container>
      <Title>Lastest Transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <Td>
            <Image src={woman1} />
            <Username>Susan Carol</Username>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$125.21</Amount>
          <Status>
            <MyButton color="#3bb077" type="Approve" />
          </Status>
        </Tr>
        <Tr>
          <Td>
            <Image src={woman1} />
            <Username>Susan Carol</Username>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$125.21</Amount>
          <Status>
            <MyButton color="#d95087" type="Declined" />
          </Status>
        </Tr>
        <Tr>
          <Td>
            <Image src={woman1} />
            <Username>Susan Carol</Username>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$125.21</Amount>
          <Status>
            <MyButton color="#2a7ade" type="Pending" />
          </Status>
        </Tr>
        <Tr>
          <Td>
            <Image src={woman1} />
            <Username>Susan Carol</Username>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$125.21</Amount>
          <Status>
            <MyButton color="#3bb077" type="Approve" />
          </Status>
        </Tr>
      </Table>
    </Container>
  );
};

export default WidgetLarge;
