import React, { Component } from 'react'
import Time from './time'


export class App extends Component {
  state ={
    Person :{  fullName : "Juddy Abbot",
               bio : "A dedicated and motivated writer" ,
               img : 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
               profession : "Writer"},
    shows : false
  }
  handleClick =() =>{
    this.setState({shows : !this.state.shows})
  }
  

  render(){

    return (
      <div>
          {(this.state.shows)?
          <div>               
              <img src='this.state.Person.img' alt='profile'/>
              <h1 style ={{ borderRadius:"30px" , display:"flex",justifyContent :'center', backgroundColor:"#eee"}}> 
                  Name&SurName : {this.state.Person.fullName}
              </h1>
              <h1 style ={{ borderRadius:"30px" , display:"flex",justifyContent :'center', backgroundColor:"#eee"}}>
                 Bio : {this.state.Person.bio}
              </h1>
              <h1 style ={{ borderRadius:"30px" , display:"flex",justifyContent :'center', backgroundColor:"#eee"}}>
                Profession : {this.state.Person.profession}
              </h1>
          </div>
          : <div>
            <h1 style ={{ borderRadius:"30px" , display:"flex",justifyContent :'center', backgroundColor:"#eee"}}>
              No profile shown now
            </h1>
            </div>
          }
        {(this.state.shows)&& <Time/>} 
        <button 
                type="button" onClick={this.handleClick}
                style ={{ borderRadius:"30px" , display:"flex",justifyContent :'center', backgroundColor:"#eee"}}
        >
          {(this.state.shows)? "remove" : "show"} 
        </button>
      
      </div>
    )
}
}

export default App

