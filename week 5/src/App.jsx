
import SearchBox from './components/day 1/SearchBox'
import Parent from './components/day 1/Parent'
import SignupForm from './components/day 1/SignupForm'
import RegistrationForm from './components/day 4 and 5/RegistrationForm'
import TaskModal from './components/day 2 and 3/TaskModal'
import CreateUserForm from './components/practicle/CreateUserForm'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-10">
      <div>
        <h1 className='text-gray-800 text-2xl font-bold py-6 '> Day 1 progress</h1>
        <h2 className="font-bold mb-2">Debounce Search</h2>
        <SearchBox />
      </div>

      <div>
        <h2 className="font-bold mb-2">Lifting State Up</h2>
        <Parent />
      </div>

      <div>
        <h2 className="font-bold mb-2">Signup Form</h2>
        <SignupForm />
      </div>
      <div>
        <h1 className='text-gray-800 text-2xl font-bold py-6'>Day 2 and 3 progress </h1>
        <TaskModal />
      </div>
      <div>
        
        <RegistrationForm />
      </div>
      <div>
        <h1 className='text-gray-800 text-2xl font-bold py-6 '>week 5 prcticle cover all topic</h1>
        <CreateUserForm />
      </div>

    </div>
  )
}

export default App