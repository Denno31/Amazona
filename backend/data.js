import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Dennis",
      email: "denniskyn80@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Puma",
        logo: "/image/logo1.png",
        description: "sample description",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "John",
      email: "john@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike slim shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 20,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Addidas fit Shirt",
      category: "Shirts",
      image: "/images/product-2.jpg",
      price: 100,
      countInStock: 0,
      brand: "Addidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Free shirt",
      category: "Shirts",
      image: "/images/product-3.jpg",
      price: 220,
      countInStock: 30,
      brand: "Lacoste",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike slim Pant",
      category: "pants",
      image: "/images/product-4.jpg",
      price: 120,
      countInStock: 40,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Puma slim pant",
      category: "pants",
      image: "/images/product-5.jpg",
      price: 65,
      countInStock: 100,
      brand: "puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Addidas slim pant",
      category: "pants",
      image: "/images/product-6.jpg",
      price: 139,
      countInStock: 0,
      brand: "puma",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
