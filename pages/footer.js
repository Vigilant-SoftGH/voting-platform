//import Image from "next/image";
'use client'
import { Inter } from "next/font/google";
import { Box, Container, IconButton,   Show, Hide, Spacer, Flex, HStack, Center, Heading, Icon, SimpleGrid, Input, Button, Stack, Text, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, useToast, VStack } from '@chakra-ui/react';
import { MdAppRegistration, MdAnnounce, MdArrowForward, MdFavorite, MdFemale, MdMoney, MdGroup, MdHandyman, MdHome, MdLaunch, MdMale, MdNavigation, MdNumbers, MdPeople, MdSearch, MdWork } from "react-icons/md";
import NextLink from 'next/link';
import { useRouter } from "next/router";




import { Provider } from "@/components/ui/provider";
import { useState, useEffect } from "react";
import Link from "next/link";


//import { Icon } from "react-native-vector-icons/Icon";



//const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  const [terms, setTerms] = useState("false");

  const route = useRouter();

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedValue = localStorage.getItem('TermsAgreedMaturedSingles');
    if (storedValue) {

      setTerms(storedValue);
      
    }
  }, [terms]);

  const TermsData = () =>{

    const storedValue = localStorage.getItem('TermsAgreedMaturedSingles');
    if (storedValue) {
      localStorage.setItem("TermsAgreedMaturedSingles", "true");
      setTerms("true");
    }

    else
    {

      localStorage.setItem("TermsAgreedMaturedSingles", "true");
      setTerms("true");
    }

  }

  return (
   <Provider>
   
     

 <Stack gap="7" px="10" py="4" bg="gray.800" direction={{base: "column", md: "row"}} w="100%" h="auto">



     <VStack><HStack  p="30px" rounded="md" m="4"><Box bg="cyan.400" rounded="full" p="2"><Icon as={MdMoney} w={"35px"} h={"35px"} /></Box><Box><Heading lineHeight={1}><Text color="gray.600">Voting</Text>  <Text color="gray.500">Platform</Text></Heading></Box></HStack>
	 
<Box p="30px" mt="8" w={{base: "90%", md: "100%"}}><HStack><Text fontSize="10px" color="white">Powered by <strong><span style={{color: "gold"}}>VigilantSoft-GH</span></strong></Text></HStack></Box>
	 </VStack><Spacer /> 
   
   <VStack><Heading justifyContent="center" size={{base : "sm", md: "md"}}>
   
          <Center><HStack><Button _hover={{bg: "gray.600"}} title="Go home" bg="gray.700" onClick={() =>route.push({pathname: "/", query:{}})}><Icon color="white" as={MdHome} w={"20px"} h={"20px"} /></Button>
         
         <Button _hover={{bg: "gray.600"}} title="Admin" bg="gray.700" onClick={() =>route.push({pathname: "/", query:{}})}><Icon color="white" as={MdHandyman} w={"20px"} h={"20px"} /></Button>
             
         </HStack>
		 </Center>
   
   <Box p="30px" mt="8" w={{base: "90%", md: "100%"}}><HStack><Text fontSize="10px" color="white">All Rights Reserved {'\u2022'} {new Date().getFullYear()}</Text></HStack></Box>
         </Heading>
         

         
         </VStack></Stack>



{
  terms == "false" &&
<Box p={4} bg={"gray.900"} position={"fixed"} opacity={"0.95"}  top={{base:"70%", md:"75%"}} bottom="0" >
  <VStack>
    <Box pt={1}>
  <Center><Button onClick={TermsData} color="black">I Agree</Button></Center>
</Box>
<Text whiteSpace="pre-line" color="white">We use cookies on this site to help in its proper functionality. By continuing to use this website you are giving consent to cookies being used. <Link href="/privacy" title="Privacy Policy" color="blue.500" _hover={{color: "gray.300"}}>Visit our Privacy and Cookie Policy</Link>.</Text>
</VStack>
</Box>}
</Provider>
  );
}
