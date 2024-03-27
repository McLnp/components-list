import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

function CtaField({ initialValue = { ctaItems: [] }, changeCallback }) {
  const [ctas, setCtas] = useState(initialValue.ctaItems);

  const addCtaField = () => {
    setCtas([...ctas, { text: "", link: "", icon: "" }]);
  };

  const handleCtaChange = (field, index, value) => {
    const updatedCtas = ctas.map((cta, ctaIndex) => {
      if (index === ctaIndex) {
        return { ...cta, [field]: value };
      }
      return cta;
    });
    setCtas(updatedCtas);
    changeCallback({ ...initialValue, ctaItems: updatedCtas });
  };

  return (
    <div className="cta-array-wrapper flex flex-col gap-3 py-4">
      {ctas.map((cta, ctaIndex) => (
        <fieldset
          key={`fieldset-${ctaIndex + 1}`}
          className="flex flex-col gap-3 py-4"
          id={`fieldset-${ctaIndex + 1}`}
        >
          <legend>Cta Item {ctaIndex + 1}</legend>
          <TextField
            label={`Cta Text ${ctaIndex + 1}`}
            name={`cta-text-${ctaIndex + 1}`}
            id={`cta-text-${ctaIndex + 1}`}
            value={cta.text}
            onChange={(e) => handleCtaChange("text", ctaIndex, e.target.value)}
          />
          <TextField
            label={`Cta Link ${ctaIndex + 1}`}
            name={`cta-link-${ctaIndex + 1}`}
            id={`cta-link-${ctaIndex + 1}`}
            value={cta.link}
            onChange={(e) => handleCtaChange("link", ctaIndex, e.target.value)}
          />
          <TextField
            label={`Cta Icon ${ctaIndex + 1}`}
            name={`cta-icon-${ctaIndex + 1}`}
            id={`cta-icon-${ctaIndex + 1}`}
            value={cta.icon}
            onChange={(e) => handleCtaChange("icon", ctaIndex, e.target.value)}
          />
        </fieldset>
      ))}

      <Button btnText={"Add Cta"} onClick={addCtaField} />
    </div>
  );
}

export default CtaField;
