import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import API_KEY from './api_key.js';

// Create a new component. This component should produce some HTML.
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

		return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
				<VideoDetail video={this.state.selectedVideo}/>
        <VideoList
					videos={this.state.videos}
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
				/>
      </div>
		);
	}
}

// Take this component's generated HTML and add it to the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
