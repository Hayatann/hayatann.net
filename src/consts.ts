export const SITE = {
	title: "hayatann.net",
	description: "Your website description.",
	defaultLanguage: "ja",
} as const;

export const OPEN_GRAPH = {
	image: {
		src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
		alt:
			"astro logo on a starry expanse of space," +
			" with a purple saturn-like planet floating in the right foreground",
	},
	twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
	//   English: "en",
	Japanese: "ja",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: "XXXXXXXXXX",
	appId: "XXXXXXXXXX",
	apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	//   en: {
	//     "Section Header": [
	//       { text: "Introduction", link: "en/introduction" },
	//       { text: "Page 2", link: "en/page-2" },
	//       { text: "Page 3", link: "en/page-3" },
	//     ],
	//     "Another Section": [{ text: "Page 4", link: "en/page-4" }],
	//   },
	ja: {
		"About me": [
			{ text: "Top", link: "ja/top" },
			// { text: "逆張りについて", link: "ja/gyakubari" },
		],
		Blog: [
			{ text: "新学期について", link: "ja/shingakki" },
			{ text: "2024年になりました", link: "ja/2024" },
			{ text: "2025年になりました", link: "ja/2025" },
      { text: "受験報告", link: "ja/exam" },
		],
		Portfolio: [{ text: "ポートフォリオ", link: "ja/portfolio" }],
	},
};
