<h1>02-code-tools-context</h1>

Author: Richard Montgomery

Github: montgomeryrd

---

<h2>Answers to Lab Questions</h2>

1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

The two stages of code are CREATIIION and EXECUTIIION! Creation stage -> Execution stage...

-----------------

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

So... line 3... the variable foo is declared and has global scope. It is created the global execution context object and is initialized with an undefined value.

Line 5 has a function declaration and stores the function as a property that points to its location.

I'm not sure anything else happens here in the creation phase.

I guess uh... also... in the creation phase, it would also determine the value of contextual this... but we don't have that here.

-----------------

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

Line 3, as it executes... it updates foo's value to 'bar'.

Line 5 is a function declaration and does nothing.

Line 16, the function bar is called and it points to line 5 and starts the creation phase in the execution context of the function bar. The variable foo is added as a property initialized with an undefined value.

Line 8 has a function declaration and stores the function as a property that points to its location.

Then it enters the execution phase and foo's value is updated to 'baz'.

Line 13 calls the function baz and it goes into another creation phase for the execution context of baz.

Since there are no declarations inside of the function baz, I believe it goes right into the execution phase. foo is being passed as the argument with the value 'baz' and that value is changed to 'bam', and a variable bam is updated with the string value 'yay'.

Line 17 calls foo in the global execution context, which is 'bar'.

Line 18 calls bam whose value is still 'yay' because it isnt declared anywhere else up the chain.

Line 19 throws a reference error because the function baz does not have global scope. It must be called inside the function bar.

-----------------

4. During the second stage of execution how many scopes have been registered by the engine?

Two, I think...

Which segments of the code do they belong to?

The global scope and the scope of bar.

Please identify any variables/refs and which scope each belongs to?

The variable, foo, and the function, bar, are declared globally.

Another variable, foo, and the function, baz, are declared in the scope of the function, bar.

-----------------

5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

'baz'...invoking the function, baz, ends the execution phase of the function, bar... the creation phase for baz happens, then in the execution phase, 'baz' is then passed as the argument in baz. I really hate these names. bam is assigned to the foo in the scope of baz.

-----------------

6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

I felt pretty confident that bam isn't touched in the first execution stage. I'm starting to think I learned this stuff incorrectly. My understanding is that the first execution stage happens after the creation phase on the global execution context object.

-----------------

7. For each line, 16 through 19, what is the return value for each?

undefined
'bar'
'yay'
reference error

---

<h2>Lab Assignment</h2>

![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation


## Feature Tasks
#### Scope and Context
Given the code linked [HERE](https://gist.github.com/sjschmidt44/556d31146a2b1ff3be84820e5fc06959), answer the set of questions below. Please copy the questions to your lab directory in a file called `answers.md`.



#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

7. For each line, 16 through 19, what is the return value for each?


