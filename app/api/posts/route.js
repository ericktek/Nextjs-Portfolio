import { NextResponse } from "next/server";
import Post from "@/app/models/Post";
import connectDB from "@/app/lib/db";

export const GET = async (request) => {
    
    try {
        // Connect to MongoDB
        await connectDB();

        // Fetch posts from the database
        const posts = await Post.find();

        // Return JSON response with fetched posts
        return new NextResponse(JSON.stringify(posts), { status: 200 });

    } catch (error) {
        // Log the error for debugging purposes
        console.log("Error fetching posts:", error);

        // Return an informative error response
        return new NextResponse({ error: "Failed to fetch posts" }, { status: 500 });
    }
};
