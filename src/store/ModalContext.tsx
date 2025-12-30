import React, {useContext, useState} from "react";
import {createContext} from "react";


interface Props {
    children: React.ReactNode;
}

type modalType =  "login" | "register" | null

interface ContextProps {
    currentModal: modalType;
    closeModal: () => void;
    openModal: (modalName: modalType) => void;
}

const ModalContext = createContext<ContextProps>({currentModal: null, openModal: () => {}, closeModal: () => {}})

export const useModal = () => useContext(ModalContext);



export const ModalContextProvider = ({children}: Props) => {

    const[showModal, setShowModal] = useState<modalType>(null);

    const openModal = (modalName: modalType ) => {
        setShowModal(modalName);
    }


    const closeModal = () => {
        setShowModal(null);
    }




    return (
        <ModalContext.Provider value={{currentModal : showModal, openModal: openModal, closeModal: closeModal}} >
            {children}
        </ModalContext.Provider>
    )
}
