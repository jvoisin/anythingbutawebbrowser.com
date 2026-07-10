/*
 * TODO:
 * - https://killedbymozilla.com/
 * - https://www.mozillafoundation.org/en/what-we-do/
 * - https://mozilla.vc/blog/
 */

const header = `<h1>Anything but a web browser</h1>
<h2>Chronicles of the 3% web browser unofficial motto</h2>`;
const footer = 'Sadly built by <a href="https://dustri.org">jvoisin</a> and friends, feel free to <a href="https://github.com/jvoisin/anythingbutawebbrowser.com">contribute</a>';
const entries = [
  {
    id: 'stateoftheai',
    categories: ['AI'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2026-07-14 05:00',
    title: 'Mozilla’s Inaugural ‘State of Open Source AI’ Report Is Here',
    body: `"Today Mozilla is publishing its inaugural State of Open Source AI
	  report, built on new analysis and a global survey of 950+ developers,
	  showing that open models are no longer playing catch-up. The
	  performance gap with top proprietary systems like ChatGPT and Claude
	  has narrowed to just 3%, while costs have fallen up to 50x in three
	  years."

	  <br><br>

	  Pretty cool heh? You don't see Google Chrome producing reports on the
	  "State of Open Source AI" do you? `,
    links: [
      {
        href: 'https://blog.mozilla.org/en/mozilla/mozilla-state-of-open-source-ai-report/',
        linkText: 'Mozilla’s Inaugural ‘State of Open Source AI’ Report Is Here',
      },
    ],
  },
  {
    id: 'wrexham',
    categories: ['sponsoring'],
    color: 'orange',
    faicon: 'money-bill',
    datetime: '2026-07-09 05:00',
    title: 'Wrexham AFC and Firefox announce multi-year partnership',
    body: `Firefox is now the "Wrexham AFC Club's Official Web Browser Partner
	  and front-of-kit sponsor for the 2026/27 season", whatever that means.
	  Mozilla Chief Marketing Officer said that \"Partnering with Wrexham
	  AFC is a natural fit. At their core, both Wrexham and Firefox are
	  challenger brands that have built passionate global communities by
	  doing work differently and staying true to who they are,".

	  <br><br>

	I would have loved to be in the meeting where the idea of throwing
	money at a Wales soccer club was spun.
	  `,
    links: [
      {
        href: 'https://www.wrexhamafc.co.uk/news/2026/july/08/wrexham-afc-and-firefox-announce-multi-year-front-of-kit-partnership/',
        linkText: 'Wrexham AFC and Firefox Announce Multi-Year Front-of-Kit Partnership',
      },
    ],
  },
  {
    id: 'tabstack',
    categories: ['AI', 'product'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2026-01-14 05:00',
    title: 'Tabstack: Browsing Infrastructure for AI Agents',
    body: `Website crawling/spidering at scale, for AI, by Mozilla. Everyone is
	  wondering how this is compatible with the <a
	  href="https://www.mozilla.org/en-US/about/manifesto/"> Mozilla manifesto
	  statement</a>, and webmasters around the world are no doubt cheering about it.`,
    links: [
      {
        href: 'https://tabstack.ai/blog/intro-browsing-infrastructure-ai-agents',
        linkText: 'Tabstack: Browsing Infrastructure for AI Agents',
      },
      {
        href: 'https://tabstack.ai/',
        linkText: 'Extract data and automate the web in one API call',
      },
    ],
  },
  {
    id: 'solo',
    categories: ['AI', 'product'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2025-03-11 05:00',
    title: 'Solo from Mozilla',
    body: `AI-powered websites creator, with cool features like an <a
    href="https://soloist.ai/google-ad-creator">AI-powered Google Ad
	  Creator</a>, an <a
	  href="https://soloist.ai/business-idea-creator">AI-powered Business
	  Idea Creator</a> and an <a
	  href="https://soloist.ai/business-name-creator">AI-powered Business
	  Name Creator<a>. No way to export your website though, so lots
	  of fun in perspective if the product is ever <em>sunsetted</em>.`,
	  links:
	  [
      {
        href: 'https://soloist.ai/',
        linkText: 'Solo - Free AI Website Creator',
      },
    ],
  },
  {
    id: 'aibrowser',
    categories: ['AI'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2025-12-16 05:00',
    title: 'Modern AI Browser',
    body: `Mozilla's new CEO stepped into his role declaring that "Firefox
	  will grow from a browser into a broader ecosystem of trusted
	  software. Firefox will remain our anchor. It will evolve into a
	  modern AI browser and support a portfolio of new and trusted software
	  additions". With AI being shoehorned every-fucking-where against every users' wishes, it sound like a terrific move.`,
    links: [
      {
        href: 'https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/',
        linkText: 'Mozilla’s next chapter: Building the world’s most trusted software company',
      },
      {
        href: 'https://www.phoronix.com/news/Mozilla-New-CEO-AI',
        linkText: 'Mozilla Names New CEO, Firefox To Evolve Into A "Modern AI Browser"',
      }
    ],
  },
  {
    id: '0din',
    categories: ['AI'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2025-10-17 05:00',
    title: '0DIN',
    body: `A product "pioneering GenAI bug bounty platform designed to safeguard the future of artificial intelligence", now apparently an "Automated AI Red Teaming by Mozilla".
    More or less a resking of nvidia's garak scanner.`,
    links: [
      {
        href: 'https://0din.ai/blog/0din-portal-launch-revolutionizing-bug-bounty-hunting-for-genai-security',
        linkText: '0DIN Portal Launch: Revolutionizing Bug Bounty Hunting for GenAI Security',
      },
      {
        href: 'https://github.com/0din-ai/ai-scanner',
        linkText: 'AI model safety scanner built on NVIDIA garak',
      },
      {
        href: 'https://0din.ai/about',
        linkText: 'About 0DIN',
      }
    ],
  },
  {
    id: 'accelerator',
    categories: ['acquisition'],
    color: 'orange',
    faicon: 'money-bill',
    datetime: '2024-06-16 05:00',
    title: 'Introducing Anonym: Raising the bar for privacy-preserving digital advertising',
    body: `"Mozilla has acquired Anonym, a trailblazer in privacy-preserving
    digital advertising. This strategic acquisition enables Mozilla to help
    raise the bar for the advertising industry by ensuring user privacy while
    delivering effective advertising solutions."

	  <br><br>
   As per <a href="https://www.mozilla.org/en-US/anonym/">anonym's website</a>,
   "Anonym is cutting edge ad tech built to maximize ad performance while
   keeping user data private. Sitting between advertisers and the world's
   biggest platforms, Anonym unlocks results neither can realize alone."

	  <br><br>

	Tl;dr it's a TEE-based mass-surveillance anonymisation tool for
	advetisers. Why not, but everything is closed-source and the <a
	href="https://www.mozilla.org/en-US/anonym/how-it-works/">website</a>
	doesn't say much. A better way to "raise the bar" would be to stop
	enabling plantary-scale tracking instead of whitewashing it with
	complicated technical constructs.`,
    links: [
      {
        href: 'https://blog.mozilla.org/en/mozilla/mozilla-builders-accelerator/',
        linkText: 'Building open, private AI with the Mozilla Builders Accelerator',
      }
    ],
  },
  {
    id: 'accelerator',
    categories: ['AI'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2024-06-03 05:00',
    title: 'Building open, private AI with the Mozilla Builders Accelerator',
    body: `"This program is designed to empower independent AI and machine
    learning engineers with the resources and support they need to thrive. It
    aims to cultivate a more innovative AI ecosystem, and it’s one of Mozilla’s
    key initiatives to make AI meaningfully impactful — alongside efforts like
    Mozilla.ai, the Responsible AI Challenge and the Rise25 Awards." 

	  <br><br>

	  It's always exciting to see Mozilla finding new ways to burn money on anything not-Firefox related,
	  even moreso when it's on AI stuff!`,
    links: [
      {
        href: 'https://blog.mozilla.org/en/mozilla/mozilla-builders-accelerator/',
        linkText: 'Building open, private AI with the Mozilla Builders Accelerator',
      }
    ],
  },
  {
    id: 'openi',
    categories: ['AI'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2024-05-21 05:00',
    title: 'Releasing a new paper on openness and artificial intelligence',
    body: `"For the past six months, the Columbia Institute of Global Politics
	  and Mozilla have been working with leading AI scholars and
	  practitioners to create a framework on openness and AI. Today, we are
	  publishing a paper that lays out this new framework." 

	  <br><br>

	  Pretty cool to see Mozilla investing into reports on AI, since it's more or less its raison d'être. Not.`,
    links: [
      {
        href: 'https://blog.mozilla.org/en/mozilla/ai/new-framework-for-ai-openness-and-innovation/',
        linkText: 'Releasing a new paper on openness and artificial intelligence',
      }
    ],
  },
  {
    id: 'mozilla.ai',
    categories: ['AI'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2024-11-23 05:00',
    title: 'AI Chatbot',
    body: `Starting with Firefox 133, there is now a sidebar in Firefox with an
	  AI chatbot, so that users can contribute to the biggest
	  planetary-incinerating economic bubble ever form the comfort of their
	  browser.`,
    links: [
      {
        href: 'https://support.mozilla.org/en-US/kb/ai-chatbot',
        linkText: 'Access AI chatbots in Firefox',
      }
    ],
  },
  {
    id: 'orbit',
    categories: ['AI', 'product'],
    color: 'orange',
    faicon: 'robot',
    datetime: '2024-09-23 05:00',
    title: 'Orbit, by Mozilla',
    body: `An AI-fulled "productivity tool" to sumarize web content. Thankfully <a href="https://killedbymozilla.com/">killed in 2025</a>`,
    links: [
      {
        href: 'https://killedbymozilla.com/',
        linkText: 'Killed by Mozilla',
      },
      {
        href: 'https://support.mozilla.org/en-US/kb/orbit-frequently-asked-questions',
        linkText: 'Orbit Frequently Asked Questions',
      },
      {
        href: 'https://connect.mozilla.org/t5/discussions/try-orbit-by-mozilla-a-new-ai-productivity-tool/td-p/71724',
        linkText: ' Try Orbit by Mozilla: a new AI productivity tool',
      }
    ],
  },
  {
    id: 'mozilla.ai',
    categories: ['spinoff', 'AI'],
    color: 'orange',
    faicon: 'code-fork',
    datetime: '2024-01-23 05:00',
    title: 'Mozilla.ai',
    body: `Mozilla creates, a "startup — and a community — that will build a trustworthy and independent open-source AI ecosystem",
	  an initial $30M investment from Mozilla.`,
    links: [
      {
        href: 'https://blog.mozilla.ai/introducing-mozilla-ai-investing-in-trustworthy-ai/',
        linkText: 'Introducing Mozilla.ai: Investing in trustworthy AI',
      }
    ],
  },
  {
    id: 'fakespot',
    categories: ['acquisition'],
    color: 'orange',
    faicon: 'money-bill',
    datetime: '2023-05-02 05:00',
    title: 'Mozilla acquires Fakespot',
    body: `Mozilla acquires Fakespot, a startup building an AI-based tool to find flag product reviews on e-commerce websites. The service was shut down 2 years later in July 2025.`,
    links: [
      {
        linkText: 'Fakespot becomes part of Mozilla, bringing trustworthy shopping tools to Firefox ',
        href: 'https://blog.mozilla.org/en/mozilla/fakespot-joins-mozilla-firefox-shopping-announcement/',
      },
      {
        href: 'https://blog.mozilla.org/en/mozilla/building-whats-next/',
        linkText: 'Investing in what moves the internet forward',
      }
    ],
  },
  {
    id: 'mastodon',
    categories: ['product'],
    color: 'orange',
    faicon: 'gift',
    datetime: '2022-12-20 05:00',
    title: 'Mozilla\'s Mastodon instance',
    body: `Mozilla ran its down Mastodon instance, announced at the end of
    2022, <a
    href="https://blog.mozilla.org/en/mozilla/mozilla-social-mastodon-private-beta-announcement/">entered
    private beta in May 2023</a>, and <a
    href="https://web.archive.org/web/20241004032718/https://mozilla.social/@mozilla/113153943609185249">shut
    down in 2024</a>.`,
    links: [
      {
        href: 'https://mozilla.social/',
        linkText: 'mozilla.social',
      },
      {
        href: 'https://blog.mozilla.org/en/mozilla/mozilla-launch-fediverse-instance-social-media-alternative/',
        linkText: 'Mozilla to explore healthy social media alternative',
      },
      {
        href: 'https://connect.mozilla.org/t5/discussions/try-orbit-by-mozilla-a-new-ai-productivity-tool/td-p/71724',
        linkText: ' Try Orbit by Mozilla: a new AI productivity tool',
      }
    ],
  },
  {
    id: 'mozilla.vs',
    categories: ['spinoff'],
    color: 'orange',
    faicon: 'code-fork',
    datetime: '2022-11-02 05:00',
    title: 'Mozilla launches first-of-its-kind venture fund to fuel responsible tech companies, products',
    body: `Likley looking for new ways to burn money, Mozilla announced Mozilla
	  Ventures, investing $35M into "internet companies that protect
	  privacy, decentralize digital power and build more trustworthy AI —
	  and that also have big potential for commercial success."

	  <br><br>

	  The first 3
	  startups to get money were a company "using advanced security and AI
	  technology to keep patient data secure and advance medical
	  collaboration" whatever that means, another doing deleting your old
	  posts on social media (with an enterprise version), and a password
	  manager.

	  <br><br>

	  A "fun" game would be to try to to reconcile <a
	  href="https://mozilla.vc/portfolio/">the companies in
	  theportfolio</a> with <a
	  href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla's
	  manifesto</a>.`,
    links: [
      {
        href: 'https://mozilla.vc/mozilla-launches-first-of-its-kind-venture-fund-to-fuel-responsible-tech-companies-products/',
        linkText: 'Mozilla launches first-of-its-kind venture fund to fuel responsible tech companies, products ',
      },
      {
        href: 'https://www.coindesk.com/business/2023/02/07/crypto-wallet-security-layer-webacy-raises-4m',
        linkText: 'Crypto Wallet Security Layer Webacy Raises $4M',
      },
      {
        href: 'https://mozilla.vc/portfolio/',
        linkText: 'Portfolio',
      },
      {
        href: 'https://mozilla.vc/mozilla-ventures-announces-investment-in-rodeo-an-appempowering-gig-workers/',
        linkText: 'Mozilla Ventures Announces Investment in Rodeo, an App Empowering Gig Workers',
      }
    ],
  },
  {
    id: 'vpn',
    categories: ['product'],
    color: 'orange',
    faicon: 'gift',
    datetime: '2020-06-15 05:00',
    title: 'Mozilla VPN',
    body: `Because everyone is launching a VPN service (whitelabel Mullvad),
    why not Mozilla. It shouldn't be confused with Firefox ≥ 149 built-in VPN.`,
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Mozilla_VPN',
        linkText: 'Firefox VPN (Wikipedia)',
      },
      {
        href: 'https://blog.mozilla.org/futurereleases/2020/06/18/introducing-firefox-private-network-vpns-official-product-the-mozilla-vpn/',
        linkText: 'Introducing Mozilla VPN',
      },
      {
        href: 'https://www.mozilla.org/en-US/products/vpn/',
        linkText: 'Powerful privacy for peace of mind',
      },
      {
        href: 'https://mullvad.net/en/help/partnerships-and-resellers',
        linkText: 'Mullvad - Partnerships and Resellers',
      }
    ],
  },
  {
    id: 'relay',
    categories: ['product'],
    color: 'orange',
    faicon: 'gift',
    datetime: '2020-04-09 05:00',
    title: 'Firefox Relay',
    body: `Email relaying from @mozmail.com addresses. Feels like writing a
	  blog article about <a
	  href="https://en.wikipedia.org/wiki/Email_address#Sub-addressing">plus
	  addressing</a> would have been cheaper.`,
    links: [
      {
        href: 'https://relay.firefox.com/',
        linkText: 'Firefox Relay',
      },
    ],
  },
  {
    id: 'send',
    categories: ['product'],
    color: 'orange',
    faicon: 'gift',
    datetime: '2022-12-20 05:00',
    title: 'Mozilla Send',
    body: `Firefox Send, a website to share files too big to send by email.
	  Made public in March 2019, shut down in July 2020, as it wasn't
	  designed with abuse-resistance in mind, and was thus, of course,
	  abused to death for phishing and malware distribution. `,
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Firefox_Send',
        linkText: 'Firefox Send (Wikipedia)',
      }
    ],
  },
  {
    id: 'monitor',
    categories: ['product'],
    color: 'orange',
    faicon: 'gift',
    datetime: '2020-09-25 05:00',
    title: 'Mozilla Monitor',
    body: `HaveIbeenpwned, with a interface by Mozilla, and a partnership with the OneRep stalking company.`,
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Mozilla_Monitor#Controversies',
        linkText: 'Mozilla Monitor - Controversies',
      },
      {
        href: 'https://krebsonsecurity.com/2024/03/ceo-of-data-privacy-company-onerep-com-founded-dozens-of-people-search-firms/',
        linkText: 'CEO of Data Privacy Company Onerep.com Founded Dozens of People-Search Firms',
      },
      {
        href: 'https://monitor.mozilla.org/en',
        linkText: 'Find where your private info is exposed — and take it back',
      }
    ],
  },
  {
    id: 'pocket',
    categories: ['acquisition'],
    color: 'orange',
    faicon: 'money-bill',
    datetime: '2017-02-27 05:00',
    title: 'Mozilla Acquires Pocket',
    body: `In 2017, Mozilla acquired Pocket, a read-it-later service for an undisclosed sum. It was shut down 8 years later in July 2025, but at least its source code got <a href="https://github.com/Pocket">dumped on github</a>`,
    links: [
      {
        href: 'https://blog.mozilla.org/en/mozilla/news/mozilla-acquires-pocket/',
        linkText: 'Mozilla Acquires Pocket',
      },
      {
        href: 'https://support.mozilla.org/en-US/kb/future-of-pocket',
        linkText: 'Pocket has shut down - What you need to know',
      }
    ],
  }
];

// Page details
const pageTitle = `Anything but a web browser`;
const pageDescription = '';
const pageAuthor = 'Julien Voisin'; // Your name
const showMirrorLinks = true; // Whether to show links to the Wayback Machine and archive.is mirrors.

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
