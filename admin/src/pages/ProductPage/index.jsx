import React from "react";
// React Router
import { Link } from "react-router-dom";
// ReCharts
import Chart from "../../components/Chart";
import { productData } from "../../chartData";
// Material UI Icons
import { Publish } from "@material-ui/icons";
// Styled Components
import {
  AddButton,
  Container,
  Form,
  FormLeft,
  FormRight,
  InfoBottom,
  InfoImage,
  InfoItem,
  InfoTop,
  Input,
  Label,
  Option,
  ProductBottom,
  ProductButton,
  ProductKey,
  ProductName,
  ProductTop,
  ProductValue,
  Select,
  Title,
  TitleContainer,
  TopLeft,
  TopRight,
  UploadContainer,
  UploadImage,
  UploadInput,
  UploadLabel,
} from "./ProductPage.styles";

const ProductPage = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newProduct">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <ProductTop>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImage
              src="https://www.mytrendyphone.eu/images/Apple-Airpods-2-with-Charging-Case-MV7N2ZM-A-0190199098572-13092019-01-p.jpg"
              alt=""
            />
            <ProductName>Apple Airpods</ProductName>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <ProductKey>id:</ProductKey>
              <ProductValue>123</ProductValue>
            </InfoItem>
            <InfoItem>
              <ProductKey>sales:</ProductKey>
              <ProductValue>2233</ProductValue>
            </InfoItem>
            <InfoItem>
              <ProductKey>active:</ProductKey>
              <ProductValue>yes</ProductValue>
            </InfoItem>
            <InfoItem>
              <ProductKey>in stock:</ProductKey>
              <ProductValue>no</ProductValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </ProductTop>
      <ProductBottom>
        <Form>
          <FormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder="Apple Airpods" />
            <Label>In Stock</Label>
            <Select name="inStock" id="inStock">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
            <Label>Active</Label>
            <Select name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <UploadContainer>
              <UploadImage
                alt=""
                src="https://www.mytrendyphone.eu/images/Apple-Airpods-2-with-Charging-Case-MV7N2ZM-A-0190199098572-13092019-01-p.jpg"
              />
              <UploadLabel for="file">
                <Publish />
              </UploadLabel>
              <UploadInput id="file" type="file" />
            </UploadContainer>
            <ProductButton>Update</ProductButton>
          </FormRight>
        </Form>
      </ProductBottom>
    </Container>
  );
};

export default ProductPage;
