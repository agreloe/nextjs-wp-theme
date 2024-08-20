"use client";
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: { src: string } | null;
};

const ProductsPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };

    getCategories();
  }, []);

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <div>
                {category.image && <Image className='w-[200px]' src={category.image.src} alt={category.name} width={0} height={0} sizes='100vw' />}
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
