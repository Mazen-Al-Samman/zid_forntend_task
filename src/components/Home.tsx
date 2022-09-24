import {Container, Image} from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center flex-column vh-100 gap-5">
                <Image width="200" src="https://zid.sa/wp-content/uploads/2022/07/zid-logo-300x162.png" alt="Zid Logo"/>

                <div>
                    <span className="text-purple main-text">Zid&nbsp;</span>
                    <span className="text-yellow main-text">Task</span>
                </div>

                <p className="sub-text">We're proud to introduce <b className="text-purple">ZID</b> front end task.</p>
            </div>
        </Container>
    );
}

export default Home;