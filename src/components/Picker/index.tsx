import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useField } from '@unform/core'

import { Select, Option, Label, Container } from './styles';

export type OptionType = {
  label: string;
  value: string;
};

type PickerType = {
  name: string;
  label: string;
  items: OptionType[];
};

const Picker: React.FC<PickerType> = ({ name, label, items }) => {
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
    return <Option key={uuidv4()} value={option.value}>{option.label}</Option>
  }
  
  return (
    <Container id='select-container'>
      <Label htmlFor={name}>{label}</Label>
      <Select id={name} name={name} ref={pickerRef as any} defaultValue={defaultValue}>
        {items.map(renderOption)}
      </Select>
    </Container>
  );
}

export default Picker;