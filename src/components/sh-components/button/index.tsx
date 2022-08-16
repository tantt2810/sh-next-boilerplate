import { Button, ButtonProps } from "@mui/material";

export type SHButtonProps = ButtonProps;
export const SHButton = (props: SHButtonProps): JSX.Element => (
    <Button {...props} />
);
