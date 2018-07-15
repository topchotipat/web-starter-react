
import React, { Component } from 'react'

const InputText = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error &&
          <p>
            {error}
          </p>
        ) ||
          (warning && <span>{warning}</span>))}
    </div>
  )

export default InputText