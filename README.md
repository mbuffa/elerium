# Elerium
Elerium is a template for building your own personal page.

## Why Elerium?
If I recall correctly, my first web page was online when I was 11 years old somewhere between 2001 and 2002. It was of course not very interesting, but was liteally less childish than what you could've expected when browsing myspace and others. For some reasons, I removed it and lost interest in it, instead working on blurry projects that went to the trash one after the other.

Over the last decade I wanted to have my own personal place on the Internet, but was never really satisfied with the solutions I came up with. I did have a static and minimalistic page in early 2013 but removed it and lost the sources along with the repository. A few months later, I started to build a full blown CMS using Ruby on Rails (which I discovered in 2009) and Bootstrap. Ruby on Rails *is* fantastic, and I was already loving it back in those days :), but I trapped myself in aspects too big to handle, and I ended up with a bloated codebase that eroded my motivation. If you're a programer, I bet you know a similar story where you started to build a chair but ended up trying to build a space elevator :)

I wanted to build something small, smart and original.


## How?
This is an idea that definitely grew silently over the last few years when I discovered [Pelican](https://github.com/getpelican/pelican) and other static sites generators. The idea of producing content locally and compiling it before uploading it seduced me, but there were a few things that bothered me:

1. The way many static sites generators handle blog posts oblige you to have to upload a new version of your codebase.
2. If you want to have comments on your posts and pages, you have to install a database engine and/or copy static comments from emails you receive.
3. I wanted to do something myself :)

So here I was standing on the edge of my toilet hanging a clock, the porcelaine wet, I slipped, hit my head on the edge of the sink, and when I came to, I had a revelation: you can use the GItHub API!

And here comes Elerium!


## What's Elerium?
Disclaimer: Elerium is not meant to be a replacement for existing static sites generators. In fact, its nature could be considered as killing the purpose of a static, cached site. Please consider it as an alternative.

Moreover, Elerium is rather a template you can modify and improve rather than a framework. You can use it as a blogging system, to display your GitHub projects, or do pretty much anything else you need.

The principle is simple and currently requires a GitHub account. You could also use another Git platform or install your own, provided they... provide :) an API that lets you browse your profile, projects and source trees.

Anyway, instead of converting a list of files sitting in a repository and then uploading the output, I use the GitHub API to:

1. browse the source tree of my own repository,
2. retrieve an ordered list of posts written in Markdown (I'm using the same naming convention as Active Record migrations for ordering),
3. decode the raw format of those files with base64.

The rest is polishing, like using Showdown.js to convert from Markdown to HTML, using a different branch name for posts.

But more importantly: you can also add comments through GitHub issues, or commits comments (if you're ok to have one commit per file and rebasing the old ones), which is a feature I still have to add, actually.

What I really like behind this concept is its simplicity: GitHub handles storage, hosting, editing and permissions for you, and you don't need server-side processing either. Any basic web hosting will do.


## Why the name?
In the UFO/XCOM universe, Elerium is the energy that powers aliens technology, which also permits Humanity to make breakthroughs in multiple domains. This is a bit pretentious, but I mainly chose it because I love its tone :)
