import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    margin-left: 3em;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Typography variant="h2">台大日K社 自製KTV列表</Typography>
    </Wrapper>
  );
};
export default Header;
