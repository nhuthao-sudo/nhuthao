import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-2">
          <ProductList />
          <CheckoutForm />
        </div>
        <CartSidebar />
      </div>
    </div>
  );
}

export default App;
