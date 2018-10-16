import fm from 'front-matter';
import marked from 'marked';
import React from 'react';
import PodcastAudio from "../components/PodcastAudio";
import PodcastVideo from "../components/PodcastVideo";
import TopNav from "../components/TopNav";

class BlogDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcast: null,
            podcastContent: ""
        };
    }

    componentDidMount() {

        try {
            const blogPath = require("./../podcasts/" + this.props.match.params.podcastId + ".md");

            fetch(blogPath)
                .then(response => { return response.text(); })
                .then(text => {
                    this.setState({
                        podcast: fm(text),
                        podcastContent: marked(fm(text).body)
                    });
                });

        } catch (e) {
            console.log(e);
        }

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {
                    this.state.podcast &&
                    <div>
                        <TopNav />
                        <PodcastAudio
                            title={this.state.podcast.attributes.title}
                            description={this.state.podcast.attributes.description}
                            image={this.state.podcast.attributes.coverImage}
                            link={this.state.podcast.attributes.refLink}
                        />
                        <div className="blog-container">
                        <div className="container">
                            <PodcastVideo
                                    audioLinks={this.state.podcast.attributes.audioLinks}
                                    webImage={this.state.podcast.attributes.webImage}
                            />
                        </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default BlogDetail;