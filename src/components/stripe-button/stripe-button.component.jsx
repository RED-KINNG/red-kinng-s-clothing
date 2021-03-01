import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IE6kZGViKZAScXObm1DcC62DwQagHckUAOQzoZh6Szwu6nrq7XhcePonUiNRMLU8CPBBIU2rfl7Rrk6xFvkUMnQ00eDIOstfb'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }  

    return (
        <StripeCheckout
         label= 'Pay Now'
         name = 'REDROYALTY FaZhioNista Ltd.'
         billingAddress
         shippingAddress
         image = 'https://images.unsplash.com/photo-1593346769568-d3db3722395f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
         description = {`Your total is $${price}`}
         amount= {priceForStripe}
         panelLabel= 'Pay Now'
         token={onToken}
         stripeKey= {publishableKey}
        />
    )

};


export default StripeCheckoutButton