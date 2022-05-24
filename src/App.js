import Home from './Pages/Home.js'
import Question from './Pages/Question.js';
import Result from './Pages/Result.js';
import {Routes,Route} from 'react-router-dom';
//위처럼 Routes/Route 해주면 index.js 가서 import {BrowserRouter} from 'react-router-dom'; 해줘야함
import './App.css';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/question' element={<Question/>}/>
    <Route path='/result' element={<Result/>}/>
    </Routes>
  );
}

export default App;
