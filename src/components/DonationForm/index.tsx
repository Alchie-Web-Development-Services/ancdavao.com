import React from "react";

const DonationForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-neutral-800 mb-6">
        Make a Donation Now
      </h3>
      <form>
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Donation Details
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-xs text-neutral-600"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                defaultValue="$120.00"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="frequency"
                className="block text-xs text-neutral-600"
              >
                Frequency
              </label>
              <select
                id="frequency"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md"
              >
                <option>One Time</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Payment Details
          </label>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="card-number"
                className="block text-xs text-neutral-600"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="**** **** **** ****"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="exp-month"
                  className="block text-xs text-neutral-600"
                >
                  Exp. Month
                </label>
                <input
                  type="text"
                  id="exp-month"
                  placeholder="MM"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="exp-year"
                  className="block text-xs text-neutral-600"
                >
                  Exp. Year
                </label>
                <input
                  type="text"
                  id="exp-year"
                  placeholder="YY"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="cv-code"
                  className="block text-xs text-neutral-600"
                >
                  CV Code
                </label>
                <input
                  type="text"
                  id="cv-code"
                  placeholder="CVV"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
