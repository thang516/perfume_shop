import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Endow } from './components/content/Endow';
import { Advertisement } from './components/content/advertisement/Advertisement';
import { ScentGroup } from './components/content/scentgroup/ScentGroup';
import { UniqueMark } from './components/content/uniquemark/UniqueMark';
import { Collection } from './components/content/collection/Collection';
import { News } from './components/content/news/News';
import { Policy } from './components/content/policy/Policy';
import { Footer } from './components/footer/Footer';

function App() {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 23, 59, 59).toISOString();
  return (
    <>
      <Header />
      <Endow/>
      <Advertisement targetDate={targetDate}/>
      <ScentGroup/>
      <UniqueMark/>
      <Collection/>
      <News/>
      <Policy/>
      <Footer/>
    </>
  );
}

export default App;
