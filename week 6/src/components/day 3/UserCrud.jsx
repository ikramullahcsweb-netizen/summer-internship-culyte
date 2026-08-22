// import { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { fetchUsers, addUser } from "@/components/day 3/api/usersApi";

// function UserList() {
//   const { data: users, isPending, isError, error } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers, // Yahan direct API function pass kar diya
//   });

//   if (isPending)
//     return <p className="text-center text-sm text-gray-500 py-4">Loading users...</p>;
//   if (isError)
//     return <p className="text-center text-sm text-red-600 py-4">Error: {error.message}</p>;

//   return (
//     <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
//       {users.map((user) => (
//         <li
//           key={user.id}
//           className="border border-gray-200 rounded-lg p-3.5 bg-white shadow-sm transition hover:shadow"
//         >
//           <p className="m-0 font-semibold text-gray-900">{user.name.first}</p>
//           <p className="m-0 text-xs text-gray-500 mt-0.5">{user.email}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function AddUserForm() {
//   const queryClient = useQueryClient();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [formError, setFormError] = useState("");

//   const mutation = useMutation({
//     mutationFn: addUser, // Yahan mutation ke liye bhi API function use kiya
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["users"] });
//       setName("");
//       setEmail("");
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim().length < 2) {
//       setFormError("Name must be at least 2 characters");
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setFormError("Enter a valid email");
//       return;
//     }
//     setFormError("");
//     mutation.mutate({ name, email });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
//     >
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
//       />
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
//       />
//       {formError && <p className="text-red-600 text-xs m-0 font-medium">{formError}</p>}

//       <button
//         type="submit"
//         disabled={mutation.isPending}
//         className={`bg-gray-900 text-white rounded-lg py-2.5 text-sm font-semibold transition ${
//           mutation.isPending ? "opacity-60 cursor-default" : "hover:bg-gray-800 cursor-pointer"
//         }`}
//       >
//         {mutation.isPending ? "Adding..." : "Add User"}
//       </button>

//       {mutation.isError && (
//         <p className="text-red-600 text-xs m-0">Failed to add user</p>
//       )}
//       {mutation.isSuccess && (
//         <p className="text-emerald-600 text-xs m-0 font-medium">User added — list refreshed!</p>
//       )}
//     </form>
//   );
// }

// function UserCrud() {
//   return (
//     <div className="max-w-md mx-auto my-10 px-4 font-sans flex flex-col gap-5">
//       <div>
//         <h1 className="m-0 text-xl font-bold text-gray-900">Day 3 Practical</h1>
//         <p className="m-1 text-xs text-gray-500">
//           useQuery + useMutation + queryKey + invalidateQueries
//         </p>
//       </div>
//       <AddUserForm />
//       <UserList />
//     </div>
//   );
// }

// export { UserCrud };



import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUser } from "@/components/day 3/api/usersApi";

function UserList() {
  const { data: users, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isPending)
    return <p className="text-center text-sm text-gray-500 py-4">Loading users...</p>;
  if (isError)
    return <p className="text-center text-sm text-red-600 py-4">Error: {error.message}</p>;

  return (
    <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
      {users?.map((user, index) => {
        // 1. Safe Unique Key (object error ya undefined key se bachne ke liye)
        const userKey = user?.login?.uuid || user?.id?.value || user?.id || index;

        // 2. Safe Name Check (API object aur Form string dono ko handle karega)
        const firstName = typeof user.name === "object" ? user.name?.first : user.name;
        const lastName = typeof user.name === "object" ? user.name?.last : "";

        return (
          <li
            key={userKey}
            className="border border-gray-200 rounded-lg p-3.5 bg-white shadow-sm transition hover:shadow"
          >
            <p className="m-0 font-semibold text-gray-900">
              {firstName} {lastName}
            </p>
            <p className="m-0 text-xs text-gray-500 mt-0.5">{user.email}</p>
          </li>
        );
      })}
    </ul>
  );
}

function AddUserForm() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setName("");
      setEmail("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setFormError("Name must be at least 2 characters");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError("Enter a valid email");
      return;
    }
    setFormError("");
    mutation.mutate({ name, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
      />
      {formError && <p className="text-red-600 text-xs m-0 font-medium">{formError}</p>}

      <button
        type="submit"
        disabled={mutation.isPending}
        className={`bg-gray-900 text-white rounded-lg py-2.5 text-sm font-semibold transition ${
          mutation.isPending ? "opacity-60 cursor-default" : "hover:bg-gray-800 cursor-pointer"
        }`}
      >
        {mutation.isPending ? "Adding..." : "Add User"}
      </button>

      {mutation.isError && (
        <p className="text-red-600 text-xs m-0">Failed to add user</p>
      )}
      {mutation.isSuccess && (
        <p className="text-emerald-600 text-xs m-0 font-medium">User added — list refreshed!</p>
      )}
    </form>
  );
}

function UserCrud() {
  return (
    <div className="max-w-md mx-auto my-10 px-4 font-sans flex flex-col gap-5">
      <div>
        <h1 className="m-0 text-xl font-bold text-gray-900">Day 3 Practical</h1>
        <p className="m-1 text-xs text-gray-500">
          useQuery + useMutation + queryKey + invalidateQueries
        </p>
      </div>
      <AddUserForm />
      <UserList />
    </div>
  );
}

export { UserCrud };