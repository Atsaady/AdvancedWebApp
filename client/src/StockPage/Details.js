import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import "./StockPage.scss";

function retrieveData(stockName) {
  return fetch(`http://localhost:5000/stocks/${stockName}`).then((response) =>
    response.json()
  );
}

function valueConvertor(value) {
  if (value > 1000000000000)
    return Math.round(value / 1000000000000, 2) + " Trillion";
  if (value > 1000000000) return Math.round(value / 1000000000, 2) + " Billion";
  if (value > 1000000) return Math.round(value / 1000000, 2) + " Million";
  if (value > 1000) return Math.round(value / 1000, 2) + " Thousand";
}

const DividerExampleHorizontalTable = ({ stockName }) => {
  const [stockDetails, setStockDetails] = React.useState(null);
  React.useEffect(() => {
    if (stockName !== "") {
      console.log("fetching...");
      retrieveData(stockName).then((data) => setStockDetails(data));
    }
  }, [stockName]);
  console.log(stockDetails);

  if (stockName === null || stockDetails === null) return "";

  return (
    <div className={"details"}>
      <Header as="h3" dividing>
        Fundamentals
      </Header>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Name</Table.Cell>
            <Table.Cell>{stockDetails.Name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Symbol</Table.Cell>
            <Table.Cell>{stockDetails.Symbol}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Country</Table.Cell>
            <Table.Cell>{stockDetails.Country}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Revenue</Table.Cell>
            <Table.Cell>{valueConvertor(stockDetails.RevenueTTM)}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Market Value</Table.Cell>
            <Table.Cell>
              {valueConvertor(stockDetails.MarketCapitalization)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Employees</Table.Cell>
            <Table.Cell>
              {valueConvertor(stockDetails.FullTimeEmployees)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sector</Table.Cell>
            <Table.Cell>{stockDetails.Sector}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Industry</Table.Cell>
            <Table.Cell>{stockDetails.Industry}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Stock Rank</Table.Cell>
            <Table.Cell>{stockDetails.stockrank}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Company Rank</Table.Cell>
            <Table.Cell>{stockDetails.companyrank}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default DividerExampleHorizontalTable;
