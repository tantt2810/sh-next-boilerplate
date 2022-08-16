import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";

export interface ISHButtonProps
    extends ExtendButtonBase<ButtonTypeMap<{}, "button">> {}
export const SHButton = (props: ISHButtonProps) => <Button {...props} />;
