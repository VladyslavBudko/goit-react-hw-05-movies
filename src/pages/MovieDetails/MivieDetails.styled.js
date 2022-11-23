import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 30px;
`
export const MovieImg = styled.img`
  width: 450px;
`;