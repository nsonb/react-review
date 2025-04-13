import { useState } from 'react';

const Logo = () => {
  return <h1> Far Away </h1>;
};

const Form = (props) => {
  const [item, setItem] = useState('');
  const [count, setCount] = useState(1);

  const submit = (event) => {
    event.preventDefault();
    if (item !== '') {
      const newItem = { name: item, count: count, packed: false };
      props.addItem(newItem);
      reset();
    }
  };

  const reset = (event) => {
    event.preventDefault();
    setItem('');
    setCount(1);
  };
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <input
        type="text"
        placeholder="Item name..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((c) => {
          return <option key={'select' + c}>{c}</option>;
        })}
      </select>
      <button type="submit" onClick={(e) => submit(e)}>
        Add
      </button>
      <button onClick={(e) => reset(e)}>Reset</button>
    </form>
  );
};

const PackList = (props) => {
  const { list, rmItem } = props;
  const renderList = list.map((item) => {
    return (
      <li key={item.name + item.count}>
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
    </div>
  );
};

const Stats = (props) => {
  return (
    <em className="stats">
      You have {props.count} items on your list. You have already packed X items
    </em>
  );
};

const App = () => {
  const [itemList, setItemList] = useState([
    { name: 'Toothbrush', count: 2, packed: true },
    { name: 'Passport', count: 2, packed: false },
  ]);

  const addItem = (item) => {
    setItemList((list) => [item, ...list]);
  };

  const rmItem = (item) => {
    console.log(item);
    // setItemList((list) => list.pop(item));
  };

  return (
    <main className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackList list={itemList} rmItem={rmItem} />
      <Stats count={itemList.length} />
    </main>
  );
};

export default App;
