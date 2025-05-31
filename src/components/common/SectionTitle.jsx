function SectionTitle({ title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle