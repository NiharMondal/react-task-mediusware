import React, { useState, useEffect } from "react";
import ModalFooter from "./ModalFooter";
export default function UsContacts({
	usCountryModal,
	handleClose,
	openAllContacts,
	openUsContacts,
}) {
	const [usContacts, setUsContacts] = useState([]);

	const [isChecked, setIsChecked] = useState(false);
	const [search, setSearch] = useState("");

	const handleChecked = () => {
		setIsChecked((prev) => !prev);
	};

	const filterCountry = (country) => {
		if (search) return country.phone.includes(search);
		if (!isChecked) {
			return true;
		}
		return country.id % 2 === 0;
	};

	useEffect(() => {
		const fetchCountry = async () => {
			const country = await fetch(
				"https://contact.mediusware.com/api/country-contacts/United%20States/"
			);
			const data = await country.json();

			setUsContacts(data.results);
		};
		fetchCountry();
	}, []);
	return (
		<div
			className={`${usCountryModal ? "modal show fade" : ""}`}
			tabIndex="1"
			role="dialog"
			style={{ display: usCountryModal ? "block " : "none" }}
		>
			<div className="modal-dialog modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">US Country Modal</h5>
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
								placeholder="Search by phone number"
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
								{usContacts
									.filter(filterCountry, search, isChecked)
									.map((c) => (
										<tr key={c.id}>
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
							even="even"
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
