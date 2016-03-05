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
                    m("h1","The Role of Women"),

                    m("p","Although women have traditionally fulfilled supportive roles in serving the church and gained their greatest joy and sense of accomplishment from being wives and mothers, the feminist movement has successfully influenced many women to abandon these divinely ordained roles. Unfortunately, this movement has made headway even in the church, creating chaos and confusion regarding the role of women both in ministry and in the home. Only in Scripture can God’s intended design for women be found."),

                    m("h5","The Old Testament and Women"),

                    m("p","In the creation account of Genesis 1, God’s first word on the subject of men and women is that they were equally created in the image of God (v. 27). Neither received more of the image of God than the other. So the Bible begins with the equality of the sexes. As persons, as spiritual beings standing before God, men and women are absolutely equal."),

                    m("p","Despite this equality, there is in Genesis 2 a more detailed account of the creation of the two human beings that reveals differences in their God-given functions and responsibilities. God did not create the man and the woman at the same time, but rather He created Adam first and Eve later for the specific purpose of being Adam’s helper. Eve was equal to Adam, but she was given the role and duty of submitting to him. Although the word “helper” carries very positive connotations—even being used of God Himself as the helper of Israel (Deut. 33:7; Ps. 33:20)—it still describes someone in a relationship of service to another. The responsibility of wives to submit to their husbands, then, was part of the plan from creation, even before the curse. The first books of the Bible establish both the equality of men and women and also the support role of the wife (see Exod. 21:15, 17, 28–31; Num. 5:19–20, 29; 6:2; 30:1–16)."),

                    m("p","Adam and Eve’s disobedience to God’s command resulted in certain consequences (Gen. 3:16–19). For the woman, God pronounced a curse that included multiplied pain in childbirth and tension in the authority-submission relationship of husband and wife. Genesis 3:16 says the woman’s “desire” will be for her husband but he shall “rule” over her. In Genesis 4:7 the author uses the same word “desire” to mean “excessive control over.” Thus, the curse in Genesis 3:16 refers to a new desire on the part of the woman to exercise control over her husband—but he will in fact oppressively rule and exert authority over her. The result of the Fall on marriage through history has been an ongoing struggle between the sexes, with women seeking control and men seeking dominance."),

                    m("p","Throughout the Old Testament, women were active in the religious life of Israel, but generally they were not leaders. Women like Deborah (Judges 4) were clearly the exception and not the rule. There was no woman with an ongoing prophetic ministry. No woman was a priest. No queen ever ruled Israel. No woman wrote an Old Testament (or New Testament) book. Isaiah 3:12 indicates that God allowed women to rule as part of His judgment on the sinning nation."),

                    m("h5","Jesus and Women"),

                    m("p","In the midst of the Greek, Roman, and Jewish cultures, which viewed women almost on the level of possessions, Jesus showed love and respect for women. Though Jewish rabbis did not teach women and the Jewish Talmud said it was better to burn the Torah than to teach it to a woman, Jesus never took the position that women, by their very nature, could not understand spiritual or theological truth. He not only included them in His audiences but also used illustrations and images that would be familiar to them (Matt. 13:33; 22:1–2; 24:41; Luke 15:8–10) and specifically applied His teaching to them (Matt. 10:34ff.). To the Samaritan woman at the well (John 4), He revealed that He was the Messiah and discussed with her topics such as eternal life and the nature of true worship. He also taught Mary and, when admonished by Martha, pointed out the priority of learning spiritual truth even over “womanly” responsibilities like serving guests in one’s home (Luke 10:38)."),

                    m("p","Although men in Jesus’ day normally would not allow women to count change into their hands for fear of physical contact, Jesus touched women to heal them and allowed women to touch Him (Luke 13:10ff.; Mark 5:25ff.). Jesus even allowed a small group of women to travel with Him and His disciples (Luke 8:1–3), an unprecedented happening at that time. After His resurrection, Jesus appeared first to Mary Magdalene and sent her to announce His resurrection to the disciples (John 20:1–18), despite the fact that women were not allowed to be witnesses in Jewish courts because they were considered liars."),

                    m("h5","The Epistles and Women"),

                    m("p","In the Epistles, the two principles of equality and submission for women exist side by side. Galatians 3:28 points to the equality, indicating that the way of salvation is the same for both men and women and that they are members of equal standing in the body of Christ. It does not, however, eradicate all differences in responsibilities for men and women, for this passage does not cover every aspect of God’s design for male and female. In addition, there are many other passages that make distinctions between what God desires of men and what He desires of women, especially within family and within the church."),

                    m("h5","The Family"),

                    m("p","While Christian marriage is to involve mutual love and submission between two believers (Eph. 5:21), four passages in the New Testament expressly give to wives the responsibility to submit to their husbands (Eph. 5:22; Col. 3:18; Titus 2:5; 1 Pet. 3:1). This voluntary submission of one equal to another is an expression of love for God and a desire to follow His design as revealed in His Word. It is never pictured as demeaning or in any way diminishing the wife’s equality. Rather the husband is called to love his wife sacrificially as Christ loved the church (Eph. 5:25) and to serve as the leader in a relationship of two equals."),

                    m("p","While husbands and fathers have been given the primary responsibility for the leadership of their children (Eph. 6:4; Col. 3:21; 1 Tim. 3:4–5), wives and mothers are urged to be “workers at home” (Titus 2:5), meaning managers of the household. Their home and their children are to be their priority, in contrast to the world’s emphasis today on careers and fulltime jobs for women outside the home."),

                    m("h5","The Church"),

                    m("p","From the very beginning, women fulfilled a vital role in the Christian church (Acts 1:12–14; 9:36–42; 16:13–15; 17:1–4, 10–12; 18:1–2, 18, 24–28; Rom. 16; 1 Cor. 16:19; 2 Tim. 1:5; 4:19), but not one of leadership. The apostles were all men; the chief missionary activity was done by men; the writing of the New Testament was the work of men; and leadership in the churches was entrusted to men."),

                    m("p","Although the Apostle Paul respected women and worked side by side with them for the furtherance of the gospel (Rom. 16; Phil. 4:3), he appointed no female elders or pastors. In his letters, he urged that men were to be the leaders in the church and that women were not to teach or exercise authority over men (1 Tim. 2:12). Therefore, although women are spiritual equals with men and the ministry of women is essential to the body of Christ, women are excluded from leadership over men in the church."),

                    m("p","Men and women stand as equals before God, both bearing the image of God Himself. However, without making one inferior to the other, God calls upon both men and women to fulfill the roles and responsibilities specifically designed for them, a pattern that can be seen even in the Godhead (1 Cor. 11:3). In fulfilling the divinely given roles taught in the New Testament, women are able to realize their full potential because they are following the plan of their own Creator and Designer. Only in obedience to Him and His design will women truly be able, in the fullest sense, to give glory to God."),

                  ])

                ]),
                m(footer)
            ]
        }
}
