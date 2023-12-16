import { Link } from "react-router-dom"; // Make sure to import Link from the correct library

const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-lg dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Made with ❤️ by Shivam.
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © 2023. All Rights Reserved. Design by{" "}
          <Link to="https://www.tailwindawesome.com">tailwindawesome.com</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
//https://www.tailwindawesome.com/resources/porto