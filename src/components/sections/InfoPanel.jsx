import React from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function InfoPanel({ info, onSearch, loading, error }) {
  return (
    <section className=" relative w-full h-1/3 header flex-col justify-items-center ">
      <h1 className="text-center pt-6 text-2xl text-white">
        IP Address Tracker
      </h1>
      <Input onSearch={onSearch} loading={loading} error={error} />
      <Card info={info} />
    </section>
  );
}
