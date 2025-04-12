const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  if (!isOpen)
    return (
      <div className="footer">
        <div className="order">
          <p>Sorry we are closed</p>
          <p>
            We are currently happy to welcome you between {openHour}:00 and{' '}
            {closeHour}:00 :(
          </p>
        </div>
      </div>
    );
  return (
    <div className="footer">
      <div className="order">
        <p>We are currently open</p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
};

export default Footer;
