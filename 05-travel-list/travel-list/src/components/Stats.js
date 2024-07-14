export default function Stats({ items }) {
  if (!items.length) {
    return <p className="footer">
      <em>Start adding some items!</em>
    </p>;
  }
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentItemsPacked = numItemsPacked ? ((numItemsPacked / numItems) * 100).toFixed(2) : 0;

  return <footer className="stats">
    <em>
      {percentItemsPacked == 100 ? 'You got everything ready to go!' :
        `You have have ${numItems} items on your list, and your have packed ${numItemsPacked}  (${percentItemsPacked}%)`}
    </em>
  </footer>;
}
