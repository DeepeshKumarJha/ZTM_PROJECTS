// lib
import { Component } from "react";

// css
import './list.style.css';

export default class List extends Component{

    render(){
        console.log('list-render')
        return <><div>{this.props.monsterList.map((data)=>{
            return <h1 key={data.id}>{data.name}</h1>
        })}</div></>
    }
}