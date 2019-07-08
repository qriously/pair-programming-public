This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start

Clone this repository and checkout the `master` branch. Navigate to the project folder and execute `npm start` in a terminal.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Where to edit

The first 3 `TODOs` are situated in the `QuestionList.jsx` file, and are all examples of simple array manipulation (push new object, delete from specified position, and replace object in specified position). The three methods the candidate needs to fill in are:
* `handleAddQuestion`
* `handleDeleteQuestion`
* `handleDrop`

The candidates solutions can be verified by eyeing the code, but it may be good to check that the logic is working as intended in the browser too. They may use the correct logic on the incorrect array for example.

## Things to note

The `Question.jsx` file contains the template for an individual question. This includes the code for the drag/drop logic. **It is not necessary for the candidate to edit this**. The only line of code which may be of interest is
the `dropQuestion(dragIndex, hoverIndex)` (currently on line 38), which could temporarily be replaced with a `console.log` for example.
Also, the drag and drop may look a bit alien, but the things to be aware of are the available properties/methods added to the question: `isOver`, `isDragging`, and `drop`.

## Solutions

Sample solutions are on the `solutions` branch.