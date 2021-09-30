import { forwardRef, ForwardRefRenderFunction } from "react";

import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends NumberInputFieldProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputNumberBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <NumberInput variant="filled" focusBorderColor="pink.500" size="lg">
          <NumberInputField
            id={name}
            name={name}
            bgColor="gray.900"
            _hover={{
              bgColor: "gray.900",
            }}
            {...rest}
            ref={ref}
          />
        </NumberInput>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  };

export const InputNumber = forwardRef(InputNumberBase);
