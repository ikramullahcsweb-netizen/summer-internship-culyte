const UserCard = ({ user }) => {
  const { name, picture, dob, cell, email, location } = user;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center pt-5">
        <img
          src={picture.large}
          alt={`${name.first} ${name.last}`}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
        />
      </div>

      <div className="text-center mt-3 px-4">
        <h3 className="text-base font-semibold text-gray-900">
          {name.first} {name.last}
        </h3>
      </div>

      <div className="mt-4 border-t border-gray-100 px-4 py-3 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Age</span>
          <span className="text-gray-700 font-medium">{dob.age}</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Phone</span>
          <span className="text-gray-700 font-medium truncate max-w-[120px]">
            {cell}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Email</span>
          <span className="text-gray-700 font-medium truncate max-w-[120px]">
            {email}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Country</span>
          <span className="text-gray-700 font-medium">{location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;