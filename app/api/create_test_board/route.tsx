import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { taskBoard } from "../Schemas";



export async function POST(request: Request){

    try {
        let mongo_uri:string | undefined = process.env.NEXT_PUBLIC_MONGO_URI;

        if(mongo_uri != undefined){
            await mongoose.connect(mongo_uri);
        }

        let data = await request.json();

        //console.log(data.board_id);

        let newTaskBoard = new taskBoard({
            BoardID: data.board_id,
            BoardName: "My Task Board",
            BoardDesc: "Tasks to keep organised",
            Tasks: [{
                name: data.name,
                desc: data.desc,
                icon: data.icon,
                status: data.status,
            }],
        })

        await newTaskBoard.save();

        return NextResponse.json({"msg": "New Board Saved"}, {status: 200});
    } catch (error) {
        
        console.log(error);

        return NextResponse.json({"msg": "Something Went Wrong"}, {status: 500});
    }
}