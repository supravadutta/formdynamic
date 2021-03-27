import React from "react";
import './FormFields.css'

export const InputTextField = ({
  name,
  placeholder,
  label,
  required,
  _handleChange,
}) => {
  return (
    <div className="fieldContainer">
      <label htmlFor={name}>{label} :</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={_handleChange}
      />
    </div>
  );
};

export const DropdownSelect = ({
  name,
  placeholder,
  label,
  required,
  options,
  _handleChange,
}) => {
  return (
    <div className="fieldContainer">
      <label htmlFor={name}>{label} : </label>
      <span> </span>
      <select name={name} required={required} onChange={_handleChange}>
        <option value="">Select an option</option>
        {options.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export const TextArea = ({name,placeholder,label,cols,rows,required,_handleChange}) =>{
  return(
    <div className="fieldContainer">
      <label htmlFor={name}>{label} : </label><br/>
      <textarea name={name} id={name} cols={cols || 20} rows={rows || 4} required={required} placeholder={placeholder} onChange={_handleChange}></textarea>
    </div>
  );
}

export const MultipleSelect = ({name,label,options,required,_handleChange}) =>{
  return (
    <div>
      <div className="fieldContainer">
        <label>{label} : </label>
        <select multiple={true} name={name} required={required} onChange={_handleChange}>
          {options.map((op) => (
            <option value={op.value} key={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
      
    </div>
  );
}
export const CheckBox = ({ name, label, value, required, _handleChange }) => {
  return (
    <div className="fieldContainer">
      <input
        type="checkbox"
        id={name}
        required={required}
        name={name}
        onChange={_handleChange}
        value={value}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
