import React from 'react';
import logo from './logo.png';
import './loading.css';

const Loading = () => {
  return (
    <div className='flex-center'>
      <img className='spin' src={logo} alt="logo"/>
      <h1>Loading, please wait...</h1>
    </div>
  );
}

export default Loading;
