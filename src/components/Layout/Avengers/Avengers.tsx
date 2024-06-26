import scss from "./Avengers.module.scss";
import land from "../../../assets/land.svg";
import aven from "../../../assets/avenger.svg";
import etsy from "../../../assets/etsy.svg";
import lin from "../../../assets/in.svg";
import tiktok from "../../../assets/tiktok.svg";
import row from "../../../assets/row.svg";
import phone from "../../../assets/phone.png";
import peoples from "../../../assets/peoples.png";
import mask from "../../../assets/Mask Group.png";

const Avengers = () => {
  return (
    <div className={scss.avengers}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.imgs}>
            <img src={land} alt="img" />
            <img src={aven} alt="img" />
            <img src={etsy} alt="img" />
            <img src={lin} alt="img" />
            <img src={tiktok} alt="img" />
          </div>
          <div className={scss.Alls}>
            <div className={scss.All1}>
              <div className={scss.Text}>
                <h4>CREDIT CARD</h4>
                <h1>
                  Payment <br />
                  Gets Easier
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                  nulla sem adipiscing inw
                </p>
                <button>
                  Learn more <img src={row} alt="" />
                </button>
              </div>
              <img src={phone} alt="img" />
            </div>
            <div className={scss.All2}>
              <img src={peoples} alt="img" />

              <div className={scss.Text}>
                <h4>CREDIT CARD</h4>
                <h1>
                  Payment <br />
                  Gets Easier
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                  nulla sem adipiscing inw
                </p>
                <button>
                  Learn more <img src={row} alt="" />
                </button>
              </div>
            </div>
            <div className={scss.All3}>
             
              <div className={scss.Text}>
                <h4>CREDIT CARD</h4>
                <h1>
                  Payment <br />
                  Gets Easier
                </h1>
                <p>
                  Hac sem ut eget tellus diam convallis lacus a, interdum <br />{" "}
                  nulla sem adipiscing inw
                </p>
                <button>
                  Learn more <img src={row} alt="" />
                </button>
              </div>
              <img src={mask} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avengers;
