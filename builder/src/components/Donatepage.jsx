"use client";
import React, { Component } from 'react';

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      amount: 10,
      isLoading: false,
      paymentComplete: false,
      error: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.setState({ paymentComplete: true, isLoading: false });
    } catch (error) {
      this.setState({ error: 'Payment failed', isLoading: false });
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="bg-white text-black min-h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-200 max-w-md w-full p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center">Support Us</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="block font-semibold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-white text-black border border-gray-400 rounded mb-4"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <label className="block font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-white text-black border border-gray-400 rounded mb-4"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label className="block font-semibold mb-2">Donation Amount ($):</label>
            <input
              type="number"
              name="amount"
              className="w-full px-4 py-2 bg-white text-black border border-gray-400 rounded mb-4"
              value={this.state.amount}
              onChange={this.handleInputChange}
            />
            <div className="card-element">
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-full py-3 px-6 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              disabled={this.state.isLoading}
            >
              Donate
            </button>
            {this.state.error && (
              <p className="text-red-500 font-semibold mt-4">{this.state.error}</p>
            )}
            {this.state.paymentComplete && (
              <p className="text-green-500 font-semibold mt-4">Payment successful!</p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default DonationForm;
