var apiRouter = require("express").Router();
var {friendData} = require("../data/friends");
//when going to /friends THE URL

apiRouter.route("/friends")
//send the object of friend data
    .get(function(request, response){
       response.send(friendData);

    })//WHEN HANDLING POST REQUESTS TO THE URL
    .post(function(request, response){

        // response.json(request.body);
        console.log(friendData);
        
        console.log("This is what is being taken in from the form", request.body)
        console.log("This is what that looks like to get acess to specific keys", request.body.name)
      

        //This is where the data is being sent back out back to my html survey page
        //in this example im sending out exactly the same thing as what I got in
        response.json(request.body);
        

        var friendDataArray = friendData[0].scores;
        console.log("Wholefreinddata array", friendDataArray);
        var newFriendData = request.body
        var newFreindTotal = 0; 
        var talliedScored = 0;

        for(let i=0; i< newFriendData.length; i++){
            
        }
        
        //loop through it
        for(let i=0; i < friendData.length; i++){
            for(let j=0; j <friendData[i].scores.length; j++){
                // console.log(friendData[i].scores[j]);
                if( [j] <= 9){

                    talliedScored += parseInt(friendData[i].scores[j])
                } else {

                    return
                }
                
                
                
            }
            
        }
        
         console.log(talliedScored);
    })

//export routes attached to apiRouter
module.exports = {
    apiRouter
};