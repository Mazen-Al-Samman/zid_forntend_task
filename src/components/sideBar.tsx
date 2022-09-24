import {Image, NavLink} from "react-bootstrap";

const menuItems = [
    {
        'title': 'Home',
        'link': '/'
    },
    {
        'title': 'Profile',
        'link': '/profile'
    },
    {
        'title': 'Payment',
        'link': '/payment'
    }
];

const sideBar = () => {
    return (
        <aside className="vh-100 sideBar p-5">
            {/* LOGO */}
            <div className="bg-light d-flex justify-content-center p-2 rounded">
                <Image width="150" src="https://zid.sa/wp-content/uploads/2022/07/zid-logo-300x162.png" alt="Zid Logo"/>
            </div>

            <div className="user-main-info d-flex flex-column align-items-center mt-3 text-light">
                <Image width={150} height={150} src="/icons/batmanAvatar.png" className="fullRadius"></Image>
                <article className="text-center mt-3 bold letter-spacing-1">
                    <p>Mhd Mazen Al - Samman</p>
                    <p className="badge text-dark bg-yellow p-3">Store Owner</p>
                </article>
            </div>
            <hr className="bg-white border border-white w-100"/>

            <div className="internal-container mt-3 d-flex flex-column gap-2 justify-content-center align-items-center">
                {
                    menuItems.map((menuItem, index) => {
                        return (
                            <div className="bg-light w-100 text-dark rounded" key={index}>
                                <NavLink href={menuItem.link}
                                         className="menuItem d-flex justify-content-between letter-spacing-1 p-2">
                                    {menuItem.title}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    );
}

export default sideBar;