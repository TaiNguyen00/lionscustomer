import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
const InputCustom = (props) => {
  const {
    name,
    label,
    control,
    size = "small",
    className = "",
    ...otherProps
  } = props;
  //field: { onChange, onBlur, value, ref }
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <TextField
          label={label || name}
          size={size}
          className={`m-1, ${className}`}
          {...otherProps}
          {...field}
        />
      )}
    />
  );
};

export default InputCustom;
