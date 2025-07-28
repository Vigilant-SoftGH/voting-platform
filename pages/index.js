//import Image from "next/image";
import { Geist, Inter, Geist_Mono } from "next/font/google";

import { Box, Button, Center, Fade, SimpleGrid, Image, defaultSystem, Heading, Input, Stack, Text, Textarea, VStack, HStack, Icon, Spacer, Show, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import Head from "next/head";
import { useRouter } from "next/router";
import { Field } from "@/components/ui/field";
import { useState, forwardRef, useEffect, useRef } from "react";
import { db } from "@/firebase/firebaseConfig";
import { getAuth } from "@firebase/auth";
import { doc, setDoc, collection, orderBy, query, limit, getDocs } from "@firebase/firestore";
import { LuBaggageClaim, LuCoins, LuHeart, LuShoppingBag, LuWatch } from "react-icons/lu";
import {useWindowSize} from 'react-use';

import { MdAppRegistration, MdArrowForward, MdFavorite, MdFemale, MdGroup, MdMoney, MdHandyman, MdHome, MdLaunch, MdMale, MdNavigation, MdNumbers, MdPeople, MdSearch, MdWork } from "react-icons/md";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import FlatList from "flatlist-react/lib";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
})

const auth = getAuth();

export default function Home() {

const route = useRouter(); 

const {width, height} = useWindowSize();

    const [email, setEmail] = useState("");
	const [search, setSearch] = useState("");
    const [name, setName] = useState("");
   const [feedback, setFeedback] =useState("");
   const [disabled, setDisabled] = useState(false);

   const [loading, setLoading] = useState(false);

       const [data, setData] = useState([]);
       const [dataFilter, setDataFilter] = useState([]);
     const [lastSeen, setLastSeen] = useState(null);
   
 
   
         const [valueFilter, setValueFilter] = useState();
		 
		 
		  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
	
  }
   
     useEffect(() => {
     
     
       const loadData = async () => {
     //setIsLoading(true);
    
             //const userEntries; 
     const q = query(collection(db, "users"),  orderBy("creationDate", "desc"), limit(1000));
     
             const list = [];
          
             const documentSnapshots = await getDocs(q);
     
             let documentData = documentSnapshots.docs.map((document, index) => ({
               
               id:document.id,
               ...document.data(),
               index: index
             }));
     
             const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
             console.log("LAST SEEN =>", lastVisible);
     
             setLastSeen(lastVisible);
     console.log(documentData.length)
               setData(documentData);
               setDataFilter(documentData);
                
     
               //setIsLoading(false);
     
                //alert(documentData.length);
       
       }
     
       loadData()
     
     
     
       //setFinish((finish) => !finish)
     
     
     }, [setData]);

   const handleName = (e) =>{

const query = e.target.value;

setName(query);


   }	


   const handleEmail = (e) =>{

    const query = e.target.value;
    
    setEmail(query);
    
    
       }	


       const handleFeedback = (e) =>{

        const query = e.target.value;
        
        setFeedback(query);
        
        
           }	



  return (
    <Provider>
       <Box bg="white" h="auto">
         <Head>
   
   {/*Your site meta data goes here*/}
   
   <meta
    name="description" content="Online voting platform. Tailored for event organizers and voters" />
    
    
    <meta Property="og:description" content="Online voting platform. Tailored for event organizers and voters" />
            <meta name="twitter:description" content="  Online voting platform. Tailored for event organizers and voters" />
                 <meta name="keywords" content="digital, skills, aiskills, learnai, learn ai, artificial, hailuo ai ghana, ghana skills, ghana jobs, online jobs ghana, intelligence, ghana work online free, ghana tech news, " />
    
                <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="language" content="ES" />
    <meta name="robots" content="index,follow" />
     
    <meta name="url" content="https://www.vigilantsoftgh.com.com" />
    <meta name="identifier-URL" content="https://www.vigilantsoftgh.com.com" />
    
    <meta name="author" content="VigilantSoft : https://www.facebook.com/VigilantSoftGH" />
    <meta name="subject" content="Online voting platform. Tailored for event organizers and voters" />
    
    <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Online voting platform. Tailored for event organizers and voters" />
      <meta property="og:url" content="https://www.vigilantsoftgh.com.com/" />
      <meta property="og:site_name" content="Online voting platform. Tailored for event organizers and voters" />
    
      <meta property="og:image" content="https://www.vigilantsoftgh.com.com/Learn.jpg" />
            <meta property="og:image:alt" content="Online voting platform. Tailored for event organizers and voters" />
            <meta name="twitter:image" content="https://www.vigilantsoftgh.com.com/Learn.jpg" />
   
   <title>
   E-Voting Platform - Voting made easier
   
     </title>
   
         </Head>
		 	  <Header />
		   <Box shadow="md" w="100%"
      h={{base:"400px", md:"100vh"}}
      bgImage="url('Queen.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover">
	   
	  <Center>
        <Box data-state="open"
  _open={{ animationName: "fade-in, scale-in", animationDuration: "300ms" }}
  _closed={{ animationName: "fade-out, scale-out", animationDuration: "120ms" }} zIndex="1" m={"10%"} rounded="md" bg="gray.500" lineHeight={1} w="60%" h="60%" py="10%" opacity="0.93">
         
<Center h="100%">
        <VStack spacing={6} w={{ base: '90%', md: '70%', lg: '50%' }} textAlign="center">
          <Text
            color="white"
            className={inter.className}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
           Voting Made Easier
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }}>
            Voting for your favorite contestant is no more a hassle. With few clicks, you can vote and make your contestant winner of the respective contest.
          </Text>
		  
		   <Link  href="/" variant="link">
            <Box px="6" py="3" _hover={{ bg: 'blue.600' }} rounded="lg" mt={4} bg="blue.700"><Text fontWeight="400" color="white">Get Started
			</Text>
			</Box>
          </Link>
        </VStack>
      </Center>

      
      </Box>
</Center>

      </Box>
	  
	  
	    <Box
      as="section"
      height="100vh"
      
      px={6}
      py={12}
    >
      <Center h="100%">
        <VStack spacing={6} w={{ base: '90%', md: '70%', lg: '50%' }} textAlign="center">
		

		
          <Text
            color="cyan.600"
            className={inter.className}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
           Vote for your favorite contestant
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            Our voting platform makes it super easy to vote and keep your contestant winning.
          </Text>
		  
		   <Link  href="/" variant="link">
            <Box px="6" py="3" _hover={{ bg: 'blue.600' }} rounded="lg" mt={4} bg="blue.700"><Text fontWeight="400" color="white">Vote Now
			</Text>
			</Box>
          </Link>
        </VStack>
      </Center>
    </Box>
	  

		 
		  <Box
      as="section"
      height="100%"
      
      px={6}
      py={12}
    >
      <Center h="100%">
        <VStack spacing={6} w={{ base: '90%', md: '70%', lg: '50%' }} textAlign="center">
		
		<Image resize="contain" src="Queen.png" w="100%" h={{base:"300px", md:"400px"}} />
		
          <Text
            color="cyan.600"
            className={inter.className}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
            E-Voting Platform Tailored for your Needs
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            Event organizers can easily create event, add categories, and the respective nominees/aspirants.
          </Text>
		  
		   <Link  href="/" variant="link">
            <Box px="6" py="3" _hover={{ bg: 'blue.600' }} rounded="lg" mt={4} bg="blue.700"><Text fontWeight="400" color="white">Create Now
			</Text>
			</Box>
          </Link>
        </VStack>
      </Center>
    </Box>
	
	  

   
  
   <Center>
	
	  <HStack><Text my="8" fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
         Choose How You Pay for Voting
          </Text><Icon color="cyan.500" as={MdMoney} w={"35px"} h={"35px"} /></HStack>
	</Center>
	
	
	<SimpleGrid mb="12" px="2" columns={{ base: 1, md: 2 }} gap={6}>
   
   <Box p={6} borderWidth="1px"
  borderColor="gray.200"  
  borderRadius="xl"
  boxShadow="xs">
          <Text fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
         Pay using MoMo
          </Text>
          <Text mt={2} color="gray.600">
            As an event organizer, you get paid within 24 hours after the voting ends.
          </Text>
		  
         
         <Link title="MoMo Payment" href="/" variant="link">
            <Text variant="link"
  color="cyan.700"
  fontWeight="semibold"
  _hover={{ textDecoration: 'underline' }} mt={4}>Learn More {'>'}
			</Text>
          </Link>
         
       
        </Box>
   
   
   
    <Box p={6} borderWidth="1px"
  borderColor="gray.200"    
  borderRadius="xl"
  boxShadow="xs">
          <Text fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
           Pay via Bank
          </Text>
          <Text mt={2} color="gray.600">
            Get paid directly into your bank account after getting report on the voting you organized.
          </Text>
		  
		  <Link title="Bank Transfer" href="/" variant="link">
            <Text variant="link"
  color="cyan.700"
  fontWeight="semibold"
  _hover={{ textDecoration: 'underline' }} mt={4}>Learn More {'>'}
			</Text>
          </Link>
          
        </Box>
		
		
		  <Box p={6} borderWidth="1px"
  borderColor="gray.200"    
  borderRadius="xl"
  boxShadow="xs">
          <Text fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
          Pay using Card
          </Text>
          <Text mt={2} color="gray.600">
            Pay using VISA/MasterCard
          </Text>
		  
		  <Link title="Bank Transfer" href="/" variant="link">
            <Text variant="link"
  color="cyan.700"
  fontWeight="semibold"
  _hover={{ textDecoration: 'underline' }} mt={4}>Learn More {'>'}
			</Text>
          </Link>
          
        </Box>
		
	
   
   </SimpleGrid>
	
	
	   <Center>
	
	  <HStack><Text my="8" fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
         Choose How You Get Paid
          </Text><Icon color="cyan.500" as={MdMoney} w={"35px"} h={"35px"} /></HStack>
	</Center>
   
   
    <SimpleGrid mb="12" px="2" columns={{ base: 1, md: 2 }} gap={6}>
   
   <Box p={6} borderWidth="1px"
  borderColor="gray.200"  
  borderRadius="xl"
  boxShadow="xs">
          <Text fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
          Mobile Money Transfer (MoMo)
          </Text>
          <Text mt={2} color="gray.600">
            As an event organizer, you get paid within 24 hours after the voting ends.
          </Text>
		  
         
         <Link title="Pay by Direct MoMo Transfer" href="/momo" variant="link">
            <Text variant="link"
  color="cyan.700"
  fontWeight="semibold"
  _hover={{ textDecoration: 'underline' }} mt={4}>Learn More {'>'}
			</Text>
          </Link>
         
       
        </Box>
   
   
   
    <Box p={6} borderWidth="1px"
  borderColor="gray.200"    
  borderRadius="xl"
  boxShadow="xs">
          <Text fontSize={{base:"xl", md: "2xl"}} fontWeight="bold" color="cyan.700">
           Bank Transfer
          </Text>
          <Text mt={2} color="gray.600">
            Get paid directly into your bank account after getting report on the voting you organized.
          </Text>
		  
		  <Link title="Pay via Paystack" href="/paystack" variant="link">
            <Text variant="link"
  color="cyan.700"
  fontWeight="semibold"
  _hover={{ textDecoration: 'underline' }} mt={4}>Learn More {'>'}
			</Text>
          </Link>
          
        </Box>
		
	
   
   </SimpleGrid>

   
         <Footer />

   
       </Box>
       </Provider>
  );
}
