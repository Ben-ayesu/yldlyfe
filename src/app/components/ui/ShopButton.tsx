import Link from "next/link";

const ShopButton = () => {
  return (
    <Link
      href="/shop"
      className="text-white text-4xl font-bold hover:text-gray-300 hover:underline"
    >
      SHOP
    </Link>
  );
};

export default ShopButton;
