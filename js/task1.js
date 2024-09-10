function slugify(title) {

    return title
        .toLowerCase() // convert to lowercase
        .split(' ') // array of words
        .join('-'); // adding "-" between words
}

console.log(slugify("These are the results of Task 1")); // :)

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"