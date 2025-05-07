package java;

public abstract class Test {
    public abstract String test();
}

class Test1 extends Test {

    @Override
    public String test() {
        System.out.println("test");
        return "";
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("main");
    }
}