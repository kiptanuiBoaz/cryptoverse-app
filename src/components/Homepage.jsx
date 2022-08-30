import React from "react";
import millify from "millify";
import {Typography, Row, Col, Statistic} from "antd";
import {Link} from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
// import { retry } from "@reduxjs/toolkit/dist/query";

const {Title} = Typography;

export const Homepage = () => {

  const {data, isFetching} =useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching)  return("Loading...");

  return (
    <>
      <Title level={2} className="heading" > Global Crypto Stats</Title>
      <Row>
        <Col span={12}> <Statistic title ="Total Cryptocurrencies" value={globalStats.total}/> </Col>
        <Col span={12}> <Statistic title ="Total Exchanges" value={5}/> </Col>
        <Col span={12}> <Statistic title ="Total Market Cap" value={5}/> </Col>
        <Col span={12}> <Statistic title ="Total 24hr Volume" value={5}/> </Col>
        <Col span={12}> <Statistic title ="Total Markets " value={5}/> </Col>
      </Row>
    </>
  )
}
