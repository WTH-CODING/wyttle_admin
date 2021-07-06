import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import StatsCard from "../../components/Stats/StatsCard";
import { NavLink } from "react-router-dom";
import { Line,Bar } from "react-chartjs-2"

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
      <div className="row mt-5">
        <div className="col-md-6 p-3">
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'Orders / Month',
            data: [12, 19, 3, 5, 2, 3],
            
        }]
        }}
        height={400}
        width={"100%"}
        options={{
          maintainAspectRatio : false
        }} />
      </div>
      <div className="col-md-6 p-3">
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'Views / Month',
            data: [0,0,0,0,1200, 300, 1200, 0],
            
        }]
        }}
        height={400}
        width={"100%"}
        options={{
          maintainAspectRatio : false
        }} />
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default Home;
