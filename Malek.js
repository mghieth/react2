import React,{Component} from 'react';






        const names=({names,onDelete}) =>{
        const namesList=names.map(namee =>{
                return (
<div className="malek" key={namee.id}>
<div>Name: {namee.name}</div>
<div>Age: {namee.age}</div>
<button onClick={() => {onDelete(namee.id)}}>Delete Name</button>
</div>
                )
            })


        return(
   <div className="name-list">
   {namesList}
   </div>
                
        )

        }

export default names