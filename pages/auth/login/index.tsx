import { Button, Card, CardContent, Container, Stack } from "@mui/material";

export const Login = () => {
    return (
        <Container>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Button variant="contained">MUI Button</Button>
                        <Button variant="outlined">MUI Button</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
};
export default Login;
