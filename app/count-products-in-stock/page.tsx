export default async function Stocks({ searchParams }: any) {
  const { DEL_ALL_FROM_MAN, SET_ADDED } = searchParams;
  const s = SET_ADDED === "true" ? 1 : 0;
  const d = DEL_ALL_FROM_MAN === "true" ? 2 : 3;
  return (
    <pre className="text-xl p-6">
      <div className="text-blue-600">{`${s + d}`}</div>
      <div>
        <div className="text-blue-600">
          SELECT COUNT(*) as count FROM product;
        </div>
      </div>
    </pre>
  );
}
