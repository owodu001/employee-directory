//references: https://npm.runkit.com/react-bootstrap-table-next
// example of how to use bootstrap table
//gist.github.com/xabikos/fcd6e709f8ae0c11e33b

import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import TableHeaderColumn from "react-bootstrap-table-next";
import API from "../utils/API";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

// const data = [
//   {
//     id: 0,
//     name: "banana",
//     price: "0.25"
//   },
//   {
//     id: 1,
//     name: "spinach",
//     price: "4.49"
//   },
//   {
//     id: 2,
//     name: "icecream",
//     price: "4.99"
//   },
//   {
//     id: 3,
//     name: "bagel",
//     price: "1.19"
//   },
//   {
//     id: 4,
//     name: "fish",
//     price: "10.00"
//   }
// ];

// const columns = [
//   {
//     dataField: "id",
//     hidden: true
//   },
//   {
//     dataField: "name",
//     text: "Grocery"
//   },
//   {
//     dataField: "price",
//     text: "Price"
//   }
// ];

const columns = [
  {
    dataField: "email",
    text: "Email",
    hidden: false,
    sort: true
  },
  {
    dataField: "firstname",
    text: "First",
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "lastname",
    text: "Last",
    sort: true
  }
];
// function NextComponent() {
//   return <BootstrapTable keyField="id" data={data} columns={columns} />;
// }

class NextComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    // this.state = {
    //   items: [],
    //   totalSize: 0,
    //   page: 1,
    //   sizePerPage: 10
    // };
    this.fetchData = this.fetchData.bind(this);

    // this.handlePageChange = this.handlePageChange.bind(this);
    // this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // page = this.state.page, sizePerPage = this.state.sizePerPage
    //   fakeDataFetcher.fetch(page, sizePerPage)
    //     .then(data => {
    //       this.setState({items: data.items, totalSize: data.total, page, sizePerPage});
    //     });
    // this.setState({ items: data, totalSize: 3, sizePerPage: 3 });
    const self = this;

    API.search().then(function(data) {
      console.log(data.data.results);
      const items = data.data.results;

      console.log(items);

      const people = items.map((current, index, arr) => {
        return {
          firstname: current.name.first,
          lastname: current.name.last,
          email: current.email
        };
      });

      self.setState({ items: people });
    });
  }

  handlePageChange(page, sizePerPage) {
    // this.fetchData(page, sizePerPage);
  }

  handleSizePerPageChange(sizePerPage) {
    // When changing the size per page always navigating to the first page
    // this.fetchData(1, sizePerPage);
  }

  render() {
    // const options = {
    //   onPageChange: this.handlePageChange,
    //   onSizePerPageList: this.handleSizePerPageChange,
    //   page: this.state.page,
    //   sizePerPage: this.state.sizePerPage
    // };

    return (
      <BootstrapTable
        keyField="email"
        data={this.state.items}
        columns={columns}
        filter={filterFactory()}
      >
        <TableHeaderColumn dataField="email" isKey dataAlign="center">
          Email
        </TableHeaderColumn>
        <TableHeaderColumn dataField="firstname" dataAlign="center">
          Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="lastname" dataAlign="center">
          Surname
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default NextComponent;
