import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HufukG4O9jXIh4H2kPkQltDZFCQ4ANuAss3b7jngQJvez2iNZia2lehw2gcEeGLip0XMwjiMiJRvvxQzFo2jHcl003a2hqHyz';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddess
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;