import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Form, Input, SearchButton, ErrorMessage } from './SearchMovie.styled';


const SearchMovie = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { inputMovie: '' } });

  const formHandleSubmit = ({ inputMovie }) => {
    onSubmit(inputMovie);
    reset();
  };

  return (
    <div>
    {/* <Box position="relative" display="inline-block"> */}
      <Form autoComplete="off" onSubmit={handleSubmit(formHandleSubmit)}>
        <Input
          type="text"
          {...register('inputMovie', { required: 'This field is required!' })}
          autoFocus
        />
        {/* <SearchButton type="submit">
          <MdMovieFilter size={40} />
        </SearchButton> */}
      </Form>
      <ErrorMessage>{errors.inputMovie?.message}</ErrorMessage>
    {/* </Box> */}
    </div>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
