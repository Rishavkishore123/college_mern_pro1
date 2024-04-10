import React from 'react'

const Languages = () => {
    let lang=["rishabh","satyam"]
  return (
    
    <div>
        <h1>best programming language</h1>
        <ul>


            {lang.map((items, index)=>(
                <li key={index}>{items}</li>
            ))}
        </ul> 
        
    </div>
  )
}

export default Languages