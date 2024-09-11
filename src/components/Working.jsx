import workingImage from "../assets/images/illustration-stay-productive.png";
import aero from "../assets/images/icon-arrow.svg";

const Working = () => {
  return (
    <div className="working">
      <div className="left-working">
        <img src={workingImage} alt="" />
      </div>
      <div className="right-working">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="line-section">
          <div className="line-text">
          <p>
            See how Fylo works 
          </p>
          <img src={aero} alt="" />
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Working;
