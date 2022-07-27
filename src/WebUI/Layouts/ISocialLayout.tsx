import "./ISocialLayout.scss";

const ISocialLayout = (props: { children: JSX.Element}) => {
    return (
        <>
            <header className="i-social-layout-header">
                <h1 className="i-social-layout-logo">ISocial</h1>
                <div className="i-social-layout-search-input-container">
                    <input className="i-social-layout-search-input" type="text" placeholder="Search here"/>
                </div>
                <nav className="i-social-layout-menu">
                    <ul className="i-social-layout-menu-list">
                        <li className="i-social-layout-menu-list-item"><a href="">Feed</a></li>
                        <li className="i-social-layout-menu-list-item"><a href="">Friend Suggestions</a></li>
                        <li className="i-social-layout-menu-list-item"><a href="">My Profile</a></li>
                    </ul>
                </nav>
            </header>
            <div className="i-social-layout-content">
                <aside className="i-social-layout-aside">

                </aside>
                <main className="i-social-layout-main">
                    {props.children}
                </main>
            </div>
            <footer className="i-social-layout-footer">
                <h2 className="i-social-layout-footer-copyright">Copyright <span className="i-social-layout-logo">ISocial Network</span></h2>
            </footer>
        </>
    );
}

export default ISocialLayout;
