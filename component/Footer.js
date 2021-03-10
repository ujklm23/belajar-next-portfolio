const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div>
          <div className="tools">
            <p>Tools</p>
            <ul>
              <li>
                <a href="https://reactjs.org" target="_blank">
                  React Js
                </a>
              </li>
              <li>
                <a href="https://nextjs.org" target="_blank">
                  Next Js
                </a>
              </li>
              <li>
                <a href="https://sass-lang.com/" target="_blank">
                  Sass
                </a>
              </li>
              <li>
                <a href="https://code.visualstudio.com/" target="_blank">
                  Vs Code
                </a>
              </li>
            </ul>
          </div>
          <div className="foot">
            <p>
              &copy; 2021 | built with <i class="fas fa-heart" /> by Ridhwan
            </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div className="social_media">
          <p>Social Media</p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/r.rasyid.s/?hl=id"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ridwan.rasyid.583"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+6285713197622?text=hi,+Website+kamu+bagus!"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
