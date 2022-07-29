import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const LoadingScreen = () => {
    return (
        <Flex justify='center' align='center' h='full'>
            <Box>
                <Image w='sm' bg='transparent'
                    src="http://cdn.home-designing.com/wp-content/uploads/2018/03/loading.gif"
                    alt="loader"
                />
            </Box>
        </Flex>
    );
};

export default LoadingScreen;