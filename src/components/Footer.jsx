const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm font-mono text-gray-500 border-t border-navy-800">
      <div className="container mx-auto px-6">
        <p className="mb-2">
          Designed & Built by <span className="text-neon-blue">Sheshank Singh</span>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
