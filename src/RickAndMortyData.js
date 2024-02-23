import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;

function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {data.characters.results.map(character => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

const GET_LOCATION = gql`
  query GetLocation {
    location(id: 1) {
      id
    }
  }
`;

function Location() {
  const { loading, error, data } = useQuery(GET_LOCATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Location</h2>
      <p>ID: {data.location.id}</p>
    </div>
  );
}

const GET_EPISODES = gql`
  query GetEpisodes {
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

function Episodes() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Episodes</h2>
      <ul>
        {data.episodesByIds.map(episode => (
          <li key={episode.id}>{episode.id}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Rick & Morty App</h1>
      <Characters />
      <Location />
      <Episodes />
    </div>
  );
}

export default App;
