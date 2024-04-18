import "./Card.css";

const Card = ({ cardInfo }) => {
  return (
    <div className="container">
      {cardInfo.map((info, index) => (
        <div key={index} className="card-container">
          <div className="name">{info.name}</div>
          <div className="description">{info.description}</div>
          <div className="interest-heading">Interests</div>
          <div className="interest-container">
            {info.interests.map((interest, index) => (
              <div className="interest" key={index}>
                {interest}
              </div>
            ))}
          </div>
          <div className="social-container">
            {info.socials.map((social, index) => (
              <a
                className="social"
                href={social.link}
                target="_blank"
                key={index}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
