import { Link } from 'react-router-dom'

function NotFound() {
  // Update page title
  document.title = 'Page Not Found | Clanza In Hostel'
  
  return (
    <div className="flex items-center justify-center py-32 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound