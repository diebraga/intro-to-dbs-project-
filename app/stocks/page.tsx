import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { getAll } from "@/utils/getAll";

export default async function Stocks() {
  const data = await getAll("product");

  return (
    <pre className="text-xs">
      <RenderComponent data={data} query="DEL_ALL_FROM_MAN" />

      <div className="text-xl text-blue-500">SELECT * FROM product</div>
    </pre>
  );
}
