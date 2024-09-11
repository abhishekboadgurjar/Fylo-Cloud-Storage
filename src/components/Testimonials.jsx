import satish from "../assets/images/profile-1.jpg";
import Bruce from "../assets/images/profile-2.jpg";
import Iva from "../assets/images/profile-3.jpg"

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="t-cards">
        <div className="t-card">
          <h4>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </h4>
          <div className="profile">
            <div className="profile-image">
              <img src={satish} alt="" />
            </div>
            <div className="profile-text">
              <h1>Satish Patel</h1>
              <p>Satish Patel Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="t-card">
          <h4>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </h4>
          <div className="profile">
            <div className="profile-image">
              <img src={Bruce} alt="" />
            </div>
            <div className="profile-text">
              <h1>Bruce McKenzie</h1>
              <p>Bruce McKenzie Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="t-card">
          <h4>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </h4>
          <div className="profile">
            <div className="profile-image">
              <img src={Iva} alt="" />
            </div>
            <div className="profile-text">
              <h1>Iva Boyd</h1>
              <p>Iva Boyd Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-card">
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <div className="input-section">
          <div className="input-box">
            <input type="text" placeholder=" email@example.com" />
          </div>
          <div className="submit-button">
<p>Get Started For Free </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
