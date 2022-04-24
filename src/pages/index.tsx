import { Divider, Flex, Heading } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slideshow } from "../components/Slideshow";
import { ToDos } from "../components/ToDos";

export default function Home() {
    return (
        <Flex direction={"column"} maxW={1440} w="100%" m="auto">
            <Header />
            <Banner />
            <Flex
                direction={"column"}
                maxW={1240}
                w="100%"
                align={"center"}
                mx="auto"
            >
                <ToDos />
                <Divider
                    width={90}
                    mb="16"
                    borderWidth={1}
                    borderColor="blackAlpha.900"
                />
                <Heading textAlign={"center"} fontWeight={500} mb="52px">
                    Vamos nessa? <br />
                    Então escolha seu continente
                </Heading>
                <Slideshow />
            </Flex>
        </Flex>
    );
}
