import React from 'react';
import { fetchProductsByCategory, fetchCategories } from '@/lib/api';
import ProductList from '@/components/productList';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

type Category = {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: { src: string } | null;
  };

  export async function generateStaticParams() {
    const categories: Category[] = await fetchCategories();
    return categories.map((category: Category) => ({
      slug: category.slug,
    }));
  }


const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = params;
  const products = await fetchProductsByCategory(slug);

  return (
    <div>
      <h1>Products in Category: {slug}</h1>
      <ProductList initialProducts={products} />
    </div>
  );
};

export default CategoryPage;
