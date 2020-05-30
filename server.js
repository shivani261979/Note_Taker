var express = require ("express");
var bodyParser = require('body-parser')
var app = express();
var fs = require("fs");
var path = require("path");
var public = path.join(__dirname, 'public');


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// add code to create route for GET '/notes'
app.get ("/notes", function(req, res){
    console.log("Entered GET /notes");

    res.sendFile(path.join(public, 'notes.html'));
})

app.get ("/*.js", function(req, res){
    console.log("Entered GET /*.js . req.path: " + req.path );

    res.sendFile(path.join(public, req.path));
})

app.get ("/*.css", function(req, res){
    console.log("Entered GET /*.css . req.path: " + req.path );

    res.sendFile(path.join(public, req.path));
})

app.get ("/api/notes", function(req, res){

    console.log("Entered GET /api/notes");
    let id = req.query.id;

    var jsonAllNotes=readAllNotes();
    res.json(jsonAllNotes);     
})

app.get ("/*", function(req, res){
    console.log("Entered GET /* for req.path: " + req.path);

    res.sendFile(path.join(public, "index.html"));
})


app.post ("/api/notes", function(req, res){

    let newNote = req.body;     // { title: <val>, text: <val> }
    console.log("req.body holds - ", req.body);

    if(!newNote){
        console.log("Received an empty note.");
        return res.json({});
    }
    
    newNote.id = new Date().getTime();

    var jsonAllNotes=readAllNotes();

    jsonAllNotes.push(newNote);
    
    let fileContents = JSON.stringify(jsonAllNotes);
    fs.writeFileSync('db/db.json', fileContents);

    res.json(newNote);
})


app.delete('/api/notes/:id', function(req, res){

//  add code a DELETE route '/api/notes/:id'
        // call method readAllNotes to get the contents of DB as json
    // now use a for loop to iterate over each note.
    // check id of each note against the id we received for deletion.
    // if the id match is found, delete that note from jsonAllNotes
    // write it back to file 'db/db.json'

    console.log("/api/notes/:id id holds: " + req.params.id);

    var jsonAllNotes=readAllNotes();
    let noteToDelete;

    for(let x=0; x < jsonAllNotes.length; x++){

        if(jsonAllNotes[x].id == req.params.id){
            noteToDelete = jsonAllNotes[x];
            console.log("delete this note: ", jsonAllNotes[x]);
            jsonAllNotes.splice(x,1);
            x -= 1;
        }
    }

    let fileContents = JSON.stringify(jsonAllNotes);
    fs.writeFileSync('db/db.json', fileContents);

    res.json(noteToDelete);
}); 



function readAllNotes(){
    
    var allNotes = fs.readFileSync('db/db.json');
    
    allNotes = JSON.parse(allNotes);

    return allNotes;
}

app.listen(8080, () => console.log(`Note Taker App listening at http://localhost:${8080}`))
