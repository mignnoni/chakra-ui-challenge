import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "white",
                color: "blackAlpha.700",
            },
        },
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
});
