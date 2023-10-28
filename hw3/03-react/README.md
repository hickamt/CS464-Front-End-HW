# Todd Hickam | CS464P/564P | Fall 2023

Simple React Client application to display three views/pages relating the the Game Of Thrones Characters. Application uses the React Router to render only those page changes that are necessary rather than rendering a new page for each link followed.

## Install & Run App

This application was built with the following package manager versions:

1. node v18.18.0
2. npm v9.8.1
3. nvm v0.39.1

CLONE REPO:

```bash
git clone https://github.com/hickamt/CS464-Front-End-HW.git
```

CHANGE DIRECTORIES (OR, `$ cd ./NameYouGaveDirectory`):

```bash
cd CS464-Front-End-HW
```

(NPM) INSTALL DEPENDENCIES & RUN APPLICATION:

```bash
npm i -y && npm run dev
```

PORT:
```bash
running on: http://localhost:5173
```

## Game Of Thrones API

We are required to use `https://thronesapi.com/api/v2/Characters` an api that is known to have poorly written data such that names are misspelled or missing first, last, and family names.

This requires that the data is validated and cleaned before using it for user interaction and visualization.

## /LandingPage

- [Landing Page Component](./src/pages/LandingPage.jsx)

The primary landing page includes the title for Game Of Thrones (GOT) and a paginated card view of each GOT Character with full name and title if known.

## /Search

- [Search Component](./src/components/search/Search.jsx)

In the second view for /Search, the user has the ability to search for a character by name using a partial match algorithm to set an array of possible matches for the user to select with an onClick event. The selection of a character from the list will show a card view similar to the home page but only showing the selected character from the search.

## /Houses

- [House Component](./src/components/houses/Houses.jsx)

Finally, a view for Houses allows a user to view the number of characters in GOT that belong to the same family name. As an example, the Stark family name is associated with ten characters while Mormont has two. This data is visualized in a doughnut chart using react-chartjs-2.
