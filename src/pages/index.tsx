import { Anime } from '@shineiichijo/marika'; // const { Anime, Character, Manga } = require("@shineiichijo/marika")
import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Header } from '../components/organisms/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1>BAIANOR</h1>
    </>
  );
};

export default Home;
