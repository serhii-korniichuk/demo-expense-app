import s from "./FooterTitle.module.scss";

import { Link } from "react-router-dom";

interface FooterTitleProps {
  link: string;
  linkTitle: string;
  footerTitle: string;
}

const FooterTitle = ({ footerTitle, link, linkTitle }: FooterTitleProps) => (
  <div className={s.FooterTitleWrapper}>
    <h4 className={s.FooterTitle}>
      {footerTitle}

      <Link to={link} className={s.FooterLink}>
        {linkTitle}
      </Link>
    </h4>
  </div>
);

export default FooterTitle;
