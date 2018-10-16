import React from 'react';
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

class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            videoLinkSet: ""
        };
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
        return (
            <div className="col-md-6 col-lg-4 d-flex" key={this.props.video.title}>
                <div className="card mt-5 flex-fill">
                    <a onClick={this.handleClickOpen.bind(this, this.props.video.videoLinks)}>
                        <img src={this.props.video.webLinks} alt={this.props.video.title} className="img-fluied" />
                    </a>

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
                            <iframe src={this.props.video.videoLinks} title={this.props.video.title} className="iframeVideo" id="video" allowscriptaccess="always"></iframe>
                        </DialogContent>

                    </Dialog>

                    <div className="card-body">
                        <p className="liq-text-primary">{this.props.video.title}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(VideoCard);