const Footer = () => {
  return (
    <footer
    id="footer"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-duration="500"
  >
    <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>
              Stay updated with the latest news, events, and exclusive offers from ArtisanAlley. Join our community of passionate artists today!
            </p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">About Us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Terms of Service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
  
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Art Galleries</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Community Forums</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Art Marketplace</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Events & Workshops</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i> <a href="#">Inspiration Hub</a>
              </li>
            </ul>
          </div>
  
          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@artisanalley.com<br />
            </p>
          </div>
  
          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About ArtisanAlley</h3>
            <p>
              ArtisanAlley is a vibrant platform for artists to showcase their work, connect with peers, and inspire others. We celebrate creativity and foster a supportive community for all artists.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="container">
      <div className="copyright">
        &copy; <strong><span>ArtisanAlley</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  
  );
};
export default Footer;
