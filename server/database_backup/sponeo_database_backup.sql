--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6
-- Dumped by pg_dump version 12.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: articles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.articles (
    site character varying(64),
    headline character varying(128),
    href character varying(256),
    t_stamp timestamp without time zone,
    id integer NOT NULL
);


ALTER TABLE public.articles OWNER TO postgres;

--
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_id_seq OWNER TO postgres;

--
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- Name: websites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.websites (
    id integer NOT NULL,
    site character varying(64),
    homepage character varying(128),
    newspage character varying(128),
    category character varying(32),
    sports character varying(32),
    geo character varying(32),
    article_container character varying(128),
    headline_container character varying(128),
    href_element character varying(128),
    headline_element character varying(128)
);


ALTER TABLE public.websites OWNER TO postgres;

--
-- Name: websites_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.websites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.websites_id_seq OWNER TO postgres;

--
-- Name: websites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.websites_id_seq OWNED BY public.websites.id;


--
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- Name: websites id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.websites ALTER COLUMN id SET DEFAULT nextval('public.websites_id_seq'::regclass);


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.articles (site, headline, href, t_stamp, id) FROM stdin;
bayer04.de	like2drive wird Mobilitätspartner von Bayer 04	https://www.bayer04.de/de-de/news/business/like2drive-wird-mobilitaetspartner-von-bayer-04	2021-04-05 16:27:21	454
fc-union-berlin.de	Union empfängt die Alte Dame	https://www.fc-union-berlin.de/de/union-live/news/profis/Union-empfaengt-die-Alte-Dame-20327I/	2021-04-05 16:25:45	441
fc.de/	U21 bezwingt Bergisch Gladbach	https://www.fc.de/fc-info/news/detailseite/details/u21-bezwingt-bergisch-gladbach/	2021-04-05 16:25:52	447
f95.de/	2:1! Fortuna fährt wichtigen Dreier in Darmstadt ein	https://www.f95.de/aktuell/news/profis/detail/27129-2-1-fortuna-faehrt-wichtigen-dreier-in-darmstadt-ein/68e5df6328dbb81bf0d53979751ffd16/	2021-04-05 16:25:56	451
bayer04.de	Bayer 04-Webseite gewinnt VEGA Digital Award 2019	https://www.bayer04.de/de-de/news/business/bayer-04-webseite-gewinnt-vega-digital-award-2019	2021-04-05 16:27:21	455
werder.de	Kofler nachnominiert	https://www.werder.de/aktuell/news/frauen/20202021/kofler-nationalmannschaft-05042021/	2021-04-05 16:27:24	461
fc-union-berlin.de	Lernangebot des NLZ erweitert	https://www.fc-union-berlin.de/de/union-live/news/amateure/Lernangebot-des-NLZ-erweitert-16210R/	2021-04-05 16:25:45	442
fc.de/	Heldt: „Konzentration auf die Arbeit“	https://www.fc.de/fc-info/news/detailseite/details/heldt-konzentration-auf-die-arbeit/	2021-04-05 16:25:52	445
f95.de/	F95 will Auswärtssieg „am Bölle“	https://www.f95.de/aktuell/news/profis/detail/27125-f95-will-auswaertssieg-am-boelle/b0a5b5bc7fe3848bb0db2a2189ac48a6/	2021-04-05 16:25:56	453
bayer04.de	Bayer 04 und SalzburgerLand verlängern	https://www.bayer04.de/de-de/news/business/bayer-04-und-salzburgerland-verlaengern	2021-04-05 16:27:21	456
werder.de	"Wirklich frustrierender" Moment für Augustinsson	https://www.werder.de/aktuell/news/profis/20202021/augustinsson-zum-eigentor-05042021/	2021-04-05 16:27:24	459
fc-union-berlin.de	Das Programmheft zum Hauptstadtduell	https://www.fc-union-berlin.de/de/union-live/news/verein/Das-Programmheft-zum-Hauptstadtduell-2513o/	2021-04-05 16:25:45	443
fc.de/	Ostereiersuche im FC-Fanshop	https://www.fc.de/fc-info/news/detailseite/details/ostereiersuche-im-fc-fanshop-1/	2021-04-05 16:25:52	446
f95.de/	„Wir haben heute den Sieg erzwungen"	https://www.f95.de/aktuell/news/profis/detail/27128-wir-haben-heute-den-sieg-erzwungen/d71f1a594b70f07f1b2856cd7d26e418/	2021-04-05 16:25:56	452
bayer04.de	Podcast-Gast und Speaker: Rolfes auf dem SPOBIS 2020	https://www.bayer04.de/de-de/news/bayer04/podcast-gast-und-speaker-rolfes-auf-dem-spobis-2020	2021-04-05 16:27:21	457
werder.de	Viel investiert, unglücklich verloren	https://www.werder.de/aktuell/news/profis/20202021/stimmen-nach-stuttgart-04042021/	2021-04-05 16:27:24	462
fc.de/	FC-Frauen gewinnen sechstes Spiel	https://www.fc.de/fc-info/news/detailseite/details/fc-frauen-gewinnen-sechstes-spiel/	2021-04-05 16:25:52	444
bayer04.de	Sport von Sky für nen 10er	https://www.bayer04.de/de-de/news/business/sport-von-sky-fuer-nen-10er	2021-04-05 16:27:21	458
werder.de	"Wir hätten mehr verdient gehabt"	https://www.werder.de/aktuell/news/profis/20202021/gross-im-werder-strom-talk-nach-dem-stuttgart-spiel-05042021/	2021-04-05 16:27:24	460
fc-union-berlin.de	Union und Hertha trennen sich mit 1:1-Unentschieden	https://www.fc-union-berlin.de/de/union-live/news/profis/Union-und-Hertha-trennen-sich-mit-1-1-Unentschieden-20328z/	2021-04-05 16:25:45	439
f95.de/	Bounce-Back am Bölle	https://www.f95.de/aktuell/news/profis/detail/27134-bounce-back-am-boelle/d07eafd05e3adfae2a19e749c39e3c77/	2021-04-05 16:25:56	449
werder.de	Später Gegentreffer entreißt verdienten Punkt	https://www.werder.de/aktuell/news/profis/20202021/spielberichte/spielbericht-stuttgart-04042021/	2021-04-05 16:27:24	463
fc-union-berlin.de	Einkaufen nur mit Negativtest	https://www.fc-union-berlin.de/de/union-live/news/verein/Einkaufen-nur-mit-Negativtest-2514t/	2021-04-05 16:25:45	440
fc.de/	Czichos: „Dreckige Niederlage“	https://www.fc.de/fc-info/news/detailseite/details/czichos-dreckige-niederlage/	2021-04-05 16:25:52	448
f95.de/	Achterbahnfahren mit Luka Krajnc	https://www.f95.de/aktuell/news/profis/detail/27132-achterbahnfahren-mit-luka-krajnc/a8c6d4f52a4be4f7922f36a815fe34e2/	2021-04-05 16:25:56	450
\.


--
-- Data for Name: websites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.websites (id, site, homepage, newspage, category, sports, geo, article_container, headline_container, href_element, headline_element) FROM stdin;
1	fcbayern.com	https://fcbayern.com/de	https://fcbayern.com/de/news	Club	Soccer	national	a.text-teaser.news-overview-teaser.type-grid	\N		div.header5
2	dierotenbullen.com	https://www.dierotenbullen.com/	https://www.dierotenbullen.com/de/aktuelles/neuigkeiten.html	Club	Soccer	national	div.m-card		a.m-card__link	h2.m-card__headline
3	bvb.de	https://www.bvb.de/	https://www.bvb.de/News/Uebersicht	Club	Soccer	National	article.news-teaser	\N	a	h1
4	borussia.de	https://www.borussia.de/de/startseite.html	https://www.borussia.de/de/aktuelles/news	Club	Soccer	National	div.bmg-m8-teaser__text-content	\N	a	h3
5	bayer04.de	https://www.bayer04.de/de-de/	https://www.bayer04.de/de-de/page/business	Club	Soccer	National	div.related-news-item	\N	a.news-content.item-container	span.news-title
6	schalke04.de	https://schalke04.de/	https://schalke04.de/aktuelles/newscenter/	Club	Soccer	National	a.teaser.teaser-article	\N		h3
7	tsg-hoffenheim.de	https://www.tsg-hoffenheim.de/	https://www.tsg-hoffenheim.de/aktuelles/news/	Club	Soccer	national	article.col-lg-4.col-md-6.col-sm-6	\N	a	h2
9	scfreiburg.com	https://www.scfreiburg.com/	https://www.scfreiburg.com/aktuell/nachrichten/verein/	Club	Soccer	national	div.c-news-strip__body	\N	a	h3
10	bayer04.de	https://www.bayer04.de/de-de/	https://www.bayer04.de/de-de/page/business	Club	Soccer	national	div.news-item.animate	\N	a	span.news-title
11	vfl-wolfsburg.de	https://www.vfl-wolfsburg.de/	https://www.vfl-wolfsburg.de/der-vfl/business/	Club	Soccer	national	article.news-item	\N	a	h3
12	fcaugsburg.de	https://www.fcaugsburg.de/	https://www.fcaugsburg.de/news/business	Club	Soccer	national	article.b-teaser	\N	a	h3
13	profis.eintracht.de	https://profis.eintracht.de/	https://profis.eintracht.de/news/	Club	Soccer	National	a.ef-article-card	\N		h3 span
14	fc-union-berlin.de	https://www.fc-union-berlin.de/	https://www.fc-union-berlin.de/de/union-live/news/	Club	Soccer	National	div.site-list-item.site-card	\N	a.site-button	h2
15	herthabsc.com	https://www.herthabsc.com/de/	https://www.herthabsc.com/de/nachrichten	Club	Soccer	National	div.teaser-container	\N	a.link-internal	h3.title
16	fc.de/	https://fc.de/	https://fc.de/fc-info/news/uebersicht/	Club	Soccer	National	div.mod-teaser-content	\N	h2 a.more	h2 a.more
17	werder.de	https://www.werder.de/	https://www.werder.de/de/aktuell/news/alle-news/	Club	Soccer	National	div.c-news-strip	\N	a	h3
18	f95.de/	https://www.f95.de/	https://www.f95.de/aktuell/news/	Club	Soccer	National	div.cnt	\N	h4 a	h4
19	scp07.de	https://www.scp07.de/	https://www.scp07.de/Newsarchiv/	Club	Soccer	National	article.dp-article	\N	a	h2
20	hsv.de	https://www.hsv.de/	https://www.hsv.de/uebersicht	Club	Soccer	National	div.item	\N	div.hidden-md a	div.hsvbox-header
21	vfb.de	https://www.vfb.de/	https://www.vfb.de/de/1893/aktuell/neues/	Club	Soccer	National	article.teaserArchiveArticle	\N	a	div.information a div.title
22	sgf1903.de	https://sgf1903.de/	https://sgf1903.de/de/aktuell/nachrichten/alle-nachrichten	Club	Soccer	National	div.c-news-strip	\N	a	a h3
23	fc-heidenheim.de	https://www.fc-heidenheim.de/	https://www.fc-heidenheim.de/news.html	Club	Soccer	National	div.newselement	\N	div.wrapper h3 a	div.wrapper h3
24	fc-erzgebirge.de/	https://www.fc-erzgebirge.de	https://www.fc-erzgebirge.de/sponsoren/aktuelles/	Club	Soccer	National	span.newsText	\N	h3 a	h3 a
25	ssv-jahn.de/	https://www.ssv-jahn.de/	https://www.ssv-jahn.de/alle-neuigkeiten/	Club	Soccer	National	div.news-latest-item	\N	div.news-latest-text div.news-latest-subheader a	div.news-latest-text h2
26	vfl.de	https://www.vfl.de/	https://www.vfl.de/vfl-aktuell/	Club	Soccer	National	article	\N	h3 a	h3 a
27	holstein-kiel.de	https://www.holstein-kiel.de/	https://www.holstein-kiel.de/	Club	Soccer	National	article.category-news-herren	\N	h3.entry-title a	h3.entry-title a
\.


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.articles_id_seq', 463, true);


--
-- Name: websites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.websites_id_seq', 27, true);


--
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- Name: websites websites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.websites
    ADD CONSTRAINT websites_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

