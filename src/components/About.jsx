import React from 'react';

const About = () => {
  return (
    <div className='App-about'>
      <div className='Info-blockl'>
        <img src='/public/images/icon1.png' alt='tool' />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className='Info-block'>
        <img src='/public/images/icon2.png' alt='components' />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className='Info-block'>
        <img src='/public/images/icon3.png' alt='monitor' />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className='Info-block'>
        <img src='/public/images/icon4.png' alt='jsx-file' />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
};

export default About;
