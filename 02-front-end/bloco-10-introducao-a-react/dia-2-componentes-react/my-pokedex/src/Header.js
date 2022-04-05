import React from "react";

class Header extends React.Component{
    render(){
       const { title } = this.props
     return ( <img className="logo" src= {title} alt= 'pokedex' ></img>
        );
    }
}
export default Header