import { Button, TextField, Typography } from "@mui/material";
import { InputCustom } from "~/components/Forms";
import InnerContent from "../../components/InnerContent";
import { useForm } from "react-hook-form";

const DataInputUseForProject = [
  {
    id: 0,
    label: "Normal Input",
    placeholder: "Enter value......",
  },
  {
    id: 1,
    label: "Normal Input Type number",
    placeholder: "Enter value......",
    type: "number",
  },
  {
    id: 2,
    label: "Normal Input have default value",
    placeholder: "Enter value......",
    defaultValue: "Have default value",
  },
  {
    id: 3,
    label: "Input error",
    placeholder: "Enter value......",
    error: true,
    helperText: "This is error text",
  },
];
const TestPage = () => {
  const { handleSubmit, control } = useForm();
  console.log(control);
  const getValue = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Typography variant="h3" component="h2" mt={2} align="center">
        This is text Components form
      </Typography>
      <InnerContent>
        {/* <Typography variant="h5" component="h2" mt={3} align="center">
          This is type input
        </Typography>
        {DataInputUseForProject.map((dataInput) => (
          <InputCustom className="m-1" {...dataInput} />
        ))}
        <Typography variant="h5" component="h2" mt={3} align="center">
          How to get data Form when click submit not use useState
        </Typography> */}
        <form onSubmit={handleSubmit(getValue)}>
          <InputCustom name="lastname" label="name abc" control={control} />
          <InputCustom name="register" control={control} />
          <InputCustom name="age" size='large' control={control} />
          <Button variant="outlined" type="submit">
            Get Values
          </Button>
        </form>
      </InnerContent>
    </div>
  );
};

export default TestPage;
