import { Autocomplete as MUIautocomplete, TextField } from "@mui/material";
import "./styles.css";

interface IAutocompleteProps {
  label: string;
  data: string[];
}

const Autocomplete = ({ label, data }: IAutocompleteProps) => {
  return (
    <MUIautocomplete
      options={data}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Autocomplete;
