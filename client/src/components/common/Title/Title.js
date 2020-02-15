import React from 'react';

const Title = ({ children }) => (
  <h4>
    {children}
    {` ${new Date(Date.now()).toLocaleDateString()}`}
  </h4>
);

export default Title;
