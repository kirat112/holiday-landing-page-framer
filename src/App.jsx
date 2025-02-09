import houseImage from "./assets/house.jpg";
import "./App.css";
import { motion } from "motion/react";

const stats = [
  { value: "115k+", label: "Capital Raised", delay: 1.0 },
  { value: "70k+", label: "Happy Customers", delay: 1.1 },
  { value: "47k+", label: "Property Options", delay: 1.2 },
];

function App() {
  return (
    <div className="h-screen w-screen relative overflow-hidden px-20 py-5">
      {/* Bg image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        src={houseImage}
        alt="background"
        className="w-full h-full absolute z-0 inset-0 object-center object-cover"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-transparent relative z-10 border-[20px] border-white rounded-2xl w-full h-full flex"
      >
        {/* Main content */}
        <div className="w-1/2 h-full flex flex-col bg-white px-5 py-5 pr-10 overflow-hidden">
          {/* Top cont */}
          <div className="w-full flex">
            {/* Heading cont */}
            <div className="w-fit flex flex-col mr-2 tracking-tight font-[500] text-6xl">
              <h2 className="h-20 flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                >
                  Reserve Your
                </motion.span>
              </h2>
              <h2 className="h-20 flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                >
                  Ideal Holiday
                </motion.span>
              </h2>
            </div>
            {/* Profile images Cont */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 w-[110px] h-[100px] flex-wrap m-8"
            >
              <div className="h-16 w-16 rounded-full">
                <img
                  src="https://images.pexels.com/photos/7821915/pexels-photo-7821915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile 1"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="h-9 w-9 rounded-full">
                <img
                  src="https://images.pexels.com/photos/1129615/pexels-photo-1129615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile 2"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="h-14 w-14 rounded-full">
                <img
                  src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile 3"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex my-5 gap-5 items-center"
          >
            <p className="text-nowrap text-sm font-bold">
              Let&apos;s get aquainted !
            </p>
            <div className="h-[1px] w-full bg-black/10" />
          </motion.div>

          {/* Description */}
          <div className="flex w-full gap-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xs font-black"
            >
              05
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-sm leading-[1.3]"
            >
              We specialize in curating exceptional villa rentals, providing an
              unparalleled level of comfort, privacy, and convenience for your
              dream vacation.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="h-10 px-14 flex justify-center items-center gap-2 rounded-full text-white bg-black text-sm font-light"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-up-right"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </motion.button>
          </div>

          {/* Stats */}
          <div className="flex w-full justify-evenly items-center my-5">
            {stats.map((stat, index) => (
              <div key={index} className="flex gap-x-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="flex gap-0 flex-col"
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-sm text-black/80">{stat.label}</span>
                </motion.div>
                {index < 2 && <div className="h-7 w-[2px] bg-black/20" />}
              </div>
            ))}
          </div>

          {/* Property Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center items-center w-4/5 h-56 rounded-3xl mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1568605115459-4b731184f961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="House Image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-1/2 h-full relative flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0" />
          {/* Location Ticket */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="relative z-10 flex text-sm bg-white w-56 font-medium leading-[1.2] border-[10px] border-white rounded-2xl mt-5 ms-5"
          >
            <div>
              <p>Melbourne VIC, Australia</p>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black text-white mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
              </div>
            </div>
            <img
              src={houseImage}
              alt="Location Thumbnail"
              className="w-24 h-20 object-cover rounded-2xl"
            />
          </motion.div>

          {/* Location Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-white/70 text-sm px-5 mt-auto leading-relaxed z-10 w-1/2"
          >
            Enjoy your luxurious Melbourne vacation in a villa with breathtaking
            city views and easy access to the vibrant city life and culinary
            delights.
          </motion.p>

          {/* Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="z-10 relative bg-[#E9BA6C] text-black my-5 ms-5 px-10 h-10 rounded-full flex items-center justify-center font-medium text-sm w-fit"
          >
            Get Your Room Today!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
