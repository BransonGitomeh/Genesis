var navbar = require("../peices/navbar");
var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");



module.exports = {
  view:function(ctrl){
    var courses = [
      {
        name:"English",
        aim:"To provide trainees with spoken, written and listening skills",
        target:"Parents ,teachers and general public",
        duration:"90hrs",
        cost:"9,000Rwf"
      },
      {
        name:"Parenting",
        aim:"To provide parents with skills to nurture, mentor, care the children",
        target:"All parents",
        duration:"60 hrs",
        cost:"150000 Rwf"
      },
      {
        name:"mentoring guidance and support for teachers and trainers",
        aim:"To provide teachers with necessary skills and expertise to give guidance and support to learners",
        target:"ECDE, Primary and secondary teachers. Departmental officials who mentor, guide and support teachers",
        duration:"5 days or 3 hrs. per week for 3 months",
        cost:"200,000 Rwf"
      },

      {
        name:"proffessional certificate in advances teaching and Administration Of ECDE",
        aim:"To provide aspiring ECDE teachers with skills, knowledge and expertise on ECDE",
        target:"Holders of Teaching diploma and degree interested in ECDE",
        duration:"One Trimester",
        cost:"450,000 Rwf"
      },

      {
        name:"Certificate in young children guidance and counselling",
        aim:"To provide skills and knowledge in guidance and counselling in young children",
        target:"Teachers, community workers and parents",
        duration:"One Trimester",
        cost:"450,000 Rwf"
      },

      {
        name:"Certificate in general career guidance",
        aim:"To provide skills and knowledge in career.",
        target:"A level holders interested with guidance career",
        duration:"A level holders interested with guidance career",
        cost:"250,000 per trimester"
      },

      {
        name:"Training of Trainers (TOT)",
        aim:"To provide training skills to already trainers and aspiring trainers",
        target:"Trainers",
        duration:"One week",
        cost:"200,000 Rwf"
      },

      {
        name:"TOT in mentoring and coaching",
        aim:"To provide skills of training and management of mentorship and coaching programme",
        target:"Mentors and coaches",
        duration:"One week",
        cost:"200,000 Rwf"
      },
      {
        name:"Curriculum vitae writing skills and interviews",
        aim:"To provide skills to job seekers",
        target:"A level and college graduates",
        duration:"2 days",
        cost:"100,000 Rwf"
      },
      {
        name:"Project monitoring and evaluation",
        aim:"To provide skills ,knowledge and expertise on project management",
        target:"Project practitioners",
        duration:"One week",
        cost:"200,000 Rwf"
      }
    ]
    return m(".app",[
      m.component(navbar),

      m(".row",[
        //collumn 1 , the sidebar
        m(".col l3 hide-on-med-and-down",[
          m.component(sidebar)
        ]),
        //the sider and everything else
        m(".col l9",[
          m("h4",{class:"center blue-text"},"Proffessional development Programme"),
          m("h6",{class:"center"},"CONTINOUS PROFESSIONAL TEACHER AND COMMUNITY EDUCATION COURSES"),

          m("table",{class:"striped"},[
            //table Head
            m("thead",[
              m("tr",[
                m("th","Course"),
                m("th","Aim"),
                m("th","Target Group"),
                m("th","Duration"),
                m("th","Cost")
              ])
            ]),

            m("tbody",[

                courses.map(function(course){
                  return m("tr",[
                    m("td",course.name),
                    m("td",course.aim),
                    m("td",course.target),
                    m("td",course.duration),
                    m("td",course.cost)
                  ])
                })
            ])
          ])
        ])
     ]),

     m.component(footer)
   ])

  }
}
