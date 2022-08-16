import { ImageList, ImageListProps } from "@mui/material";

export type SHImageListProps = ImageListProps;
export const SHImageList = (props: SHImageListProps): JSX.Element => (
    <ImageList {...props} />
);
