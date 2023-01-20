
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
          <div className="navbar">
            <div className="navbar-container flex items-center py-5 px-16 justify-between">
              <div className="logo w-[15rem]">
                <img src="assets/svg/image1.png" alt="" />
              </div>
              <ul className="flex py-4 px-4">
                <li className="mr-8 px-3 py-1 rounded text-lg text-white  bg-primary">
                  <Link href="#">Home</Link>
                </li>

                <li className="mr-8 px-3 py-1 rounded text-xl">
                  <Link href="#">Products</Link>
                </li>
                <li className="mr-8 px-3 py-1 rounded text-xl">
                  <Link href="#">Design</Link>
                </li>
                <li className="mr-8 px-3 py-1 rounded text-xl">
                  <Link href="#">Services</Link>
                </li>
                <li className="mr-8 px-3 py-1 rounded text-xl">
                  <Link href="#">Gallery</Link>
                </li>
                <li className="mr-8 px-3 py-1 rounded text-xl">
                  <Link href="#">About us</Link>
                </li>
                <li className="mr-8 px-3 py-1 rounded text-xl">
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
              <div className="others">
                <div className="others-cont flex">
                  <div className="search-cont relative ">
                    <input
                      type="text"
                      className="border-[2px] border-primary mr-4 outline-none h-full rounded"
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
                <p className="text-[10px] absolute right-16">
                  Already have an account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
