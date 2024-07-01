 class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode(int x) { val = x; }
 }
 
public class P236 {
  public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) {
      return root;
    } 

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);

    if (left == null && right == null) {
      return null
    }

    if (left == null) {
      return right;
    }

    if (right == null) {
      return left;
    }

    return root;
  }

  public static void main(String args) {
    System.out(2122);
  }
}