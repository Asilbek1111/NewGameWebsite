import Link from "next/link";



export default function Posts() {
  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Bodoni+Moda:opsz@6..96&family=Poppins:wght@300&family=Sail&display=swap"
          rel="stylesheet"
        />
      </div>

      <div className="web">
        <div className="web-cont font-audiowide">
          {/* Navbar */}
          <div className="navbar">
            <div className="navbar-container flex items-center py-5 px-16 2xl:justify-between tel:justify-center">
              <div className="logo 2xl:w-[15rem] lg:w-[13rem]">
                <img src="assets/svg/image1.png" alt="" />
              </div>
              <img
                src="assets/svg/menu.png"
                alt=""
                className="2xl:hidden tel:block absolute right-10"
              />
              <ul className=" py-4 px-4 2xl:flex tel:hidden">
                <li className="3xl:mr-8 px-3 py-1 rounded 3xl:text-xl text-white  bg-primary">
                  <Link href="#">Home</Link>
                </li>

                <li className="3xl:mr-8 px-3 py-1 rounded 2xl:text-xl">
                  <Link href="#">Products</Link>
                </li>
                <li className="3xl:mr-8 px-3 py-1 rounded 2xl:text-xl">
                  <Link href="#">Design</Link>
                </li>
                <li className="3xl:mr-8 px-3 py-1 rounded 2xl:text-xl">
                  <Link href="#">Services</Link>
                </li>
                <li className="3xl:mr-8 px-3 py-1 rounded 2xl:text-xl">
                  <Link href="#">Gallery</Link>
                </li>
                <li className="3xl:mr-8 px-3 py-1 rounded 2xl:text-xl">
                  <Link href="#">About us</Link>
                </li>
                <li className="3xl:mr-8 px-3 py-1 rounded 2xl:text-xl">
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
              <div className="others 2xl:flex tel:hidden">
                <div className="others-cont flex">
                  <div className="search-cont relative ">
                    <input
                      type="text"
                      className="border-[2px] border-primary mr-4 outline-none h-full rounded w-[10rem]"
                    />
                    <div className="bg-primary px-2 py-1 w-fit absolute rounded top-[2px] right-[17px]">
                      <img
                        src="assets/svg/Vector.png"
                        alt=""
                        className="w-[1.8rem]"
                      />
                    </div>
                  </div>
                  <button className="bg-primary px-6 py-1 rounded text-white mb-1 text-xl">
                    Sign up
                  </button>
                </div>
                <p className="text-[10px] absolute right-16 top-20">
                  Already have an account
                </p>
              </div>
            </div>
          </div>
          {/* Navbar End */}

          {/* Header */}
          <div className="header">
            <div className="header-container">
              <img src="assets/svg/headerimage.png" alt="" className="w-full" />
            </div>
          </div>
          {/* Header End */}
        </div>
      </div>
    </>
  );
}
