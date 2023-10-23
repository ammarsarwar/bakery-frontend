import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

function Navbar() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login"); // Redirect to login page after logout
  };
  const isAuthPage = ["/login", "/register"].includes(router.pathname);
  return (
    <div>
      {/* Other navbar items */}
      {!isAuthPage && <button onClick={handleLogout}>Logout</button>}

      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-xl font-semibold">Your Bakery Name</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
