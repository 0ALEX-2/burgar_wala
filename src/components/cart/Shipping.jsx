import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>House No.</label>
            <input type="text" placeholder="Enter house no." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter city name" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((elm) => (
                  <option value={elm.isoCode} key={elm.isoCode}>
                    {elm.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((elm) => (
                  <option value={elm.isoCode} key={elm.isoCode}>
                    {elm.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter pin code" />
          </div>
          <div>
            <label>Mobile No.</label>
            <input type="number" placeholder="Enter mobile no." />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
