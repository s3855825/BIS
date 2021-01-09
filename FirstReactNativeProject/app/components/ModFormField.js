import React from "react";
import { useFormikContext } from "formik";

import ModTextInput from "./ModTextInput";
import ErrorMessage from "./ErrorMessage";

function ModFormField({ name, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <ModTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default ModFormField;
