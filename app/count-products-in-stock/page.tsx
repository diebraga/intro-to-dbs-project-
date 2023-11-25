export default async function Stocks({ searchParams }: any) {
  const { DEL_ALL_FROM_MAN } = searchParams;

  return (
    <pre className="text-xl p-6">
      <div className="text-blue-600">
        {DEL_ALL_FROM_MAN === "true" ? "2" : "3"}
      </div>
      <div>
        <div className="text-blue-600">
          SELECT COUNT(*) as count FROM product;
        </div>
      </div>
    </pre>
  );
}
