import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
        E-commerce applications facilitate online buying and selling, encompassing platforms like online stores, shopping apps, and marketplaces, enabling businesses to reach a global audience and streamline operations. 
        Here's a more detailed look at e-commerce applications:
        What are E-commerce Applications?
        Definition:
        E-commerce applications are software or platforms that enable businesses and individuals to conduct commercial transactions online, including buying and selling goods or services. 
        </p>
        <p>
        Online Stores: Websites or apps where businesses display and sell their products or services.
        Marketplaces: Platforms that connect multiple sellers with buyers, like Amazon or eBay.
        Shopping Apps: Mobile applications that allow users to browse and purchase products from different stores or brands.
        Payment Gateways: Systems that process online payments securely, like PayPal or Stripe. 
        </p>
      </div>
    </div>
  )
}
