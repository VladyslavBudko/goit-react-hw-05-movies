// import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Form, Input, SearchButton, ErrorMessage } from './SearchMovie.styled';

const SearchMovie = ({ onChange }) => {
  return (
    <Form>
      <Input type="text" onChange={e => onChange(e.target.value)} />
    </Form>
  );
};


export default SearchMovie;

SearchMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};
