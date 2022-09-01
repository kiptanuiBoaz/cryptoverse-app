import React , {useState} from "react";
import millify from "millify";
import {Link} from "react-router-dom";
import {Card, Col, Row, Input } from "antd"
import { useGetCryptosQuery } from "../services/cryptoApi";

export const CryptoCurrencies = () => {

  const {data: cryptosList, isFetching} = useGetCryptosQuery ();
  const {cryptos, setCryptos} = useState(cryptosList?.data?.coins);
    console.log(cryptos);

  return (
    <>
      <Row gutters={[32,32]} className="crypto-card-container">
        {cryptos.map((currency)=>
          (
            <Col xs={24} sm={12} lg={6} className ="crypto-card" key= {currency.id}>
              <Link to={`/crypto/${currency.id}`}>

              </Link>

            </Col>
          )
        )}
      </Row>
    </>
  )
}
