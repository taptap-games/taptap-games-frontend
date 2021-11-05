import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export const docsDir = join(process.cwd(), 'docs')
export const ppDocPath = join(docsDir, `pp.md`)
export const tosDocPath = join(docsDir, `tos.md`)

export function getDocByPath(path, fields = []) {
    const fileContents = fs.readFileSync(path, 'utf8')
    const { data, content } = matter(fileContents)
    const result = {}

    fields.forEach((field) => {
        if (field === 'slug') {
            result[field] = data[field]
        }

        if (field === 'content') {
            result[field] = content
        }

        if (data[field]) {
            result[field] = data[field]
        }
    })

    return result
}
