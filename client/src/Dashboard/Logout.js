import React from "react";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

export default function Logout(){
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate('/login');
    }
    return(
    <>
        <button className="logoutBut" onClick={handleClick}><LoginIcon fontSize={"large"} /></button>
    </>
    )
}