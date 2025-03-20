import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="footer sm:footer-horizontal text-base-content p-10 w-11/12 mx-auto">
        <nav>
          <h6 className="text-4xl font-semibold">Islamic Vision</h6>
          <a className="link link-hover">Who we are</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">BROWSE</h6>
          <Link to={'/'} className="link link-hover">Home</Link>
          <Link to={'/all-series'} className="link link-hover">Series</Link>
          <Link to={'/add-series'} className="link link-hover">Add Series</Link>
          <Link to={'/favorite-series'} className="link link-hover">favorite</Link>
          <Link to={'/pricing'} className="link link-hover">Pricing</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
