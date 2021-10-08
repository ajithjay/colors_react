import React, { Component } from 'react'
import './Colors.css'
import { useState } from 'react';

export default class Colors extends Component {
    constructor(){
        super();
        this.state = {
            Customcolors: 
            ["Orange, Blue, Green, White"],

            newColors: '',
        }
       
    }

  updateValue=(event)=>{
      this.setState({newColors: event.target.value});

  }

  newColors=()=>{
      this.setState({
          Customcolors:[
              this.state.Customcolors,
              [this.state.newColors]
          ]
      })
  }
     
    render() {
        return (
        <>
            <div className="scrol">
                <h1>Colors:{this.state.Customcolors}</h1>
            </div>
            <div>
                <input 
                value = {this.state.newColors} onChange={this.updateValue}/>
            </div>
            <div>
            <button onClick={this.newColors}>Add Task</button>
            </div>
             
            </>
        )
    }
}
