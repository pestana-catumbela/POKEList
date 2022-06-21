import React, {Component} from 'react';
import Api from '../services/api';

export default class Body extends Component{
    constructor(props){
        super(props)

        this.state = {
            pokeNames: []
        }

        this.convert = this.convert.bind(this)
    }

    buscPoke = async (e) => {
        e.preventDefault()

        const res = await Api.get()
        this.state.pokeNames[res.data]
    }

    render(){
        return(
            <>
                <h1>{this.state.pokeNames}</h1>
            </>
        )
    }
}