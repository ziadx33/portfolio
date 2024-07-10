"use client";
import Image from "next/image";
import Stats from "./_components/stats/stats";
import SocialLinks from "@/components/social-links";
import LoadingPage from "./loading-page";
import { useEffect } from "react";
import axios from "axios";
import { useStats } from "@/store";

export default function Hero() {
	const { setStats, isLoading: isStatsLoading } = useStats((store) => store);
	useEffect(() => {
		(async () => {
			if (isStatsLoading === false) return;
			const github = await axios.get<{ public_repos: number }>(
				"https://api.github.com/users/ziadx33",
			);
			setStats({
				github: github.data.public_repos,
			});
		})();
	}, [setStats, isStatsLoading]);
	return (
		<div>
			<LoadingPage
				section="hero"
				loadings={[{ name: "stats", status: isStatsLoading }]}
			/>
			<section
				id="hero"
				className="w-full md:h-screen h-screen flex items-center"
			>
				<div className="container h-full mx-auto flex items-start gap-12 pt-32 md:pt-34">
					<div className="text flex items-start flex-col lg:w-2/3 w-full">
						<h1 className="title leading-tight lg:text-6xl lg:mx-0 mx-auto w-fit lg:text-start text-center text-4xl mb-6 dark:text-gray-200">
							Hi, I&apos;m{" "}
							<span className="font-bold">
								Ziad Hatem.
							</span>
							<br />
							<span className="font-bold">
								Frontend
							</span>{" "}
							Developer,
							<br />
							based in{" "}
							<span className="font-bold">Egypt</span>.
						</h1>
						<p className="w-[80%] lg:mx-0 lg:text-start  mx-auto text-center text-gray-500  dark:text-slate-400">
							Hi, my name is Ziad Hatem, I&apos;m a
							frontend developer, I build web applications,
							I love to learn new technologies, I wanna be
							a Full Stack web developer, I have been as a
							front-end for 2 years, worked in 2 companies,
							and I love to share my knowledge.
						</p>
						<Stats />
						<div className="lg:w-fit w-full flex justify-center mt-6">
							<SocialLinks />
						</div>
					</div>
					<Image
						draggable="false"
						width={900}
						height={900}
						src="/profile.png"
						alt="profile pic"
						className="lg:inline h-[500px] hidden object-cover"
					/>
				</div>
			</section>
		</div>
	);
}
