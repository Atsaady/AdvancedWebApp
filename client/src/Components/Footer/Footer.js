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
            אתר זה נועד למטרות לימודיות בלבד. מפתחי האתר לא מבטיחים שאתר זה מכיל
            מידע עדכני על מניות או שהאלגורתמים יעזרו לך להיות מליונר ולהכות
            תשוק. מפתחי האתר אינם אחראים לשום נזק שיגרם מההשקעה או משימוש במידע
            זה ולכן מזהירים שנית לא לקחת ברצינות את הדיאטה שכתובה פה,חמי אוהבים
            אותך יאח תן 100. מי שיהיה אמיץ ויגנוב את העיצוב אני יזיין אותו, ראו
            הוזהרתם !!!
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  אריק
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  עברית
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  מלך הריאקט
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  והסטקיים
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  מאור
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  גלידה
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
