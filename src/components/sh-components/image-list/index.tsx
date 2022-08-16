import { ImageList, ImageListProps } from "@mui/material";

export interface ISHImageListProps extends ImageListProps {}
export const SHImageList = (props: ISHImageListProps) => (
    <ImageList {...props} />
);
