import React from "react";
import Collapsible from "react-collapsible";

function LambSection({ id, deleteAnimal }) {
	const animalInfo = { id: id, animal: "lamb" };
	return (
		<Collapsible trigger={`Lamb Cut Sheet #${id}`}>
			<p>Form for lamb goes here!</p>
			<button {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				Delete this lamb (should have confirmation just in case)
			</button>
		</Collapsible>
	);
}

export default LambSection;
