import React, { useState } from 'react'

const InputField = ({ 
  type = "text", 
  placeholder = "", 
  label = "", 
  onChange,
  value,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState(value || "")

  const handleChange = (e) => {
    setInputValue(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={`mb-3 ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <input 
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputField