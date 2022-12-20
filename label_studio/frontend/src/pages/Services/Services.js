import React, { useCallback, useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { ServicesCard } from "./ServicesCard";
import SERVICES from "../../config/CentralApi";
import { Button } from '../../components';

export const ServicesPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleGetData = () => {
    console.log('handleGetData');
    fetch(SERVICES.LIST_SERVICE_INFOS)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const getService = useCallback(async () => {
    fetch(SERVICES.LIST_SERVICE_INFOS)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log('auto refresh:'+count);
      });
  }, [count]);

  useEffect(() => {
    getService();

    const timer = setInterval(() => {
      setCount(count + 1);
    }, 10000);
    
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <Button onClick={handleGetData}>Refresh</Button>

      <div name="list">
        {data.length ? (
          data.map(service => (
            <ServicesCard key={service.id} service={service} />
          ))
        ) : (
          'loading...'
        )}
      </div>
    </div>
  );
};

ServicesPage.title = "Service";
ServicesPage.path = "/service";
ServicesPage.exact = true;

