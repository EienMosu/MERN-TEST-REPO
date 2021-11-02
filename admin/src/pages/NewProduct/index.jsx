import React from "react";
// Styled Components
import {
  Button,
  Container,
  Form,
  FormItem,
  Input,
  Label,
  Option,
  Select,
  Title,
} from "./NewProduct.styles";

const NewProduct = () => {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <FormItem>
          <Label>Image</Label>
          <Input type="file" style={{ border: "none" }} />
        </FormItem>
        <FormItem>
          <Label>Product Name</Label>
          <Input type="text" placeholder="Apple Airpods" />
        </FormItem>
        <FormItem>
          <Label>Stock</Label>
          <Input type="text" placeholder="123" />
        </FormItem>
        <FormItem>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </FormItem>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
