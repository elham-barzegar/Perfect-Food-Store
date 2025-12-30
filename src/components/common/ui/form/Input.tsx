import React, {useId} from 'react'
import {UseFormRegisterReturn, FieldErrors} from "react-hook-form";
import {ErrorMessage} from "@/components";

interface Props {
    type?: "text" | "password" | "email" | "number" | "tel";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>
    errors: FieldErrors<any>

}


export const Input = ({type = "text", label, placeholder = "", register, errors}: Props) => {

    let id = useId();
    const name = register.name
    let hasError = false;
    if (errors && errors[name]){
        hasError = true;
    }

    return (
       <div className={"mb-8"}>
           <div className={"flex flex-col items-start gap-2"}>
               {label && <label className={"w-full font-bold"} htmlFor={id}>{label}: </label>}
               <input className={`w-full p-4 rounded-lg border ${hasError && 'border-red'}`}  id={id} { ... register} type={type} placeholder={placeholder} />
           </div>
           <ErrorMessage errors={errors} name={name}/>
       </div>
    )
}
