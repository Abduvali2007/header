import scss from "../footer/Footer.module.scss";
import group from "../../../assets/Group 430.png";
import bg from "../../../assets/Rectangle 5.png";

const Footer = () => {
  return (
    <div className={scss.footer}>
      <div className={scss.content}>
        <div className={scss.action}>
          <div className={scss.text}>
            <h1>
              What Our Customer <br /> Are saying
            </h1>
            <p>
              Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
              nulla sem lacus a, interdum nulla sem adipiscing inw
            </p>
          </div>
          <img src={group} alt="img" />
        <div className={scss.block}>
          <h1>What Are You Waiting For?</h1>
          <button> Try Blinqpay</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
