import ReactDom from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}> {props.children}</div>
		</div>
	);
};

const portalElem = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<>
			{ReactDom.createPortal(<Backdrop />, portalElem)}
			{ReactDom.createPortal(<ModalOverlay>{props.children} </ModalOverlay>, portalElem)}
		</>
	);
};

export default Modal;
