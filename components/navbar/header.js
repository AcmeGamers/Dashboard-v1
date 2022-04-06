export default function Header() {
  return (
    <>
      {/* <!-- Navigation --> */}
      <div className="navbar row space-between verti-center r1-margin r0-r1-padding">
        {/* <!-- Logo --> */}
        <div className="logo">Analytica</div>
        {/* <!-- Search Bar --> */}
        <div className="search-bar">
          <label htmlFor="searchbar">
            <i className="fa fas search"></i>
            <input
              id="searchbar"
              type="text"
              className="search"
              placeholder="Search"
            />
          </label>
        </div>
        {/* <!-- Profile --> */}
        <div className="profile">
          <i className="fa fas notification-bell"></i>
          <div className="profile-pic"></div>
        </div>
      </div>
    </>
  );
}
