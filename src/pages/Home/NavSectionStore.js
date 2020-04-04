import React from 'react';

import {Nav, Col, Row} from 'react-bootstrap';

import Logo from './../../assets/imgs/logo.png';

import './../../style/pages/Home/Home.css';

export default function Input({className, inputRef, products, ...props}) {
  let classes = `${className || ''}`;
  return (
    <Nav className={classes} variant="tabs" defaultActiveKey="/anuncios">
      <Nav.Item>
        <a className="nav-itens-products" href="/anuncios">Anúncios</a>
        <Row className="container-products">
          {
            products === undefined || products === []
            ?
            null
            :
            products.map((product, i) => {
              return(
                <Col className="product-style" key={i}>
                  <div className="product-img">
                    {
                      product.images === [] || product.images.length === 0 || product.images === undefined
                      ?
                      <div className="image-not-found">
                        <img alt="Img not Found | Hallo" src={Logo} />
                      </div>
                      :
                      <img alt="Product" src={product.images[0].url} />
                    }
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <span>{product.description}</span>
                    <p>R${product.price}</p>
                  </div>
                </Col>
              )
            }) 
          }
        </Row>
      </Nav.Item>
    </Nav>
  )
}
