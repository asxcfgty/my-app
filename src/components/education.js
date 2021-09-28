import React from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import { update } from '../store/education';

const Education =  (props) => {  
  const educationData = useSelector(state => state.educationData);
  const Dispatch = useDispatch();
  console.log(educationData)
  
return ( <div className="education">
    <ul className="college">
    {educationData.map(educat => (
        <li >
            {educat.college}
        </li>
    ))  
    }
    </ul>
    <ul className="degree">
    {educationData.map(educat => (
    <li>{educat.degree}</li>    
    ))  
    }   
    </ul>
    <ul className="collegeYear">
    {educationData.map(educat => (    
    <li>{educat.year}</li>  
    ))  
    }      
    </ul>
    <button onClick={() => Dispatch(update())}><span role="img" aria-label="update">обновить</span></button>
    </div>)
}

export default Education;