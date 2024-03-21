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

        console.log(data);

        taskBoard.findOneAndUpdate(
            { 
              BoardID: data.boardID, 
              'Tasks.task_id': data.taskID
            }, 
            { 
              $set: { 
                'Tasks.$.task_title': data.title,
                'Tasks.$.desc': data.desc,
                'Tasks.$.icon': data.icon,
                'Tasks.$.status': data.status
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

/**
 *  task_id 3324315d-bce9-47e8-8f1d-fcc788a6cf74"
    task_title:"Task In Progress"
    desc:""
    icon:"clock"
    status:1
 */