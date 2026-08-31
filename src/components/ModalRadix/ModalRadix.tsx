import * as Dialog from "@radix-ui/react-dialog"
import {Cross2Icon} from "@radix-ui/react-icons"
import type {ReactNode} from "react"
import s from "./ModalRadix.module.css"

type Props = {
    open: boolean
    onOpenChange: () => void
    children: ReactNode
    modalTitle: string
}

export const ModalRadix = ({open, onOpenChange, children, modalTitle}: Props) => (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
            <Dialog.Overlay className={s.Overlay}/>
            <Dialog.Content className={s.Content}>
                <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
                <hr/>
                {children}
                <Dialog.Close asChild>
                    <button className={s.IconButton} aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
)

