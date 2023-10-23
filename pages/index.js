function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      {/* <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-xl font-semibold">Your Bakery Name</h1>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="container mx-auto p-4 my-10">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold">Welcome to Our Bakery!</h2>
          <p className="text-lg">
            Experience the delight of handcrafted pastries, bread, and more.
          </p>
          <div className="pt-6">
            <a
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
            >
              Explore our products
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* Freshly Baked */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold">Freshly Baked</h3>
            <p>All our items are baked daily using the finest ingredients.</p>
          </div>

          {/* Custom Orders */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold">Custom Orders</h3>
            <p>Have a special occasion? Get in touch for custom orders.</p>
          </div>

          {/* Visit Us */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold">Visit Us</h3>
            <p>
              Drop by our store at [address] and experience the aroma of fresh
              baking.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white p-4 shadow-t">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © Your Bakery Name. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}

export default HomePage;
