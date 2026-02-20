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
            <FontAwesomeIcon icon={faHouse} /> For you
          </a>
          <a className="sidebar__link--wrapper">
            <FontAwesomeIcon icon={faBookBookmark} /> My Library
          </a>
          <a className="sidebar__link--wrapper">
            <FontAwesomeIcon icon={faPen} /> Highlights
          </a>
          <a className="sidebar__link--wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </a>
        </div>
        <div className="sidebar__menu--bottom">
          <a className="sidebar__link--wrapper">
            <FontAwesomeIcon icon={faGear} /> Settings
          </a>
          <a className="sidebar__link--wrapper">
            <FontAwesomeIcon icon={faQuestionCircle} /> Summon the Fellowship
          </a>
          <a className="sidebar__link--wrapper">
            <FontAwesomeIcon icon={faPersonThroughWindow} /> Im-Going-On-An-Adventure
          </a>
        </div>
      </div>
    </div>
  );
}
