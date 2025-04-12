const Menu = (props) => {
  const pizzaList = props.pizzaList;
  if (pizzaList === undefined || pizzaList.length === 0)
    return (
      <div className="menu">
        Please return later. We are still working on our pizzas
      </div>
    );

  // option + arrow up/down to move line up/down - neat
  const renderPizzas = pizzaList.map((pizza) => {
    return (
      <div
        key={pizza.name}
        className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}
      >
        <img src={pizza.photoName} alt={`${pizza.name}`} />
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price}</span>
        </div>
      </div>
    );
  });

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic pizzas from Italy(?) with 6 options to choose from</p>
      <div className="pizzas">{renderPizzas}</div>
    </main>
  );
};

export default Menu;
