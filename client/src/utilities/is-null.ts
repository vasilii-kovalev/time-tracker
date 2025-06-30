const isNull = (
	value: unknown,
): value is null => {
	return value === null;
};

export {
	isNull,
};
