// add code to require express here
var express = require ("express");
var app = express();



// add code to create route for GET '/notes'
app.get ("/notes", function(req, res){


})


// add code to create route for GET '/*'

    // in this method read the file 'public/index.html'



// add code to create route for GET '/api/notes'
        // call method readAllNotes to get the contents of DB as json
        // jsonAllNotes = readAllNotes()
    // then return jsonAllNotes



// add code for a POST route '/api/notes'
        // capture the new note we received via POST it will be inside (req.body)
        // call method readAllNotes to get the contents of DB as json
        // jsonAllNotes = readAllNotes()
        // add the new note we received to jsonAllNotes
        // write jsonAllNotes back to db/db.json 


//  add code a DELETE route '/api/notes/:id'
        // call method readAllNotes to get the contents of DB as json
    // now use a for loop to iterate over each note.
    // check id of each note against the id we received for deletion.
    // if the id match is found, delete that note from jsonAllNotes
    // write it back to file 'db/db.json'


// create a method called readAllNotes() and in that method do the following:

        // read file 'db/db.json' into variable allNotes
        // parse it as json - jsonAllNotes = JSON.parse(allNotes)
        // return jsonAllNotes

function readAllNotes(){
    
}


