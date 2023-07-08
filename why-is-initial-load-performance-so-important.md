# Why is Initial Load Performance so important?

Part I of the complete guide to Angular 16 Server Side Rendering with Client Hydration

<!-- TOC -->

- [Why is Initial Load Performance so important?](#why-is-initial-load-performance-so-important)
  - [What this blog series is about](#what-this-blog-series-is-about)
  - [The huge benefits of having a faster Initial Load](#the-huge-benefits-of-having-a-faster-initial-load)
    - [How can Server Side Rendering improve performance?](#how-can-server-side-rendering-improve-performance)
    - [Why is Hydration such a breakthrough improvement?](#why-is-hydration-such-a-breakthrough-improvement)
  - [Conclusion](#conclusion)
  - [Performance Deep Dive Workshop](#performance-deep-dive-workshop)
  <!-- TOC -->

## What this blog series is about

It's been a long time (more than 6 years) since we first blogged about [server side rendering (SSR) in Angular](server-side-rendering-with-angular).

The **Angular framework** has recently fallen a bit behind against its competitors - other popular frontend solutions like [React](https://react.dev/blog/2022/03/29/react-v18#new-client-and-server-rendering-apis) and [VueJS](https://vuejs.org/guide/scaling-up/ssr.html#why-ssr) or newer kids on the block like [Svelte](https://svelte.dev/docs/server-side-component-api) and [Qwik](https://qwik.builder.io/docs/guides/static-site-generation/) - concerning Initial Load Performance best practices when it comes to SSR.

However, this has dramatically changed with the [**Version 16** release of Angular](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d)! But that's not the end of the story as the Angular team has announced [plans in their **roadmap**](https://angular.io/guide/roadmap#explore-hydration-and-server-side-rendering-improvements) to further improve SSR by polishing full hydration and exploring the dynamically evolving space of partial hydration and resumability.

So, in this **blog series** I want to share a **complete guide** 🥳 to implementing **SSR with Client Hydration** in Angular 16 including how to **measure the improvements**.

We'll use the infamous **Flight App** ✈️ created by [Manfred Steyer](https://twitter.com/ManfredSteyer) as an example and serve the two app variants via **Docker** using a [nginx](https://www.nginx.com/) container for the classical client side rendering (CSR) approach and a [Node.js](https://nodejs.org/) server for the SSR variant - both in their alpine versions.

But first, let's start with the **why**! 🤔

## The huge benefits of having a faster Initial Load

Disclaimer: This section does indeed contain a lot of information and text (which is probably too detailed 😅).

<!-- @Manfred, please insert this text with links once you,ve published the other posts -->
<!--If you're already experienced and/or convinced, you can of course **skip this section** and jump to [Part II: How to measure Initial Load Performance](#) or even [Part III: How to use Angular SSR with Hydration](#).-->

Initial Load Performance is very important for our Angular apps due to its **significant impact** on user experience, engagement, and overall **business success**. When users visit our app, their **first impression** is formed during the initial load, which is the time it takes for the website to fully load and become interactive. This brief period plays a **crucial role** in determining whether a user will stay, engage with the content, and eventually convert into a customer or returning visitor. Here are the key reasons why Initial Load Performance is so freaking important:

1. **User Engagement & Retention**: Users have increasingly high expectations for website performance, and slow-loading websites often lead to frustration and abandonment. Studies have shown that users are more likely to abandon a website if it takes too long to load. By optimizing Initial Load Performance, Angular apps can provide a smooth and seamless user experience, ensuring users stay engaged, explore further, and ultimately stay in the app longer.

2. **Conversion Rates & Revenue**: Slow-loading Angular apps can have a significant negative impact on conversion rates and revenue. Research indicates that even small delays (of 0.1 seconds) in initial load times can result in substantial drops in conversion rates. Users who experience sluggish initial load times are more likely to abandon their shopping carts, leave without making a purchase, or seek alternatives elsewhere. By improving Initial Load Performance, websites can enhance the likelihood of users completing desired actions, such as making a purchase, signing up for a service, or submitting a form, leading to increased revenue and business growth.

3. **Search Engine Optimization (SEO)**: Search engines, especially Google, consider web app performance as one of the main ranking factors (after **content**, of course). Web apps with faster initial load times are often favored in search results, leading to increased visibility and organic traffic. Additionally, slow-loading websites may experience higher bounce rates, which will also negatively impact SEO rankings. By prioritizing Initial Load Performance, web apps can improve their chances of ranking higher in search engine results, attracting more visitors, and gaining a competitive edge.

4. **Mobile Experience**: With the rise of mobile browsing (more than 2/3 of overall traffic in 2023 - just look into your Analytics statistics), optimizing Initial Load Performance is even more critical. Mobile devices often have slower network connections and limited processing power compared to desktop computers. Users accessing your Angular app through mobile devices are typically more sensitive to slow load times and may have less patience when it comes to waiting for an app to load. Therefore, ensuring fast Initial Load Performance is essential to providing a satisfactory mobile experience and catering to the growing mobile user base.

5. **User Satisfaction & Brand Perception**: A fast-loading web app reflects positively on a brand's image and reputation. Users associate slow load times with unprofessionalism, inefficiency, or a lack of care for their experience. On the other hand, an app that loads quickly instills confidence, portrays professionalism, and fosters positive brand perception. By delivering a fast and smooth initial load, web apps can enhance user satisfaction, strengthen brand perception, and establish trust with their audience.

Okay, I hope I have convinced you that you need to improve your Angular apps' initial load as much as possible.

### How can Server Side Rendering improve performance?

Server-side rendering (SSR) can greatly enhance initial load time and contribute to a faster web app experience. Unlike client-side rendering, where the browser must wait for all JavaScript and data to be downloaded before rendering the page, SSR **generates the HTML on the server** and sends a fully rendered page to the browser.

This approach eliminates the need for additional round trips between the client and the server, reducing latency and improving Initial Load Performance. By delivering pre-rendered content, SSR enables users to see and interact with the app faster, as there is no delay in rendering or waiting for data to be fetched.

This results in a quicker time to first paint and an improved perception of speed, leading to enhanced user satisfaction and engagement. Additionally, SSR assists with search engine optimization by providing search engines with fully rendered HTML, making the website more accessible and discoverable.

### Why is Hydration such a breakthrough improvement?

Hydration is a technique that complements server-side rendering (SSR) and improves the initial load time of SSR-rendered pages: After the initial HTML is rendered on the server and sent to the client, hydration involves re-rendering the components on the client-side and **attaching event handlers**. This process allows the static HTML to be transformed into an interactive and dynamic application.

The main benefit of the so-called **Non-Destructive Hydration** introduced in Angular V16 is that the DOM does not have to be rerendered completely in the client which often showed up in a blank flash of the page during the process - which of course resulted in a very bad user experience. If you'd ask me personally I'd say for that reason SSR was not really usable in Angular until now!

Here's how hydration further improves SSR:

1. **Interactivity & Responsiveness**: By hydrating the server-rendered HTML on the client-side, the page becomes interactive and responsive to user actions. Components can be initialized with their previous state and reattach event listeners, enabling seamless interactivity without reloading the entire page. This provides a smoother user experience, making the web app feel more dynamic and responsive.

2. **Faster Time 2 Interactive**: Hydration bridges the gap between SSR and client-side rendering (CSR) by allowing the page to become interactive sooner. While SSR delivers a pre-rendered page to the client, hydration takes over on the client-side, allowing components to be re-rendered and initialized faster. This reduces the time it takes for the page to become fully interactive, enhancing the overall user experience and perceived speed.

3. **SEO & Social Sharing**: Hydration helps with search engine optimization (SEO) and social sharing by providing search engine crawlers and social media bots with fully interactive content. While SSR provides initial content for search engines to index, hydration ensures that the full interactivity and dynamic behavior of the page are preserved, enabling search engines and social media platforms to accurately represent and display the web app's content.

## Conclusion

Initial Load Performance directly impacts user engagement, conversion rates, SEO rankings, mobile experience, and overall brand perception. Investing in optimizing initial load times can yield significant benefits, ensuring users have a positive experience, increasing conversions, and driving business success in the digital landscape.

In the upcoming **part II** I'll show you how to measure the Initial Load Performance.<!-- @Manfred, please insert link here as well -->

## Performance Deep Dive Workshop

If you want to deep dive into Angular performance, we offer a dedicated [**Performance Workshop**](https://www.angulararchitects.io/en/angular-workshops/angular-performance-workshop/) 🚀 - both in English and German.

This blog series was written by [Alex Thalhammer](https://alex.thalhammer.name/). Follow me on [GitHub](https://github.com/L-X-T), [Twitter](https://twitter.com/LX_T) or [LinkedIn](https://at.linkedin.com/in/thalhammer).
