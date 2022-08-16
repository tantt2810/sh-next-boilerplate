import {
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
    TextField,
} from "@mui/material";

export type SHStandardTextFieldProps = StandardTextFieldProps;
export type SHFilledTextFieldProps = FilledTextFieldProps;
export type SHOutlinedTextFieldProps = OutlinedTextFieldProps;
export type SHTextFieldProps =
    | SHStandardTextFieldProps
    | SHFilledTextFieldProps
    | SHOutlinedTextFieldProps;

export const SHTextField = (props: SHTextFieldProps): JSX.Element => (
    <TextField {...props} />
);
