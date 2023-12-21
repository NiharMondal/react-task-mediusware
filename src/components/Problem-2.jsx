import React, { useEffect, useState } from "react";
import AllContacts from "./modals/AllCounrtyModal";
import UsContacts from "./modals/UsCounrtyModal";

const Problem2 = () => {
	const [allCountryModal, setAllCountryModal] = useState(false);
	const [usCountryModal, setUsCountryModal] = useState(false);

	const handleClose = () => {
		setUsCountryModal(false);
		setAllCountryModal(false);
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h4 className="text-center text-uppercase mb-5">Problem-2</h4>

				<div className="d-flex justify-content-center gap-3">
					<button
						className="btn btn-lg btn-outline-primary"
						type="button"
						data-toggle="modal"
						data-target="#exampleModal"
						onClick={() => {
							setAllCountryModal(true);
							setUsCountryModal(false);
						}}
					>
						All Contacts
					</button>
					<AllContacts
						allCountryModal={allCountryModal}
						handleClose={handleClose}
						openUsContacts={() => {
							setAllCountryModal(false);
							setUsCountryModal(true);
						}}
						openAllContacts={() => {
							setAllCountryModal(true);
							setUsCountryModal(false);
						}}
					/>
					<button
						className="btn btn-lg btn-outline-warning"
						type="button"
						data-toggle="modal"
						data-target="#usModal"
						onClick={() => {
							setAllCountryModal(false);
							setUsCountryModal(true);
						}}
					>
						US Contacts
					</button>
					<UsContacts
						usCountryModal={usCountryModal}
						handleClose={handleClose}
						openAllContacts={() => {
							setAllCountryModal(true);
							setUsCountryModal(false);
						}}
						openUsContacts={() => {
							setAllCountryModal(false);
							setUsCountryModal(true);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Problem2;
