import {ModalRadix} from "../ModalRadix/ModalRadix"

type Props = {
    open: boolean
    onOpenChange: () => void
}

export const DeletePostModal = ({open, onOpenChange}: Props) => {
    return (
        <ModalRadix open={open} onOpenChange={onOpenChange} modalTitle={"Delete Post"}>
            Are you sure you want to delete this post?
            <div>
                <button onClick={onOpenChange}>Yes</button>
                <button onClick={onOpenChange}>No</button>
            </div>
        </ModalRadix>
    )
}