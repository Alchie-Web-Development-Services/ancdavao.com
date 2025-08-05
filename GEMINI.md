## Gemini Added Memories
- Always use yarn for package management.
- Always run `yarn lint` before running `yarn test`. then fix any linting errors.
- Always run `yarn test` before running `yarn build`. then fix any test errors.


## Standard Instructions for Interacting with Gemini

This document outlines the standard operating procedures and best practices for interacting with the Gemini CLI agent. Adhering to these guidelines will ensure efficient and effective collaboration.

### 1. Tasking the Agent

- **Be Clear and Concise:** Provide clear, unambiguous instructions for the task you want the agent to perform. Avoid vague language.
- **Specify Scope:** Clearly define the scope of the task, including relevant files, directories, or modules.
- **Provide Context:** If the task requires specific knowledge of the codebase or project conventions, provide that context upfront.
- **Break Down Complex Tasks:** For large or complex features, consider breaking them down into smaller, manageable sub-tasks.

### 2. Code Modifications

- **Adhere to Conventions:** The agent is programmed to adhere to existing project conventions (e.g., coding style, naming, file structure). If you have specific conventions, ensure they are present in the codebase or explicitly state them.
- **Testing:** If a task involves code changes, the agent will attempt to run existing tests or create new ones if appropriate. Ensure your project has a robust testing setup.
- **Verification:** The agent will attempt to verify its changes by running build, linting, and type-checking commands. Provide instructions for these commands if they are not standard.

### 3. File System Operations

- **Absolute Paths:** When referring to files or directories, prefer using absolute paths relative to the project root.
- **Critical Commands:** For commands that modify the file system or system state, the agent will explain the command's purpose and potential impact before execution. Review these explanations carefully.

### 4. Interaction and Feedback

- **Concise Responses:** The agent aims for concise responses. If you require more detail or clarification, please ask.
- **Error Handling:** If the agent encounters an error, it will attempt to diagnose and resolve it. You may be asked for further input or clarification.
- **Feedback:** Your feedback is valuable. If you encounter unexpected behavior or have suggestions for improvement, please provide detailed feedback.

### 5. Limitations

- **No Interactive Shell Commands:** The agent cannot directly interact with interactive shell prompts.
- **No Assumptions:** The agent will not make assumptions about libraries, frameworks, or project structure unless explicitly defined or clearly inferable from existing files.

By following these instructions, you can maximize the effectiveness of your interactions with the Gemini CLI agent.
