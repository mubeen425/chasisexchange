import React, { useState } from "react";
import Card from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";
import "react-credit-cards/es/styles-compiled.css";
import { CardSection } from "./style";
import { useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import { toast } from "react-toastify";

function PaymentForm({ setShowForm, Data, setBody, api }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handlePayment = async () => {
    if (api === "deposit") {
      await API.deposit(Data)
        .then((resp) => {
          if (resp.status === 200) {
            toast.success(resp.data.message);
            setBody({});
            setShowForm(false);
          }
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    } else if (api === "withdraw") {
      await API.withdraw(Data)
        .then((resp) => {
          if (resp.status === 200) {
            toast.success(resp.data.message);
            setBody({});
            setShowForm(false);
          }
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCVC(target.value);
    } else if (target.name === "name") {
      setName(target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setFormData(formData);
    e.target.reset();
  };

  return (
    <CardSection>
      <div key="Payment">
        <div className="App-payment">
          <h1>Please Enter Your Credit Card Details</h1>
          <Card
            className="card"
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={handleCallback}
          />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="\d{16,22}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button
                onClick={() => handlePayment()}
                className="btn btn-primary btn-block"
              >
                PAY
              </button>
            </div>
          </form>
        </div>
      </div>
    </CardSection>
  );
}

export default PaymentForm;
