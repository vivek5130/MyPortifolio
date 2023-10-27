import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projref }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href = {projref} target="_blank" rel="noreferrer">
        <img src={imgUrl} style={{ width: 420, height: 260 } } alt="project img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
        </a>
      </div>
    </Col>
  )
}
