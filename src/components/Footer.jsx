import React from "react";

function Footer() {
  return (
    <div className=" text-white bg-black">
      <div className="px-5 py-5 lg:px-16 lg:pt-10 lg:pb-5 grid lg:grid-flow-col sm:grid-cols-1">
        <div>
          <div>
            <h1 className="font-bold text-3xl">Wallmax</h1>
          </div>
          <div className="py-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-2 items-center py-1">
            <h1 className="font-bold capitalize">phone</h1>
            <a>02107</a>
          </div>
          <div className="flex gap-2 items-center py-1">
            <h1 className="font-bold capitalize">Email</h1>
            <a>wallmax@gmail.com</a>
          </div>
          <div className="py-2 footer footer-start">
            <nav>
              <div className="grid grid-flow-col gap-2">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <div className="flex flex-col  ">
            <h1 className="font-bold text-2xl">Newsletter</h1>
            <p className="font-medium py-2">
              enter your email to receive updates
            </p>
            <input
              type="email"
              placeholder="EMAIL"
              className="outline px-2 py-2 mt-2 text-black"
            />
            <button className="btn bg-red-500 text-white my-2 w-28">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center py-5 ">
        <hr className="bg-gray-700 border  w-full" />
        <aside className="mt-5">
          <p>Copyright © {new Date().getFullYear()} - Wallmax</p>
        </aside>
      </div>
    </div>
  );
}

export default Footer;
