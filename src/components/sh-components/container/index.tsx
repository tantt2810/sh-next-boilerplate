import { Container, ContainerProps } from "@mui/material";

export interface ISHContainerProps extends ContainerProps {}
export const SHContainer = (props: ISHContainerProps) => (
    <Container {...props} />
);
