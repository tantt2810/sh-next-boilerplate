import { SHButton } from "@components/sh-components";

export const Login = (): JSX.Element => {
    return (
        <>
            <SHButton variant="contained" color="primary">
                primary Button
            </SHButton>
            <SHButton variant="contained" color="secondary">
                secondary Button
            </SHButton>
            <SHButton variant="contained" color="error">
                error Button
            </SHButton>
            <SHButton variant="contained" color="warning">
                warning Button
            </SHButton>
            <SHButton variant="contained" color="success">
                success Button
            </SHButton>
            <SHButton variant="contained" color="inherit">
                inherit Button
            </SHButton>
            <SHButton variant="contained" color="info">
                info Button
            </SHButton>
        </>
    );
};
export default Login;
