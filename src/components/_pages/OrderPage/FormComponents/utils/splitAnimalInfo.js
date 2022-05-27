const splitAnimalInfo = (name, { id, animal }) => {
	name = id ? `${id}_${name}` : name; // prepend animal number (id)
	name = animal ? `${animal}_${name}` : name; // prepend animalType
	return name;
};
export default splitAnimalInfo;
