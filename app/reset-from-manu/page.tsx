import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { getAll } from "@/utils/getAll";

export default async function Days() {
  const data = await getAll("product");

  return (
    <pre className="text-xs">
      <RenderComponent
        data={data}
        query="DEL_ALL_FROM_MAN"
        k="manufacturer"
        field="LawnMaster"
      />
      <div className="text-xl text-blue-500">
        {`SELECT * FROM product WHERE manufacturer <> 'LawnMaster';`}
      </div>
    </pre>
  );
}
