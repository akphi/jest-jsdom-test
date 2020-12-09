const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<body>
  <script>
    try {
      // invalid URL to be thrown
      const url = new URL("something");
    } catch (e) {
      console.log(e instanceof Error); // expect true
    }
  </script>
</body>`, { runScripts: "dangerously" });