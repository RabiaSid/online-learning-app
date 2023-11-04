import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type checkProps = {
    label: string;
  };

export default function CheckboxLabels(props: checkProps) {
    const { label } = props

  return (
      <FormControlLabel className='' control={<Checkbox defaultChecked />} label={label} />
  );
}