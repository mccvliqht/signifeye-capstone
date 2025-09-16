function Header({ onOpenSettings }) {
  return (
    <header>
      <div className="header-content">
        <div className="logo-branding">
          <img src="/img/logo.png" alt="SignifEye Logo" />
          <h1>SignifEye</h1>
        </div>
        <div className="settings-logo">
          <button id="settings-btn" onClick={onOpenSettings}>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;