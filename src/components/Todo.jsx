import React, { useState } from "react";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import TodoForm from "./forms/TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [editItem, setEditItem] = useState(null);
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Flex
        height="100vh"
        // direction="row"
        alignItems="start"
        justifyContent="space-evenly"
        wrap="wrap"
      >
        <Flex
          direction="column"
          background={formBackground}
          p={5}
          rounded={6}
          mb={5}
        >
          <Heading mb={6}>Add Todo</Heading>
          <TodoForm editItem={editItem} setEditItem={setEditItem} />
        </Flex>
        <TodoList setEditItem={setEditItem} />
      </Flex>
    </>
  );
}

export default Todo;
