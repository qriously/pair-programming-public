This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start

* Clone this repository: <br>
 `$ git clone git@github.com:qriously/interview-exercises.git` - <br>
* Checkout the `master` branch if it is not checked out.
* Navigate to the project folder within a terminal and execute `npm start`.
* Navigate to [http://localhost:3000](http://localhost:3000) within a browser if this doesn't happen automatically.

The page will reload if you make edits.<br>

When first starting the server, there will be lint errors in the terminal - this is expected as some react hook methods aren't actually being used yet.

The questions are already draggable/droppable, but the drop isn't handled, neither is the delete/add question. These are to be added.

To help the candidate understand the context, show that the questions can be dragged, and styles change based on whether the question is being dragged/hovered over.

## Where to edit

The first 3 `TODOs` are situated in the `QuestionList.jsx` file, and are all examples of simple array manipulation (push new object, delete from specified position, and replace object in specified position). The three methods the candidate needs to fill in are:
* `handleAddQuestion`
* `handleDeleteQuestion`
* `handleDrop`

The candidates solutions can be verified by eyeing the code, but it may be good to check that the logic is working as intended in the browser too. They may use the correct logic on the incorrect array for example.

## Things to note

The `Question.jsx` file contains the template for an individual question. This includes the code for the drag/drop logic. **It is not necessary for the candidate to edit this**. The only line of code which may be of interest is
the `dropQuestion(dragIndex, hoverIndex)` (currently on line 40), which could temporarily be replaced with a `console.log` for example.

The drag and drop code may look a bit alien, depending on how familiar the candidate is with react hooks, 
but the things to be aware of are the available properties/methods added to the question: `isOver`, `isDragging`, and `drop`.

## Things to talk about

This drag and drop list is far from nice to look at/interact with, so it may be a good talking point to see if the candidate can suggest any improvements.
For instance, the drop only works when dropping one question on top of another, dropping on an empty space does nothing.
How could they improve that? Some potential improvements are:

* Changing the styling of the Question so there are no gaps
* Create a drag/drop wrapper component around the Question component
* Add a placeholder between each question which expands when hovered over

These are just talking points, it's not important for the candidate to code these up. 

## Solutions

Sample solutions are on the `solutions` branch.