import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { theme } from "../styles/theme";

// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";
import "../styles/slider.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
