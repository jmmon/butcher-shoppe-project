const splitAnimalInfo = (name, { id, animal }) => {
	const animalInfo = `${animal && animal}_${id && id}`;
	name = `${animalInfo}.${name}`;
	return name;
};
export default splitAnimalInfo;
