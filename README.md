# Workshop: Building a Coolculator 🔢

Collaborators: Hou Fai Man

Make sure you’re working in pairs - on a single laptop. You’ll be **pair programming**. Remember, in pair programming, there are two roles - **driver** and **navigator**.

Start by forking this repo...

![fork button](https://readme-pics.s3.amazonaws.com/fork_button.jpg)

Forking creates a copy of this repo in your own GitHub account. Add your partner as a collaborator by going to 'Settings' > 'Collaborators & teams' and entering their GitHub username in the 'Collaborators' box. That means you'll both have access to the repo.

Next, clone down the repo onto the laptop you're working on, change into the directory and run

```shell
npm install
```

This will install the required dependancies, including [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com).

To check everything is working, run the tests with

```shell
npm test
```

You should see something like this:

![Test Ouptut](http://c.danny.is/178dbbaf264f/npmtest.png)

---

For each of the **bold** questions below...

<h3 align="center">
  🗣 Discuss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👩‍💻 Change &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👀 Observe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  🔄 Repeat
</h3>

Once you understand what's going on, **ANSWER THE QUESTION IN THIS README FILE** and make the required changes to the code.

ℹ️ Make sure you commit regularly!

---

## Part 1: Testing `Array`

Look in [`array.test.js`](test/array.test.js). This contains some tests for JavaScript's built-in Array methods.

**What do the existing tests actually test (explain in english)?**
Both of the test cases check if adding an item to an array is successful. 

The first test case will check the original array and see if it contains the new element and the second test case checks for the length of the array. 

**Add a test for the `pop()` method.**
Hint: You'll need _two_ assertions to fully test that it `pop()` works. Explain why you chose these assersions here.

I added two test cases similar to the push method - one test case checks for the new item in the array and the other test case checks the length of the array.

For the first test case, I chose to assert the array because the array should not contain the last item when calling pop() and for the second test case, I chose to assert the array's length because it would make sense that once an item is removed from the array, the array length should decrement.

> 💡 **REMINDER**: Do you need to commit your answers to the questions above?

## Part 2: The Coolculator

Until now, we've been testing JavaScript's in-built functionality, which is kinda pointless - the folks who wrote JavaScript probably already have tests for this stuff. Let's take a look at our own project: the **Coolculator**. This is a class that has a bunch of methods for doing calculator-like stuff.

Read The coolculator class and tests.

**What methods does the Coolculator currently implement?**

The Coolculator currently implements one method - add(), which adds two given numbers together and returns the result.

**Describe how the existing test works**

The existing test case first creates an instance of the Coolculator class and stores it as 'mm' reference. It then calls the add() method and passes the values 2 and 3 as the arguments. The result of the method is then return and stored as 'result' variable. The last statement in the test case asserts the result to equal 5.

**Change a value in the `add()` test so it fails.**
Once you've seen it fail, revert your change so it's green again.

**Change the implementation of `add()` so it always returns `1000`.**
Once you've seen it fail, revert your change so it's green again.

Now let's do some TDD! Uncomment the `multiply()` test.

**What do you expect to happen when you run your tests?**

The multiply() test should fail because it is calling a method of the Coolculator class which we have not implemented yet.

**What actually happened when you ran your tests?**

It threw an exception - "mm.multiply is not a function".

**Add a method to the Coolculator so the test passes green**

**Uncomment the `subtract()` test and write some code to make it green**
Remember the process: Red / Green / Refactor - is there any refactoring you could do to clean up your code?

Part of the test cases I refactor was asserting the result of the function returned directly instead of storing in a variable first.

> 💡 **REMINDER**: Do you need to commit your answers to the questions above?

## Part 3: Extending the Coolculator

Add some more methods to the Coolculator class using the Red/Green/Refactor process. Be sure to write your tests first. Here are some things you could add to your calculator:

| **Function**  |                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| divide        | Takes two numbers and divides the first by the second                                                                                                         |
| highest       | Takes two integers and returns the highest one                                                                                                                |
| lowest        | Takes two integers and returns the lowest one                                                                                                                 |
| double        | Takes a number and doubles it                                                                                                                                 |
| square        | Takes one number and squares it                                                                                                                               |
| raise         | Takes two numbers and raises the first one to the power of the second                                                                                         |
| isNegative    | Takes a number and returns `true` if it's negative and `false` if it's positive                                                                               |
| isPositive    | Takes a number and returns `true` if it's positive and `false` if it's negative                                                                               |
| isCool        | Takes a number and returns true if the number is cool (ie. starts and ends with the same digit). Should return a boolean                                      |
| sum           | Takes an array of numbers and adds them all                                                                                                                   |
| multiplyArray | Takes an array of numbers and multiplies them all                                                                                                             | 
| mean          | Takes an array of numbers and returns the mean (average)                                                                                                      |
| factorial     | Takes a single number and calculates its factorial (this is kinda hard)                                                                                       |
| random        | Takes an integer and returns a random integer between 0 and it. How might we test this? (This requires some _thinking!_, and we'll never have a perfect test) |

> 💡 **REMINDER**: Do you need to commit your new code?

## Part 4 (extension): More Array Tests

⚠️ _Don't attempt this unless you've finished all your other work_

Add some more tests for JavaScript's built-in array methods:

- `indexOf()`
- `join()`
- `shift()`
- `unshift()`
- Any others you can think of!

## Part 5 (super-extension)

⚠️ _Don't attempt this unless you've finished all your other work_

Use TDD to adapt your add method so it takes an **arbitrary number** of integers as arguments, and adds them all together, eg:

```js
add(1, 2) //=> 3
add(1, 2, 7, 10) //=> 20
add(5) //=> 5
```
