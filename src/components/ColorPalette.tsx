export default function ColorPalette() {
  return (
    <div className="min-h-screen bg-background-secondary p-8 font-sans text-text-primary space-y-8">
      {/* Header */}
      <header className="bg-background-primary text-text-primary p-6 rounded-lg shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-accent text-white px-4 py-2 rounded-lg shadow hover:bg-accent-hover">
          New Item
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-background-tertiary p-6 rounded-lg shadow flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-text-secondary text-lg">1,245</p>
        </div>
        <div className="bg-background-tertiary p-6 rounded-lg shadow flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Sales</h2>
          <p className="text-text-secondary text-lg">$32,400</p>
        </div>
        <div className="bg-background-tertiary p-6 rounded-lg shadow flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Errors</h2>
          <p className="text-danger text-lg">23</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-background-primary p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-bold mb-2">Add New User</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-background-secondary text-text-primary border border-text-secondary focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-background-secondary text-text-primary border border-text-secondary focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-lg shadow hover:bg-accent-hover"
          >
            Add User
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-background-primary text-text-secondary p-4 rounded-lg text-center shadow">
        &copy; 2026 My Dashboard
      </footer>
    </div>
  );
}
