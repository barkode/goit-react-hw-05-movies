import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
`;
export const ListItem = styled.li`
  font-size: 14px;
  padding: 6px;
  background-color: #fff;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  p {
    color: grey;
  }

  span {
    color: #000000;
  }
`;
export const ReviewsDscr = styled.p`
  color: grey;
  margin-top: 6px;
`;
