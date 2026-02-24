import {
  faMagnifyingGlass,
  faBookBookmark,
  faHouse,
  faPen,
  faPersonThroughWindow,
  faGear,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.modal.css";
import logo from "../public/logo.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__header--icon" src={logo.src} alt="logo" />
      </div>
      <div className="sidebar__wrapper">
        <div className="sidebar__menu--top">
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faHouse} /> </div> For you
          </a>
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faBookBookmark} /> </div> My Library
          </a>
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faPen} /> </div> Highlights
          </a>
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </div> Search
          </a>
        </div>
        <div className="sidebar__menu--bottom">
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faGear} /> </div> Settings
          </a>
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faQuestionCircle} /> </div> Summon the Fellowship
          </a>
          <a className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faPersonThroughWindow} /> </div>
            Im-Going-On-An-Adventure
          </a>
        </div>
      </div>
    </div>
  );
}
