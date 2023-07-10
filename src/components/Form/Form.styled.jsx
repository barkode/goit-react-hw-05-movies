import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 15px 16px;

  color: grey;

  border-radius: 10px;
  border: none;

  :active,
  :focus,
  :hover {
    color: black;
    border: none;
  }
`;

export const ButtonSearch = styled.button`
  margin-left: 24px;
  padding: 25px 30px;
  background-color: #0665a2;
  color: #03e9f4;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
