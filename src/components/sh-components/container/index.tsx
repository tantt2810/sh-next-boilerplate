import { Container, ContainerProps } from "@mui/material";

export type SHContainerProps = ContainerProps;
export const SHContainer = (props: SHContainerProps): JSX.Element => (
    <Container {...props} />
);
