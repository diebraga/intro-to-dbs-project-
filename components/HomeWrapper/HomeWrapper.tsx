"use client";
import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

type ApiNameType = "getAllUsers";

export default function HomeWrapper() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [apiName, setApiName] = useState<ApiNameType>("getAllUsers");

  const getAllUsers = async (token: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/${apiName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token:intro:to:dbs");
      if (token) {
        getAllUsers(token);
      } else {
        setError("Token not found.");
      }
    }
  }, [apiName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <Menu />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
