import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from "../assets/BIG DATA F1.png"
import p2 from "../assets/python 3.png"
export default function RecipeReviewCard() {
      


  const data = [
    {
    id: 1,
    name: "Big Data",
    description:"Get the best Insigths in the New Emerging technology in the World of Data Science",
    img:p1,
    url: " https://meet.zoho.in/MGLuu5aKiO"
  },
  {id: 2,
    name: "Introduction to Blockchain and Cryptocurrency",
    description:"Dive into the latest trend in the web3 ",
    img: p2,
    url: "https://meet.zoho.in/2CC995Cfj9",
  },
  {
    id:3,
    name:"Fundamentals of Fintech and Blockchain",
    description:"Know the insights of Fintech and Blockchain",
    img:p2,
    url:"",
  }


]



  const handleClick = (url) => {
    window.location.href = url; // Google Form URL
    
  };

  return (
    <div> <h1 className=' flex justify-center mt-12'> Webinars</h1>
    <div className='flex justify-center mt-16 top-5 p-6'>
    {data.map((item) => (
      <Card key={item.id} style={{ width: '18rem', backgroundColor: "rgb(11, 21, 36)", margin: "24px" }}>
        <Card.Img variant="top" src={item.img} alt={item.name} />
        <Card.Body>
          <Card.Title style={{ color: "white" }}>{item.name}</Card.Title>
          <Card.Text style={{ padding: "12px" }}>
            {item.description}
          </Card.Text>
          <Button onClick={() => handleClick(item.url)} variant="primary">
            Register NOW!!
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div></div>
    
    
  );
}
