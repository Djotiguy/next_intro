import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

export const GET = async (req: Request, {params}: {params: {slug: string}} ) => {
    const { slug } = params;

    try {

        const post = await prisma.post.update({
            where : {slug},
            data: {view: {increment: 1}},
        });



        if (post) {
            return NextResponse.json(post, { status: 200 });
        } else {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

    } catch (error) {

        return NextResponse.json({error: "Something went wrong"}, {status: 500}); 
        
    }

}
