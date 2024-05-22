import { breadCrumps } from "../lib/breadCrumps";
import Breadcrumbs from "../ui/BreadCrumps";
import PortfolioCard from "../ui/portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <main id="main">
      {/* <!-- ======= Our Portfolio Section ======= --> */}
      <Breadcrumbs {...breadCrumps.PORTFOLIO} />
      {/* <!-- End Our Portfolio Section --> */}

      {/* <!-- ======= Portfolio Section ======= --> */}
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
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
              image={"assets/img/portfolio/portfolio-1.jpg"}
              title={"App1"}
            />
            <PortfolioCard
              id={2}
              image={"assets/img/portfolio/portfolio-2.jpg"}
              title={"Web 3"}
            />
            <PortfolioCard
              id={3}
              image={"assets/img/portfolio/portfolio-3.jpg"}
              title={"App 2"}
            />
            <PortfolioCard
              id={4}
              image={"assets/img/portfolio/portfolio-4.jpg"}
              title={"Card 2"}
            />
            <PortfolioCard
              id={5}
              image={"assets/img/portfolio/portfolio-5.jpg"}
              title={"Web 2"}
            />
            <PortfolioCard
              id={6}
              image={"assets/img/portfolio/portfolio-6.jpg"}
              title={"App 3"}
            />
            <PortfolioCard
              id={7}
              image={"assets/img/portfolio/portfolio-7.jpg"}
              title={"Card 1"}
            />
            <PortfolioCard
              id={8}
              image={"assets/img/portfolio/portfolio-8.jpg"}
              title={"Card 3"}
            />
            <PortfolioCard
              id={9}
              image={"assets/img/portfolio/portfolio-9.jpg"}
              title={"Web 1"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Portfolio;
