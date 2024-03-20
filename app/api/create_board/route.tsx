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

        if(data.new === true){
            let newTaskBoard = new taskBoard({
                BoardID: data.BoardID,
                BoardTitle: data.BoardTitle,
                BoardDesc: "Tasks to keep organised",
                Tasks: data.Tasks,
            })
    
            await newTaskBoard.save();
        } else {

            taskBoard.findOneAndUpdate(
                {BoardID: data.BoardID},
                {$push: {Tasks: data.Tasks[ data.Tasks.length - 1]}},
            ).then((doc) => {
                console.log(doc);
            }).catch((err) => {
                console.log(err);
            })
            
            console.log("Not New")
        }   
        

        return NextResponse.json({"msg": "New Board Saved"}, {status: 200});
    } catch (error) {
        
        console.log(error);

        return NextResponse.json({"msg": "Something Went Wrong"}, {status: 500});
    }
}