import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { AddIcon, EditIcon } from "@chakra-ui/icons";

import { createTodo, updateTodo } from "../../redux/reducers/todoReducer";
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import SelectInput from "./SelectInput";

const MotionButton = motion(Button);

function TodoForm({ editItem, setEditItem }) {
  const dispatch = useDispatch();
  const methods = useForm();

  const addTodo = (data) => {
    dispatch(createTodo(data));
    methods.reset();
  };

  useEffect(() => {
    if (editItem) {
      methods.setValue("title", editItem.title);
      methods.setValue("description", editItem.description);
      methods.setValue("category", editItem.category);
    }
  }, [editItem, methods]);

  const editTodo = (data) => {
    const updatedItem = {
      ...editItem,
      title: data.title,
      description: data.description,
      category: data.category,
      updatedAt: Date().toLocaleString(),
    };

    dispatch(updateTodo(updatedItem));
    setEditItem(null);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(editItem ? editTodo : addTodo)}>
        <TitleInput name="title" />
        <DescriptionInput />
        <SelectInput />
        {
          <MotionButton
            colorScheme="teal"
            isLoading={methods.formState.isSubmitting}
            mt={3}
            type="submit"
            whileHover={{ scale: 1.05 }}
            rightIcon={editItem ? <EditIcon /> : <AddIcon />}
          >
            {editItem ? "Update Todo" : "Add Todo"}
          </MotionButton>
        }
      </form>
    </FormProvider>
  );
}

export default TodoForm;
