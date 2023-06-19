import Navbar from "./LocalNav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link,useLocation } from "react-router-dom";

const Localcities = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/weatherdata/data");
        setRows(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (city) => {
    console.log(city)
    try {
      await axios.delete(`http://localhost:8080/weatherdata/data/${city}`);
      setRows((prevRows) => prevRows.filter((row) => row.city !== city));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col  bg-gradient-to-t from-rose-500" >
      <Navbar />
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>City Name</TableCell>
              <TableCell align="right">Weather</TableCell>
              <TableCell align="right">Temperature (Celsius)</TableCell>
              <TableCell align="right">Humidity (%)</TableCell>
              <TableCell align="right">Wind Speed (km/h)</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No data found.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.city}>
                  <TableCell component="th" scope="row">
                    {row.city}
                  </TableCell>
                  <TableCell align="right">{row.weather}</TableCell>
                  <TableCell align="right">{row.temperature}</TableCell>
                  <TableCell align="right">{row.humidity}</TableCell>
                  <TableCell align="right">{row.windspeed}</TableCell>
                  <TableCell align="right">
                    <Link to={`/localcities/updatecity/${row.city}?name=${name}`}>
                      <button className="bg-gradient-to-br from-cyan-400 p-2 transition hover:scale-125 hover:bg-sky-500">
                        Edit
                      </button>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="p-2 bg-gradient-to-br from-red-700 transition hover:scale-125 hover:bg-rose-500"
                      onClick={() => handleDelete(row.city)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Localcities;
