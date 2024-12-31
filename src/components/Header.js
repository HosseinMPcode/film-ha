import "./../styles/Header.css";
function Header() {
  return (
    <header className="header">
      <button className="btn btn-secondary">ورود/ثبت نام</button>
      <div className="search">
        <input
          className="form-control"
          type="text"
          placeholder="جستجو..."
          dir="rtl"
        />
        <button className="btn btn-secondary">جستجو</button>
      </div>
      <div className="logo">
        <img className="w-100" src="images/movieLogo.png" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
