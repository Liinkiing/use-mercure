import { DependencyList, useContext, useEffect, useMemo } from 'react'
import { MercureContext } from '../providers/mercure'

const useMercure = <D>(topic: string, onData: (data: D) => void, deps: DependencyList = []) => {
  if (!(process as any).browser) return
  const { hubUrl, withCredentials } = useContext(MercureContext)
  const eventSource = useMemo(() => new EventSource(
      `${hubUrl}?topic=${encodeURIComponent(topic)}`,
      { withCredentials }
  ), [hubUrl, topic])
  useEffect(() => {
    eventSource.onmessage = event => {
      try {
        onData(JSON.parse(event.data) as D)
      } catch (error) {
        onData(event.data as D)
      }
    }
    return () => {
      eventSource.onmessage = null
    }
  }, deps)
  useEffect(() => {
    return () => {
      eventSource.close()
    }
  }, [])
}

export default useMercure
