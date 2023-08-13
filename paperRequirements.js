function paperRequirements(book1, book2, book3) {
    const firstBookPageRequired = 100 * book1;
    const secondBookPageRequired = 100 * book2;
    const thirdBookPageRequired = 100 * book3;
    const totalPageRequired = firstBookPageRequired + secondBookPageRequired + thirdBookPageRequired;
    return totalPageRequired;

}
const firstBook = 5;
const secondBook = 8;
const thirdBook = 9;
let totalPage = paperRequirements(firstBook, secondBook, thirdBook);
console.log(totalPage);