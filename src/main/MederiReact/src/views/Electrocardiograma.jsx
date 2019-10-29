import React from "react";
import Select from 'react-select';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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

class Electrocardiograma extends React.Component {

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
      Observaciones:''
    }


    this.state.Observaciones = `
    
    <h5>CONCLUSIONES</h5>
    
    `;

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
    this.Observaciones = this.Observaciones.bind(this);
}

  Observaciones(event) {
    this.setState({
        Observaciones: event.target.value,
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

/*
  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]*/

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
                  <h5 className="title">ELECTROCARDIOGRAMA</h5>
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
                                  <Input placeholder="Hallazgos" type="text" />
                                  <p class="hovTol1">Hallazgos</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Ritmo" type="text" />
                                  <p class="hovTol1">Ritmo</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Frecuencia cardiaca (Lpm)" type="text" />
                                  <p class="hovTol1">Frecuencia cardiaca (Lpm)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Segmento Pr" type="text" />
                                  <p class="hovTol1">Segmento Pr</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Duración QRS (ms)" type="text" />
                                  <p class="hovTol1">Duración QRS (ms)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Qt corregido" type="text" />
                                  <p class="hovTol1">Qt corregido</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Eje QRS" type="text" />
                                  <p class="hovTol1">Eje QRS</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>

               
                  </Form>
                </CardBody>
                <CardBody>
                    
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

                </CardBody>

              </Card>
            </Col>
          </Row>



        </div>
      </>
    );
  }
}

export default Electrocardiograma;
