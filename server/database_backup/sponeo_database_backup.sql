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
fcaugsburg.de	Bernd Siegmund GmbH stattet FCA mit FFP2-Masken aus	https://www.fcaugsburg.de/article/bernd-siegmund-gmbh-stattet-fca-mit-ffp2-masken-aus-12819	2021-03-21 17:07:03	384
fcaugsburg.de	Die baramundi software AG verlängert ihr Engagement	https://www.fcaugsburg.de/article/die-baramundi-software-ag-verlangert-ihr-engagement-12794	2021-03-21 17:07:03	385
fcaugsburg.de	Stadtwerke Augsburg bleiben Exklusivpartner	https://www.fcaugsburg.de/article/stadtwerke-augsburg-bleiben-exklusivpartner-12561	2021-03-21 17:07:03	386
vfl-wolfsburg.de		https://www.vfl-wolfsburg.denewsdetails/news-detail/detail/news/zusammenarbeit-mit-hth/	2021-03-21 16:58:56	380
fcaugsburg.de	FCA verlängert mit Nike und 11teamsports	https://www.fcaugsburg.de/article/fca-verlaengert-mit-nike-und-11teamsports-12218	2021-03-21 17:07:03	387
vfl-wolfsburg.de	Namhafter Partner	https://www.vfl-wolfsburg.denewsdetails/news-detail/detail/news/namhafter-partner/	2021-03-21 16:58:56	381
fcaugsburg.de	Die Schönegger Käse-Alm bleibt Supplier	https://www.fcaugsburg.de/article/die-schoenegger-kaese-alm-bleibt-supplier-12444	2021-03-21 17:07:03	388
vfl-wolfsburg.de	Aramark übernimmt Public-Catering	https://www.vfl-wolfsburg.denewsdetails/news-detail/detail/news/aramark-uebernimmt-public-catering/	2021-03-21 16:58:56	382
vfl-wolfsburg.de	Neuer Partner aus China	https://www.vfl-wolfsburg.denewsdetails/news-detail/detail/news/neuer-partner-aus-china/	2021-03-21 16:58:56	383
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
\.


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.articles_id_seq', 388, true);


--
-- Name: websites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.websites_id_seq', 12, true);


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

