import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Endow } from './components/content/Endow';
import { Advertisement } from './components/content/advertisement/Advertisement';

function App() {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 23, 59, 59).toISOString();
  return (
    <>
      <Header />
      <Endow/>
      <Advertisement targetDate={targetDate}/>
    </>
  );
}

export default App;
