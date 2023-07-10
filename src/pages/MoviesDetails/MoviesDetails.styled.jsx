import styled from '@emotion/styled';

export const GoBackLink = styled.span`
  a {
    position: relative;
    padding-left: 12px;
  }

  a::before {
    content: '';
    display: block;

    border-color: yellowgreen;
    border-style: solid;
    border-width: 0 0 2px 2px;
    height: 6px;
    left: 0;
    position: absolute;
    width: 6px;
    margin-top: -4px;
    top: 50%;

    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  :hover,
  :focus {
    color: yellowgreen;
    a::before {
      border-color: white;
    }
  }
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const FilmImg = styled.img`
  max-width: 182px;
  background: #424242;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FilmDscr = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;

export const StyledListDscr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;
  padding: 0;

  border-radius: 20px;
  margin-bottom: 12px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;
`;
export const ListItem = styled.li`
  span {
    color: yellowgreen;
  }

  a:hover,
  a:focus,
  a:active {
    color: yellowgreen;
    span {
      color: white;
    }
  }
`;
