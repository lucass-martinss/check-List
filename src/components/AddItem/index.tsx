import { useState, KeyboardEvent, MouseEvent } from 'react'
import * as C from './style'
type AddItemProps = {
    onKeyboard: (taskName: string) => void;
    onClick: (taskName: string) => void;
}
export const AddItem = ({ onKeyboard, onClick }: AddItemProps) => {

    const [text, setText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {

        if (e.code === 'Enter' && text !== '') {
            onKeyboard(text);
            setText('');
        }
    };

    const handleClick = (e: MouseEvent) => {
        if (e.type === 'click' && text !== '') {
            onClick(text);
            setText('');
        }
    };

    return (
        <C.Container>

            <C.Box>
                <input
                    type='text'
                    placeholder='writte a new task'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyUp={handleKeyUp}
                    maxLength={100}
                />
            </C.Box>
            
            <button className='btn' onClick={handleClick}   > Add   </button>
            
        </C.Container>
    )

}