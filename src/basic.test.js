test('type of Error', () => {
  try {
    // invalid URL to be thrown
    const url = new URL("something");
  } catch (e) {
    console.log(e instanceof Error); // expect `true`
  }
});