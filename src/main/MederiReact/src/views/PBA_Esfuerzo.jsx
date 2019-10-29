import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class User extends React.Component {


  constructor() {

    super();

    this.state = {
      SuperficieCorporal: 0,
      Peso: '',
      Talla: '',
      edad : '',
    }

    this.Pesoevent = this.Pesoevent.bind(this);
    this.TallaEvent = this.TallaEvent.bind(this);
    this.edad = this.edad.bind(this);

  }

  edad(event){
    this.setState({
      edad : event.target.value,
    })
  }

  Pesoevent(event) {
    this.setState({
      Peso: Number(event.target.value),

    });
  }

  TallaEvent(event) {
    this.setState({
      Talla: Number(event.target.value),
    });
  }




  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">PRUEBA DE ESFUERZO</h5>
                </CardHeader>
              
                <CardBody>
                  <Form>
                    
                  <Row>
                    <Col md="12">
                      <table>
                        <thead>
                          <tr>
                            <td><label>Equipo utilizado:</label></td>
                            <td><label>Calidad ventana:</label></td>
                            <td><label>Area realización:</label></td>
                            <td><label>Transductor:</label></td>
                            <td><label>Factores de riesgo:</label></td>
                            <td><label>Protocolo:</label></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <select>
                                <option>Epiq</option>
                                <option>Affiniti 70</option>
                                <option>Affiniti 50</option>
                              </select>
                            </td>
                            <td>
                              <select>
                                <option>Buena</option>
                                <option>Regular</option>
                                <option>Mala</option>
                              </select>
                            </td>
                            <td>
                               <select>
                                  <option>Laboratorio</option>
                                  <option>Uci</option>
                                  <option>Salas de Cx</option>
                                  <option>Hemodinamia</option>
                              </select>
                            </td>
                            <td>
                              <select>
                                <option>X5-1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </td>
                            <td>
                              <select>
                                <option>HTA</option>
                                <option>Tabaco</option>
                                <option>Colesterol</option>
                                <option>Diabetes</option>
                                <option>Obesidad</option>
                                <option>Estrés</option>
                              </select>
                            </td>
                            <td>
                              <select>
                                <option>Bruce</option>
                                <option>Bruce modificado</option>
                                <option>Naughton</option>
                                <option>Cornell</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>

                  <Row>
                  <Col md="12">
                      <h5 className="title">Frecuencia cardiaca maxima</h5>
                  </Col>
                  </Row>

                  <Row>
                      <Col md="2">
                         <div class="containerTooltip">
                            <Input placeholder="Edad" type="number" value={this.state.edad} onChange={this.edad} />
                            <p class="hovTol1">Edad</p>
                         </div>
                      </Col>
                  </Row>

                  <Row>
                  <Col md="2">
                      <label>Femenino:</label>
                      <h2>{210-this.state.edad}</h2>
                   </Col>
                   <Col md="2">
                   <label>85% FCM:</label>
                   <h2> {((210-this.state.edad)*0.85).toFixed(2)} </h2>
                   </Col>
            
                    <Col md="2">
                      <label>Masculino:</label>
                      <h2>{220-this.state.edad}</h2>
                    </Col>
                    <Col md="2">
                    <label>85% FCM:</label>
                    <h2> {((220-this.state.edad)*0.85).toFixed(2)} </h2>
                    </Col>
            
                  </Row>

                  
         
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
