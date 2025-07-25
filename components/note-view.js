import React from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { NotePropType } from '@/lib/types';
import { formatDate } from '@/lib/storage';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import Linkify from 'linkify-react'; 

const NoteView = ({ note , onEdit }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className='text-sm text-muted-foreground'>{formatDate(note.createdAt)}</p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-350px)]">
          {/* ✅ Linkify applied only here */}
          <Linkify
            options={{
              target: "_blank",
              className: "text-blue-500 underline"
            }}
          >
            {note.content}
          </Linkify>
        </ScrollArea>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button onClick={onEdit}>
          Edit Note
        </Button>
      </CardFooter>
    </Card>
  )
}

NoteView.propTypes = {
  note: NotePropType.isRequired,
  onEdit: PropTypes.func
};

export default NoteView
