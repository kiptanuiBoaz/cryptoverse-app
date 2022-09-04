import React from "react";
import { Card, Typography, Row, Col, Avatar, Select } from "antd";
import moment from "moment";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";

const {Text, Title} =Typography;
const {Option} = Select;

export const News = ({ simplified }) => {
  const {data: cryptoNews} = useGetCryptosNewsQuery({newsCategory:"Cryptocurrency", count: simplified ? 6: 12})

  if(!cryptoNews?.value) return "Loading...";

  return (
   <Row gutter={[24,24]}>

    {cryptoNews?.value.map(
      (news,i) =>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable={true} className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">  
                <Title className="news-title" level={4}>{news.name}</Title>
              </div>
            </a>
          </Card>
        </Col>
      ))
    }
     
   </Row>
  )
}

