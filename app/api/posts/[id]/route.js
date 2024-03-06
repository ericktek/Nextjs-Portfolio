import { NextResponse } from "next/server";
import Post from "@/app/models/Post";
import connectDB from "@/app/lib/db";

export const GET = async (request, {params}) => {
    const {id} = params;
    try {
        // Connect to MongoDB
        await connectDB();

        // Fetch posts from the database
        const post = await Post.findById(id);

        // Return JSON response with fetched posts
        return new NextResponse(JSON.stringify(post), { status: 200 });

    } catch (error) {
        // Log the error for debugging purposes
        console.log("Error fetching posts:", error);

        // Return an informative error response
        return new NextResponse({ error: "Failed to fetch post" }, { status: 500 });
    }
};
