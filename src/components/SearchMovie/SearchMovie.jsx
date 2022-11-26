import PropTypes from 'prop-types';
import { Form, Input } from './SearchMovie.styled';

const SearchMovie = ({ onChange, value }) => {
  return (
    <Form>
      <Input type="text" 
      value={value}
      onChange={e => onChange(e.target.value)} />
    </Form>
  );
};


export default SearchMovie;

SearchMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};
