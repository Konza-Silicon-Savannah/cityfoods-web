import React, { useState } from 'react';
import FoodItem from './FoodItem';
import Cart from './cart';

interface Food {
    id: number;
    name: string;
    price: string;
    description: string;
    menu_category: string;
    image: string;
}

interface CartItem extends Food {
    quantity: number;
}

const MenuAndCart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Food) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: number, newQuantity: number) => {
        if (newQuantity === 0) {
            removeFromCart(itemId);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === itemId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    return (
        <div>
            <Cart
                cartItems={cartItems}
                onRemoveItem={removeFromCart}
                onUpdateQuantity={updateQuantity}
            />
            <FoodItem onAddToCart={addToCart} />
        </div>
    );
};

export default MenuAndCart;