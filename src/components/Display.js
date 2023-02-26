import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import "../App.css";

const apiResponse = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const Display = () => {
    return (
        <div className="button-container">
            <Button onClick={apiResponse} className="btn" variant="outlined">
                Export
            </Button>
            <Button onClick={apiResponse} className="btn" variant="outlined">
                Export
            </Button>
        </div>
    );
};

export default Display;
