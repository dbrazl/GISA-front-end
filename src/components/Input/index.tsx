import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { Field } from './styles';

const Input = ({ name, ...rest }: any) => {
  const inputRef = useRef()
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
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

  return (
    <Field
      name={name}
      ref={inputRef as any}
      defaultValue={defaultValue}
      {...rest}
    />
  );

}

export default Input