
import SearchBox from './components/day 1/SearchBox'
import Parent from './components/day 1/Parent'
import SignupForm from './components/day 1/SignupForm'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-10">
      <div>
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
    </div>
  )
}

export default App