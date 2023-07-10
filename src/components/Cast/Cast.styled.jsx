import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;
export const Card = styled.li`
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  min-width: 182px;
  font-size: 14px;
  padding: 4px;
  max-width: min-content;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
    border-radius: 8px;
  }
  span {
    color: black;
  }
  p {
    color: grey;
  }
`;
