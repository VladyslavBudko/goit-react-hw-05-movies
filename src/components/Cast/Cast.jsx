import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import RequestGallery from 'components/RequestGallery/RequestGallery';
// import { FALLBACK_CAST_IMAGE_PATH } from 'constants/urls';
import { fetchingCast, BASE_POSTER_URL } from 'components/Api/Api';

import {
  Container,
  ActorName,
  ActorImg,
  Character,
  ActorBox,
} from './Cast.styled';

const Cast = () => {
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieCast() {
      setStatus('pending');
      try {
        const castById = await fetchingCast(movieId);
        setCast(castById);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }
    setMovieCast();
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      <RequestGallery propStatus={status} />

      <div>
        {cast.map(({id, name, character, profile_path }) => (
            <Container key={id}>
              <ActorImg
                src={profile_path ? BASE_POSTER_URL + profile_path : 'No Photo'}
                alt={name}
                loading="lazy"
              />
              <ActorBox>
                <ActorName>{name}</ActorName>
                <Character>{character}</Character>
              </ActorBox>
            </Container>
        ))}
      </div>

      <h3>End Cast</h3>
    </>
  );
};

export default Cast;
