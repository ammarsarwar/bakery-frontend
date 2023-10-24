import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"; // Make sure to import useState and useEffect

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Is Authenticated:", isAuthenticated);
    // Once the component has mounted, we know the client-side logic has executed.
    setIsLoading(false);
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    router.push("/login"); // Redirect to login page after logout
  };

  if (isLoading) {
    return <div>Loading...</div>; // or some placeholder component
  }

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div className="flex flex-row gap-7">
          <button onClick={() => router.push("/login")}>Login</button>
          <button onClick={() => router.push("/register")}>Register</button>
        </div>
      )}

      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-xl font-semibold">Your Bakery Name</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
