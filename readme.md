## Usage perspective
From 10000 foot view, this web-based system, or app. will allow people to register their higher educational institutions here, then allow them to provide configurations of how the their institution is structured, then it will allow them to add data about the institutions ongoings based on the configurations they provided there. ie, they can give a structure of how many courses they offer, and it will allow them to add students to those courses magically. and track the students in each of the courses.

## Distinction from others
The diference of this model from the rest is that the institutions are allowed to configure what the institution looks like easliy, and now have to ask a team of developers to work out adding new tables to the database and other application development tasks to support a certain new thing in the institution

// ed - 
// cer - dip - und - post - mast - phd - levels preset

this levels are not selected again

//external independent

//---------Course selected-----------
Enter course name 
Select levels stages that apply to it each of the levels, 

--so that this may be available for the students to be entered in. the students will be added and moved across to the next stage automatically. after he has been considered to have graduated . take his curent one, take all available ones in his course and level and select which one is next after this one selected. and move him to that level. so now his level stage will increment automatically. and the units available in that level units will be available for selection.

--inside each of this level stages, select which units will be done in them, from all the departments

//----------Levels configuration--------------
Enter level name - diploma

 
//----------Level Stages Configuration---------------
Enter level stages -1.1, 1.2, 1.3, 2.1, 2.2, 2.3,2.4

//payment-channels
Enter mpesa and the rest

// study modes that exist
Enter Fulltime and the rest

//Semesters
Enter Jan-April-2016 and the rest for each of them

//Schools
    |--//Departments
            |--//Units
                  |--//Price

student is entered to a level(diploma) and a level_stage(1.1) so diploma can track all the students doing it, and the level 1.1 can also track the students inside it. so if i need the students doing 1.1 in  diploma in a certain course. It will be as simple an a normal query. `SELECT * FROM students WHERE course = "CourseExample", level = "dipoma" and level_stage = "1.1" `. We can also get a list of all the students doing 1.1 accross all the courses and other similar queries.

When a student is registered to a certain level_stage(1.1), in a certain level(Diploma), in a certain course(CourseExample). the system will look for a all the units that have been set to be available to the level_stage(1.1) when it is in(Diploma)..then make the units available for selection by the student.

# Units as the mode of charges
the student seclets the unit, and the upon selection, the system looks at the unit, selects its prices and takes the current active price, and puts that price to be the price for a harge that we created to the student. So now the student has a charge to him, for that unit he has selected. , the charge that is created , also stored what tri-semester the charge has been made for...ussually its the active trisemester. thus that way you can know all the charges that have occured for a certain trisemester...and compare them accross the trisemesters

--upon withdrawal of the unit from registration by a certain student, in a certain trisemester, the charge involved shall be withdrawn and marked as withdrawn, or deleted ...therefore the charge does not exist anymore.


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