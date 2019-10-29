/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import Script from 'react-load-script'

var ps;
/* aca deberia detectar algun cambio en el repositorio por parte de jenkins si esta actualizado*/
class SelectComponente extends React.Component {
  
    constructor(props) {
    super(props);
  }

handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
   
 
  componentDidMount () {
    const script = document.createElement("script");
   
    script.src = '/classie.js';
    script.type = 'text/javascript';
    script.async = false;
   
    document.body.appendChild(script);
   
    const script2 = document.createElement("script");
   
    script2.src = "/selectFx.js";
    script2.type = 'text/javascript';
    script2.async = false;
   
    document.body.appendChild(script2);
    const script3 = document.createElement("script");
   
    script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
    script3.type = 'text/javascript';
    script3.async = false;
    
    document.body.appendChild(script3);


   }

  render() {
    return (
      
        <Script
        url="/ejecucion.js"
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}
      />

    );
  }
}

export default SelectComponente;


