import React from "react";
import { useFormikContext } from "formik";

import ModButton from "./ModButton";

function SubmitButton({ style }) {
  const { handleSubmit } = useFormikContext();

  return <ModButton style={style} title="Confirm" onPress={handleSubmit} />;
}

export default SubmitButton;
