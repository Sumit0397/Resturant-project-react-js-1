import ReactDom from 'react-dom';
import classes from './Modal.module.css';
import { Fragment } from 'react';

const Backdrop = (props) => {
    return (<div className={classes.backdrop}/>)
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop/>,portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal
