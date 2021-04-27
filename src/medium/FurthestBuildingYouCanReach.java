class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        // Create a priority queue with a comparator that makes it behave as a min-heap.
        Queue<Integer> ladderAllocations = new PriorityQueue<>((a, b) -> a - b);
        for (int i = 0; i < heights.length - 1; i++) {
            int climb = heights[i + 1] - heights[i];
            // If this is actually a "jump down", skip it.
            if (climb <= 0) {
                continue;
            }
            // Otherwise, allocate a ladder for this climb.
            ladderAllocations.add(climb);
            // If we haven't gone over the number of ladders, nothing else to do.
            if (ladderAllocations.size() <= ladders) {
                continue;
            }
            // Otherwise, we will need to take a climb out of ladder_allocations
            bricks -= ladderAllocations.remove();
            // If this caused bricks to go negative, we can't get to i + 1
            if (bricks < 0) {
                return i;
            }
        }
        // If we got to here, this means we had enough materials to cover every climb.
        return heights.length - 1;
    }
}