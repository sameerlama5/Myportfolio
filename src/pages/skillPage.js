import Skill from "../component/skill";
import Footer from "../component/footer";
function SkillPage() {
    return (
    <>
        <div className='skills' data-aos="zoom-out">
<div className='skillSection'>
  <div className='skillContent'>
    <div className='circle'>
      <div className='first-circle'>

      </div>
      <div className='sec-circle'>
        
      </div>
    </div>
    <h2>My <span>Skills</span></h2>
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
<Footer/>
</>
    )
}
export default SkillPage;