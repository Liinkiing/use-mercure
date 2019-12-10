import { createContext, createElement } from 'react'

interface ProviderOptions {
  hubUrl: string,
  withCredentials?: boolean
}

interface Props {
  options: ProviderOptions
}

export const MercureContext = createContext<ProviderOptions>({
  hubUrl: '',
  withCredentials: false
})

const MercureProvider: React.FC<Props> = props => {
  const { options: { hubUrl, withCredentials = false }, children } = props

  return createElement(MercureContext.Provider, { value: { hubUrl, withCredentials } }, children)
}

export default MercureProvider
