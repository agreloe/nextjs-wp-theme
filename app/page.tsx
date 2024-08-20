import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1>Welcome to Our Shop</h1>
      <p>Discover our amazing products.</p>
      <Link href="/products">
        View Products
      </Link>
    </div>
    </main>
  );
}
