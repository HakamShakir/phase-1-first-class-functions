function receivesAFunction(func) {
  return func();
}
function returnsANamedFunction() {
  function hello() {
    console.log("hi");
  }
  return hello;
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("Anonymous!!");
  };
}
