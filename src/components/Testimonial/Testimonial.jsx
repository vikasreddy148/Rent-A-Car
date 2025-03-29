import React from "react";

const testimonialData = [
  {
    name: "Vikas",
    image: "",
    description:
      "I rented a car from DriveEasy for a weekend getaway, and I couldn’t be happier! The booking process was seamless, and the car was spotless. Plus, their customer service team was incredibly helpful. Highly recommend!",
    aosDelay: "0",
  },
  {
    name: "Varun",
    image: "",
    description:
      "As a frequent traveler, I’ve tried various car rental services, but DriveEasy stands out. Their fleet is diverse, and the cars are well-maintained. Whether it’s a business trip or a family vacation, DriveEasy is my go-to choice.",
    aosDelay: "300",
  },
  {
    name: "Thirmal",
    image: "",
    description:
      "DriveEasy’s commitment to safety impressed me. The cars are equipped with the latest features, and their COVID-19 protocols are top-notch. I felt secure throughout my rental period.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Remember, these testimonials are fictional, but we hope to receive
              such positive feedback from our real clients! If you’ve had a
              great experience with DriveEasy, feel free to share your own
              testimonial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
