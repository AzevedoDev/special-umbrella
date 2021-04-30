import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.isFallback
    if (router.asPath === '/') router.push('concurso/mega-sena')
    if (router.asPath === '') router.push('/concurso/mega-sena')
  }, [router])

  return null
}
