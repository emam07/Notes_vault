import React from 'react'
import PropTypes, { string } from 'prop-types';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

const EmptyState = ({ message, buttonText, onButtonClick }) => {
    return (
        <div className='flex items-center justify-center h-full'>
            <div className='text-center p-8'>
            <h1 className='transition-all duration-500 hover:font-bold hover:scale-110'>{message}</h1>
            <Button onClick={onButtonClick} className="cursor-pointer"z>
                <Plus className='h-4 w-4 mr-2' />
                {buttonText}</Button>
                </div>
                </div>
    )
}

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};


export default EmptyState
