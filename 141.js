var hasCycle = function(head) {
    if (!head?.next) {
        return false;
    }

    // 这里必须是head.next，while判断直接跳过
    let fast = head.next;
    let slow = head;

    while(fast !== slow) {
        if (!fast || !fast.next) {
            return false;
        }

        fast = fast.next.next;
        slow = slow.next;
    }

    return true;
};