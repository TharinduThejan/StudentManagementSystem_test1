import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getStudents,deleteStudent } from "./api";

function StudentList() {
    const [students,setStudents]=useState([]);
    useEffect(()=>
    {
        loadStudents();

    },[]);
    const loadStudents=async()=>
    {
        const res = await getStudents();
        setStudents(res.data);
    };
    const handleDelete=async(id)=>
    {
        await deleteStudent(id);
        loadStudents();
    };
    return(
        <div className="container">
            <button onClick={()=>navigate("/add")} className="mb-"
        </div>
    )

}