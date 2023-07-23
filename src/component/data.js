import React from "react";

const data = () => {
  let article = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Ashes 4th Test Day 4 Live Score: Rain delays play as England face Australia - Hindustan Times",
      description:
        "England vs Australia Live Score Ashes 4th Test Day 4: ENG vs AUS Ashes 4th Test full scorecard and live updates.",
      url:
        "https://www.hindustantimes.com/cricket/england-vs-australia-live-score-ashes-4th-test-day-4-eng-vs-aus-cricket-full-scorecard-101690012534020.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/07/22/1600x900/F1ofZ0SWIAEOgb0_1690021452912_1690021463626.jpeg",
      publishedAt: "2023-07-22T11:13:07Z",
      content:
        "\"I have played a lot of cricket now, and to keep being told: 'You're rubbish,' well if I was that rubbish, I would not have played 94 games. I want to go out and enjoy, to entertain. People will have… [+335 chars]",
    },

    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Kareena Kapoor smiles as Saif Ali Khan goes fishing with Taimur and Jeh - Hindustan Times",
      description:
        "Kareena Kapoor, Saif Ali Khan, Taimur and Jeh are having a fun time in Europe and their latest pictures are proof. | Bollywood",
      url:
        "https://www.hindustantimes.com/entertainment/bollywood/kareena-kapoor-saif-ali-khan-go-fishing-with-taimur-jeh-in-europe-101690020706900.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/07/22/1600x900/kareena_1690022525853_1690022526139.jpg",
      publishedAt: "2023-07-22T10:51:02Z",
      content:
        "New photos from Kareena Kapoor and Saif Ali Khan's family vacation have surfaced online. The family is enjoying a long holiday in Europe. The new photos feature Saif and Kareena enjoying a sunny day … [+1870 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Nikita Prasad",
      title:
        "ICICI Bank Q1 Results: Net profit rises 40% to ₹9,648 crore, NII up 38% to ₹18,222 crore | Mint - Mint",
      description:
        "ICICI Bank Q1 Results: The country's leading private sector bank reported a 39.7 per cent jump in net profit at  ₹9,648 crore in the first quarter of the current fiscal as its asset quality improved on a sequential basis.",
      url:
        "https://www.livemint.com/companies/company-results/icici-bank-q1-results-net-profit-rises-40-to-rs-9-648-crore-nii-rises-to-rs-18-226-crore-check-details-11690020117595.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/07/22/600x338/ic_1690020156535_1690020156761.jpg",
      publishedAt: "2023-07-22T10:08:19Z",
      content:
        "ICICI Bank Q1 Results: ICICI Bank announced its April-June quarter results for fiscal 2023-24 on July 22, reporting a rise of 39.7 per cent in net profit at 9,648 crore on a standalone basis, compare… [+3225 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Staff Writer",
      title:
        "Manipur horrific video: BJP targets opposition, says, ‘crime against women increasing in other states’ | Mint - Mint",
      description:
        "BJP ministers are targeting opposition parties over crimes against women following backlash for their silence on the Manipur assault case. They are highlighting similar cases in states ruled by the opposition parties.",
      url:
        "https://www.livemint.com/news/india/manipur-horrific-video-rape-against-women-ncrb-data-malda-rajasthan-bengal-crime-congress-bjp-opposition-parties-11690014254974.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/07/22/600x338/Manipur-clashes_1690018094609_1690018094962.jpg",
      publishedAt: "2023-07-22T09:31:06Z",
      content:
        "A slew of Bharatiya Janata Party (BJP) ministers has begun targeting opposition parties pertaining to crime against women days after the saffron party received massive backlash for remaining silent o… [+3534 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Himanshu Mishra",
      title:
        "Tihar administrator suspends 4 officials after Yasin Malik appears in Supreme Court - India Today",
      description:
        "Tihar administrator on Saturday suspended four officials, including high ranking officials, a day after Kashmiri separatist Yasin Malik showed up in the Supreme Court.",
      url:
        "https://www.indiatoday.in/india/story/tihar-administrator-suspends-officials-yasin-malik-appears-supreme-court-2410286-2023-07-22",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/yasin_malik1-sixteen_nine.jpg?VersionId=Lx24XXXQasLfSddRPxQcJsB41qW3G536",
      publishedAt: "2023-07-22T09:28:01Z",
      content:
        "By Himanshu Mishra, Arvind Ojha: A day after the Supreme Court raised concern over Jammu and Kashmir Liberation Front (JKLF) chief and terror-funding case convict Yasin Malik’s physical presence in c… [+1324 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "PTI",
      title:
        "ED arrests woman IAS officer Ranu Sahu in alleged coal levy case in Chhattisgarh - Hindustan Times",
      description:
        "The agency has been probing an alleged coal levy and liquor scam in the state in which it has arrested some prominent bureaucrats.",
      url:
        "https://www.hindustantimes.com/cities/ed-arrests-woman-ias-officer-ranu-sahu-in-alleged-coal-levy-case-in-chhattisgarhs-raipur-101690015118110.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/07/22/1600x900/ranu_sahu_1690015357065_1690015387001.jpg",
      publishedAt: "2023-07-22T08:45:32Z",
      content:
        "The Enforcement Directorate (ED) on Saturday arrested IAS officer Ranu Sahu in Chhattisgarh, a day after the central agency conducted raids at her premises in connection with a money laundering case,… [+1197 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Mallika Soni",
      title:
        "Will abolish monarchy, Jamaican PM says but Prince William- Kate Middleton can… - Hindustan Times",
      description:
        "Jamaica's PM said, “The truth is the recent polls have shown there is a tendency towards Jamaica becoming a republic.\" | World News",
      url:
        "https://www.hindustantimes.com/world-news/royal-family-will-abolish-monarchy-jamaican-pm-says-but-prince-william-and-kate-middleton-can-101690013797506.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/07/22/1600x900/Britain-Royals-35_1666085591085_1666085591085_1690014954820.jpg",
      publishedAt: "2023-07-22T08:38:06Z",
      content:
        "Jamaica's prime minister Andrew Holness vowed to complete his efforts to end monarchy in the country but insisted that Prince William and Kate Middleton are always welcome to return to the Caribbean … [+2144 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "PTI",
      title:
        "Paytm to generate free cash flow by year end: CEO Vijay Shekhar - The Economic Times",
      description:
        "We are on our committed guidelines of becoming free cash flow positive by the year-end,  Sharma said. Paytm has reported a narrowing of loss to Rs 358.4 crore in the first quarter ended June 30, 2023. The company had posted a loss of Rs 645.4 crore in the sam…",
      url:
        "https://economictimes.indiatimes.com/markets/stocks/news/paytm-to-generate-free-cash-flow-by-year-end-ceo-vijay-shekhar/articleshow/102035592.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-102035612,width-1070,height-580,imgsize-2367205,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-07-22T08:35:00Z",
      content:
        "Fintech firm One97 Communications, which operates under the Paytm brand, expects to generate free cash flow by the end of this year, a top company official said on Saturday. Paytm founder and CEO Vij… [+1674 chars]",
    },
    {
      source: {
        id: null,
        name: "Olympics.com",
      },
      author: "ZK Goh",
      title:
        "BWF Korea Open 2023: Loh Kean Yew stages remarkable comeback against Naraoka Kodai to reach final - Olympics",
      description:
        "Find out how Singapore's world number eight and former world champion fought back from a game and 4-12 down to defeat Naraoka in a marathon semi-final in Yeosu.",
      url:
        "https://olympics.com/en/news/bwf-korea-open-2023-semis-loh-kean-yew-comeback-stuns-naraoka",
      urlToImage:
        "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/v0hz8oz3gm1djtkxd1pt",
      publishedAt: "2023-07-22T08:28:00Z",
      content:
        "Loh Kean Yew is through to his first BWF World Tourbadminton final since January 2022 after an incredible come-from-behind win against Naraoka Kodai on Saturday (22 July) at the 2023 Korea Open in Ye… [+1544 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Heat, War And Export Bans: Global Food Threats Are On The Rise - NDTV",
      description:
        "As scorching temperatures ravage farms from the US to China, crop harvests, fruit production and dairy output are all coming under pressure. That extreme weather is just one of threats to food supplies that are once again mounting around the world.",
      url:
        "https://www.ndtv.com/world-news/heat-war-and-export-bans-global-food-threats-are-on-the-rise-4231613",
      urlToImage:
        "https://c.ndtvimg.com/2023-07/kcj0hakg_crop-harvestbloomberg-_625x300_22_July_23.jpg",
      publishedAt: "2023-07-22T08:25:15Z",
      content:
        "A farmhand sows rice saplings in a flooded paddy field in Bhivpuri, near Mumbai.\r\nAs scorching temperatures ravage farms from the US to China, crop harvests, fruit production and dairy output are all… [+6197 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Shobhit Gupta",
      title:
        "Imran Khan to be charged with treason for using 'Pakistan's secret information'? - Hindustan Times",
      description:
        "In the Cypher case, Imran Khan is accused of using Pakistan's secret information for political milestones and personal use. | World News",
      url:
        "https://www.hindustantimes.com/world-news/pakistan-imran-khan-cypher-case-imran-khan-treason-charges-asif-khawaja-rana-sanaullah-azam-khan-101690005278591.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/07/22/1600x900/PAKISTAN-POLITICS-KHAN-0_1690010870939_1690011178475.JPG",
      publishedAt: "2023-07-22T08:24:04Z",
      content:
        "Former Pakistan prime minister Imran Khan can be charged with treason in the Cypher case, Geo news reported quoting defence minister Asif Khawaja as saying. The minister said that the Cypher gate and… [+1728 chars]",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Rhea Varghese",
      title:
        "Smelly Hair Draining Your Confidence? Know 5 Tips To Keep Your Tresses Fresh During Monsoon - Times Now",
      description:
        "Do you struggle with bad hair during the rainy season? Here are some simple suggestions you can use to maintain clean, fresh-smelling hair if you've tried everything but are still embarrassed by your foul-smelling locks.",
      url:
        "https://www.timesnownews.com/lifestyle/smelly-hair-draining-your-confidence-know-5-tips-to-keep-your-tresses-fresh-during-monsoon-article-102033592",
      urlToImage:
        "https://static.tnn.in/thumb/msid-102033592,updatedat-1690013185517,width-1280,height-720,resizemode-75/102033592.jpg",
      publishedAt: "2023-07-22T08:06:25Z",
      content:
        "Whenever She Made Mistake, Woman Pilot Would Hit Her With Hot Iron: Relatives Of 10-Year-Old House Help",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Bloomberg",
      title:
        "Indian billionaire Ravi Ruia buys Russian-linked London mansion for Rs 1200 crore - Economic Times",
      description:
        "The family office of Ruia, who co-owns investment firm Essar Group, purchased the Hanover Lodge mansion overlooking Regents Park at 150 Park Road this month through a sale of the homes Gibraltar-incorporated holding company, according to a person familiar wit…",
      url:
        "https://economictimes.indiatimes.com/nri/invest/indian-billionaire-ravi-ruia-buys-russian-linked-london-mansion-for-113-million/articleshow/102034881.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-102034962,width-1070,height-580,imgsize-1056797,overlay-etnri/photo.jpg",
      publishedAt: "2023-07-22T07:57:00Z",
      content:
        "Indian billionaire Ravi Ruia bought a Rs 1,200 crore (£113 million) London mansion linked to Russian property investor Andrey Goncharenko in one of the UK capitals biggest residential deals in recent… [+2282 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Pallavi Mehra",
      title:
        "World Brain Day: Expert Shares Insights Into Causes, Symptoms, And Treatments Of Neurological Disorders - Zee News",
      description:
        "Dr Prasad shares causes of neurological disorders are varied and can include: Genetics: Some neurological disorders are inherited from parents. Environmental Factors: These can include exposure to toxins, infections, and head injuries. Infections, such as HIV…",
      url:
        "https://zeenews.india.com/health/world-brain-day-expert-shares-insights-into-causes-symptoms-and-treatments-of-neurological-disorders-2638840",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2023/07/22/1246601-brainday.jpg",
      publishedAt: "2023-07-22T07:50:03Z",
      content:
        "World Brain Day is an annual observance dedicated to raising awareness about neurological disorders and promoting brain health. It takes place on July 22 each year. This initiative is organized by th… [+3113 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ETtech",
      title:
        "Twitter restricts DMs for unverified accounts to reduce spam - Economic Times",
      description:
        "Microblogging platform Twitter on Saturday announced that it has restricted direct messages (DMs) for unverified accounts in a bid to reduce spam on the platform.",
      url:
        "https://economictimes.indiatimes.com/tech/technology/twitter-restricts-dms-for-unverified-accounts-to-reduce-spam/articleshow/102034511.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-102034525,width-1070,height-580,imgsize-34798,overlay-ettech/photo.jpg",
      publishedAt: "2023-07-22T07:40:00Z",
      content:
        "Microblogging platform Twitter on Saturday announced that it has restricted direct messages (DMs) for unverified accounts in a bid to reduce spam on the platform.The company also said it will soon im… [+2204 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Snehashish Roy",
      title:
        "Ashok Gehlot slams PM for calling Manipur ‘his govt’ in ‘few secs’ of speech - Hindustan Times",
      description:
        "Rajasthan CM Gehlot criticised the Centre's stance over Manipur incident at a presser. | Latest News India",
      url:
        "https://www.hindustantimes.com/india-news/manipur-incident-latest-news-updates-ashok-gehlot-pm-narendra-modi-rajashtan-income-bill-101690009206053.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/07/22/1600x900/PTI07-22-2023-000075A-0_1690014005548_1690014077712.jpg",
      publishedAt: "2023-07-22T07:39:32Z",
      content:
        "Rajasthan chief minister Ashok Gehlot on Saturday launched an attack on Prime Minister Narendra Modi over his few seconds of speech on Manipur incidents during his address to media ahead of the monso… [+1630 chars]",
    },
    {
      source: {
        id: null,
        name: "ThePrint",
      },
      author: "ANI",
      title:
        "Study reveals how monitoring brain waves reduces post-op complications - ThePrint",
      description:
        "Washington [US], July 22 (ANI): Brain wave characteristics were discovered in a recent study that looked at the EEG patterns of patients under anaesthesia. These findings may help anesthesiologists recognise when patients are entering that deeper degree of un…",
      url:
        "https://theprint.in/health/study-reveals-how-monitoring-brain-waves-reduces-post-op-complications/1681249/",
      urlToImage: null,
      publishedAt: "2023-07-22T07:14:53Z",
      content:
        "One of these different patterns was discovered in the brain’s alpha waves (which have a frequency ranging from eight to fourteen cycles per second). When patients were unconscious, the magnitude of t… [+4918 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title:
        "Public sector banks earlier known for huge losses, NPAs; now for record profits: PM Modi - The Hindu",
      description: null,
      url:
        "https://www.thehindu.com/news/national/public-sector-banks-earlier-known-for-huge-losses-npas-now-for-record-profits-pm-modi/article67108908.ece",
      urlToImage: null,
      publishedAt: "2023-07-22T06:58:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Staff Writer",
      title:
        "Manipur horrendous video: Irom Sharmila says, 'Wouldn't have happened if...' | Mint - Mint",
      description:
        "Irom Sharmila, civil rights activist, spoke out about the recent incident in Manipur, calling it inhuman and blaming the Central government for not intervening sooner. She also highlighted the mistreatment of women in Manipur in an opinionated article.",
      url:
        "https://www.livemint.com/news/india/manipur-violence-clashes-irom-sharmilaviolencemeiteiskuki-11690005045102.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/07/22/600x338/iromsharmila_1690005829254_1690005829795.jpg",
      publishedAt: "2023-07-22T06:24:56Z",
      content:
        'Civil rights activist Irom Sharmila Chanu spoke on the horrendous incident that took place in Manipur amid prolonged ethnic clashes between Meiteis and Kuki communities. Feeling "sorry and sad" about… [+2287 chars]',
    },
    {
      source: {
        id: null,
        name: "CNBCTV18",
      },
      author: "https://www.cnbctv18.com",
      title:
        "Weather Updates Today LIVE: Mumbai rains to continue, cloudbursts hit Uttarakhand, Ladakh - CNBCTV18",
      description:
        "Mumbai Rains LIVE Updates: A flood situation gripped the Yuvatmal district in Maharashtra on Saturday as water entered houses of many people. An defence official said one Mi-17 V5 helicopter is being inducted from Nagpur to evacuate 40 people stranded due to …",
      url:
        "https://www.cnbctv18.com/environment/mumbai-rains-news-live-updates-imd-alert-raigad-thane-pune-schools-shut-delhi-floods-himachal-uttarakhand-weather-latest-17286251.htm",
      urlToImage:
        "https://images.cnbctv18.com/wp-content/uploads/2023/07/Rain123-868x573.jpg",
      publishedAt: "2023-07-22T06:24:21Z",
      content:
        "Water level in Haryana's Hathnikund barrage rises amid heavy rainfall\r\nThe water level in the Hathnikund barrage saw a rapid uptick on Saturday with rains lashing several parts of Punjab and Haryana … [+244 chars]",
    },
  ];
  return article;
};

export default data;
