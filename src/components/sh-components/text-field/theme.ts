import { Components, Theme } from "@mui/material";
export const muiTextFieldTheme: Pick<
    Components<Omit<Theme, "components">>,
    "MuiTextField"
> = {
    MuiTextField: {},
};
