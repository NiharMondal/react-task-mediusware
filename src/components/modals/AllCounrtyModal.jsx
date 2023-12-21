import { useState, useEffect } from "react";
import ModalFooter from "./ModalFooter";

export default function AllContacts({
	allCountryModal,
	handleClose,
	openUsContacts,
	openAllContacts,
}) {
	const [allContacts, setAllContacts] = useState([]);

	const [isChecked, setIsChecked] = useState(false);

	const handleChecked = () => {
		setIsChecked((prev) => !prev);
	};
	const [search, setSearch] = useState("");

	const filterCountry = (data) => {
		if (search)
			return data.country.name.toLowerCase().includes(search.toLowerCase());
		if (!isChecked) {
			return true;
		}
		return data.id % 2 === 0;
	};

	const fetchCountry = async () => {
		const country = await fetch(
			`https://contact.mediusware.com/api/contacts/`
		);
		const data = await country.json();

		setAllContacts(data.results);
	};
	useEffect(() => {
		fetchCountry();
	}, []);

	return (
		<div
			className={`${allCountryModal ? "modal show fade" : ""}`}
			tabIndex="-1"
			role="dialog"
			style={{ display: allCountryModal ? "block" : "none" }}
		>
			<div className="modal-dialog modal-dialog-scrollable">
				<div className="modal-content" style={{ height: "600px" }}>
					<div className="modal-header">
						<h5 className="modal-title">All Country Modal</h5>
						<button
							type="button"
							className="btn-close"
							onClick={handleClose}
						></button>
					</div>
					<div className="modal-body">
						{/* Your modal content goes here */}
						<div>
							<input
								type="text"
								className="w-10 form-control"
								placeholder="Search by country name"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
						<table className="table table-striped ">
							<thead>
								<tr>
									<th scope="col">ID</th>
									<th scope="col">Phone</th>
									<th scope="col">Country</th>
								</tr>
							</thead>
							<tbody>
								{allContacts.filter(filterCountry).map((c, index) => (
									<tr key={index}>
										<td>{c.id}</td>
										<td>{c.phone}</td>
										<td>{c.country.name}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="modal-footer">
						<ModalFooter
							handleClose={handleClose}
							isChecked={isChecked}
							handleChecked={handleChecked}
							openAllContacts={openAllContacts}
							openUsContacts={openUsContacts}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
