import scss from "./Get.module.scss";
import logo7 from "../../../assets/image 7.png";
import logo6 from "../../../assets/image 6.png";

const Get = () => {
  return (
    <div className={scss.Get}>
      <div className="container">
        <div className={scss.action}>
          <div className={scss.Get_text}>
            <h1>
              Get Your <br />
              Payment Faster
            </h1>
            <p>
              Blinqpay helps businesses in Africa get paid by <br /> anyone,{" "}
              anywhere in the world
            </p>
            <button>Start Now</button>
          </div>
          <div className={scss.Get_img}>
            <img className={scss.img} src={logo6} alt="img" />
          </div>
            <img src={logo7} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Get;
