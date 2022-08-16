import {
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
    TextField,
} from "@mui/material";

export interface ISHStandardTextFieldProps extends StandardTextFieldProps {}
export interface ISHFilledTextFieldProps extends FilledTextFieldProps {}
export interface ISHOutlinedTextFieldProps extends OutlinedTextFieldProps {}
export type TSHTextFieldProps =
    | ISHStandardTextFieldProps
    | ISHFilledTextFieldProps
    | ISHOutlinedTextFieldProps;

export const SHTextField = (props: TSHTextFieldProps) => (
    <TextField {...props} />
);
