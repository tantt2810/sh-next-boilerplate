import { ThemeProvider } from "@mui/material";
import store from "@redux/store";
import "@styles/global.scss";
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { theme } from "src/theme";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
