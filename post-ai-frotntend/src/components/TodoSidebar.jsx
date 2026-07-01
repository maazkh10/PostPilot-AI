import React , {useState} from "react";

import { mockTodos } from "../data/mockData";

export default function TodoSidebar({onCreatePostClick}) {

    const [ todos , setTodos] = useState(mockTodos)

    return(
        <div className="w-64 h-screen border-r border-neutral-100 bg-white flex flex-col px-4
        py-5 select-auto overflow-y-auto">
<div className="flex items-center justify-between mb-6">

<h1 className="font-semibold text-neutral-900 text-base">
Todos
</h1>


<button
onClick={onCreatePostClick}
className="w-6 h-6 rounded-md hover:bg-netural-50 flex items-center justify-center border
border-neutral-200 text-neutral-400 font-medium text-sm transition-colors">
+
</button>
</div>

<div className="flex flex-col gap-6">
    {todos.map((section , idx)=>(
        <div key={idx} className="flex flex-col">
            <details open className="group">
                <span>{section.category}</span>
                <div className="flex flex-col gap-2 pl-3 mt-1">
                    {section.items.map((todo) =>(
                        <label key={todo.id} className="flex items-start gap-2.5 text-sm text-neutral-700 cursor-pointer group/item py-0.5">
                            <input type="checkbox" 
                            defaultChecked={todo.completed}
                            className="mt-1 w-3.5 h-3.5 rounded
                             border-neutral-300 text-neutral-900 focus:ring-0 cursor-pointer
                              accent-neutral-900"/>
                              <span className="group-has-[:checked]:line-through group-has[:checked]:text-neutral-400 font-normal">
                                {todo.text}
                              </span>
                        </label>
                    ))}
                
                <button className="text-xs text-neutral-300 hover:text-neutral-500 text-left pl-0.5 mt-1 font-medium transition-colors">+Todo</button>
                </div>

                </details> </div>
    ))}
</div>


        </div>
    )
    
}