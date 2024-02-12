import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SkillPage from './pages/skillPage';
import ProjectPage from './pages/projectPage';
import HomePage from './pages/homePage';
import Navbar from './component/navbar';
import ResumePage from './pages/rusumePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Navigate replace to='/homepage'/>} />
        <Route path='homepage' element={<HomePage/> }/>
        <Route path='skillpage' element={<SkillPage/>} />
        <Route path='projectpage' element={<ProjectPage/>} />
        <Route path='resumepage' element={<ResumePage/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
} 

export default App;
