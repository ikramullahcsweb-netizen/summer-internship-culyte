import React from 'react';
import QueryList from './components/day 1/QueryList';
import CreateUserForm from './components/day 2/CreateUserForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Summer Internship — Week 6
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Day 1 progress TanStack Query</h2>
      </h1>
      <QueryList />

      <h2 className="text-2xl font-bold text-center text-gray-900 mt-10 mb-6">Day 2 progress — useMutation</h2>
      <CreateUserForm />
    </div>
  );
}

export default App;