import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Mensaje from '../Modal/MensajeModal'

class ModalEstructura extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div >

        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} closeIconSvgPath center>
           <div >

           </div>
           <Mensaje/>
           <button open={open} onClick={this.onCloseModal} >Aceptar</button>
        </Modal>

      </div>
    );
  }
}

export default ModalEstructura;
