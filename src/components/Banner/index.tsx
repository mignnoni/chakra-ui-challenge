import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box w="100%">
            <Flex
                h="335"
                align={"center"}
                background="url('/images/background.png')"
                justify={"space-between"}
            >
                <Stack ml="140px" spacing={"6"}>
                    <Heading
                        color={"white"}
                        fontWeight="medium"
                        size={"xl"}
                        maxW="425px"
                        lineHeight="54px"
                    >
                        5 continentes,
                        <br /> infinitas possibilidades
                    </Heading>
                    <Text
                        color={"gray.100"}
                        fontSize={20}
                        maxW="524px"
                        fontWeight={400}
                        lineHeight="30px"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre
                        sonhou.{" "}
                    </Text>
                </Stack>
                <Image
                    mt="130px"
                    src="/images/airplane.png"
                    h={270}
                    mr="140px"
                />
            </Flex>
        </Box>
    );
}
