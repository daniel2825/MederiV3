import React from "react";
import Select from 'react-select';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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

class PruebaElectricaPerfusion extends React.Component {

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
      saturacion: '',
      Observaciones: ''
    }


    this.state.Observaciones = `
    
    <h5>CONCLUSIONES</h5>
    <p>
    ESTRUS FARMACOLOGICO CON DIPIRIDAMOL SUBMAXIMAL , ELECTRICAMENTE INDETERMINADA PARA INDUCCION DE ISQUEMIA MIOCARDICA 
    </p>
    `;
    this.Observaciones = this.Observaciones.bind(this);

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



  Observaciones(event) {
    this.setState({
      Observaciones: `

      <h5>CONCLUSIONES</h5>
      <p>
      ESTRUS FARMACOLOGICO CON DIPIRIDAMOL SUBMAXIMAL , ELECTRICAMENTE INDETERMINADA PARA INDUCCION DE ISQUEMIA MIOCARDICA 
      </p>`
    });
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
                  <h5 className="title">PRUEBA ELECTRICA PERFUSIÓN MIOCÁRDICA DIPIRIDAMOL</h5>
                </CardHeader>

                <CardBody>
                  <Form>

                    <Row>

                    <Col md="12">
                        <table >
                          <tbody>
                            <tr>
                              <td >
                                <div class="containerTooltip">
                                  <Input placeholder="Talla (Cm)" type="text" />
                                  <p class="hovTol1">Talla (Cm)</p>
                                </div>
                              </td>
                              <td >
                                <div class="containerTooltip">
                                  <Input placeholder="F.C Basal (Lpm)" type="text" />
                                  <p class="hovTol1">F.C Basal (Lpm)</p>
                                </div>
                              </td>
                              <td >
                                <div class="containerTooltip">
                                  <Input placeholder="Peso (Kg)" type="text" />
                                  <p class="hovTol1">Peso (Kg)</p>
                                </div>
                              </td>
                              <td >
                                <div class="containerTooltip">
                                  <Input placeholder="Presión arterial" type="text" />
                                  <p class="hovTol1">Presión arterial</p>
                                </div>
                              </td>
                              <td >
                                <div class="containerTooltip">
                                  <Input placeholder="Ritmo cardiaco" type="text" />
                                  <p class="hovTol1">Ritmo cardiaco</p>
                                </div>
                              </td>

                              <td >
                                <div class="containerTooltip">
                                  <Input placeholder="Dosis administrada" type="text" />
                                  <p class="hovTol1">Dosis administrada</p>
                                </div>
                              </td>


                            </tr>
                          </tbody>
                        </table>

                      </Col>
                    </Row>


                    <Row>

                      <Col md="12">
                        <h5 className="title">Hallazgos de pretest</h5>
                      </Col>

                    </Row>
                    <Row>
                      <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Electrocardiograma basal" type="text" />
                                  <p class="hovTol1">Electrocardiograma basal</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>

                    <Row>

                      <Col md="12">
                        <h5 className="title">Hallazgos durante estrés</h5>
                      </Col>

                    </Row>
                    <Row>
                      <Col md="12">
                        <table>
                          <thead>
                            <tr>
                              <td>BASAL</td>
                              <td>F.C</td>
                              <td>T.A</td>
                              <td>OBSERVACIÓN</td>
                            </tr>

                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <label>Basal:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal F.C lpm" type="text" />
                                  <p class="hovTol1">Basal F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Basal T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación basal" type="text" />
                                  <p class="hovTol1">Observación basal</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>1 Minuto:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal F.C lpm 1 Minuto" type="text" />
                                  <p class="hovTol1">Basal F.C lpm 1 Minuto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal I T.A. (mmHg) 1 Minuto" type="text" />
                                  <p class="hovTol1">Basal I T.A. (mmHg) 1 Minuto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 1 Minuto" type="text" />
                                  <p class="hovTol1">Observación 1 Minuto</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>4 Minuto:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal F.C lpm 4 Minutos" type="text" />
                                  <p class="hovTol1">Basal F.C lpm 4 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal I T.A. (mmHg) 4 Minutos" type="text" />
                                  <p class="hovTol1">Basal I T.A. (mmHg) 4 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 4 Minutos" type="text" />
                                  <p class="hovTol1">Observación 4 Minutos</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>8 Minuto:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal F.C lpm 8 Minutos" type="text" />
                                  <p class="hovTol1">Basal F.C lpm 8 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal I T.A. (mmHg) 8 Minutos" type="text" />
                                  <p class="hovTol1">Basal I T.A. (mmHg) 8 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 8 Minutos" type="text" />
                                  <p class="hovTol1">Observación 8 Minutos</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>12 Minuto:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal F.C lpm 12 Minutos" type="text" />
                                  <p class="hovTol1">Basal F.C lpm 12 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal I T.A. (mmHg) 12 Minutos" type="text" />
                                  <p class="hovTol1">Basal I T.A. (mmHg) 12 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 12 Minutos" type="text" />
                                  <p class="hovTol1">Observación 12 Minutos</p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <label>16 Minuto:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal F.C lpm 16 Minutos" type="text" />
                                  <p class="hovTol1">Basal F.C lpm 16 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal I T.A. (mmHg) 16 Minutos" type="text" />
                                  <p class="hovTol1">Basal I T.A. (mmHg) 16 Minutos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 16 Minutos" type="text" />
                                  <p class="hovTol1">Observación 16  Minutos</p>
                                </div>
                              </td>
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
                                  <Input placeholder="Dosis administración (0.56mcg/kg)" type="text" onChange={this.setState.SintomasPretest} value={this.state.SintomasPretest} />
                                  <p class="hovTol1">Dosis administración (0.56mcg/kg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Descripción" type="text" />
                                  <p class="hovTol1">Descripción</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Sintomas" type="text" />
                                  <p class="hovTol1">Sintomas</p>
                                </div>
                              </td>
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
                                  <Input placeholder="Electrocardiograma estrés" type="text" onChange={this.setState.SintomasPretest} value={this.state.SintomasPretest} />
                                  <p class="hovTol1">Electrocardiograma estrés</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Arritmias" type="text" />
                                  <p class="hovTol1">Arritmias</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Respuesta presora" type="text" />
                                  <p class="hovTol1">Respuesta presora</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </Col>
                    </Row>

                    <Row>
                      <Col md='12'>
                        <div className="App">
                          <CKEditor
                            editor={ClassicEditor}
                            data={this.state.Observaciones}
                            onInit={editor => {
                              // You can store the "editor" and use when it is needed.
                              console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              console.log({ event, editor, data });
                            }}
                            onBlur={editor => {
                              console.log('Blur.', editor);
                            }}
                            onFocus={editor => {
                              console.log('Focus.', editor);
                            }}
                          />
                        </div>
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

export default PruebaElectricaPerfusion;
