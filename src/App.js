import logo from './logo.svg';
import React from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Grid from './Grid';
import Grid2 from './Grid2';
import Grid3 from './Grid3';
import Grid4 from './Grid4'
import Grid5 from './Grid5';
import Grid6 from './Grid6';
import Grid7 from './Grid7';
import MyGrid from './MyGrid';


function App() {

  // const [data,setData] = useState([])
  // useEffect(() =>{
  //   fetch("http://localhost:4000/user/api").then((result)=>{
  //     result.json.then((resp)=>{
  //       console.log("result",resp)
  //       setData(resp);
  //     })
  //   })
  // },[]);

  
  return (
      <>
      {/*    TailwindPractice/My_React_Grid*/}
       <div className='App'>
        <br/>
      <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💫💫💫 React Grid System 💫💫💫</h1>
      <br/>
     
      <BrowserRouter><pre> 
      <Link to ="/">Grid1</Link> 
      <Link to ="/Grid1">  Grid2</Link>
      <Link to ="/Grid2">  Grid3</Link>&nbsp;&nbsp;
      <Link to ="/Grid3"> Grid4</Link>&nbsp;&nbsp;
      <Link to ="/Grid4">Grid5</Link>&nbsp;&nbsp;
      <Link to ="/Grid5">Grid6</Link>&nbsp;&nbsp;
      <Link to ="/Grid6">Grid7</Link>&nbsp;&nbsp;
      <Link to ="/Grid7">Grid8</Link>&nbsp;&nbsp;</pre><br/><br/>
      <Routes>
        <Route path="/" element ={<Grid />} />
        <Route path="/Grid1" element ={<MyGrid />} />
        <Route path="/Grid2" element ={<Grid2 />} />
        <Route path="/Grid3" element ={<Grid3/>} />
        <Route path="/Grid4" element ={<Grid4 />} />
        <Route path="/Grid5" element ={<Grid7 />} />
        <Route path="/Grid6" element ={<Grid6 />} />
        <Route path="/Grid7" element ={<Grid7 />} />
         </Routes>
      </BrowserRouter>
    
        </div>
        </>
  );
}

export default App;
