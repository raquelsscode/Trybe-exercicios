import React from "react";
import "./App.css";

class Pokemon extends React.Component{
    render(){
        const { pokemon: { name, type, averageWeight, image } } = this.props;

        return (
            <section className="pokemons">
                <h2>{name}</h2>
                <p>{type}</p>
                <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                <img src={image} alt= 'imagens dos pokemons'/>
            </section>
        );
    }
}
export default Pokemon