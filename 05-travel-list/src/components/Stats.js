const Stats = (props) => {
  const totalPacked = props.itemList.reduce(
    (count, i) => (i.packed ? count + 1 : count),
    0
  );
  return (
    <em className="stats">
      You have {props.itemList.length} items on your list. You have already
      packed {totalPacked} items (
      {Math.round((totalPacked / props.itemList.length) * 100)}
      %)
    </em>
  );
};

export default Stats;
