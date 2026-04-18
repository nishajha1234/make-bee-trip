import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const SearchForm = ({ onSearch, type }) => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    city: "",
  });

  const [error, setError] = useState("");

  const cities = ["Delhi", "Mumbai", "Jaipur", "Goa", "Bangalore", "Chandigarh"];

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "hotels") {
      if (!form.city) return setError("Please select a city");
    } else {
      if (!form.from || !form.to)
        return setError("From and To are required");
      if (form.from === form.to)
        return setError("From and To cannot be same");
    }

    onSearch(form);
  };

  const swap = () => {
    setForm({ ...form, from: form.to, to: form.from });
  };

  const SelectField = ({ label, name, value }) => (
    <div className="flex-1 w-full text-left">
      <label className="text-white text-base md:text-lg font-medium mb-2 block pl-2 md:pl-2">
        {label}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="
            w-full 
            bg-white/20 backdrop-blur-md
            text-white 
            text-base md:text-lg font-semibold
            px-4 pr-10 py-3 
            rounded-xl 
            outline-none 
            appearance-none
            border border-white/20
          "
        >
          <option value="" className="text-black">
            Select
          </option>
          {cities.map((c) => (
            <option key={c} value={c} className="text-black">
              {c}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none">
          ▾
        </span>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full">

      <ErrorMessage message={error} />

      {/* FORM WRAPPER */}
      <div className="bg-white30 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">

        {type === "hotels" ? (
          <div className="flex flex-col md:flex-row items-end gap-4">

            <SelectField
              label="City"
              name="city"
              value={form.city}
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow w-full md:w-auto">
              Search Hotels
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-end gap-4">

            <SelectField
              label="From"
              name="from"
              value={form.from}
            />

            {/* SWITCH */}
            <button
              type="button"
              onClick={swap}
              className="self-center md:self-end mb-2 md:mb-0 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white border border-white/20"
            >
              ⇄
            </button>

            <SelectField
              label="To"
              name="to"
              value={form.to}
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow w-full md:w-auto">
              Search Trips
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchForm;