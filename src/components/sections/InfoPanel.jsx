import React from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function InfoPanel({ info, onSearch, loading, error }) {
  return (
    <section className=" header" aria-label="IP Address Search and Information Panel">
      <h1 className="sr-only">IP Address Tracker</h1>
      <h2 aria-label="Application Title">IP Address Tracker</h2>
      <Input onSearch={onSearch} loading={loading} error={error} />
      <Card info={info} />
    </section>
  );
}
