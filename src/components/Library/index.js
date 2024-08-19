import React, { useState } from "react";
import LibraryItemDetails from "./LibraryItemDetails";
import metaData from "../../data/sample.json";
import "./Library.css";

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [activeTab, setActiveTab] = useState(metaData.tabs[0].title);

  const filteredTabsItems = metaData.tabs.filter((tabItem) => {
    const tabMatches =
      tabItem.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tabItem.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const itemsMatch = tabItem.items.some(
      (item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return tabMatches || itemsMatch;
  });

  const metaTabsHeadings = metaData.tabs.map((tab) => tab.title);

  return (
    <div className="container">
      <div className="wrapper">
        <header className="header">
          <div className="header-container">
            <h1 className="header-title">{metaData.title}</h1>
            <p className="header-description">{metaData.description}</p>
          </div>
          <div className="button-container">
            <button className="header-button">Request</button>
          </div>
        </header>
        <div className="container-body">
          <div className="search">
            <input
              type="text"
              placeholder="Type to search..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <nav className="tabs-container">
            {metaTabsHeadings.map((tabHeading) => (
              <a
                key={tabHeading}
                onClick={() => setActiveTab(tabHeading)}
                href={`#${tabHeading.toLowerCase()}`}
                className={`tab-item ${
                  activeTab === tabHeading ? "active" : ""
                }`}
              >
                {tabHeading}
              </a>
            ))}
          </nav>
          {filteredTabsItems.map((tabItem) => (
            <section
              id={tabItem.title.toLowerCase()}
              className="section"
              key={tabItem.title}
            >
              <h2 className="section-title">{tabItem.title}</h2>
              <p className="section-description">{tabItem.description}</p>
              <div className="grid">
                {tabItem.items.map((item) => (
                  <div
                    key={item.id}
                    className="card"
                    onClick={() => {
                      setIsModalOpen(true);
                      setModalData(item);
                    }}
                  >
                    <div className="card-icon"></div>
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-description">{item.description}</p>
                      <p className="card-date">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <LibraryItemDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
        />
      </div>
    </div>
  );
}
