import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input, Col, Row} from "reactstrap";
import alertify from "alertifyjs";

export default class Payment extends Component {
  state = { name: "", surName: "", cardNumber: "", lastDate: "",securityCode:"" };
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div style={{'margin': '0 300px'}}>
        <h3>Banka / Kredi Kartı </h3>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">
                  Ad
                </Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="isim giriniz"
                    type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="surname">
                  Soyad
                </Label>
                <Input
                    id="surname"
                    name="surname"
                    placeholder="soyad giriniz"
                    type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="carNumber">
                Kart Numarası
              </Label>
              <Input
                  id="carNumber"
                  name="carNumber"
                  placeholder="Kart numarası giriniz"
                  type="text"
              />

            </FormGroup>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">
                  Son Kullanma Tarihi
                </Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="DD/MM"
                    type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="securityCode">
                  Güvenlik Kodu
                </Label>
                <Input
                    id="securityCode"
                    name="securityCode"
                    placeholder="***"
                    type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="success">   Öde   </Button>
        </Form>
      </div>
    );
  }
}
