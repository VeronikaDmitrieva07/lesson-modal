import {useState} from "react"
import {Modal} from "../Modal/Modal"

export const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    const onClose = () => setShowModal(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Cart</button>
            {<Modal open={showModal} onClose={onClose} modalTitle={"Cart"}>
                <ul>
                    <li>1 товар</li>
                    <li>2 товар</li>
                    <li>3 товар</li>
                </ul>
            </Modal>}
        </>
    )
}