'use client';
import { Button } from "@/components/ui/button"
import NoteSidebar from "@/components/note-sidebar";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { NotePropType } from "@/lib/types";
import NoteView from "@/components/note-view";
import NoteEditor from "@/components/node-editor";
import EmptyState from "@/components/empty-state";
import { loadNotes, saveNoteTostorage } from "@/lib/storage";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const [notes, setnotes] = useState([]);

  const [activeNote, setActiveNote] = useState([]);
  const [isEditing, setEditing] = useState(false);
  
  useEffect(()=>{
    setnotes(loadNotes());

  },[])

  useEffect(() => {
    saveNoteTostorage(notes);

  }, [notes])


  const createNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: "New Note",
      content: '',
      createdAt: Date.now(),

    }; setnotes([newNote, ...notes]);
    setActiveNote(newNote)
    setEditing(true);
  };
  const selectNote = (note) => {
    setActiveNote(note);
    setEditing(false);
  }
  const cancelEdit = () => {
    setEditing(false);
  }

  const saveNote = (updatedNote) => {
    setnotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)))
    setEditing(false);
    setActiveNote(updatedNote);

  }
  const deleteNote = (id) => {
    setnotes(notes.filter((note) => note.id !== id))
    if (activeNote && activeNote.id === id) {
      return null;
    }

  }
  const renderNoteContent = () => {
    if (activeNote && Array.isArray(notes) && notes.length === 0) {
      return (
        <EmptyState
          message="Create New Notes"
          buttonText="New Note"
          onButtonClick={createNewNote}
        >


        </EmptyState>)
    }
    if (activeNote && isEditing)
      return <NoteEditor note={activeNote} onSave={saveNote} onCancel={cancelEdit} />

    if (activeNote) {
      return <div> <NoteView note={activeNote} onEdit={() => setEditing(true)} /></div>
    }
    return null;

  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className=" container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="md:col-span-1">
          <NoteSidebar notes={notes}
            onSelectNote={selectNote}
            onDeleteNote={deleteNote}
            activeNoteId={activeNote?.id} /></div>

        <div className="md:col-span-2">{renderNoteContent()}

        </div>


      </main>

    </div>
  );

}