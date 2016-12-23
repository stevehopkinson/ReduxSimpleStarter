import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'search_bar';

const API_KEY = `AIzaSyB04tePxGTIlgGGkt7dUy_3dozKjfHxoG8`;

// Create a new component. This component should produce some HTML.
const App = () => <div>Hello world!</div>;

// Take this component's generated HTML and add it to the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
