const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-6 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Logo */}
          <a href="/" className="text-lg font-semibold text-blue-600">
            TrafficControl
          </a>
          {/* Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a
              href="#privacy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm mt-6 text-gray-500">
          © {new Date().getFullYear()} TrafficControl. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
