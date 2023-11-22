import { getAll } from "@/utils/getAll";

export default async function Company() {
  const data = await getAll("company_directory");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        SELECT * FROM company_directory
      </div>
    </pre>
  );
}
