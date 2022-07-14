const getSplitAnimalInfo = (name, { id, animal }) => {
	const stringId = `${animal && animal}_${id && id}`;

	name = `animals.${stringId}.${name}`;

	return name;
};
export default getSplitAnimalInfo;
