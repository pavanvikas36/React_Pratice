import React, {useState} from "react"
import RegistrationForm from "./components/RegistrationForm"

export default function App() {
  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data)
    setFormData(data)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Day 2 — Registration Form</h1>

      <RegistrationForm onSubmit={handleFormSubmit} />

      {formData && (
        <div className="mt-6 bg-white p-4 rounded shadow w-full max-w-md">
          <h2 className="font-semibold mb-2 text-lg">Submitted Data</h2>
          <pre className="text-sm text-gray-700">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}