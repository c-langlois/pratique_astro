import React, { useState } from 'react';

function ToDoList () {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [id, setId] = useState(0);

    function handleRemove(idToRemove) {
        console.log("ça marche");
        setItems(previousItems => previousItems.filter(item => item.props.id != idToRemove ))
    };

    function handleAdd() {
        setId(id + 1);
        setItems(prevElements => [...prevElements, <div key={items.length} id={id}><div>{itemName}</div><button onClick={() => handleRemove(id)}>Fait</button></div>]);
    }

    return (
        <div>
            <div>
                <input type="text" name="itemName" onChange={(e) => setItemName(e.target.value)}/><button onClick={handleAdd}>Ajouter</button>
            </div>
            {items}
        </div>
    )
};

export default ToDoList;