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

        taskBoard.findOneAndUpdate(
            { 
              BoardID: data.boardID, 
            }, 
            { 
                $pull: { 
                    'Tasks': { task_id: data.taskID }
                }
            }, 
            { new: true }, 
        ).then((doc) => {
            console.log(doc);
        }).catch((err) => {
            console.log(err);
        })

        return NextResponse.json({"msg": "New Board Saved"}, {status: 200});
    } catch (error) {
        
        console.log(error);

        return NextResponse.json({"msg": "Something Went Wrong"}, {status: 500});
    }
}