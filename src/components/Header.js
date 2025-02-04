// src/components/Header.js

import React from 'react';

function Header({ onDarkModeClick }) {
  return (
    <header>
      <button onClick={onDarkModeClick}>Toggle Mode</button>
    </header>
  );
}

export default Header;
