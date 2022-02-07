import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote, listNotes, readNotes } from './notes.js';

//add notes command
description:'Note title',
yargs(hideBin(process.argv))
.command("add", "add a new note",{
    title:{
        demandOption: true,
        type:"string"
    },
    body:{
        description:'Note body',
        demandOption:true,
        type:"string"
    }
},(argv)=>addNote(argv.title,argv.body))
    //remove note command
.command("remove","Remove a note",{
   title:{
        description:'remove note',
        demandOption:true,
        type:'string'
    }},(argv)=>removeNote(argv.title))
//read notes command
.command("read", "Read a  note",{
    title:{
        description:'Notes title',
        demandOption:true,
        type:'string'
    }
},(argv)=>readNotes(argv.title))
.command("list", "List all your notes",()=>listNotes())
.help().argv;

