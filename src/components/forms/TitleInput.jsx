import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

function TitleInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={errors.title}>
      <FormLabel htmlFor="title">Todo Title</FormLabel>
      <Input
        id="title"
        placeholder="Enter Todo Title"
        {...register("title", {
          required: "Title is required",
        })}
      />
      <FormErrorMessage>
        {errors.title && errors.title.message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default TitleInput;
