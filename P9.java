public class P9 {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return  false;
        }

        return true;
    }

    public static void main(String[] args) {
        P9 problem9 = new P9();
        boolean palindrome = problem9.isPalindrome(10);
        System.out.println(palindrome);
    }
}
