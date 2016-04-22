var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")
var sidebar = require('./sidebar');

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                // m("br"),


                m(".row",[

                  m(".col l2",[
                    // m("p",{class:"flow-text"},"What we teach"),
                    m(sidebar)
                  ]),

                  m(".col l10 card-panel",[
                      m("h1","Eldeship in the church"),

                      m("p","Biblically, the focal point of all church leadership is the elder. An elder is one of a plurality of biblically qualified men who jointly shepherd and oversee a local body of believers. The word translated “elder” is used nearly twenty times in Acts and the epistles in reference to this unique group of leaders who have responsibility for overseeing the people of God"),

                      m("h5",[m("b","The Office of Elder")]),
                      m("p","As numerous passages in the New Testament indicate, the words “elder” (presbuteros), “overseer” (episkopos), and “pastor” (poim¯en) all refer to the same office. In other words, overseers and pastors are not distinct from elders; the terms are simply different ways of identifying the same people. The qualifications for an overseer (episkopos) in 1 Timothy 3:1-7, and those for an elder (presbuteros) in Titus 1:6-9 are unmistakably parallel. In fact, in Titus 1, Paul uses both terms to refer to the same man (presbuteros in v. 5 and episkopos in v. 7). All three terms are used interchangeably in Acts 20. In verse 17, Paul assembles all the elders (presbuteros) of the church of Ephesus to give them his farewell message. In verse 28 he says, “Be on guard for yourselves and for all the flock, among which the Holy Spirit has made you overseers [episkopos], to shepherd [poimaino¯] the church of God.” First Peter 5:1-2 brings all three terms together as well. Peter writes, “Therefore, I exhort the elders [presbuteros] among you, as your fellow elder and witness of the sufferings of Christ, and a partaker also of the glory that is to be revealed, shepherd [poimaino¯] the flock of God among you, exercising oversight [episkope¯o] not under compulsion, but voluntarily, according to the will of God.” The different terms, then, indicate various features of ministry, not varying levels of authority or separate offices, as some churches espouse."),

                      m("h5",[m("b","A Plurality of Elders")]),
                      m("p","The consistent pattern throughout the New Testament is that each local body of believers is shepherded by a plurality of God-ordained elders. Simply stated, this is the only pattern for church leadership given in the New Testament. Nowhere in Scripture does one find a local assembly ruled by majority opinion or by a single pastor"),

                      m("p","The Apostle Paul left Titus in Crete and instructed him to 'appoint elders in every city' (Titus 1:5). James instructed his readers to “call for the elders of the church” to pray for those who are sick (James 5:14). When Paul and Barnabas were in Derbe, Lystra, Iconium, and Antioch, they “appointed elders for them in every church” (Acts 14:23). In Paul’s first epistle to Timothy, the apostle referred to “the elders who rule well” at the church at Ephesus (1 Tim. 5:17; see also Acts 20:17, where Paul addresses “the elders of the church” at Ephesus). The book of Acts indicates that there were “elders” at the church in Jerusalem (Acts 11:30; 15:2, 4; 21:18)."),

                      m("p","Again and again, reference is made to a plurality of elders in each of the various churches. In fact, every place in the New Testament where the term presbuteros (“elder”) is used it is plural, except where the apostle John uses it of himself in 2 and 3 John and where Peter uses it of himself in 1 Peter 5:1. Nowhere in the New Testament is there a reference to a one-pastor congregation. It may be that each elder in the city had an individual group in which he had specific oversight. But the church was seen as one church, and decisions were made by a collective process and in reference to the whole, not the individual parts."),

                      m("p","In other passages, reference is made to a plurality of elders even though the word presbuteros itself is not used. In the opening greeting of his epistle to the Philippians, Paul refers to the “overseers [plural of episkopos] and deacons” at the church of Philippi (Phil. 1:2). In Acts 20:28, Paul warned the elders of the church of Ephesus, “Be on guard for yourselves and for all the flock, among which God has made you overseers [plural of episkopos]” (Acts 20:28). The writer of Hebrews called his readers to obey and submit to the “leaders” who kept watch over their souls (Heb. 13:17). Paul exhorted his Thessalonian readers to “appreciate those who diligently labor among you, and have charge over you in the Lord and give you instruction” (1 Thess. 5:12)—a clear reference to the overseers in the Thessalonian assembly"),

                      m("p","Much can be said for the benefits of leadership made up of a plurality of godly men. Their combined counsel and wisdom helps assure that decisions are not self-willed or self-serving to a single individual (cf. Prov. 11:14). If there is division among the elders in making decisions, all the elders should study, pray, and seek the will of God together until consensus is achieved. In this way, the unity and harmony that the Lord desires for the church will begin with those individuals he has appointed to shepherd His flock."),

                      m("h5",[m("b","The Qualifications of Elders")]),
                      m("p","The character and effectiveness of any church is directly related to the quality of its leadership. That’s why Scripture stresses the importance of qualified church leadership and delineates specific standards for evaluating those who would serve in that sacred position."),

                      m("p","The qualifications for elders are found in 1 Timothy 3:2-7 and Titus 1:6-8. According to these passages, an elder must be above reproach, the husband of one wife, temperate, prudent, respectable, hospitable, able to teach, not addicted to wine, not pugnacious, gentle, uncontentious, free from the love of money, not fond of sordid gain, a good manager of his household, one who has his children under control with dignity, not a new convert, one who has a good reputation outside the church, self-controlled, sensible, able to exhort in sound doctrine and to refute those who contradict, above reproach as God’s steward, not self-willed, not quick-tempered, loving what is good, just, and devout. (For an explanation of these qualifications, see pages 215-33 of The Master’s Plan for the Church by John MacArthur.)"),

                      m("p","The single, overarching qualification of which the rest are supportive is that he is to be “above reproach.” That is, he must be a leader who cannot be accused of anything sinful because he has a sustained reputation for blamelessness. An elder is to be above reproach in his marital life, his social life, his business life, and his spiritual life. In this way, he is to be a model of godliness so he can legitimately call the congregation to follow his example (Phil. 3:17). All the other qualifications, except perhaps teaching and management skills, only amplify that idea."),

                      m("p","In addition, the office of elder is limited to men. First Timothy 2:11-12 says, “Let a woman quietly receive instruction with entire submissiveness. But I do not allow a woman to teach or exercise authority over a man, but to remain quiet.” In the church, women are to be under the authority of the elders, excluded from teaching men or holding positions of authority over them."),

                      m("h5",[m("b","The Functions of Elders")]),
                      m("p","As the apostolic era came to a close, the office of elder emerged as the highest level of local church leadership. Thus, it carried a great amount of responsibility. There was no higher court of appeal and no greater resource to know the mind and heart of God with regard to issues in the church"),
                      m("p","The primary responsibility of an elder is to serve as a manager and caretaker of the church (1 Tim. 3:5). That involves a number of specific duties. As spiritual overseers of the flock, elders are to determine church policy (Acts 15:22); oversee the church (Acts 20:28); ordain others (1 Tim. 4:4); rule, teach, and preach (1 Tim. 5:17; cf. 1 Thess. 5:12; 1 Tim. 3:2); exhort and refute (Titus 1:9); and act as shepherds, setting an example for all (1 Pet. 5:1-3). Those responsibilities put elders at the core of the New Testament church’s work."),

                      m("p","Because of its heritage of democratic values and its long history of congregational church government, modern American evangelicalism often views the concept of elder rule with suspicion. The clear teaching of Scripture, however, demonstrates that the biblical norm for church leadership is a plurality of God-ordained elders, and only by following this biblical pattern will the church maximize its fruitfulness to the glory of God."),

                      m("p","Adapted from John MacArthur, The Master’s Plan for the Church (Chicago: Moody Press, 1991). For a fuller treatment of biblical eldership, consult this resource.")
                  ])

                ]),
                m(footer)
            ]
        }
}
