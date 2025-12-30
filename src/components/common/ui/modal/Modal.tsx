import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Portal from "@/components/common/ui/portal/Portal";

interface Props{
    children: React.ReactNode;
    closeModal: () => void;
    title: string;
}



const Modal = ({children, closeModal, title}: Props) => {
    return (
        <Portal onClose={closeModal}>
            <div className=" z-10 left-[50%] top-[50%] min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] overflow-scroll border rounded bg-gray-100">
                <div className="flex justify-between rounded bg-white p-8 text-[22px]">
                    <div onClick={closeModal} className="cursor-pointer">
                        <AiOutlineClose />

                    </div>
                    {title}
                </div>
                <div className="p-8 text-[18px]">
                    {children}
                </div>
            </div>

        </Portal>
    )
}
export default Modal;