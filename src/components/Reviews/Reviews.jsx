import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import RequestGallery from 'components/RequestGallery/RequestGallery';
import { fetchingReviews } from 'components/Api/Api';

import { Container, AuthorName, Content } from './Reviews.styled';

const Reviews = () => {
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieReviews() {
      setStatus('pending');
      try {
        const reviewsById = await fetchingReviews(movieId);
        setReviews(reviewsById);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }
    setMovieReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      <RequestGallery propStatus={status} />

      <div>
        {reviews.map(({ id, author, content }) => (
          <Container key={id}>
            <AuthorName>{author}</AuthorName>
            <Content>{content}</Content>
          </Container>
        ))}
      </div>
    </>
  );
};
export default Reviews;
