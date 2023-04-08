import React from 'react'

export default function Heading(props) {
  return (
    <>
    <div className="text-7xl text-center font-cabin font-bold">{props.title}</div>
			<div className="grid grid-cols-12">
				<div className="col-span-1"></div>
				<div className="col-span-10">
					<p className="text-base font-worksans text-center mt-4 text-[#5c5c5c]">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s....
					</p>
				</div>
				<div className="col-span-1"></div>
			</div>
            </>
  )
}
