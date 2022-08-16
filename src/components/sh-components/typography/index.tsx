import { Typography, TypographyProps } from "@mui/material";

export interface ITypographyProps extends TypographyProps {}
export const SHTypography = (props: ITypographyProps) => (
    <Typography {...props} />
);
