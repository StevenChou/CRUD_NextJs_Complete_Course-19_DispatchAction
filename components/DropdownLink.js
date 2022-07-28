import { forwardRef } from 'react'
import Link from 'next/link'

export default forwardRef(function DropdownLink(props, ref) {
  let { href, children, ...rest } = props

  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})
