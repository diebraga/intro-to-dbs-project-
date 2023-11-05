import { getAllRoles } from "@/utils/getAllRoles";

export default async function Home() {
  const roles = await getAllRoles();
  return (
      <pre>{JSON.stringify(roles, null, 2)}</pre> 
    )
}
