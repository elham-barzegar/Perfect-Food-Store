import Modal from "../ui/modal/Modal";
import {useForm} from "react-hook-form";
import {Input} from "@/components/common/ui/form/Input";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/config/Author";
import React from "react";

interface Props {
    onClose: () => void;
}

export const RegisterModal = ({onClose}: Props) => {

    const {register, handleSubmit, formState: {errors}}= useForm<FormData>();

    const mutate = useMutation({mutationFn: registerApiCall})



    const onSubmit = (data: FormData) => {
        console.log("data", data);

        mutate.mutate(data, {onSuccess: (response)  => {
                console.log('response', response);
                window.localStorage.setItem("token", response.jwt);


            } })
    }

    interface FormData {
        email: string;
        password: string | number;
        username: string;
    }

    return (
        <Modal closeModal={onClose} title={"register"}>
            <form  onSubmit={handleSubmit(onSubmit)} className={"px-4 md:px-20"} autoComplete="off">
                <Input register={register('username', {required: "enter your username please" })} label={"userName"} errors={errors} placeholder={"enter your username"} />
                <Input register={register('email', {required: "Enter your Email please"})} label={"Email"} errors={errors} placeholder={"Enter your Email address"}  type="email" />
                <Input register={register('password', {required: "Enter your password please", minLength:{value: 3, message:"min 3 character"}})} errors={errors} label={"Password"} placeholder={"Enter your password"}  type="password" />



                <button className={"mt-4 px-8 py-2 bg-green-400 rounded-md  text-white cursor-pointer"}>submit</button>
            </form>
        </Modal>

    )
}
