"use client";

import CountUp from "react-countup";
import Breadcrumbs from "../ui/BreadCrumps.jsx";
import { breadCrumps } from "../lib/breadCrumps.js";
import { link } from "../lib/links.js";
import Link from "next/link.js";

const About = () => {
  return (
    <main id="main">
      <Breadcrumbs {...breadCrumps.ABOUT_US} />

      <section className="about" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>Discover. Connect. Inspire.</h3>
              <label className="font-bold">About Us</label>
              <p className="">
                Welcome to ArtisanAlley, a vibrant online community where
                artists from around the globe come together to showcase their
                work, connect with like-minded creatives, and explore the
                endless possibilities of the artistic world. Whether you're a
                painter, sculptor, photographer, or digital artist, ArtisanAlley
                is your platform to shine, share, and grow.
              </p>
              <label className="font-bold">Our Mission</label>
              <p className="">
                At ArtisanAlley, we believe in the transformative power of art.
                Our mission is to create a supportive and dynamic space where
                artists can present their creations, gain inspiration from
                others, and engage with an audience that appreciates the value
                of handcrafted beauty. We aim to bridge the gap between artists
                and art lovers, fostering a community that celebrates creativity
                in all its forms.
              </p>
            </div>
          </div>
          <div className="flex pt-10 flex-col">
            <label className="font-bold">Explore Our Features</label>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>Showcase Your Work
                <p className="text-sm italic text-gray-400">
                  Create your own personalized gallery to exhibit your art.
                  Upload high-quality images, add detailed descriptions, and
                  share the stories behind your masterpieces. Your gallery is
                  your space to let your creativity speak for itself.
                </p>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Connect with Artists
                <p className="text-sm italic text-gray-400">
                  Join a diverse community of artists from around the world.
                  Participate in forums, engage in discussions, and collaborate
                  on projects. ArtisanAlley is designed to help you network with
                  fellow creatives, learn from each other, and grow together.
                </p>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Art Marketplace
                <p className="text-sm italic text-gray-400">
                  Turn your passion into a profession with our Art Marketplace.
                  Sell your artwork directly to buyers who appreciate the
                  uniqueness and quality of handcrafted pieces. Manage your
                  sales, track orders, and reach a global audience with ease.
                </p>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Events and Workshops
                <p className="text-sm italic text-gray-400">
                  Stay informed about upcoming art events, exhibitions, and
                  workshops. Whether you want to attend a local gallery opening
                  or join an online art class, our events calendar has something
                  for everyone. Learn new skills, gain fresh perspectives, and
                  keep up with the latest trends in the art world.
                </p>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Inspiration Hub
                <p className="text-sm italic text-gray-400">
                  Get inspired by exploring our curated collections, artist
                  spotlights, and thematic galleries. Discover new techniques,
                  styles, and mediums that can fuel your own creative journey.
                  Our Inspiration Hub is your go-to resource for fresh ideas and
                  artistic motivation.
                </p>
              </li>
            </ul>
            <label className="font-bold">Join ArtisanAlley Today</label>
            <p>
              Become a part of our thriving artistic community. Signing up is
              simple and free. Whether you're here to showcase your work, find
              inspiration, or connect with other artists, ArtisanAlley is the
              place for you. Join us and start your creative adventure today!
            </p>
          </div>
        </div>
      </section>

      <section className="facts section-bg" data-aos="fade-up">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <CountUp
                start={0}
                end={232}
                duration={5}
                className="purecounter"
              />
              <p>Artists</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <CountUp
                start={0}
                end={521}
                duration={5}
                className="purecounter"
              />
              <p>Arts</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <CountUp
                start={0}
                end={1463}
                duration={5}
                className="purecounter"
              />
              <p>Hours Of Support</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <CountUp
                start={0}
                end={15}
                duration={5}
                className="purecounter"
              />
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="clients" data-aos="fade-up">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-no-editable="true"
        >
          <div className="swiper clients-swiper">
            

            <script
              type="application/json"
              className="swiper-config"
              dangerouslySetInnerHTML={{
                __html: `
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "480": {
                  "slidesPerView": 3,
                  "spaceBetween": 60
                },
                "640": {
                  "slidesPerView": 4,
                  "spaceBetween": 80
                },
                "992": {
                  "slidesPerView": 6,
                  "spaceBetween": 120
                }
              }
            }
          `,
              }}
            />
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-6.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-7.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="assets/img/clients/client-8.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section> */}

      {/* <section className="skills" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2>Our Skills</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="skills-content">
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
              </div>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
              </div>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>
              </div>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="skill">
                  Photoshop <i className="val">55%</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="testimonials" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <div className="testimonials-carousel swiper">
            <div className="swiper-wrapper">
              <div className="testimonial-item swiper-slide">
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>

              <div className="testimonial-item swiper-slide">
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>

              <div className="testimonial-item swiper-slide">
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>

              <div className="testimonial-item swiper-slide">
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>

              <div className="testimonial-item swiper-slide">
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section> */}
      <section className="services">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div className="icon-box icon-box-pink">
                <div className="pro">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="rounded-full w-full h-full"
                    alt=""
                  />
                </div>
                <h4 className="title">
                  <Link href={link.ARTISTS + "/" + 1}> James Nguyen</Link>
                  <br />
                  <label className="text-sm font-thin italic text-pink-400">
                    Painter
                  </label>
                </h4>
                <p className="description">
                  "ArtisanAlley has been a game-changer for me. The community is
                  incredibly supportive, and I've made connections that have led
                  to amazing collaborations."
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box icon-box-cyan">
              <div className="pro">
                 
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="rounded-full w-full h-full"
                    alt=""
                  />
                </div>
                <h4 className="title">
                  <Link href={link.ARTISTS + "/" + 2}>Maria Lopez</Link>
                  <br />
                  <label className="text-sm font-thin italic text-cyan-400">
                    Sculptor
                  </label>
                </h4>
                <p className="description">
                  "The Art Marketplace on ArtisanAlley helped me turn my passion
                  into a career. It's the perfect platform for artists looking
                  to sell their work to a wider audience."
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box icon-box-green">
              <div className="pro">
                 
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="rounded-full w-full h-full"
                    alt=""
                  />
                </div>
                <h4 className="title">
                  <Link href={link.ARTISTS + "/" + 3}>Aisha Khan</Link>
                  <br />
                  <label className="text-sm font-thin italic text-green-400">
                    Digital Artist
                  </label>
                </h4>
                <p className="description">
                  "I love the Inspiration Hub! It's my go-to source for new
                  ideas and trends in the art world."
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box icon-box-blue">
              <div className="pro">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="rounded-full w-full h-full"
                    alt=""
                  />
                </div>
                <h4 className="title">
                  <Link href={link.ARTISTS + "/" + 4}>Raj Patel</Link>
                  <br />
                  <label className="text-sm font-thin italic text-blue-400">
                    Photographer
                  </label>
                </h4>
                <p className="description">
                  "ArtisanAlley is a treasure trove of talent and inspiration.
                  The events and workshops have expanded my skills and
                  introduced me to a fantastic network of artists."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
