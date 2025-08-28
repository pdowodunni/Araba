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
    <p key={idx} className={itemClassName}>
      <span className="s-index">{idx + 1}</span> {item}
    </p>
  );
}
