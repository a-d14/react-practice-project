import React from 'react';
import ReactDOM from 'react-dom';

import styles from './ErrorModal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

function ErrorModal(props) {

    const closeModal = () => {
        props.setShowModal(false);
    }

    const Backdrop = () => {
        return <div className={styles.backdrop}></div>;
    }

    const ModalOverlay = () => {
        return (
            <div className={styles.modal}>
                <Card>
                    <div className={styles['modal-header']}>
                        <p className={styles['modal-header__para']}>Error</p>
                    </div>
                    <div className={styles['modal-body']}>
                        <p>Hello</p>
                        <p>{props.errorMsg}</p>
                    </div>
                    <div className={styles['actions']}>
                        <Button msg="Close" onClick={closeModal}/>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))};
            {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))};
        </React.Fragment>
    );
}

export default ErrorModal;