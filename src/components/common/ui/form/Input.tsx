import React, {useId} from 'react'
import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    type?: "text" | "password" | "email" | "number" | "tel";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>
}


export const Input = ({type = "text", label, placeholder = "", register}: Props) => {

    let id = useId();

    return (
        <div className={"flex flex-col items-start gap-2 mb-8"}>
            {label && <label className={"w-full font-bold"} htmlFor={id}>{label}: </label>}
            <input className={"w-full p-4 rounded-lg border"} id={id} { ... register} type={type} placeholder={placeholder} />
        </div>
    )
}
