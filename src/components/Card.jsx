import banner from '../assets/banner_spot_ladder.png'
import logo from '../assets/logo_spot_ladder.svg'

import { GithubLogo, ArrowRight  } from '@phosphor-icons/react'

import { motion } from 'framer-motion'

export default function Card(props){

	return (
		<motion.div 
			initial={{ opacity: 0, y: "25%" }}
        	whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className="p-6 rounded-xl overflow-hidden v-flex border-2 border-[black] max-w-[320px] m-auto mt-0"
		>

			<div className="rounded-xl shadow-xl">
				<img src={props['banner-url']} alt="" className="rounded-xl w-full aspect-square object-cover" />
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

			<p>
				{props.description}
			</p>

			<a href="#" className="w-fit h-flex mt-4 mr-auto font-medium">
				Visit
				<ArrowRight size={24} />
			</a>
		</motion.div>
	)
}