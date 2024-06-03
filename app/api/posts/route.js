import { NextResponse } from "next/server";
import Post from "app/models/Post";
import connectDB from "app/lib/db";

export const GET = async (request) => {

    const url = new URL(request.url);

    const username = url.searchParams.get("username")

    try {
        // Connect to MongoDB
        await connectDB();

        const posts = await Post.find(username && {username}).sort({ createdAt: -1 });

        console.log(posts);

        // Map posts to include creator's information
      const postsWithCreator = posts.map(post => ({
        ...post.toObject(),
        creator: {
            username: post.username,
            email: post.email
        }
      }));
      
        // Return JSON response with fetched posts
        return new NextResponse(JSON.stringify(postsWithCreator), { status: 200 });

    } catch (error) {

        // Return an informative error response
        return new NextResponse({ error: "Failed to fetch posts" }, { status: 500 });
    }
};


export const POST = async (request) => {

    const body = await request.json()


    const newPost = new Post(body)

    try {
        // Connect to MongoDB
        await connectDB();

        await newPost.save()

        // Return JSON response with fetched posts
        return new NextResponse("Post has been created", { status: 201  });

    } catch (error) {

        // Return an informative error response
        return new NextResponse({ error: "Failed to fetch posts" }, { status: 500 });
    }
};