import { Autocomplete, TextField } from "@mui/material";

interface IFilterProps {
  label: string;
  data: string[];
}

const Filter = ({ label, data }: IFilterProps) => {
  return (
    <Autocomplete
      options={data}
      renderInput={(params) => <TextField {...params} label={label} />}
      sx={{ width: 180 }}
    />
  );
};

export default Filter;
