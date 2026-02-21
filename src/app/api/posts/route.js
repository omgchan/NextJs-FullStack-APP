import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        await connect();
        const posts = await Post.find();


        return new NextResponse(JSON.stringify(posts), { status: 200 });
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }




    
}