import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyB04tePxGTIlgGGkt7dUy_3dozKjfHxoG8';

// Create a new component. This component should produce some HTML.
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({ videos });
		});
	}

	render() {
		return (
      <div>
        <SearchBar />
      </div>
		);
	}
}

// Take this component's generated HTML and add it to the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
