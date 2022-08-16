import { Typography, TypographyProps } from "@mui/material";

export type TypographyProps = TypographyProps;
export const SHTypography = (props: TypographyProps): JSX.Element => (
    <Typography {...props} />
);
