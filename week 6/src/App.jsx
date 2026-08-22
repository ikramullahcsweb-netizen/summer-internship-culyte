import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QueryList from './components/day 1/QueryList';
import CreateUserForm from './components/day 2/CreateUserForm';
import { UserCrud } from './components/day 3/UserCrud';



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Summer Internship — Week 6
          </h1>

          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Day 1 progress TanStack Query</h2>
          <QueryList />

          <h2 className="text-2xl font-bold text-center text-gray-900 mt-10 mb-6">Day 2 progress — useMutation</h2>
          <CreateUserForm />

          <h2 className="text-2xl font-bold text-center text-gray-900 mt-10 mb-6">Day 3 progress — User CRUD</h2>
          <UserCrud />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;