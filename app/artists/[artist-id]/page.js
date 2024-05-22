import { breadCrumps } from "@/app/lib/breadCrumps";
import Breadcrumbs from "@/app/ui/BreadCrumps";
import PortfolioCard from "@/app/ui/portfolio/PortfolioCard";
import dynamic from "next/dynamic";
const ArtistCard=dynamic(()=>import('@/app/ui/artists/ArtistCard'),{ssr:false})
const ArtistDetails = () => {
  return (
    <main id="main">
      <Breadcrumbs {...breadCrumps.ARTISTS_DETAILS} />
      <section
        id="portfolio-details"
        style={{ paddingBottom: "0px" }}
        className="portfolio-details"
      >
        <div className="container">
          <div className="row gy-4 flex">
            <ArtistCard
              id={1}
              isSocialVisible={false}
              image={"/assets/img/team/team-1.jpg"}
            />

            <div className=" col-md-6 col-lg-8">
              <div className="portfolio-info">
                <h3>Sarah Jhonson</h3>
                <p className="text-xs italic">
                  {" "}
                  Animi est delectus alias quam repellendus nihil nobis dolor.
                  Est sapiente occaecati et dolore. Omnis aut ut nesciunt
                  explicabo qui. Eius nam deleniti ut omnis repudiandae
                  perferendis qui. Neque non quidem sit sed pariatur quia modi
                  ea occaecati. Incidunt ea non est corporis in.{" "}
                </p>
                <ul>
                  <li>
                    <strong>Name</strong>: Sarah Jhonson
                  </li>
                  <li>
                    <strong>Career</strong>: Graphic designer
                  </li>
                  <li>
                    <strong>Contact</strong>: 9454251456
                  </li>
                  <li>
                    <strong>Email id</strong>: <a href="#">www.example.com</a>
                  </li>
                  <li className="artist-social-media">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="portfolio-description">
                  <h2>Image name</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim cum
                    deserunt eius.
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li className="filter-active">Art Works</li>
              </ul>
              {/* <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul> */}
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          >
            <PortfolioCard
              id={1}
              image={"/assets/img/portfolio/portfolio-1.jpg"}
              title={"App1"}
            />
            <PortfolioCard
              id={2}
              image={"/assets/img/portfolio/portfolio-2.jpg"}
              title={"Web 3"}
            />
            <PortfolioCard
              id={3}
              image={"/assets/img/portfolio/portfolio-3.jpg"}
              title={"App 2"}
            />
            <PortfolioCard
              id={4}
              image={"/assets/img/portfolio/portfolio-4.jpg"}
              title={"Card 2"}
            />
            <PortfolioCard
              id={5}
              image={"/assets/img/portfolio/portfolio-5.jpg"}
              title={"Web 2"}
            />
            <PortfolioCard
              id={6}
              image={"/assets/img/portfolio/portfolio-6.jpg"}
              title={"App 3"}
            />
            <PortfolioCard
              id={7}
              image={"/assets/img/portfolio/portfolio-7.jpg"}
              title={"Card 1"}
            />
            <PortfolioCard
              id={8}
              image={"/assets/img/portfolio/portfolio-8.jpg"}
              title={"Card 3"}
            />
            <PortfolioCard
              id={9}
              image={"/assets/img/portfolio/portfolio-9.jpg"}
              title={"Web 1"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default ArtistDetails;
