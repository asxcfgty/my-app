import { combineReducers } from 'redux';

const UPDATE_DATA = 'UPDATE_DATA';

export function update(Data) {
    return {
      type: UPDATE_DATA,
      Data,
    }
  }

  const defaultData = [
    
        
        {
        college: 'Данных нет',
        degree: 'Данных нет',
        year: 0,
        }
    
  ];

  function educationData(state = defaultData, action) {
    switch (action.type) {
        case UPDATE_DATA:          
        let  data = {

            college: "Сибирский государственный университет геосистем и технологий",
            degree: "Бакалавр",
            year: 2021
        };    
               
        state = ""
        return  [
           
            {
                college: data.college,
                degree: data.degree,
                year: data.year,
            }
        ]
            default:    
        return state;
        }
      }

  const educationDataApp = combineReducers({
    educationData
  }
  )

  export default educationDataApp;