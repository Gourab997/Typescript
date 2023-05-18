function checkPerameter(a: unknown): void {
  if (typeof a === "string") {
    console.log(a);
  } else {
    console.error("The input is not a string");
  }
}

checkPerameter("asda");
