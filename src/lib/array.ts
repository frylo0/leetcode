export function genArray(length: number, minValue?: number, maxValue?: number): number[] {
	minValue ??= 0;
	maxValue ??= length;

	const array = Array.from({ length }) as number[];

	for (let i = 0; i < length; i++) {
		array[i] = rand(minValue, maxValue);
	}

	return array;
}

export function rand(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
