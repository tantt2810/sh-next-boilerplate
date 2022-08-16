import Grid2, { Grid2Props } from "@mui/material/Unstable_Grid2";

export type SHGridProps = Grid2Props;
export const SHGrid = (props: SHGridProps): JSX.Element => <Grid2 {...props} />;
