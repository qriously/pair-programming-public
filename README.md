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
