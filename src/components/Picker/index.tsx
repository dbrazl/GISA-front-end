import React from 'react';

import { Select, Option } from './styles';

export type OptionType = {
  label: string;
  value: string;
};

type PickerType = {
  name: string;
  items: OptionType[];
};

const Picker: React.FC<PickerType> = ({ name, items }) => {
  function renderOption(option: OptionType): React.ReactElement {
    return <Option value={option.value}>{option.label}</Option>
  }
  
  return (
    <Select name={name}>
      {items.map(renderOption)}
    </Select>
  );
}

export default Picker;