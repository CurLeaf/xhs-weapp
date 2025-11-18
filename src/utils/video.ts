type WxVideoType = 'main' | 'guest'

interface WxVideoParsed {
  type: WxVideoType
  feedId?: string
  finderUsername?: string
  feedToken?: string
}

export function parseWxVideo(url: string): WxVideoParsed | null {
  const trimmed = url.trim()

  // main 模式: wxvideo://main/{feed-id}/{finder-username}
  const mainMatch = /^wxvideo:\/\/main\/([^/]+)\/([^/]+)$/.exec(trimmed)
  if (mainMatch) {
    const [, encodedFeedId, encodedFinderUsername] = mainMatch
    return {
      type: 'main',
      feedId: decodeURIComponent(encodedFeedId),
      finderUsername: decodeURIComponent(encodedFinderUsername),
    }
  }

  // guest 模式: wxvideo://guest/{feed-token}
  const guestMatch = /^wxvideo:\/\/guest\/([^/]+)$/.exec(trimmed)
  if (guestMatch) {
    const [, encodedFeedToken] = guestMatch
    return {
      type: 'guest',
      feedToken: decodeURIComponent(encodedFeedToken),
    }
  }

  return null
}

// 序列化
export function serializeWxVideo(parsed: WxVideoParsed): string {
  if (parsed.type === 'main' && parsed.feedId && parsed.finderUsername) {
    return `wxvideo://main/${encodeURIComponent(parsed.feedId)}/${encodeURIComponent(parsed.finderUsername)}`
  }
  if (parsed.type === 'guest' && parsed.feedToken) {
    return `wxvideo://guest/${encodeURIComponent(parsed.feedToken)}`
  }
  throw new Error('Invalid WxVideoParsed object')
}
/*
// 示例
const url1 = serializeWxVideo({
  type: 'main',
  feedId: 'abc-123-xyz',
  finderUsername: 'user/456',
})
console.log(url1)
// wxvideo://main/abc-123-xyz/user%2F456

console.log(parseWxVideo(url1))
// { type: 'main', feedId: 'abc-123-xyz', finderUsername: 'user/456' }

const url2 = serializeWxVideo({
  type: 'guest',
  feedToken: 'token-7/89',
})
console.log(url2)
// wxvideo://guest/token-7%2F89

console.log(parseWxVideo(url2))
// { type: 'guest', feedToken: 'token-7/89' }
 */
