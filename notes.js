import chalk from "chalk";
import * as fs from "fs";
    //add Notes
const addNote=(title,body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        });
         saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse("Notes title taken!"))
    }
}
    //remove Notes
 const removeNote =(title)=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((notes)=> notes.title !== title);
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse("No note no found!"))
    }
}
    //List notes
    const listNotes = () =>{
        const notes = loadNotes();
        console.log(chalk.bold.blue.inverse('Your notes'));
        notes.forEach(note => {
        console.log(note.title)
        });
    }
    //Read notes 
    const readNotes = (title) =>{
        const notes = loadNotes();
        const note = notes.find((note) => note.title === title);
        if(note){
            console.log(chalk.inverse(note.title));
            console.log(note.body)
        }else{
            console.log(chalk.red.inverse("Note wasn't found"));
        }
    }
    
 const saveNotes =(notes)=>{
     const dataJson = JSON.stringify(notes);
     fs.writeFileSync('notes.json',dataJson);
 }

const loadNotes = ()=>{
   try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson) ;    
      } catch (e) {
        return []
    }   
}
   
export{
    addNote, removeNote, listNotes, readNotes
}