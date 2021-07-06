import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import StatsCard from "../../components/Stats/StatsCard";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout sidebar>
      <div className="container-fluid">
      <div className="row mt-3">
        <StatsCard quantity="2221" title="Total Orders"/>
        <StatsCard quantity="999" title="Total Products"/>
        <StatsCard quantity="402" title="Total Users"/>
        <StatsCard quantity="920392" title="Ad views" />
        
      </div>
      </div>
    </Layout>
  );
};

export default Home;
