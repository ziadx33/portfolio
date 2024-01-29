"use client"
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { FormEvent, useState } from "react";

export default function Contact() {
    const [isSending, setIsSending] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setSucces] = useState(false)
    async function contactFormSubmit(e: FormEvent) {
        e.preventDefault()
        setIsSending(true)
        setIsError(false)
        const formData = new FormData(e.target as HTMLFormElement)
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const body = formData.get("body") as string
        const subject = formData.get("subject") as string
        const res = await axios.post("https://formspree.io/f/mgegorre", { name, email, subject, body })
        setSucces(res.status === 200)
        setIsSending(false)
    }
    return <section className="w-full h-[60vh] mt-20 px-12 flex" id="contact">
        <form onSubmit={contactFormSubmit} className="w-2/4 h-full flex flex-col gap-4 items-center p-6">
            <Input placeholder="Your name" type="text" name="name" />
            <Input placeholder="Your Email" type="email" name="email" />
            <Input placeholder="Subject" type="string" name="subject" />
            <Textarea placeholder="How can I help?" name="body" className="min-h-36 max-h-72" />
            <div className="flex gap-1">
                <Button disabled={isSending} type="submit" className="w-[33rem]" >{!isSuccess ? !isError ? !isSending ? "Let's get in touch" : "Sending..." : "error! try again" : "Thank you, email sent!"} </Button>
                <SocialLinks />
            </div>
        </form>
        <div className="w-4/5 h-full flex flex-col justify-start items-start p-4">
            <h1 className="text-6xl font-bold mb-6">Let&apos;s work together!</h1>
            <p className="text-gray-500 w-[70%]">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <ul className="text-xl mt-12">
                <li>email: <span className="select-text">hatemziad384@gmail.com</span></li>
                <li>phone: <span className="select-text">01117351878</span></li>
            </ul>
        </div>
    </section>
}
