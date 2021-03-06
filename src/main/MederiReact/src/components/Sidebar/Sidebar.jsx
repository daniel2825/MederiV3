/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import 'assets/css/Estilos_Mederi/StyleMederi.css';
import logo from "assets/img/logo_mederi.png";
import Modal from "../Modal/ModalEstructura";

import "assets/css/SelectModerno/css/normalize.css";
import "assets/css/SelectModerno/css/cs-select.css";
import "assets/css/SelectModerno/css/cs-skin-underline.css";

var ps;
/* aca deberia detectar algun cambio en el repositorio por parte de jenkins si esta actualizado*/
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  

 

  /*
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }*/
  

  render() {
    return (
      
      <div className="sidebar" data-color={this.props.backgroundColor}>
        <div className="logo sinBordes">
          <a
            href="https://www.mederi.com.co/"
            target="_blank"
          >
            <div class="fondoLogo" >
              <img src={logo} alt="Mederi" />
            </div>
          </a>
          
          <Modal/>
            
        </div>
        <div className="sidebar-wrapper" >
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.layout + prop.path) +
                    (prop.pro ? " active active-pro" : "")
                  }
                  data-toggle="tooltip" data-placement="right" title={prop.nombreCompleto}
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={"now-ui-icons " + prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      
      </div>

      
    );
  }
}

export default Sidebar;
