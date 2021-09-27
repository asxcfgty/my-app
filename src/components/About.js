import React from 'react'
import MyText from './MyText'
import foto from './person.jpg'

const About =  (props) => {  
return ( 
    <div className = 'aboutMe'>
        <MyText/>
        <img src = {foto}  className="foto" alt="foto"></img>
    </div>
)
}

export default About;