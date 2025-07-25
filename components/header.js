import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import PropTypes from 'prop-types';
import { ModeToggle } from './mode-toggle';

const Header = ({ onNewNote }) => {
    return (
        <header className='border-b p-4 bg-card' >
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-zinc-500'>Browser Notes</h1>
                <div className="flex items-center space-x-4">
                    <Button className="cursor-pointer" onClick={(onNewNote)}>
                        <Plus className='h-4 w-4 mr-2' />
                        New Note
                    </Button>
                    <ModeToggle />
                </div>


            </div>
        </header>
    )
}
Header.propTypes = {
    onNewNote: PropTypes.func
}
export default Header
