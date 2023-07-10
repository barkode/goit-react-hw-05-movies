import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  text-align: center;
  color: #20293f;
  /* box-shadow: 0 5px 0px -2px #20293f; */
  text-align: center;
  animation: fadein 1.2s ease-in;
`;

export const NotFoundPageTitle = styled.h1`
  font-size: 10.5em;
  text-shadow: 0 6px 1px rgba(0, 0, 0, 0.0980392),
    0 0 5px rgba(0, 0, 0, 0.0980392), 0 1px 3px rgba(0, 0, 0, 0.298039),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.247059),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.14902);
  margin: 0;
`;

export const NotFoundPageText = styled.p`
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5), 0px 6px 20px rgba(0, 0, 0, 0.3);
  font-weight: 400;

  @keyframes fadein {
    0% {
      margin-top: -50px;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NotFoundPageLink = styled(NavLink)`
  font-size: 18px;
  color: yellowgreen;
  margin-top: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
