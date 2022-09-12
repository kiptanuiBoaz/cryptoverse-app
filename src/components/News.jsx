import React from "react";
import { Card, Typography, Row, Col } from "antd";
// import moment from "moment";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";

const { Title} =Typography;
// const {Option} = Select;
// Text, , Avatar, Select

export const News = ({ simplified }) => {
  //destructure
  const newsCategory ='Cryptocurrency';
  const {data: cryptoNews} = useGetCryptosNewsQuery({newsCategory, count: simplified ? 6: 12})

  if(!cryptoNews?.value) return "Loading...";
  // ?>>optional chaininh
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

