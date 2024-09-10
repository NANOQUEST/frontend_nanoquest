import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from "../assets/python 1.png"
import p2 from "../assets/python 3.png"
export default function RecipeReviewCard() {
      

  const handleClick = () => {
    window.location.href = 'https://share.hsforms.com/1mLYbHd-VRg6dA-xATnLLpgr6to4'; // Google Form URL
  };

  return (
    <Card style={{ width: '32rem', height: "44rem", marginTop:"6rem" , marginBottom:"4rem", alignItem:"center", display:"flex", justifyContent:"center", }}>
    <Card.Img variant="top" src={p1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text style={{color:"black"}}>
        Get the best insights to the emerging and most demanding technology in the world of data science and data analyst and many more
      </Card.Text>
      <Button onClick={handleClick} variant="primary">Register Now!</Button>
    </Card.Body>
  </Card>
  );
}
