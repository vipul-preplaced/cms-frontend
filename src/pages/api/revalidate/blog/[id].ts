export default async function handler(req: any, res: any) {
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    await res.revalidate(`/blog/${parseInt(req.query.id)}`)
    return res.json({ success: `Successfully updated blog ${req.query.id}` })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}