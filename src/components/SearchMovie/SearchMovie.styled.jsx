import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
  min-width: 500px;
  font-size: 20px;
  color: black;

  // background-color: pink;

`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 50%;
  transform: translate(10%, 50%);
  pointer-events: none;
`;
