import { useState } from 'react';
import { InputSearch, ButtonSearch, FormContainer } from './Form.styled';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          placeholder="Movie name"
          autoFocus
          value={query}
          onChange={handleSearchParams}
        />
        <ButtonSearch type="submit" disabled={!query}>
          Search
        </ButtonSearch>
      </form>
    </FormContainer>
  );
};

export default Form;
