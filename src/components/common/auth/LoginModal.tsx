import React from 'react'
import Modal from "../ui/modal/Modal";
interface Props {
    onClose: () => void;
}

const LoginModal = ({onClose}: Props) => {
    return (
        <Modal closeModal={onClose} title={"login"}>
            <form>

            </form>
        </Modal>

    )
}
export default LoginModal;