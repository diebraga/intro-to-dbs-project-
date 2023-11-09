"use client";
import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

export type ApiNameType = "getAllUsers" | "getAllRoles";

export default function HomeWrapper() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [apiName, setApiName] = useState<ApiNameType>("getAllUsers");

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/${apiName}`);

      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [apiName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <Menu apiName={apiName} setApiName={setApiName} />
      {data && <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
