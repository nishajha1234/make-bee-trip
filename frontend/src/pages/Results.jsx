// pages/Results.jsx

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  getFlights,
  getBuses,
  getTrains,
  getHotels,
} from "../services/api";

import Card from "../components/Card";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

const Results = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate(); // ✅ FIXED (inside component)

  const query = new URLSearchParams(location.search);

  const type = query.get("type");
  const from = query.get("from");
  const to = query.get("to");
  const city = query.get("city");

  const isHotel = type === "hotels";

  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        let response;
        const params = { from, to, city };

        if (type === "flights") response = await getFlights(params);
        else if (type === "buses") response = await getBuses(params);
        else if (type === "trains") response = await getTrains(params);
        else response = await getHotels(params);

        setData(response.data);
      } catch (err) {
        setError(
          err?.response?.data?.message ||
            "Unable to fetch results. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    if (!type) return;
    fetchData();
  }, [type, from, to, city]);

  // ================= STATES =================
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= TOP SEARCH SUMMARY ================= */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">

          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {isHotel
              ? `Stays in ${city || "your destination"}`
              : `${from || "From"} → ${to || "To"}`}
          </h2>

          <p className="text-sm mt-1">
            {data.length === 0 ? (
              <span className="text-red-500">
                No results found
              </span>
            ) : (
              <span className="text-gray-500 capitalize">
                {type} • {data.length} options available
              </span>
            )}
          </p>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">

        {/* ================= NO RESULTS ================= */}
        {!data || data.length === 0 ? (
          <div className="bg-white border rounded-xl p-10 text-center shadow-sm">

            <h3 className="text-lg font-medium text-gray-700 mb-2">
              No results found
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              Try adjusting your search or explore these options
            </p>

            {/* 🔥 WORKING SUGGESTIONS */}
            <div className="flex flex-wrap justify-center gap-2">
              {(isHotel
                ? ["Delhi", "Mumbai", "Goa", "Jaipur"]
                : [
                    { from: "Delhi", to: "Mumbai" },
                    { from: "Delhi", to: "Bangalore" },
                    { from: "Mumbai", to: "Delhi" },
                  ]
              ).map((item, i) => {
                const label = isHotel
                  ? item
                  : `${item.from} → ${item.to}`;

                const handleClick = () => {
                  if (isHotel) {
                    navigate(`/results?type=hotels&city=${item}`);
                  } else {
                    navigate(
                      `/results?type=${type}&from=${item.from}&to=${item.to}`
                    );
                  }
                };

                return (
                  <button
                    key={i}
                    onClick={handleClick}
                    className="px-3 py-1.5 text-sm border rounded-full bg-gray-50 hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            {/* ================= RESULTS ================= */}

            {isHotel ? (
              <div className="space-y-6">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Results;