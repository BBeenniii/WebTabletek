import React from 'react';
import TabletList from './TabletList';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Tablet List</h1>
      <TabletList />
    </div>
  );
};

export default Home;