import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackList from './components/PackList';
import Stats from './components/Stats';

const App = () => {
  const [itemList, setItemList] = useState([]);

  const addItem = (item) => {
    // add to tail of array for O(1)
    setItemList((list) => [...list, item]);
  };

  const rmItem = (item) => {
    setItemList((list) => list.filter((i) => i !== item));
  };

  const updateItem = (item, status) => {
    setItemList((i) =>
      i.map((i) => (i === item ? { ...i, packed: status } : i))
    );
  };

  const resetList = () => {
    const confirm = window.confirm('Are you sure?');
    confirm && setItemList([]);
  };

  return (
    <main className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackList
        list={itemList}
        rmItem={rmItem}
        updateItem={updateItem}
        resetList={resetList}
      />
      <Stats itemList={itemList} />
    </main>
  );
};

/* State vs Props
 1. To a component, State is internal, Props is external
 2. State is change-able, Props is read-only
 3. Changes to both -> rerender
*/

export default App;
