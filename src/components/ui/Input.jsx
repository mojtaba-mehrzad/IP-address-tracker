import { useState } from "react";

export default function Input({onSearch, loading, error}) {
  const [value, setValue] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if(value.trim()){
      onSearch(value.trim());
      setValue("")
    }
  };

  return (
    <>
      <form action="#" noValidate onSubmit={handleSubmit} className="input-container ">
        <input
          onChange={(e)=>{setValue(e.target.value)}}
          type="text"
          value={value}
          pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
          placeholder="Search for any IP address or domain"
          className="ip-input"
        />
        <button type="submit" disabled={loading} className="input-button">
          <img src="../../images/icon-arrow.svg" alt="" />
        </button>
      </form>

      {/* {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
       */}
    </>
  );
}
