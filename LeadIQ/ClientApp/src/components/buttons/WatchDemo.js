﻿import React from 'react';
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


class WatchDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    
    render() {
        const { fullScreen, classes } = this.props;
        return (
            <div>
                <a className={"mt-2 text-white btn liq-btn-secondary button-design liq-btn-primary-" + this.props.size} onClick={this.handleClickOpen.bind(this)}>WATCH DEMO</a>
                    <Dialog
                    fullScreen={fullScreen}
                    fullWidth={true}
                    maxWidth={'md'}
                    open={this.state.open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="responsive-dialog-title"
                    classes={{ paper: classes.dialogPaper }}
                    >
                    <DialogContent style={{padding: "0"}}>
                        <iframe src="https://www.youtube.com/embed/yvGc5HPeAYo" className="iframeVideo" title="video" allowscriptaccess="always"></iframe>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(WatchDemo);