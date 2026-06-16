/* ============================================================
   THIS IS THE ONLY FILE YOU EDIT TO ADD A NEW LESSON.

   1. Copy one whole lesson block, from  {  to  },
   2. Paste it ABOVE the others (newest first is easiest)
   3. Change the id, date, title, image, excerpt, and content
   4. Put your picture in the  images/  folder
   5. Save — done! Open index.html to see it.

   Writing tips for the content:
     ## Big heading        ### Small heading
     **bold**              *italic*
     - bullet point        > example sentence box
     (leave a blank line between paragraphs)
   ============================================================ */

const SITE = {
  title: "Learn English with Will Fan",
  tagline: "Hi everyone, my name is Will Fan. As an ESL student, I make a lot of mistakes — grammar, spelling, and more. I'll post weekly to share them, in hopes that you can learn from my errors too!"
};

const POSTS = [

  {
    id: "lesson-002",
    date: "2026-06-10",
    title: "At the Coffee Shop ☕",
    level: "Beginner",
    image: "images/coffee.svg",
    imageAlt: "A cup of coffee",
    excerpt: "Learn how to order a drink in English — useful words and a real conversation.",
    content: `
## Useful Words

- **order** — to ask for food or drink
- **menu** — the list of food and drinks
- **medium** — middle size (small / medium / large)
- **to go** — you take the drink with you

## A Real Conversation

> Barista: Hi! What can I get you?
> You: A medium latte, please.
> Barista: For here or to go?
> You: To go, please.
> Barista: That's $4.50.
> You: Here you are. Thank you!

## Practice

Try to answer these questions out loud:

- What do you say if you want a big coffee?
- How do you ask for the drink to take with you?

**Homework:** Next time you buy a drink, try ordering in English!
`
  },

  {
    id: "lesson-001",
    date: "2026-06-09",
    title: "Greetings: How to Say Hello 👋",
    level: "Beginner",
    image: "images/hello.svg",
    imageAlt: "Two people waving hello",
    excerpt: "Different ways to greet people in English — formal, friendly, and casual.",
    content: `
## Three Ways to Say Hello

### 1. Formal (work, strangers)

- Good morning. / Good afternoon.
- Hello, nice to meet you.

### 2. Friendly (people you know)

- Hi! How are you?
- Hey, how's it going?

### 3. Very casual (friends)

- What's up?
- Hey there!

## How to Answer

> A: Hi! How are you?
> B: I'm good, thanks! And you?
> A: Pretty good!

**Tip:** "How are you?" is often just a greeting. A short, happy answer is perfect — you don't need to tell your whole day!

## Practice

- Say hello to a friend in English today.
- Try answering: "How's it going?"
`
  }

];
