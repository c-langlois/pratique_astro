import React, { useState } from 'react';

function Recipe() {
    const [tab, setTab] = useState(true);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-11/12 md:w-2/12">
                <div>
                    {tab ? 
                        <>
                            <div className="flex">
                                <div className="px-2 rounded-t-xl bg-purple-400">Ingrédients</div>
                                <div className="px-2 rounded-t-xl bg-purple-100" onClick={() => setTab(false)}>Instructions</div>
                            </div>
                            <div className="pt-4 pl-4 pb-4 rounded-r-xl rounded-b-xl bg-purple-100">
                                <ul className="px-4 list-disc space-y-4">
                                    <li>Lait</li>
                                    <li>Farine</li>
                                    <li>Oeuf</li>
                                </ul>
                            </div>
                        </>
                    :
                        <>
                            <div className="flex">
                                <div className="px-2 rounded-t-xl bg-purple-100" onClick={() => setTab(true)}>Ingrédients</div>
                                <div className="px-2 rounded-t-xl bg-purple-400">Instructions</div>
                            </div>
                            <div className="pt-4 pl-4 pb-4 rounded-r-xl rounded-b-xl bg-purple-100">
                                <ul className="px-4 list-decimal space-y-4">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula neque id quam sollicitudin hendrerit. </li>
                                    <li>Donec blandit tincidunt velit, non accumsan velit tempor eu. Vestibulum vel sem non purus condimentum ultricies.</li>
                                    <li>Nulla facilisi. Integer ac nulla eu tortor vestibulum fringilla. Nam euismod tortor eu convallis hendrerit.</li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Recipe;