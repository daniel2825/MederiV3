import React from "react";
import Select from 'react-select';
//import SelectComponente from "components/SelectComponente/SelectComponente"
//importante https://www.quackit.com/html/html_editors/scratchpad/?example=/bootstrap/bootstrap_4/tutorial/bootstrap_4_popover_close_focus
// reactstrap components http://jsfiddle.net/kevinsbennett/mtct6/1/
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

class RegistroPaciente extends React.Component {

  constructor() {

    super();

    this.state = {
      SuperficieCorporal: 0,
      nombres: '',
      apellidos: '',
      identificacion: '',
      cama: '',
      Peso: '',
      Talla: '',
      RitmoCar: 'SINUSAL',
      FrecuenciaCar: '',
      Comprobador: '',
      indicacion: '',
      tensionarterial: '',
      saturacion: ''
    }


    this.nombres = this.nombres.bind(this);
    this.apellidos = this.apellidos.bind(this);
    this.identificacion = this.identificacion.bind(this);
    this.cama = this.cama.bind(this);
    this.Pesoevent = this.Pesoevent.bind(this);
    this.TallaEvent = this.TallaEvent.bind(this);
    this.RitmoCardiaco = this.RitmoCardiaco.bind(this);
    this.FrecuenciaCar = this.FrecuenciaCar.bind(this);
    this.Comprobador = this.Comprobador.bind(this);
    this.indicacion = this.indicacion.bind(this);
    this.tensionarterial = this.tensionarterial.bind(this);
    this.saturacion = this.saturacion.bind(this);
  }


  nombres(event) {
    this.setState({
      nombres: event.target.value,
    });
  }
  apellidos(event) {
    this.setState({
      apellidos: event.target.value,
    });
  }
  identificacion(event) {
    this.setState({
      identificacion: event.target.value,
    });
  }
  cama(event) {
    this.setState({
      cama: event.target.value,
    });
  }

  tensionarterial(event) {
    this.setState({
      tensionarterial: event.target.value,
    });
  }

  saturacion(event) {
    this.setState({
      saturacion: event.target.value,
    });
  }

  indicacion(event) {
    this.setState({
      indicacion: event.target.value,
    });
  }

  Comprobador(event) {
    this.setState({
      Comprobador: event.target.value,
    });
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


  RitmoCardiaco(event) {
    this.setState({
      RitmoCar: event.target.value,
    });
  }

  FrecuenciaCar(event) {
    this.setState({
      FrecuenciaCar: event.target.value,
    });
  }


  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  render() {
    return (
      <>
        {/*    <SelectComponente/>*/}
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>

                <CardHeader>
                  <h5 className="title">REGISTRO DEL PACIENTE</h5>
                </CardHeader>

                <CardBody>
                  <Form>

                    <Row>
                      <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Nombres" type="text" />
                                  <p class="hovTol1">Nombres</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Apellidos" type="text" />
                                  <p class="hovTol1">Apellidos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Identificación" type="text" />
                                  <p class="hovTol1">Identificación</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Cama" type="text" />
                                  <p class="hovTol1">Cama</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <table >
                          <tbody>
                            <tr>
                              <td><label>Fecha de nacimiento:</label></td>
                              <td>
                                <Input placeholder="Fecha de nacimiento" type="date" />
                              </td>
                              <td className="tam"><label>Genero: </label></td>
                              <td className="tam">
                                <select onChange={this.Comprobador} value={this.state.Comprobador} >
                                  <option>Masculino</option>
                                  <option>Femenino</option>
                                </select>

                              </td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>

                    </Row>
                    <Row>
                      <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Peso (Kg)" type="number" value={this.state.Peso} onChange={this.Pesoevent} />
                                  <p class="hovTol1">Peso (Kg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Talla (Cm)" type="number" value={this.state.Talla} onChange={this.TallaEvent} />
                                  <p class="hovTol1">Talla (Cm)</p>
                                </div>
                              </td>
                              <td><label>Superficie corporal: </label></td>
                              <td><h2>{(0.007184 * Math.pow(this.state.Peso, 0.425) * Math.pow(this.state.Talla, 0.725)).toFixed(2)}</h2></td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>

                    </Row>

                    <Row>

                      <Col md="12">
                        <table>
                          <thead>
                            <tr>
                              <td><label>Comprobador:</label></td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="tam">
                                {
                                  <select onChange={this.Comprobador} value={this.state.Comprobador} >
                                    <option>Nueva eps</option>
                                    <option>Compensar</option>
                                    <option>Sanitas</option>
                                    <option>Coomeva</option>
                                    <option>C.de Transplantes</option>
                                    <option>Otros</option>

                                  </select>
                                }

                              </td>
                              {
                                this.state.Comprobador == "Otros" ?
                                  <td>
                                    <div class="containerTooltip">
                                      <Input placeholder="Otros" type="text" />
                                      <p class="hovTol1">Otros</p>
                                    </div>
                                  </td>
                                  : null
                              }

                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Indicación" type="number" value={this.state.indicacion} onChange={this.indicacion} />
                                  <p class="hovTol1">Indicación</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Tensión arterial (mmHg)" type="text" value={this.state.tensionarterial} onChange={this.tensionarterial} />
                                  <p class="hovTol1">Tensión arterial (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Frecuencia cardiaca (Lpm)" type="text" value={this.state.FrecuenciaCar} onChange={this.FrecuenciaCar} />
                                  <p class="hovTol1">Frecuencia cardiaca (Lpm)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Saturación %" type="text" value={this.state.saturacion} onChange={this.saturacion} />
                                  <p class="hovTol1">Saturación %</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>

                    <Row>

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

export default RegistroPaciente;
