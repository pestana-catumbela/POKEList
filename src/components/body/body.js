import React, {Component} from 'react';
import Api from '../../services/api';
import './body.css';

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
                <section className="sectionBodyElement">
                    <div className="containerElement">
                        <strong>
                            {this.state.pokeNames.map(nm => <p className="p">{nm.name}<hr></hr></p>)}
                        </strong>

                        <div className="btns">
                            <button type="submit" className="btn1">Anterior</button>
                            <span>Página 1 de 100</span>
                            <button type="submit" className="btn2">Prosterior</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}