import { link } from "@/app/lib/links";
import Link from "next/link";

const PortfolioCard = ({ id, image, title }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
      <div className="portfolio-item">
        <img src={image} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h3>{title}</h3>
          <div className="portfolio-links">
            <div title="like" className="portfolio-like">
              <i className="bx bx-heart-circle"></i>
            </div>

            <div
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Social Media"
              className="portfolio-share"
            >
              <i className="bx bx-share-alt"></i>
            </div>
            <Link href={"/" + image} title={title}>
              <i className="bx bx-plus"></i>
            </Link>
            <Link href={link.PORTFOLIO + "/" + id}>
              <i className="bx bx-link"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
