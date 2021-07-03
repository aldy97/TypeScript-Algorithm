// Insights: left_max is the highest height to the left including itself, and the same goes for right_max
// Time: O(n)
// Space: O(n)
function trap(height: number[]): number {
	if (!height) return 0;

	const size = height.length;
	let ans = 0;

	const left_max = new Array(size).fill(0);
	left_max[0] = height[0];

	const right_max = new Array(size).fill(0);
	right_max[size - 1] = height[size - 1];

	// left boundry can't trap water
	for (let i = 1; i < height.length; i++) {
		left_max[i] = Math.max(height[i], left_max[i - 1]);
	}

	// right boundry can't either
	for (let i = height.length - 2; i >= 0; i--) {
		right_max[i] = Math.max(height[i], right_max[i + 1]);
	}

	for (let i = 0; i < size - 1; i++) {
		// min of Math.min(left_max[i], right_max[i]) is height[i], so it has to be a non-negative value added to ans
		ans += Math.min(left_max[i], right_max[i]) - height[i];
	}

	return ans;
}
