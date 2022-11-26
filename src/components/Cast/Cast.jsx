import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import RequestGallery from 'components/RequestGallery/RequestGallery';
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
        console.log('Sorry! No cast was found');
        setStatus('rejected');
      }
    }
    setMovieCast();
  }, [movieId]);

  return (
    <>
      <RequestGallery propStatus={status} />
      <div>
        {cast.map(({ id, name, character, profile_path }) => (
          <Container key={id}>
            <ActorImg
              width="200px"
              height="300px"
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
    </>
  );
};

export default Cast;
