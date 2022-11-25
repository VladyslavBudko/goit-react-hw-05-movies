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
`;

// export const SearchButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 10px;
//   transform: translateY(20%);

//   padding: 0;
//   color: white;
//   background-color: transparent;

//   cursor: pointer;

//   :hover,
//   :focus {
//     color: red;
//   }
// `;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 50%;
  transform: translate(10%, 50%);
  pointer-events: none;
`;
