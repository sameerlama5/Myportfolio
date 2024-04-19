import Project from "../component/project";
import Projectcooprate from '../images/cooperate.jpg';
import Projectngo from '../images/ngo.jpg';
import Projecttravel from '../images/travel.jpg';
import Projectnews from '../images/news.jpg';
import Footer from "../component/footer";
function ProjectPage() {
    return(
        <>
        <div className="project" id="project">
        <h2>My <span>Project</span></h2>
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
      <Footer/>
      </>
    )
}
export default  ProjectPage;