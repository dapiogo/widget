import React from "react";
import Wrapper from "./Wrapper";
import Box from "./Box";
import Form from "../Form";
import Header from "./Header";
import Title from "../Title";
import Paragraph from "../Paragraph";

const Container = () => {
  return (
    <Wrapper>
      <Box>
        <Header>
          <Title small>hotel pricelist</Title>
          <Paragraph>Please choose dates and quest informations</Paragraph>
          <Form />
        </Header>
      </Box>
    </Wrapper>
  );
};
export default Container;
