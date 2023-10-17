"use client"

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data} = useSession()
  console.log(data)
  return (
    <div>{data?.user?.name}</div>
  )
}
