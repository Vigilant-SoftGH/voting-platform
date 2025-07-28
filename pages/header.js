//import Image from "next/image";
'use client'
import { Inter } from "next/font/google";
import { Box, Container, IconButton, Show, Hide, Spacer, Flex, HStack, Center, Heading, Icon, SimpleGrid, Input, Button, Stack, Text, Menu, useToast, VStack, Portal } from '@chakra-ui/react';
import { MdAppRegistration, MdAnnounce, MdArrowForward, MdFavorite, MdFemale, MdMoney, MdMenu, MdGroup, MdHandyman, MdHome, MdLaunch, MdMale, MdNavigation, MdNumbers, MdPeople, MdSearch, MdWork } from "react-icons/md";
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
   
     
<Box zIndex="2" w="100%" position="fixed" display={{ base: 'none', md: 'block' }} bg="blue.700" ><HStack spacing={3}><Box bg="black" ml="3" rounded="md"></Box><Link href='/' _hover={{ color: 'cyan.800' }}><Text p="3" fontSize="16px"> Voting Logo</Text></Link> <Spacer /><Link href='/' _hover={{ color: 'gray.600' }}><Text p="3" fontSize="16px"> Home</Text></Link><Link href='/' _hover={{ color: 'gray.600' }}><Text p="3" fontSize="16px"> Voting</Text></Link><Link href='/' _hover={{ color: 'gray.600' }}><Text p="3" fontSize="16px"> FAQ</Text></Link><Link href='/' _hover={{ color: 'gray.600' }}><Text p="3" fontSize="16px"> Awards</Text></Link><Link href='/' _hover={{ color: 'gray.600' }}><Text p="3" fontSize="16px"> Results</Text></Link><Link href='/' _hover={{ color: 'gray.600' }}><Text p="3" fontSize="16px"> Login</Text></Link><Spacer /></HStack></Box>
		  
		  
		  
		  <Box display={{ base: 'block', md: 'none' }} w="100%" bg="blue.700" opacity={"1"} px="3" ><HStack spacing={3} w="100%"><Box w="20%"><Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
        <Icon color="white" as={MdMenu} w={"20px"} h={"20px"} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">Home</Menu.Item>
            <Menu.Item value="new-file">Voting</Menu.Item>
           
            <Menu.Item value="open-file">FAQ</Menu.Item>
            <Menu.Item value="export">Awards</Menu.Item>
			 <Menu.Item value="export">Results</Menu.Item>
			  <Menu.Item value="new-win">Login</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root></Box><Box w="60%"><Heading size={{base: 'sm', md:'md', lg:null}} p="3"> <Link onClick={() =>location.href="/"} href='/' _hover={{ color: 'gray.600' }}>Voting Platform</Link></Heading></Box></HStack></Box>
</Provider>
  );
}
