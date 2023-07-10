import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  margin-top: 12px;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 16px;

  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    color: #111111;
  }

  a {
    display: block;
    padding: 4px 4px;
  }
`;
