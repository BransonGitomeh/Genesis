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
                  //ToDo water baptism
                  m(".col l9 card-panel",[
                      m("h1","What we teach"),

                      m("h5",[m("b","Holy Scriptures")]),
                      m("p","We teach that the Bible is God’s written revelation to man, and thus the 66 books of the Bible given to us by the Holy Spirit constitute the plenary (inspired equally in all parts) Word of God (1 Corinthians 2:7-14; 2 Peter 1:20-21). We teach that the Word of God is an objective, propositional revelation (1 Thessalonians 2:13; 1 Corinthians 2:13), verbally inspired in every word (2 Timothy 3:16), absolutely inerrant in the original documents, infallible, and God-breathed. We teach the literal, grammatical-historical interpretation of Scripture which affirms the belief that the opening chapters of Genesis present creation in six literal days (Genesis 1:31; Exodus 31:17). We teach that the Bible constitutes the only infallible rule of faith and practice (Matthew 5:18; 24:35; John 10:35; 16:12-13; 17:17; 1 Corinthians 2:13; 2 Timothy 3:15-17; Hebrews 4:12; 2 Peter 1:20-21)."),

                      m("p","We teach that God spoke in His written Word by a process of dual authorship. The Holy Spirit so superintended the human authors that, through their individual personalities and different styles of writing, they composed and recorded God’s Word to man (2 Peter 1:20-21) without error in the whole or in the part (Matthew 5:18; 2 Timothy 3:16)"),

                      m("p","We teach that, whereas there may be several applications of any given passage of Scripture, there is but one true interpretation. The meaning of Scripture is to be found as one diligently applies the literal grammatical-historical method of interpretation under the enlightenment of the Holy Spirit (John 7:17; 16:12-15; 1 Corinthians 2:7-15; 1 John 2:20). It is the responsibility of believers to ascertain carefully the true intent and meaning of Scripture, recognizing that proper application is binding on all generations. Yet the truth of Scripture stands in judgment of men; never do men stand in judgment of it."),

                      m("h5",[m("b","Man")]),
                      m("p","We teach that man was directly and immediately created by God in His image and likeness. Man was created free of sin with a rational nature, intelligence, volition, self-determination, and moral responsibility to God (Genesis 2:7, 15-25; James 3:9)."),

                      m("p","We teach that God’s intention in the creation of man was that man should glorify God, enjoy God’s fellowship, live his life in the will of God, and by this accomplish God’s purpose for man in the world (Isaiah 43:7; Colossians 1:16; Revelation 4:11)."),

                      m("p","We teach that, because all men were in Adam, a nature corrupted by Adam’s sin has been transmitted to all men of all ages, Jesus Christ being the only exception. All men are thus sinners by nature, by choice, and by divine declaration (Psalm 14:1-3; Jeremiah 17:9; Romans 3:9-18, 23; 5:10-12)."),

                      m("h5",[m("b","Salvation")]),
                      m("p","We teach that salvation is wholly of God by grace on the basis of the redemption of Jesus Christ, the merit of His shed blood, and not on the basis of human merit or works (John 1:12; Ephesians 1:7; 2:8-10; 1 Peter 1:18-19)."),

                      m("h5",[m("b","What it means to be a christian")]),

                      m("p","Being a Christian is more than identifying yourself with a particular religion or affirming a certain value system. Being a Christian means you have embraced what the Bible says about God, mankind, and salvation. Consider the following truths found in Scripture."),

                      m("p",[
                        m("b","God Is Sovereign Creator."),
                        m("span","Contemporary thinking says man is the product of evolution. But the Bible says we were created by a personal God to love, serve, and enjoy endless fellowship with Him. The New Testament reveals it was Jesus Himself who created everything (John 1:3; Colossians 1:16). Therefore, He also owns and rules everything (Psalm 103:19). That means He has authority over our lives and we owe Him absolute allegiance, obedience, and worship")
                      ]),

                      m("p",[
                        m("b","God Is Holy."),
                        m("span","God is absolutely and perfectly holy (Isaiah 6:3), therefore He cannot commit or approve of evil (James 1:13). God requires holiness of us as well. First Peter 1:16 says, 'You shall be holy, for I am holy.'")
                      ]),

                      m("p",[
                        m("b","Mankind Is Sinful. "),
                        m("span","According to Scripture, everyone is guilty of sin: 'There is no man who does not sin' (1 Kings 8:46). That doesn’t mean we’re incapable of performing acts of human kindness. But we’re utterly incapable of understanding, loving, or pleasing God on our own. (Romans 3:10-12).")
                      ]),

                      m("p",[
                        m("b","Sin Demands a Penalty."),
                        m("span"," God’s holiness and justice demand that all sin be punished by death: (Ezekiel 18:4). That’s why simply changing our patterns of behavior can’t solve our sin problem or eliminate its consequences.")
                      ]),

                      m("p",[
                        m("b","Jesus Is Lord and Savior."),
                        m("span","The New Testament reveals it was Jesus Himself who created everything (Colossians 1:16). Therefore He owns and rules everything (Psalm 103:19). That means He has authority over our lives and we owe Him absolute allegiance, obedience, and worship. Romans 10:9 says, “If you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you shall be saved.” Even though God’s justice demands death for sin, His love has provided a Savior who paid the penalty and died for sinners (1 Peter 3:18). Christ’s death satisfied the demands of God’s justice and Christ’s perfect life satisfied the demands of God’s holiness (2 Corinthians 5:21), thereby enabling Him to forgive and save those who place their faith in Him (Romans 3:26).")
                      ]),

                      m("p",[
                        m("b","The Character of Saving Faith. "),
                        m("span","True faith is always accompanied by repentance from sin. Repentance is agreeing with God that you are sinful, confessing your sins to Him, and making a conscious choice to turn from sin (Luke 13:3,5; 1 Thessalonians 1:9) and pursue Christ (Matthew 11:28-30; John 17:3) and obedience to Him (1 John 2:3). It isn’t enough to believe certain facts about Christ. Even Satan and his demons believe in the true God (James 2:19), but they don’t love and obey Him. True saving faith always responds in obedience (Ephesians 2:10).")
                      ])

                      // m("p",[ //for future adds
                      //   m("b",""),
                      //   m("span","")
                      // ]),



                  ])

                ]),
                m(footer)
            ]
        }
}
