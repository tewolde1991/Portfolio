// import "./Services.css";
import "../Services/Service.css";
import { FaLayerGroup, FaCode, FaChartLine, FaMobileAlt, FaCamera } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLayerGroup />,
      title: "Business Strategy",
    },
    {
      icon: <FaCode />,
      title: "Website Development",
    },
    {
      icon: <FaChartLine />,
      title: "Marketing & Reporting",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
    },
    {
      icon: <FaCamera />,
      title: "Photography",
    },
    {
      icon: <FaChartLine />,
      title: "SEO Optimization",
    },
  ];

  return (
    <section className="services">
      <h2>My Awesome Service</h2>
      <p className="subtitle">
        There are many variations of passages of Lorem Ipsum available.
      </p>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie close to the earth.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;