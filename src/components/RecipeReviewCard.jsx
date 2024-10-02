import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from "../assets/BIG DATA F1.png";
import p2 from "../assets/blockchain & fintech nanoquestt.png";
import p3 from "../assets/CRYPTO CURRENCY nanoquest.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RecipeReviewCard() {

  const data = [
    {
      id: 1,
      name: "Big Data",
      description: "Get the best Insigths in the New Emerging technology in the World of Data Science",
      img: p1,
      url: "https://meet.zoho.in/MGLuu5aKiO"
    },
    {
      id: 2,
      name: "Introduction to Blockchain and Cryptocurrency",
      description: "Dive into the latest trend in the web3",
      img: p3,
      url: "https://meet.zoho.in/2CC995Cfj9",
    },
    {
      id: 3,
      name: "Fundamentals of Fintech and Blockchain",
      description: "Know the insights of Fintech and Blockchain",
      img: p2,
      url: "",
    }
  ];

  const handleClick = (url) => {
    if (url) {
      window.location.href = url; // Redirect to URL
    }
  };

  return (
    <div>
      <h1 className='text-center mt-16'>Webinars</h1>
      <Container className="mt-8">
        <Row className="justify-content-center">
          {data.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: '18rem', backgroundColor: "rgb(11, 21, 36)" }}>
                <Card.Img variant="top" src={item.img} alt={item.name} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>{item.name}</Card.Title>
                  <Card.Text style={{ padding: "12px", color: "white" }}>
                    {item.description}
                  </Card.Text>
                  <Button onClick={() => handleClick(item.url)} variant="primary">
                    Register NOW!!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
