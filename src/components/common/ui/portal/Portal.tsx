import React, {useEffect} from 'react'
import {createPortal} from "react-dom";
interface Props {
    children: React.ReactNode;
    onClose?: () => void;
}
const Portal = ({children, onClose}: Props) => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, []);

    return createPortal(
        <div className={"fixed inset-0 bg-[#efefef] z-10 bg-opacity-80 flex justify-center items-center"} onClick={onClose}>
            <div className={""} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
    document.getElementById("portal")!
    )
}
export default Portal;