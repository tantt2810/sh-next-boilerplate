import { createTheme } from "@mui/material";
import { palette } from "src/theme/color";
import { muiButtonTheme } from "ui-system/button/theme";

export const theme = createTheme({
    palette,
    components: {
        ...muiButtonTheme,
    },
});
