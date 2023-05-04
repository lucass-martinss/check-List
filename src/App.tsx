import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1, name: "Writte yor task", done: false,
    }])
    
  const handleAddItem = (taskName: string) => {
    let newList = [...list];
    newList.push({
      done: false,
      id: list.length + 1,
      name: taskName,
    });
    setList(newList);
  } 
  const handleChecked  = (id: number, done: boolean) => {
    let newList = [...list];
    for(let item in newList) {
      if(newList[item].id === id) {
        newList[item].done = done;
      }
    }
    setList(newList);
  };
  const handleDelete = ( index: number ) => {
  let newList = [...list];
  newList.splice(index, 1);
  setList(newList)
  }

  return (
    <C.Container>

      <C.Area>

        <C.Header>To do List</C.Header>

        <AddItem onKeyboard={handleAddItem} onClick={handleAddItem}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChecked={ handleChecked } onDelete={() => handleDelete(index)}  />
        ))}

      </C.Area>

    </C.Container>
  );
}

export default App;