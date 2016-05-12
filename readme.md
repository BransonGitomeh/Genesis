## Usage perspective
From 10000 foot view, this web-based system, or app. will allow people to register their higher educational institutions here, then allow them to provide configurations of how the their institution is structured, then it will allow them to add data about the institutions ongoings based on the configurations they provided there. ie, they can give a structure of how many courses they offer, and it will allow them to add students to those courses magically. and track the students in each of the courses.

## Distinction from others
The diference of this model from the rest is that the institutions are allowed to configure what the institution looks like easliy, and now have to ask a team of developers to work out adding new tables to the database and other application development tasks to support a certain new thing in the institution

## Functionality model
To be able to do this functionalities, the system uses several factors inside high education ministries that are common to almost every institution in the country, the structure ofto take it how entitites are arranged.  allbelow is a little diagram on all the entities and how they are related to each other

```
university
  |---school (ie school of law)
  		|--department - {
  			(they manage the units provided/ manage the courses being provided based on the field on the department)
  			(ie department of early childhood education will offer only units relating to children education but, may offer a course with a few units from the department of psychology .)
  		}
  				|--units
					|-prices (a unit can have multiple price points, and the current active price)
				|--courses
					|--levels
						|--semesters
							|->Units offered in this semester(picked from its respective department)
								|-Students who have selected this units, in a certain trisemesters
							|-Students who are curently in this semester/have passed through this sem

  |---Study-modes
  |---Semesters_types
  |---Payment channels


  |---Students						
```

## user roles
Each university has an ability to have multiple administrators(the person who has the ability to configure the university and view all aspects of the university as he needs and can generate all types of reports, as need be)


## hacking
```
$ git clone --recursive https://github.com/BransonGitomeh/Genesis.git  //to pull even the nested submodules in the application

$ cd server-core
$ npm install
$ npm run appliation

$ cd web-clients
$ npm install
$ npm run appliation
```