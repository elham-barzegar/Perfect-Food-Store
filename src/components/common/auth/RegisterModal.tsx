import Modal from "../ui/modal/Modal";
import {useForm} from "react-hook-form";
import {Input} from "@/components/common/ui/form/Input";

interface Props {
    onClose: () => void;
}

export const RegisterModal = ({onClose}: Props) => {

    const {register, handleSubmit, formState: {errors}}= useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("data", data);

    }

    interface FormData {
        email: string;
        password: string | number;
        username: string;
    }

    return (
        <Modal closeModal={onClose} title={"register"}>
            <form  onSubmit={handleSubmit(onSubmit)} className={"px-4 md:px-20"} autoComplete="off">

                <Input register={register('username', {required: true})} label={"userName"} placeholder={"enter your username"} />
                <Input register={register('email', {required: true})} label={"Email"} placeholder={"Enter your Email address"}  type="email" />
                <Input register={register('password', {required: true, minLength:{value: 3, message:"min 3 character"}})} label={"Password"} placeholder={"Enter your password"}  type="password" />


                <button className={"mt-4 px-8 py-2 bg-green-400 rounded-md  text-white cursor-pointer"}>submit</button>
            </form>
        </Modal>

    )
}
