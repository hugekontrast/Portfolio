import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

import { Circle, GithubLogo, ArrowRight  } from '@phosphor-icons/react'
import { cn } from '../util/cn.js'
import { motion } from 'framer-motion'

export default function Card(props){

	return (
		<motion.div 
			initial={{ opacity: 0, y: "25%" }}
        	whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className={cn("p-6 rounded-xl overflow-hidden bg-black text-white v-flex border-2 border-black w-full max-w-[420px] h-full m-auto mt-0 shadow-xl", props.last ? "col-span-2" : "")}
		>

			<div className="w-full overflow-hidden rounded-xl shadow-xl">
				<img src={props['banner-url']} alt="" className={cn("rounded-xl aspect-square object-cover", props.width === 'full' ? "w-full" : "w-16")} />
			</div>

			<div className="h-flex p-2 my-1 w-full">
				<h1 className="font-medium text-2xl v-flex">
					{props.title}
				</h1>

				<a href={props['github-url']} target="_blank" className="ml-auto cursor-pointer" >
				{
					props.logo ?
					props.logo
					:
					<GithubLogo />
				}
				</a>
			</div>

			<div className="w-full h-flex flex-wrap">
			{
				props.tags.map((i, ind) => (
					<p key={ind+''} className="pill">{i}</p>		
				))
			}
			</div>

			<p className="w-full my-4">
				{props.description}
			</p>

			<a href={props['app-url']} target="_blank" className="w-fit h-flex mr-auto font-medium">
				Visit
				<ArrowRight size={24} />
			</a>

			<Circle weight="fill" className="fill-green w-4 h-4 mt-auto" />

		</motion.div>
	)
}