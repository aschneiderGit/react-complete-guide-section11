import style from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = () => {
	return <div className={style.backdrop} />;
};
const ModalOverlay = (props) => {
	return (
		<div className={style.modal}>
			<div className={style.content}>{props.children}</div>
		</div>
	);
};
function Modal(props) {
	const portalDiv = document.getElementById('modal');
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalDiv)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalDiv
			)}
		</>
	);
}

export default Modal;
