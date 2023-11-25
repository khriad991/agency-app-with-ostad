import {NextResponse} from "next/server";

export  async function POST(req,res){
    const jsonBody = req.json();
    try{
        const rawResponse = await fetch(`${process.env.BASE_URL}api/CreateContact`,jsonBody);

        return NextResponse.json({status:"success"})

    }catch (e) {
        return NextResponse.json(e)
    }
}