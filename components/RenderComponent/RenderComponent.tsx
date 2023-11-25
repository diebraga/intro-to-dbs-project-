"use client";

import { useSearchParams } from "next/navigation";

export function RenderComponent<T>({
  query,
  data,
}: {
  query: string;
  data: T[] | any[];
}) {
  const searchParams = useSearchParams();

  const hasQuery = searchParams.get(query);

  const filteredProducts = data.filter(
    (product) => product.manufacturer !== "LawnMaster"
  );
  return (
    <>
      {JSON.stringify(hasQuery === "true" ? filteredProducts : data, null, 2)}
    </>
  );
}
