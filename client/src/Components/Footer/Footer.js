import React from "react";
import "./footer.scss";
import img from "../../Videos/logoinvestock.png";

function footer({ marginTop }) {
  return (
    <footer className="footer" style={{ marginTop: marginTop }}>
      <div className="footer__logo-box">
        <div className="footer__logo">
          <img alt="Full logo" className="footer__logo" src={img} />
        </div>
      </div>
      <div className="row">
        <div class="col-1-of-2">
          <p class="footer__copyright">
            אתר זה נועד למטרות לימודיות בלבד. יש להתייחס לכלל הנתונים כלא אמיתיים ואין להתסמך עליהם, בנוסף אין להשתמש במחשבוני חברות בהשקעה אמיתית מחשבונים אלה בסייסים מאוד ולא באמת יכולים לתת מידע אמין על החברה. צוות האתר מאשר העתקה של תוכן זה הן בצד לקוח והן בצד שרת כמובן שנשמח לקרדיט
            <p>© 2021 כל הזכויות שמורות לאינבסטוק בע"מ </p> 
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="https://www.investopedia.com/" target="_blank" className="footer__link">
                investopedia
                </a>
              </li>
              <li className="footer__item">
                <a href="https://finance.yahoo.com/" target="_blank" className="footer__link">
                yahoo finance
                </a>
              </li>
              <li className="footer__item">
                <a href="https://il.investing.com/" target="_blank" className="footer__link">
                investing
                </a>
              </li>
              <li className="footer__item">
                <a href="https://stocktwits.com/" target="_blank" className="footer__link">
                  stocktwits
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
