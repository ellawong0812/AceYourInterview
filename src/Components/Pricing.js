import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div>
      <div>
        <h2>Pricing</h2>
        <p>
          We offer competitive pricing for our services. Check out our pricing
          page for details on our packages and find the one that best suits your
          needs.
        </p>
      </div>
      <div class="pricing-container">
        <div class="pricing-package">
          <h2>Basic Package</h2>
          <p>Perfect for entry-level job seekers</p>
          <ul>
            <li>1 personalized coaching session</li>
            <li>Resume review</li>
            <li>Email support</li>
          </ul>
          <div class="price">$99</div>
          <button class="select-package">Choose Basic</button>
        </div>
        <div class="pricing-package popular">
          <h2>Standard Package</h2>
          <p>Our most popular choice</p>
          <ul>
            <li>3 personalized coaching sessions</li>
            <li>Resume and cover letter review</li>
            <li>Mock interview</li>
            <li>Email and phone support</li>
          </ul>
          <div class="price">$249</div>
          <button class="select-package">Choose Standard</button>
        </div>
        <div class="pricing-package">
          <h2>Premium Package</h2>
          <p>For those seeking comprehensive support</p>
          <ul>
            <li>5 personalized coaching sessions</li>
            <li>Resume, cover letter, and LinkedIn profile review</li>
            <li>Multiple mock interviews</li>
            <li>Priority email and phone support</li>
          </ul>
          <div class="price">$399</div>
          <button class="select-package">Choose Premium</button>
        </div>
      </div>
      <div class="special-offers">
        <h3>Special Offers</h3>
        <p>
          We offer a 10% discount for students. Use code 'SUCCESS' at checkout.
        </p>
      </div>
    </div>
  );
}

export default Pricing;
