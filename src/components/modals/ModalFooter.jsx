import React from "react";

const ModalFooter = ({
	isChecked,
	handleChecked,
	openAllContacts,
	openUsContacts,
	handleClose,
	even,
}) => {
	return (
		<React.Fragment>
			<div className="">
				<input
					id={even ? "usEven" : "even"}
					type="checkbox"
					aria-label="Checkbox for following text input"
					checked={isChecked}
					onChange={handleChecked}
				/>

				<label
					aria-label="Text input with checkbox"
					htmlFor={even ? "usEven" : "even"}
				>
					Only Even
				</label>
			</div>

			<button
				type="button"
				className="btn  btn-outline-primary"
				onClick={openAllContacts}
			>
				All Country
			</button>
			<button
				type="button"
				className="btn btn-outline-warning"
				onClick={openUsContacts}
			>
				US Country
			</button>
			<button
				type="button"
				className="btn btn-outline-danger"
				onClick={handleClose}
			>
				Close
			</button>
		</React.Fragment>
	);
};

export default ModalFooter;
