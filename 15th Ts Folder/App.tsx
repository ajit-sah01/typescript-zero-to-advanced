import "./App.css";
import { Card } from "./Components/Card";
import Counter from "./Components/counter";
import Lists from "./Components/Lists";
import OrderForm from "./Components/OrderForm";
import type { List } from "./types";
import { CardLayout } from "./Components/Children";

const menu: List[] = [
  {
    id: 1,
    name: "masala",
    price: 25,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <hr />
        <div>
          <Card name="HeadPhones" price={5000} isSpecial />
          <Card name="Iphone" price={80000} isSpecial />
        </div>
      </div>

      <hr />

      <div>
        <p>Counter</p>
        <Counter />
      </div>

      <hr />

      <div>
        <Lists items={menu} />
      </div>

      <hr />

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Order received:", order);
          }}
        />
      </div>

      <hr />

      <div>
        <CardLayout
          title="Brainzima Innovation"
          footer={<button>Order now</button>}
        >
          <p>Masala Chai – ₹25</p>
        </CardLayout>
      </div>
    </>
  );
}

export default App;
