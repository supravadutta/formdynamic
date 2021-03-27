import React, { useState } from "react";
import './DynamicForm.css'
import {FormConfigJson} from '../dummyJSONData'

import {InputTextField,DropdownSelect,TextArea,MultipleSelect,CheckBox} from "./FormFields"

const DynamicForm = (props) => {
  const [fields, setFields] = useState(FormConfigJson);
  const [data,setData] = useState({});

  const eventHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    var value =[]
    if(e.target.options){
      var options = e.target.options
      for(var i=0, l=options.length; i<l; i++){
        if(options[i].selected){
          value.push(options[i].value)
        }
      }
      setData({
        ...data,
        [e.target.name] : value.length === 1 ? value[0]:value
      })
    }
  };

  const submit = (e)=>{
    console.log(data);
    alert(JSON.stringify(data))
    e.preventDefault();
  }

  return (
    <div className="formContainer">
      <p className="formHead">{fields.formName}</p>
      <p className="formDesc">"{fields.formDesc}"</p>
      <p className="formDesc">*Press 'CTRL' for multi-select </p>
      <hr />
      <form onSubmit={submit}>
        {fields.data.map((form) => {
          if (form.type === "text") {
            return (
              <InputTextField
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                key={form.name}
                label={form.label}
                _handleChange={eventHandler}
              />
            );
          }
          if (form.type === "select") {
            return (
              <DropdownSelect
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                key={form.name}
                label={form.label}
                options={form.options}
                _handleChange={eventHandler}
              />
            );
          }
          if (form.type === "textarea") {
            return (
              <TextArea
                name={form.name}
                placeholder={form.placeholder}
                key={form.name}
                label={form.label}
                cols={form.cols}
                rows={form.rows}
                required={form.required}
                _handleChange={eventHandler}
              />
            );
          }
          if (form.type === "multipleSelect") {
            return (
              <MultipleSelect
                name={form.name}
                label={form.label}
                options={form.options}
                required={form.required}
                _handleChange={eventHandler}
              />
            );
          }
          if (form.type === "checkbox") {
            return (
              <CheckBox
                name={form.name}
                value={form.value}
                label={form.label}
                required={form.required}
                _handleChange={eventHandler}
              />
            );
          }
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DynamicForm;
