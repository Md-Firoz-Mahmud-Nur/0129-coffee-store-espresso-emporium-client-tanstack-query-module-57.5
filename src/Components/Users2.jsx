import { useQuery } from "@tanstack/react-query";

const Users2 = () => {
  const { isPending, isError, error, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/user",
      );
      return res.json();
    },
  });

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/user",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  const handleDelete = (id) => {
    //make sure user is confirm to delete
    fetch(
      `https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/user/${id}`,
      {
        method: "DELETE",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("delete user successfully");

          // remove the user from the list
          // const remainingUsers = users.filter((user) => user._id !== id);
          // setUsers(remainingUsers);
        }
      });
  };
  if (isPending) {
    return (
      <span className="loading loading-dots loading-lg flex h-screen items-center justify-center text-center"></span>
    );
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      users : {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Last Log In Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td></td>
                <td>{user.email}</td>
                <td>{user.createdTime}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
