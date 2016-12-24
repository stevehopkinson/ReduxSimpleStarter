import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import API_KEY from './api_key.js';

// Create a new component. This component should produce some HTML.
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
      <div>
        <SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} callback={ selectedVideo => this.setState({ selectedVideo }) } />
      </div>
		);
	}
}

// Take this component's generated HTML and add it to the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
