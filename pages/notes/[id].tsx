import React from 'react'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      Note { id } Page
    </div>
  )
}

