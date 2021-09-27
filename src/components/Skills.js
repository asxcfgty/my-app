import React from 'react'


const Skills =  (props) => {  
    const tech = ["sql", "html", "css", "c++", "js"]

return ( <div className="skill">
    <p>Основные технологии которыми я владею:</p>
    <ul className="skills">
        {
            tech.map( (tech, index )=> (
                <li key={index}>{tech}</li>
            ))
        }
    </ul>
    </div>)
}

export default Skills;