import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/action';


export const IncreaseCartQuantity = (id) => {
    const dispatch = useDispatch();
    // const currItems = useSelector(store => store.cartData);
    console.log(id);
    // dispatch(addToCart(currItems => {
    //     if (currItems.find(item => item.id === id) == null) {
    //         return [ ...currItems, { id, quantity: 1 } ];
    //     } else {
    //         return currItems.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, quantity: item.quantity + 1 };
    //             } else {
    //                 return item;
    //             }
    //         });
    //     }
    // }))

};

export const DecreaseCartQuantity = () => {
    return (
        <div>CartAction</div>
    );
};


export const RemoveFromCart = () => {
    return (
        <div>CartAction</div>
    );
};

