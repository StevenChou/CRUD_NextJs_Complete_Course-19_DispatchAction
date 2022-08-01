import cookie from 'cookie'

// 應該不用跟 strapi 說，要消滅 Token 了
// 因為 client 的 Token 已經被消滅
import { API_URL } from '@/config/index'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Destroy cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/',
      })
    )

    res.status(200).json({ message: 'Success' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
