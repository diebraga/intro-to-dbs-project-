import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";

export default async function Init() {
  return (
    <div>
      <GetAllUsers />
      <div className="text-xl text-blue-500">SELECT * FROM users</div>
    </div>
  );
}
