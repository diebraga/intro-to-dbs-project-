import { countProductsInStock } from "@/utils/countProductsInStock";


export default async function Stocks() {
  // await deleteAllUsers()
  const data =await countProductsInStock()

  return <pre className="text-xl p-6">
    Number of rows: <div className="text-blue-600">{data}</div>
    <div><div className="text-blue-600">SELECT COUNT(*) as count FROM stock;</div></div>
    </pre>;
}
