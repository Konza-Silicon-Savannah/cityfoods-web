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

const Cart = () => {
  return (

    <Dialog>
        <DialogTrigger asChild>
            <IconButton className='px-4 text-green-700' aria-label='add to cart'>
                <Badge badgeContent={4} color="success">
                    <LocalMallIcon />
                </Badge>
            </IconButton>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
            <OrderCard />
        </DialogContent>
    </Dialog>
  )
}

export default Cart