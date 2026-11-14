import { FaTrash } from "react-icons/fa";
import { useShop } from "../context/ShopContext";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useShop();

  return (
    <article className="flex flex-col gap-5 rounded-3xl bg-white p-5 sm:flex-row">
      <img
        src={item.image}
        alt={item.name}
        className="h-32 w-32 rounded-2xl object-cover"
      />

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="mt-2 text-sm text-gray-500">
              {item.selectedColor} · {item.selectedStorage}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.key)}
            aria-label={`Remove ${item.name}`}
            className="text-red-500 transition hover:scale-110"
          >
            <FaTrash />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-semibold">
            ₹{item.price.toLocaleString("en-IN")}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseQuantity(item.key)}
              className="h-9 w-9 rounded-full bg-gray-100"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="min-w-5 text-center">{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.key)}
              className="h-9 w-9 rounded-full bg-gray-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;