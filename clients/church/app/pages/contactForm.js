var contactForm = require("../../../../../../../../shared_components/contactForm")


module.exports = {
        view:function(){
            return m("span",[
                  // m("h1","about us")
                  m(contactForm)
                ])
                // custom component with unique content per page

        }
    }
