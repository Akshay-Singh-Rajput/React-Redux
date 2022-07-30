import { Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

//* redux
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../Redux/action';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div>
      <Text fontSize={ '6xl' }>Home </Text>
    </div>
  );
};

export default Home;