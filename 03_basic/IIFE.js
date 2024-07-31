// Immediately Invoke Function Expression

(function mobile() {
  console.log("This is a phone");
})();

(() => {
  console.log("This is another phone");
})();


( (phoneName) => {
    console.log(`This is another iPhone ${phoneName}.`)
}) ('X');
