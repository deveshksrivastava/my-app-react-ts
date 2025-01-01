import { useState } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import "./Formik.css";

const contactFormSchema = Yup.object().shape({
    fullName: Yup.string()
        .required("Full Name is required")
        .min(2, "Must be at least 2 characters"),
    email: Yup.string().email("Email is not valid").required("Email is required"),
    message: Yup.string(),
    picked: Yup.string().required("Please select an option"), // Validation for radio buttons
    checkbox: Yup.array().min(1, "At least one checkbox must be selected"), // Validation for checkboxes
    // county: Yup.string().required("Please select an option"), // Validation for dropdown
});

function RegistrationFormWithFormik() {
    const contactFormInitialValues = {
        fullName: "", email: "", message: "", picked: "", checkbox: [], country: ""
        // picked: "", checkbox: [], country: ''
    };

    const formik = useFormik({
        initialValues: contactFormInitialValues,
        validationSchema: contactFormSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
                console.log(values);
                alert("Form Submitted Successfully");
                resetForm(); //reset the form
            } catch (error: any) {
                console.log(error.message);
            }
            setSubmitting(false);
        }
    });

    const {
        errors,
        handleSubmit,
        touched, //error messages visible,formik.touched to ensure the field has been visited
        isSubmitting,
        isValid, //inbuilt Formik state which checks if the form data is valid.
        getFieldProps, //method, when provided with field information, returns the exact set of properties including onChange, onBlur, value, and checked for a specific field, which can then be spread onto an input, select, or textarea element.
        handleChange, // Formik handler for onChange
        handleBlur, // Formik handler for onBlur
    } = formik;

    return (
        <div className="mx-auto max-w-5xl">
            <h1 className="font-extrabold h-12 text-3xl mt-10">CREATE FORM WITH FORMIK</h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" className=" border-2" {...getFieldProps("fullName")} />
                {touched.fullName && errors.fullName ? (
                    <div className="error">{errors.fullName}</div>
                ) : null}

                <label htmlFor="email">Email</label>
                <input id="email" type="email" className=" border-2" {...getFieldProps("email")} />
                {touched.email && errors.email ? (
                    <div className="error">{errors.email}</div>
                ) : null}

                <label htmlFor="message">Message</label>
                <textarea id="message" className=" border-2"  {...getFieldProps("message")} />
                {touched.message && errors.message ? (
                    <div className="error">{errors.message}</div>
                ) : null}

                {/* Radio Buttons */}
                <label>Pick an option:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="picked"
                            value="Option 1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={formik.values.picked === "Option 1"}
                        />
                        Option 1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="picked"
                            value="Option 2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={formik.values.picked === "Option 2"}
                        />
                        Option 2
                    </label>
                    {touched.picked && errors.picked ? <div className="error">{errors.picked}</div> : null}
                </div>

                {/* Checkboxes */}
                <label>Choose options:</label>
                <div>
                    <label>
                        <input type="checkbox" name="checkbox" value="Checkbox 1" onChange={handleChange}
                            onBlur={handleBlur}
                        // checked={formik.values.checkbox === "Checkbox 1"}
                        />
                        Checkbox 1
                    </label>
                    <label>
                        <input type="checkbox" name="checkbox" value="Checkbox 2" onChange={handleChange}
                            onBlur={handleBlur}
                        // checked={formik.values.checkbox === "Checkbox 2"} 
                        />
                        Checkbox 2
                    </label>
                    {touched.checkbox && errors.checkbox ? <div className="error">{errors.checkbox}</div> : null}
                </div>

                {/* Dropdown */}

                {/* <label htmlFor="dropdown">Select an option:</label>
                <select
                    id="dropdown"
                    name="country" // Ensure name is explicitly set only once
                    className="border-2"
                    onChange={handleChange}
                // {...getFieldProps("country")} // Use Formik's helper
                >
                    <option value="">Select an option</option>
                    <option value="Option A">Option A</option>
                    <option value="Option B">Option B</option>
                </select>
                {touched.country && errors.country ? <div className="error">{errors.country}</div> : null} */}


                <button type="submit" className=" border-2 bg-blue-600" disabled={isSubmitting || !isValid}>
                    Submit
                </button>
                {/* {JSON.stringify(values)} */}
                <br />
                <br />
                <br />
                <br />
                <br />
            </form>
        </div>

    );
}

export default RegistrationFormWithFormik;