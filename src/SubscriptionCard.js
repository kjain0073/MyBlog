import React from 'react';
import SubscribeCard from "react-subscribe-card";

const mailchimpURL = `https://gmail.us8.list-manage.com/subscribe/post?u=8b960b50128cbc8ef8f8037e9&amp;id=c30e656233`;

const outerCardStyle = `
      padding: 0;
      box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);
      background-color: #000000 ;
    `;
const subContainerStyle = `
      box-shadow: 0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3);
      align-items: center;
      background-color: #000000 ;
    `;
const subInputStyle = `
      border-width: 0;
      margin: 0;
      background-color: #EBE8E8 ;
    `;
const subButtonStyle = `
      border-radius: 0;
      flex-grow: 1;
      background-color: #B0A5EC;
      color: #000000;
    `;

const SubscriptionCard = () => (
  <div>
    <SubscribeCard
      mailchimpURL={mailchimpURL}
      outerCardStyle={outerCardStyle}
      subContainerStyle={subContainerStyle}
      subInputStyle={subInputStyle}
      subButtonStyle={subButtonStyle}
    />
  </div>
);

export default SubscriptionCard;
