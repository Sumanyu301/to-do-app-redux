import React from "react";
import Header from "./Header";
import InputWithButton from "../ui/InputWithButton";
import { useSelector } from "react-redux"
import ShowTodo from "./ShowTodo";
const Body = () => {
    return (
        <>
        <div className=" max-w-screen-2xl">
            <Header></Header>
            <InputWithButton></InputWithButton>
            <div className=" h-10 bg-zinc-900"></div>
            <ShowTodo></ShowTodo>
        </div>
        </>
    )
}

export default Body;