import React from "react";
import {
  useColorModeValue,
  List,
  ListItem,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import { useForm, FormProvider } from "react-hook-form";

import { deleteTodo, completeTodo } from "../redux/reducers/todoReducer";

const MotionItem = motion(ListItem);

const itemVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 150 } },
  exit: { x: -200, opacity: 0, transition: { duration: 0.5 } },
};

function TodoList({ setEditItem }) {
  const methods = useForm();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleEdit = (id) => {
    const editItem = todos.find((item) => item.id === id);
    setEditItem(editItem);
    // console.log(title, description, category);
    // methods.setValue("title", title);
    // methods.setValue("description", description);
    // methods.setValue("category", category);
    // // dispatch(updateTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <FormProvider {...methods}>
      <List spacing={4}>
        <AnimatePresence>
          {todos.length > 0 &&
            todos.map((todo) => (
              <MotionItem
                key={todo.id}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                p={5}
                rounded={6}
                background={formBackground}
                // display="flex"

                // w="500px"
              >
                <Stat>
                  <StatNumber>{todo.title}</StatNumber>
                  <StatLabel>{todo.description}</StatLabel>
                  <StatHelpText>{todo.category}</StatHelpText>
                </Stat>
                <Button
                  mr={3}
                  colorScheme="red"
                  size="xs"
                  rightIcon={<DeleteIcon />}
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </Button>
                <Button
                  mr={3}
                  colorScheme="orange"
                  size="xs"
                  rightIcon={<EditIcon />}
                  onClick={() => handleEdit(todo.id)}
                >
                  Edit
                </Button>
                {!todo.completed && (
                  <Button
                    colorScheme="teal"
                    size="xs"
                    rightIcon={<CheckIcon />}
                    onClick={() => handleComplete(todo.id)}
                  >
                    Complete
                  </Button>
                )}
              </MotionItem>
            ))}
        </AnimatePresence>
      </List>
    </FormProvider>
  );
}

export default TodoList;
