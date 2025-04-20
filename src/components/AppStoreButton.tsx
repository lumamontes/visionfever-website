import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const ApplyRoleButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.formUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-black bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
            <div className="-mt-1 font-sans text-xl font-semibold">
                Apply for role
            </div>
            </button>
        </a>
    )
}

export default ApplyRoleButton