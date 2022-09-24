import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

interface ICard {
    name?: string;
    number?: string;
    cvv?: string;
    month?: string;
    year?: string;
}

const Payment = () => {
    const [card, setCard] = useState<ICard>({
        name: 'John Doe',
        number: 'XXXXXXXXXXXXXXXX',
        month: '06',
        year: '25',
        cvv: 'XXX'
    });

    const handleCardChange = (name: "name" | "number" | "month" | "year" | "cvv", value: string) => {
        const cardClone = {...card};
        cardClone[name] = value;
        setCard(cardClone);
    }

    return (
        <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
            {/* PAGE DATA */}
            <div className="mb-3 text-center">
                <h1>Welcome to <span className="text-purple bold">ZID&nbsp;</span>Pay</h1>
                <p className="text-secondary">Fill your card info in the form below.</p>
                <hr/>
            </div>

            {/* FORM */}
            <Row className="d-flex justify-content-center mb-5">
                <Col lg={6}>
                    <form className="form-group">
                        <label htmlFor="name" className="mb-1">Card Name</label>
                        <input onChange={(e) => handleCardChange("name", e.target.value)} id="name"
                               placeholder="example: John Doe" type="text" className="form-control"/>

                        <label htmlFor="number" className="mt-3 mb-1">Card Number</label>
                        <input maxLength={16} onChange={(e) => handleCardChange("number", e.target.value)}
                               placeholder="5932 XXXX XXXX XXXX" type="text" className="form-control"/>

                        <Row>
                            <Col lg={6}>
                                <label htmlFor="date" className="mt-3 mb-1">Card Expiry Date</label>
                                <Row className="gap-0">
                                    <Col lg={6}>
                                        <input maxLength={2} onChange={(e) => handleCardChange("month", e.target.value)} id="date"
                                               placeholder="06" type="text" className="form-control"/>
                                    </Col>

                                    <Col lg={6}>
                                        <input maxLength={2} onChange={(e) => handleCardChange("year", e.target.value)}
                                               placeholder="23" type="text" className="form-control"/>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6}>
                                <label htmlFor="cvv" className="mt-3 mb-1">CVV</label>
                                <input maxLength={3} onChange={(e) => handleCardChange("cvv", e.target.value)} id="cvv"
                                       placeholder="XXX" type="text" className="form-control"/>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>

            {/* CARD */}
            <div className="d-flex justify-content-center">
                <Row className="card p-3 shadow p-3 mb-5 bg-white">
                    <Col lg={7}>
                        <p className="text-white bold letter-spacing-1 font-20">ZID BANK</p>
                        <div className="card-symbol bg-yellow rounded overflow-hidden">
                            -----------------------
                        </div>

                        <br/>
                        <p className="mt-5 card-number font-20 text-white">{
                            card.number?.match(/.{1,4}/g)?.join(" ")
                        }</p>
                        <p className="text-light">
                            <span>{card.month}</span>/
                            <span>{card.year}</span>
                        </p>
                    </Col>

                    <Col lg={5} className="position-relative h-100 d-flex justify-content-center">
                        <p className="text-white mt-3 bold letter-spacing-1 font-20 text-center">{card.name}</p>
                        <div
                            className="text-light bold position-absolute bottom-0 letter-spacing-1 text-center d-flex justify-content-center rounded gap-1 ccv">
                            {
                                card.cvv?.split("").map((letter, index) => {
                                    return <u key={index}>{letter}</u>;
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Payment;