import React, {Component} from 'react';
import Api from '../../services/api';

export default class Body extends Component{
    state = {
        pokeNames: [ ]
    }

    componentDidMount(){
        this.buscPoke()
    }

    async buscPoke(){
        try{
            const res = await Api.get()
            const pokeNames = res.data.results
            this.setState({pokeNames})
            console.log(this.state.pokeNames)
        }
        catch{
            console.log("Erro!...")
        }
    }

    render(){
        return(
            <>
                <div>{this.state.pokeNames.map(nm => <p>{nm.name}</p>)}</div>
            </>
        )
    }
}