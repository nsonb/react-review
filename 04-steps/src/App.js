import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const Steps = (props) => {
  const { steps, active } = props;
  return [...Array(steps).keys()].map((i) => (
    <div className={i <= active && 'active'} key={'steps' + i}>
      {i + 1}
    </div>
  ));
};

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="steps">
      <div className="numbers">
        <Steps steps={3} active={step} />
      </div>
      <p className="message">{messages[step]}</p>
      <div className="buttons">
        <button
          style={{ background: '#7950f2', color: '#fff' }}
          onClick={() => {
            setStep((i) => (i === 0 ? 0 : i - 1));
          }}
        >
          Previous
        </button>
        <button
          style={{ background: '#7950f2', color: '#fff' }}
          onClick={() => {
            setStep((i) => (i === 2 ? 2 : i + 1));
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

/*
1. state -> data that will change
2. component -> reflection of state
3. dont use state for things that do not trigger rerender
*/

export default App;
