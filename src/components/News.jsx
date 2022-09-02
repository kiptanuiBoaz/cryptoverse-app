import React from "react";
import { Card, Typography, Row, Col,Avatar, Select } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const {Text, Title} =Typography;

export const News = ({ simplified }) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory:"Cryptocurrencies", count: simplified ? 10: 100})

  if(!cryptoNews?.value) return "Loading...";

  return (
   <Row gutter={[24,24]}>

    {cryptoNews.value.map((news,i) =>(
      <Col xs={24} sm={12} lg={8} key={i}>e
       <Card hoverable={true} className="news-card">
        <a href={news.url} target="_blank" ref="noreferrer">

        </a>
       </Card>

      </Col>
    ))}
     
   </Row>
  )
}

