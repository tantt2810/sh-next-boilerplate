import { Stack, StackProps } from "@mui/material";

export type SHStackProps = StackProps;
export const SHStack = (props: SHStackProps): JSX.Element => (
    <Stack {...props} />
);
