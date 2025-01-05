import Image from 'next/image'
import React from 'react'
import { HeaderItem } from './HeaderItem'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'


export default function Header() {
	return (
		<div>
			<header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
				<div className='flex flex-grow justify-evenly max-w-2xl'>
					<HeaderItem title='HOME' Icon={HomeIcon} />
					<HeaderItem title='TREANDING' Icon={LightningBoltIcon} />
					<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
					<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
					<HeaderItem title='SEARCH' Icon={SearchIcon} />
					<HeaderItem title='ACCOUNT' Icon={UserIcon} />
				</div>

				<Image
					className='object-contain'
					src="/images/logo/logo.png"
					alt="Picture of the author"
					width={150}
					height={30}
				/>
			</header>

		</div>
	)
}
