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
    id: "lesson-004",
    date: "2026-06-22",
    title: "\"Reminds me of me\" — Really? 😬",
    level: "Beginner",
    image: "images/post2.png",
    imageAlt: "Tweet where Will Fan wrote: Ne Zha 2 reminds me of me when I was young",
    excerpt: "I wrote \"reminds me of me\" — which sounds ridiculous. The word I needed was \"myself.\"",
    content: `
## What I Said

I posted this on social media:

> "Ne Zha 2 reminds me of me when I was young 🤣"

Let me be honest with you: this is embarrassing. Not catastrophic, but embarrassing. Let me explain why.

## The Problem: "me" vs. "myself"

When a verb or preposition refers back to the subject of the sentence, you must use a **reflexive pronoun** — not a regular object pronoun.

Here is the rule in plain English:

- **me** = used when someone else is doing something to you
- **myself** = used when YOU are referring back to yourself

So when you say "reminds me of **me**", you are using "me" twice in a row — once as the indirect object and once as the object of the preposition. It is not technically wrong, but it sounds awkward and unnatural. A native speaker would almost always say:

> "Ne Zha 2 reminds me of **myself** when I was young."

"Myself" here is a reflexive pronoun pointing back to the same person — *me*.

## Reflexive Pronouns: The Full List

| Regular | Reflexive |
|---------|-----------|
| me | myself |
| you | yourself |
| him | himself |
| her | herself |
| us | ourselves |
| them | themselves |

## More Examples

> ❌ "I bought a gift for me." → ✅ "I bought a gift for myself."
> ❌ "She reminded her of her younger days." → ✅ "She reminded herself of her younger days."
> ❌ "He saw him in the mirror." → ✅ "He saw himself in the mirror."

## Practice

Fix these sentences:

1. "The photo reminded me of me at age ten."
2. "He talked to him in the mirror every morning."
3. "We only have we to blame."

**The lesson:** Every time you refer back to the same person in a sentence, reach for the reflexive pronoun. Your writing will instantly sound more natural.
`
  },

  {
    id: "lesson-003",
    date: "2026-06-18",
    title: "Condolences vs. Condescending 😬",
    level: "Intermediate",
    image: "images/x.png",
    imageAlt: "Screenshot of a tweet where I wrote My condescending instead of My condolences",
    excerpt: "I wrote \"My condescending\" on a post about someone's death — I meant \"My condolences.\"",
    content: `
## My Mistake

Someone I follow on social media posted that a person had passed away. I wanted to show sympathy, so I replied:

> "My condescending I spoke with you guys before Consensus."

I meant to write **"My condolences."** This is a very embarrassing mix-up — here is why:

## The Two Words

**Condolences** *(noun, plural)*
- Meaning: an expression of sympathy for someone who is grieving
- How to use it: "My condolences" or "Please accept my condolences"
- When to say it: when someone has lost a loved one

**Condescending** *(adjective)*
- Meaning: treating someone as if they are less intelligent or less important than you
- How to use it: "Don't be condescending" / "She gave me a condescending look"
- When to say it: to describe rude, superior behaviour — the *opposite* of kind!

## Why This Is So Bad

Saying **"My condescending"** at a moment of grief sounds like you are insulting the person. It is the opposite of what I wanted to say! Always double-check before posting.

## How to Remember Them

- **condolences** → think of **"console"** — you are trying to comfort someone
- **condescending** → think of **"descend"** — looking *down* on someone

## Practice

Fill in the blank with the right word:

1. "I am so sorry for your loss. Please accept my ___."
2. "He spoke in a very ___ tone, as if we didn't understand anything."

**Tip:** Autocorrect and rushing are dangerous. Read your message once before you hit send — especially when the topic is serious!
`
  },

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
