import React from 'react'
import Modal from "../ui/modal/Modal";
import {useModal} from "@/store/ModalContext";
import {Input} from "@/components/common/ui/form/Input";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall, registerApiCall} from "@/api/config/Author";
interface Props {
    onClose: () => void;
}

interface FormData {

    identifier: string;
    password: string | number;

}
export const LoginModal = ({onClose}: Props) => {

    const {openModal} = useModal();

    const {register, handleSubmit, formState: {errors}}= useForm<FormData>();

    const mutate = useMutation({mutationFn: loginApiCall})



    const onSubmit = (data: FormData) => {
        console.log("data", data);

        mutate.mutate(data, {onSuccess: (response)  => {
                console.log('response', response);
                window.localStorage.setItem("token", response.jwt);


            } })
    }

    return (
        <Modal closeModal={onClose} title={"login"}>
            <div onClick={()=> {openModal('register')}} className={"cursor-pointer text-center mb-8 rounded font-bold"}>Go To Register Modal</div>

            <form  onSubmit={handleSubmit(onSubmit)} className={"px-4 md:px-20"} autoComplete="off">


                <Input register={register('identifier', {required: "enter your username please" })} label={"userName"} errors={errors} placeholder={"enter your username"} />
                <Input register={register('password', {required: "Enter your password please", minLength:{value: 3, message:"min 3 character"}})} errors={errors} label={"Password"} placeholder={"Enter your password"}  type="password" />


                <button className={"mt-4 px-8 py-2 bg-green-400 rounded-md  text-white cursor-pointer"}>submit</button>
            </form>
        </Modal>
    )
}
