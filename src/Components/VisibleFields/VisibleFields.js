import React from "react";
import "./VisibleFields.css";
import useImportScript from "../../utils/useImportScript";
export default function VisibleFields() {
  const [visible, setVisible] = React.useState(false);
  // useImportScript("/assets/vendor/wow/wow.min.js");

  return (
    <div>
      <li style={{ listStyle: "none" }}>
        <button className="BTN" onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>
        List me in blood donaion bank
      </li>
      {visible && (
        <div>
          <div className="input">
            <label for="regiState">Date Of Birth</label>
            <input type="date" name="regi_state" id="regiState" required />
          </div>
          <div className="input">
            <label for="regiCountry">Blood Group</label>
            <select class="select-donation-type" id="regiCountry">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="input">
            <label for="regiState">Last Bleed Date</label>
            <input type="date" name="regi_state" id="regiState" required />
          </div>
        </div>
      )}
    </div>
  );
}
// const root = document.querySelector('#root');
// ReactDOM.render(<VisibleFields />, root );
