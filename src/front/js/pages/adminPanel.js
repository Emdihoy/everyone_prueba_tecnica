import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { LandingHeader } from '../pages/landingHeader'
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const AdminPanel = () => {
	const { store, actions } = useContext(Context);

      
	return (
		<>
            <LandingHeader />
            
		</>
	);
};