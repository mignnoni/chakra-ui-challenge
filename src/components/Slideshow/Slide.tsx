// eslint-disable-next-line import/no-unresolved
import { Flex, Heading, Stack } from "@chakra-ui/react";
// eslint-disable-next-line import/no-unresolved

interface SlideProps {
    continentName: string;
    description: string;
    imageURL: string;
}

export function Slide({ continentName, description, imageURL }: SlideProps) {
    return (
        <Flex
            background={`url(${imageURL})`}
            w="100%"
            h="100%"
            align={"center"}
            justify="center"
        >
            <Stack spacing={"4"} color="white" textAlign={"center"}>
                <Heading>{continentName}</Heading>
                <Heading size={"md"}>{description}</Heading>
            </Stack>
        </Flex>
    );
}
