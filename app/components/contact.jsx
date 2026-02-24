"use client";

import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "The field is required.";
      case "lastName":
        return value.trim() ? "" : "The field is required.";
      case "email":
        if (!value.trim()) return "The field is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email.";
        return "";
      case "phone":
        return value.trim() ? "" : "The field is required.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, newValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "message" && key !== "agreed") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (!formData.agreed) {
      newErrors.agreed = "You must agree to the terms.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(
        Object.keys(formData).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      return;
    }

    console.log("Form submitted:", formData);
  };

  const inputClasses = (fieldName) =>
    `w-full bg-transparent border-0 border-b py-2 focus:outline-none focus:ring-0 transition-colors ${
      errors[fieldName] && touched[fieldName]
        ? "border-red-500 focus:border-red-600"
        : "border-neutral-300 focus:border-neutral-900"
    }`;

  const errorClasses = (fieldName) =>
    `text-xs text-red-500 mt-2 transition-opacity ${
      errors[fieldName] && touched[fieldName] ? "opacity-100" : "opacity-0"
    }`;

  return (
    <section className="bg-neutral-100 py-24 px-6 md:px-10 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Small Label */}
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Contact Us
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
          Ready to Grow Your Brand?
        </h2>

        {/* Sub Text */}
        <p className="text-lg text-neutral-600 max-w-2xl mb-16">
          Tell us about your project and goals. Let's build something great
          together.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("firstName")}
              required
            />
            <p className={errorClasses("firstName")}>The field is required.</p>
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("lastName")}
              required
            />
            <p className={errorClasses("lastName")}>The field is required.</p>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("email")}
              required
            />
            <p className={errorClasses("email")}>
              {errors.email || "The field is required."}
            </p>
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("phone")}
              required
            />
            <p className={errorClasses("phone")}>The field is required.</p>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-transparent border-0 border-b py-2 focus:outline-none focus:ring-0 transition-colors resize-none ${
                errors.message && touched.message
                  ? "border-red-500 focus:border-red-600"
                  : "border-neutral-300 focus:border-neutral-900"
              }`}
            />
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-4 h-4 mt-0.5 accent-neutral-900 cursor-pointer"
            />
            <label className="text-sm text-neutral-600 cursor-pointer">
              I agree that my data is{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-neutral-900"
              >
                collected
              </Link>
              .
            </label>
          </div>

          {/* Button */}
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black transition flex items-center gap-2"
            >
               Get in Touch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
