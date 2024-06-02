import { NextResponse } from "next/server";
import Post from "app/models/Post";
import connectDB from "app/lib/db";

export const GET = async (request, {params}) => {
    const {id} = params;
    try {
        // Connect to MongoDB
        await connectDB();

        // Fetch post from the database by its ID
        const post = await Post.findById(id);

        // Check if the post exists
        if (!post) {
            return new NextResponse({ error: "Post not found" }, { status: 404 });
        }

        // Map post to include creator's information
        const postWithCreator = {
            ...post.toObject(),
            creator: {
                username: post.username,
                email: post.email
            }
        };

        // Return JSON response with the fetched post
        return new NextResponse(JSON.stringify(postWithCreator), { status: 200 });

    } catch (error) {

        // Return an informative error response
        return new NextResponse({ error: "Failed to fetch post" }, { status: 500 });
    }
};

export const DELETE = async (request, {params}) => {
    const {id} = params;
    try {
        // Connect to MongoDB
        await connectDB();

        // Find and delete the post by its ID
        const deletedPost = await Post.findByIdAndDelete(id);

        // Check if the post exists
        if (!deletedPost) {
            return new NextResponse({ error: "Post not found" }, { status: 404 });
        }

        // Return JSON response indicating successful deletion
        return new NextResponse("Post has been deleted successfully", { status: 200 });

    } catch (error) {

        // Return an informative error response
        return new NextResponse({ error: "Failed to delete post" }, { status: 500 });
    }
};
