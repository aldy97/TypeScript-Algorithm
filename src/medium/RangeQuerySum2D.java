// Insights: dp, where dp[m][n] is the sum in the square sumRegion(0, 0, m, n)
// Time: O(m * n), where m is rows and n is cols
// Space: O(1)
class NumMatrix {
    private int[][] dp;

    public NumMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        if (rows == 0 || cols == 0) return;
        this.dp = new int[rows + 1][cols + 1];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                this.dp[i + 1][j + 1] = this.dp[i + 1][j] + this.dp[i][j + 1] + matrix[i][j] - this.dp[i][j];
            }
        }
    }
    
    // add dp[row1][col1] at the end because it's reduced twice
    public int sumRegion(int row1, int col1, int row2, int col2) {
        return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
    }
}