import React from 'react'
import Modal from "../ui/modal/Modal";
import {useModal} from "@/store/ModalContext";
interface Props {
    onClose: () => void;
}

export const LoginModal = ({onClose}: Props) => {

    const {openModal} = useModal();

    return (
        <Modal closeModal={onClose} title={"login"}>
            <form></form>
            <span onClick={()=> {openModal('register')}} className={"cursor-pointer mx-auto  bg-blue-100 px-8 py-2 rounded font-bold"}>Go To Register Modal</span>
        </Modal>
    )
}
