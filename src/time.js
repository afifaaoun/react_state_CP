import React, { Component } from 'react'

export default class Time extends Component {
    constructor(){
        super()
        this.state ={
          interval :0,
          time :0,
        }
      }
      componentDidMount() {
        this.setState({
          interval : setInterval(()=> {
            this.setState({ time :this.state.time +1})},1000)
          })
        }
      componentWillUnmount(){
        clearInterval(this.state.interval)
      }
      
  render() {
    return (
      <div>
        <h1 style ={{ borderRadius:"30px" , display:"flex",justifyContent :'center', backgroundColor:"#eee"}}>
          {this.state.time}
        </h1>
    </div>
    )
  }
}
