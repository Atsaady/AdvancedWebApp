import React, { useLayoutEffect, useRef, useState } from "react";
// Components imports
import LineChart from "./Plots/LineChart";
import CandleStickChart from "./Plots/CandleStickChart";
// Material UI imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { financialItemStyle } from "./styles/financialItemStyle";
// Redux imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFinancialItem } from "../../actions/financialItem";

const FinancialItem = ({
  stockName,
  financialItem: { financialItem },
  getFinancialItem,
}) => {
  const classes = financialItemStyle();
  const [typeOfChart, setTypeOfChart] = useState("line");
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      getFinancialItem(stockName);
      return;
    }
  }, []);

  const handleChartChange = (e) => {
    setTypeOfChart(e.target.value);
  };

  const displayTheRightPlot = () => {
    console.log(financialItem);
    switch (typeOfChart) {
      case "line":
        return (
          <LineChart
            color="green"
            financialItem={financialItem}
            financialItemName={financialItem.symbol}
          />
        );
      case "candlestick":
        return (
          <CandleStickChart
            financialItem={financialItem}
            financialItemName={financialItem.symbol}
          />
        );
      default:
        return (
          <LineChart
            color="green"
            financialItem={financialItem}
            financialItemName={financialItem.symbol}
          />
        );
    }
  };

  return (
    <div className="financial-item-big-wrapper" style={{ marginLeft: "100px" }}>
      <div>{financialItem ? displayTheRightPlot() : null}</div>
      <div>
        {financialItem ? (
          <FormControl
            className={classes.formControl}
            id="stock-type-of-chart-form-control"
          ></FormControl>
        ) : null}
      </div>
    </div>
  );
};

FinancialItem.propTypes = {
  financialItem: PropTypes.object.isRequired,
  getFinancialItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  financialItem: state.financialItem,
});

export default connect(mapStateToProps, { getFinancialItem })(FinancialItem);
