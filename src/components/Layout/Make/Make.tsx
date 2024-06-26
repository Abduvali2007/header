import scss from "./Make.module.scss";
import man from "../../../assets/man.svg";
import analize from "../../../assets/analize.svg";
import cash from "../../../assets/cash.svg";
import task from "../../../assets/tasks.svg";
import row from "../../../assets/row.svg";

const Make = () => {
  return (
    <div className={scss.Make}>
      <div className="container">
        <div className={scss.action}>
          <div className={scss.Make_Text1}>
            <div className={scss.cub1}>
              <img src={man} alt="img" />
              <h3>Easy Access</h3>
              <p>Now track all of your transaction easily.</p>
            </div>
            <div className={scss.cub1}>
              <img src={analize} alt="img" />
              <h3>Use You Connect</h3>
              <p>Now track all of your transaction easily.</p>
            </div>
          </div>
          <div className={scss.Make_Text2}>
            <div className={scss.cub1}>
              <img src={cash} alt="img" />
              <h3>Cashflow Visiblity</h3>
              <p>Now track all of your transaction easily.</p>
            </div>
            <div className={scss.cub1}>
              <img src={task} alt="img" />
              <h3>Manage Invoicing</h3>
              <p>Now track all of your transaction easily.</p>
            </div>
          </div>
          <div className={scss.Make_Text3}>
            <h1>Make & Share  <span>Payments</span> <br /> With Community</h1>
            <p>Hac sem ut eget tellus diam convallis lacus a, interdum  <br />nulla sem adipiscing inw</p>
            <button>Learn more <img src={row} alt="img" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Make;
