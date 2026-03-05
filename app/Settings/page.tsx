"use client";
import SearchBar from "@/Components/SearchBar";
import Sidebar from "@/Components/Sidebar";
import "./styles.css";
export default function Settings() {
  return (
    <div className="wrapper">
      <SearchBar />
      <div className="sidebar__overlay">
        <Sidebar />
      </div>
      <div className="row">
        <div className="container">
          <div className="section__title page__title">Settings</div>
          <div className="settings__content">
            <div className="settings__sub-title">Subscription Plan</div>
            <div className="settings__text">Premium</div>
          </div>
        <div className="settings__content">
          <div className="settings__sub-title">Email</div>
          <div className="settings__text">user@example.com</div>
        </div>
      </div>
    </div>
    </div>
  );
}
