import React, { useState, useEffect } from "react";
import Button from "./Button";
import TextField from "./TextField";
import SelectField from "./SelectField";

function FormField({
  initialValue = { form: { fields: [] } },
  changeCallback,
}) {
  const [formFields, setFormFields] = useState(initialValue.form.fields);
  const options = [
    { optionVal: "Text" },
    { optionVal: "Color" },
    { optionVal: "Dropdown" },
    { optionVal: "Textarea" },
    { optionVal: "Password" },
    { optionVal: "Email" },
    { optionVal: "Number" },
    { optionVal: "Tel" },
    { optionVal: "Hidden" },
    { optionVal: "File" },
    { optionVal: "Search" },
    { optionVal: "Submit" },
    { optionVal: "Checkbox" },
    { optionVal: "Range" },
    { optionVal: "Reset" },
    { optionVal: "Time" },
    { optionVal: "Url" },
    { optionVal: "Week" },
    { optionVal: "Month" },
    { optionVal: "Date" },
    { optionVal: "Image" },
  ];

  function addFormField() {
    setFormFields([
      ...formFields,
      { type: "", label: "", icon: "", placeholder: "" },
    ]);
  }

  function handleFieldsChange(fieldIndex, key, value) {
    const updatedFields = formFields.map((field, index) => {
      if (index === fieldIndex) {
        return { ...field, [key]: value };
      }
      return field;
    });

    setFormFields(updatedFields);
    changeCallback({
      ...initialValue,
      form: { ...initialValue.form, fields: updatedFields },
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <fieldset className="flex flex-col gap-4">
        <legend>Form</legend>
        {formFields.map((field, index) => (
          <div key={index} className="mt-4 flex-col flex gap-4">
            <legend>Field {index + 1}</legend>
            <SelectField
              label="type"
              name={`type-${index + 1}`}
              id={`type-${index + 1}`}
              value={field.type}
              options={options}
              onChange={(e) =>
                handleFieldsChange(index, "type", e.target.value)
              }
            />
            <TextField
              label="Label"
              name={`label-${index + 1}`}
              value={field.label}
              id={`label-${index + 1}`}
              onChange={(e) =>
                handleFieldsChange(index, "label", e.target.value)
              }
            />
            <TextField
              label="Icon"
              name={`icon-${index + 1}`}
              value={field.icon}
              id={`icon-${index + 1}`}
              onChange={(e) =>
                handleFieldsChange(index, "icon", e.target.value)
              }
            />
            <TextField
              label="Placeholder"
              name={`placeholder-${index + 1}`}
              value={field.placeholder}
              id={`placeholder-${index + 1}`}
              onChange={(e) =>
                handleFieldsChange(index, "placeholder", e.target.value)
              }
            />
          </div>
        ))}
        <Button btnText="Add Form Field" onClick={addFormField} />
      </fieldset>
    </div>
  );
}

export default FormField;
