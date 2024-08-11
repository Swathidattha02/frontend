// import './App.css';
// import { SignIn } from './components/signin/signin';
// import logo from './logo.svg';
// import './App.css';
// import { Education } from './components/education/education';
// import { Managementskills } from './components/managementskills/managementskills';
// import { Aboutme } from './components/aboutme/aboutme';
// import { Languages } from './components/languages/languages';
// import { UseStateFunction } from './components/statefunction/statefunction';

// import { Signin } from "./components/signin/signin";

// import { Fpass } from './components/fpass/fpass';
// import { SignUp } from './components/signup/signup';

// function App() {
//   return (
    
    <>
    {/* <h2>this is my resume</h2>  */}
    {/* <Aboutme/>
    <Education/>
    <Languages/>
    <Managementskills/> */}
    {/* <UseStateFunction/> */}
      {/* <Signin/> */}
    {/* <SignUp/> */}
    {/* <Fpass/> */}
    </>
    
// );
// }

// export default App;

// import {SignUp} from './components/signup/signup';

// import { Personal } from './components/resume/personal';
// import { Education } from './components/resume/education';
// import { Skills } from './components/resume/skills';
// import { UseStateFunction } from './components/usestate';
// import { SignUp } from './components/signup/signup';
// import './App.css';
// import { SignIn } from "./components/signin/signin";
// import {SignUp} from './components/signup/signup';

// function App() {
//   return (<>
//   <SignIn/>
//   <BrowserRouter>
//    <Routes> 
//      {/* <Route path='/' element={<SignIn/>}/>
//     <Route path='/signup' element={<SignUp/>}/> */}
//     <Route path='/students' element={<StudentsData/>}/>
    
//   </Routes>
  
//    </BrowserRouter>
   
//   </>
 
  
    
   
//   );
// }

// export default App;

// import './App.css';
// import { SignIn } from './components/signin/signin';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { SignUp } from './components/signup/signup';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/Signin' element={<SignIn />} />
//         <Route path='/signup' element={<SignUp />} />
//         {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}

//       </Routes>
//     </BrowserRouter>
    
//   );
// }

// export default App;

// import './App.css';
// import { SignIn } from './components/signin/signin';
// import {SignUp} from './components/signup/signup';

// import { Personal } from './components/resume/personal';
// import { Education } from './components/resume/education';
// import { Skills } from './components/resume/skills';
// import { UseStateFunction } from './components/usestate';
// function App() {
//   return (
//   <>
//   <SignIn/>
//   </>
    
   
//   );
// }

// export default App;



//import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { SignIn} from './Components/Signin/signin';
import { SignUp } from './Components/Signup/signup';
import { ForgetPassword } from './Components/Forgetpassword/forgetpassword';
import { StudentData } from './Components/studentdetails/students';
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
      
      <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/students' element={<StudentData/>}/>

    </Routes>
    </BrowserRouter>
 
      </>
    
  );
}

export default App;