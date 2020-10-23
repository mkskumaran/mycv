import React from 'react';
import Skeleton from 'react-loading-skeleton';

function Common(props){
	const cv_data = props.cv_data;
	const work_experiences = cv_data.work_experience;
	const skills = cv_data.skill;
	const educations = cv_data.education;
	const personal_informations = cv_data.personal_information;
	const projects = cv_data.projects;
	const certifications = cv_data.certification;
	const declarations = cv_data.declaration;
	const loading = cv_data.loading;
	console.log(educations);
	return(
		<div className="card">
			<div className="card-header mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-briefcase" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.skill_label}</i> }
			</div>
			<span>
			<div  className="list-group-item list-group-item-action" > 
				{
					loading ? <Skeleton count={2}/> : 
					<div className="skills"> 
						{skills.map((skill, index) => (
							<span key={index}><i>{(index ? ', ' : '') + skill}</i></span>
						))}
					</div>
				}
			</div>
			</span>	
			<div className="card-header  mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-graduation-cap" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.education_label}</i> }				
			</div>	
			{
				<div className="list-group">
					{educations.map((education, index) => (
						<span className="list-group-item list-group-item-action" key={index}>
							<div className="d-flex w-100 justify-content-between">
								{loading ? <Skeleton width={100}/> : <strong><span><i>{education.qualification}</i></span></strong>}
							</div>  
							{loading ? <Skeleton count={2}/> : <p><i>{education.studied_at}</i>  <i className="badge badge_custom text-white">{education.year_passed}</i></p>}
						</span>			
					))}			
				</div>	
			}
			<div className="card-header mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-briefcase" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.label}</i> }					
			</div>	
			{
				work_experiences.map(work_experience => work_experience.ispresent === true ? 
				( 
					<span className="current" key={work_experience.id}>
						<b><i><span style={{listStyleType: "none",backgroundColor:"#084908"}} className="list-group-item text-white">{loading ? <Skeleton circle={true} height={20} width={20}/> : <i className="fa fa-check-circle" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton count={2}/> : <span> {work_experience.organization} , {work_experience.position} , {work_experience.from}</span>}
						</span></i></b>
					</span>
				) : 
				( 
					<span key={work_experience.id}>
						<i><span style={{listStyleType: "none"}} className="list-group-item">{loading ? <Skeleton circle={true} height={20} width={20}/> : <i className="fa fa-check-circle" style={{fontSize:'14px'}}></i>}  {loading ? <Skeleton count={2}/> : <span> {work_experience.organization} , {work_experience.position}, {work_experience.from}</span>}</span></i>
					</span>
				))
			}
			<div className="card-header mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-info-circle" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.personal_information_label}</i> }					
			</div>	
			
				<div> 			
					{personal_informations.map((personal_information, index) => (
					<div className="list-group-item list-group-item-action"  key={index}> 
						{loading ? <Skeleton count={2}/> : 
							<span>
								<span><i>Born on <b>{personal_information.dob}</b></i></span>	
								<span><i> & my father's name is <b>{personal_information.father}</b></i></span>
								<span><i> & my mother's name is <b>{personal_information.mother}</b></i></span>
								<span><i> & I am currently residing in <b>{personal_information.address} {personal_information.current} - {personal_information.pincode}</b></i></span>
								<span><i> & I have <b>{personal_information.other_data}</b></i></span>
							</span>	
						}
					</div> 		
					))}
				</div>
					
			<div className="card-header mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-certificate" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.certification_label}</i> }	
			</div>	
			{certifications.map((certification, index) => (
				<span className="certification list-group-item list-group-item-action" key={index}>
					<span>{loading ? <Skeleton count={1}/> : <i><b>{certification.description}</b></i>}</span>	
				</span>	
			))}	
			<div className="card-header mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-hand-o-right" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.projects_label}</i> }				
			</div>			
			<div className="list-group">
				{projects.map((project, index) => (
					<span className="list-group-item list-group-item-action" key={index}>
						<div className="d-flex w-100 justify-content-between">
							{loading ? <Skeleton width={100}/> : <strong><span><i>{project.client_name}</i></span></strong>}
							<small><i>{loading ? <Skeleton width={50}/> : <span className="badge badge-primary_own">{project.backend}</span>} {loading ? <Skeleton width={50}/> : <span className="badge badge-info_own">{project.frontend}</span> } {loading ? <Skeleton width={50}/> : <span className="badge badge-warning_own text-white text-lowercase">{project.type}</span>}</i></small>
						</div>        
						{loading ? <Skeleton count={2}/> : <p><i>{project.description}</i></p>}
					</span>			
				))}			
			</div>				
			<div className="card-header mt-3 bg_own">
				{loading ? <Skeleton width={20}/> : <i className="fa fa-pencil-square" style={{fontSize:'14px'}}></i>} {loading ? <Skeleton width={100}/> : <i>{cv_data.declaration_label}</i> }					
			</div>	
			{declarations.map((declaration, index) => (
				<span className="list-group-item list-group-item-action" key={index}>
					<p>{loading ? <Skeleton count={2}/> : <span><i><b>{declaration.hereby}</b></i></span>}</p>
					<div className="row">
						<div className="col-md-6">
							 <p>{loading ? <Skeleton width={100}/> :<span><i>Yours Honestly</i></span>}</p>
							<span>{loading ? <Skeleton width={200}/> : <span><i>{declaration.signText}</i></span>}</span>
						</div>
						<div className="col-md-6">
							{loading ? <Skeleton width={300}/> : <span className="mt-3"> <i>Place : {declaration.place} | Date : {props.today} </i></span>}
						</div>						
					</div>
				</span>	
			))}			
		</div>	
	);	
}

export default Common;