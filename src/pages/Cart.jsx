import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useShop } from "../context/ShopContext";

const Cart = () => {
  const { cart, cartTotal } = useShop();

  if (!cart.length) {
    return (
      <main className="min-h-screen px-6 pb-20 pt-32 text-center">
        <h1 className="text-4xl font-bold">Your Bag is Empty</h1>
        <p className="mt-3 text-gray-500">Add something you love to get started.</p>
        <Link to="/products/all" className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 font-medium text-white">
          Shop Products
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-5xl font-bold">Shopping Bag</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {cart.map((item) => <CartItem key={item.key} item={item} />)}
          </div>

          <aside className="h-fit rounded-3xl bg-white p-7">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="mt-8 flex justify-between">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>

            <button
              onClick={() => alert("Demo checkout: connect your payment gateway here.")}
              className="mt-8 w-full rounded-full bg-blue-600 py-4 font-medium text-white hover:bg-blue-700"
            >
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;