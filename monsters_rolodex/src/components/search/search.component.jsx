// lib
import { Component } from "react";

// style
import './search.style.css'


export default class Search extends Component{

    handleSearch = (event)=>{
        this.props.setSearch(event.target.value)
    }

    render(){
        console.log('search-render')
        return <><input type={'search'} placeholder='search' onChange={this.handleSearch}/></>
    }

}