"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  images: { src: string }[];
};

interface ProductListProps {
  initialProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Any client-side logic goes here, e.g., fetching additional data, handling events, etc.

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <Image className='w-[200px]' alt={product.name} width={0} height={0} sizes='100vw' src={product.images[0]?.src}></Image>
          <p>{product.price}</p>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
