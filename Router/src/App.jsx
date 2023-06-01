import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Parent from './Components/Parent';
import PageNotFound from './Components/PageNotFound';
import ChildOne from './Components/ChildOne'; 
import ChildTwo from './Components/ChildTwo';
import ChildThree from './Components/ChildThree';

function App() {  

  return (
    
      <Router>
        <Routes>          
            <Route path="/" element={<Parent />} > 
              <Route index element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path='/childone' element={<ChildOne />} />
              <Route path='/childtwo' element={<ChildTwo />} />
              <Route path='/childthree' element={<ChildThree />} />
             </Route>          
        </Routes>
      </Router>
    
  )
}

export default App
