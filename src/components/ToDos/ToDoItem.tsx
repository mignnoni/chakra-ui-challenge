import { Image, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ToDoItemProps {
    imageName: string;
    children: ReactNode;
}

export function ToDoItem({ imageName, children }: ToDoItemProps) {
    return (
        <Stack spacing={"6"} align={"center"} maxW="120px">
            <Image src={`images/${imageName}.png`} />
            <Text
                color={"blackAlpha.700"}
                fontWeight="semibold"
                textAlign={"center"}
                fontSize={24}
            >
                {children}
            </Text>
        </Stack>
    );
}
