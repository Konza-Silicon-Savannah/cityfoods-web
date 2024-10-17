import React from 'react';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { OrderCard } from './OrderCard';

interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

interface CartProps {
    cartItems: CartItem[];
    onRemoveItem: (itemId: number) => void;
    onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems = [], onRemoveItem, onUpdateQuantity }) => {
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Dialog >
            <DialogTrigger asChild>
                <IconButton className='px-4 text-green-700' aria-label='add to cart'>
                    <Badge badgeContent={cartItemCount} color="success">
                        <LocalMallIcon />
                    </Badge>
                </IconButton>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <OrderCard
                    items={cartItems}
                    onRemoveItem={onRemoveItem}
                    onUpdateQuantity={onUpdateQuantity}
                />
            </DialogContent>
        </Dialog>
    );
};

export default Cart;