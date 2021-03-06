import React from 'react'
import {Route, NavLink, HashRouter} from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Education from './education'

const Navi =  (props) => {  
        return (
            <HashRouter>
            <div>
                <div className="header">
                <div className="FIO">
                    Фаршатов Глеб Константинович
                </div>   

                <ul className="navigation">
                <li><NavLink to="/">Обо мне</NavLink></li>
                <li><NavLink to="/Skills">Технологии</NavLink></li>
                <li><NavLink to="/Education">Образование</NavLink></li>
                </ul>
      
                </div>
                <div className="content">
                    <Route exact path="/" component={About} />
                    <Route path="/Skills" component={Skills} />
                    <Route path="/Education" component={Education} />
                </div>
            </div>
            </HashRouter>
        )
}

export default Navi;