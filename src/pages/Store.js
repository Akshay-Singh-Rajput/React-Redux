import { Badge, Box, Image, Icon, Grid, Container, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { formatCurrency } from '../utilities/formatCurrency';

//* redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchAllProducts, increaseCartQuantity } from '../Redux/action';
import { IncreaseCartQuantity } from '../components/CartAction';
import LoadingScreen from '../components/LoadingScreen';


const Shop = () => {
    const [ products, setProducts ] = useState([]);
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 600);
    }, []);
    let cartItems = useSelector(store => store.cartData);
    // console.log(cartItems);

    const fetchProductApi = async () => {
        const url = 'https://fakestoreapi.com/products';

        let res = await fetch(url);
        let data = await res.json();

        setProducts(data);
        // console.log(data);


    };

    const handleCart = (item) => {
        const { id } = item;
        let newItem = { ...item };
        let find = cartItems.find(item => item.id === id);
        if (find === undefined) {
            newItem.quantity = 1;
            dispatch(addToCart(newItem));
        } else {
            dispatch(increaseCartQuantity(id));
            console.log('cartItems', cartItems);
        }

    };

    useEffect(() => {
        fetchProductApi();
        // dispatch(fetchAllProducts());

    }, []);

    return (
        <Container maxW='container.xl'>
            <Text fontSize={ '4xl' }>Store </Text>
            { !loading ?
                <Grid templateColumns='repeat(4, 1fr)' gap={ 6 } pt='10' >
                    { products && products.map((item) => (
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
                                <Box w='full' as='button' mt={ 10 } onClick={ () => handleCart(item) }>
                                    <Button w='full' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } }>+ADD TO CART</Button>
                                </Box>
                            </Box>
                        </Box>
                    ))

                    }</Grid>
                : <LoadingScreen />
            }
        </Container>
    );

};

export default Shop;