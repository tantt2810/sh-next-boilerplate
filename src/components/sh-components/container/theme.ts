import { Components, Theme } from "@mui/material";
export const muiContainerTheme: Pick<
    Components<Omit<Theme, "components">>,
    "MuiContainer"
> = {
    MuiContainer: {},
};
