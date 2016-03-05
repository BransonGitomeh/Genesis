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

                  m(".col l9 card-panel",[
                      m("h1","Church Discipline"),

                      m("p","On occasion a Christian will wander away from the fellowship of other believers and find himself ensnared by sin through ignorance or willful disobedience. It then becomes necessary for the church, and particularly its shepherds, to actively seek the repentance and restoration of that Christian. As shepherds of the flock, the elders love the sheep and are also held accountable by God for their spiritual welfare, including that of the wandering sheep. As in Jesus’ parable in Luke 15:3-8, it is a time of joy, both in heaven and within the church, when the wandering Christian truly repents."),

                      m("p","One means by which the church seeks to lovingly restore wandering believers is the process of church discipline. In Matthew 18, the Lord explains to His disciples how to respond when a fellow believer sins. The principles He sets forth must guide the body of Christ as she seeks to implement discipline in the church today."),

                      m("h5",[m("b","The Purpose of Discipline")]),

                      m("p","The purpose of church discipline is the spiritual restoration of fallen members and the consequent strengthening of the church and glorifying of the Lord. When a sinning believer is rebuked and he turns from his sin and is forgiven, he is won back to fellowship with the body and with its head, Jesus Christ"),

                      m("p","The goal of church discipline, then, is not to throw people out of the church or to feed the self-righteous pride of those who administer the discipline. It is not to embarrass people or to exercise authority and power in some unbiblical manner. The purpose is to restore a sinning believer to holiness and bring him back into a pure relationship within the assembly."),

                      m("p","In Matthew 18:15, Jesus says, “And if your brother sins, go and reprove him in private; if he listens to you, you have won your brother.” The Greek word translated “won” was originally used of accumulating wealth in the sense of monetary commodities. Here it refers to the gaining back of something of value that is lost, namely, an erring brother. When a brother or sister strays, a valuable treasure is lost, and the church should not be content until he or she is restored. The body of Christ is in the business of recovery (Gal. 6:1), and such is the purpose of church discipline."),

                      m("h5",[m("b","The Process of Discipline")]),

                      m("p","In Matthew 18:15-17, Jesus sets forth the fourstep process of church discipline: (1) tell him his sin alone; (2) take some witnesses; (3) tell the church; and (4) treat him as an outsider."),

                      m("p","Step One (Matt. 18:15). The process of church discipline begins on an individual level. Jesus said, “And if your brother sins, go and reprove him in private” (v. 15a). Here, an individual believer is to go to a sinning brother privately and confront him in a spirit of humility and gentleness. This confrontation involves clearly exposing his sin so that he is aware of it and calling him to repentance. If the sinning brother repents in response to the private confrontation, that brother is forgiven and restored (v. 15b)."),

                      m("p","Step Two (Matt. 18:16). If the sinning brother refuses to listen to the one who has rebuked him privately, the next step in the discipline process is to take one or two more believers along to confront him again (v. 16a). The purpose of taking other believers is so that “by the mouth of two or three witnesses every fact may be confirmed” (v. 16b). In other words, the witnesses are present not only to confirm that the sin was committed but, in addition, to confirm that the sinning brother was properly rebuked and that he has or has not repented."),

                      m("p","The presence of additional witnesses is as much a protection for the one being approached as it is for the one approaching. After all, a biased person could erroneously say, “Well, I tried to confront him, but he’s impenitent.” It would be presumptuous to think that one person could make that ultimate determination, especially if he was the one who had been sinned against. The witnesses need to confirm whether there is a heart of repentance or one of indifference or rejection. Such a report provides the basis for further action because the situation has been verified beyond the report of one individual."),

                      m("p","At this point, it should be hoped that the one or two who are brought along to confront the sinner will not have to become public witnesses against him before the rest of the church. Ideally, their added rebuke will be sufficient to induce a change of heart in the offending brother that the initial rebuke did not cause. If this change of heart does occur, that brother is forgiven and restored, and the matter is dropped."),

                      m("p","Step Three (Matt. 18:17a). If the sinning brother refuses to listen and respond to the confrontation of the witnesses after a period of time, those witnesses are then to tell it to the church (v. 17a). This is most appropriately done by bringing the matter to the attention of the elders, who in turn oversee its communication to the assembly as a whole."),

                      m("p","How long should the witnesses continue to call the person to repentance before telling the church? The elders at Gathering Church International avoid carrying out the third or fourth stage of church discipline until they are absolutely certain that the erring believer has truly sinned, or is continuing to sin, and that he has refused to repent when appropriately confronted. The elders will routinely send a letter by registered mail warning the individual that the third (or fourth) step of discipline will be taken if they have not received word of repentance by a specific date. When this date has passed, the person’s sin and refusal to repent are made known publicly, either before the entire assembly during a Communion service or through a fellowship group in which the person is known."),

                      m("p","It has been the custom at Gathering Church International, upon enacting this third step, to clearly indicate to the congregation that they are to pursue the person aggressively and plead with him to repent before the fourth step becomes necessary. That crucial and potent procedure often draws the sinner to repentance and obedience. If repentance does take place, the sinning believer is forgiven and restored."),

                      m("p","Step Four (Matt. 18:17b). The fourth and final step in the process of church discipline is ostracism. If a sinning believer refuses to listen even to the church, he is to be ostracized from the fellowship. Jesus said, “let him be to you as a Gentile and a tax-gatherer” (v. 17b). The term “Gentile” was primarily used of non-Jews who held to their traditional paganism and had no part in the covenant, worship, or social life of the Jews. On the other hand, a “tax-gatherer” was an outcast from the Jews by choice, having become a traitor to his own people. Jesus’ use of these terms doesn’t mean that the church is to treat these people badly. It simply means that when a professing believer refuses to repent, the church is to treat him as if he were outside of the fellowship. They are not to let him associate and participate in the blessings and benefits of the Christian assembly."),

                      m("p","When a man in the Corinthian church refused to forsake an incestuous relationship with his stepmother, the apostle Paul commanded that the man be removed from their midst (1 Cor. 5:13). The believers there were not even to share a meal with him (1 Cor. 5:11), for dining with someone was symbolic of a hospitable and cordial fellowship. The one who is persistently unrepentant is to be totally ostracized from the fellowship of the church and treated like an outcast, not a brother."),

                      m("p","As far as the welfare of the church is concerned, the purpose of putting the brother out is to protect the purity of the fellowship (1 Cor. 5:6), to warn the assembly of the seriousness of sin (1 Tim. 5:20), and to give a testimony of righteousness to a watching world. But as far as the welfare of the brother himself is concerned, the purpose of the ostracism is not to punish but to awaken, and it must therefore be done in humble love and never in a spirit of self-righteous superiority (2 Thess. 3:15)."),

                      m("p","When a church has done everything it can to bring a sinning member back to purity of life but is unsuccessful, that individual is to be left to his sin and his shame. If he is truly a Christian, God will not cast him away, but He may allow him to sink still deeper before he becomes desperate enough to turn from his sin."),

                      m("p","The command not to have fellowship or even social contact with the unrepentant brother does not exclude all contact. When there is an opportunity to admonish him and try to call him back, the opportunity should be taken. In fact, such opportunities should be sought. But the contact should be for the purpose of admonishment and restoration and no other."),

                      m("p","Adapted from John MacArthur, The MacArthur New Testament Commentary: Matthew 16–23 (Chicago: Moody Press, 1988); John MacArthur, The Master’s Plan for the Church (Chicago: Moody Press, 1991); and Stuart Scott and George Crawford, “Restoring the Wandering Sheep,” (unpublished paper). For a fuller treatment of church discipline, consult these resources.")


                  ])

                ]),
                m(footer)
            ]
        }
}
