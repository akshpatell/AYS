"use client";
import React, { Component } from "react";

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      amount: "10",
      selectedCurrency: "usd",
      isLoading: false,
      paymentComplete: false,
      error: null,
      conversionRate: 72,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      const { amount, selectedCurrency } = this.state;
      let convertedAmount = amount;

      if (selectedCurrency === "inr") {
        convertedAmount = (amount / this.state.conversionRate).toFixed(2);
      }

      console.log(
        `Amount in ${selectedCurrency.toUpperCase()}: ${convertedAmount}`
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.setState({ paymentComplete: true, isLoading: false });
    } catch (error) {
      this.setState({ error: "Payment failed", isLoading: false });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    this.setState({ selectedCurrency });
  };

  render() {
    const { amount, selectedCurrency } = this.state;

    return (
      <div className="bg-white text-black min-h-screen flex flex-col justify-center items-center max-sm:mx-2">
        <div className="bg-gray-200 max-w-md w-full p-6 rounded-lg shadow-lg max-sm:bg-white max-sm:border max-sm:border-gray-400 max-md:bg-gray-100">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Support Us
          </h1>
          <form onSubmit={this.handleSubmit}>
            <label className="block font-semibold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-white text-black border border-gray-400 rounded mb-4"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="name"
            />
            <label className="block font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-white text-black border border-gray-400 rounded mb-4"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="your123@gmail.com"
            />
            <label className="block font-semibold mb-2">Donation Amount:</label>
            <input
              type="number"
              name="amount"
              className="w-full px-4 py-2 bg-white text-black border border-gray-400 rounded mb-4"
              value={amount}
              onChange={this.handleInputChange}
              placeholder="number"
            />
            <div className="flex mb-4">
              <label className="block font-semibold mb-2 mr-4">Currency:</label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="selectedCurrency"
                  value="usd"
                  checked={selectedCurrency === "usd"}
                  onChange={this.handleCurrencyChange}
                />
                <span className="ml-2">USD</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="selectedCurrency"
                  value="inr"
                  checked={selectedCurrency === "inr"}
                  onChange={this.handleCurrencyChange}
                />
                <span className="ml-2">INR</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-3 px-6 hover:bg-blue-700 hover:text-white transition-colors duration-300"
              disabled={this.state.isLoading}
            >
              Donate
            </button>
            {this.state.error && (
              <p className="text-red-500 font-semibold mt-4">
                {this.state.error}
              </p>
            )}
            {this.state.paymentComplete && (
              <p className="text-green-500 font-semibold mt-4">
                Payment successful!
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default DonationForm;
