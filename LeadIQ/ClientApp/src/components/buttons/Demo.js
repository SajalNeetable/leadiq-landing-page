import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
const styles = {
    MuiDialogContentroot45: {
        padding: 0
    },
    dialogPaper: {
        overflow: 'hidden',
    },
    ComponentDialogPaper1: {
        minHeight: 0,
        maxHeight: 0
    },
    DialogContent: {
        padding: 0,
        paddingTop: 0
    },
    root: {
        marginTop: '-10px',
        marginLeft: '-5px',
        marginRight: '-5px'
    }
}
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            open: false,
            iframeHeight: 0
        };
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { fullScreen, classes } = this.props;
        return (
            <div>
                <div className={"mt-2 btn liq-btn-secondary button-design liq-btn-primary-" + this.props.size}
                    onClick={this.handleClickOpen.bind(this)}>GET A DEMO</div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="responsive-dialog-title"
                    className={classes.root}
                    style={{ paddingTop: "0px" }}
                >
                    <DialogContent className={classes.DialogContent} style={{marginTop: "-10px", paddingTop: "0px"}}>
                        <div className="modal-body">
                            <iframe id="frame" src="https://leadiq.chilipiper.com/router/talk-to-sales" className="lightboxDesign"></iframe>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
export default (withStyles(styles)(Demo)); 