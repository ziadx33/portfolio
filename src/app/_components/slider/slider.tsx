import React, { useState } from "react";

import "./slider.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Slider({
	images,
	className,
}: {
	images: string[];
	className?: string;
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	const slideNext = () => {
		setActiveIndex((val) => {
			if (val >= images.length - 1) {
				return 0;
			} else {
				return val + 1;
			}
		});
	};

	const slidePrev = () => {
		setActiveIndex((val) => {
			if (val <= 0) {
				return images.length - 1;
			} else {
				return val - 1;
			}
		});
	};

	return (
		<div
			className={cn(
				"flex relative overflow-x-hidden w-fit",
				className,
			)}
		>
			{images.map((image) => {
				return (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						key={image}
						src={image}
						alt={image}
						style={{
							transform: `translateX(${
								-100 * activeIndex
							}%)`,
						}}
						className={cn(
							"transition-all duration-300 object-cover object-top !size-full",
						)}
					/>
				);
			})}

			{images.length > 1 && (
				<>
					<Button
						variant="outline"
						size="icon"
						className="rounded-full absolute right-3 top-1/2 -translate-y-1/2"
						onClick={slideNext}
					>
						<ArrowRight />
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="rounded-full absolute left-3 top-1/2 -translate-y-1/2"
						onClick={slidePrev}
					>
						<ArrowLeft />
					</Button>
				</>
			)}
		</div>
	);
}

export default Slider;
