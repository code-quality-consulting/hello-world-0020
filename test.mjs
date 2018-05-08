/*jslint
    node
*/

import makeGreeting from "./index.mjs";
import assert from "assert";

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("Tests passing.");
