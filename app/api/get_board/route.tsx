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

        //let currentTaskBoard;

        let currentTaskBoard =  await taskBoard.findOne({BoardID: data.BoardID}).then((docs) => {
            return docs;
        }).catch((err) => {
            console.log(err);
            return "Failed to find docs"
        })
        

        return NextResponse.json({currentTaskBoard}, {status: 200});
    } catch (error) {
        
        console.log(error);

        return NextResponse.json({"msg": "Something Went Wrong"}, {status: 500});
    }
}