import {Button} from "../Button/Button"
import {ModalRadix} from "../ModalRadix/ModalRadix"

type Props = {
    open: boolean
    onOpenChange: () => void
}

export const DeletePostModal = ({open, onOpenChange}: Props) => {
    return (
        <ModalRadix open={open} onOpenChange={onOpenChange} modalTitle={"Delete Post"} size={"md"}>
            Are you sure you want to delete this post?
            <div>
                <Button onClick={onOpenChange}>Yes</Button>
                <Button onClick={onOpenChange}>No</Button>
            </div>
        </ModalRadix>
    )
}