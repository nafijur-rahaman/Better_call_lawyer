import React from 'react';
const questions = [
  {
    title: '1. What is `useState` and how does it work in React?',
    answer: `The \`useState\` hook allows you to add state to functional components. It returns a state variable and a function to update it. When you call the update function, the component re-renders with the new state value.`
  },
  {
    title: '2. What is the purpose of `useEffect` in React?',
    answer: `\`useEffect\` lets you perform side effects in function components such as fetching data, setting up subscriptions, or manually changing the DOM. It runs after every render by default, but you can control when it runs using the dependency array.`
  },
  {
    title: '3. What is a custom hook in React and when should you use one?',
    answer: `A custom hook is a JavaScript function whose name starts with \`use\` and that can call other hooks. You use custom hooks to extract and reuse component logic across multiple components, improving code readability and maintainability.`
  },
  {
    title: '4. Difference between controlled and uncontrolled components. Which one is better?',
    answer: `Controlled components have their form data controlled by React via state, while uncontrolled components store form data in the DOM. Controlled components are generally preferred because they provide better control and validation.`
  },
  {
    title: '5. Tell us something about `useFormStatus()` in React.',
    answer: `\`useFormStatus()\` is a React hook available in the \`react-dom\` package that helps you get the status of a form submission. It tells you if the form is pending, has succeeded, or failed — useful for disabling buttons or showing loaders.`
  }
];
const Blogs = () => {
    return (
<div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">React Interview Questions Explained</h1>
        <div className="space-y-8">
          {questions.map((q, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-black mb-3">{q.title}</h2>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Blogs;