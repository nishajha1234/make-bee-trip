const Card = ({ item }) => {
  const isHotel = !!item.name;

  return (
    <div
      className={`
        bg-white border rounded-2xl shadow-sm overflow-hidden
        hover:shadow-md active:scale-[0.99] transition duration-300
        w-full max-w-full min-w-0
        ${isHotel ? "flex flex-col sm:flex-col md:flex-row" : ""}
      `}
    >
      {/* IMAGE */}
      {item.image && (
        <div
          className={`
            ${isHotel ? "w-full md:w-[280px] lg:w-[320px]" : ""}
            shrink-0
          `}
        >
          <img
            src={item.image}
            alt={item.name || "travel"}
            className={`
              w-full object-cover
              ${isHotel ? "h-48 sm:h-56 md:h-full" : "h-52 sm:h-60"}
            `}
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-3 sm:p-4 md:p-5 space-y-4 flex-1 min-w-0">

        {/* HEADER */}
        {isHotel ? (
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 truncate">
              {item.name}
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {item.city}
            </p>

            {item.address && (
              <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                {item.address}
              </p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {item.from} → {item.to}
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {item.departureTime} - {item.arrivalTime}
            </p>

            {(item.operator || item.trainName) && (
              <p className="text-xs text-gray-400 mt-1">
                {item.operator || item.trainName}
              </p>
            )}
          </div>
        )}

        {/* DETAILS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 border-t pt-4">
          <div>
            <p className="text-[10px] text-gray-400 uppercase">Price</p>
            <p className="text-base sm:text-lg font-semibold text-blue-600 mt-1">
              ₹{item.price}
            </p>
          </div>

          {item.rating && (
            <div>
              <p className="text-[10px] text-gray-400 uppercase">Rating</p>
              <p className="text-xs sm:text-sm text-yellow-600 mt-1">
                ⭐ {item.rating}
              </p>
            </div>
          )}

          {item.duration && (
            <div>
              <p className="text-[10px] text-gray-400 uppercase">Duration</p>
              <p className="text-xs text-gray-700 mt-1">
                {item.duration}
              </p>
            </div>
          )}

          {item.type && (
            <div>
              <p className="text-[10px] text-gray-400 uppercase">Type</p>
              <p className="text-xs text-gray-700 mt-1">
                {item.type}
              </p>
            </div>
          )}
        </div>

        {/* AMENITIES */}
        {isHotel && item.amenities && (
          <div className="border-t pt-4">
            <div className="flex flex-wrap gap-2">
              {item.amenities.slice(0, 4).map((a, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-[10px] bg-gray-100 rounded-full text-gray-600"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* DESCRIPTION */}
        <p className="text-xs text-gray-500 line-clamp-2">
          {item.description ||
            (isHotel
              ? "Comfortable stay with premium amenities."
              : "Reliable and comfortable journey.")}
        </p>
      </div>
    </div>
  );
};

export default Card;