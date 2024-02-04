
import './App.css';
import Herosection from './component/Herosection';
import About from './component/about';
import Navbar from './component/navbar';
import Skill from './component/skill';
import Project from './component/project';
import Form from './component/form';
import Projectcooprate from '../src/images/cooperete.png';
import Projectnews from '../src/images/news.png';
import Projectngo from '../src/images/ngo.png';
import Projecttravel from '../src/images/travel.png';
import Footer from './component/footer';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <About/>
      <div className='skills'>
      <div className='skillSection'>
        <div className='skillContent'>
          <div className='circle'>
            <div className='first-circle'>

            </div>
            <div className='sec-circle'>
              
            </div>
          </div>
          <h1>My <span>Skills</span></h1>
          <div className="grid">
             <Skill
             title='HTML'
             progress= '90%'
             />
              <Skill 
             title='CSS'
             progress= '90%'
             />
              <Skill 
             title='Bootstrap5'
             progress= '80%'
             />
              <Skill 
             title='Tailwind css'
             progress= '70%'
             />
              <Skill 
             title='JavaScript'
             progress= '70%'
             />
              <Skill 
             title='ReactJs'
             progress= '70%'
             />
             </div>
        </div>
      </div>
      </div>
      <div className='project'>
        <h1>My <span>Project</span></h1>
        <div className='projectContainer'>
        <Project
      image={Projectcooprate}
      title='Cooprate website'
      />
      <Project
      image={Projectngo}
      title='NGO website'
      />
      <Project
      image={Projecttravel}
      title='Travel and tour website'
      />
      <Project
      image={Projectnews}
      title='News website'
      />
        </div>
      </div>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
