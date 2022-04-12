import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core'

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
  const pickerRef = useRef()
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  function renderOption(option: OptionType): React.ReactElement {
    return <Option value={option.value}>{option.label}</Option>
  }
  
  return (
    <Select name={name} ref={pickerRef as any} defaultValue={defaultValue}>
      {items.map(renderOption)}
    </Select>
  );
}

export default Picker;