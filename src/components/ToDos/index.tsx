import { Flex } from "@chakra-ui/react";

import { ToDoItem } from "./ToDoItem";

export function ToDos() {
    return (
        <Flex w="100%" mt="28" mb="20" justify={"space-between"} p="0">
            <ToDoItem imageName="cocktail-1">vida noturna</ToDoItem>
            <ToDoItem imageName="surf-1">praia</ToDoItem>
            <ToDoItem imageName="building-1">moderno</ToDoItem>
            <ToDoItem imageName="museum-1">clássico</ToDoItem>
            <ToDoItem imageName="earth-1">e mais...</ToDoItem>
        </Flex>
    );
}
