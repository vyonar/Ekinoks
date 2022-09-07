import React, { Component } from 'react'
import {Row, Col, ListGroupItem, ListGroup} from "reactstrap"
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
               <Row>
                   <CategoryList/>
               </Row>
                <Row>
                    {/*<Col xs="3">*/}
                    {/*    <CategoryList/>*/}
                    {/*</Col>*/}
                <Col xs="12">
                    <ProductList/>
                </Col>
                </Row>
            </div>
        )
    }
}
