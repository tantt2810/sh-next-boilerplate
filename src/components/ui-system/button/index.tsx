import {
    Button,
    ButtonProps,
    ButtonTypeMap,
    ExtendButtonBase,
} from "@mui/material";

export interface ISHButtonProps extends ButtonProps {}
export const SHButton = (props: ISHButtonProps) => <Button {...props} />;
