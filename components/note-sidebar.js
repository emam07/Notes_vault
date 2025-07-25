'use client'
import React from 'react'
import PropTypes from 'prop-types';
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import EmptyState from './empty-state';
import { Button } from './ui/button';
import { NotePropType } from '@/lib/types';
import { formatDate } from '@/lib/storage';
import { Trash, Trash2 } from 'lucide-react';


const NoteSidebar = ({ notes, onSelectNote,onDeleteNote,activeNoteId }) => {
    return (

        <Card className='h-full'>
            <CardHeader 
            >
                <CardTitle>My Notes</CardTitle>
                <CardAction><span className="text-sm text-gray-700 font-medium">
                    Total Notes: {notes?.length || 0}
                </span></CardAction>
            </CardHeader>
            <CardContent>
                {notes.length === 0 ?
                    <h1 className="text-center text-xl transition-all duration-300 hover:font-bold hover:scale-110">
                        No notes yet
                    </h1>
                    : ( <ScrollArea className="h-[calc(100vh-250px)]">
                    <div>
                        {notes.map(note => (
                            <div key={note.id}
                                onClick={() => onSelectNote(note)}
                                className={`p-4 rounded-md cursor-pointer hover:bg-accent transition-colors' ${activeNoteId===note.id?"bg-accent":""}`}>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-medium'>
                                            {note.title.substring(0, 30)}
                                            {note.title.length > 30 ? "..." : ""}
                                        </h3>
                                        <p className='text-sm text-muted-foreground'>
                                            {note.content.substring(0, 40)}
                                            {note.content.length > 40 ? "..." : "..."}
                                        </p>
                                        <p className='text-sm text-muted-foreground'>
                                            {formatDate(note.createdAt)}
                                        </p>
                                    </div>
                                    <Button variant="ghost"
                                        size="icon"
                                        className='h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer'
                                        onClick={(e)=>{
                                            e.stopPropagation();
                                            onDeleteNote(note.id)
                                        }}
                                    >
                                        <Trash2 />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div></ScrollArea>)}
            </CardContent>
        </Card>
    )
}
NoteSidebar.propTypes = {
    notes: PropTypes.arrayOf(NotePropType).isRequired,
    onSelectNote: PropTypes.func,
    onDeleteNote: PropTypes.id,
    activeNoteId: PropTypes.string
}

export default NoteSidebar
