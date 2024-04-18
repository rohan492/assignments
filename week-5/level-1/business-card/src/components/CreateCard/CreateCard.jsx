import React, { useState } from "react";

import "./CreateCard.css";

const CreateCard = ({ setCardInfo }) => {
  const [formValues, setFormValues] = useState({
    cardName: "",
    cardDescription: "",
    cardInterests: [],
    firstSocialName: "",
    firstSocialLink: "",
    secondSocialName: "",
    secondSocialLink: "",
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormValues(prevFormvalue => ({
        ...prevFormvalue,
        [name]: value
    }))
  }

  const handleSubmit = () => {
    setCardInfo((prevCardInfo) => [
      ...prevCardInfo,
      {
        name: formValues.cardName,
        description: formValues.cardDescription,
        interests: formValues.cardInterests.split(", "),
        socials: [
          {
            name: formValues.firstSocialName,
            link: formValues.firstSocialLink,
          },
          {
            name: formValues.secondSocialName,
            link: formValues.secondSocialLink,
          },
        ],
      },
    ]);
    alert("Card Added")
  };

  return (
    <div className="create-container container">
      <h1>Create Job Card</h1>
      <div className="create-card-container card-container">
        <label
          htmlFor="name"
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Name
          <input name="cardName" className="name" id="name" onChange={handleInputChange} />
        </label>
        <label
          htmlFor="description"
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Description
          <textarea name="cardDescription" className="description" id="description" onChange={handleInputChange} />
        </label>
        <div className="interest-heading">Interests</div>
        <div className="interest-container">
          <input name="cardInterests" className="interest" id="interest" onChange={handleInputChange} />
        </div>
        <div className="social-container">
          <div className="social-input">
            <label
              htmlFor="firstSocialName"
              style={{
                display: "flex",
                gap: "0.2rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Social Name
              <input name="firstSocialName" type="text" id="firstSocialName" onChange={handleInputChange} />
            </label>

            <label
              htmlFor="firstSocialLink"
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Social Link
              <input name="firstSocialLink" type="text" id="firstSocialLink" onChange={handleInputChange} />
            </label>
          </div>
          <div className="social-input">
            <label
              htmlFor="secondSocialName"
              style={{
                display: "flex",
                gap: "0.2rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Social Name
              <input name="secondSocialName" type="text" id="secondSocialName" onChange={handleInputChange} />
            </label>

            <label
              htmlFor="secondSocialLink"
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Social Link
              <input name="secondSocialLink" type="text" id="secondSocialLink" onChange={handleInputChange} />
            </label>
          </div>
        </div>
        <div className="social" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
