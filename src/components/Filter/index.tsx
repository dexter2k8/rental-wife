import { Autocomplete, TextField } from "@mui/material";
import "./styles.css";

interface IFilterProps {
  label: string;
  data: string[];
}

const Filter = ({ label, data }: IFilterProps) => {
  return (
    <Autocomplete
      options={data}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Filter;
