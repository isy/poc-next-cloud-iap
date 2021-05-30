import type { NextPage } from 'next'
import Link from 'next/link'

const Admin: NextPage = () => {
    return (
        <div>
            <p>hello</p>
            <Link href="/page2">
                <a>page2</a>
            </Link>
        </div>
    )
}

export default Admin

