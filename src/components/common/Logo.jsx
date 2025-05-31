function Logo({ color = 'dark' }) {
  return (
    <div className="flex items-center">
      <div 
        className={`font-heading font-bold text-2xl ${
          color === 'light' ? 'text-white' : 'text-neutral-900'
        }`}
      >
        Clanza <span className="text-primary">In</span>
      </div>
    </div>
  )
}

export default Logo