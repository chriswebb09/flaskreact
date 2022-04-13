//import SomeComponent from "./components/SomeComponent";

import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const listItems = [
  {
    id: 'gary',
    name: 'Gary Goodspeed'
  },
  {
    id: 'cato',
    name: 'Little Cato'
  },
  {
    id: 'kvn',
    name: 'KVN'
  },
  {
    id: 'mooncake',
    name: 'Mooncake'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon'
  }
]

const SomePage = () => {

  const [characters, updateCharacters] = useState(listItems);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return  <div className="App">
    <header className="App-header">
      <h1>Final Space Characters</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <p>
                              { id }
                            </p>
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
  </header>
</div>
 // return <h2>Hello</h2>

};

const container = document.getElementById("render-react-here");
const root = ReactDOM.createRoot(container);
root.render(<SomePage />);
// ReactDOM.render(<SomePage />, root)