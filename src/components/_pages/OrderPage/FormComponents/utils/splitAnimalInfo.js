const splitAnimalInfo = (name, { id, animal }) => {
	const animalInfo = (`${animal && animal}.${id && id}`);
	name = `${animalInfo}.${name}`;
	// name = id ? `${id}_${name}` : name; // prepend animal number (id)
	// name = animal ? `${animal}_${name}` : name; // prepend animalType
	return name;
};
export default splitAnimalInfo;
