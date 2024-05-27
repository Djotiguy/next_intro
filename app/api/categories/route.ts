import { Category } from "@/types";
import { NextResponse } from "next/server";

const CATEGORIES: Category[] = [
    { id: 1, name: "React", slug: "react" },
    { id: 2, name: "Next.js", slug: "nextjs" },
    { id: 3, name: "React Native", slug: "reactnative" },
    { id: 4, name: "CSS", slug: "css" },
    { id: 5, name: "Javascript", slug: "Javascript" },
];

export const GET = async () => {
    return NextResponse.json(CATEGORIES, { status: 200 });
}

  
  