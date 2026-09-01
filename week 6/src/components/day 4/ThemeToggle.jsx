import useThemeStore from './store/useThemeStore'

function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const isDark = theme === 'dark'

  return (
    <div className=" flex items-center justify-center py-6">
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300
          ${isDark
            ? 'bg-neutral-900 text-neutral-100 border border-neutral-700 hover:bg-neutral-800'
            : 'bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-50'
          }`}
      >
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full text-xs transition-all duration-300
            ${isDark ? 'bg-yellow-400 text-neutral-900' : 'bg-neutral-700 text-white'}`}
        >
          {isDark ? '☀' : '☾'}
        </span>
        {isDark ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
  )
}

export default ThemeToggle