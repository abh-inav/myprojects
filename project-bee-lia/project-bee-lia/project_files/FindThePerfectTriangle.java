public class FindThePerfectTriangle {
    public static void main(String[] args){
	int[] a = new int[1005000];
	int[][] good = new int[1005][];
	int mx[] = new int[5005];
	int my[] = new int[5005];
	int segment_sz = 0;

	int Abs(int x)
	 {
    		return (x>0?x:-x);
	}
	int S(int x1, int y1, int x2, int y2, int x3, int y3) {
    		int ans = (x1+x2)*(y1-y2)+(x2+x3)*(y2-y3)+(x3+x1)*(y3-y1);
	    	return Abs(ans);
	}
	public int[] constructTriangle(int area, int perimeter) {
		for (int i = 0; i <= 1000000; i++)
			a[i] = 0;
		for (int i = 1; i <= 1000; i++) {
			a[i*i] = i;
		}
		for (int i = 0; i <= 1000; i++) {
			good[i] = new int[1005];
			for (int j = 0; j <= 1000; j++) {
				good[i][j] = 0;
			}
		}
		for (int i = 0; i <= 1000; i++) {
			for (int j = 0; j <= 1000; j++) {
				int x = i*i + j*j;
				if (x <= 1000000 && a[x] > 0) {
					mx[segment_sz] = i;
					my[segment_sz] = j;
					good[i][j] = good[j][i] = a[x];
					segment_sz++;
				}
			}
		}
		for (int i = 0; i < segment_sz; i++) {
			for (int j = 0; j< segment_sz; j++) { int x1 = mx[i] + mx[j]; int y1 = my[i] + my[j]; int ar = S(0, 0, mx[i], my[i], x1, y1); if (ar > 0 && ar % 2 == 0 && x1 <= 1000 && y1 <= 1000 && good[x1][y1] > 0) {
					int P = good[mx[i]][my[i]] + good[mx[j]][my[j]] + good[x1][y1];
					if (P == perimeter && ar/2 == area) {
						int[] ans = {1, 1, mx[i]+1, my[i]+1, x1+1, y1+1};
						return ans;
					}
				}
				x1 = mx[i] - mx[j];
				y1 = my[i] + my[j];
				ar = S(0, 0, mx[i], my[i], x1, y1);
				if (ar > 0 && ar % 2 == 0 && Abs(x1) <= 1000 && y1 <= 1000 && good[Abs(x1)][y1] > 0) {
					int P = good[mx[i]][my[i]] + good[mx[j]][my[j]] + good[Abs(x1)][y1];
					if (P == perimeter && ar/2 == area) {
						int x = Math.max(1, -x1+1);
						int[] ans = {x, x, mx[i]+x, my[i]+x, x1+x, y1+x};
						return ans;
					}
				}
			}
		}
		int[] ans = {};
		return ans;
	}
	int find_int_dist(int x1, int y1, int x2, int y2) {
		int dist = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1);
		for (int i = 1; i <= 5000; i++) if (i*i == dist) return i; return -1; } boolean in_range(int x) { return (x >= 0 && x <= 3000);
	}
}
}
