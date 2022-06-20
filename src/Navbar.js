import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import pp from "./pp.jpg";
import logo2 from "./logo2.png";

const navigation = [
    { name: "Home", href: "./Home" },
    { name: "Films", href: "./Films" },
    { name: "API", href: "#" },

  ];

function App() {
  return (
    <Popover>
      <div className="">
    <div className=" relative pt-6 px-4 sm:px-6 lg:px-8 ">
      <nav className="relative flex justify-start items-start lg:justify-start" aria-label="Global">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img alt="Workflow" className="w-10 h-10 rounded-full mx-auto" src={pp} />
            </a>
        <div className=" md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-900">
              {item.name}
            </a>
          ))}
          <a href="./Login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </a>
        </div>


      </nav>
    </div>
        </div>
  </Popover>
  );
}
export default App;