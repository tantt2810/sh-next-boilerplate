import Grid2, { Grid2Props } from "@mui/material/Unstable_Grid2";

export interface ISHGridProps extends Grid2Props {}
export const SHGrid = (props: ISHGridProps) => <Grid2 {...props} />;
