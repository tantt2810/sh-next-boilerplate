import { Components, Theme } from "@mui/material";
export const muiButtonTheme: Pick<
    Components<Omit<Theme, "components">>,
    "MuiButton"
> = {
    MuiButton: {
        defaultProps: {
            style: {
                borderRadius: 0,
                boxShadow: "none",
            },
        },
    },
};
