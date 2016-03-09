module.exports =  {
    makeQuery:function(collectionName,schema,MutationType,authIdentifier){
      var QueryHead = collectionName + '[' + MutationType +']{'
      var QueryTail = '}'

      var QueryBody = " "
      for(item in schema){
        // var re = /\w+\s/g;
        // if(schema[item]().match(re)){ //check if there is any white space
        //   // var str = "fee fi fo fum";
        //   var myArray = schema[item]().match(re); //extract the strings into an array
        //   console.log(myArray);
        //   var fullString;
        //   if(myArray){
        //     myArray.map(function(item){
        //       if(item){
        //         fullString = fullString + item
        //       }
        //     })
        //     console.log(fullString)
        //   }
        // }

        // var schemaValue;
        // if(schema[item]().toString().split(" ")){
        //   // alert(/^\S+$/.test(schema[item]()));
        //   var thing = schema[item]().split(" ")
        //   // console.log(thing)
        //   // var fulltext;
        //   // thing.map(function(text){
        //   //   fulltext = fulltext + "__" + text
        //   // })
        //   schemaValue = thing;
        // }else{
        //   schemaValue = schema[item]()
        // }
        var QueryItem = item + ":" + schema[item]().toString();
        QueryBody = QueryBody + QueryItem + " "
      }

      if(authIdentifier){
        console.log(authIdentifier);
        QueryBody = QueryBody + "identifier:" + authIdentifier
      }

      var Query = QueryHead + QueryBody + QueryTail
      console.log(Query)
      return Query;
    },

    sendQuery:function(collection,MutationType,success,err,authIdentifier,domain){
      if(this.loggedIn()){
        var sskey = this.session().session.id
      }else{
        var sskey = null
      }
      console.log(sskey);
      console.log("domain is  - >" + domain);

      var myObject = {
          Query:this.makeQuery(collection.name,collection.schema,MutationType,authIdentifier)
      }

      $.ajax({
        method:"GET",
        // crossDomain: true,
        // crossDomain: true,
        // dataType: 'jsonp',
        // headers: {"Access-Control-Allow-Origin": "*"},
        // contentType: "application/json; charset=utf-8",
        url:apiUrl + myObject.Query,
        // dataType: "json",
        // data:myObject
      }).done(function(res) { //pass
          if(res.responseJSON){ //some res from server arent normal...will investigate
            success(res.responseJSON)
          }else{
            success(res)
          }
        }).fail(function(res) {//fail
          // console.log(res.responseJSON);
          err(res.responseJSON)
        });
      // $.ajax({
      //   url:apiUrl,
      //   type:"POST",
      //   // crossDomain: 'true',
      //   contentType:'application/json',
      //   data:myObject,
      //   success:function(r){
      //     console.log(r);
      //   }
      // })

      // m.request({
      //   method: "GET",
      //   url: apiUrl + myObject.Query)
      //   // data: myObject,
      //   // config:function(xhr) {
      //   //   xhr.withCredentials = false;
      //   // }
      // });



    },

    loggedIn:function(){
      var session = JSON.parse(localStorage.getItem("GRIDsession"))
      if(session){
        // console.log("you are logged in already, session stored")
        // console.log(session)
        return true
      }else{
        // console.log("you are not logged in")
        return false
      }
    },
    session:function(){
      return JSON.parse(localStorage.getItem("GRIDsession"))
    },
    invalidateSession:function(){
      localStorage.removeItem("GRIDsession");
    }
}
