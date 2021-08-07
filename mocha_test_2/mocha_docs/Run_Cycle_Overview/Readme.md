( https://mochajs.org/#serial-mode )
RUN CYCLE OVERVIEW
Updated for v8.0.0.

The following is a mid-level outline of Mocha’s “flow of execution” when run in Node.js; the “less important” details have been omitted.

In a browser, test files are loaded by <script> tags, and calling mocha.run() begins at step 9 below.