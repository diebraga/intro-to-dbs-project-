import { findCustomersWithRoadInAddress } from "@/utils/findCustomersWithRoadInAddress";

export default async function Init() {
  const data = await findCustomersWithRoadInAddress();

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        SELECT * FROM customers
        <br />
        {"WHERE address LIKE '%road%'"}{" "}
      </div>
    </pre>
  );
}
