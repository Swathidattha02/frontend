// import { Input,FormControl,FormLabel,FormHelperText } from "@chakra-ui/react"
//     export const SignIn=()=>{
//     return(
//         <>
        
//         <FormControl>
//   <FormLabel>Email address</FormLabel>
//   <Input type='email' />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>

        
//         </>
//     )
// }
// import { Input, FormControl, FormLabel, FormHelperText, Center, Box } from "@chakra-ui/react";

// export const SignIn = () => {
//     return (
//         <Center height="100vh">
//             <Box width="100%" maxWidth="400px" p={4}>
//                 <FormControl>
//                     <FormLabel>Email address</FormLabel>
//                     <Input type='email' />
//                     <FormHelperText>We'll never share your email.</FormHelperText>
//                 </FormControl>
//             </Box>
//         </Center>
//     );
// };
// import { Input, FormControl, FormLabel, FormHelperText, Center, Box, Stack, Button } from "@chakra-ui/react";
// import axios from 'axios'
// import { api } from " ../actions/api ";
// export const SignIn = () => {
//     const [name,setName]=useState()
//     const[password,setPassword]=useState()

// const Signin=async()=>{
//     await axios.post(api+"/signin",{name,password})
//         .then((res)=>{
//             if(res.data.message){
//                 console.log(res?.data?.values)
//                 alert("login sucessfully")
//             } else {
//                 alert("user not found")
//                 window.location.href="/signup"
//             }
//         })
//         .catch((e)=>console.log(e))
//     }
//     return (
//         <Center height="100vh">
//             <Box width="100%" maxWidth="400px" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
//                 <Stack spacing={4}>
//                     <FormControl>
//                         <FormLabel>Email address</FormLabel>
//                         <Input type='email'onChange={(e)=setName(e.target.value)}/>
//                         <FormHelperText>We'll never share your email.</FormHelperText>
//                     </FormControl>

//                     <FormControl>
//                         <FormLabel>Password</FormLabel>
//                         <Input type='password' />
//                         <FormHelperText>We'll never share your password.</FormHelperText>
//                     </FormControl>

//                     <Button colorScheme="teal" width="full"onClick={(SignIn)}>Sign In</Button>

                    
//                 </Stack>
//             </Box>
//         </Center>
//     );
// };
// import { Input, FormControl, FormLabel, FormHelperText, Center, Box ,Button} from "@chakra-ui/react";

// import axios from 'axios';
// import {api} from "../actions/api";
// import { useState} from "react";
// export const Signin=()=>{
//     const [name,setName]=useState()
//     const [password,setPassword]=useState()

//     const SignIn=async()=>{
//     await axios.post(api+"/SignIn",{name,password})
//         .then((res)=>{
//             if(res.data.message){
//                 console.log(res?.data?.values)
//                 alert("login sucessfully")
//             } else {
//                 alert("enter correct details")
//                 window.location.href="/forgot"
//             }
//         })
//         .catch((e)=>console.log(e))
//     }
//     return(

//         <Box 
//             maxW="400px" 
//             mx="auto" 
//             mt="100px" 
//             p="6" 
//             borderWidth="1px" 
//             borderRadius="lg" 
//             boxShadow="lg" 
//             textAlign="center"
//         >
//             <FormControl mb={4}>
//                 <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
//                     Email Address
//                 </FormLabel>
//                 <Input 
//                     type="email" 
//                     placeholder="Enter your email" 
//                     focusBorderColor="teal.500"
//                     borderRadius="md"
//                     onChange={(e)=>setName(e.target.value)}
//                 />
//                 <FormHelperText color="gray.500">
//                     We'll never share your email.
//                 </FormHelperText>
//             </FormControl>

//             <FormControl mb={6}>
//                 <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
//                     Password
//                 </FormLabel>
//                 <Input 
//                     type="password" 
//                     placeholder="Enter your password" 
//                     focusBorderColor="teal.500"
//                     borderRadius="md"
//                     onChange={(e)=>setPassword(e.target.value)}
//                 />
//                 <FormHelperText color="gray.500">
//                     Ensure your password is strong and secure.
//                 </FormHelperText>
//             </FormControl>

//             <Button 
//                 colorScheme="teal" 
//                 size="lg" 
//                 width="100%" 
//                 borderRadius="md" 
//                 onClick={SignIn}
//             >
//                 Sign In
//             </Button>
//         </Box>
//     );
// }

// import { 
//     Card, 
//     CardBody, 
//     FormControl, 
//     FormHelperText, 
//     FormLabel, 
//     Input, 
//     Button, 
//     VStack, 
//     Box 
// } from "@chakra-ui/react";
// import axios from 'axios';
// import { api } from "../actions/api";
// import { useState } from "react";

// export const SignIn = () => {
//     const [email,setName]=useState()
//     const [password,setPassword]=useState()

//     const Signin=async()=>{
//         await axios.post(api+"/signin",{email,password})
//         .then((res)=>{
//             if(res.data){
//                 console.log(res?.data?.values)
//                 alert(res.data.message)
//             } else {
//                 alert(res.data.error)
//                 window.location.href="/signup"
//             }
//         })
//         .catch((e)=>console.log(e))
//     }

//     return (
//         <Box 
//             height="100vh" 
//             display="flex" 
//             justifyContent="center" 
//             alignItems="center" 
//             bg="gray.50"
//         >
//             <Card 
//                 width="400px" 
//                 boxShadow="lg" 
//                 p={6} 
//                 borderRadius="md"
//             >
//                 <CardBody>
//                     <VStack spacing={4} align="stretch">
//                         <FormControl id="email">
//                             <FormLabel>Email address</FormLabel>
//                             <Input type="email" focusBorderColor="teal.500" onChange={(e)=>setName(e.target.value)} />
//                             <FormHelperText>We'll never share your email.</FormHelperText>
//                         </FormControl>

//                         <FormControl id="password">
//                             <FormLabel>Password</FormLabel>
//                             <Input type="password" focusBorderColor="teal.500" onChange={(e)=>setPassword(e.target.value)}/>
//                             <FormHelperText>We'll never share your password.</FormHelperText>
//                         </FormControl>

//                         <Button colorScheme="teal" size="lg" mt={4} onClick={Signin}>Sign In</Button>
//                     </VStack>
//                 </CardBody>
//             </Card>
//         </Box>
//     );
// };



// import React, { useState } from 'react';
// import {
//     Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
  
//   Button,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Box,
//   Text
// } from '@chakra-ui/react';
// import { api } from '../actions/api';
// import axios from 'axios'
// // import { useNavigate } from 'react-router-dom';

// export const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   // const nav=useNavigate();
//   const validateEmail = (email) => {
//     // Basic email validation regex
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleSubmit = () => {
//     let isValid = true;
    
//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters long');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Handle successful sign-in logic here
//       console.log('Form submitted');
//     }
//   };

//   const Signin=async()=>{
//     await axios.post(api+"/signin",{email,password})
//         .then((res)=>{
//             if(res.data.message){
//                 console.log(res?.data?.values)
//                 alert("login sucessfully")
//                 // nav('/home')
//                 window.location.href="/home"
//             } else {
//                 alert("user not found")
//                 window.location.href="/signup"
//             }
//         })
//         .catch((e)=>console.log(e))

//   }

//   return (
//     <Box bg="gray.50" p={8} minH="100vh" display="flex" alignItems="center" justifyContent="center">
//       <Card width="400px" boxShadow="xl" borderRadius="lg">
//         <CardBody>
//           <Stack spacing={4}>
//             <Heading size="lg" textAlign="center">SIGN IN</Heading>
            
//             <FormControl isInvalid={!!emailError}>
//               <FormLabel>Email address</FormLabel>
//               <Input 
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {!emailError ? (
//                 <FormHelperText>We'll never share your email.</FormHelperText>
//               ) : (
//                 <FormErrorMessage>{emailError}</FormErrorMessage>
//               )}
//             </FormControl>

//             <FormControl isInvalid={!!passwordError}>
//               <FormLabel>Password</FormLabel>
//               <Input 
//                 type="password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {!passwordError ? (
//                 <FormHelperText>We'll never share your password.</FormHelperText>
//               ) : (
//                 <FormErrorMessage>{passwordError}</FormErrorMessage>
//               )}
//             </FormControl>

//             <Button 
//               colorScheme="teal" 
//               size="lg" 
//                onClick={handleSubmit}
//               mt={4}
//               // onClick={Signin} 
//             >
              
//               Sign In
//             </Button>
//             <Button 
//               variant="link" 
//               colorScheme="teal" 
//               onClick={() => window.location.href = '/forgot-password'}
// >
//   Forgot Password?
// </Button>

//           </Stack>
//         </CardBody>
//       </Card>
//     </Box>
//   );
// };
// import { Box, Button, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
// import axios from 'axios';
// import {api} from "../actions/api";
// import { useState} from "react";
// export const Signin=()=>{
//     const [name,setName]=useState()
//     const [password,setPassword]=useState()

//     const SignIn=async()=>{
//     await axios.post(api+"/SignIn",{name,password})
//         .then((res)=>{
//             if(res.data.message){
//                 console.log(res?.data?.values)
//                 alert("login sucessfully")
//             } else {
//                 alert("user not found")
//                 window.location.href="/signup"
//             }
//         })
//         .catch((e)=>console.log(e))
//     }
//     return(

//         <Box 
//             maxW="400px" 
//             mx="auto" 
//             mt="100px" 
//             p="6" 
//             borderWidth="1px" 
//             borderRadius="lg" 
//             boxShadow="lg" 
//             textAlign="center"
//         >
//             <FormControl mb={4}>
//                 <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
//                     Email Address
//                 </FormLabel>
//                 <Input 
//                     type="email" 
//                     placeholder="Enter your email" 
//                     focusBorderColor="teal.500"
//                     borderRadius="md"
//                     onChange={(e)=>setName(e.target.value)}
//                 />
//                 <FormHelperText color="gray.500">
//                     We'll never share your email.
//                 </FormHelperText>
//             </FormControl>

//             <FormControl mb={6}>
//                 <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
//                     Password
//                 </FormLabel>
//                 <Input 
//                     type="password" 
//                     placeholder="Enter your password" 
//                     focusBorderColor="teal.500"
//                     borderRadius="md"
//                     onChange={(e)=>setPassword(e.target.value)}
//                 />
//                 <FormHelperText color="gray.500">
//                     Ensure your password is strong and secure.
//                 </FormHelperText>
//             </FormControl>

//             <Button 
//                 colorScheme="teal" 
//                 size="lg" 
//                 width="100%" 
//                 borderRadius="md" 
//                 onClick={SignIn}
//             >
//                 Sign In
//             </Button>
//         </Box>
//     );
// }


import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Stack,
  Heading,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { api } from '../actions/api';
import { MdLock, MdEmail } from 'react-icons/md'; // Importing icons from react-icons
import axios from'axios'
import { useNavigate } from 'react-router-dom';
export const SignIn = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    const SignIn=async()=>{
    await axios.post(api+"/Signin",{Email,Password})
        .then((res)=>{
            if(res.data.message){
                console.log(res?.data?.values)
                alert("login sucessfully")
                navigate("/home");
            } else {
                alert("user not found")
                 //window.location.href="/signup"
                 navigate("/signup");
            }
        })
      
        .catch((e)=>console.log(e))
}
  return (
    <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="gray.50"
      p={4}
    >
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        shadow="md"
        width={{ base: 'full', sm: 'md' }}
      >
        {/* Heading with icon */}
        <Stack spacing={6} mb={8} textAlign="center">
          <Heading as="h1" size="lg" color=" black">
            <Icon as={MdLock} boxSize={8} color=" black" /> Sign In
          </Heading>
        </Stack>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="Email"
              placeholder="Enter your email"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
              _hover={{ borderColor: 'teal.300' }}
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              p={2}
              width="full"
              transition="border-color 0.2s ease, box-shadow 0.2s ease"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="Password"
              placeholder="Enter your password"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
              _hover={{ borderColor: 'teal.300' }}
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              p={2}
              width="full"
              transition="border-color 0.2s ease, box-shadow 0.2s ease"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormHelperText>Make sure your password is strong.</FormHelperText>
          </FormControl>
          <Button colorScheme="teal" width="full"    onClick={SignIn}
          >
          
            Sign In
          </Button>
        </Stack>
      </Box>
    </Box>
    <text></text>
    </>
  );
}