import React, {Dispatch, SetStateAction} from 'react'
import Modal from "../ui/modal/Modal";
interface Props {
    onClose: () => void;
    setShowModal: Dispatch<SetStateAction<"login" | "register" | null>>;
}

const LoginModal = ({onClose, setShowModal}: Props) => {
    return (
        <Modal closeModal={onClose} title={"login"}>
            <form>

            </form>
            <span onClick={()=> {setShowModal('register')}} className={"cursor-pointer"}>Go To Register Modal</span>
        </Modal>

    )
}
export default LoginModal;