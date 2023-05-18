function takesInput(a: string, b: number = 3): void {
  for (let i: number = 0; i < b; i++) {
    console.log(a);
  }
}

takesInput("Hello", 10);
