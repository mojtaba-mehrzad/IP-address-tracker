import React from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function InfoPanel({ info, onSearch, loading, error }) {
  return (
    <section className=" header">
      <h1>IP Address Tracker</h1>
      <Input onSearch={onSearch} loading={loading} error={error} />
      <Card info={info} />
    </section>
  );
}
