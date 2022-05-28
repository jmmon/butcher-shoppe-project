const splitAnimalInfo = (name, { id, animal }) => {
	const parent = (animal ? `${animal}_` : "") + (id ? `${id}` : "");
	name = `${parent}.${name}`;
	// name = id ? `${id}_${name}` : name; // prepend animal number (id)
	// name = animal ? `${animal}_${name}` : name; // prepend animalType
	return name;
};
export default splitAnimalInfo;
