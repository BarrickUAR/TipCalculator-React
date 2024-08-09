import { useState } from "react";
import Splitter from "/src/img/SPLITTER.png";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-logo">
        <img src={Splitter} alt="Logo" />
      </div>
      <div className="calculator">
        <div className="input-section">
          <div className="amount-entry">
            <div className="amount-header">
              <h5>Hesap Tutarı</h5>
              <p className="warning"></p>
            </div>
            <input type="number" className="amount-input" placeholder="$0" />
          </div>

          <div className="tip-selection">
            <p>Bahşiş %'sini Seçin</p>
            <div className="tip-buttons">
              <button>5</button>
              <button>10</button>
              <button>15</button>
              <button>25</button>
              <button>50</button>
              <form className="custom-tip-form">
                <input
                  type="number"
                  placeholder="ÖZEL"
                  className="custom-tip-input"
                />
              </form>
            </div>
          </div>

          <div className="people-count">
            <div className="people-header">
              <h5>Kişi Sayısı</h5>
              <p className="warning-people"></p>
            </div>
            <input
              type="number"
              className="people-input"
              placeholder="0"
              required
            />
          </div>
        </div>

        <div className="result-display">
          <div className="tip-amount-display">
            <div className="tip-amount-text">
              Bahşiş Miktarı <span>/ kişi</span>
            </div>
            <div className="tip-amount-value">$0.00</div>
          </div>

          <div className="total-display">
            <div className="total-text">
              Toplam <span>/ kişi</span>
            </div>
            <div className="total-value">$0.00</div>
          </div>

          <button className="reset-btn">Sıfırla</button>
        </div>
      </div>
    </div>
  );
}

export default App;
