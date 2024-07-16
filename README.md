# Chat with AI Web Application

## How to Start the Service
1. Clone the repository: `git clone https://github.com/yourusername/chat-app.git`
2. Navigate to the project directory: `cd chat-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser at `http://localhost:3000`

## How to Use the Application
- Type your message in the chat input box and press enter to chat with the AI model.
- Provide feedback on AI responses by hovering over them and clicking thumbs up or thumbs down.
- At the end of the conversation, rate the conversation out of 5 and provide subjective feedback.
- View past conversations and feedback from the conversation history panel.
- Switch between dark and light modes using the toggle button.

## Technical Choices
- **React**: For building the user interface.
- **Material-UI**: For pre-built UI components and consistent styling.
- **localStorage**: For storing conversations and feedback locally.

## Design Choices
- **Material-UI**: Chosen for its extensive component library and ease of use.
- **Dark/Light Mode**: Implemented to enhance user experience.
- **Feedback Overview**: Designed to provide an easy way to view and filter feedback.

## Trade-offs
- Used localStorage for simplicity. For a production app, consider using a backend service.
- Limited testing due to time constraints. More comprehensive tests could be added.
- Focused on core functionality; additional features could be added with more time.

## Deployed Application
- [Live Demo on Vercel](https://your-vercel-link.vercel.app)
