import React from "react"
// import { NotificationStack } from "react-notification"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from "react-redux"
import { removeNotification } from "./notification.actions"
import { barStyleFactory } from "./notification.styles"
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

@connect((store) => ({
    notifications: store.notificationReducer.notifications
}))

export class NotificationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true, vertical: 'top', horizontal: 'right'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick = () => {
        this.state.open = true;
    }
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.state.open = false;
        this.props.dispatch(removeNotification(reason));
    }

    render() {
        const { notifications } = this.props
        const {vertical, horizontal} = this.state

        const action = (
            <React.Fragment>
              <Button color="secondary" size="small" onClick={(e) => this.handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={(e) => this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          );

        return (
            <div>
                {notifications.map((notification) => 
                    <Snackbar key={notification.key} open={this.state.open} autoHideDuration={6000} onClose={(e) => this.handleClose(e, notification.key)}
                    anchorOrigin={{ vertical, horizontal }}
                    message={notification.message} action={action}
                     />
                )}
                    
                {/* <NotificationStack
                    notifications={ notifications }
                    onDismiss={ notification => this.props.dispatch(removeNotification(notification.key)) }
                    barStyleFactory={ barStyleFactory }
                    activeBarStyleFactory={ barStyleFactory }
                /> */}
            </div>
        )
    }

}
