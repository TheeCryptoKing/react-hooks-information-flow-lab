import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";


// import Header from "./Header"
// Which components should hold state? 
// Which components need access to that state?
// How can we update state in one component from a child component?

// For information to propagate down the component tree, parents pass props to their children
// For information to propagate up the component tree, we typically invoke callbacks that were passed from parents to children as props
// Components of the same level (sibling components) cannot communicate directly! We can only communicate up and down the component tree. So if multiple components need to share the same information, that state should live in the parent component (or a more general ancestor).


function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

    function onDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      } 

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        {/*  How does this work? why do i have to set it here if already set in Header? */}
        {/* Only gonna exsist in app so we need to bring and intialize so data from header can be read  */}
        <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick}/>
        <ShoppingList items={itemData} />
    </div>
  );
}

export default App;