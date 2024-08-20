import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://shop.agreloe.fun",  // Replace with your WordPress site URL
  consumerKey: "ck_c0609295095ded337d78bb113e15aa178cea3d92",  // Replace with your WooCommerce Consumer Key
  consumerSecret: "cs_2cc24c07041a682dda4f0c22346d4f7640c64fe9",  // Replace with your WooCommerce Consumer Secret
  version: "wc/v3"
});

export const fetchProducts = async () => {
  try {
    const response = await api.get("products", {
      per_page: 20,  // Adjust this number to fetch more or fewer products
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get("products/categories", {
      per_page: 20,  // Adjust the number based on your needs
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchProductsByCategory = async (categorySlug: string) => {
  try {
    // Fetch the category by slug
    const categoriesResponse = await api.get("products/categories", {
      slug: categorySlug,
    });

    const category = categoriesResponse.data[0];

    if (!category) {
      console.error("Category not found");
      return [];
    }

    // Fetch products by category ID
    const response = await api.get("products", {
      category: category.id,
      per_page: 20,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

