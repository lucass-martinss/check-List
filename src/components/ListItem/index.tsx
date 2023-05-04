import { Item } from '../../types/Item';
import * as C from './style';

type ItemProp = {
    onChecked: (id: number, done: boolean)=> void;
    onDelete: (id: number)=> void;
    item: Item;
}
export const ListItem = ({ item, onChecked, onDelete}: ItemProp) => {
    return (
        <C.Container done={item.done} >
            <input 
            type='checkbox' 
            checked={item.done}
            onChange={e => onChecked(item.id, e.target.checked)}
           
            />
            <label>{ item.name }</label>
            <button  onClick={() => onDelete(item.id)}>🗑️</button>
        </C.Container>
    )
}