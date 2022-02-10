// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblin } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="goblin"><p>Booger</p><img id="goblin-face-1" src="./assets/goblin.png"><p id="goblin-hp-1">1</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin ({ id: 1, name: 'Booger', hp: 1 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
