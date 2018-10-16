import React from 'react';
import videos from "./../data/videos-links.json";
import Slider from "react-slick";
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

const styles = {
    dialogPaper: {
        minHeight: '50vh',
        maxHeight: '50vh',
    },
    MuiDialogContentroot45: {
        padding: 0
    }
}



class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: videos,
            videoLinkSet: "",
            dataTargetSet: "",
            open: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClickOpen = (videoLinks) => {
        this.setState({
            open: true,
            videoLinkSet: videoLinks
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { fullScreen, classes } = this.props;
        var settings = {
            responsive: [
                {
                    breakpoint: 767, settings: {
                        dots: false,
                        slidesToShow: 1,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true
                    }
                },

                {
                    breakpoint: 959, settings: {
                        dots: false,
                        slidesToShow: 2,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true,
                        slidesToScroll: 3,
                        autoplaySpeed: 5e3,
                    }
                },
                {
                    breakpoint: 1441, settings: {
                        dots: false,
                        slidesToShow: 3,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 100000, settings: {
                        dots: false,
                        slidesToShow: 3,
                        initialSlide: 0,
                        swipeToSlide: false,
                        touchMove: false,
                        draggable: false,
                        slickGoTo: 0
                    }
                }
            ]
        };
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/sales-home-cover.png" className="img-fluied" alt="cover" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Videos</h1>
                                        <p>Prospecting videos with a twist of Ryan O’Hara.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <section className="mt-5">
                    <div className="container">
                        <Slider {...settings}>
                            {
                                this.state.videos.map((video, index) => {
                                    return (
                                        <div className="p-4" key={index} >
                                            <a onClick={this.handleClickOpen.bind(this, video.videoLinks)}>
                                                <img src={video.webLinks} alt={video.title} className="img-fluied" />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </Slider>

                        <Dialog
                            fullScreen={fullScreen}
                            fullWidth={true}
                            maxWidth={'md'}
                            open={this.state.open}
                            onClose={this.handleClose.bind(this)}
                            aria-labelledby="responsive-dialog-title"
                            classes={{ paper: classes.dialogPaper }}
                        >
                            <DialogContent style={{ padding: "0" }}>
                                <iframe src={this.state.videoLinkSet} className="iframeVideo" title="video" allowscriptaccess="always"></iframe>
                            </DialogContent>

                        </Dialog>
                    </div>
                </section>
            </div>
        );
    }
}

export default withStyles(styles)(Videos);