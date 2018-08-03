import React, { Component } from 'react';
import YouTubeSearch from 'youtube-api-search';
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
const apiKey = "AIzaSyCmHOCM_3lAugykFJGiZoPB8y8v95wXhJk";

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	}

	componentDidMount() {
		this.runSearch("baby tigers");
	}

	runSearch = term => {
		YouTubeSearch({ key: apiKey, term: term }, videos => {
			this.setState({ 
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const throttledSearch = _.debounce(this.runSearch, 700);
		return (
			<Container>
				<Row>
					<Col md="12">
						<SearchBar runSearch={throttledSearch} />
					</Col>
				</Row>
				<Row>
					<Col md="8">
						<VideoDetail selectedVideo={this.state.selectedVideo} />
					</Col>
					<Col md="4">
						<VideoList 
							videos={this.state.videos}
							onVideoSelect={selectedVideo => this.setState({ selectedVideo })} 
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
