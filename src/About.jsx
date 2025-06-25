import React from 'react';
import { useSelector } from 'react-redux';

function About() {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>About Page</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default About;
