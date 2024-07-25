import React from 'react';
import Product from './Product';

const Home = () => {
    const products = [
    {
    name: 'Computer',
    image: 'https://th.bing.com/th/id/OIP.Rev49MCG8uGBE9AqNVcyMQHaHa?rs=1&pid=ImgDetMain',
    description: 'This is a sample product description for computer',
    price: 29.99,
    quality: 10,
    },
    {
    name: 'LGTV',
    image: 'https://th.bing.com/th/id/OIP.YTs0PFhAfmFndkGrlJNzewHaHa?rs=1&pid=ImgDetMain',
    description: 'This is a sample product description for LGTV',
    price: 49.99,
    quality: 5,
    },
    {
    name: 'Printer',
    image: 'https://th.bing.com/th/id/OIP.4WEQLu2YIxRTk_zM4R2zvgAAAA?rs=1&pid=ImgDetMain',
    description: 'This is a sample product description for Printer',
    price: 19.99,
    quality: 20,
    },
    {
    name: 'Laptop',
    image: 'https://th.bing.com/th/id/OIP.4XYfOWUffmNtO8BvEs-dLQHaHa?rs=1&pid=ImgDetMain',
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