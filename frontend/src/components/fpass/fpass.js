// import { Input,FormControl,FormLabel,FormHelperText } from "@chakra-ui/react"
//     export const Fpass=()=>{
//     return(
//         <>
        
//         <FormControl>
//   <FormLabel>NEW PASSWORD</FormLabel>
//   <Input type='password' />
//   <FormHelperText>please enter a new password .</FormHelperText>
// </FormControl>
// <FormControl>
//  <FormLabel>CONFRIM PASSWORD</FormLabel>
//  <Input type='password' />
//  <FormHelperText>please enter a confrim password .</FormHelperText>
//  </FormControl>
//  </>
// );
// }

// import { Input, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

// export const Fpass = () => {
//   return (
//     <>
//       <FormControl
//         border="1px"
//         borderColor="gray.300"
//         borderRadius="md"
//         boxShadow="md"
//         p={4}
//         mb={4}
//       >
//         <FormLabel>NEW PASSWORD</FormLabel>
//         <Input
//           type='password'
//           borderColor="gray.300"
//           borderRadius="md"
//           _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
//         />
//         <FormHelperText>please enter a new password.</FormHelperText>
//       </FormControl>

//       <FormControl
//         border="1px"
//         borderColor="gray.300"
//         borderRadius="md"
//         boxShadow="md"
//         p={4}
//       >
//         <FormLabel>CONFIRM PASSWORD</FormLabel>
//         <Input
//           type='password'
//           borderColor="gray.300"
//           borderRadius="md"
//           _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
//         />
//         <FormHelperText>please enter a confirm password.</FormHelperText>
//       </FormControl>
//     </>
//   );
// };
// import { Input, FormControl, FormLabel, FormHelperText, Box } from "@chakra-ui/react";

// export const Fpass = () => {
//   return (
//     <Box 
//       display="flex" 
//       flexDirection="column" 
//       alignItems="center" 
//       p={4}
//     >
//       <FormControl 
//         mb={4} 
//         width="100%" 
//         maxWidth="400px" 
//         textAlign="center"
//       >
//         <FormLabel>NEW PASSWORD</FormLabel>
//         <Input 
//           type='password' 
//           borderColor="gray.300" 
//           borderRadius="md" 
//           boxShadow="md"
//           _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
//         />
//         <FormHelperText>please enter a new password.</FormHelperText>
//       </FormControl>

//       <FormControl 
//         width="100%" 
//         maxWidth="400px" 
//         textAlign="center"
//       >
//         <FormLabel>CONFIRM PASSWORD</FormLabel>
//         <Input 
//           type='password' 
//           borderColor="gray.300" 
//           borderRadius="md" 
//           boxShadow="md"
//           _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
//         />
//         <FormHelperText>please enter a confirm password.</FormHelperText>
//       </FormControl>
//     </Box>
//   );
// };
import { Input, FormControl, FormLabel, FormHelperText, Box } from "@chakra-ui/react";

export const Fpass = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      maxW="sm"
      mx="auto"
      mt="10"
    >
      <FormControl>
        <FormLabel textAlign="center">NEW PASSWORD</FormLabel>
        <Input type="password" />
        <FormHelperText textAlign="center">Please enter a new password.</FormHelperText>
      </FormControl>
      <FormControl mt="4">
        <FormLabel textAlign="center">CONFIRM PASSWORD</FormLabel>
        <Input type="password" />
        <FormHelperText textAlign="center">Please enter a confirm password.</FormHelperText>
      </FormControl>
    </Box>
  );
};

