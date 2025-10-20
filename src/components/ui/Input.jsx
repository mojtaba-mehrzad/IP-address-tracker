import { useState } from "react";
import validateIP from "../../hooks/validateIP";
import buttonIcon from "/images/icon-arrow.svg";

export default function Input({ onSearch, loading }) {
  const [value, setValue] = useState("");
  const [inputError, setInputError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const validationError = validateIP(value);
    if (validationError) {
      setInputError(validationError);
      return;
    }
    setInputError("");
    onSearch(value.trim());
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
    const validationError = validateIP(value);
    setInputError(validationError);
  }

  return (
    <>
      <form
        action="#"
        noValidate
        onSubmit={handleSubmit}
        className="input-container "
      >
        <input
          onChange={handleChange}
          type="text"
          value={value}
          placeholder="Search for any IP address or domain"
          className={`ip-input ${inputError ? "bg-red-50 placeholder-red-500" : "bg-white placeholder:text-CGray-400"}`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`input-button ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          <img src={buttonIcon} alt="" />
        </button>
      </form>

      {inputError && <p className="text-red-200 mt-2 text-sm">{inputError}</p>}
    </>
  );
}
