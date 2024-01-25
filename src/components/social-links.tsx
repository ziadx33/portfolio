import { Github, MessageCircle, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function SocialLinks() {
    return <div className="social-links flex gap-1">
        <Button className="w-10 p-0" title="github" asChild>
            <a target="_blank" href="https://github.com/TheGreatagen1"><Github className="w-6" /></a>
        </Button>
        <Button className="w-10 p-0" title="discord" asChild>
            <a target="_blank" href="https://discord.com/users/1191481986032861287"><MessageCircle className="w-6" /></a>
        </Button>
        <Button className="w-10 p-0" title="twitter" asChild>
            <a target="_blank" href="https://twitter.com/thegreatagen"><Twitter className="w-6" /></a>
        </Button>
    </div>
}