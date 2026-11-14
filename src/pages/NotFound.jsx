import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center px-6 pt-16 text-center">
    <div>
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-2 text-6xl font-bold">Page Not Found</h1>
      <p className="mt-4 text-gray-500">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 font-medium text-white">
        Back Home
      </Link>
    </div>
  </main>
);

export default NotFound;