import React from "react";
import "./Library.css";

export default function ItemDetails({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const { title, subtitle, description, details, tags, stats, questions } =
    data;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <div className="icon-placeholder"></div>
          <div>
            <h2 className="modal-title">
              {title} <span className="modal-subtitle">{subtitle}</span>
            </h2>
            <p className="modal-description">{description}</p>
          </div>
          <p className="modal-description">{details}</p>
          <div className="tag-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-value">{stats.used}</p>
              <p className="stat-label">Used</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">{stats.type}</p>
              <p className="stat-label">Type</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">{stats.pagesNo}</p>
              <p className="stat-label">Pages No.</p>
            </div>
            <div>
              <p className="stat-value">{stats.lastUpdated}</p>
              <p className="stat-label">Last Updated</p>
            </div>
          </div>
        </div>
        <div className="placeholder-box"></div>
        <div className="business-questions">
          <h3 className="business-questions-title">Business Questions</h3>
          <div className="question-grid">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`question-item ${index === 0 ? "active" : ""}`}
              >
                <h4 className="question-item-title">{question.title}</h4>
                <p className="question-item-description">
                  {question.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="favorite-button">Favorite item</button>
      </div>
    </div>
  );
}
