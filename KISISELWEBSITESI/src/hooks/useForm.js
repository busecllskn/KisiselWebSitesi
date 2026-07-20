import { useState, useEffect } from "react";

export const useForm = (initialValues, storageKey) => {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : initialValues;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(values));
  }, [values, storageKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    localStorage.removeItem(storageKey);
  };

  return { values, handleChange, resetForm };
};
