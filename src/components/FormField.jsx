import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

function FormField({ initialValue = { form: [] }, changeCallback }) {
  const [formFields, setFormFields] = useState(initialValue.form);

  function addFormField() {
    const newFormFields = formFields.map((field) => ({
      ...field,
      fields: [
        ...field.fields,
        { type: "", label: "", icon: "", placeholder: "" },
      ],
    }));

    setFormFields(newFormFields);
  }

  function handleFieldChange(index, fieldIndex, key, value) {
    const newFormFields = [...formFields];
    newFormFields[index].fields[fieldIndex][key] = value;
    setFormFields(newFormFields);
    changeCallback({ ...initialValue, form: newFormFields });
  }

  function handleButtonChange(index, key, value) {
    const newFormFields = [...formFields];
    newFormFields[index].buttons[key] = value;
    setFormFields(newFormFields);
    changeCallback({ ...initialValue, form: newFormFields });
  }

  return (
    <div className="flex flex-col gap-4">
      {formFields.map((formField, index) => (
        <fieldset key={index} className="flex flex-col gap-4">
          <legend>Form Field</legend>
          {formField.fields.map((field, fieldIndex) => (
            <div key={fieldIndex} className="mt-4 flex-col flex gap-4">
              <legend>Form {fieldIndex + 1}</legend>
              <TextField
                label="Type"
                value={field.type}
                name={`type-${fieldIndex + 1}`}
                id={`type-${fieldIndex + 1}`}
                onChange={(e) =>
                  handleFieldChange(index, fieldIndex, "type", e.target.value)
                }
              />
              <TextField
                label="Label"
                value={field.label}
                name={`label-${fieldIndex + 1}`}
                id={`label-${fieldIndex + 1}`}
                onChange={(e) =>
                  handleFieldChange(index, fieldIndex, "label", e.target.value)
                }
              />
              <TextField
                label="Icon"
                value={field.icon}
                name={`icon-${fieldIndex + 1}`}
                id={`icon-${fieldIndex + 1}`}
                onChange={(e) =>
                  handleFieldChange(index, fieldIndex, "icon", e.target.value)
                }
              />
              <TextField
                label="Placeholder"
                value={field.placeholder}
                name={`placeholder-${fieldIndex + 1}`}
                id={`placeholder-${fieldIndex + 1}`}
                onChange={(e) =>
                  handleFieldChange(
                    index,
                    fieldIndex,
                    "placeholder",
                    e.target.value
                  )
                }
              />
            </div>
          ))}
          <Button btnText="Add Form Field" onClick={addFormField} />
          <hr />
          <div className="flex flex-col gap-4">
            <TextField
              label="Button Type"
              value={formField.buttons.type}
              onChange={(e) =>
                handleButtonChange(index, "type", e.target.value)
              }
            />
            <TextField
              label="Button Label"
              value={formField.buttons.label}
              onChange={(e) =>
                handleButtonChange(index, "label", e.target.value)
              }
            />
          </div>
        </fieldset>
      ))}
      {/* {JSON.stringify(formFields)} */}
    </div>
  );
}

export default FormField;
