import React from 'react';
import Header from '../Layouts/Header';
import Main from '../Layouts/Main';
import './HomePage.css'
function HomePage() {
  return (
    <div >
      <Header />
      <div className="main-container">
        <Main />
      </div>
    </div>
  );
}

export default HomePage;