import { useState } from 'react';

// can also use React elements for props instead of children
const ToggleBox = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && props.children}
    </div>
  );
};

export default ToggleBox;
