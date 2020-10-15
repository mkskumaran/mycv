import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Common from './Common';
import Icon from './React';
import Skeleton from 'react-loading-skeleton';


class App extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {'label':'','skill_label':'','work_experience':[],'skill':[],'education':[],'education_label':
		'','personal_information':[],'personal_information_label':'','projects':[],'projects_label':'','certification':[],'certification_label':'','declaration':[],'declaration_label':'','social_links':[],'loading':true,'data_letters':''};
	}
	
	getData(){ 
		const work_experience = {"experience":[{"id":1,"position":"Software Engineer","organization":"Prevaj Consultants Pvt Ltd","from":"Dec 2015 - Dec 2016","ispresent":false},{"id":2,"position":"Software Engineer","organization":"Bluedyne Software Pvt Ltd","from":"Jan 2017 - Aug 2017","ispresent":false},{"id":3,"position":"Software Engineer","organization":"Craftsion India Retail Pvt Ltd","from":"Aug 2017 - Mar 2019","ispresent":false},{"id":4,"position":"Software Engineer","organization":"SRM Technologies Pvt Ltd","from":"Mar 2019 - Present","ispresent":true}],"skill":["HTML5","CSS3","PHP5&7","Wordpress","jquery"," Bootstrap 3 & 4","React JS","PHP Framework - Codeigniter & Slim","REST API Services for Mobile Apps","JSON Handling","MySQL","PostgreSQL","SVN","Git","Handled Github Pages Live","PWA - Progressive Web Apps"],"education":[{"id":1,"qualification":"B.E. Electronics & Communications Engineering","studied_at":"Madha Engineering College , Chennai","year_passed":"Apr 2011 - Apr 2015"},{"id":2,"qualification":"Higher Secondary School - X & XII","studied_at":"SCS Matriculation Higher Secondary School , Chennai","year_passed":"Apr 2009 - Apr 2011"}],"personal_information":[{"dob":'09/12/1993',"father":"Murugesan. S","mother":"Shanthi. M","other_data":"completed my schooling & graduation from Chennai. & I had done PHP 3 month internship at Vee Eee Technologies, Chennai","current":"Chennai","address":"7/13 Gandhi Street Chitlapakkam","pincode":"600064"}],"projects":[{"client_name":"Panickker","description":"Developed my first site from PSD layout to wordpress theme in one month & moved to production.","backend":"php","frontend":"css","type":"Wordpress"},{"client_name":"Inventi","description":"Role Based , PayUMoney , Journals Publishing Module Integration.","backend":"php","frontend":"jquery","type":"Codeigniter"},{"client_name":"Bluedyne","description":"Analyzing & developed the varion erp set of module like lead creation , update status , profile show based on role , master crud operation & REST API Services for mobile apps like Ionic hybrid","backend":"php","frontend":"jquery","type":"Core PHP"},{"client_name":"Goodwill","description":"REST API Services for Mobile Apps like GMate , Freshcan , GTeam , GTeam2 in Ionic Framework","backend":"php","frontend":"jquery","type":""},{"client_name":"PVP","description":"Role based user authentication & master data as well as car arrangement module & settings & profile view was part of my task.","backend":"php","frontend":"jquery","type":"Codeigniter"},{"client_name":"ExQ USA","description":"Fixing Existing bugs & analyze the code","backend":"php","frontend":"react js","type":"Moodle"},{"client_name":"SRM","description":"On Development Distance Education , PhD , BSCAM , Fellowship , Agricultural Science , Advanced PG Diploma Life Services admission forms.","backend":"php","frontend":"react js","type":"Codeigniter"},{"client_name":"SRM Gateway","description":"Creating custom plugin for enrollment & showing enrollment data to the backend of admin","backend":"wordpress","frontend":"jquery","type":""},{"client_name":"My CV","description":"Turn my curriculam vitae into web app","backend":"","frontend":"react js","type":"PWA"}],"certification":[{"certification_for":"PHP","description":"Certified PHP from Besant Technologies, Chennai"}],"declaration":[{"hereby":"I hereby declare that the above furnished details are true to the best of my knowledge.","place":"Chennai","signText":"ShunmugaKumaran M","fullname":"ShunmugaKumaran M","objective":"Proud team player focused on achieving project objectives with speed and accuracyo. Experienced in full project life cycle from design to implementation to integration.","email":"kumar932486@gmail.com","mobile":"7871443230"}],"social_links":[{"linkedin":"https://www.linkedin.com/in/shunmugakumaran-m-9882a4101/","github":"https://github.com/mkskumaran"}],'data_letters':'SK'};	
		
		setTimeout(() => {this.setState({'loading':false});}, 1000);
		
		this.setState({'work_experience':work_experience.experience,'label':'Work Experience History','skill_label':'Skills','skill':work_experience.skill,'education_label':'Education','education':work_experience.education,'personal_information_label':'Personal Information','personal_information':work_experience.personal_information,'projects':work_experience.projects,'projects_label':'Projects','certification_label':'Certification','certification':work_experience.certification,'declaration_label':'Declaration','declaration':work_experience.declaration,'social_links':work_experience.social_links,'data_letters':work_experience.data_letters});			
	}
	
	componentDidMount(){
		this.getData();
	}
	

	render() {
		const label = this.state.label;
		const skill = this.state.skill;
		const skill_label = this.state.skill_label;
		const work_experience = this.state.work_experience;
		const data_letters = this.state.data_letters;
		const education = this.state.education;
		const education_label = this.state.education_label;
		const personal_information = this.state.personal_information;
		const personal_information_label = this.state.personal_information_label;	
		const projects = this.state.projects;
		const projects_label = this.state.projects_label;
		const certification = this.state.certification;
		const certification_label = this.state.certification_label;	
		const declaration = this.state.declaration;
		const declaration_label = this.state.declaration_label;		
		const social_links = this.state.social_links;	
		const loading = this.state.loading;
		const d = new Date();
		
		const dd = String(d.getDate()).padStart(2, '0');
		const mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
		const n = d.getFullYear();	
		const today = dd + '/' + mm + '/' + n;
		
		return (	
			<div>
				<div className="ui-bg-overlay bg-dark opacity-50"></div>
					<div className="container-fluid">					
						<div className="add-to mt-3" id="add-to">
							 <button type="button" className="add-to-btn btn btn-sm" title="Install MyCV as PWA"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Launch now as Web App</button>
						</div>										
						<div className="text-center py-5 mt-3 banner" style={{backgroundColor:'rgb(61 92 130 / 90%)',color:'#fff'}}>
							{loading ? <Skeleton circle={true} height={150} width={150}/> : <p data-letters={data_letters}></p>}
							{social_links.map((social_link, index) => (						
								<p className="social_links mt-3" key={index}><a target="_blank" aria-label="github link goes here" rel="noopener noreferrer" href={social_link.github}>{loading ? <Skeleton circle={true} height={20} width={20}/> : <i className="fa fa-github"></i>}</a> | <a target="_blank" aria-label="linkedin link goes here" rel="noopener noreferrer" href={social_link.linkedin}>{loading ? <Skeleton circle={true} height={20} width={20}/> : <i className="fa fa-linkedin"></i>}</a></p>
							))}							
							<div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto p-3">
							{declaration.map((declare,key) => (
								<div key={key}>
									<h3><strong><i>{loading ? <Skeleton count={1}/> : declare.fullname}</i></strong></h3>
									<blockquote><i>{loading ? <Skeleton count={3}/> : declare.objective}</i></blockquote>
									<span className=""> </span>
									<div className="row">
										<div className="col-xs-6 col-sm-8"><div className="inner"><strong>{loading ? <Skeleton width={20}/> : <i className="fa fa-envelope"></i>} <i><a href = "mailto:kumar932486@gmail.com" className="text-white"> <i>{loading ? <Skeleton width={100}/> : declare.email}</i></a></i></strong></div></div>
										<div className="col-xs-6 col-sm-4"><div className="inner_mobile"><strong>{loading ? <Skeleton width={20}/> : <i className="fa fa-whatsapp"></i>} <i><a href={"tel:"+declare.mobile} className="text-white">  {loading ? <Skeleton width={100}/> : declare.mobile} </a></i></strong></div></div>
									</div>									
								</div>
							))}								  
						</div>	
					</div>	
					<div>
						<div className="row">
						  <div className="col-12">
							<Common label={label} skill_label={skill_label} work_experience={work_experience} skill={skill} education={education} education_label={education_label} personal_information={personal_information} personal_information_label={personal_information_label} projects_label={projects_label} projects={projects} certification_label={certification_label} certification={certification} today={today} declaration={declaration} declaration_label={declaration_label} loading={loading}/>
						  </div>
						</div>
					</div>
					<div className="mt-3"></div>
					{loading ? <Skeleton height={50} count={1}/> :<footer className="text-center mt-3" style={{backgroundColor:'rgb(61 92 130 / 90%)',color:'#fff',padding:'1em'}}><i><span>Made with <span style={{color:'rgb(236 56 56)',width:'50px'}} title="React JS"> <Icon/></span></span></i>
					</footer>}
					<div className="mt-3"></div>
				</div>			
			</div>
		); 
	}
}

export default App;
