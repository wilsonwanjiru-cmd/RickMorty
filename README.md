# Rick & Morty App

## Overview
This project aims to build an app using the Rick & Morty API to retrieve information about locations, characters, and episodes. The app allows users to search for locations, view details about characters, and add persisted notes about characters.

## Technologies Used ##
  - React.js
  - GraphQL
  - Apollo Client
  - React Router
  - Axios
  - CSS (for styling)
  - [Rick & Morty API](https://rickandmortyapi.com/documentation/#graphql)

## Project Structure

The project structure is organized as follows:

RickMortyApp/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── CharacterDetails.js
│ │ ├── RickAndMortyData.js
│ │ └── ...
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ └── index.js
│
├── package.json
└── README.md

This structure provides a clear representation of the directory structure of your RickMortyApp project, including folders like "public" and "src" and their respective contents. You can paste this markdown directly into your README.md file to document your project structure.

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
   ```sh
   git clone <https://github.com/wilsonwanjiru-cmd/RickMorty>

Install dependencies:


npm install
or


yarn install


Start the development server:


npm start
or


yarn start

## Credits

- [Rick & Morty API](https://rickandmortyapi.com/documentation/#graphql)
  - for providing the data used in this project.

## Fetching Images and Enhanced Representation

To fetch images and enhance the representation of characters, modify the GraphQL query in `RickAndMortyData.js` as follows:

```jsx
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
        status
        image
      }
    }
  }
`;

This modified GraphQL query fetches character data including their names, statuses, and image URLs.


This format provides clear documentation for modifying the GraphQL query and explains its purpose within your project. 

To update the UI in `RickAndMortyData.js` to display character images along with their names and statuses and apply CSS styling to enhance the representation, modify the `Characters` component as follows:

```jsx
function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Characters</h2>
      <div className="characters-container">
        {data.characters.results.map(character => (
          <div key={character.name} className="character-card">
            <img src={character.image} alt={character.name} />
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
This modified component fetches character data and displays it with images, names, and statuses. Make sure to apply CSS styling to enhance the representation of character names and statuses.



