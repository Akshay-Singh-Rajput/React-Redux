import { Badge, Box, Button, Container, Flex, Grid, Icon, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartQuantity, increaseCartQuantity, removeDataFromCart } from '../Redux/action';
import { formatCurrency } from '../utilities/formatCurrency';
import { AiFillStar } from 'react-icons/ai';
import LoadingScreen from './LoadingScreen';

const CartItem = () => {
    const cartData = useSelector(state => state.cartData);
    const dispatch = useDispatch();

    return (
        <Container maxW='container.xl'>
            <Text fontSize={ '4xl' }>Cart</Text>

            <Grid templateColumns='repeat(4, 1fr)' gap={ 6 } pt='10' >
                { cartData && cartData.map((item) => (
                    <Box key={ item.id } borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={ item.image } alt={ item.category } h='200px' w='full' p='2'
                            objectFit='contain' />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Category
                                </Badge>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    { item.category }
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={ 1 }
                            >
                                { item.title }
                            </Box>

                            <Box as='h1' color='gray.600' fontWeight='bold'>
                                { formatCurrency(item.price) }
                            </Box>

                            <Box display='flex' mt='2' justifyContent='center' alignItems='center'>
                                { Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <Icon as={ AiFillStar }
                                            key={ i }
                                            color={ i < item.rating.rate ? 'teal.500' : 'gray.300' }
                                        />
                                    )) }
                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                    { item.rating.count } reviews
                                </Box>
                            </Box>
                            <Flex justify='center' align='center' mt={ 5 }>
                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } m='2' disabled={ item.quantity === 1 } onClick={ () => dispatch(decreaseCartQuantity(item.id)) }>-</Button>
                                <Text fontSize='3xl' m='2'>{ item.quantity }</Text>
                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } onClick={ () => dispatch(increaseCartQuantity(item.id)) } m='2'>+</Button>
                            </Flex>
                            <Button w='full' bg='red.500' color='white' _hover={ { color: 'red', bg: 'white', border: '1px solid red' } } m='2' onClick={ () => dispatch(removeDataFromCart(item.id)) }>DELETE</Button>
                        </Box>
                    </Box>
                )) }
            </Grid>
        </Container>

    );
};


export default CartItem;

/* 
  <Container maxW='full'>
            <Text fontSize={ '6xl' }>Cart </Text>
            <Grid templateColumns='repeat(5, 1fr)'>
                { cartData.length > 0 ? cartData.map((e) => (
                    <Box>
                        <Image src={ e.image } alt={ e.category } h='50px' w='full' p='2'
                            objectFit='contain' />
                        <Text> { e.price }</Text>
                        <Flex justify='center' align='center'>
                            <Button onClick={ () => dispatch(increaseCartQuantity(e.id)) }>+</Button>
                            <Text>{ e.quantity }</Text>
                            <Button disabled={ e.quantity === 1 } onClick={ () => dispatch(decreaseCartQuantity(e.id)) }>-</Button>
                        </Flex>
                        <Button onClick={ () => dispatch(removeDataFromCart(e.id)) }>DELETE</Button>
                    </Box>

                )) : null }
            </Grid>
        </Container>
*/