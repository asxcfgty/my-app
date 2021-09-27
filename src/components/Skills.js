import React, {Component} from 'react'

class Skills extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            items:["sql", "html"],
            error: null,
            isLoaded: false
        }
    }

componentDidMount() {
  //  fetch("https://api.example.com/items") 
  new Promise((resolve, reject) => {  
    resolve('{ "items":["SQL", "HTML", "CSS", "C++", "JS", "UML","React"]}')
  })
  .then(
        (result) => {
            console.log(result);
            result = JSON.parse(result)
            this.setState({
                isLoaded: true,
                items: result.items
              });
        },
        (error) => {
            console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

render () {   
    if (this.state.error) {
        return <div>Ошибка: {this.state.error.message}</div>;
      } else if (!this.state.isLoaded) {
        return <div>Загрузка</div>;
      } else {
return ( 
    <div className="skill">
    <p>Основные технологии которыми я владею:</p>
    <ul className="skills">
        {
            this.state.items.map( (tech, index )=> (
                <li key={index}>{tech}</li>
            ))
        }
    </ul>
    </div>)
}
}
}

export default Skills;