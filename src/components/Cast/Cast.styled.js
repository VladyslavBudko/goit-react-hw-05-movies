import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 30px;
`;

export const ActorImg = styled.img`
  width: 200px;
  height: 300px;
`;

export const ActorBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  alignitems: center;
`;

export const ActorName = styled.span`
//   display: inline-block;
  text-align: center;
  padding: 10px;
  color: red;
`;

export const Character = styled.span`
//   display: inline-block;
  text-align: center;
  padding: 10px;
  font-style: italic;
  color: blue;
`;
