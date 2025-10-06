import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-16">
      <div className="text-gray-600 dark:text-gray-300">
        <p>
          Made with ❤️ 
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="text-orange-600 hover:underline"
          >
           by Rian Syahputra 
          </Link>
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
