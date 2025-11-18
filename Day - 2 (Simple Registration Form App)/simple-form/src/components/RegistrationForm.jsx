import React, { useState, useRef, Fragment } from "react";
import FormField from "./FormField";

export default function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const nameRef = useRef();

  // Focus the name field on mount
  React.useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleAddHobby = () => {
    setHobbies([...hobbies, ""]);
  };

  const handleRemoveHobby = (index) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  const handleHobbyChange = (index, value) => {
    const updated = [...hobbies];
    updated[index] = value;
    setHobbies(updated);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";
    if (!age || isNaN(age) || Number(age) <= 10)
      newErrors.age = "Age must be greater than 10.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    const formData = { name, email, age, hobbies: hobbies.filter(Boolean) };
    onSubmit(formData);
    setErrors({});
    setSuccess(true);

    // Reset fields
    setName("");
    setEmail("");
    setAge("");
    setHobbies([""]);
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <FormField label="Name:" error={errors.name}>
          <input
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border w-full px-3 py-2 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
        </FormField>

        <FormField label="Email:" error={errors.email}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border w-full px-3 py-2 rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
        </FormField>

        <FormField label="Age:" error={errors.age}>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            className={`border w-full px-3 py-2 rounded ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your age"
          />
        </FormField>

        <div>
          <label className="block mb-1 font-medium">Hobbies:</label>
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                value={hobby}
                onChange={(e) => handleHobbyChange(index, e.target.value)}
                className="border px-3 py-2 rounded w-full border-gray-300"
                placeholder={`Hobby ${index + 1}`}
              />
              {hobbies.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveHobby(index)}
                  className="ml-2 text-red-600 font-semibold"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddHobby}
            className="text-blue-600 text-sm font-medium mt-1"
          >
            + Add Hobby
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full font-medium"
        >
          Submit
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium mt-2">
            Registration Successful!
          </p>
        )}
      </form>
    </Fragment>
  );
}
