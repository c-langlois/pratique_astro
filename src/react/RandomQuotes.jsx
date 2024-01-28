import React, { useState, useEffect } from 'react';

useEffect

function RandomQuotes() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch('https://dogapi.dog/api/v2/facts')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setFact(data.data['0'].attributes.body);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
        <div className="flex justify-center">
            {fact}
        </div>
    );
}

export default RandomQuotes;