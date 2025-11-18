import React from "react"

export default function FormField({label, children, error}) {
    return (
        <>
            <label className="block mb-1 font-medium">{label}</label>
            {children}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    )
}