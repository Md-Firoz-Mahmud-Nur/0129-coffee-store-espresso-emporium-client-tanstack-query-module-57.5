import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, coffeeName, availableQuantity, supplierName, photoUrl } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete confirm");

        fetch(
          `https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(coffee),
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Coffee" />
      </figure>
      <div className="card-body flex-row justify-between">
        <div>
          <h2 className="card-title">Name : {coffeeName}</h2>
          <p>Stock : {availableQuantity}</p>
          <p>Chef : {supplierName}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <Link className="btn" to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    coffeeName: PropTypes.string.isRequired,
    availableQuantity: PropTypes.number.isRequired,
    supplierName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
  coffees: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  }),
  setCoffees: PropTypes.func.isRequired,
};

export default CoffeeCard;
