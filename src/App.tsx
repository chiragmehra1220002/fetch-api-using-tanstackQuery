import { QueryClient } from '@tanstack/react-query';
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Users from './Users';
import Home from './Pages/Home';

const App : React.FC= () =>{
  
  const queryClient = new QueryClient();
 

  return (
    <>
       <QueryClientProvider client={queryClient}>
        
        {/* <Users/> */}
        <Home />
        
       

      </QueryClientProvider>
    
    </>
  )
}

export default App
