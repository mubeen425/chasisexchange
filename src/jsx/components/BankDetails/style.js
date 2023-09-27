import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  background-color: white;
  border-radius: 12px;

  /* background-color: red; */
  .form-control {
    margin-top: 20px;
  }
  .form-actions {
    margin-top: 20px;
  }

  .App-payment {
    /* background-color: blue; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
