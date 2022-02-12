import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

function DescriptionInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={errors.description}>
      <FormLabel htmlFor="description">Todo Description</FormLabel>
      <Textarea
        id="description"
        placeholder="Enter Description for you todo"
        resize="none"
        {...register("description", {
          required: "Description is required",
          maxLength: { value: 100, message: "100 Characters max" },
        })}
      />
      <FormErrorMessage>
        {errors.description && errors.description.message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default DescriptionInput;
