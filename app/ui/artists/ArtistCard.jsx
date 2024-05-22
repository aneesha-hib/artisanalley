"use client"
import { link } from "@/app/lib/links";
import Link from "next/link";

const ArtistCard = ({ id, image, name, designation, description ,isSocialVisible=true}) => {
  return (
    <Link href={link.ARTISTS+"/"+id+""}  className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <div className="member-img">
          <img src={image} className="img-fluid" alt="" />
         <div style={{display:isSocialVisible?"flex":"none"}} className="social">
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
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{designation}</span>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default ArtistCard;
