var lengthOfLastWord = function(s) {
    const reg = /\s/;

    return s.split(reg).pop().length;
};

'dff ff'