import React from 'react';
import Product from './Product';

const Home = () => {
    const products = [
    {
    name: 'Computer',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for computer',
    price: 29.99,
    quality: 10,
    },
    {
    name: 'LGTV',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for LGTV',
    price: 49.99,
    quality: 5,
    },
    {
    name: 'Printer',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for Printer',
    price: 19.99,
    quality: 20,
    },
    {
    name: 'Laptop',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for Laptop',
    price: 39.99,
    quality: 30,
    },
    ];
    

return (
    <div>
        <h1>Home Component</h1>
        {products.map((product, index) => (
        <Product
        key={index}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        quality={product.quality}
        />
    ))}
    </div>
);
};

export default Home;