import React from "react";
import "./spinner.css";

export default function Loading() {
    return (
        <div className="spinner-container text-center">
            <div className="lds-dual-ring">
            </div>
        </div>
    );
}