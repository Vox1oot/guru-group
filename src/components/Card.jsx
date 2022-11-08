import { ReactComponent as Sdelka } from "../svg/sdelka.svg"
import { ReactComponent as Dostavka } from "../svg/dostavka.svg"
import axios from 'axios';

import getDate from "../utilities/getDate.js";
import { useState } from "react";
import { useEffect } from "react";

import Alert from './Alert';
import Spinner from './Spinner';
import cn from "classnames";

const Card = ({ data, imgURL }) => {
  const [url, setUrl] = useState(null);
  const [seen, setSeen] = useState(data.seen);

  const cardClasses = cn("card", {
    "seen svg-seen": seen
  });
 
  useEffect(() => {
    const fetchUrl= async () => {
      const res = await axios.get('https://source.unsplash.com/random/400x400');
      setUrl(res.request.responseURL);
    };

    fetchUrl();
  }, []);

  return (
    <div className={cardClasses} id={data.id}>
      {!url && <Spinner/>}
      <div className={!url && 'not-display'}>
        <div className="header">
          <img src={url && url} alt="" />
          {seen && <Alert />}
        </div>
        <div className="footer">
          <div className="row-1 d-flex">
            <div className="old-price flex-item f-grow">{data.oldPrice} Р</div>
            <Dostavka className="svg flex-item" />
            <Sdelka className="svg flex-item" />
          </div>
          <div className="row-2 price">{data.price} Р</div>
          <div className="row-3 title">{data.title}</div>
          <div className="row-4 d-flex">
            <div className="f-grow">{data.locality}</div>
            <div>{getDate(data.date)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
