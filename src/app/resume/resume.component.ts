import { Component, OnInit } from '@angular/core';
import { Experience } from './experience/experience.interface';
import { InfoItems } from './info/info-items.interface';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
	public experiences: Experience[] = [
		{
			company: 'ACCENTURE',
			projects: [
				{
					position: 'Sr. Full Stack Developer',
					dates: '(December 2019 - Present)',
					description: `I started working on a new internal project, a web app to manage and show the benefits, compensations
          			and rewards	of employees from the UK and Ireland, here we continued to use Angular and the Typescript language (for
          			frontend and backend) with the same AWS serverless services that we have been using with my team on the
          			previous project, adding a couple extra like KMS and Secrets Manager.`
				},
				{
					position: 'Semi Sr. Full Stack Developer',
					dates: '(September 2018 - December 2019)',
					description: `This was an ambitious project that started from scratch, a web application to design and manage the
          			payslips of employees from multiple countries, always using the latest version of Angular in the frontend, I was exposed
          			for the first time to the fascinating world of cloud computing.
          			We used the serverless framework having as provider AWS, Cloudfront with S3 to host the frontend and the most interesting
          			and challenging thing for me was the 100% serverless backend, using API Gateway, Lambda (Node.js runtime), Cloudwatch and
          			DynamoDB for the database.`
				},
				{
					position: 'Semi Sr. Full Stack Developer',
					dates: 'January 2018 - August 2018',
					description: `The first project I entered already had several years in production and here was my first challenge since
        			I had to learn by myself how to use Angular 4 in the frontend and Java on the backend.
          			I was lucky enough to enter a work cell using Scrum, being able to refine user stories interacting continuously with the
          			Product Owner and estimating ourselves using planning poker how many story points would take each user story, also we
          			defined clear actions to improve our work after the retrospective meeting at the end of each sprint.`
				}
			]
		},
		{
			company: 'NEORIS',
			projects: [
				{
					position: 'Junior Full Stack Developer',
					dates: 'February 2017 - January 2018',
					description: `Here I learned how to work using the .NET framework, at first making automated testing with Selenium and
          			later on solving bugs and developing new features in a long-running application of the agricultural sector.
          			The main technologies used were Visual Studio, C#, Web Forms, HTML, CSS, Javascript, jQuery, KnockoutJS, TFS, TFVC
          			(Team Foundation Version Control) and stored procedures in Oracle PL/SQL.
          			For the first time, I had the luck to work on a Scrum team participating in all its events, such as daily stand-up meetings,
          			sprint plannings, reviews and retrospectives.`
				}
			]
		},
		{
			company: 'SYLOPER',
			projects: [
				{
					position: 'Junior Full Stack Developer',
					dates: 'September 2016 - February 2017',
					description: `This was my first job as a web developer, I learned to use the CakePHP Framework and with the help of my team,
          			I applied it to a couple of projects that started from scratch.
          			In addition to PHP, I used HTML, CSS, Bootstrap, Javascript, MySQL and Assembla SVN to version the code.
          			It was an excellent opportunity to learn all the basics that someone who begins their career in this field needs to know.`
				}
			]
		}
	];

	public certifications: InfoItems = {
		icon: 'award',
		items: ['AWS Solutions Architect Associate', 'AWS Cloud Practitioner', 'Professional Scrum Master']
	};

	public languages: InfoItems = {
		icon: 'chat',
		items: ['English (Advanded)', 'Spanish (Native)']
	};

	public education: InfoItems = {
		icon: 'easel',
		items: ['Bachelor\'s Degree in Computer Science (In Progress)']
	};

	public skills: InfoItems = {
		icon: 'check2',
		items: ['Angular', 'Typescript', 'Node.js', 'Karma', 'Jasmine', 'HTML', 'SCSS', 'GIT', 'MySQL', 'AWS DynamoDB (NoSQL)', 'AWS Serverless Services']
	};

	constructor() { }

	ngOnInit(): void {
	}

}
