import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/pizza-list';
import { pizzaData } from './data';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu pizzaList={pizzaData} />
      <Footer />
    </div>
  );
};

export default App;
