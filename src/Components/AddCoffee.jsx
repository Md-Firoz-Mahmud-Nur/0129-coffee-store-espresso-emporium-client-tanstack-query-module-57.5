import Swal from 'sweetalert2'


const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const availableQuantity = form.availableQuantity.value;
    const supplierName = form.supplierName.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const newCoffee = {
      coffeeName,
      availableQuantity,
      supplierName,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(newCoffee);
    //send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] px-28 py-16">
      <h2 className="py-8 text-center text-3xl font-extrabold">
        Add New Coffee
      </h2>
      <p className="pb-6 text-center">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="gap-6 md:flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="coffeeName"
                type="text"
                className="grow"
                placeholder="Coffee Name"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="availableQuantity"
                type="text"
                className="grow"
                placeholder="Available Quantity"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="gap-6 md:flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="supplierName"
                type="text"
                className="grow"
                placeholder="Supplier Name"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="taste"
                type="text"
                className="grow"
                placeholder="Taste"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="gap-6 md:flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="category"
                type="text"
                className="grow"
                placeholder="Category"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="details"
                type="text"
                className="grow"
                placeholder="Details"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="photoUrl"
                type="text"
                className="grow"
                placeholder="Photo URL"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-primary my-6 w-full">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
