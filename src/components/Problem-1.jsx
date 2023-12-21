import React, { useState } from "react";

const Problem1 = () => {
	const [info, setInfo] = useState({
		title: "",
		status: "",
	});
	const [error, setError] = useState("");
	const [tasks, setTasks] = useState([]);
	const [show, setShow] = useState("all");

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInfo({ ...info, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!info.title || !info.status) {
			setError("Input field can not be empty!");
		} else {
			setTasks([...tasks, info]);
			setError("");
		}
	};

	//  Function to set the category
	const handleCategoryChange = (newCategory) => {
		setShow(newCategory);
	};

	// Function to filter tasks based on the selected category
	const filterTasks = (task) => {
		if (show === "all") {
			return true;
		}
		return task.status === show;
	};
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h4 className="text-center text-uppercase mb-5">Problem-1</h4>
				<div className="col-6 ">
					{error && <p className="text-danger">{error}</p>}
					<form
						className="row gy-2 gx-3 align-items-center mb-4"
						onSubmit={handleSubmit}
					>
						<div className="col-auto">
							<input
								type="text"
								className="form-control"
								placeholder="Title"
								name="title"
								onChange={handleChange}
							/>
						</div>
						<div className="col-auto">
							<input
								type="text"
								className="form-control"
								placeholder="Status"
								name="status"
								onChange={handleChange}
							/>
						</div>
						<div className="col-auto">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="col-8">
					<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
						<li className="nav-item">
							<button
								className={`nav-link ${show === "all" && "active"}`}
								type="button"
								onClick={() => handleCategoryChange("all")}
							>
								All
							</button>
						</li>
						<li className="nav-item">
							<button
								className={`nav-link ${show === "active" && "active"}`}
								type="button"
								onClick={() => handleCategoryChange("active")}
							>
								Active
							</button>
						</li>
						<li className="nav-item">
							<button
								className={`nav-link ${
									show === "completed" && "active"
								}`}
								type="button"
								onClick={() => handleCategoryChange("completed")}
							>
								Completed
							</button>
						</li>
					</ul>
					<div className="tab-content"></div>
					<table className="table table-striped ">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Name</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							{tasks.filter(filterTasks).map((u, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{u.title}</td>
									<td>{u.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Problem1;
