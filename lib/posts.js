export const posts = [
  {
    slug: 'my-first-post',
    title: 'My First Blog Post',
    date: 'October 29, 2025',
    excerpt: 'This is a short excerpt for my first blog post. It talks about the exciting journey of learning new technologies.',
    content: 'My First Post'
  },
  {
    slug: 'test-post',
    title: 'Test Post',
    date: 'October 29, 2025',
    excerpt: 'This is a test post.',
    content: `## This is a test post

This is a paragraph with some **bold** and *italic* text.

### Here is a list:

- Item 1
- Item 2
- Item 3`
  },
  {
    slug: 'long-post-for-testing',
    title: 'A Comprehensive Guide to Markdown',
    date: 'October 29, 2025',
    excerpt: 'A deep dive into the syntax and features of Markdown, a lightweight markup language.',
    content: `# A Comprehensive Guide to Markdown

Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supported HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Headings

Headings are created by prefixing a line with one or more '#' characters.

# This is a Heading 1
## This is a Heading 2
### This is a Heading 3
#### This is a Heading 4
##### This is a Heading 5
###### This is a Heading 6

## Text Formatting

You can make text **bold** or *italic*.

**This is bold text.**

*This is italic text.*

***This is bold and italic text.***

## Blockquotes

Blockquotes are created by prefixing a line with '> '.

> This is a blockquote. It's a great way to emphasize a section of text.
>
> > This is a nested blockquote.

## Lists

### Unordered Lists

Unordered lists are created by prefixing a line with '*', '-' or '+'.

- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
- Item 3

### Ordered Lists

Ordered lists are created by prefixing a line with a number followed by a period.

1. First item
2. Second item
3. Third item

## Code

### Inline Code

You can format code inline by wrapping it in backticks: \`console.log('Hello, World!');\`

### Code Blocks

You can create a fenced code block by wrapping your code in triple backticks. You can also specify the language for syntax highlighting.

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
\`\`\`

\`\`\`python
def hello_world():
    print("Hello, world!")

hello_world()
\`\`\`

## Links

You can create a link by wrapping the link text in brackets and the URL in parentheses.

[Visit Google](https://www.google.com)

## Images

You can embed an image by adding an exclamation mark, followed by alt text in brackets, and the path or URL to the image in parentheses.

![A random image from Picsum](https://picsum.photos/seed/picsum/800/400)
`
  }
];
