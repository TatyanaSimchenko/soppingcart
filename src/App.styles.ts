import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
  margin: 0px 40px 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 85px;
  top: 20px;

  i {
    font-size: 45px;
    color: #58595c;
  }
`;