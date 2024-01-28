import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList () {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [id, setId] = useState(0);

    function handleRemove(idToRemove) {
        setItems(previousItems => previousItems.filter(item => item.props.id != idToRemove ))
    };

    function handleAdd() {
        setId(prevId => prevId + 1);
        setItems(prevElements => [...prevElements, 
            <div className="flex items-center bg-blue-400 px-2 py-1 rounded-xl w-[18rem] gap-5" key={items.length} id={id}>
                <div className="bg-blue-50 border-blue-400 border-2 space-x-2 px-2 py-1 rounded-xl w-56">{itemName}</div>
                <button className="btn" onClick={() => handleRemove(id)}>Fait</button>
            </div>]);
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex justify-center bg-blue-400 border-blue-800 border-2 space-x-2 px-2 py-1 rounded-xl w-[19rem]">
                    <input className="input-text w-56 border-2 border-blue-300" type="text" name="itemName" onChange={(e) => setItemName(e.target.value)}/>
                    <button className="btn" onClick={handleAdd}>Ajouter</button>
                </div>
                {items.length > 0 ?  
                    <div className="flex flex-col items-center bg-blue-400 border-blue-800 border-2 px-2 py-3 rounded-xl w-[19rem]">
                        {items}
                    </div>
                : 
                    ""
                }
            </div>

        </>
    )
};

export default ToDoList;