"use client";

import { useSearchParams } from "next/navigation";

export function RenderComponent<T>({
  query,
  data,
  k,
  field,
  count,
}: {
  query: string;
  data: T[] | any[];
  k: string;
  field: string;
  count?: boolean;
}) {
  const searchParams = useSearchParams();

  const hasQuery = searchParams.get(query);

  const filteredProducts = data.filter((item) => item[k] !== field);

  return (
    <>
      {JSON.stringify(hasQuery === "true" ? filteredProducts : data, null, 2)}
    </>
  );
}
