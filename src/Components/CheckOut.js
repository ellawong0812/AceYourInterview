import React, { useState } from "react";
import "./CheckOut.css";
import { useLocation } from "react-router-dom";

function CheckOut() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  //const [selectedPackage, setSelectedPackage] = useState("Basic Package");
  const [paymentDetails, setPaymentDetails] = useState("");

  const { state } = useLocation();
  const selectedPackage = state.selectedPackage;

  const packages = [
    { value: "Basic Package", label: "Basic Package" },
    { value: "Standard Package", label: "Standard Package" },
    { value: "Premium Package", label: "Premium Package" },
  ];

  const handleCheckout = () => {
    // Handle checkout process, e.g., send data to server
    alert(
      "Checkout successful! Thank you!!!\n\nCustomer Name: " +
        customerName +
        "\nEmail: " +
        email +
        "\nSelected Package: " +
        selectedPackage +
        "\nPayment Details: " +
        paymentDetails
    );
  };

  return (
    <div>
      <div className="checkout-form">
        <h2>Checkout</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Selected Package:</label>
          <p className="selectedPackage">{selectedPackage}</p>
          <label>Payment Details:</label>
          <input
            type="text"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
          />
          <button onClick={handleCheckout}>Complete Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
