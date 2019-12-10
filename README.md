## @liinkiing/use-mercure

[![Version](https://img.shields.io/npm/v/@liinkiing/use-mercure.svg)](https://npmjs.org/package/@liinkiing/use-mercure)
[![Downloads/week](https://img.shields.io/npm/dw/@liinkiing/use-mercure.svg)](https://npmjs.org/package/@liinkiing/use-mercure)
[![License](https://img.shields.io/npm/l/@liinkiing/use-mercure.svg)](https://github.com/Liinkiing/use-mercure/blob/master/package.json)

A hook to integrate  [Mercure](https://mercure.rocks/) EventSource in React.

## Installation
With yarn
```bash
$ yarn add @liinkiing/use-mercure
```

With npm
```bash
$ npm i @liinkiing/use-mercure
```

## Example
```typescript jsx
import React, { useState } from 'react';
import { MercureProvider, useMercure } from '@liinkiing/use-mercure';

interface MessageFromMercure {
  readonly id: string;
  readonly body: string;
}

type Messages = readonly MessageFromMercure[];

const Example: React.FC = () => {
  const [messages, setMessages] = useState<Messages>([]);

  // By using TypeScript generics, you have type-safety for the
  // data coming from your Mercure hub
  useMercure<MessageFromMercure>('http://example.com/topic', message => {
    setMessages([...messages, message]);
  }, [messages]); // array of deps

  return messages.length ? (
    <ul>
      {messages.map(message => (
        <li key={message.id}>{message.body}</li>
      ))}
    </ul>
  ) : (
    <p>No messages...</p>
  );
};

const App: React.FC = () => (
  <MercureProvider
    options={{
      hubUrl: 'http://yourmercure.hub/.well-known/mercure',
      withCredentials: true /* default to false */,
    }}
  >
    <Example />
  </MercureProvider>
);
```
