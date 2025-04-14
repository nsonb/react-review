import { useState } from 'react';

const PackList = (props) => {
  const { list, rmItem, updateItem, resetList } = props;
  const [sortBy, setSortBy] = useState('input');
  const renderList = list
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'packed':
          return Number(a.packed) - Number(b.packed);
        default:
          return 1;
      }
    })
    .map((item) => {
      return (
        <li key={item.name + item.count}>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => {
              updateItem(item, !item.packed);
            }}
          />
          <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
            {item.count} {item.name}
          </span>
          <button
            onClick={() => {
              rmItem(item);
            }}
            style={{ color: 'red' }}
          >
            X
          </button>
        </li>
      );
    });
  return (
    <div className="list">
      <ul>{renderList}</ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={'input'}>Sort by input order</option>
          <option value={'name'}>Sort by name</option>
          <option value={'packed'}>Sort by packed status</option>
        </select>
        <button onClick={() => resetList()}>Reset</button>
      </div>
    </div>
  );
};

export default PackList;
