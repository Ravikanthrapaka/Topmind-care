import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-3/4 mx-auto border-t mt-20 border-neutral-200 py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img className="h-6" src={logo} alt="Logo" />
            <h2 className="text-lg font-bold text-gray-900">Topmind Care</h2>
          </div>
          <p className="text-sm text-neutral-600">
            Mindfulness for growing minds. © 2025 Mindery Kids.
          </p>
        </div>

        {/* Middle Section */}
        <div className="">
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-purple-600 hover:underline">Instagram</a>
            <a href="#" className="text-purple-600 hover:underline">YouTube</a>
            <a href="#" className="text-purple-600 hover:underline">X</a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Legal</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-purple-600 hover:underline">Privacy</a>
            <a href="#" className="text-purple-600 hover:underline">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
