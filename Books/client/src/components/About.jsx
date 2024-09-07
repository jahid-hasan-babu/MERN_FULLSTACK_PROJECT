import React from "react";
import FavBookimg from "../assets/favoritebook.jpg";

const About = () => {
  return (
    <div className="px-4 pt-24 lg:px-24 bg-gradient-to-r from-teal-100 to-teal-300 py-12 text-blue-600 sm:px-6 ">
      <section className=" py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold  sm:text-4xl">About Us</h2>
            <p className="mt-4 text-lg ">
              Welcome to [Your Bookshop Name]! We are passionate about books and
              committed to bringing you a curated selection of titles that will
              ignite your imagination and feed your curiosity. Whether you’re
              looking for the latest bestseller or a hidden gem, our shelves are
              stocked with a wide range of genres to satisfy every reader.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="mt-10 grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-12">
            <div className="text-center">
              <div className="text-6xl ">
                <i className="fas fa-book"></i>
              </div>
              <h3 className="text-xl font-bold  mt-4">Our Mission</h3>
              <p className="mt-2 ">
                Our mission is to foster a love of reading and provide a
                welcoming space for book lovers of all kinds. We believe in the
                power of books to transform lives and are dedicated to offering
                exceptional service and a diverse selection.
              </p>
            </div>

            {/* Meet the Team Section */}
            <div className="text-center">
              <div className="text-6xl">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold  mt-4">Meet the Team</h3>
              <p className="mt-2 ">
                Our team is composed of enthusiastic book lovers who are always
                ready to help you find your next great read. With years of
                experience and a deep knowledge of literature, we’re here to
                offer personalized recommendations and support.
              </p>
            </div>

            {/* Our Values Section */}
            <div className="text-center">
              <div className="text-6xl ">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold  mt-4">Our Values</h3>
              <p className="mt-2 ">
                We value community, diversity, and creativity. Our bookshop is a
                place where everyone is welcome, where ideas are celebrated, and
                where we aim to inspire readers of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className=" py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold  sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg ">
              Founded in [Year], [Your Bookshop Name] has grown from a small
              local shop to a well-loved destination for book enthusiasts from
              all over. From humble beginnings, we've expanded our offerings to
              include events, readings, and community programs that bring people
              together over a shared love of literature.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center space-y-8 lg:flex-row lg:justify-center lg:space-x-12">
            <img
              src={FavBookimg}
              alt="Bookshop Image"
              className="w-full h-auto max-w-lg rounded-lg shadow-lg"
            />
            <div className="text-lg  max-w-lg">
              <p>
                Our journey began with a small collection of handpicked titles,
                and over the years, we've built a reputation for providing a
                unique and carefully curated selection. We pride ourselves on
                being more than just a bookstore — we are a community space,
                where readers and writers come together to share ideas, explore
                new genres, and discover hidden gems.
              </p>
              <p className="mt-4">
                Whether you're a lifelong reader or just starting your literary
                journey, we invite you to join us in celebrating the joy of
                books. Our passion for storytelling is at the heart of
                everything we do, and we are committed to creating an
                unforgettable experience for every customer who walks through
                our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold  sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg ">
            Whether you're looking for your next favorite book or want to attend
            one of our upcoming events, we invite you to explore all that [Your
            Bookshop Name] has to offer. Connect with fellow readers, discover
            new stories, and become a part of our vibrant community!
          </p>
          <div className="mt-8">
            <button className="bg-blue-700 px-6 py-2 rounded text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
