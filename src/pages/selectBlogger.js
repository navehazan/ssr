import React, { useState } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import columns from "../constants/columns";
import { Checkbox, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import getEmails from "../utils/getEmails";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
  button: {
    textDecoration: "none",
    margin: "10px",
  },
}));

const SelectBlogger = ({ bloggers }) => {
  const [state, setState] = useState([]);
  const classes = useStyles(state);

  const sendEmail = async () => {
    const emails = getEmails(state, bloggers);
    try {
      await axios.post("http://localhost:3000/bloggers", emails);
      console.log(emails);
    } catch (e) {
      console.log(e);
    }
    setState([]);
  };

  const toggleBlogger = (rowData) => {
    const {
      tableData: { id },
    } = rowData;
    let selectedBloggers = [...state];
    if (selectedBloggers.includes(id)) {
      selectedBloggers = selectedBloggers.filter(
        (selectedBlogger) => selectedBlogger !== id
      );
    } else {
      selectedBloggers.push(id);
    }
    setState(selectedBloggers);
  };

  return (
    <div className={classes.container}>
      <MaterialTable
        title={"Active Bloggers"}
        options={{ sorting: true, search: false, filtering: true }}
        columns={columns}
        data={bloggers}
        actions={[
          {
            icon: () => null,
            onClick: () => null,
          },
        ]}
        components={{
          Action: (props) => {
            return (
              <Checkbox
                checked={state.includes(props.data.tableData.id)}
                onChange={() => toggleBlogger(props.data)}
              />
            );
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendEmail}
        className={classes.button}
      >
        Share Task
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bloggers: state.bloggers,
});

export default connect(mapStateToProps)(SelectBlogger);
