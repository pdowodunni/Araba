export default function NumberedPoint({
  item,
  itemClassName = "text-[22px]",
  idx,
}: {
  item: string;
  itemClassName?: string;
  idx: number;
}) {
  return (
    <p key={idx} className={`${itemClassName} grid grid-cols-[14px_1fr] gap-3`}>
      <span className="s-index">{idx + 1}</span> {item}
    </p>
  );
}
