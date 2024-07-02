// isomorphic strings
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const m1 = {};
  const m2 = {};

  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];
    if (
      (m1[sLetter] && m1[sLetter] !== tLetter) ||
      (m2[tLetter] && m2[tLetter] !== sLetter)
    ) {
      return false;
    }

    m1[sLetter] = tLetter;
    m2[tLetter] = sLetter;
  }

  return true;
};

let s, t;

(s = "egg"), (t = "add");
(s = "foo"), (t = "bar");
// (s = "paper"), (t = "title");
(s = "badc"), (t = "baba");

const ret = isIsomorphic(s, t);

console.log(ret);
