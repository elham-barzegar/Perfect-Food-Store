import Modal from "../ui/modal/Modal";
interface Props {
    onClose: () => void;
}

export const RegisterModal = ({onClose}: Props) => {
    return (
        <Modal closeModal={onClose} title={"register"}>
            <form>

            </form>
        </Modal>

    )
}
