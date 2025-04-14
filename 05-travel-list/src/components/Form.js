import { useState } from 'react';

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

  const reset = () => {
    setItem('');
    setCount(1);
  };

  return (
    <form className="add-form" onSubmit={submit}>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
