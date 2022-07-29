import React, { useState } from 'react';
import { Box, Button, Container, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

// * Redux
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../utilities/formatCurrency';
const Navbar = () => {
    let cartItems = useSelector(store => store.cartData);
    const navigate = useNavigate();
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );
    const total = cartItems.reduce((total, cartItem) => {
        const item = cartItems.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Container maxW='full' pos="sticky" top={ 0 } zIndex={ 2 } boxShadow='md' rounded='md' bg='white' >
            <Flex justify='space-between' p='3' w='96%' m='auto'>
                <HStack spacing='24px' >
                    <Box>
                        <Link to='/' as={ NavLink } >Home</Link>
                    </Box>
                    <Box>
                        <Link to='/about' as={ NavLink } >About</Link>
                    </Box>
                    <Box>
                        <Link to='/store' as={ NavLink } >Store</Link>
                    </Box>
                </HStack>
                <HStack>
                    { total > 0 && <Text fontWeight='bold' mr='10'>
                        Total{ " " }
                        { formatCurrency(total) }
                    </Text> }
                    { cartQuantity > 0 &&
                        <Button
                            onClick={ () => navigate('/cart') }
                            style={ { width: "3rem", height: "3rem", position: "relative" } }
                            colorScheme='blue'
                            borderRadius="full"
                        >
                            <Icon boxSize={ 6 } as={ AiOutlineShoppingCart } />

                            <Flex
                                borderRadius="full"
                                justify='center'
                                align='center'
                                bg='red'
                                style={ {
                                    color: "white",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    transform: "translate(25%, 25%)",
                                } }
                            >
                                { cartQuantity }
                            </Flex>
                        </Button>
                    }
                </HStack>

            </Flex>
        </Container>
    );
};

export default Navbar;