var apiRouter = require("express").Router();
var { friendData } = require("../data/friends");
//when going to /friends THE URL

apiRouter.route("/friends")
    //send the object of friend data
    .get(function (request, response) {
        response.send(friendData);

    })//WHEN HANDLING POST REQUESTS TO THE URL

    .post(function (request, response) {

        var bestfriend = {
            name: "",

            absoluteScores:Infinity
        };

        // response.json(request.body);
        console.log(friendData);

        console.log("This is what is being taken in from the form", request.body)
        console.log("This is what that looks like to get acess to specific keys", request.body.name)


        //This is where the data is being sent back out back to my html survey page
        //in this example im sending out exactly the same thing as what I got in
        // response.json(request.body);


        var friendDataArray = friendData;
        console.log("Wholefreinddata array", friendDataArray);

        var newFriendData = request.body
        console.log(newFriendData);
     

        for (let i = 0; i < friendDataArray.length; i++) {
            //grab the current friend
            let currentFriend = friendDataArray[i]

            var absolute = 0;

            // iterate over the current friend's scores
            for (let j = 0; j < currentFriend.length; j++) {

                // tally up the absolute differencce between these two:
                let currentFriendScore = currentFriend.scores[j];

                let userScore = newFriendData.scores[j]

               absolute += Math.abs(currentFriendScore - userScore);
            }
               //setting up an if statment tog grab new best friend
               if(absolute < bestfriend.absoluteScores){

                   bestfriend.name = newFriendData.name;

                   bestfriend.absoluteScores = newFriendData.scores;

                  
               } else{
                   
               }

            }
            friendData.push(newFriendData);
            response.send(bestfriend);
        
       
    })

//export routes attached to apiRouter
module.exports = {
    apiRouter
};