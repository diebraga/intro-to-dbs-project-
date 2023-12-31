import { getAll } from "@/utils/getAll";
import { updateOfficePhoneNumber } from "@/utils/updateOfficePhoneNumber";

export default async function SetPhoneNumber() {
  await updateOfficePhoneNumber("Introduction to dbs Company", "01-7654321");

  const data = await getAll("company_directory");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        UPDATE company_directory
        <br />
        {"SET phone_number = '01-7654321'"}
        <br />
        {"WHERE name_company = 'Introduction to dbs Company'"}{" "}
      </div>
    </pre>
  );
}
