import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { getAll } from "@/utils/getAll";
import { changeCategoryName } from "@/utils/setCategoryProductsOnSpecial";

export default async function Days() {
  await changeCategoryName("on-Special", "Lawnmowers");
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
        {`UPDATE product SET category = "on-Special" WHERE category = "Lawnmowers"`}
      </div>
    </pre>
  );
}
