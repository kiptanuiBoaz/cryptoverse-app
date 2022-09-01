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
    <div>CrytoCurrencies</div>
  )
}
