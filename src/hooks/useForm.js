import { useState } from "react";

export function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, handleInputChange, reset];
}
