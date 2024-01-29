import React, { useState } from 'react';

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleAddPost() {
        let tempArray = [[title], [body]];
        const newBlogPosts = [...blogPosts, tempArray];
        setBlogPosts(newBlogPosts);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
                <input placeholder="Titre" className="border" type="text" onChange={(e) => setTitle(e.target.value)}/>
                <textarea className="border" name="" id="" cols="30" rows="10" onChange={(e) => setBody(e.target.value)}></textarea>
                <button className="border" onClick={handleAddPost}>Ajouter</button>
            </div>
            <div>
                {blogPosts.length > 0 ? 
                    blogPosts.map((post, index) => (
                        <div key={index}>
                            <h2>{post[0]}</h2>
                            <p>{post[1]}</p>
                        </div>
                    ))
                :
                    ''
                }
            </div>
        </div>
    )
}

export default Blog;