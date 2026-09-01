import clsx from "clsx"
import type {ComponentPropsWithoutRef} from "react"
import s from "./Button.module.css"

type Props = {
    variant?: "primary" | "secondary" | "outlined"
} & ComponentPropsWithoutRef<"button">

export const Button = ({variant = "primary", className, ...rest}: Props) => {
    return (
        <button className={clsx(s.button, s[variant], className)} {...rest} />
    )
}


//     <button
//     className={`${s.button}
// ${variant === "primary" ? s.primary : ""}
// ${variant === "secondary" ? s.secondary : ""}
// ${variant === "outlined" ? s.outlined : ""}
// ${className}
// `}
//     {...rest}
//     />