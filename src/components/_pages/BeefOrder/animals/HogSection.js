import React from "react";
import Collapsible from "react-collapsible";

function HogSection({ id, deleteAnimal }) {
	const animalInfo = { id: id, type: "lamb" };
	return (
		<Collapsible trigger={`Hog Cut Sheet #${id}`}>
			<p>Form for hog goes here!</p>
			<button {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				Delete this hog (should have confirmation just in case)
			</button>
		</Collapsible>
	);
}

export default HogSection;
