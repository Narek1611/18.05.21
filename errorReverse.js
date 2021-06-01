let reverseString = (s) => {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  }

  console.log(s);
};

reverseString("name");
reverseString(161101);
