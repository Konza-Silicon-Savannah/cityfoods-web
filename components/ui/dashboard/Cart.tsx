import React from "react";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OrderCard } from "./OrderCard";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  vendor: number; // Add vendor ID to the CartItem interface
}

interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems = [],
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton className="px-4 text-green-700" aria-label="add to cart">
          <Badge badgeContent={cartItemCount} color="success">
            <LocalMallIcon />
          </Badge>
        </IconButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Preview of your cart</DialogTitle>
          <DialogDescription>Adjust your Quantities</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <OrderCard
            items={cartItems}
            onRemoveItem={onRemoveItem}
            onUpdateQuantity={onUpdateQuantity}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
