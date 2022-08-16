import { createTheme } from "@mui/material";
import { palette } from "src/theme/color";
import { muiButtonTheme } from "@components/sh-components/button/theme";
import { muiContainerTheme } from "@components/sh-components/container/theme";
import { muiGridTheme } from "@components/sh-components/grid/theme";
import { muiImageListTheme } from "@components/sh-components/image-list/theme";
import { muiStackTheme } from "@components/sh-components/stack/theme";
import { muiTypographyTheme } from "@components/sh-components/typography/theme";

export const theme = createTheme({
    palette,
    components: {
        ...muiButtonTheme,
        ...muiContainerTheme,
        ...muiGridTheme,
        ...muiImageListTheme,
        ...muiStackTheme,
        ...muiStackTheme,
        ...muiTypographyTheme,
    },
});
