import Project from "../component/project";
import Projectcooprate from '../images/cooperete.png';
import Projectngo from '../images/ngo.png';
import Projecttravel from '../images/travel.png';
import Projectnews from '../images/news.png';
import Footer from "../component/footer";
function ProjectPage() {
    return(
        <>
        <div className="project" id="project">
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
      <Footer/>
      </>
    )
}
export default  ProjectPage;