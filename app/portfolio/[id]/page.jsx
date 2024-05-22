import { breadCrumps } from "@/app/lib/breadCrumps";
import { link } from "@/app/lib/links";
import Breadcrumbs from "@/app/ui/BreadCrumps";
import Link from "next/link";

const PortfolioDetails = ({ params }) => {
  return (
    <main id="main">
      <Breadcrumbs {...breadCrumps.PORTFOLIO_DETAILS} />
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className=" align-items-center">
                  <img src="/assets/img/portfolio/portfolio-1.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Artist information</h3>
                <ul>
                  <li>
                    <strong>Name</strong>: <Link href={link.ARTISTS+"/"+2}>Sarah Jhonson</Link>
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
                  <li className="artist-social-media">
                   
                    <i className="bx bx-heart-circle" />
                    <i className="bx bx-share-alt" />
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Image name</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PortfolioDetails;
