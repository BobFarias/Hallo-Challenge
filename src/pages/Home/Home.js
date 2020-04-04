import React, {useState, useEffect} from 'react';

import './../../style/pages/Home/Home.css';

import {Container, Row, Col, Spinner } from 'react-bootstrap';

import Navbar from './../../components/Navbar';
import NavSectionStore from './NavSectionStore';

import TwitterIcon from './../../assets/icons/twitterIcon.js';
import LinkedinIcon from './../../assets/icons/linkedinIcon.js';
import FbIcon from './../../assets/icons/fbIcon.js';
import InstagraIcon from './../../assets/icons/instagramIcon.js';
import StarIcon from './../../assets/icons/starIcon.js';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

import api from './../../services/api';

import {toast} from 'react-toastify';

export default function Home() {
  const [user_data, setUserData] = useState({});
  const [products_data, setProductsData] = useState([]);
  const [products_loading, setProductsLoading] = useState(true);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response_user = await api.get(`/users/${'7a158a48-1217-44d0-ae7c-7e610d7073b6'}`);
        setUserData(response_user.data);

        async function getUserProducts() {
          try {
            const response_user_products = await api.get(`/users/${response_user.data.guid}/ads`);
            setProductsData(response_user_products.data);
            setProductsLoading(false);
          } catch (err) {
            setProductsLoading(false);
            toast.error('Error ao carregar os produtos do usuário');
          }
        }

        getUserProducts()
        
      } catch (err) {
        toast.error('Error ao carregar as informações do usuário');
      }
    }
    getUserDetails();
  }, [])

  return (
    <div>
      {
        products_loading === true
        ?
        <div className="loading">
          <Spinner animation="border" variant="success" />
        </div>
        :
        null
      }
      <Container className="main-container" fluid={true}>
        <div className="container-fluid-nav">
          <Container>
            <Navbar/>
          </Container>
        </div>
        
        <Container className="blur-bg" fluid={true}>
          <img alt="Profile" src={user_data.profile_image} />
        </Container>
        <Container className="container-shop">
          <Row className="container-info-user">
            <Row className="container-info-user-row">
              <div>
                <div className="container-img-profile">
                  <img alt="Profile" src={user_data.profile_image} />
                </div>
              </div>
              <Col>
                <Row>
                  <h4 className="h4-title">
                    {user_data.premium}
                  </h4>
                  <StarIcon />
                </Row>
                <h4 className="h4-title">
                  {user_data.name}
                </h4>
                <span className="span-style">
                  Blumenau - SC
                </span>
              </Col>
            </Row>
            <Row className="container-info-social-media">
              <a target="_blank" rel="noopener noreferrer" href={user_data.social_facebook}>
                <div className="button-social-media">
                  <FbIcon />
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={user_data.social_instagram}>
                <div className="button-social-media">
                  <InstagraIcon />
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={user_data.social_linkedin}>
                <div className="button-social-media">
                  <LinkedinIcon />
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={user_data.social_twitter}>
                <div className="button-social-media">
                  <TwitterIcon />
                </div>
              </a>
              <div className="button-chat button-arround">
                <QuestionAnswerOutlinedIcon />
                <p>Chat</p>
              </div>
            </Row>
          </Row>
          <Row className="container-nav-itens">
            <NavSectionStore products={products_data} />
          </Row>
        </Container>
      </Container>
    </div>
  );
}
