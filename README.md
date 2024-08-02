
# Todo application



## Overview

The Todo Application allows users to manage their tasks with features to add, edit, and delete todos. Built with React and Redux, the app uses a JSON file for initial data and supports functionalities for editing tasks and their descriptions, including the display of last updated timestamps.
## Features

- Add Todos: Create new todo items with a text and description.
- Edit Todos: Update the text and description of existing todos.
- Toggle Completion: Mark todos as completed or incomplete.
- Delete Todos: Remove todos from the list.
- View Descriptions: Expand todos to view and edit descriptions.
- Last Updated Timestamp: Display the last updated time for each todo.


## Technology Stack

- React: For building the user interface.
- Redux: For state management.
- Redux Toolkit: For simplified Redux logic.
- JSON File: Used for initial data storage.
## Implementation 
### Redux State Management
- Todo Slice: Manages todos with actions to add, remove, update, and toggle completion. Stores todos with their text, description, completion status, and last updated timestamp.
### Editing and Description
- Editing Mode: Clicking on a todo switches it to edit mode, allowing modifications to the text and description. The background color of the text input and description area changes to indicate edit mode.
- Save and Edit Icons:
  - Edit Icon (✏️): Switches the todo to edit mode.
  - Save Icon (📁): Saves the changes made to the todo and exits edit mode.

- Description:
    - When expanded, the description is editable if the todo is in edit mode. Otherwise, only a portion of the description is visible.
    - Last Updated Time: Displays the timestamp of the last update next to the description.

### Conditional Rendering

- Edit Mode: The text and description fields become editable with a distinct background color when in edit mode.
- Description Visibility: The full description is visible and editable when the todo is expanded or in edit mode.
## Installation

### Steps
#### 1. Clone the Repository:

```bash
  git clone https://github.com/your-username/todo-application.git
cd todo-application
```
#### 2. Install Dependencies:

```bash
npm install
```

#### 3. Start the Development Server:

```bash
npm start
```
The development server will start, and the application will open in your default web browser.

#### 4. Access the Application:

Open `http://localhost:3000` in your web browser to use the application.
## Additional Notes
- The JSON file provides initial data and is static. For real-world applications, consider implementing a backend for data management.

- The Redux state updates in response to user interactions and reflects immediately in the UI.
## Contributing

Contributions to enhance the application are welcome. Please submit issues or pull requests to the repository.


