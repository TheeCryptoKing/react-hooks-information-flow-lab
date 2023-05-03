import React from 'react';

// Create a Header component by refactoring the <header> element out of the App component. Clicking on the <button> inside of the Header component should still toggle dark mode on and off.
// You will need to pass a callback function as a prop called onDarkModeClick to the Header component in order for the test to pass.

export default function Header({ isDarkMode, onDarkModeClick }) {
   //Have to pass props inside of function to become accesible?

    return (
    <div>
         <header>
        <h2>Shopster</h2>
          <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    </div>
  );
}

