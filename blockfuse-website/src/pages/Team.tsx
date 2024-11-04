
import React from 'react';
import NewsLetters from '../components/NewsLetters';
import NextCohorts from '../components/NextCohorts';
import Gallery from '../components/Gallery';

const Team = () => {
  return (
    <div className="">
      <Gallery/>
      <NextCohorts />
      <NewsLetters />
    </div>
  );
}

export default Team;
