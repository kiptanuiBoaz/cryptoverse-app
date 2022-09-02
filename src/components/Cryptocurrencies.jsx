import React , {useState , useEffect} from "react";
import millify from "millify";
import {Link} from "react-router-dom";
import {Card, Col, Row, Input } from "antd"
import { useGetCryptosQuery } from "../services/cryptoApi";

export const CryptoCurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery (count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect accepts to parameters, callback fn and dependecy array i.e the callback gets executed if any of theose changes
  useEffect(()=> {
    
    // tap into the value of the search field , convert to lowerCase and find the coin names that match the term
    const filteredData = cryptosList?.data?.coins.filter(
      (coin)=> coin.name.toLowerCase().includes(
        searchTerm.toLowerCase()
      )
    );

    setCryptos(filteredData);
    
  }, [cryptosList, searchTerm])
   
  if (isFetching) return ("Loading...")

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
        <Input placeholder="Search Cryptocurrecy" onChange={ (e)=> setSearchTerm(e.target.value)} />
      </div>
      )}
      
      <Row gutter={[32,32]} className="crypto-card-container">
        {/* add question mark so as to ignore if api returns endefined to avoid crash */}
        {cryptos?.map((currency)=>
          (
            <Col xs={24} sm={12} lg={6} className ="crypto-card" key= {currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card 
                  title = {`${currency.rank}.${currency.name}`}
                  extra ={<img className= "crypto-image" src={currency.iconUrl} alt="crypto"/>}
                  hoverable={true} 
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>

              </Link>

            </Col>
          )
        )}
      </Row>
    </>
  )
}
