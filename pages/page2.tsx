import type { NextPage } from 'next'
import Link from 'next/link'

const Page2: NextPage = () => {
    return (
        <div>
            <p>page2</p>
            <Link href="/">
                <a>top</a>
            </Link>
        </div>
    )
}

export default Page2

