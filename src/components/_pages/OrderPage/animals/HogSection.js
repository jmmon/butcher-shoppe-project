import React from "react";
import Collapsible from "react-collapsible";
import Button from "../../../Button/Button";

function HogSection({ id, deleteAnimal }) {
	const animalInfo = { id: id, animal: "lamb" };
	return (
		<Collapsible trigger={`Hog Cut Sheet${id === 0 ? "" : ` #${id + 1}`}`}>
			<p>Form for hog goes here!</p>
			<button {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				Delete this hog (should have confirmation just in case)
			</button>
			<Button />
		</Collapsible>
	);
}

export default HogSection;
