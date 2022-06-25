import React, {Component} from 'react';
import Api from '../../services/api';
import Axios from 'axios';
import './body.css';

export default class Body extends Component{
    state = {
        pokeNames: [ ],
        // anterior: { },
        seguinte: { }
    }

    componentDidMount(){
        this.buscPoke()
    }

    async buscPoke(){
        try{
            const res = await Api.get()
            const pokeNames = res.data.results
            // const anterior = {
            //     previous: res.data.previous
            // }
            const newUrl = res.data.next
            const response = Axios.get(newUrl)
            const seguinte = response
            this.setState({pokeNames, seguinte})
            console.log(this.state.pokeNames)
        }
        catch{
            console.log("Erro!...")
        }
    }

    // pagePrevious = () =>{
    //     const {anterior} = this.state;
    //     if(anterior.previous === null) return
    //     const pagePrevious = anterior.previous
    //     this.buscPoke(pagePrevious);
    // }

    pageNext = () => {
        const {seguinte} = this.state

        if(seguinte !== null){
            seguinte.then(pn => {
                console.log(pn.data.results)
            })
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
                            <button className="btn1" onClick={this.pagePrevious}>Anterior</button>
                            <span>Página 1 de 100</span>
                            <button className="btn2" onClick={this.pageNext}>Seguinte</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}