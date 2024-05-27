import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10">
    <h1 className="text-5xl">Login page</h1>
    <div className="flex flex-col mt-5 gap-4">
      <Button>
        <Github size={24} />
        Signin with Github
      </Button>
      <Button>
        <Mail size={24} />
        Signin with Google
      </Button>
    </div>      
    </main>
  );
}
