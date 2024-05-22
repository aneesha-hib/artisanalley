import Link from "next/link";
import { link } from "./lib/links";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          {/* Slide 1  */}
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Welcome to <span>ArtisanAlley</span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Welcome to ArtisanAlley, a vibrant online community where
                artists from around the globe come together to showcase their
                work, connect with like-minded creatives, and explore the
                endless possibilities of the artistic world. Whether you're a
                painter, sculptor, photographer, or digital artist, ArtisanAlley
                is your platform to shine, share, and grow.
              </p>
              <Link
                href={link.ABOUT}
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Read More
              </Link>
            </div>
          </div>
          {/* Slide 2  */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Our Mission
              </h2>
              <p className="animate__animated animate__fadeInUp">
                At ArtisanAlley, we believe in the transformative power of art.
                Our mission is to create a supportive and dynamic space where
                artists can present their creations, gain inspiration from
                others, and engage with an audience that appreciates the value
                of handcrafted beauty. We aim to bridge the gap between artists
                and art lovers, fostering a community that celebrates creativity
                in all its forms.
              </p>
              <Link
                href={link.ABOUT}
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* <Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Join ArtisanAlley Today{" "}
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Become a part of our thriving artistic community. Signing up is
                simple and free. Whether you're here to showcase your work, find
                inspiration, or connect with other artists, ArtisanAlley is the
                place for you. Join us and start your creative adventure today!
              </p>
              <Link
                href={link.ABOUT}
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Read More
              </Link>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bx bx-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
      <main id="main">
        <section className="services">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="icon-box icon-box-pink">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Showcase Your Work</a>
                  </h4>
                  <p className="description">
                    Create your own personalized gallery to exhibit your art.
                    Upload high-quality images, add detailed descriptions, and
                    share the stories behind your masterpieces.
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon-box icon-box-cyan">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Connect with Artists</a>
                  </h4>
                  <p className="description">
                    Join a diverse community of artists from around the world.
                    Participate in forums, engage in discussions, and
                    collaborate on projects.
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box icon-box-green">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Art Marketplace</a>
                  </h4>
                  <p className="description">
                    Turn your passion into a profession with our Art
                    Marketplace. Sell your artwork directly to buyers who
                    appreciate the uniqueness and quality of handcrafted pieces.
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon-box icon-box-blue">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Events and Workshops</a>
                  </h4>
                  <p className="description">
                    Stay informed about upcoming art events, exhibitions, and
                    workshops. Learn new skills, gain fresh perspectives, and
                    keep up with the latest trends in the art world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="why-us section-bg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 video-box">
                <img src="assets/img/why-us.jpg" className="img-fluid" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                ></a>
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-fingerprint"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Inspiration Hub</a>
                  </h4>
                  <p className="description">
                    Get inspired by exploring our curated collections, artist
                    spotlights, and thematic galleries. Discover new techniques,
                    styles, and mediums that can fuel your own creative journey.
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-gift"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Join ArtisanAlley</a>
                  </h4>
                  <p className="description">
                    Become a part of our thriving artistic community. Signing up
                    is simple and free. Whether you're here to showcase your
                    work, find inspiration, or connect with other artists,
                    ArtisanAlley is the place for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-title">
              <h2>Features</h2>
              <p>
                ArtisanAlley offers a multitude of features designed to help
                artists grow, connect, and succeed. Explore what we have to
                offer and find the perfect tools to elevate your artistic
                journey.
              </p>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img
                  src="assets/img/features-1.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-4">
                <h3>Personalized Galleries</h3>
                <p className="fst-italic">
                  Create stunning galleries to showcase your art. Add detailed
                  descriptions and stories to engage your audience.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i> High-quality image uploads.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Easy gallery management.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img
                  src="assets/img/features-2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Community Forums</h3>
                <p className="fst-italic">
                  Engage in lively discussions, share tips, and collaborate on
                  projects with artists from around the world.
                </p>
                <p>
                  Join forums based on your interests, ask questions, and get
                  feedback from the community.
                </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img
                  src="assets/img/features-3.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5">
                <h3>Art Marketplace</h3>
                <p>
                  Sell your artwork directly to buyers who appreciate
                  handcrafted pieces. Manage your sales and track orders with
                  ease.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i> Secure transactions.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Reach a global audience.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Easy order management.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img
                  src="assets/img/features-4.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Events and Workshops</h3>
                <p className="fst-italic">
                  Stay updated on the latest art events, exhibitions, and
                  workshops. Learn new skills and connect with other artists.
                </p>
                <p>
                  Whether you want to attend a local gallery opening or join an
                  online art class, our events calendar has something for
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
