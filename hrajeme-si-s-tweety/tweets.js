var tweets = [
  {
    "id": 1011882878538526700,
    "created_at": "2018-06-27 08:04:12",
    "text": "Projev prezidenta republiky při jmenování členů vlády České republiky: https://t.co/39TmfNQSpk"
  },
  {
    "id": 1011881715244130300,
    "created_at": "2018-06-27 07:59:35",
    "text": "Prezident republiky jmenoval členy nové vlády: https://t.co/mQ5sbwMgXD"
  },
  {
    "id": 1011878817475055600,
    "created_at": "2018-06-27 07:48:04",
    "text": "RT @strakovka: Prezident republiky Miloš Zeman na Pražském hradě jmenoval novou vládu pod vedením Andreje Babiše. https://t.co/8dIqRkf5KQ"
  },
  {
    "id": 1011877494545412100,
    "created_at": "2018-06-27 07:42:49",
    "text": "Pan prezident dnes na Pražském hradě jmenoval členy nové vlády premiéra Andreje Babiše. Gratulujeme! https://t.co/mfSN6kQ0Ta"
  },
  {
    "id": 1011848858362662900,
    "created_at": "2018-06-27 05:49:01",
    "text": "Ovčáček: „Pražská kavárna“ převzala komunistické vidění světa a nahradila si USA Ruskem https://t.co/zLsRGXwL12"
  },
  {
    "id": 1011683072151081000,
    "created_at": "2018-06-26 18:50:15",
    "text": "RT @JVildumetzova: Na Hradě dnes proběhlo přátelské posezení s panem prezidentem Milošem Zemanem, který si ke kulatému stolu pozval jak sou…"
  },
  {
    "id": 1011623683130056700,
    "created_at": "2018-06-26 14:54:15",
    "text": "Pan prezident dnes na Hradě přátelsky přivítal hejtmanky, hejtmany a bývalé hejtmany. https://t.co/A2APgAnbVc"
  },
  {
    "id": 1011621538620158000,
    "created_at": "2018-06-26 14:45:44",
    "text": "RT @realDonaldTrump: SUPREME COURT UPHOLDS TRUMP TRAVEL BAN. Wow!"
  },
  {
    "id": 1011613688594395100,
    "created_at": "2018-06-26 14:14:32",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě na jejich žádost předsedu Ústavního soudu České repub… https://t.co/X21qVZJqxw"
  },
  {
    "id": 1011565476005269500,
    "created_at": "2018-06-26 11:02:58",
    "text": "Prezident republiky jmenuje členy nové vlády. Podrobnosti zde: https://t.co/n1YXxwabp0"
  },
  {
    "id": 1011558777487847400,
    "created_at": "2018-06-26 10:36:21",
    "text": "Prezident republiky podepsal ratifikační listinu: https://t.co/7S4wDySfPQ"
  },
  {
    "id": 1011531673681489900,
    "created_at": "2018-06-26 08:48:39",
    "text": "Důvod, proč bylo přerušeno soudní civilní řízení, je mimořádně závažný. Bylo totiž zahájeno trestní řízení ve vztah… https://t.co/uki40eR9y8"
  },
  {
    "id": 1011259984259244000,
    "created_at": "2018-06-25 14:49:03",
    "text": "Ve středu dne 27. června 2018 v 9.00 hodin prezident republiky Miloš Zeman na Pražském hradě jmenuje členy nové vlády České republiky."
  },
  {
    "id": 1011259950683820000,
    "created_at": "2018-06-25 14:48:55",
    "text": "Prezident republiky Miloš Zeman dnes přijal v Lánech T. Malou, kandidátku na post ministryně spravedlnosti, M. Nová… https://t.co/2grWIUxkNX"
  },
  {
    "id": 1011249697888129000,
    "created_at": "2018-06-25 14:08:10",
    "text": "Právě teď! Pan prezident přijal v Lánech kandidáta na funkci ministra kultury Antonína Staňka. https://t.co/xN1IXvGlkD"
  },
  {
    "id": 1011233549628919800,
    "created_at": "2018-06-25 13:04:00",
    "text": "Právě teď! Pan prezident přijal v Lánech kandidáta na funkci ministra práce a sociálních věcí Petra Krčála. https://t.co/e39LcfL9uu"
  },
  {
    "id": 1011195648262266900,
    "created_at": "2018-06-25 10:33:24",
    "text": "Právě teď! Pan prezident přijal v Lánech kandidátku na funkci ministryně průmyslu a obchodu Martu Novákovou. https://t.co/9QPfEYeYOQ"
  },
  {
    "id": 1011181519749222400,
    "created_at": "2018-06-25 09:37:15",
    "text": "Právě teď! Pan prezident přijal v Lánech kandidátku na funkci ministryně spravedlnosti Taťánu Malou. https://t.co/e7rj7HrABr"
  },
  {
    "id": 1011170802115530800,
    "created_at": "2018-06-25 08:54:40",
    "text": "@david_pelc Ohromující historickou neznalostí trpíte výhradně Vy: Ještě ve dvě hodiny ráno 16. března 1939 přinesli… https://t.co/f4bAvG9grO"
  },
  {
    "id": 1011164270300672000,
    "created_at": "2018-06-25 08:28:43",
    "text": "S Jiřím Ovčáčkem o komunistickém myšlení „pražské kavárny“, kastě nedotknutelných i o Ukrajině: https://t.co/SMenzJEext"
  },
  {
    "id": 1010930734306070500,
    "created_at": "2018-06-24 17:00:43",
    "text": "Lány, Masarykova pracovna, právě teď. Setkání pana prezidenta s premiérem Andrejem Babišem a předsedou ČSSD Janem H… https://t.co/vsW74eOOox"
  },
  {
    "id": 1010872351246954500,
    "created_at": "2018-06-24 13:08:44",
    "text": "Celý záznam dnešního pořadu “S prezidentem v Lánech: https://t.co/C6bgLLDDVf"
  },
  {
    "id": 1010847741763883000,
    "created_at": "2018-06-24 11:30:56",
    "text": "“Odchází bojovníci za naši svobodu a i jejich smrt nám připomíná, že za svobodu se musí bojovat,” reagoval pan prez… https://t.co/AjkfYDaj5T"
  },
  {
    "id": 1010827381064585200,
    "created_at": "2018-06-24 10:10:02",
    "text": "Program přijetí nominantů na ministerské posty v Lánech v pondělí 25. 6. 2018. Pan prezident se tradičně setká s no… https://t.co/m6nyHWGTt0"
  },
  {
    "id": 1010817902486880300,
    "created_at": "2018-06-24 09:32:22",
    "text": "Je to tak! Pan premiér dodržel dané slovo. Zeman: Babiš mi Pocheho na ministra zahraničí nenavrhl https://t.co/GZlFcdAkSR"
  },
  {
    "id": 1010810107322601500,
    "created_at": "2018-06-24 09:01:24",
    "text": "Právě teď! Živě na https://t.co/9momfIxPkd pořad “S prezidentem v Lánech”. https://t.co/xAF8yUR1Bv"
  },
  {
    "id": 1010792062936076300,
    "created_at": "2018-06-24 07:49:42",
    "text": "Dnes od 11:00 sledujte tradiční pořad “S prezidentem v Lánech” na webu https://t.co/9momfIxPkd! https://t.co/o3X3MniNp2"
  },
  {
    "id": 1010776689532694500,
    "created_at": "2018-06-24 06:48:36",
    "text": "Pavel Bělobrádek v rozhovoru pro Právo odhaluje, že u nás neexistuje skutečně konzervativní pravice: https://t.co/neKxlldWoQ"
  },
  {
    "id": 1010774365099741200,
    "created_at": "2018-06-24 06:39:22",
    "text": "Zeman promluví o nové vládě. Podpora ČSSD rapidně klesla, voliči varují i ANO: https://t.co/idkSyszOs7"
  },
  {
    "id": 1010576418051448800,
    "created_at": "2018-06-23 17:32:48",
    "text": "RT @AndrejBabis: Státy V4 jsou jednotné, kvóty odmítáme a žádáme zastavit migraci mimo Evropu. Rakouský kancléř @sebastiankurz má stejný ná…"
  },
  {
    "id": 1010490541837078500,
    "created_at": "2018-06-23 11:51:33",
    "text": "RT @realDonaldTrump: The Russian Witch Hunt is Rigged!"
  },
  {
    "id": 1010431658049392600,
    "created_at": "2018-06-23 07:57:34",
    "text": "Poničení pomníčku rudoarmějců šetří policie. Ruská ambasáda děkuje Ovčáčkovi za ‚osobní zásah’ https://t.co/rl317llt3p"
  },
  {
    "id": 1010233464937943000,
    "created_at": "2018-06-22 18:50:01",
    "text": "Klidný nadcházející víkend, přátelé! A nezapomeňte v neděli od 11:00 sledovat rozhovor s panem prezidentem na… https://t.co/312AIsKc38"
  },
  {
    "id": 1010187791366541300,
    "created_at": "2018-06-22 15:48:32",
    "text": "Prezident republiky Miloš Zeman přijal v pátek dne 22. června 2018 na zámku v Lánech předsedu ČSSD a nominanta na f… https://t.co/tLcYYlZKmA"
  },
  {
    "id": 1010175060068446200,
    "created_at": "2018-06-22 14:57:57",
    "text": "Podporovatel migrace obviňovaný z korupce nemůže být ve vládě, míní Zeman: https://t.co/6E9cRCgA0p"
  },
  {
    "id": 1010169984897732600,
    "created_at": "2018-06-22 14:37:47",
    "text": "Prezident republiky přijal Miroslava Pocheho. Podrobnosti zde: https://t.co/XuuyPoHhY9"
  },
  {
    "id": 1010148045898514400,
    "created_at": "2018-06-22 13:10:36",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 21. června 2018, 20:15, TV Barrandov: https://t.co/TDoioSuac1"
  },
  {
    "id": 1010085419109834800,
    "created_at": "2018-06-22 09:01:45",
    "text": "Prezident republiky Miloš Zeman vystoupí v neděli dne 24. června 2018 v 11.00 hodin v pořadu „S prezidentem v Lánec… https://t.co/7mJ3M6grOE"
  },
  {
    "id": 1010074801292107800,
    "created_at": "2018-06-22 08:19:33",
    "text": "Myslím, že pokud pan Poche usiluje o jakékoli ministerstvo, tak tím jen dokazuje, že na žádné ministerstvo nemá nár… https://t.co/I9hJRfh3h6"
  },
  {
    "id": 1009863482119016400,
    "created_at": "2018-06-21 18:19:51",
    "text": "Rozhodnutí pana premiéra má podporu pana prezidenta. Solidarita s přáteli ve V4 je klíčová! https://t.co/HLguLglIFq"
  },
  {
    "id": 1009846630777057300,
    "created_at": "2018-06-21 17:12:53",
    "text": "O odsunu Němců rozhodli spojenci už v roce 1943. Tvrzení Merkelové je nepřesné, upozorňuje historik: https://t.co/hDB5xaciy5"
  },
  {
    "id": 1009836309467279400,
    "created_at": "2018-06-21 16:31:52",
    "text": "Pan prezident na aktuální téma v rozhovoru pro https://t.co/rS9bzEibPt Více zde: https://t.co/dsO1PGLbEF https://t.co/YdrTom4zCo"
  },
  {
    "id": 1009781107120894000,
    "created_at": "2018-06-21 12:52:31",
    "text": "V neděli 24. června 2018 od 11:00 sledujte živě na https://t.co/9momfIxPkd pořad “S prezidentem v Lánech”! https://t.co/teSjBC7ux6"
  },
  {
    "id": 1009768845823959000,
    "created_at": "2018-06-21 12:03:48",
    "text": "Paní Ivana Zemanová navštívila Domov pro seniory v Mostě. https://t.co/pAe1uvkhwW"
  },
  {
    "id": 1009762234418061300,
    "created_at": "2018-06-21 11:37:31",
    "text": "@cejny Zdá se, že umíte psát, ale neumíte číst. Měl byste to dohnat."
  },
  {
    "id": 1009755515507953700,
    "created_at": "2018-06-21 11:10:49",
    "text": "Právě teď živě na OVTV setkání pana prezidenta s občany v Bílině: https://t.co/I9PZFR1M0X https://t.co/bKXiHnwa44"
  },
  {
    "id": 1009744472396193800,
    "created_at": "2018-06-21 10:26:57",
    "text": "@honzabartosek Problém je v tom, že komentář https://t.co/VFgRvd2Ubv je lživý. Toto jsou fakta o “vyrovnání s minul… https://t.co/gvvtceuVAP"
  },
  {
    "id": 1009720147584700400,
    "created_at": "2018-06-21 08:50:17",
    "text": "RT @strakovka: Premiér odletěl na jednání zemí #V4 v Budapešti. S kolegy z Maďarska, Polska a Slovenska bude řešit  především otázku migrac…"
  },
  {
    "id": 1009717598639022100,
    "created_at": "2018-06-21 08:40:09",
    "text": "Ústí nad Labem, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/WXOtFBzxrd"
  },
  {
    "id": 1009551487104634900,
    "created_at": "2018-06-20 21:40:05",
    "text": "Tak si to zopakujme. Nacistické Německo, které chystalo genocidu našeho národa, prohrálo válku. Zaplaťpánbůh. Mezi… https://t.co/PIPOIj2D05"
  },
  {
    "id": 1009505755790282800,
    "created_at": "2018-06-20 18:38:22",
    "text": "Paní Ivana Zemanová navštívila Lesní správu Litvínov a státní zámek Jezeří. https://t.co/aZvxPNt5HU"
  },
  {
    "id": 1009479713956474900,
    "created_at": "2018-06-20 16:54:53",
    "text": "Momentky z druhého dne návštěvy Ústeckého kraje. https://t.co/WixDye3Eye"
  },
  {
    "id": 1009469506731864000,
    "created_at": "2018-06-20 16:14:20",
    "text": "STOP novodobým kádrovákům, kteří chtějí zničit svobodu a demokracii.\n\nJednoznačná podpora Václava Klause ml. \n\nhttps://t.co/pRNeDk70MN"
  },
  {
    "id": 1009464033525817300,
    "created_at": "2018-06-20 15:52:35",
    "text": "Neospravedlnitelný odsun Němců? Hluboký nesouhlas, odmítl Zeman tvrzení Merkelové: https://t.co/rILXFGNr3V"
  },
  {
    "id": 1009456909009768400,
    "created_at": "2018-06-20 15:24:16",
    "text": "Lišany. Setkání s občany bylo skvělé! https://t.co/GRHs9Z7dUC"
  },
  {
    "id": 1009448913147965400,
    "created_at": "2018-06-20 14:52:30",
    "text": "Právě teď živě na OVTV setkání pana prezidenta s občany v Lišanech. Právě Lišany se pyšní rekordem. Pan prezident z… https://t.co/pH84DAuABb"
  },
  {
    "id": 1009434187286401000,
    "created_at": "2018-06-20 13:53:59",
    "text": "Reakce pana prezidenta na prohlášení spolkové kancléřky Angely Merkelové k odsunu Němců: Hluboký nesouhlas!"
  },
  {
    "id": 1009426478960963600,
    "created_at": "2018-06-20 13:23:21",
    "text": "Právě teď živě na OVTV setkání pana prezidenta s občany v Bečově: https://t.co/iS3ysrxgLh https://t.co/mMD9b7lv0g"
  },
  {
    "id": 1009423311158300700,
    "created_at": "2018-06-20 13:10:46",
    "text": "Postupimská dohoda (1945): Tři vlády prozkoumaly tuto otázku po všech stránkách a uznaly, že německé obyvatelstvo n… https://t.co/KxVTz8VAxd"
  },
  {
    "id": 1009415489305669600,
    "created_at": "2018-06-20 12:39:41",
    "text": "https://t.co/ZgWtZylRoD musí stáhnout https://t.co/rS9bzEibPt ze svého seznamu nedůvěryhodných webů, nařídil soud v… https://t.co/6wgzuPh6Ma"
  },
  {
    "id": 1009405497399824400,
    "created_at": "2018-06-20 11:59:59",
    "text": "@somebody_0001 Pokud používám označení pražský kmotr, cituji místopředsedu Pirátů Jakuba Michálka. A ten, jak známo… https://t.co/NESpbHBdnW"
  },
  {
    "id": 1009404370855874600,
    "created_at": "2018-06-20 11:55:30",
    "text": "V nejnovějším komentáři na https://t.co/VFgRvd2Ubv M. Fendrych šíří při srdnaté obraně pražského kmotra dezinformac… https://t.co/GIhMDwC4bF"
  },
  {
    "id": 1009389716775555100,
    "created_at": "2018-06-20 10:57:16",
    "text": "RT @netanyahu: Israel thanks President Trump, Secretary Pompeo and Ambassador Haley for their courageous decision against the hypocrisy and…"
  },
  {
    "id": 1009376219132022800,
    "created_at": "2018-06-20 10:03:38",
    "text": "Právě teď živě na OVTV setkání pana prezidenta se zaměstnanci Elektrárny Ledvice: https://t.co/Bt2plV9uPh https://t.co/CMVFkveQtD"
  },
  {
    "id": 1009358967611457500,
    "created_at": "2018-06-20 08:55:05",
    "text": "RT @IsraelinCZ: 200,000 Izraelců strávilo včerejší noc v krytech. Pal. džihádisté odpálili z Gazy okupované Hamásem kolem 45 raket na města…"
  },
  {
    "id": 1009356131569946600,
    "created_at": "2018-06-20 08:43:49",
    "text": "Prezident republiky zaslal blahopřejný telegram islandskému prezidentovi: https://t.co/2t7sKgc3t9"
  },
  {
    "id": 1009212156565475300,
    "created_at": "2018-06-19 23:11:43",
    "text": "RT @AIPAC: In 2017, all 100 US senators wrote @antonioguterres that #UNHRC targeting of #Israel is unacceptable, and urged reform and remov…"
  },
  {
    "id": 1009203637762056200,
    "created_at": "2018-06-19 22:37:51",
    "text": "Hrad nikdy nezradí své přátele. Z USA a z Izraele. https://t.co/OouBmuK4j3"
  },
  {
    "id": 1009202378984362000,
    "created_at": "2018-06-19 22:32:51",
    "text": "RT @StateDept: .@USUN Ambassador Nikki Haley announces the U.S. withdrawal from the @UN #HumanRightsCouncil. https://t.co/G1Zk7ZZhGT"
  },
  {
    "id": 1009199475255103500,
    "created_at": "2018-06-19 22:21:19",
    "text": "USA mají naši jednoznačnou podporu. Spojenectví se testuje v nejtěžších chvílích. A to nikdy nezradíme: https://t.co/tBtlRPH0Ow"
  },
  {
    "id": 1009120058730336300,
    "created_at": "2018-06-19 17:05:45",
    "text": "Paní Ivana Zemanová navštívila Oblastní muzeum v Mostě, kde se zúčastnila vernisáže výstavy “100 let od vzniku samo… https://t.co/LELIpYkTjo"
  },
  {
    "id": 1009104512378908700,
    "created_at": "2018-06-19 16:03:58",
    "text": "Milí přátelé, pan prezident vám přeje klidný a pohodový večer! https://t.co/qRlI5rT9iW"
  },
  {
    "id": 1009103645793808400,
    "created_at": "2018-06-19 16:00:32",
    "text": "Momentky z prvního dne návštěvy Ústeckého kraje. https://t.co/MTSCRTDUgC"
  },
  {
    "id": 1009092244882718700,
    "created_at": "2018-06-19 15:15:13",
    "text": "Pan Poche patří mezi ty pražské kmotry, upozornil dnes na @Seznam_Zpravy místopředseda Pirátů Jakub Michálek. Mozai… https://t.co/s4S9EwUXFz"
  },
  {
    "id": 1009070166351798300,
    "created_at": "2018-06-19 13:47:29",
    "text": "Právě teď živě na OVTV setkání pana prezidenta s občany v Podbořanech: https://t.co/TM7UdD1ia1 https://t.co/7JemjwuTJd"
  },
  {
    "id": 1009058313089273900,
    "created_at": "2018-06-19 13:00:23",
    "text": "Paní Ivana Zemanová navštívila v Ústí nad Labem kostel Nanebevzetí Panny Marie a vilu Franze Petschka, ve které síd… https://t.co/cClb6pZ7Fc"
  },
  {
    "id": 1009043438409576400,
    "created_at": "2018-06-19 12:01:17",
    "text": "24. epizoda - Hledá se prezident(ské auto) https://t.co/L2iaCXTs0V"
  },
  {
    "id": 1009001386305048600,
    "created_at": "2018-06-19 09:14:11",
    "text": "Právě teď živě na OVTV setkání pana prezidenta se zastupiteli Ústeckého kraje: https://t.co/KNtyPM4ttj https://t.co/HrX5jWpHyi"
  },
  {
    "id": 1008996642870132700,
    "created_at": "2018-06-19 08:55:20",
    "text": "Pan prezident se svojí paní zahájili setkáním s hejtmanem Oldřichem Bubeníčkem a jeho manželkou třídenní návštěvu Ú… https://t.co/rAFnQKT1AV"
  },
  {
    "id": 1008994568090652700,
    "created_at": "2018-06-19 08:47:05",
    "text": "RT @USEmbassyPrague: Před 70 lety - 19. června 1948 - v Praze začal XI. všesokolský slet, poslední před zrušením Sokola na dlouhých 41 let.…"
  },
  {
    "id": 1008790059250864100,
    "created_at": "2018-06-18 19:14:27",
    "text": "Velmi inspirativní čtení! https://t.co/DtEk94Oj85"
  },
  {
    "id": 1008763207299813400,
    "created_at": "2018-06-18 17:27:45",
    "text": "Tak. A teď začne odpočítávání, kdy mne nějaký tzv. politický šmejd označí za ruského agenta! https://t.co/j6cVwbRM7j"
  },
  {
    "id": 1008759501732958200,
    "created_at": "2018-06-18 17:13:01",
    "text": "OBRAZEM: Klaus slavil narozeniny. Popřát mu přijeli Zeman i Duka https://t.co/SjekNQzkIb"
  },
  {
    "id": 1008733252545282000,
    "created_at": "2018-06-18 15:28:43",
    "text": "Mimořádně zásadní poselství pana prezidenta, které zaznělo v blahopřání Václavu Klausovi: https://t.co/aCvhsOgGDu"
  },
  {
    "id": 1008730936119320600,
    "created_at": "2018-06-18 15:19:31",
    "text": "Když jsem napsal NIKDY, platí, že NIKDY. Kdo ještě pochybuje, nechť se seznámí s jasným vyjádřením pana prezidenta… https://t.co/dZgDG5dVCr"
  },
  {
    "id": 1008728849377579000,
    "created_at": "2018-06-18 15:11:13",
    "text": "Gratulace prezidenta republiky Václavu Klausovi: https://t.co/6eDksIjzU4"
  },
  {
    "id": 1008697582552600600,
    "created_at": "2018-06-18 13:06:59",
    "text": "RT @realDonaldTrump: We don’t want what is happening with immigration in Europe to happen with us!"
  },
  {
    "id": 1008688837562859500,
    "created_at": "2018-06-18 12:32:14",
    "text": "RT @realDonaldTrump: WITCH HUNT! There was no Russian Collusion. Oh, I see, there was no Russian Collusion, so now they look for obstructio…"
  },
  {
    "id": 1008665915578372100,
    "created_at": "2018-06-18 11:01:09",
    "text": "Závažný argument přímo z lůna ČSSD. Senátor Jiří Dienstbier: Poche nikdy neměl být navržen, neb jde o osobu bez mor… https://t.co/31XUOzfxNg"
  },
  {
    "id": 1008663005125541900,
    "created_at": "2018-06-18 10:49:35",
    "text": "Opakuji, že plnou odpovědnost za vzniklou situaci i následky nese výhradně ČSSD. Nikoliv prezident republiky! https://t.co/7njTwyUCwu"
  },
  {
    "id": 1008653407559745500,
    "created_at": "2018-06-18 10:11:26",
    "text": "To už to bylo. ODS, TOP 09, mainstreamoví novináři a Pražská kavárna mají “upřímnou” starost o osud ČSSD. Na druhé… https://t.co/SQe5iSzcX9"
  },
  {
    "id": 1008650789139746800,
    "created_at": "2018-06-18 10:01:02",
    "text": "@honzabartosek Je to možné a jde to: https://t.co/wJUUcexsbt"
  },
  {
    "id": 1008613950055964700,
    "created_at": "2018-06-18 07:34:39",
    "text": "22. května 2018. Dopis M. Poche členům ČSSD. Přímý útok na Izrael a USA. Přímý útok na naše spojence a českou zahra… https://t.co/6pgsXgqLlJ"
  },
  {
    "id": 1008611883824418800,
    "created_at": "2018-06-18 07:26:26",
    "text": "Nepřijatelné, vyškrtněte SPD ze zprávy o extremismu, cupuje Hrad zpožděný dokument z vnitra https://t.co/NY5gB4i8rX"
  },
  {
    "id": 1008610060254285800,
    "created_at": "2018-06-18 07:19:12",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Ústeckém kraji ve dnech 19. - 21. června 2018:… https://t.co/1wWhyg9ah3"
  },
  {
    "id": 1008602803919573000,
    "created_at": "2018-06-18 06:50:22",
    "text": "Pro ČR jsou mimořádně cenná spojenectví se Státem Izrael a s USA, s Benjaminem Netanjahuem a s Donaldem Trumpem. Pr… https://t.co/TeCagVF2dw"
  },
  {
    "id": 1008600647791448000,
    "created_at": "2018-06-18 06:41:47",
    "text": "Prezident republiky Miloš Zeman s manželkou Ivanou Zemanovou navštíví ve dnech 19. – 21. června 2018 Ústecký kraj.… https://t.co/lOQdNsVeIi"
  },
  {
    "id": 1008598498948902900,
    "created_at": "2018-06-18 06:33:15",
    "text": "Jedna věta, která plně vystihuje, proč nikdy ministerstvo zahraničních věcí! Týdeník Echo, 5/2018\nRedaktorka:  \n„Ne… https://t.co/Xmqme2GuwW"
  },
  {
    "id": 1008591957533261800,
    "created_at": "2018-06-18 06:07:16",
    "text": "Vzkaz @jhamacek Tohle opravdu není nedorozumění, jak tvrdíte v MfD. Tohle je principiální věc. Ve vládě nemůže být… https://t.co/LtpVmEgB6F"
  },
  {
    "id": 1008582259174268900,
    "created_at": "2018-06-18 05:28:43",
    "text": "RT @SociologPetrHam: Počítejme s tím, že se v nejbližších hodinách objeví v mainstreamových médiích články, že Poche nikdy nebyl proimigrač…"
  },
  {
    "id": 1008577338991435800,
    "created_at": "2018-06-18 05:09:10",
    "text": "Hezký mediální pokus o záchranu. Takže ještě jednou a důrazně, to fakt není falešná zpráva: On se postavil proti ČR… https://t.co/aKx4gSL9AY"
  },
  {
    "id": 1008382072086499300,
    "created_at": "2018-06-17 16:13:15",
    "text": "RT @iROZHLAScz: Hrad (@PREZIDENTmluvci) po schůzce Miloš Zeman - @AndrejBabis k vládnímu angažmá @PocheMEP https://t.co/xBe4WxwBPG https://…"
  },
  {
    "id": 1008379178973106200,
    "created_at": "2018-06-17 16:01:45",
    "text": "Problém s Pochem není novinka, na jednáních se řešil opakovaně, uvedl dnes pan premiér. Je to přesně tak! https://t.co/FO04WYm6o6"
  },
  {
    "id": 1008345776450342900,
    "created_at": "2018-06-17 13:49:01",
    "text": "Zásadní tisková zpráva z jednání pana prezidenta s panem premiérem. Čtěte zde: https://t.co/1jH5AjLkh3"
  },
  {
    "id": 1008318748145709000,
    "created_at": "2018-06-17 12:01:37",
    "text": "Lány, právě teď! Zásadní setkání zahájeno. Pan prezident přijal předsedu vlády Andreje Babiše. https://t.co/qZf026Ag2v"
  },
  {
    "id": 1008297887946674200,
    "created_at": "2018-06-17 10:38:44",
    "text": "K zásadnímu vyjádření předsedy KSČM doplňuji, že Jan Hamáček před referendem ČSSD slíbil panu prezidentovi, že před… https://t.co/rgdir4WorU"
  },
  {
    "id": 1008291686638899200,
    "created_at": "2018-06-17 10:14:05",
    "text": "Plnou a nezpochybnitelnou odpovědnost za další vývoj situace ponese ČSSD prosazující absolutně nepřijatelného M. Po… https://t.co/6f9kntFpkE"
  },
  {
    "id": 1008258682986090500,
    "created_at": "2018-06-17 08:02:57",
    "text": "RT @TBarrandov: Unikla vám čtvrteční premiéra pořadu TÝDEN s prezidentem? Nestihli jste ve středu sledovat Kauzy Jaromíra Soukupa?\nDnes mát…"
  },
  {
    "id": 1008219184420057100,
    "created_at": "2018-06-17 05:26:00",
    "text": "ČSSD se rozhodla poplivat všechny hodnoty, které jsou nám drahé. Za nástupce dr. Edvarda Beneše, Jana Masaryka a Ji… https://t.co/rtXVR3ypRq"
  },
  {
    "id": 1008033444390162400,
    "created_at": "2018-06-16 17:07:56",
    "text": "@SimonEhrlich Ani to slovo neumíte správně napsat. Má to pan Poche příznivce!"
  },
  {
    "id": 1008024806749540400,
    "created_at": "2018-06-16 16:33:36",
    "text": "Nedůstojná šaráda ČSSD. Prezident nikdy nejmenuje Pocheho, zní z Hradu https://t.co/rCn6GPuWLe"
  },
  {
    "id": 1008014047453859800,
    "created_at": "2018-06-16 15:50:51",
    "text": "Tuhle nedůstojnou šarádu v režii ČSSD utneme velmi rychle. Pan prezident M. Pocheho NIKDY nejmenuje ministrem zahra… https://t.co/h8wphe9byg"
  },
  {
    "id": 1007948239692288000,
    "created_at": "2018-06-16 11:29:21",
    "text": "Pan prezident nechce Poche kvůli jeho protiizraelským a protiamerickým postojům. A tenhle pirátský “expert” blábolí… https://t.co/6bmaa6BDIe"
  },
  {
    "id": 1007933766470459400,
    "created_at": "2018-06-16 10:31:51",
    "text": "Co má větší hodnotu? Stabilní vláda pracující ve prospěch republiky a občanů nebo ministerské křeslo pro pražského… https://t.co/6QNxK77ngQ"
  },
  {
    "id": 1007928448516575200,
    "created_at": "2018-06-16 10:10:43",
    "text": "RT @AndrejBabis: Ke jmenování pana Miroslava Pocheho mi dovolte říct pár věcí, které ale asi víte. https://t.co/sl6mb82jX3"
  },
  {
    "id": 1007925331628625900,
    "created_at": "2018-06-16 09:58:20",
    "text": "Poslechne J. Hamáček rozkaz pražského “experta” M. Poche tvářícího se jako faktický šéf ČSSD nebo bude jednat ve pr… https://t.co/CO7blJAQVi"
  },
  {
    "id": 1007917963863879700,
    "created_at": "2018-06-16 09:29:03",
    "text": "@PJursik Nějaká nula z TOP 09 sázkové kanceláře fakt nezajímá. Běžte si hrát s Ferim!"
  },
  {
    "id": 1007917497784393700,
    "created_at": "2018-06-16 09:27:12",
    "text": "Hle, jak pro koryto vyhrožuje a vydírá! Takové dno česká politika dlouho nepamatuje. A takové dno nikdy nebude mini… https://t.co/wt7xth6ZZ0"
  },
  {
    "id": 1007888591979274200,
    "created_at": "2018-06-16 07:32:20",
    "text": "A opět smutná zpráva... Legendy odcházejí a zůstává prázdno. https://t.co/SkTAYj9EKB"
  },
  {
    "id": 1007691348781264900,
    "created_at": "2018-06-15 18:28:34",
    "text": "Klidný nadcházející víkend, přátelé! https://t.co/IkUxb7H05n"
  },
  {
    "id": 1007690615289729000,
    "created_at": "2018-06-15 18:25:39",
    "text": "@FranzPaprika Cena již byla stanovena: 0 Kč."
  },
  {
    "id": 1007689189645799400,
    "created_at": "2018-06-15 18:19:59",
    "text": "Šlo o předmět z trestné činnosti, který z rozhodnutí soudu propadl státu. Plky o milionové hodnotě zbaští jen novin… https://t.co/E9QaLBN0OG"
  },
  {
    "id": 1007683869112401900,
    "created_at": "2018-06-15 17:58:50",
    "text": "RT @realDonaldTrump: I’ve had to beat 17 very talented people including the Bush Dynasty, then I had to beat the Clinton Dynasty, and now I…"
  },
  {
    "id": 1007664221314789400,
    "created_at": "2018-06-15 16:40:46",
    "text": "Od radosti ke zlosti aneb dvojí účinek červených trenclí:\n\nKdyž nad Hradem vlály, \ntrotlové nadšeně mručeli.\nKdyž v… https://t.co/uzxuAv6cUG"
  },
  {
    "id": 1007648696497004500,
    "created_at": "2018-06-15 15:39:05",
    "text": "Zopakujme si zásadní důvody. M. Poche je odpůrce národního státu, podpořil migrační kvóty a útočí na Stát Izrael a… https://t.co/b9M1z1Xs09"
  },
  {
    "id": 1007646349729435600,
    "created_at": "2018-06-15 15:29:45",
    "text": "Pan prezident v úvodu vnitrostranického referenda veřejně informoval členy ČSSD, že M. Poche nejmenuje ministrem za… https://t.co/0dUGomdh03"
  },
  {
    "id": 1007645171108974600,
    "created_at": "2018-06-15 15:25:04",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 14. června 2018, 20:15, TV Barrandov: https://t.co/GI7Hxcj1js"
  },
  {
    "id": 1007644213884932100,
    "created_at": "2018-06-15 15:21:16",
    "text": "RT @AmbMeron: Czech president: ‘Netanyahu offered his Jerusalem home to be our embassy’ https://t.co/Z8yMdsG0QQ"
  },
  {
    "id": 1007627118539403300,
    "created_at": "2018-06-15 14:13:20",
    "text": "RT @AmbMeron: Shabbat Shalom https://t.co/8WGDmdVJP9"
  },
  {
    "id": 1007348372343328800,
    "created_at": "2018-06-14 19:45:42",
    "text": "Mám velkou radost z úspěchu dnešní akce. Odhalili jsme pokrytectví části novinářů a politiků. Státní symbol - prezi… https://t.co/qrE9qU7Nmh"
  },
  {
    "id": 1007331631164772400,
    "created_at": "2018-06-14 18:39:10",
    "text": "@JanThompsonFCO Velká gratulace :-)"
  },
  {
    "id": 1007328335142293500,
    "created_at": "2018-06-14 18:26:05",
    "text": "Mainstreamoví novináři a strany tzv. demokratického bloku na znamení smutku a rozhořčení z akce prezidenta republik… https://t.co/Tu1ddCohvS"
  },
  {
    "id": 1007325580721905700,
    "created_at": "2018-06-14 18:15:08",
    "text": "@citarnyknihy Novináři se za ty červené trenky bijí jak lvi! Zřejmě je považují za profesní standartu."
  },
  {
    "id": 1007310172405076000,
    "created_at": "2018-06-14 17:13:54",
    "text": "Tak se podívejte na ty ubohé pokrytce! Když skupina Ztohoven zničila standartu prezidenta republiky, olizovali se b… https://t.co/T5csukS8EZ"
  },
  {
    "id": 1007286239198838800,
    "created_at": "2018-06-14 15:38:48",
    "text": "Projev prezidenta republiky při tiskovém brífinku: https://t.co/HCswFpMFS9"
  },
  {
    "id": 1007284142772576300,
    "created_at": "2018-06-14 15:30:28",
    "text": "Prezident republiky zaslal gratulaci čínskému prezidentovi: https://t.co/r3T8M5FAep"
  },
  {
    "id": 1007280023143964700,
    "created_at": "2018-06-14 15:14:06",
    "text": "Prezident republiky jmenoval nového rektora: https://t.co/Z1fzinFRyP"
  },
  {
    "id": 1007279595102572500,
    "created_at": "2018-06-14 15:12:24",
    "text": "Prezident republiky podepsal jmenovací dekrety nových profesorů: https://t.co/0w6ZVC0NG6"
  },
  {
    "id": 1007277751391354900,
    "created_at": "2018-06-14 15:05:04",
    "text": "Z dnešní akce v zahradě Lumbeho vily! https://t.co/7Ude4jdthK"
  },
  {
    "id": 1007274999307231200,
    "created_at": "2018-06-14 14:54:08",
    "text": "Podívejte se na videozáznam OVTV z dnešního tiskového brífinku pana prezidenta! https://t.co/MFZ9oS2ZVd"
  },
  {
    "id": 1007259638885208000,
    "created_at": "2018-06-14 13:53:06",
    "text": "Prezident republiky Miloš Zeman přijal ve čtvrtek dne 14. června 2018 na Pražském hradě předsedu vlády Andreje Babi… https://t.co/OZgSv7fD6f"
  },
  {
    "id": 1007241264302051300,
    "created_at": "2018-06-14 12:40:05",
    "text": "Pan prezident přijal na Pražském hradě představitele odborových svazů. https://t.co/8Yhzc7f5Fw"
  },
  {
    "id": 1007238941647437800,
    "created_at": "2018-06-14 12:30:51",
    "text": "Projev prezidenta republiky při setkání s čínskými piloty: https://t.co/oJpl8YhkWk"
  },
  {
    "id": 1007233773178585100,
    "created_at": "2018-06-14 12:10:19",
    "text": "Pan prezident přijal na Pražském hradě čínské piloty, absolventy školy F AIR. https://t.co/FbQwQKXasB"
  },
  {
    "id": 1007206833298296800,
    "created_at": "2018-06-14 10:23:16",
    "text": "@milkaju Milostivá, snímek není vůbec upravován."
  },
  {
    "id": 1007205621760970800,
    "created_at": "2018-06-14 10:18:27",
    "text": "RT @ZdenekFicker: https://t.co/2zyH89ALaC"
  },
  {
    "id": 1007188014567653400,
    "created_at": "2018-06-14 09:08:29",
    "text": "Pražský hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes od 20:15 na TV Barrandov! https://t.co/P234UVeFL7"
  },
  {
    "id": 1007169254213521400,
    "created_at": "2018-06-14 07:53:57",
    "text": "Prezident republiky zaslal blahopřejný telegram bulharskému prezidentovi: https://t.co/YmREe7AtH9"
  },
  {
    "id": 1007142624086634500,
    "created_at": "2018-06-14 06:08:08",
    "text": "RT @AmbMeron: TGM - President Liberator of Czechoslovakia - was a friend of the Jews supported the Jewish aspirations for Statehood https:/…"
  },
  {
    "id": 1006950930565226500,
    "created_at": "2018-06-13 17:26:24",
    "text": "Pan prezident se svojí paní zavítali do pražské Lucerny na narozeninový koncert Daniela Hůlky. https://t.co/abCY9Epv6b"
  },
  {
    "id": 1006932334824869900,
    "created_at": "2018-06-13 16:12:31",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě na jejich žádost předsedu KSČM a místopředsedu Poslan… https://t.co/YNeEcHzdfD"
  },
  {
    "id": 1006915396484714500,
    "created_at": "2018-06-13 15:05:12",
    "text": "Pan prezident obdržel na Pražském hradě Cenu Unie českých spisovatelů za občanskou odvahu. https://t.co/odpdieq0pH"
  },
  {
    "id": 1006899403796373500,
    "created_at": "2018-06-13 14:01:39",
    "text": "Dobrá práce @Seznam_Zpravy O této věci nicméně slyším poprvé. V každém případě mozaika už je takřka kompletní. A ne… https://t.co/JDny0O3Iuh"
  },
  {
    "id": 1006894997558317000,
    "created_at": "2018-06-13 13:44:09",
    "text": "RT @realDonaldTrump: So funny to watch the Fake News, especially NBC and CNN. They are fighting hard to downplay the deal with North Korea.…"
  },
  {
    "id": 1006894805652127700,
    "created_at": "2018-06-13 13:43:23",
    "text": "@MorozMichal Je"
  },
  {
    "id": 1006851847058083800,
    "created_at": "2018-06-13 10:52:41",
    "text": "Ve čtvrtek dne 14. června 2018 v 16:30 hodin se na Pražském hradě uskuteční tiskový brífink prezidenta republiky Mi… https://t.co/BO0dG9vYUS"
  },
  {
    "id": 1006847796836749300,
    "created_at": "2018-06-13 10:36:35",
    "text": "Prezident Miloš Zeman navštíví Podbořany a „své“ Lišany: https://t.co/p5TkUkOSDy"
  },
  {
    "id": 1006818538047393800,
    "created_at": "2018-06-13 08:40:19",
    "text": "Je tu cenzura. Ti „lepší mladí lidé“... Akademik neúprosně o dnešním Česku, zejména Praze: https://t.co/JVB3kSzuXo"
  },
  {
    "id": 1006814273367105500,
    "created_at": "2018-06-13 08:23:23",
    "text": "Tlaku neustoupím, vzkazuje Poche na Hrad. Pak se ale ozval Ovčáček a pořádně ho usadil https://t.co/nLLl4WWsDN"
  },
  {
    "id": 1006811557265858600,
    "created_at": "2018-06-13 08:12:35",
    "text": "RT @USEmbassyPrague: Během června zaostřeného v rámci oslav #českoamerickéstoletí na byznys pomáháme českým firmám podnikat v USA!🤝 Velvysl…"
  },
  {
    "id": 1006775270488014800,
    "created_at": "2018-06-13 05:48:24",
    "text": "Aby bylo jasno. V čele ministerstva zahraničních věcí má být nezpochybnitelná osobnost, loajální k České republice.… https://t.co/yrK4oxWHdS"
  },
  {
    "id": 1006638844656214000,
    "created_at": "2018-06-12 20:46:17",
    "text": "RT @realDonaldTrump: ...Got along great with Kim Jong-un who wants to see wonderful things for his country. As I said earlier today: Anyone…"
  },
  {
    "id": 1006638835097329700,
    "created_at": "2018-06-12 20:46:15",
    "text": "RT @realDonaldTrump: Heading back home from Singapore after a truly amazing visit. Great progress was made on the denuclearization of North…"
  },
  {
    "id": 1006627296231469000,
    "created_at": "2018-06-12 20:00:24",
    "text": "@KTweetuje Tweetující básník\nnechá se nazývat\nČecháček nenávistný\nco si je jen\nna síti jistý"
  },
  {
    "id": 1006625203772944400,
    "created_at": "2018-06-12 19:52:05",
    "text": "@KTweetuje Vy jste opravdu jen obyčejný ubožák."
  },
  {
    "id": 1006612331248410600,
    "created_at": "2018-06-12 19:00:56",
    "text": "RT @marcorubio: Presidents meeting with #KJU exposed incredible hypocrisy of many in media. When Obama did these things,he was described as…"
  },
  {
    "id": 1006589362883186700,
    "created_at": "2018-06-12 17:29:40",
    "text": "RT @IsraeliPM: I commend @POTUS Donald Trump on the historic #SingaporeSummit. This is an important step in the effort to rid the Korean pe…"
  },
  {
    "id": 1006578449979531300,
    "created_at": "2018-06-12 16:46:18",
    "text": "@EmmigrantPanama To je přeci jasné. Bez autoritářství značí, že “radostně a dobrovolně” přispějeme k budování lepší… https://t.co/2f69Dcu0hr"
  },
  {
    "id": 1006555695016218600,
    "created_at": "2018-06-12 15:15:53",
    "text": "Ovčáček je nadšený: Trump dokázal velkou věc ve prospěch celého světa\nhttps://t.co/dJlPcBukJY"
  },
  {
    "id": 1006540890712805400,
    "created_at": "2018-06-12 14:17:03",
    "text": "RT @AndrejBabis: Jak jsem vám už včera psal, úřadujeme z Hrzánského paláce. Má super terasu, kterou každá návštěva obdivuje, je tam úžasný…"
  },
  {
    "id": 1006534274605027300,
    "created_at": "2018-06-12 13:50:46",
    "text": "Paní Ivana Zemanová se dnes zúčastnila slavnostního zahájení provozu lineárních urychlovačů v pražské Nemocnici Na… https://t.co/3LSjsgP0kA"
  },
  {
    "id": 1006525084712960000,
    "created_at": "2018-06-12 13:14:15",
    "text": "Írán, Fendrych a další mainstreamoví komentátoři se pustili do Donalda Trumpa. Neklamné znamení, že prezident USA postupuje velmi dobře!"
  },
  {
    "id": 1006517926726430700,
    "created_at": "2018-06-12 12:45:48",
    "text": "RT @JackPosobiec: Peace https://t.co/GAMdkdqmA1"
  },
  {
    "id": 1006508396026253300,
    "created_at": "2018-06-12 12:07:56",
    "text": "Prezident USA Donald Trump dokázal velkou věc ve prospěch celého světa. Po období líbivých nanicovatých frází stojí… https://t.co/GjVYpyL0u3"
  },
  {
    "id": 1006496725748650000,
    "created_at": "2018-06-12 11:21:33",
    "text": "@VojtechGibis @Vladimir_Hrubes Teď marně pátrám, kdo je tím kanadským prezidentem. Poradíte? https://t.co/k9F1JS9Ypf"
  },
  {
    "id": 1006495254361575400,
    "created_at": "2018-06-12 11:15:43",
    "text": "@VojtechGibis @Vladimir_Hrubes Soudím, že Emanuel Moravec by měl z Herr Gibs upřímnou radost."
  },
  {
    "id": 1006462820849012700,
    "created_at": "2018-06-12 09:06:50",
    "text": "RT @USEmbassyPrague: Joint Statement of President Donald J. Trump of the United States of America and Chairman Kim Jong Un of the Democrati…"
  },
  {
    "id": 1006462741035585500,
    "created_at": "2018-06-12 09:06:31",
    "text": "RT @paulczynski: Je to vlastně legrační pozorovat, kdo má na světě jaké priority.\n\nDonald Trump učinil historickou schůzku týkající se stra…"
  },
  {
    "id": 1006448543782068200,
    "created_at": "2018-06-12 08:10:06",
    "text": "RT @realDonaldTrump: https://t.co/tJG3KIn2q0"
  },
  {
    "id": 1006417926415700000,
    "created_at": "2018-06-12 06:08:26",
    "text": "RT @Scavino45: HISTORY. #SingaporeSummit https://t.co/XF3GNzzBui"
  },
  {
    "id": 1006395185847308300,
    "created_at": "2018-06-12 04:38:04",
    "text": "RT @StateDept: .@POTUS Donald J. Trump meets North Korean leader Kim Jong Un in Singapore. #SingaporeSummit https://t.co/CWhiLO4dAa"
  },
  {
    "id": 1006395098375041000,
    "created_at": "2018-06-12 04:37:44",
    "text": "RT @PressSec: .@POTUS and US Delegation start expanded bilateral meeting with Leader Kim Jong Un and North Korean Delegation. #SingaporeSum…"
  },
  {
    "id": 1006252557398921200,
    "created_at": "2018-06-11 19:11:19",
    "text": "@HarvanekLukas Vědí, on je Okamura pro přesun ambasády do Jeruzaléma a to se twitterovým nácíčkům a fašounkům tuze nelíbí."
  },
  {
    "id": 1006250745501450200,
    "created_at": "2018-06-11 19:04:07",
    "text": "@Bednasek To je u fašounů a náglů běžné tvrzení."
  },
  {
    "id": 1006250202947350500,
    "created_at": "2018-06-11 19:01:58",
    "text": "@timdruhym Vy jste typický příklad člověka-pozéra, který se veřejně prohlašuje za křesťana. Ve skutečnosti je jedin… https://t.co/AwvU6M4N5n"
  },
  {
    "id": 1006245284442189800,
    "created_at": "2018-06-11 18:42:25",
    "text": "RT @strakovka: Premiér Babiš a saský ministerský předseda Kretschmer oslavili v Drážďanech 25 let česko-saské spolupráce. Jednali také o ro…"
  },
  {
    "id": 1006245156876628000,
    "created_at": "2018-06-11 18:41:55",
    "text": "RT @VivianBala: Celebrating birthday, a bit early. https://t.co/laVLNs7J2j"
  },
  {
    "id": 1006241081552449500,
    "created_at": "2018-06-11 18:25:43",
    "text": "RT @AmbMeron: Pleased to participate in the 10 year anniversary of the reopening of Hagibor Social Care Facility, of the Jewish community,…"
  },
  {
    "id": 1006208197978452000,
    "created_at": "2018-06-11 16:15:03",
    "text": "Dnešek ukázal, kolik je na Twitteru věrných nositelů odkazu Moravce, Krychtálka, Lažnovského, Cámary, Čurdy, Nachtmanna nebo Vajtauera!"
  },
  {
    "id": 1006205547635408900,
    "created_at": "2018-06-11 16:04:31",
    "text": "RT @TheUnitedFree: The Liberal Globalist Order is being Trumped! #WhyWeVotedForTrump #LiberalGlobalistAgenda #G7 https://t.co/JQSRSeybpe"
  },
  {
    "id": 1006144873873977300,
    "created_at": "2018-06-11 12:03:25",
    "text": "Někdo zničil pomníček rudoarmějců. Ovčáček má vandaly za fašistické svině: https://t.co/okUGTwBkJV"
  },
  {
    "id": 1006143770797191200,
    "created_at": "2018-06-11 11:59:02",
    "text": "@Ascate2 @JanPovysil @DanRisingUp Takže podle místních fašounů je holokaust menší zlo než komunismus. Tímhle jste p… https://t.co/91NdAO2uhc"
  },
  {
    "id": 1006142076868874200,
    "created_at": "2018-06-11 11:52:18",
    "text": "@Markus_Zeman 1. Cituji článek, měl byste být mediálně gramotný 2. Jde o standardní médium, že je “dezinformační”,… https://t.co/7idURx75In"
  },
  {
    "id": 1006141149675958300,
    "created_at": "2018-06-11 11:48:37",
    "text": "Vy fašistické svině, zlobí se Ovčáček. Někdo totiž už úplně zničil pomník Rudé armády, který on umýval: https://t.co/LL8CTLBQev"
  },
  {
    "id": 1006130984742457300,
    "created_at": "2018-06-11 11:08:14",
    "text": "Svět pokřivených hodnot českých mainstreamových novinářů, tzv. elit a celkově té tzv. liberální levice krásně ilust… https://t.co/eaC1Lh64NF"
  },
  {
    "id": 1006126368202084400,
    "created_at": "2018-06-11 10:49:53",
    "text": "@MichalKubal Dobrý duchovní pastýř nebuduje svou popularitu na šíření nenávisti k lidem s odlišným názorem. Sorryjako."
  },
  {
    "id": 1006118479882268700,
    "created_at": "2018-06-11 10:18:33",
    "text": "Fašistické svině, které jsou v české společnosti čím dál hlasitější - za mlčení většiny politiků - definitivně znič… https://t.co/60IYzGibJS"
  },
  {
    "id": 1005892732294959100,
    "created_at": "2018-06-10 19:21:30",
    "text": "Bože! Další šiřitel jediné pravdy. Jakoby nám už bohatě nestačil T. Halík se svou permanentní linkou z pekla. https://t.co/T7RYLsZKsQ"
  },
  {
    "id": 1005888300102635500,
    "created_at": "2018-06-10 19:03:53",
    "text": "RT @AmbMeron: Today was the annual Memorial Day for the town of Lidice, that in 1942 was eradicated by the Nazis https://t.co/B5Hig87euv"
  },
  {
    "id": 1005888023127609300,
    "created_at": "2018-06-10 19:02:47",
    "text": "RT @tomasjirsa: World leaders. https://t.co/g9twNB3iMA"
  },
  {
    "id": 1005857859089952800,
    "created_at": "2018-06-10 17:02:56",
    "text": "Zeman s ministrem Ťokem probral aktuální situaci v dopravě: https://t.co/3YwiPKfsIW"
  },
  {
    "id": 1005819389344657400,
    "created_at": "2018-06-10 14:30:04",
    "text": "@ZamestnavatelH Vás bych tipoval na SBU. Jako Vašeho jediného partnera."
  },
  {
    "id": 1005815179492327400,
    "created_at": "2018-06-10 14:13:20",
    "text": "Ikonické foto. Prostě skvělý prezident USA. Maká, aby Amerika byla zase veliká. https://t.co/38VQvc24u6"
  },
  {
    "id": 1005813321147322400,
    "created_at": "2018-06-10 14:05:57",
    "text": "@KTweetuje Hle, to je ta lehkost a nadhled, jak se chlubíte na https://t.co/JLJSc5Vhjf :-D"
  },
  {
    "id": 1005799873340432400,
    "created_at": "2018-06-10 13:12:31",
    "text": "RT @PressSec: .@POTUS arrives in Singapore for meeting with North Korean Leader Kim Jong Un. https://t.co/qj2S0mtEJ9"
  },
  {
    "id": 1005796143341727700,
    "created_at": "2018-06-10 12:57:42",
    "text": "V neděli dne 10. června 2018 se na zámku v Lánech konala porada expertního týmu prezidenta republiky Miloše Zemana… https://t.co/81XHgiqake"
  },
  {
    "id": 1005784425060237300,
    "created_at": "2018-06-10 12:11:08",
    "text": "Krásnou neděli, přátelé! https://t.co/W0gzH3EMMM"
  },
  {
    "id": 1005781878966808600,
    "created_at": "2018-06-10 12:01:01",
    "text": "RT @The_Trump_Train: Picture going viral of Angela Merkel whining and pouting like a school girl after Trump states he demands fair trade p…"
  },
  {
    "id": 1005781825325797400,
    "created_at": "2018-06-10 12:00:48",
    "text": "@spagat5 A který průzkum jste si vybral Vy? 1) Roste podpora ČSSD 2) Roste podpora ODS."
  },
  {
    "id": 1005780456581853200,
    "created_at": "2018-06-10 11:55:22",
    "text": "@TryAgainGuy Přesně tak. Reálně se žádný nekoná. Tyto průzkumy s nedůvěryhodnými výsledky - těsně před sestavením d… https://t.co/0WlHAlsGRg"
  },
  {
    "id": 1005779417048723500,
    "created_at": "2018-06-10 11:51:14",
    "text": "Doslova chvilku po pohádce pro dospělé o vzestupu preferencí ČSSD (CVVM) přichází další pohádka pro dospělé, tentok… https://t.co/IqL8mQX9Ft"
  },
  {
    "id": 1005738794543472600,
    "created_at": "2018-06-10 09:09:48",
    "text": "@JiriSmetana3 ČT už nemá s novinařinou nic společného. Je to propagandistický nástroj k likvidaci nepohodlných. Jako v letech 1953-1989."
  },
  {
    "id": 1005551431028498400,
    "created_at": "2018-06-09 20:45:18",
    "text": "RT @realDonaldTrump: Just met the new Prime Minister of Italy, @GiuseppeConteIT, a really great guy. He will be honored in Washington, at t…"
  },
  {
    "id": 1005549622050345000,
    "created_at": "2018-06-09 20:38:06",
    "text": "RT @PressSec: .@POTUS meets with world leaders and negotiates on Trade, Iran, and National Security. #G72018 #BTS https://t.co/OobyyDswNP"
  },
  {
    "id": 1005464944861679600,
    "created_at": "2018-06-09 15:01:38",
    "text": "RT @AIPAC: Czech Republic President Miloš Zeman offered welcome remarks this week at the Prague Castle to AIPAC’s leadership mission. We ap…"
  },
  {
    "id": 1005404052480581600,
    "created_at": "2018-06-09 10:59:40",
    "text": "RT @MorozMichal: Ano, přesně tenhle dojem mám když sleduju neomarxisty v Bruselu, cenzory na sociálních sítích, nezisovky hlásající jediné…"
  },
  {
    "id": 1005335527879528400,
    "created_at": "2018-06-09 06:27:22",
    "text": "RT @PressSec: Great moment between @JustinTrudeau and @POTUS when he gave him picture of the President’s grandfather’s hotel in Canada. #G7…"
  },
  {
    "id": 1005054804727681000,
    "created_at": "2018-06-08 11:51:53",
    "text": "RT @CUTIzpravy: Soudruh Biľak by měl z dnešních mainstreamových novinářů a jejich slastného chrochtání nad znovuzavedením cenzury upřímnou…"
  },
  {
    "id": 1005053885327781900,
    "created_at": "2018-06-08 11:48:13",
    "text": "Generální tajemník NATO: Kauza Babčenko může podkopat důvěru v média https://t.co/WY8aUcrxtF"
  },
  {
    "id": 1005051066927501300,
    "created_at": "2018-06-08 11:37:01",
    "text": "RT @nikkihaley: Our little one turns 20 today! She has grown into a smart, kind, beautiful person. We couldn’t be more proud of you Rena! H…"
  },
  {
    "id": 1005048012740153300,
    "created_at": "2018-06-08 11:24:53",
    "text": "RT @rudolf_jindrak: Německo je naším největším obchodním partnerem také díky přispění organizací, jako je Magdeburská obchodní a průmyslová…"
  },
  {
    "id": 1005045483172220900,
    "created_at": "2018-06-08 11:14:50",
    "text": "RT @realDonaldTrump: Congratulations to the Washington Capitals on their GREAT play and winning the Stanley Cup Championship. Alex Ovechkin…"
  },
  {
    "id": 1005044295617974300,
    "created_at": "2018-06-08 11:10:07",
    "text": "Nastal čas se začít tvrdě bránit proti útokům nepřátel svobody a demokracie. Proti útokům navoněné lůzy, která chce… https://t.co/RXYLyeHd65"
  },
  {
    "id": 1005041835188899800,
    "created_at": "2018-06-08 11:00:20",
    "text": "Ústavní právník právě bez uzardění prohlásil, že v soukromém sektoru Listina základních práv a svobod neplatí: https://t.co/vO5IpMj9nk"
  },
  {
    "id": 1005038776794611700,
    "created_at": "2018-06-08 10:48:11",
    "text": "RT @stropnickym: V době 50. výročí Pražského jara mi je ctí na @mzvcr ocenit letošní laureáty #Gratiasagit a zejména skupinu „osmi statečný…"
  },
  {
    "id": 1005035438845972500,
    "created_at": "2018-06-08 10:34:55",
    "text": "Když přišli nacisté pro komunisty, mlčel jsem- nebyl jsem přece komunista. Když zavírali sociální demokraty, mlčel… https://t.co/6q55tN3AtQ"
  },
  {
    "id": 1005033908273020900,
    "created_at": "2018-06-08 10:28:51",
    "text": "Na Pražském hradě jsou mimořádně vystaveny originály všech československých ústav a Ústava ČR: https://t.co/bcqXP8eO6d"
  },
  {
    "id": 1005029982308110300,
    "created_at": "2018-06-08 10:13:14",
    "text": "Udělat z Pocheho s jeho minulostí ministra, je jako rozsvítit si doma při náletu: https://t.co/dJhjbQimzu"
  },
  {
    "id": 1005017782159896600,
    "created_at": "2018-06-08 09:24:46",
    "text": "RT @rudolf_jindrak: Pobaltské země děkují všem zapojeným do #NATO PPP (předsunutá přítomnost v Pobaltí), včetně ČR."
  },
  {
    "id": 1005014604278353900,
    "created_at": "2018-06-08 09:12:08",
    "text": "RT @rudolf_jindrak: #B9Warsaw: zatím shoda na tom, že 1) bezpečnostních výzev od #NATOSummit ve Varšavě přibylo, 2) geopolit.situace předst…"
  },
  {
    "id": 1005012711825199100,
    "created_at": "2018-06-08 09:04:37",
    "text": "Vzpomínka na Václava Havla. https://t.co/k88t6CiMQM"
  },
  {
    "id": 1005012296303829000,
    "created_at": "2018-06-08 09:02:58",
    "text": "A funguje to. Kousek svobody se podařilo ubránit! - Uznávaný profesor Ivo Budil: Dehonestování či veřejné zpochybňo… https://t.co/lPuNzPzS7h"
  },
  {
    "id": 1005011377545719800,
    "created_at": "2018-06-08 08:59:19",
    "text": "RT @rudolf_jindrak: Začal summit #B9Warsaw. Prezident republiky se osobně omluvil @AndrzejDuda již před měsícem, ČR zastupuje @vondraczech.…"
  },
  {
    "id": 1005007769731305500,
    "created_at": "2018-06-08 08:44:59",
    "text": "“Byl bych velmi nerad, kdybychom naše přátelské vztahy narušili případem jednoho člověka”. Stanovisko pana preziden… https://t.co/DZSrBG0Qpi"
  },
  {
    "id": 1005000203789918200,
    "created_at": "2018-06-08 08:14:55",
    "text": "Kdo protestuje proti výsledkům voleb, není demokrat, řekl prezident Zeman: https://t.co/6TqkMZUjJl"
  },
  {
    "id": 1004993704900341800,
    "created_at": "2018-06-08 07:49:05",
    "text": "Videozáznam pořadu “Týden s prezidentem”. Čtvrtek 7. června 2018, 20:15, TV Barrandov: https://t.co/7dYh89QdNA"
  },
  {
    "id": 1004839364323491800,
    "created_at": "2018-06-07 21:35:48",
    "text": "@jindrichsidlo @ludvajz76 @kavovar80 Jindřichu, jste moc smutný příběh. V roce 1989 tlustý revolucionářský svetr, t… https://t.co/WSTcQrbilK"
  },
  {
    "id": 1004835249367461900,
    "created_at": "2018-06-07 21:19:27",
    "text": "https://t.co/cdSu7ZJ1DR"
  },
  {
    "id": 1004834435487993900,
    "created_at": "2018-06-07 21:16:12",
    "text": "V ČR je jakákoli cenzura, a tedy i internetová, zakázána Článkem 17, odstavcem 3 Listiny základních práv a svobod.… https://t.co/E98uxk2qVN"
  },
  {
    "id": 1004808324431384600,
    "created_at": "2018-06-07 19:32:27",
    "text": "Ovčáček zuří a chce si stěžovat Twitteru. Zablokoval odkazy na web: https://t.co/aue3SAg7rJ"
  },
  {
    "id": 1004794203270996000,
    "created_at": "2018-06-07 18:36:20",
    "text": "Nastal čas urputně bránit odkaz Václava Havla. Svobodomyslnost a demokracii v srdci. https://t.co/AnsDYXNMMs"
  },
  {
    "id": 1004792761801900000,
    "created_at": "2018-06-07 18:30:37",
    "text": "Raději bez komentáře. https://t.co/8TojwJqE9G"
  },
  {
    "id": 1004791931350732800,
    "created_at": "2018-06-07 18:27:19",
    "text": "Pokud cenzurní opatření nezmizí, budu příští týden kontaktovat společnost Twitter oficiálním protestním dopisem. Za… https://t.co/BWHXLnvmv5"
  },
  {
    "id": 1004786619554189300,
    "created_at": "2018-06-07 18:06:12",
    "text": "Novodobí čeští fašisté znovuzavedení cenzury na Twitteru samozřejmě halasně vítají. Nastal čas, aby se opravdoví de… https://t.co/mhnoUjZMX7"
  },
  {
    "id": 1004776544924065800,
    "created_at": "2018-06-07 17:26:10",
    "text": "Upozorňuji velmi důrazně společnost Twitter, že porušuje LISTINU ZÁKLADNÍCH PRÁV A SVOBOD. Cituji: Článek 17\n(1) Sv… https://t.co/SRFxJabxa3"
  },
  {
    "id": 1004772567536799700,
    "created_at": "2018-06-07 17:10:22",
    "text": "Twitter zablokoval možnost uveřejnit články https://t.co/rS9bzEibPt. Totalitní metody nesnáším, proto budu dál info… https://t.co/1fCduieL6g"
  },
  {
    "id": 1004767474049601500,
    "created_at": "2018-06-07 16:50:08",
    "text": "RT @IsraeliPM: 3 Countries, 4 Days: Prime Minister Netanyahu returns to Israel after an important visit in Europe. Watch and retweet https:…"
  },
  {
    "id": 1004740418276331500,
    "created_at": "2018-06-07 15:02:37",
    "text": "RT @USEmbassyPrague: Program velvyslance Kinga @USAmbPrague v Mladé Boleslavi pokračoval návštěvou muzea a závodu #ŠKODA AUTO! 🚗 https://t.…"
  },
  {
    "id": 1004714262017859600,
    "created_at": "2018-06-07 13:18:41",
    "text": "Prezident republiky přijal účastníky Česko-ruského diskusního fóra: https://t.co/dOXgdGEkvg https://t.co/FegbkpeYI6"
  },
  {
    "id": 1004713417469460500,
    "created_at": "2018-06-07 13:15:20",
    "text": "RT @dozor1984: Velký Bratr chystá Globální Dezinformační Index.\nČesky: Již brzy se dozvite pouze ty informace, které vyhovují jejich zájmům…"
  },
  {
    "id": 1004699257595682800,
    "created_at": "2018-06-07 12:19:04",
    "text": "Pan prezident se svojí paní přivítali na Hradě úžasnou umělkyni Mireille Mathieu. https://t.co/XjA5L4M7Qz"
  },
  {
    "id": 1004692543408394200,
    "created_at": "2018-06-07 11:52:23",
    "text": "RT @rudolf_jindrak: Česko-ruské diskusní fórum: začal druhý panel věnovaný historii. Hovoří A. Archizov, vedoucí Federální archivní služby…"
  },
  {
    "id": 1004692300671475700,
    "created_at": "2018-06-07 11:51:25",
    "text": "RT @neviditelnypes: Strategie pokojného ovládnutí Evropy https://t.co/wDRlzwR3uO"
  },
  {
    "id": 1004675723339190300,
    "created_at": "2018-06-07 10:45:33",
    "text": "Zeman zamíří na návštěvu Ústeckého kraje: https://t.co/XLREG9X3Vn"
  },
  {
    "id": 1004653087146078200,
    "created_at": "2018-06-07 09:15:36",
    "text": "Czech President's press secretary cleans desecrated monument to Soviet soldiers in Prague\nSee more at https://t.co/5v7AiHtu9p"
  },
  {
    "id": 1004652630889631700,
    "created_at": "2018-06-07 09:13:47",
    "text": "RT @rudolf_jindrak: Česko-ruské diskusní fórum zahájeno. Zdravici účastníkům zaslali prezidenti obou zemí, vystoupil náměstek MZV ad. Téma…"
  },
  {
    "id": 1004651968042819600,
    "created_at": "2018-06-07 09:11:09",
    "text": "Pražský hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes od 20:15 na TV Barrandov! https://t.co/HCt9zJ18cJ"
  },
  {
    "id": 1004642712606343200,
    "created_at": "2018-06-07 08:34:22",
    "text": "Помощник президента Чехии очистил оскверненный памятник советским воинам в Праге: https://t.co/wyV69vWOzK"
  },
  {
    "id": 1004400918417363000,
    "created_at": "2018-06-06 16:33:34",
    "text": "RT @strakovka: Prezident Zeman jmenoval na Pražském hradě do funkce předsedy vlády Andreje Babiše a pověřil ho po druhé sestavením nové vlá…"
  },
  {
    "id": 1004364472599924700,
    "created_at": "2018-06-06 14:08:45",
    "text": "Důvěra v prezidenta se opět přehoupla nad 50 procent: https://t.co/QBUACo8nrX"
  },
  {
    "id": 1004347073024716800,
    "created_at": "2018-06-06 12:59:36",
    "text": "Gratulace prezidenta republiky při jmenování předsedy vlády: https://t.co/woTm8N7MIK"
  },
  {
    "id": 1004343329079865300,
    "created_at": "2018-06-06 12:44:44",
    "text": "Pan prezident na Hradě jmenoval Andreje Babiše předsedou vlády České republiky. https://t.co/upvoNIMqSk"
  },
  {
    "id": 1004326964067471400,
    "created_at": "2018-06-06 11:39:42",
    "text": "@MaillowCZ Kdo omlouvá antisemitismus, je lidský odpad, nevážený!"
  },
  {
    "id": 1004321556120653800,
    "created_at": "2018-06-06 11:18:13",
    "text": "Novodobí čeští fašisté nalezli svůj kanál. Twitter. https://t.co/cfmkSuVqH7"
  },
  {
    "id": 1004316803076689900,
    "created_at": "2018-06-06 10:59:19",
    "text": "Ovčáček vzal hadr a očistil pomník Rudé armády, který někdo nabarvil: https://t.co/I169R5Vjvq"
  },
  {
    "id": 1004303344997929000,
    "created_at": "2018-06-06 10:05:51",
    "text": "Van der Bellen: \"Russland gehört zu Europa\" https://t.co/KxobSfm4iT"
  },
  {
    "id": 1004295801844232200,
    "created_at": "2018-06-06 09:35:52",
    "text": "The Speech of the President of the Czech Republic Given on the Occasion of the AIPAC Gala Dinner: https://t.co/uxNjceAktj"
  },
  {
    "id": 1004295273395490800,
    "created_at": "2018-06-06 09:33:46",
    "text": "Přečtěte si projev projev prezidenta republiky při galavečeři AIPAC! https://t.co/GveCT3q4Hz"
  },
  {
    "id": 1004293944392470500,
    "created_at": "2018-06-06 09:28:29",
    "text": "RT @realDonaldTrump: ....The greatest Witch Hunt in political history!"
  },
  {
    "id": 1004282483679121400,
    "created_at": "2018-06-06 08:42:57",
    "text": "Milion chvilek nenávisti k občanům za radostného potěšení mediálního mainstreamu proběhl. Teď ale nastává čas skute… https://t.co/0QJ8yQFvIo"
  },
  {
    "id": 1004267912214057000,
    "created_at": "2018-06-06 07:45:03",
    "text": "Friendship between the CR, Israel and USA is extraordinarily brilliant, intensive and honest as proved by the yeste… https://t.co/HbffIPY41Q"
  },
  {
    "id": 1004245710009749500,
    "created_at": "2018-06-06 06:16:49",
    "text": "@KTweetuje Vy žijete? Po té ostudě s Halíkem? A co máte s panem možná možným kandidátem? Budete za něj tweetovat?"
  },
  {
    "id": 1004244118573285400,
    "created_at": "2018-06-06 06:10:30",
    "text": "ČSSD se musí rozhodnout, zda jí jde o občany této země nebo o osud nějakého pražského šíbra. Volba je jasná!"
  },
  {
    "id": 1004240826686431200,
    "created_at": "2018-06-06 05:57:25",
    "text": "Přátelství ČR s Izraelem a s USA je mimořádně skvělé, intenzivní a upřímné. Důkazem byl včerejší večer Americko-izr… https://t.co/gmLo7h74Oa"
  },
  {
    "id": 1004095323298549800,
    "created_at": "2018-06-05 20:19:14",
    "text": "RT @rudolf_jindrak: To, že se pan prezident dnes setkal se 2 židovskými organizacemi a velvyslanci 🇺🇸 a 🇮🇱, si můžete přečíst v médiích. To…"
  },
  {
    "id": 1004095281993044000,
    "created_at": "2018-06-05 20:19:05",
    "text": "RT @CT24zive: Prezident Zeman: Otevření konzulátu v Jeruzalému je prvním krokem na cestě k přestěhování ambasády https://t.co/5PixeYwVMJ ht…"
  },
  {
    "id": 1004075485675114500,
    "created_at": "2018-06-05 19:00:25",
    "text": "Prezident Zeman přednesl projev, za který se dočkal ovací ve stoje. Nakopl v něm čelnou představitelku EU a pranýřo… https://t.co/VoIuoob5LG"
  },
  {
    "id": 1004073797949980700,
    "created_at": "2018-06-05 18:53:42",
    "text": "Zeman za svůj projev sklidil potlesk ve stoje, představitelé Americko-izraelského výboru pro veřejné záležitosti ho… https://t.co/f91ae0je4v"
  },
  {
    "id": 1004073206960087000,
    "created_at": "2018-06-05 18:51:21",
    "text": "Přesně tak! Pan premiér má hlubokou pravdu: „Hodnotím to jako mítink politiků, kteří neuspěli ve volbách a v prezid… https://t.co/5bFQiHqjBU"
  },
  {
    "id": 1004059924639469600,
    "created_at": "2018-06-05 17:58:35",
    "text": "RT @AmbMeron: נשיא צ׳כיה מילוש זמאן, בנאום הערב במצודת פראג בפני מנהיגים יהודים מארה״ב, מדבר על השלבים להעברת השגרירות הצכ׳ית לירושלים בירת…"
  },
  {
    "id": 1004054851364548600,
    "created_at": "2018-06-05 17:38:25",
    "text": "Prezident republiky. https://t.co/3BnQSFeO4o"
  },
  {
    "id": 1004054420437504000,
    "created_at": "2018-06-05 17:36:42",
    "text": "Pan prezident se na Pražském hradě setkal s představiteli Americko-izraelského výboru pro veřejné záležitosti (AIPA… https://t.co/alIt0joXRV"
  },
  {
    "id": 1004048863110619100,
    "created_at": "2018-06-05 17:14:37",
    "text": "Sledujte projev pana prezidenta na úvod galavečeře Americko-izraelského výboru pro veřejné záležitosti: https://t.co/Qf0M3n4Dwf"
  },
  {
    "id": 1004048463749759000,
    "created_at": "2018-06-05 17:13:02",
    "text": "“President Zeman is true friend of United States and Israel,” zaznělo na na Pražském hradě na úvod slavnostního več… https://t.co/9ODG5CFcmU"
  },
  {
    "id": 1004026259041587200,
    "created_at": "2018-06-05 15:44:48",
    "text": "Před Pražským hradem. Považoval jsem za svoji občanskou povinnost pomoci při čištění zneuctěného pomníku osvobodite… https://t.co/OLSVGr0FQW"
  },
  {
    "id": 1004019636676038700,
    "created_at": "2018-06-05 15:18:29",
    "text": "Prezident republiky Miloš Zeman přijal v úterý dne 5. června 2018 na Pražském hradě na jeho žádost předsedu ČSSD a… https://t.co/7w2TMV4P59"
  },
  {
    "id": 1004015789664559100,
    "created_at": "2018-06-05 15:03:12",
    "text": "Jak vystřižené z totalitního režimu. Rozhořčení pracující zasypali knihovnu rezolucemi odsuzujícími štvavou publika… https://t.co/OkYUnyWmK0"
  },
  {
    "id": 1004014226908868600,
    "created_at": "2018-06-05 14:57:00",
    "text": "Pošlapali jste svobodu, obvinil Ovčáček knihovnu, která zrušila besedu s protiislámským sociologem: https://t.co/H5b3M6BLcY"
  },
  {
    "id": 1004009487748010000,
    "created_at": "2018-06-05 14:38:10",
    "text": "Nějaký dobytek zneuctil pomníček osvoboditelů naší vlasti před Pražským hradem. Emanuel Moravec se radostně směje v… https://t.co/nQyqPcijaA"
  },
  {
    "id": 1004004294813773800,
    "created_at": "2018-06-05 14:17:32",
    "text": "Prezident republiky podepsal tři zákony. Podrobnosti zde: https://t.co/qAJ9EqeNL9"
  },
  {
    "id": 1004003980769448000,
    "created_at": "2018-06-05 14:16:17",
    "text": "Příběh “osobností”, které útočí na legitimně se bránící Stát Izrael, má nepřekvapivé rozuzlení. Podobné jako při po… https://t.co/tsuQC9WK70"
  },
  {
    "id": 1003996293381800000,
    "created_at": "2018-06-05 13:45:44",
    "text": "Jsme plně solidární s vládou Státu Izrael. Má naši jednoznačnou podporu. Mnichovanství naopak jednoznačně odmítáme: https://t.co/yCcdwYqMnG"
  },
  {
    "id": 1003965550513610800,
    "created_at": "2018-06-05 11:43:34",
    "text": "@citarnyknihy Žádnou. Stačí vhodně namíchat klíčové ideové fráze a mediální mainstream se přetrhne ve chvalozpěvech."
  },
  {
    "id": 1003963128680517600,
    "created_at": "2018-06-05 11:33:57",
    "text": "RT @realDonaldTrump: The Russian Witch Hunt Hoax continues, all because Jeff Sessions didn’t tell me he was going to recuse himself...I wou…"
  },
  {
    "id": 1003921195526389800,
    "created_at": "2018-06-05 08:47:19",
    "text": "Vyhazov za názory, zákaz prezentace knihy ve veřejné knihovně. Kam jsme se to dostali? A kde je tzv. Demokratický b… https://t.co/Z2VRERDORF"
  },
  {
    "id": 1003920267972837400,
    "created_at": "2018-06-05 08:43:38",
    "text": "@NeslusnyCech @Jarda17Secansky @EHrindova Extremista je podle mínění nepřátel svobody a demokracie každý, kdo má odlišný názor."
  },
  {
    "id": 1003918774721015800,
    "created_at": "2018-06-05 08:37:42",
    "text": "@DenySepp2 @Premek64 Indoktrinace? Typický bolševický termín. A neurážejte laskavě seniory."
  },
  {
    "id": 1003913912964845600,
    "created_at": "2018-06-05 08:18:23",
    "text": "@EHrindova Co bude příště? Budou se vyřazovat knihy, které se “neslučují s názory zastávanými knihovnou”?"
  },
  {
    "id": 1003913311832985600,
    "created_at": "2018-06-05 08:16:00",
    "text": "RT @EHrindova: Plánovaná beseda o knize Petra Hampla v Liberci zrušena: \"Vaši plánovanou akci o knize p. Hampla rušíme. Obsah knihy a názor…"
  },
  {
    "id": 1003913228118831100,
    "created_at": "2018-06-05 08:15:40",
    "text": "@stepanrysavy @HolyStanik Vaši oblíbenci z TOP 09 a STAN volby nevyhráli. Občané tak rozhodli. Demokratické volby m… https://t.co/SQDuwI4uWr"
  },
  {
    "id": 1003906644361777200,
    "created_at": "2018-06-05 07:49:30",
    "text": "@stepanrysavy @HolyStanik Vzhledem k mizernému výsledku ostatních stran je to jednoznačná věc. V roce 2013 žádná 101 neexistovala."
  },
  {
    "id": 1003905099196977200,
    "created_at": "2018-06-05 07:43:21",
    "text": "@stepanrysavy @HolyStanik Prezident republiky ctí jednoznačnou a nezpochybnitelnou vůli voličů. Tu Vy popíráte a tí… https://t.co/UAPqwx8tIM"
  },
  {
    "id": 1003903712467804200,
    "created_at": "2018-06-05 07:37:51",
    "text": "Prezident republiky Miloš Zeman jmenuje ve středu 6.6.2018 ve 14.00 na Pražském hradě Andreje Babiše do funkce před… https://t.co/GLGJ7L7bR0"
  },
  {
    "id": 1003903080105201700,
    "created_at": "2018-06-05 07:35:20",
    "text": "@stepanrysavy @HolyStanik Máte to celé podivně popletené, což. Prezidenta republiky zvolili občané v demokratických… https://t.co/NrvoJ7kfGN"
  },
  {
    "id": 1003898386993614800,
    "created_at": "2018-06-05 07:16:41",
    "text": "RT @AndrejBabis: Chceme zastropovat a ukončit kumulaci dávek, aby se už vyplácelo chodit do práce. Zpřísníme i kontrolu pracovního trhu a t…"
  },
  {
    "id": 1003898378768482300,
    "created_at": "2018-06-05 07:16:39",
    "text": "RT @AndrejBabis: Paní ministryně @JarNemcova a já jsme včera na Generálním ředitelství Úřadu práce řešili, kolik z těch 242.798 oficiálně n…"
  },
  {
    "id": 1003886854037475300,
    "created_at": "2018-06-05 06:30:51",
    "text": "@HolyStanik Evidentně nevíte, že v demokracii lidé rozhodují ve svobodných volbách. To jen v totalitních režimech vybírá vládce elita."
  },
  {
    "id": 1003883978510696400,
    "created_at": "2018-06-05 06:19:26",
    "text": "@stepanrysavy Chcete tím říci, že mladá generace nemá povědomí o období totality a chybí jí tak vnitřní varovný vyk… https://t.co/NbHm8LBPyD"
  },
  {
    "id": 1003878731763634200,
    "created_at": "2018-06-05 05:58:35",
    "text": "@OndejGolis Považuji to za přímý útok na naše svobody. A co je paradoxní, právě takový ideologický a vůči občanům u… https://t.co/6tGrpGIY8C"
  },
  {
    "id": 1003873640738369500,
    "created_at": "2018-06-05 05:38:21",
    "text": "Na Hradě se sejde proizraelská skupina, Zeman bude mít projev: https://t.co/Ltv1vkOQIa"
  },
  {
    "id": 1003867191907962900,
    "created_at": "2018-06-05 05:12:44",
    "text": "Ideový rozhovor, ošperkovaný celou řadou normalizačních termínů. Skvěle by se hodil do Tribuny nebo pro účely PŠM: https://t.co/js7FycqgV7"
  },
  {
    "id": 1003755354075942900,
    "created_at": "2018-06-04 21:48:19",
    "text": "RT @realDonaldTrump: The Fake News Media is desperate to distract from the economy and record setting economic numbers and so they keep tal…"
  },
  {
    "id": 1003755297058541600,
    "created_at": "2018-06-04 21:48:06",
    "text": "RT @AmbMeron: Pleased to meet PM @AndrejBabis at evening of @WorldJewishCong https://t.co/jeRpINzsyx"
  },
  {
    "id": 1003754797185601500,
    "created_at": "2018-06-04 21:46:07",
    "text": "RT @WhiteHouse: 500 Days of American Greatness: President Trump followed through on his promise to move the U.S. Embassy in Israel to Jerus…"
  },
  {
    "id": 1003750141898248200,
    "created_at": "2018-06-04 21:27:37",
    "text": "@Ascate2 @Karel_IV62 Nic neromantizuji. Vadí mi, že nevidíte zjevný rozdíl mezi první a druhou republikou. A tím dě… https://t.co/bJeScfqef4"
  },
  {
    "id": 1003747041468715000,
    "created_at": "2018-06-04 21:15:18",
    "text": "@Ascate2 @Karel_IV62 Relativizujete zlo. To je přinejmenším morální zločin."
  },
  {
    "id": 1003745771961937900,
    "created_at": "2018-06-04 21:10:15",
    "text": "@Jarin50926789 Klasický projev ultralevičáckého antisemitismu."
  },
  {
    "id": 1003745435322912800,
    "created_at": "2018-06-04 21:08:55",
    "text": "@Ascate2 @Karel_IV62 Znovu opakuji. Za druhé republiky šlo o státem uplatňovaná antisemitská opatření. První republika nebyla antisemitská."
  },
  {
    "id": 1003744588815896600,
    "created_at": "2018-06-04 21:05:33",
    "text": "@Ascate2 @Karel_IV62 Tuto Vaši “pozoruhodnou” tezi “historie není o absolutních hodnotách” uplatňujete i na německý nacismus?"
  },
  {
    "id": 1003743843727142900,
    "created_at": "2018-06-04 21:02:35",
    "text": "@Ascate2 @Karel_IV62 Žádná fakta a argumenty jste nepředložil. Jen se snažíte bagatelizovat antisemitismus druhé republiky."
  },
  {
    "id": 1003743384853532700,
    "created_at": "2018-06-04 21:00:46",
    "text": "@PremyslSousedik @Honza75PA Proti novodobému omlouvání antisemitismu budu vždy vystupovat s maximální tvrdostí. Tak si zvykejte."
  },
  {
    "id": 1003742741606686700,
    "created_at": "2018-06-04 20:58:12",
    "text": "@Ascate2 @Karel_IV62 První republika byla demokratickým státem. V době zvýšeného ohrožení, kdy šlo doslova o život,… https://t.co/JpyJaiP1Qx"
  },
  {
    "id": 1003742125509488600,
    "created_at": "2018-06-04 20:55:46",
    "text": "@Ascate2 @Karel_IV62 Používat citát Jana Wericha, kterému druhá republika zavřela Osvobozené divadlo a donutila ho… https://t.co/jaVKqV9RNb"
  },
  {
    "id": 1003741104724938800,
    "created_at": "2018-06-04 20:51:42",
    "text": "@Ascate2 @Pepca12345 @Karel_IV62 Nejde o žádné spekulace a subjektivismus. Za druhé republiky byla antisemitská opa… https://t.co/3AVJyWSydz"
  },
  {
    "id": 1003740132330139600,
    "created_at": "2018-06-04 20:47:50",
    "text": "@Ascate2 @Karel_IV62 Brutálně zlehčujete a bagatelizujete. Je to doslova odporné. První republika poskytovala azyl… https://t.co/bthLQHAfdK"
  },
  {
    "id": 1003738886479237100,
    "created_at": "2018-06-04 20:42:53",
    "text": "@Ascate2 @Pepca12345 @Karel_IV62 Žádnou odbornou debatu nevedete. Ideologicky bagatelizujete antisemitismus druhé r… https://t.co/v2UCxjo8HA"
  },
  {
    "id": 1003737008068493300,
    "created_at": "2018-06-04 20:35:25",
    "text": "@tommejto “Plivnout do tváře”. To jste opsal z nějakého druhorepublikového článku?"
  },
  {
    "id": 1003736486884315100,
    "created_at": "2018-06-04 20:33:21",
    "text": "@JosefSvejk_ @Honza75PA Nic takového napsat nemusel. Nikdo Peroutku nenutil. Učinil tak dobrovolně."
  },
  {
    "id": 1003735993239908400,
    "created_at": "2018-06-04 20:31:23",
    "text": "@Honza75PA Článek hovoří o dialogu s nacisty o “židovských věcech”. Na to neexistuje žádná omluva. A výmluva už vůbec ne. Sorryjako."
  },
  {
    "id": 1003724961952026600,
    "created_at": "2018-06-04 19:47:33",
    "text": "@david_pelc Nacisté za protektorátu tvrdili, že kultura v českých zemích byla odjakživa závislá na německých vlivec… https://t.co/G4Cnhz8aGm"
  },
  {
    "id": 1003721674565529600,
    "created_at": "2018-06-04 19:34:30",
    "text": "@david_pelc Uvědomujete si vůbec, že stejně argumentovali nacisté, když chtěli “dokázat”, že Čechy a Morava jsou hi… https://t.co/SNVR24gz9w"
  },
  {
    "id": 1003719772721295400,
    "created_at": "2018-06-04 19:26:56",
    "text": "@Karel_IV62 Vám zlehčování antisemitismu druhé republiky nevadí? Proč?"
  },
  {
    "id": 1003718753203474400,
    "created_at": "2018-06-04 19:22:53",
    "text": "@david_pelc To jste opsal z nějaké nacistické příručky? Za okupace se Němci rozčilovali, že si “přivlastňujeme” Kar… https://t.co/9ON4fL0b9z"
  },
  {
    "id": 1003716387620184000,
    "created_at": "2018-06-04 19:13:29",
    "text": "Peroutkova vnučka a Jiří Ovčáček v jednom studiu. Vzduch se dal krájet: https://t.co/dlPFv3Aza1"
  },
  {
    "id": 1003675784039600100,
    "created_at": "2018-06-04 16:32:08",
    "text": "@Ascate2 Problém je Vaše snaha antisemitismus druhé republiky zlehčovat. Považuji to za prasácké."
  },
  {
    "id": 1003674200060694500,
    "created_at": "2018-06-04 16:25:51",
    "text": "@Ascate2 Soudobý kontext byste měl znát. Nástup autoritativního státu s antisemitskými rysy, zřizování pracovních t… https://t.co/sntI1hr35i"
  },
  {
    "id": 1003672107409182700,
    "created_at": "2018-06-04 16:17:32",
    "text": "@Ascate2 Žádné vytržení z kontextu. To Vy se pouštíte na hodně tenký led obhajoby antisemitismu druhé republiky, který měl státní podobu."
  },
  {
    "id": 1003671514225479700,
    "created_at": "2018-06-04 16:15:10",
    "text": "RT @neviditelnypes: Kyjevská prasečina aneb Nemrtvý Arkadij Babčenko https://t.co/IiZU7ZihzJ"
  },
  {
    "id": 1003668975929004000,
    "created_at": "2018-06-04 16:05:05",
    "text": "@Ascate2 Evidentně to na Vás nemělo žádný praktický dopad. Jinak byste nemohl citaci z odborné literatury označit z… https://t.co/73UJ5FHfTp"
  },
  {
    "id": 1003667169425715200,
    "created_at": "2018-06-04 15:57:55",
    "text": "@Ascate2 Zřím, že Vy o druhé republice nevíte vůbec nic. Až si nastudujete odbornou literaturu, dejte vědět."
  },
  {
    "id": 1003664997690593300,
    "created_at": "2018-06-04 15:49:17",
    "text": "@Karel_IV62 Tohle byla přítomnost druhé republiky: Již 13. října 1938 slíbil min. zahr. věcí Chvalkovský Ribbentrop… https://t.co/wbiszmH7P9"
  },
  {
    "id": 1003656750229262300,
    "created_at": "2018-06-04 15:16:30",
    "text": "Pan prezident na podzim navštíví Německo. Hlavním tématem bude ekonomická spolupráce: https://t.co/pPKqW57CRJ"
  },
  {
    "id": 1003655184726282200,
    "created_at": "2018-06-04 15:10:17",
    "text": "👍 Babiš nesouhlasí s kompenzačním mechanismem pro migraci v EU https://t.co/a4Wo1cYILe"
  },
  {
    "id": 1003607937103917000,
    "created_at": "2018-06-04 12:02:32",
    "text": "Duel: „Hitler je gentleman?\" Jiří Ovčáček v přímém střetu s vnučkou Ferdinanda Peroutky https://t.co/wW77mTTh8r"
  },
  {
    "id": 1003585932833050600,
    "created_at": "2018-06-04 10:35:06",
    "text": "@QB_1982 @jindrichsidlo Smůla. Prostě je to lež, kterou někdo vepsal do Wikipedie."
  },
  {
    "id": 1003576206258733000,
    "created_at": "2018-06-04 09:56:27",
    "text": "Zásadní český dokument. Na Hradě je ode dneška vystavena i Zlatá bula sicilská: https://t.co/3GHdLDYDWt"
  },
  {
    "id": 1003567028748345300,
    "created_at": "2018-06-04 09:19:59",
    "text": "Prezident republiky Miloš Zeman se zúčastní v úterý dne 5. června 2018 od 19.00 hodin na Pražském hradě galavečeře… https://t.co/Jda9JVCxO7"
  },
  {
    "id": 1003531606257209300,
    "created_at": "2018-06-04 06:59:14",
    "text": "@QB_1982 Problém je v tom, že jsem na tomto gymnázium nikdy nestudoval. Takže FAKE NEWS. A nebo pěkně po našem: lež."
  },
  {
    "id": 1003370710222409700,
    "created_at": "2018-06-03 20:19:53",
    "text": "Zeman: Ministrem zahraničí by neměl být sluníčkář, vláda i já jsme protiimigrační https://t.co/DK7hHksHLU"
  },
  {
    "id": 1003360341252870100,
    "created_at": "2018-06-03 19:38:41",
    "text": "@PavelBelobradek Rádio Jerevan uvádí zprávu na pravou míru: Nebyl to páter Halík, ale svobodník Halík. Nebyl jmenov… https://t.co/qxwGONgN3j"
  },
  {
    "id": 1003257172782997500,
    "created_at": "2018-06-03 12:48:44",
    "text": "Sledujte v pondělí od 13:00 pořad Duel na TV Seznam! Téma: Peroutkův článek. Hosté: Terezie Kaslová a Jiří Ovčáček. https://t.co/H7Hu1PJaxh"
  },
  {
    "id": 1002993811042328600,
    "created_at": "2018-06-02 19:22:13",
    "text": "RT @prezydentpl: Prezydent przekazał na ręce Duszpasterzy Lednickich kopię najstarszego rękopisu Bogurodzicy. - To ona była wielkim dziełem…"
  },
  {
    "id": 1002855972296065000,
    "created_at": "2018-06-02 10:14:30",
    "text": "Krásný víkend, přátelé! https://t.co/nmu4gDCnK5"
  },
  {
    "id": 1002855094407360500,
    "created_at": "2018-06-02 10:11:01",
    "text": "Reklama na PZO TUZEX? Pardon, trapně jsem se spletl. To je “pokroková liberální” část ČSSD. https://t.co/oP5IZhF2ra"
  },
  {
    "id": 1002798579545714700,
    "created_at": "2018-06-02 06:26:27",
    "text": "Protiizraelský, protinárodní a promigrační pan Poche si pořídil tiskového mluvčího. Ovšem, není Špaček jako Špaček: https://t.co/mlyTsJr6Xp"
  },
  {
    "id": 1002602092178104300,
    "created_at": "2018-06-01 17:25:40",
    "text": "Fejkmistrem týdne se stává Bakalův reportér: https://t.co/X2bepxEo5R"
  },
  {
    "id": 1002581408756494300,
    "created_at": "2018-06-01 16:03:29",
    "text": "Skvělé pozvání, děkuji! Úžasná akce, na kterou zavítá pan prezident. Už se velmi těší. https://t.co/btgWhsv0Ap"
  },
  {
    "id": 1002541123942875100,
    "created_at": "2018-06-01 13:23:24",
    "text": "RT @prezydentpl: Prezydent @AndrzejDuda złożył wieniec kwiatów przed Pomnikiem śp. Marii i Lecha Kaczyńskich w Białej Podlaskiej. https://t…"
  },
  {
    "id": 1002540539248595000,
    "created_at": "2018-06-01 13:21:05",
    "text": "Jednoznačné a zásadové stanovisko prezidenta republiky k otázce ministerstva zahraničních věcí a pana Poche. Politi… https://t.co/msTFqhQYzW"
  },
  {
    "id": 1002519647068000300,
    "created_at": "2018-06-01 11:58:04",
    "text": "RT @AndrejBabis: Vtip o kůrovci byl reakce na zdržování opozice, která nemluvila jako už tradičně k tématu, ale pořád probírala fungování v…"
  },
  {
    "id": 1002519641946755100,
    "created_at": "2018-06-01 11:58:03",
    "text": "RT @AndrejBabis: Působení našich vojáků v zahraničních misích jsme dnes úspěšně přijali. Mediální hysterie kolem tohoto tématu byla fakt úp…"
  },
  {
    "id": 1002509950751596500,
    "created_at": "2018-06-01 11:19:32",
    "text": "Jedna věta, která plně vystihuje, proč nikdy ministerstvo zahraničních věcí! Týdeník Echo, 5/2018\nRedaktorka:  \n„Ne… https://t.co/ginFZZlrJv"
  },
  {
    "id": 1002505252933980200,
    "created_at": "2018-06-01 11:00:52",
    "text": "Třinecké železárny chtějí koupit ArcelorMittal Ostrava. Doporučoval jim to i prezident Zeman: https://t.co/94STecbjjL"
  },
  {
    "id": 1002504149479682000,
    "created_at": "2018-06-01 10:56:29",
    "text": "RT @SlechtovaKarla: Děkuji všem poslancům, kteří podpořili komplexní mandát zahraničních operací do roku 2020. V očích spojenců díky tomu z…"
  },
  {
    "id": 1002504120610279400,
    "created_at": "2018-06-01 10:56:22",
    "text": "RT @VaclavKlaus_ml: Žijeme v zemi, kde za přeškrtnutí vlajky EU na S-Pé-Zet-ce se trestá tvrdými tresty,\nkdežto vytahování vlajky ČR z vagí…"
  },
  {
    "id": 1002465303098519600,
    "created_at": "2018-06-01 08:22:07",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 31. května 2018, 20:15, TV Barrandov: https://t.co/j9Kds3GPpa"
  },
  {
    "id": 1002452247823953900,
    "created_at": "2018-06-01 07:30:15",
    "text": "@lukasersil V tom případě Vás čeká prohra."
  },
  {
    "id": 1002436641007562800,
    "created_at": "2018-06-01 06:28:14",
    "text": "@lukasersil Václav Havel miloval svobodu. Vy ji nenávidíte. Tak se laskavě neohánějte jeho jménem!"
  },
  {
    "id": 1002435507010273300,
    "created_at": "2018-06-01 06:23:43",
    "text": "Nejoblíbenější slovo západního světa: ZÁKAZ."
  },
  {
    "id": 1002429405145305100,
    "created_at": "2018-06-01 05:59:29",
    "text": "Cenzura v praxi: https://t.co/rsWJG0VPun"
  },
  {
    "id": 1002295372721598500,
    "created_at": "2018-05-31 21:06:53",
    "text": "Moudrý, hluboký, apelující a dojemný dopis... Tolik se stydím za ty nafoukané a prázdné nádoby, které vnutily spros… https://t.co/awPcTZKrvO"
  },
  {
    "id": 1002262548153098200,
    "created_at": "2018-05-31 18:56:27",
    "text": "RT @IsraeliPM: Prime Minister Benjamin Netanyahu spoke with Russian President Vladimir Putin. The two discussed regional developments and t…"
  },
  {
    "id": 1002261103731241000,
    "created_at": "2018-05-31 18:50:42",
    "text": "Je absolutně nepřijatelné, aby byla Česká republika zatahována prostřednictvím slovních výpadů Arkadije Babčenka pr… https://t.co/LeKEPwpm36"
  },
  {
    "id": 1002246590902489100,
    "created_at": "2018-05-31 17:53:02",
    "text": "RT @AmbMeron: The view from Prague Castle gardens https://t.co/2fl8i63vav"
  },
  {
    "id": 1002239323696255000,
    "created_at": "2018-05-31 17:24:10",
    "text": "Nová levice si prostřednictvím pochodu institucemi vybudovala pozici neotřesitelné síly v boji proti průměrnému člo… https://t.co/9zznvtGHgg"
  },
  {
    "id": 1002198176919670800,
    "created_at": "2018-05-31 14:40:39",
    "text": "RT @Algemeiner: The Czech Republic reopened its honorary consulate in Jerusalem, following promises by President Milos Zeman to eventually…"
  },
  {
    "id": 1002188312331812900,
    "created_at": "2018-05-31 14:01:28",
    "text": "Informace k tzv. kauze “Novičok” https://t.co/aD7lba5tSV"
  },
  {
    "id": 1002176932744712200,
    "created_at": "2018-05-31 13:16:14",
    "text": "Pan prezident jmenuje Andreje Babiše podruhé předsedou vlády ČR na Hradě ve středu 6. června 2018 ve 14:00. Následo… https://t.co/roD3Ze09cl"
  },
  {
    "id": 1002165696971894800,
    "created_at": "2018-05-31 12:31:36",
    "text": "Cynické divadlo. Zinscenovaná vražda novináře otřásla důvěrou tajných služeb i médií https://t.co/vQ30dk3TRG"
  },
  {
    "id": 1002159658008752100,
    "created_at": "2018-05-31 12:07:36",
    "text": "RT @realDonaldTrump: The corrupt Mainstream Media is working overtime not to mention the infiltration of people, Spies (Informants), into m…"
  },
  {
    "id": 1002159015638466600,
    "created_at": "2018-05-31 12:05:03",
    "text": "Tradiční přátelské setkání v Lánech. Pan prezident u příležitosti pracovního oběda přivítal premiéra Andreje Babiše. https://t.co/fcB8kaxCT5"
  },
  {
    "id": 1002123435235999700,
    "created_at": "2018-05-31 09:43:40",
    "text": "RT @NickArcherFCO: Britská firma zaměstnává v Plzni 500 lidí. To popravdě není tak málo... https://t.co/jIc6o6l3gK"
  },
  {
    "id": 1002114918349463600,
    "created_at": "2018-05-31 09:09:49",
    "text": "Lány, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/UvDGmu81Lz"
  },
  {
    "id": 1002091425054511100,
    "created_at": "2018-05-31 07:36:28",
    "text": "RT @chrisdeloire: RSF expresses its deepest indignation after discovering the manipulation of the Ukrainian secret services, this new step…"
  },
  {
    "id": 1002066817198821400,
    "created_at": "2018-05-31 05:58:41",
    "text": "RT @rudolf_jindrak: Nemáme přehnaná očekávání, jde opravdu o velmi dlouhodobé téma. S Ruskem bychom však měli otevřeně mluvit, a to mimo ji…"
  },
  {
    "id": 1002064661297221600,
    "created_at": "2018-05-31 05:50:07",
    "text": "RT @realDonaldTrump: The soon to be released book, “The Russia Hoax, The Illicit Scheme To Clear Hillary Clinton And Frame Donald Trump,” w…"
  },
  {
    "id": 1002051636787929100,
    "created_at": "2018-05-31 04:58:22",
    "text": "RT @AmbMeron: Billionaire Roman Abramovich, owner of Chelsea football team,  immigrates to Israel https://t.co/A07pUjK9K9"
  },
  {
    "id": 1002051207790243800,
    "created_at": "2018-05-31 04:56:39",
    "text": "RT @StateDept: .@USUN Ambassador Haley spoke at the #UNSC today about #Hamas rocket attacks against #Israel: “The United States called this…"
  },
  {
    "id": 1001925454549454800,
    "created_at": "2018-05-30 20:36:57",
    "text": "@Markus_Zeman Kdyby hloupost nadnášela..."
  },
  {
    "id": 1001923076890775600,
    "created_at": "2018-05-30 20:27:31",
    "text": "RT @20committee: \"Sorry, honey.\"\n\nNot a smart move by the SBU. In fact, an incredibly stupid one. Lots of ways of faking out and pwning RIS…"
  },
  {
    "id": 1001906539731542000,
    "created_at": "2018-05-30 19:21:48",
    "text": "@Vt414537951 @PaiMei791 To je tak, když někdo čte jen titulky a ne obsah článku. Mediální negramotnost je hrozný pr… https://t.co/B40Mon9BSm"
  },
  {
    "id": 1001903944665391100,
    "created_at": "2018-05-30 19:11:29",
    "text": "@PaiMei791 Pročpak tady urážíte slovenského prezidenta, který tím vlakem pojede také?"
  },
  {
    "id": 1001890523135856600,
    "created_at": "2018-05-30 18:18:09",
    "text": "Prezident zavítá na Ústecko, o prázdninách pojede vlakem na Slovensko https://t.co/1b5UgaQCmZ"
  },
  {
    "id": 1001878298098577400,
    "created_at": "2018-05-30 17:29:34",
    "text": "A teď něco k aktuálnímu tématu. Vyjádření pro https://t.co/9momfIxPkd: https://t.co/0kwsS2Edo2"
  },
  {
    "id": 1001853722945781800,
    "created_at": "2018-05-30 15:51:55",
    "text": "Prezident republiky. https://t.co/34g3ubRdKS"
  },
  {
    "id": 1001842714537754600,
    "created_at": "2018-05-30 15:08:11",
    "text": "@JanPovysil Je vidět, že práce s informacemi je pro Vás hrozně obtížná. Ono se to jistě časem zlepší. Držím palce!"
  },
  {
    "id": 1001840693856342000,
    "created_at": "2018-05-30 15:00:09",
    "text": "@JanPovysil Vy jste neuvěřitelně neinformovaná osoba. Škodovky, kterými jezdí pan prezident, jsou zapůjčeny. Vypsan… https://t.co/AFefA8bnI6"
  },
  {
    "id": 1001837971585355800,
    "created_at": "2018-05-30 14:49:20",
    "text": "Čeští novináři bývají někdy dost nechápaví. Takže znovu. Pan prezident bude dál využívat české vozy značky Škoda! https://t.co/Lyf5CZqjYz"
  },
  {
    "id": 1001834642260062200,
    "created_at": "2018-05-30 14:36:06",
    "text": "Prezident republiky Miloš Zeman přijal ve středu dne 30. května 2018 na Pražském hradě na jeho žádost generálního ř… https://t.co/NegqcvfWzh"
  },
  {
    "id": 1001828621277958100,
    "created_at": "2018-05-30 14:12:11",
    "text": "Prezident republiky Miloš Zeman přijal ve středu dne 30. května 2018 na Pražském hradě na jeho žádost ministra dopravy Dana Ťoka."
  },
  {
    "id": 1001801794417299500,
    "created_at": "2018-05-30 12:25:35",
    "text": "Vždyť je to šílené! O „sprostodivadle“ v Brně píše celý svět. A vyplouvají informace, kterými se autor nechlubí: https://t.co/nIBEcElyP8"
  },
  {
    "id": 1001783867127164900,
    "created_at": "2018-05-30 11:14:20",
    "text": "Právě jsem zjistil, že mě pan Poche nemá opravdu rád. Fakt ale nemůžu za jeho protiizraelská a promigrační stanovis… https://t.co/PtTP397wqM"
  },
  {
    "id": 1001769026857635800,
    "created_at": "2018-05-30 10:15:22",
    "text": "@JanPovysil Co kdybyste si napřed zjistil, že jde o zakázku ministerstva vnitra? Ale to byste nemohl hloupě útočit na Hrad, že."
  },
  {
    "id": 1001767992609460200,
    "created_at": "2018-05-30 10:11:16",
    "text": "FAKE NEWS! Pan prezident bude samozřejmě nadále využívat vozy Škoda. Novináři by neměli šířit lži: https://t.co/RwPKZq0CWL"
  },
  {
    "id": 1001751074586361900,
    "created_at": "2018-05-30 09:04:02",
    "text": "Hvězda Filmového studia Barrandov. ČSSR, 80. léta 20. století. https://t.co/n4bAbKCsA1"
  },
  {
    "id": 1001727544499032000,
    "created_at": "2018-05-30 07:30:32",
    "text": "Český prezident bude dál využívat česká auta! Pan prezident jezdí ve vozech zapůjčených společností Škoda Auto. Na tom se nic nezmění."
  },
  {
    "id": 1001725969047138300,
    "created_at": "2018-05-30 07:24:16",
    "text": "@PavlosDungasLM Mám stejné vzdělání jako rakouský kancléř. Jsem spokojen!"
  },
  {
    "id": 1001707922697736200,
    "created_at": "2018-05-30 06:12:34",
    "text": "@KohoutPavel Asi ideové vzpomínky na druhou republiku a únorové dny. Hlavně ale šíří FAKE NEWS. Gymnázium Pod Vyšeh… https://t.co/o2wZQEqvAZ"
  },
  {
    "id": 1001535442821533700,
    "created_at": "2018-05-29 18:47:11",
    "text": "Prezident republiky zaslal kondolenční telegram belgickému králi: https://t.co/mCqYawoXPQ"
  },
  {
    "id": 1001513291473195000,
    "created_at": "2018-05-29 17:19:10",
    "text": "RT @CzechMFA: .@CzechMFA strongly condemns indiscriminate attacks from Gaza on Israeli civilians including children and fully supports Isra…"
  },
  {
    "id": 1001481424434860000,
    "created_at": "2018-05-29 15:12:32",
    "text": "První krok na cestě k přesunu velvyslanectví České republiky z Tel Avivu do Jeruzaléma učiněn! https://t.co/Aa9kLE1gxC"
  },
  {
    "id": 1001471339058917400,
    "created_at": "2018-05-29 14:32:28",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě guvernéra České národní banky Jiřího Rusnoka."
  },
  {
    "id": 1001461341788540900,
    "created_at": "2018-05-29 13:52:44",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě bývalou předsedkyni Energetického regulačního úřadu Alenu Vitáskovou."
  },
  {
    "id": 1001450010746261500,
    "created_at": "2018-05-29 13:07:43",
    "text": "@PetrHonzejk Chápu. Pro Vás je vytahování státní vlajky z přirození nesmírně obohacující umělecký zážitek. Napíšete o tom svěží komentář?"
  },
  {
    "id": 1001448517657878500,
    "created_at": "2018-05-29 13:01:47",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě na jeho žádost předsedu Nejvyššího správního soudu Josefa Baxu."
  },
  {
    "id": 1001446190251200500,
    "created_at": "2018-05-29 12:52:32",
    "text": "Totalita se vždy schovává za vzletná hesla. Například šiří nenávist a vykřikuje přitom hesla o boji s nenávistí. https://t.co/4WpsLUFnhu"
  },
  {
    "id": 1001442322347905000,
    "created_at": "2018-05-29 12:37:10",
    "text": "Dění v Brně v plné nahotě odhalilo vyznavače kultu povýšenecké nenávisti. Psal jsem o nich už v březnu: https://t.co/B7EtWBmevG"
  },
  {
    "id": 1001422984144478200,
    "created_at": "2018-05-29 11:20:19",
    "text": "Savčenková zhubla při hladovce o 20 kilogramů. Očekávám protesty TOP 09, “osobností” a dokument na ČST! https://t.co/BjAiWZs3vZ"
  },
  {
    "id": 1001420487413641200,
    "created_at": "2018-05-29 11:10:24",
    "text": "RT @rudolf_jindrak: Návštěva frekventantů Diplomatické akademie MZV na Hradě &amp; povídání o střední Evropě. Aneb zakládání dobrých vztahů a f…"
  },
  {
    "id": 1001413927392219100,
    "created_at": "2018-05-29 10:44:20",
    "text": "Prezident republiky podepsal tři zákony. Podrobnosti zde: https://t.co/zbnuAEaK2g"
  },
  {
    "id": 1001412073409171500,
    "created_at": "2018-05-29 10:36:58",
    "text": "@rizek244 Za nácky lidé jako Vy označují každého, kdo nemá mainstreamový názor. Vám se evidentně to vytahovaní stát… https://t.co/Bmf4GYvuNt"
  },
  {
    "id": 1001411389938962400,
    "created_at": "2018-05-29 10:34:15",
    "text": "Na stole Tomáše Halíka opět zazvonil telefon z pekla. “Nejsi prostý věřící. Jsi nad nimi,” šeptal mámivý hlas: https://t.co/J2IRizf2fJ"
  },
  {
    "id": 1001409899509755900,
    "created_at": "2018-05-29 10:28:19",
    "text": "@Markus_Zeman Vy jste to nepobral. Ne hru zakazovat. Ale ať není hrazena z veřejných peněz. Ať si jí třeba Glaser zaplatí komplet ze svého."
  },
  {
    "id": 1001408157082685400,
    "created_at": "2018-05-29 10:21:24",
    "text": "Novodobí totalitáři vyznávající kult povýšenecké nenávisti v akci. Profil uskupení Slušní lidé byl na sociální síti Facebook zablokován."
  },
  {
    "id": 1001399995357069300,
    "created_at": "2018-05-29 09:48:58",
    "text": "@mar_sula Přesně jste popsal vlhký sen novodobých českých fašistů. Twitter je jich plný."
  },
  {
    "id": 1001398898156625900,
    "created_at": "2018-05-29 09:44:37",
    "text": "RT @netanyahu: ישראל רואה בחומרה את ההתקפות עליה ועל יישוביה על-ידי החמאס והג'יהאד האסלאמי מרצועת עזה. צה\"ל יגיב בעוצמה רבה על ההתקפות הללו…"
  },
  {
    "id": 1001393616512802800,
    "created_at": "2018-05-29 09:23:37",
    "text": "@Ondra_Zugar @KurkaDusan Žádné vzdělané lidi tu nevidím. Jen nádobu plnou nenávisti."
  },
  {
    "id": 1001386910647050200,
    "created_at": "2018-05-29 08:56:59",
    "text": "@Ondra_Zugar @KurkaDusan Když si čtu “projevy” tohoto studenta práv, vytane mi na mysli historie. Přelom let 1938/3… https://t.co/vpKdzjZoBp"
  },
  {
    "id": 1001378718617567200,
    "created_at": "2018-05-29 08:24:25",
    "text": "Hanobení vlajky ČR? Co kdyby si herečka vytáhla z přirození vlajku EU? Ovčáček pálí ostrými, přidal se i Klaus ml. https://t.co/pTUengzCo8"
  },
  {
    "id": 1001200704315445200,
    "created_at": "2018-05-28 20:37:03",
    "text": "https://t.co/9daHvBdNIe"
  },
  {
    "id": 1001199946425602000,
    "created_at": "2018-05-28 20:34:03",
    "text": "RT @CUTIzpravy: Dokážete si představit to mediálně-aktivisticko-levicovoliberální furore, kdyby si na pódiu herečka vytáhla z přirození vla…"
  },
  {
    "id": 1001161994345513000,
    "created_at": "2018-05-28 18:03:14",
    "text": "Aby nám to nezapadlo. Včera jsem řekl TV PRIMA: https://t.co/8Qzg47Hpt0"
  },
  {
    "id": 1001147338684076000,
    "created_at": "2018-05-28 17:05:00",
    "text": "„Před 15. červnem zcela určitě jmenuji Andreje Babiše předsedou vlády,“ řekl pan prezident v rozhovoru pro ČT. https://t.co/5Kzq4vbPt5"
  },
  {
    "id": 1001137803214884900,
    "created_at": "2018-05-28 16:27:07",
    "text": "Také si všímáte, jak mediální mainstream v podstatě cenzuruje informaci o brněnském zneuctění státní vlajky? Znamená snad mlčení souhlas?"
  },
  {
    "id": 1001121201220149200,
    "created_at": "2018-05-28 15:21:08",
    "text": "Prezident republiky. Zvolený lidem. Skutečný obránce svobody a demokracie. https://t.co/ZXgGjKYdtk"
  },
  {
    "id": 1001120519381545000,
    "created_at": "2018-05-28 15:18:26",
    "text": "Kult povýšenecké nenávisti. To je novodobý český fašismus skrývající se za přizviskem “levicoví liberálové”."
  },
  {
    "id": 1001118008188817400,
    "created_at": "2018-05-28 15:08:27",
    "text": "Připomínáme si 100 let samostatnosti. Senátorka Eliška Wagnerová přišla s osobitým dárkem. Brání tohle: https://t.co/hSzeKeloPq"
  },
  {
    "id": 1001107859420172300,
    "created_at": "2018-05-28 14:28:08",
    "text": "Paní Ivana Zemanová navštívila výstavu Sempé – Malý Mikuláš a jiné… Podrobnosti o unikátní výstavě naleznete zde:… https://t.co/VDKKVr7nC0"
  },
  {
    "id": 1001077224731234300,
    "created_at": "2018-05-28 12:26:24",
    "text": "Neskutečná drzost! Když na to nedostanou krajské peníze, zaplatí to z ministerských. Svinstvo v Brně tak v každém p… https://t.co/q3bJKu8oLp"
  },
  {
    "id": 1001064590841667600,
    "created_at": "2018-05-28 11:36:11",
    "text": "V Brně byla za potlesku “levicových liberálů” a za veřejné peníze odporným způsobem zhanobena státní vlajka, za kterou naši předci umírali."
  },
  {
    "id": 1001060601412677600,
    "created_at": "2018-05-28 11:20:20",
    "text": "RT @IsraelinCZ: IZRAELSKÉ LETECTVO SLAVÍ 70 LET: Na jeho zrodu mělo podíl i Československo-jako jediné dodávalo i přes embargo OSN Izraeli…"
  },
  {
    "id": 1001058079776165900,
    "created_at": "2018-05-28 11:10:19",
    "text": "Krásné odpoledne, přátelé! https://t.co/wtVpKwXs0z"
  },
  {
    "id": 1001042122500464600,
    "created_at": "2018-05-28 10:06:55",
    "text": "Lány, právě teď. Pan prezident se setkal k přátelské diskusi se svým poradcem Michalem Haškem. https://t.co/9aO93Tpw6z"
  },
  {
    "id": 1001027963163496400,
    "created_at": "2018-05-28 09:10:39",
    "text": "Lány, právě teď. Natáčení rozhovoru pro pořad “Týden v politice”. Sledujte v neděli 3.6. 2018 ve 20:03 na ČT24! https://t.co/aHx2fH97vT"
  },
  {
    "id": 1000966936921100300,
    "created_at": "2018-05-28 05:08:09",
    "text": "Potřebujeme ministra, který prosazuje národní zájmy, a ne ministra, který by přihlížel prosazování zájmů jiných národů. Petr Robejšek v MFD."
  },
  {
    "id": 1000850849696972800,
    "created_at": "2018-05-27 21:26:52",
    "text": "100 let od vzniku ČSR a čeští daňoví poplatníci nedobrovolně zaplatili zneuctění české státní vlajky. Neobhajitelný… https://t.co/MgOopA2KeT"
  },
  {
    "id": 1000775853742215200,
    "created_at": "2018-05-27 16:28:51",
    "text": "RT @SlechtovaKarla: https://t.co/9qeikD7oOl"
  },
  {
    "id": 1000774429654290400,
    "created_at": "2018-05-27 16:23:12",
    "text": "Agitky plné nenávisti. Za peníze občanů. S láskou ČST Praha a Čs. rozhlas. https://t.co/7CcIqJHYf0"
  },
  {
    "id": 1000736169213218800,
    "created_at": "2018-05-27 13:51:10",
    "text": "RT @EuroZpravycz: Dusno kvůli divadelní hře: Muslimka vytahuje z pochvy českou vlajku, platíme to z daní. Ovčáček se pořádně naštval https:…"
  },
  {
    "id": 1000723892405723100,
    "created_at": "2018-05-27 13:02:23",
    "text": "V Lánech se dnes konala porada expertního týmu prezidenta republiky Miloše Zemana za účasti ministra průmyslu a obchodu ČR Tomáše Hünera."
  },
  {
    "id": 1000701691115786200,
    "created_at": "2018-05-27 11:34:09",
    "text": "@PatrikMada @Ascate2 Upozořnuji přítomné puristy, že jde o citaci článku zahraničního vysílání Českého rozhlasu ;-)"
  },
  {
    "id": 1000688762438017000,
    "created_at": "2018-05-27 10:42:47",
    "text": "Zeman: Hamáček broke deal on not nominating Poche foreign minister: https://t.co/jJxYLeb4ia"
  },
  {
    "id": 1000688464420106200,
    "created_at": "2018-05-27 10:41:36",
    "text": "Mr. Zeman said that Mr. Poche cast doubt on two pillars of CZ foreign policy: opposition to EU quotas on migrants and a pro-Israel policy."
  },
  {
    "id": 1000681063298060300,
    "created_at": "2018-05-27 10:12:11",
    "text": "RT @CUTIzpravy: Zdá se, že akce Mládež vede Brno v roce 1949 neskončila."
  },
  {
    "id": 1000675885131948000,
    "created_at": "2018-05-27 09:51:37",
    "text": "RT @CUTIzpravy: Jednoduché. Ať si “hru” zaplatí brněnští “levicoví liberálové” ze svého. A neutrácí na své primitivní agitky peníze daňovýc…"
  },
  {
    "id": 1000674048504983600,
    "created_at": "2018-05-27 09:44:19",
    "text": "RT @TBarrandov: Co říká prezident Miloš Zeman na politické a společenské aktuality? Nestihli jste středeční díl Kauz Jaromíra Soukupa? Dnes…"
  },
  {
    "id": 1000510613800587300,
    "created_at": "2018-05-26 22:54:53",
    "text": "RT @CUTIzpravy: Tu “divadelní hru” napsal nějaký autor počátkem 50. let v rámci tažení Strany proti církvi? https://t.co/7wPV3c3AYD"
  },
  {
    "id": 1000510365023789000,
    "created_at": "2018-05-26 22:53:54",
    "text": "RT @dominikduka: S povděkem kvituji, že se blasfemická hra v Brně nedočkala ohlasu. Vnímám ty, kteří se peticí a u soudu proti hře postavil…"
  },
  {
    "id": 1000358582460743700,
    "created_at": "2018-05-26 12:50:46",
    "text": "Jak jsem včera uvedl na @Frekvence1 - vyrazil jsem na výlet i do Německa! https://t.co/prV8W2sK0J"
  },
  {
    "id": 1000311355172442100,
    "created_at": "2018-05-26 09:43:06",
    "text": "Čtení na víkend! https://t.co/EIRDfJ6lGt"
  },
  {
    "id": 999938741782409200,
    "created_at": "2018-05-25 09:02:28",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 24. května 2018, 20:15, TV Barrandov: https://t.co/Ltosd7nlLE"
  },
  {
    "id": 999925953131307000,
    "created_at": "2018-05-25 08:11:39",
    "text": "RT @Frekvence1: Zeptejte se @PREZIDENTmluvci na cokoliv! Tiskový mluvčí prezidenta republiky bude hostem Otevřené linky Pressklubu Frekvenc…"
  },
  {
    "id": 999920573898637300,
    "created_at": "2018-05-25 07:50:17",
    "text": "RT @AmbMeron: A pleasure to talk to the Archbishop of Prague, Cardinal Dominik Duka. A true friend https://t.co/3rLpreJ5Ha"
  },
  {
    "id": 999920333963460600,
    "created_at": "2018-05-25 07:49:19",
    "text": "Skupina J&amp;T uzavřela dohodu s čínskou CITIC Group, která odkoupí pohledávky J&amp;T za CEFC: https://t.co/m0hCWHHh8J"
  },
  {
    "id": 999742318809841700,
    "created_at": "2018-05-24 20:01:57",
    "text": "Nejen migranti. Zeman vyčítá Pochemu i jeho kritiku českého vztahu k Izraeli: https://t.co/ZmBALniErs"
  },
  {
    "id": 999659695802650600,
    "created_at": "2018-05-24 14:33:38",
    "text": "RT @rudolf_jindrak: \"Dnes vidíte, že jsem i hrdý americký agent,\" řekl prezident Zeman vysokým představitelům 11 amerických firem, s nimiž…"
  },
  {
    "id": 999642240350859300,
    "created_at": "2018-05-24 13:24:17",
    "text": "Pan prezident přijal na Hradě delegaci manažerů z USA ze skupiny ACEBA. https://t.co/hzHpOxCvP3"
  },
  {
    "id": 999635272177418200,
    "created_at": "2018-05-24 12:56:35",
    "text": "Podepsáno! https://t.co/r1s8ZatI04"
  },
  {
    "id": 999631844596441100,
    "created_at": "2018-05-24 12:42:58",
    "text": "Pan prezident přijal na Hradě Václava Krásu, předsedu Národní rady osob se zdravotním postižením ČR a další zástupc… https://t.co/kXY4FEJ6ot"
  },
  {
    "id": 999577820648165400,
    "created_at": "2018-05-24 09:08:18",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/l76n3AFtgF"
  },
  {
    "id": 999335471967809500,
    "created_at": "2018-05-23 17:05:17",
    "text": "RT @MarekKuchcinski: Z Czechami się lubimy i mamy wpólne interesy, np. wobec projektów budżetu UE. Dziś spotkanie z premierem Babišem https…"
  },
  {
    "id": 999335440552513500,
    "created_at": "2018-05-23 17:05:10",
    "text": "RT @strakovka: Premiér se setkal v Poslanecké sněmovně s maršálkem Sejmu Polské republiky. Andrej Babiš jednal s Markem Kuchcińskim o posíl…"
  },
  {
    "id": 999299140164161500,
    "created_at": "2018-05-23 14:40:55",
    "text": "Projev prezidenta republiky při Žofínském fóru 2018: https://t.co/rLl46wNbTM"
  },
  {
    "id": 999295263239036900,
    "created_at": "2018-05-23 14:25:31",
    "text": "Prezident Zeman přijme na Hradě zástupce amerických firem: https://t.co/HpNkH2xAFy"
  },
  {
    "id": 999282554497896400,
    "created_at": "2018-05-23 13:35:01",
    "text": "RT @realDonaldTrump: WITCH HUNT!"
  },
  {
    "id": 999277082235605000,
    "created_at": "2018-05-23 13:13:16",
    "text": "Podruhé jmenuji Babiše premiérem, bez ohledu na výsledek referenda, řekl Zeman. Podívejte se na jeho vystoupení: https://t.co/EuWQuTeizZ"
  },
  {
    "id": 999255514050629600,
    "created_at": "2018-05-23 11:47:34",
    "text": "Dodržím svůj slib a podruhé jmenuji, a to bez ohledu na výsledek referenda (v ČSSD), Andreje Babiše předsedou vlády, uvedl pan prezident."
  },
  {
    "id": 999247355256954900,
    "created_at": "2018-05-23 11:15:09",
    "text": "Právě teď! Pan prezident tradičně hovoří na Žofínském fóru. https://t.co/BdrlVoL6xu"
  },
  {
    "id": 999243306101026800,
    "created_at": "2018-05-23 10:59:03",
    "text": "Trump, Putin, Merkelová? Ne, Češi věří nejvíc Zemanovi: https://t.co/qEu7c9mNY8"
  },
  {
    "id": 999236906180280300,
    "created_at": "2018-05-23 10:33:38",
    "text": "Prezident republiky podepsal tři zákony: https://t.co/iIJaZBXjoM"
  },
  {
    "id": 999234713180164100,
    "created_at": "2018-05-23 10:24:55",
    "text": "Prezident republiky vyhlásil termín voleb. Podrobnosti zde: https://t.co/rvAJ7FwG6N"
  },
  {
    "id": 999207384781344800,
    "created_at": "2018-05-23 08:36:19",
    "text": "@buakaw4m Útok pana Poche na Izrael je útokem na pana prezidenta."
  },
  {
    "id": 999205407372513300,
    "created_at": "2018-05-23 08:28:28",
    "text": "@Ascate2 Cituji pana Poche :-)"
  },
  {
    "id": 999201436276846600,
    "created_at": "2018-05-23 08:12:41",
    "text": "RT @SlechtovaKarla: Příští týden se přes ČR stejně jako v minulých letech přesunou jednotky #USArmy na cvičení do Polska a Pobaltí. Je to u…"
  },
  {
    "id": 999201211868991500,
    "created_at": "2018-05-23 08:11:47",
    "text": "Poche 1: Dezinformační média záměrně tvrdí opak. Jedná se o naprosté lži! Poche 2: Neotáčejme se k uprchlíkům zády: https://t.co/5J9hyfzx3i"
  },
  {
    "id": 999197555358621700,
    "created_at": "2018-05-23 07:57:16",
    "text": "@pavel53d Izrael čelí od svého vzniku snahám o zničení. Přítel podá pomocnou ruku. Tenhle pán kope do kotníku. Prostě: NE!"
  },
  {
    "id": 999194201882579000,
    "created_at": "2018-05-23 07:43:56",
    "text": "ČR je upřímným přítelem Izraele. A proto se nikdy nesmí stát členem vlády nepřítel Izraele, který svou nenávist vyj… https://t.co/LfuZowWpBy"
  },
  {
    "id": 999179531159261200,
    "created_at": "2018-05-23 06:45:38",
    "text": "Mirek Kalousek, Pospíšil i Štětina mlčí. Když se jim ideově hodila pro útok na pana prezidenta, dávali květiny. https://t.co/Xq3Pda1dtd"
  },
  {
    "id": 998955656882393100,
    "created_at": "2018-05-22 15:56:02",
    "text": "Češi ze světových politiků nejvíce věří Zemanovi: https://t.co/HvBe16vedg"
  },
  {
    "id": 998848892715307000,
    "created_at": "2018-05-22 08:51:48",
    "text": "Pan kancléř převzal z rukou prezidenta AOBP ČR Jiřího Hynka Petici proti regulaci zbraní, kterou v těchto dnech pod… https://t.co/W04vpTNrxJ"
  },
  {
    "id": 998840594427469800,
    "created_at": "2018-05-22 08:18:49",
    "text": "Pan prezident se zúčastní ve středu 23. května 2018 ve 13.00 hodin v pražském Paláci Žofín zahájení Žofínského fóra: https://t.co/ZmnB9OodSY"
  },
  {
    "id": 998662533929201700,
    "created_at": "2018-05-21 20:31:16",
    "text": "@bibalukas Je zajímavé pozorovat, co mé reakce způsobují, víte? Padají masky a vidím nedemokraty, cenzory, antisemi… https://t.co/kECFFiso6F"
  },
  {
    "id": 998661845643857900,
    "created_at": "2018-05-21 20:28:32",
    "text": "@BrabecMis Lež neokecáte ani milionem tweetů. Máte smůlu."
  },
  {
    "id": 998661216708022300,
    "created_at": "2018-05-21 20:26:02",
    "text": "@Karel_IV62 Je to lživý článek, dezinformace. Co s tím Vy naděláte? Nic. Kromě prskání na Twitteru. Pozor, ať si neuhasíte lulku!"
  },
  {
    "id": 998641528347164700,
    "created_at": "2018-05-21 19:07:48",
    "text": "@SachJaroslav @JanPovysil Pan Povýšil nic nemohl odcitovat, protože jsem to nikdy neřekl. To se stává, když je někdo mediálně negramotný!"
  },
  {
    "id": 998635439467712500,
    "created_at": "2018-05-21 18:43:37",
    "text": "@JanPovysil Fuj! Šíříte dezinformaci! Žádný seznam. Avizoval jsem zveřejnění nejodpornějších reakcí Pražské kavárny… https://t.co/h3CWb1FpWa"
  },
  {
    "id": 998633813126340600,
    "created_at": "2018-05-21 18:37:09",
    "text": "Krásný večer, přátelé! https://t.co/nGo1Y6qnn8"
  },
  {
    "id": 998632325788454900,
    "created_at": "2018-05-21 18:31:14",
    "text": "@JanPovysil Rád byste některá média zakázal? Máte už seznam vhodných a nevhodných médií? Co Vám na to říká duch soudruha Bil’aka?"
  },
  {
    "id": 998631572751470600,
    "created_at": "2018-05-21 18:28:15",
    "text": "@JosefSvejk_ Děkuji za potvrzení mých slov. Cenzury se zachtělo!"
  },
  {
    "id": 998630847187247100,
    "created_at": "2018-05-21 18:25:22",
    "text": "I mezi mainstreamové novináře se nám rozšířilo tzv. politické šmejdství, které se snaží pravdu zadupat zneužíváním “boje s dezinformacemi”."
  },
  {
    "id": 998629437653516300,
    "created_at": "2018-05-21 18:19:46",
    "text": "@BrabecMis Lživě uvádí, že pan Poche čelí dezinformační kampani. Ne. Pan Poche je konfrontován s vlastními výroky o… https://t.co/78znq0FsPO"
  },
  {
    "id": 998627672799498200,
    "created_at": "2018-05-21 18:12:45",
    "text": "@BrabecMis Je to dezinformační, tedy lživý článek."
  },
  {
    "id": 998625256142266400,
    "created_at": "2018-05-21 18:03:09",
    "text": "RT @DVTVcz: Jako poslední jsme projeli horskou dráhu na Výstavišti, z areálu zmizí dráha po více než 40 letech.\nCo si myslíte vy? Měla dráh…"
  },
  {
    "id": 998619432208556000,
    "created_at": "2018-05-21 17:40:00",
    "text": "RT @ftarreg: Miluju ta prohlaseni, \"budte v pohode, nic se s GDPR nemeni.\" Aha. Tak proc se to zavadi?"
  },
  {
    "id": 998604903877677000,
    "created_at": "2018-05-21 16:42:16",
    "text": "Tak takový hnůj jsou schopni sepsat čeští novináři. Aby zpochybnili pravdu, vytahují strašáka ruské propagandy: https://t.co/fCcd4pGf5J"
  },
  {
    "id": 998547682628194300,
    "created_at": "2018-05-21 12:54:54",
    "text": "RT @realDonaldTrump: The Wall Street Journal asks, “WHERE IN THE WORLD WAS BARACK OBAMA?”  A very good question!"
  },
  {
    "id": 998534219155562500,
    "created_at": "2018-05-21 12:01:24",
    "text": "Ovčáček neútočí. Ovčáček poukazuje na názory pana Pocheho. #protiizraeli #protivisegradu #promigraci #probrusel https://t.co/pW8al96LEt"
  },
  {
    "id": 998515228425015300,
    "created_at": "2018-05-21 10:45:56",
    "text": "@JanPovysil Dejte si kafíčko. To Vás uklidní."
  },
  {
    "id": 998509571353309200,
    "created_at": "2018-05-21 10:23:27",
    "text": "No co. Milicionáři, to byli takoví legionáři Strany. Milan Štěch to musí znát. https://t.co/pA6CSIlUK3"
  },
  {
    "id": 998492425881571300,
    "created_at": "2018-05-21 09:15:20",
    "text": "@Ascate2 Plácáte páté přes deváté, jen abyste omluvil výrok M. Pocheho. Strašné!"
  },
  {
    "id": 998489759944204300,
    "created_at": "2018-05-21 09:04:44",
    "text": "@Ascate2 Něco tak hloupého jsem dlouho nečetl. Když něčemu nerozumíte, raději mlčte."
  },
  {
    "id": 998465971898736600,
    "created_at": "2018-05-21 07:30:12",
    "text": "@SW_CZE Vyjádření pana Pocheho, který touží být min. zahr. věcí, je ostře protiizraelské. To je v totálním rozporu se zájmy České republiky!"
  },
  {
    "id": 998465029535158300,
    "created_at": "2018-05-21 07:26:28",
    "text": "Vsadím boty, že nebyl jeden jediný člověk v terénu, kterému by chybělo GDPR: https://t.co/AZwCtLbu3I"
  },
  {
    "id": 998446126377336800,
    "created_at": "2018-05-21 06:11:21",
    "text": "Hamás se raduje: M. Poche by v ČR poskytoval azyl uprchlíkům před “válkou v Gaze”, jak vyjevil v Mf DNES."
  },
  {
    "id": 998251223571664900,
    "created_at": "2018-05-20 17:16:52",
    "text": "RT @realDonaldTrump: The Witch Hunt finds no Collusion with Russia - so now they’re looking at the rest of the World. Oh’ great!"
  },
  {
    "id": 998226902669299700,
    "created_at": "2018-05-20 15:40:14",
    "text": "Ano, cesta ke smíření je jediná možná a jediná správná. Proto společně odmítněme vyvolávání zlých duchů minulosti. https://t.co/S81tN7scp0"
  },
  {
    "id": 998194692893368300,
    "created_at": "2018-05-20 13:32:15",
    "text": "RT @strakovka: Premiéra poprvé doprovází na zahraniční pracovní cestu také žena Monika Babišová. https://t.co/uad0VmMrOj"
  },
  {
    "id": 998185868702748700,
    "created_at": "2018-05-20 12:57:11",
    "text": "Lid a jeho prezident mají jasno! https://t.co/2C63TjVBii"
  },
  {
    "id": 997914061387063300,
    "created_at": "2018-05-19 18:57:07",
    "text": "V glose “Další úkol pro Ovčáčka” mne @neviditelnypes vyzval k předložení promigračního článku od M. Poche. Zde je: https://t.co/5J9hyfzx3i"
  },
  {
    "id": 997856004124631000,
    "created_at": "2018-05-19 15:06:25",
    "text": "Jsou to výroky nabubřelé a povýšenecké. Česká historie se prostě přepisovat nebude! https://t.co/aFjEQm20Wi"
  },
  {
    "id": 997818456291586000,
    "created_at": "2018-05-19 12:37:13",
    "text": "A má pravdu, předseda! https://t.co/spakdSrb5V"
  },
  {
    "id": 997551602436321300,
    "created_at": "2018-05-18 18:56:50",
    "text": "RT @AmbMeron: The special relations between Israel and the Czech Republic https://t.co/0YnunlD0Ar"
  },
  {
    "id": 997514855795036200,
    "created_at": "2018-05-18 16:30:49",
    "text": "Chce-li ČSSD v EU a v NATO hájit české národní zájmy, jak dnes zaznělo, je logické, že ve vládě nemůže být příznivec migračních kvót!"
  },
  {
    "id": 997497391317123100,
    "created_at": "2018-05-18 15:21:25",
    "text": "Klidný nadcházející víkend, přátelé! https://t.co/d6yZ9evu7T"
  },
  {
    "id": 997492332101603300,
    "created_at": "2018-05-18 15:01:19",
    "text": "To už je opravdu paranoia. Fakta jsou přitom jasná. Pan prezident odmítá nominanta, který podpořil migrační kvóty,… https://t.co/5GdNJYtovF"
  },
  {
    "id": 997460562144579600,
    "created_at": "2018-05-18 12:55:04",
    "text": "Z rozhovoru pana prezidenta pro https://t.co/2bu8UgDmcv https://t.co/cfYYLZp72b"
  },
  {
    "id": 997459526814224400,
    "created_at": "2018-05-18 12:50:57",
    "text": "Pan Poche je člověk, který výrazně vystupoval ve prospěch migračních kvót, odůvodnil pan prezident své stanovisko: https://t.co/HRlfR1SAKT"
  },
  {
    "id": 997431140104491000,
    "created_at": "2018-05-18 10:58:09",
    "text": "Ovčáček bez servítků: Extremisté z hnutí STAN ohrožují českou demokracii! https://t.co/T0nyVUrnYO"
  },
  {
    "id": 997424258371473400,
    "created_at": "2018-05-18 10:30:49",
    "text": "ČST Praha včera slavnostně oznámila, že Bílé přilby čelí systematické kampani proruských a proasadovských médií. https://t.co/LbP9zJdVwX"
  },
  {
    "id": 997380947178917900,
    "created_at": "2018-05-18 07:38:42",
    "text": "Ničitelé demokracie a odpůrci svobody dlouhodobě nenávidí pana prezidenta. Stále touží pošlapat vůli občanů: https://t.co/VAtuUoqRsH"
  },
  {
    "id": 997352025498275800,
    "created_at": "2018-05-18 05:43:47",
    "text": "Oblíbený Zeman. V krajích chodí na setkání s prezidentem stovky lidí https://t.co/NcAzyN5njv"
  },
  {
    "id": 997185748192415700,
    "created_at": "2018-05-17 18:43:03",
    "text": "‚Měli by si zajít k psychiatrovi,‘ reagoval Zeman na návrh senátorů z hnutí STAN žalovat ho za velezradu https://t.co/KAXfcPIQXS"
  },
  {
    "id": 997176614558535700,
    "created_at": "2018-05-17 18:06:46",
    "text": "RT @AmbMeron: 17 New Police Dogs Arrive In Israel From Czech Republic 🇮🇱🐕🇨🇿 https://t.co/2NxkhbEzUK"
  },
  {
    "id": 997172867174490100,
    "created_at": "2018-05-17 17:51:52",
    "text": "Prezident republiky. https://t.co/tsPL8KQvQN"
  },
  {
    "id": 997144468464824300,
    "created_at": "2018-05-17 15:59:01",
    "text": "Kardinál Duka: Menšiny tu vytvářejí totalitu, to si netroufli ani nacisté, jsme v nejhlubší krizi https://t.co/vIPIXbKyKt"
  },
  {
    "id": 997122419121848300,
    "created_at": "2018-05-17 14:31:25",
    "text": "OVTV, videozáznam tiskové konference na závěr návštěvy Moravskoslezského kraje: https://t.co/yxCtDpUOzh https://t.co/m944cVY4IQ"
  },
  {
    "id": 997104316744953900,
    "created_at": "2018-05-17 13:19:29",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany ve Slezských Pavlovicích: https://t.co/OPOEbQGDbb https://t.co/uzl2Raj0PE"
  },
  {
    "id": 997063519928545300,
    "created_at": "2018-05-17 10:37:22",
    "text": "S úsměvem jde všechno líp. Z diskuse na https://t.co/oQ7qAsgJot! https://t.co/rKZjkpHrlX"
  },
  {
    "id": 997053440277786600,
    "created_at": "2018-05-17 09:57:19",
    "text": "Vyslechli jsme v Karviné na náměstí: Já když slyším o pražské kavárně... https://t.co/QCwT6mjdi9"
  },
  {
    "id": 997039301845274600,
    "created_at": "2018-05-17 09:01:08",
    "text": "Ostrava. Pan prezident přijal na jeho žádost předsedu ČSSD Jana Hamáčka. https://t.co/hy4HGa1s4g"
  },
  {
    "id": 997038521486540800,
    "created_at": "2018-05-17 08:58:02",
    "text": "Extremisté ze STAN dalším útokem na přímo zvoleného prezidenta republiky ohrožují demokracii a svobodu v ČR. https://t.co/8ebozdQvi7"
  },
  {
    "id": 997019139880480800,
    "created_at": "2018-05-17 07:41:01",
    "text": "@kottovaa @kedrix79 Něco tak ubohého se v české žurnalistice dlouho neobjevilo. Slušní lidé si odplivnou, uživatelé Twitteru to olajkují."
  },
  {
    "id": 996829328351678500,
    "created_at": "2018-05-16 19:06:46",
    "text": "@rostlapilj 76,69 %"
  },
  {
    "id": 996805023509164000,
    "created_at": "2018-05-16 17:30:12",
    "text": "Orlová, Zeman hovořil k lidu v další obci, kde ho milují: https://t.co/crRoVMTC30"
  },
  {
    "id": 996802382720847900,
    "created_at": "2018-05-16 17:19:42",
    "text": "Momentky z druhého dne návštěvy Moravskoslezského kraje. https://t.co/kI08ThzYrm"
  },
  {
    "id": 996796872202301400,
    "created_at": "2018-05-16 16:57:48",
    "text": "Paní Ivana Zemanová navštívila Mobilní hospic Strom života. https://t.co/6k5M6p2r5M"
  },
  {
    "id": 996781815091343400,
    "created_at": "2018-05-16 15:57:58",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Orlové: https://t.co/1BYaeFNNlG https://t.co/3fc1Cv74q1"
  },
  {
    "id": 996773797989675000,
    "created_at": "2018-05-16 15:26:07",
    "text": "Pan prezident debatuje s občany v Orlové. Skvělá atmosféra! https://t.co/YVRBASlWyJ"
  },
  {
    "id": 996771798032273400,
    "created_at": "2018-05-16 15:18:10",
    "text": "Právě teď! Sledujte živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Orlové. https://t.co/ykGK6SdSby"
  },
  {
    "id": 996770494060859400,
    "created_at": "2018-05-16 15:12:59",
    "text": "@MartinBernatek @Seznam_Zpravy Dobrá poznámka! Také proto jsem uvedl, že usnesení senátorů ohrožuje zdravý rozum."
  },
  {
    "id": 996769788029558800,
    "created_at": "2018-05-16 15:10:11",
    "text": "RT @MartinBernatek: @Seznam_Zpravy prosim Vás jak mohl Zeman říct utajované informace , když neřekl pravdu ? @PREZIDENTmluvci . Já to nechá…"
  },
  {
    "id": 996755249623961600,
    "created_at": "2018-05-16 14:12:24",
    "text": "OVTV, videozáznam debaty pana prezidenta s občany v Karviné: https://t.co/NPFFNSz8oG https://t.co/kSQvHjFBR4"
  },
  {
    "id": 996748671017463800,
    "created_at": "2018-05-16 13:46:16",
    "text": "Pan prezident debatuje s občany v Karviné. https://t.co/55jNBGEfZK"
  },
  {
    "id": 996746664382750700,
    "created_at": "2018-05-16 13:38:18",
    "text": "Právě teď! Sledujte živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Karviné. https://t.co/ekt8HT1WUA"
  },
  {
    "id": 996731833516789800,
    "created_at": "2018-05-16 12:39:22",
    "text": "Paní Ivana Zemanová navštívila Pohankový mlýn Šmajstrla ve Frenštátu pod Radhoštěm a rodný dům Sigmunda Freuda v Př… https://t.co/ShjLj4UtDa"
  },
  {
    "id": 996714764708479000,
    "created_at": "2018-05-16 11:31:32",
    "text": "Novičok? Ten zkoumáme, má na webu česká univerzita. Podívejte se sami: https://t.co/BR9Qwb9SYL"
  },
  {
    "id": 996708639053361200,
    "created_at": "2018-05-16 11:07:12",
    "text": "Senátoři uvedli v praxi pohádku Císařovy nové šaty. Tleskají neexistujícímu oděvu a proto jim vadí, že pan prezident veřejně řekl pravdu."
  },
  {
    "id": 996706585970987000,
    "created_at": "2018-05-16 10:59:02",
    "text": "@horalek_martin Běžte si dát kafíčko. To Vás uklidní."
  },
  {
    "id": 996703760918483000,
    "created_at": "2018-05-16 10:47:49",
    "text": "Usnesení senátního výboru ohrožuje zdravý rozum! https://t.co/gIltmF19Rf"
  },
  {
    "id": 996695250868555800,
    "created_at": "2018-05-16 10:14:00",
    "text": "OVTV, videozáznam setkání pana prezidenta se zaměstnanci Třineckých železáren: https://t.co/1pGUwx2khA https://t.co/zjho8Q0JO2"
  },
  {
    "id": 996693923472003100,
    "created_at": "2018-05-16 10:08:43",
    "text": "Z diskuse se zaměstnanci Třineckých železáren. https://t.co/SNnuBfwTTq"
  },
  {
    "id": 996689925100769300,
    "created_at": "2018-05-16 09:52:50",
    "text": "Právě teď! Sledujte živě na OVTV prostřednictvím FB pana prezidenta setkání se zaměstnanci Třineckých železáren. https://t.co/BdRy8124n9"
  },
  {
    "id": 996684273213231100,
    "created_at": "2018-05-16 09:30:22",
    "text": "Nezapoměňte na Český den proti rakovině! https://t.co/VSWVXa3kWX https://t.co/wObdujDiqv"
  },
  {
    "id": 996651955928944600,
    "created_at": "2018-05-16 07:21:57",
    "text": "RT @SlechtovaKarla: Bráním české národní zájmy, podporuji spojence. A to se asi hodně někomu nelíbí a proto spustil mediální kampaň ve styl…"
  },
  {
    "id": 996483716812820500,
    "created_at": "2018-05-15 20:13:26",
    "text": "RT @nikkihaley: RT @USUN: “I ask my colleagues here in the Security Council, who among us would accept this type of activity on your border…"
  },
  {
    "id": 996443384213581800,
    "created_at": "2018-05-15 17:33:10",
    "text": "Paní Ivana Zemanová na slavnostním večeru předala ocenění v anketě “Osobnost Moravskoslezského kraje 2017”. https://t.co/ehQbZK7Zws"
  },
  {
    "id": 996437895681585200,
    "created_at": "2018-05-15 17:11:21",
    "text": "RT @PresidentRuvi: Dear @FLOTUS Melania Trump,\nReaching out now to hold your hand, and wishing you a speedy and full recovery, \nNechama &amp; R…"
  },
  {
    "id": 996437587819679700,
    "created_at": "2018-05-15 17:10:08",
    "text": "@Karel_IV62 To je o mediální gramotnosti, vědí? Stačí maličkost. Přečíst si článek. Cituji: Zastání se naopak Izrae… https://t.co/jmtwH85ium"
  },
  {
    "id": 996419989732282400,
    "created_at": "2018-05-15 16:00:12",
    "text": "Prezident republiky. https://t.co/AYrg2zOpOk"
  },
  {
    "id": 996419510608506900,
    "created_at": "2018-05-15 15:58:18",
    "text": "RT @MirekTopolanek: @IDFSpokesperson @DanaBerova Byl jsem ve Sderotu, když letěla raketa z Gazy. Padla na Aškelon. \n\nTo, že jsou propalesti…"
  },
  {
    "id": 996417664032624600,
    "created_at": "2018-05-15 15:50:58",
    "text": "Zastání se Izrael dočkal také v České republice, na Pražském hradě! https://t.co/J7j1ydZYNz"
  },
  {
    "id": 996407266978009100,
    "created_at": "2018-05-15 15:09:39",
    "text": "Momentky z prvního dne návštěvy Moravskoslezského kraje. https://t.co/BvAb2FAaTu"
  },
  {
    "id": 996406858691825700,
    "created_at": "2018-05-15 15:08:02",
    "text": "Z návštěvy Jakartovic. https://t.co/7t7lIAdAiu"
  },
  {
    "id": 996393213098446800,
    "created_at": "2018-05-15 14:13:48",
    "text": "RT @realDonaldTrump: Can you believe that with all of the made up, unsourced stories I get from the Fake News Media, together with the  $10…"
  },
  {
    "id": 996386646332452900,
    "created_at": "2018-05-15 13:47:43",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Jakartovicích: https://t.co/N8g6JAX7hR https://t.co/LsOKxGqEkt"
  },
  {
    "id": 996380249511391200,
    "created_at": "2018-05-15 13:22:17",
    "text": "Paní Ivana Zemanová dnes navštívila Dětský ranč Hlučín, z.s. https://t.co/NaOov7XLXb"
  },
  {
    "id": 996378013179764700,
    "created_at": "2018-05-15 13:13:24",
    "text": "Právě teď! Sledujte živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Jakartovicích. https://t.co/kAbebidzbM"
  },
  {
    "id": 996355823780671500,
    "created_at": "2018-05-15 11:45:14",
    "text": "Leskovec nad Moravicí. Úžasné setkání s čs. partyzánkami, politickými vězni a válečným veteránem. Velká úcta! https://t.co/IQMidqZqRb"
  },
  {
    "id": 996326711959711700,
    "created_at": "2018-05-15 09:49:33",
    "text": "OVTV, videozáznam setkání pana prezidenta se zastupiteli Moravskoslezského kraje: https://t.co/WFtrCPpuZa https://t.co/NNJbueuhsl"
  },
  {
    "id": 996320527697530900,
    "created_at": "2018-05-15 09:24:59",
    "text": "Výborně! https://t.co/9s6smQX5Zg"
  },
  {
    "id": 996316894268403700,
    "created_at": "2018-05-15 09:10:32",
    "text": "@pavelzprahy Kuk: https://t.co/4ZY4wp8PCh"
  },
  {
    "id": 996316411424329700,
    "created_at": "2018-05-15 09:08:37",
    "text": "Právě teď! Sledujte živě na OVTV prostřednictvím FB pana prezidenta setkání se zastupiteli Moravskoslezského kraje. https://t.co/ayfqEvDZoW"
  },
  {
    "id": 996310696810905600,
    "created_at": "2018-05-15 08:45:55",
    "text": "Pan prezident se svojí paní zahájili setkáním s hejtmanem a jeho manželkou třídenní návštěvu Moravskoslezského kraj… https://t.co/8XK27ipbYb"
  },
  {
    "id": 996302069752512500,
    "created_at": "2018-05-15 08:11:38",
    "text": "Lepšolidé v reakcích na podporu Izraele řádně přitvrzují! https://t.co/aW2hFEkjlJ"
  },
  {
    "id": 996294096741392400,
    "created_at": "2018-05-15 07:39:57",
    "text": "Je to tak! https://t.co/MjPSXNKN3F"
  },
  {
    "id": 996283741558329300,
    "created_at": "2018-05-15 06:58:48",
    "text": "RT @AmbMeron: Israeli President invites Czech President to visit Israel this year 🇨🇿🇮🇱 https://t.co/3q9PTawxqz"
  },
  {
    "id": 996119306982314000,
    "created_at": "2018-05-14 20:05:24",
    "text": "RT @netanyahu: סיימתי עכשיו התייעצות ביטחונית עם שר הביטחון, שר הבט\"פ, הרמטכ\"ל, ראש השב\"כ, המפכ\"ל וראש המל\"ל • הפעולה הנחושה של צה\"ל וכוחות…"
  },
  {
    "id": 996118352174207000,
    "created_at": "2018-05-14 20:01:36",
    "text": "Clearly. The Czech Republic supports Israel. https://t.co/8E1giaCQiS"
  },
  {
    "id": 996060943405662200,
    "created_at": "2018-05-14 16:13:29",
    "text": "RT @NickArcherFCO: Solidarity once again.  Good to be defending our values, and supporting a country which badly needs our help, together.…"
  },
  {
    "id": 996056122766364700,
    "created_at": "2018-05-14 15:54:20",
    "text": "Jiří Ovčáček na PL zpráskal novináře z Českého rozhlasu: Tohle je nenávist! Je mi stydno: https://t.co/wDjXReQIVl"
  },
  {
    "id": 996050584615735300,
    "created_at": "2018-05-14 15:32:19",
    "text": "Odpovědnost za oběti plně nesou ti, kteří násilné akce zorganizovali. https://t.co/9yDY5f7Rqc https://t.co/7wvlHuCU8E"
  },
  {
    "id": 996038344147718100,
    "created_at": "2018-05-14 14:43:41",
    "text": "Izraelský prezident poděkoval Zemanovi za postoj k Izraeli: https://t.co/6joZOktPXv"
  },
  {
    "id": 996036992378003500,
    "created_at": "2018-05-14 14:38:19",
    "text": "RT @LTCJonathan: This is what we are defending. Terrorist #Hamas is trying to breach through our defences and attack our civilians. https:/…"
  },
  {
    "id": 996013173970030600,
    "created_at": "2018-05-14 13:03:40",
    "text": "RT @WhiteHouse: Watch LIVE the dedication of @usembassyjlm: https://t.co/KVhxC50Ywe #USEmbassyJerusalem"
  },
  {
    "id": 995989968878227500,
    "created_at": "2018-05-14 11:31:27",
    "text": "Z dopisu od izraelského prezidenta: Dovolte mi, abych vyjádřil poděkování za Vaši pevnou pozici v otázce Jeruzaléma. https://t.co/ro3sth0SNT"
  },
  {
    "id": 995982483333242900,
    "created_at": "2018-05-14 11:01:43",
    "text": "RT @realDonaldTrump: U.S. Embassy opening in Jerusalem will be covered live on @FoxNews &amp; @FoxBusiness. Lead up to 9:00 A.M. (eastern) even…"
  },
  {
    "id": 995981531796721700,
    "created_at": "2018-05-14 10:57:56",
    "text": "https://t.co/2H2MVC5hmP"
  },
  {
    "id": 995980813429805000,
    "created_at": "2018-05-14 10:55:05",
    "text": "Tschechien, Rumänien und Ungarn blockieren USA-kritische Erklärung der EU: https://t.co/lupHK828P8"
  },
  {
    "id": 995971977029484500,
    "created_at": "2018-05-14 10:19:58",
    "text": "RT @AndrejBabis: Congratulations on 70 years of Israel’s independence! It is impressive to see how quickly its people have built such a pro…"
  },
  {
    "id": 995970714896388100,
    "created_at": "2018-05-14 10:14:57",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Moravskoslezském kraji ve dnech 15. - 17. 5. 2018:… https://t.co/hfl7FHBIPN"
  },
  {
    "id": 995967808356929500,
    "created_at": "2018-05-14 10:03:24",
    "text": "ŠOK! Bakalův Respekt a ČT šíří dezinformace! Čtěte na webu Svobodný Názor: https://t.co/4ZY4wp8PCh https://t.co/4tnYUysSLL"
  },
  {
    "id": 995949108673351700,
    "created_at": "2018-05-14 08:49:06",
    "text": "RT @netanyahu: השגרירות האמריקנית תיפתח היום אחר הצהריים בירושלים בירתנו. איזה יום מרגש לעם ישראל ולמדינת ישראל! ״בשוב ה׳ את שיבת ציון, היי…"
  },
  {
    "id": 995930980476170200,
    "created_at": "2018-05-14 07:37:03",
    "text": "Pan prezident se svojí paní navštíví ve dnech 15. – 17. května 2018 Moravskoslezský kraj. Program naleznete zde: https://t.co/5zZt8GHRSg"
  },
  {
    "id": 995898103621353500,
    "created_at": "2018-05-14 05:26:25",
    "text": "Kontroverze jsou logické. Uživatelé Twitteru vesměs nepatří k podporovatelům pana prezidenta. Často se projevují vu… https://t.co/F80nckXT1D"
  },
  {
    "id": 995736945782337500,
    "created_at": "2018-05-13 18:46:02",
    "text": "@KarelVomacka3 Naopak. Teprve teď to začne být zajímavé. Vyhlásil jsem totální válku tzv. politickým šmejdům, kteří… https://t.co/OCNUe76vVF"
  },
  {
    "id": 995735261127594000,
    "created_at": "2018-05-13 18:39:20",
    "text": "@adampanak Je to klaun, volaly děti!"
  },
  {
    "id": 995734969619288000,
    "created_at": "2018-05-13 18:38:11",
    "text": "@PJursik To není vlajka cizího státu, vážený kalouskovče. To je vlajka skutečných přátel."
  },
  {
    "id": 995733874058629100,
    "created_at": "2018-05-13 18:33:50",
    "text": "@PJursik Dnes je velmi důležitý den, jestli jste si neráčil ve své kalouskovské zapšklosti všimnout."
  },
  {
    "id": 995733325259165700,
    "created_at": "2018-05-13 18:31:39",
    "text": "@Jiri1669 Když něčemu nerozumíte, mlčte."
  },
  {
    "id": 995733044760891400,
    "created_at": "2018-05-13 18:30:32",
    "text": "@MirekS14 To je klaun, volaly děti!"
  },
  {
    "id": 995732795162005500,
    "created_at": "2018-05-13 18:29:32",
    "text": "https://t.co/pqSo33qRR1"
  },
  {
    "id": 995732258714734600,
    "created_at": "2018-05-13 18:27:24",
    "text": "RT @netanyahu: President Trump is making history. We are deeply grateful for his bold decision to recognize Jerusalem as Israel’s capital a…"
  },
  {
    "id": 995732169636171800,
    "created_at": "2018-05-13 18:27:03",
    "text": "RT @JiriSmetana3: Chceme-li být demokraté, nemůžeme žádnou stranu vylučovat, říká Duka https://t.co/2JwvljbKq3 prostřednictvím @iDNEScz"
  },
  {
    "id": 995729356264820700,
    "created_at": "2018-05-13 18:15:52",
    "text": "#JerusalemEmbassy Velvyslanec ČR se navzdory EU zúčastnil recepce k otevření ambasády USA v Jeruzalémě: https://t.co/bN1RzGRKIv"
  },
  {
    "id": 995687067169513500,
    "created_at": "2018-05-13 15:27:50",
    "text": "Krásný večer, přátelé! https://t.co/tZmy7N5MpZ"
  },
  {
    "id": 995672498736857100,
    "created_at": "2018-05-13 14:29:57",
    "text": "RT @WhiteHouse: Happy #MothersDay! Today, and every day, let us express our utmost respect, admiration, and appreciation for our mothers wh…"
  },
  {
    "id": 995626301519253500,
    "created_at": "2018-05-13 11:26:22",
    "text": "@tapolitikaCZ @RESPEKT_CZ Boj s tzv. politickými šmejdy šířícími v rámci hybridní války dezinformace opravdu nemohu vést v rukavičkách!"
  },
  {
    "id": 995617775312932900,
    "created_at": "2018-05-13 10:52:29",
    "text": "RT @StateDept: Watch the arrival of the Presidential Delegation to the opening of #USEmbassyJerusalem. https://t.co/MdSfmHWwin"
  },
  {
    "id": 995616135260393500,
    "created_at": "2018-05-13 10:45:58",
    "text": "RT @AmbMeron: Deputy Minister Oren thanks Czech Republic for its steadfast support of Israel 🇮🇱 🇨🇿@DrMichaelOren https://t.co/XUV9tDnrwm"
  },
  {
    "id": 995557878076510200,
    "created_at": "2018-05-13 06:54:29",
    "text": "RT @Ostrov_A: Yes! Thank you Czech Republic for the #12Points to @NettaBarzilai &amp; #Israel! You are truly our best friend in Europe!\n\n@Israe…"
  },
  {
    "id": 995391720870350800,
    "created_at": "2018-05-12 19:54:14",
    "text": "“Israel and the US are key allies for the Czech Republic,” said Ovcacek: https://t.co/FgftydcIgs"
  },
  {
    "id": 995366278918484000,
    "created_at": "2018-05-12 18:13:08",
    "text": "Opravdové přátelství. Před 70 lety pomáhala ČSR v boji za nezávislost Izraele. Před 100 lety pomohly USA při vzniku ČSR. #JerusalemEmbassy"
  },
  {
    "id": 995338282866233300,
    "created_at": "2018-05-12 16:21:53",
    "text": "@PanenkaRadim @FoldynaJaroslav Příště bude tenhle fašoun chtít knihy pálit."
  },
  {
    "id": 995337488137932800,
    "created_at": "2018-05-12 16:18:44",
    "text": "Reprezentační prostory Hradu si včera prohlédlo 3000 školáků a dnes na 8000 návštěvníků. Celková účast na zahájení… https://t.co/zyLsi3TTzN"
  },
  {
    "id": 995331185294356500,
    "created_at": "2018-05-12 15:53:41",
    "text": "Hungary, Romania and Czech Republic help Jerusalem prevent statement against relocation: https://t.co/JnV6GLOFCx"
  },
  {
    "id": 995287914211954700,
    "created_at": "2018-05-12 13:01:44",
    "text": "Pan prezident děkuje premiérovi @AndrejBabis a min. zahr. věcí @stropnickym za skvělou spolupráci v klíčové věci! https://t.co/xc8KRWAIKw"
  },
  {
    "id": 995286958271287300,
    "created_at": "2018-05-12 12:57:57",
    "text": "Zeman s Babišem zařízli společnou akci Bruselu. Jde o světový dopad: https://t.co/5Z3b4dzo54"
  },
  {
    "id": 995262961534062600,
    "created_at": "2018-05-12 11:22:35",
    "text": "RT @Vcernohorsky: Česko, Maďarsko a Rumunsko podle zdrojů @BarakRavid zablokovaly společné prohlášení unie kritizující přesun ambasády USA…"
  },
  {
    "id": 995254378478145500,
    "created_at": "2018-05-12 10:48:29",
    "text": "Den otevřených dveří na Hradě u příležitosti zahájení letní turistické sezóny. https://t.co/22UbzsXZfu"
  },
  {
    "id": 995186522575065100,
    "created_at": "2018-05-12 06:18:51",
    "text": "RT @realDonaldTrump: Big week next week when the American Embassy in Israel will be moved to Jerusalem. Congratulations to all!"
  },
  {
    "id": 995020860523253800,
    "created_at": "2018-05-11 19:20:34",
    "text": "@JanPovysil Jen jste dokázal, že nepatříte do společnosti slušných lidí. A proto se Vámi nehodlám dále zabývat."
  },
  {
    "id": 995018246477828100,
    "created_at": "2018-05-11 19:10:11",
    "text": "@JanPovysil Jste špinavec. Miloše Zemana kvůli nesouhlasu s okupací ze strany vyhodili. A také ho ze stejného důvodu vyhodili práce."
  },
  {
    "id": 995015374478495700,
    "created_at": "2018-05-11 18:58:46",
    "text": "@jiridrahos1 “Morálka a politická kultura”: M. Štěch byl deset let členem Komunistické strany Československa a souh… https://t.co/QpEIq1KQFT"
  },
  {
    "id": 994995873179471900,
    "created_at": "2018-05-11 17:41:16",
    "text": "OBRAZEM: Zeman navštívil Bělověžský prales. Podpořil Polsko ve sporu s EU https://t.co/Ma7YqX9wgS"
  },
  {
    "id": 994989681908609000,
    "created_at": "2018-05-11 17:16:40",
    "text": "Krásný víkend, přátelé! https://t.co/MN8KoiOEOK"
  },
  {
    "id": 994961444633489400,
    "created_at": "2018-05-11 15:24:28",
    "text": "Poland, Czech leaders want more regional unity: https://t.co/Y76QTJJef0"
  },
  {
    "id": 994957995804151800,
    "created_at": "2018-05-11 15:10:46",
    "text": "Mirek Kalousek už zase rozdává své oblíbené polibky politické smrti. Dříve byl pro něj formát Bohuslav Sobotka. A v… https://t.co/FqZlJW36ft"
  },
  {
    "id": 994944728473972700,
    "created_at": "2018-05-11 14:18:03",
    "text": "Polsko, Bělověžský prales. Z návštěvy zubří rezervace. https://t.co/wdeqWgrG8d"
  },
  {
    "id": 994924646037368800,
    "created_at": "2018-05-11 12:58:15",
    "text": "Přečtěte si přepis rozhovoru pana prezidenta pro TV Barrandov! https://t.co/jcs1sPgTKv"
  },
  {
    "id": 994920543752196100,
    "created_at": "2018-05-11 12:41:57",
    "text": "Pan prezident se svojí paní zavítali do Bělověžského pralesa. https://t.co/70lynZ8g90"
  },
  {
    "id": 994907631625138200,
    "created_at": "2018-05-11 11:50:38",
    "text": "RT @CT24zive: Prezident Zeman na závěr návštěvy Polska navštívil Bělověžský prales. Polsko s ním podle české hlavy státu může naložit, jak…"
  },
  {
    "id": 994900350552477700,
    "created_at": "2018-05-11 11:21:42",
    "text": "Už jsme na cestě do srdce Bělověžského pralesa! https://t.co/B0PQviR1ym"
  },
  {
    "id": 994899445643989000,
    "created_at": "2018-05-11 11:18:06",
    "text": "Tak tohle je vážně míněný dotaz veřejnoprávního rozhlasu, který si všichni platíme. Odpornost, kterou musí každý sl… https://t.co/aUqYG4tjIF"
  },
  {
    "id": 994896300188500000,
    "created_at": "2018-05-11 11:05:36",
    "text": "RT @EmmigrantPanama: Komunisté vadí ve vládě, v Evropské komisi nikoliv. Úsměvné od Lidovců, kteří byli s KSČ 41 let v Národní frontě a tra…"
  },
  {
    "id": 994882163173744600,
    "created_at": "2018-05-11 10:09:26",
    "text": "Zítra na Hradě! Srdečně zveme veřejnost na zahájení letní turistické sezóny. Podrobnosti zde:… https://t.co/DkDQegUi5Y"
  },
  {
    "id": 994879583001497600,
    "created_at": "2018-05-11 09:59:11",
    "text": "Duka ocenil Zemana, řekl prý komunistům pravdu. Ale pak se nestačil divit, co z toho udělala média: https://t.co/YJw8tlzSFt"
  },
  {
    "id": 994877293301588000,
    "created_at": "2018-05-11 09:50:05",
    "text": "Z rozhodnutí pana prezidenta byly dnes otevřeny reprezentační prostory Hradu školákům. Čekáme jich několik tisíc! T… https://t.co/DxaqyxINxd"
  },
  {
    "id": 994873017472901100,
    "created_at": "2018-05-11 09:33:05",
    "text": "Pan prezident se svojí paní odletěli na návštěvu Bělověžského pralesa. Jednoznačný výraz solidarity s Polskem! https://t.co/1nLzjVywWL"
  },
  {
    "id": 994869204124827600,
    "created_at": "2018-05-11 09:17:56",
    "text": "RT @AndrejBabis: Hnutí ANO slaví šest let. A máme dort. Trochu větší 🤓 https://t.co/3p6cDVxP3c"
  },
  {
    "id": 994867757190668300,
    "created_at": "2018-05-11 09:12:11",
    "text": "RT @czeska_polityka: Polecieli do #PuszczaBialowieska https://t.co/tgANZrthF9"
  },
  {
    "id": 994865808743501800,
    "created_at": "2018-05-11 09:04:27",
    "text": "Odlétáme z Varšavy na návštěvu Bělověžského pralesa! https://t.co/N3TfJVuGgx"
  },
  {
    "id": 994854681645125600,
    "created_at": "2018-05-11 08:20:14",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 10. května 2018, 20:15, TV Barrandov: https://t.co/WVXezpJ7BZ"
  },
  {
    "id": 994853647975632900,
    "created_at": "2018-05-11 08:16:07",
    "text": "Ocenil jsem Vaši jasnou reakci na nepřijatelný článek k čs. dějinám, napsal pan prezident ruskému premiérovi: https://t.co/ts9wpCxOfW"
  },
  {
    "id": 994829748948947000,
    "created_at": "2018-05-11 06:41:09",
    "text": "RT @AmbMeron: Welcome to Jerusalem @usembassyjlm https://t.co/Ch0TOWmHAa"
  },
  {
    "id": 994672591817400300,
    "created_at": "2018-05-10 20:16:40",
    "text": "RT @Ostrov_A: ❗️ RT to show you stand with #Israel &amp; the Jewish state’s right to self-defense, following #Iran’s hostile, brazen &amp; dangerou…"
  },
  {
    "id": 994656433433083900,
    "created_at": "2018-05-10 19:12:28",
    "text": "@ZahradilJan Máte pravdu!"
  },
  {
    "id": 994643752403849200,
    "created_at": "2018-05-10 18:22:04",
    "text": "Český prezident ve Varšavě vyjádřil solidaritu Polsku, vadí mu 'pokus o rozvrat Visegrádu' https://t.co/xYpPhTrGCf"
  },
  {
    "id": 994643248902824000,
    "created_at": "2018-05-10 18:20:04",
    "text": "„Przyjaciele\" – napisał na Twitterze rzecznik Zemana Jiří Ovčáček https://t.co/1AWvm9enES"
  },
  {
    "id": 994642021565587500,
    "created_at": "2018-05-10 18:15:12",
    "text": "Zeman w Warszawie: powinniśmy tworzyć nierozdzielną jedność https://t.co/CQtHR5sO6f"
  },
  {
    "id": 994638277029318700,
    "created_at": "2018-05-10 18:00:19",
    "text": "RT @USEmbassyPrague: Zveme vás na veletrh @svetknihypraha, na kterém naše obchodní oddělení představuje americké vydavatele 📚 https://t.co/…"
  },
  {
    "id": 994611933876838400,
    "created_at": "2018-05-10 16:15:38",
    "text": "RT @prezydentpl: W ramach wizyty oficjalnej Prezydenta Republiki Czeskiej w Polsce Agata Kornhauser-Duda oraz Ivana Zemanová odwiedziły war…"
  },
  {
    "id": 994605928048742400,
    "created_at": "2018-05-10 15:51:46",
    "text": "Prezydent Czech z wizytą w Polsce. Jako pierwszy zagraniczny przywódca złożył kwiaty pod Pomnikiem Smoleńskim: https://t.co/SswQyclb9x"
  },
  {
    "id": 994594771367813100,
    "created_at": "2018-05-10 15:07:26",
    "text": "@Karel_IV62 Koukám, jak čile mikrosyntetizujete. Jelikož je pravda nepříjemná, tak se usneseme, že neexistuje, že?"
  },
  {
    "id": 994591921216671700,
    "created_at": "2018-05-10 14:56:07",
    "text": "Varšava. Pan prezident se setkal s maršálkem Sejmu a s maršálkem Senátu. https://t.co/R04aqBaoMl"
  },
  {
    "id": 994591008414425100,
    "created_at": "2018-05-10 14:52:29",
    "text": "@Karel_IV62 Krásná ukázka ptydepe!"
  },
  {
    "id": 994587534008217600,
    "created_at": "2018-05-10 14:38:41",
    "text": "RT @realDonaldTrump: Five Most Wanted leaders of ISIS just captured!"
  },
  {
    "id": 994577674285797400,
    "created_at": "2018-05-10 13:59:30",
    "text": "@JanPovysil Zákon č. 19 z roku 1997 Sb. označuje za výrobu každou chemickou reakci."
  },
  {
    "id": 994575322485022700,
    "created_at": "2018-05-10 13:50:09",
    "text": "Novičok? Ten zkoumáme, má na webu česká univerzita. Podívejte se sami: https://t.co/BR9Qwb9SYL"
  },
  {
    "id": 994570978205331500,
    "created_at": "2018-05-10 13:32:54",
    "text": "RT @czeska_polityka: Prezydent Zeman złożył kwiaty na Grobie Nieznanego Żołnierza i przed Pomnikiem Ofiar Tragedii Smoleńskiej 2010 roku \n#…"
  },
  {
    "id": 994567300220182500,
    "created_at": "2018-05-10 13:18:17",
    "text": "Varšava. Pan prezident se setkal s polským premiérem Mateuszem Morawieckim. https://t.co/AMZGxbuG4c"
  },
  {
    "id": 994563706431340500,
    "created_at": "2018-05-10 13:04:00",
    "text": "Varšava. Pan prezident uctil památku obětí smolenské tragédie. https://t.co/Z39FjRETwT"
  },
  {
    "id": 994563009807872000,
    "created_at": "2018-05-10 13:01:14",
    "text": "Varšava. Pan prezident se zúčastnil pietního aktu u hrobu Neznámého vojína. https://t.co/04GVmAWFhQ"
  },
  {
    "id": 994556269796216800,
    "created_at": "2018-05-10 12:34:27",
    "text": "9. května jsem byl hostem Zátiší na Rádiu 1. Poslechněte si záznam https://t.co/6xPdTYs1PQ"
  },
  {
    "id": 994555211917287400,
    "created_at": "2018-05-10 12:30:15",
    "text": "RT @prezydentpl: 🇵🇱🇨🇿 - Zgadzamy się, że potrzebna nam jest jak największa spójność w ramach Grupy Wyszehradzkiej - mówił #PAD podczas konf…"
  },
  {
    "id": 994555118015172600,
    "created_at": "2018-05-10 12:29:52",
    "text": "RT @prezydentpl: 🇵🇱🇨🇿 Andrzej Duda i Agata Kornhauser-Duda powitali na dziedzińcu Pałacu Prezydenckiego Prezydenta Czech i jego Małżonkę.…"
  },
  {
    "id": 994554687016841200,
    "created_at": "2018-05-10 12:28:09",
    "text": "Zeman podpořil Polsko ve sporu o Bělověžský prales: Každá země má právo nakládat se svými zdroji https://t.co/8d5zpIrpVl"
  },
  {
    "id": 994548417086050300,
    "created_at": "2018-05-10 12:03:15",
    "text": "@VaclavMuller Zákon č. 19 z roku 1997 Sb. označuje za výrobu každou chemickou reakci."
  },
  {
    "id": 994541543754227700,
    "created_at": "2018-05-10 11:35:56",
    "text": "Polsko, ČR, Maďarsko a Slovensko měly tvořit uvnitř EU jakousi nedělitelnou jednotku, uvedl pan prezident: https://t.co/HxugTHf5ve"
  },
  {
    "id": 994541142627758100,
    "created_at": "2018-05-10 11:34:20",
    "text": "@VaclavMuller Kuk: https://t.co/aHMpcNhOuM"
  },
  {
    "id": 994538176676024300,
    "created_at": "2018-05-10 11:22:33",
    "text": "Pan prezident vystoupí ve čtvrtek dne 10. května 2018 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 994523969838571500,
    "created_at": "2018-05-10 10:26:06",
    "text": "RT @CUTIzpravy: Absurdita jak vystřižená z her Václava Havla. Výbor se usnesl, že dnes není čtvrtek, ale středa. https://t.co/2vaSwaP0rG"
  },
  {
    "id": 994522486216839200,
    "created_at": "2018-05-10 10:20:12",
    "text": "Prezydent Czech Milosz Zeman rozpoczął wizytę w Warszawie: https://t.co/wzWFSKLvRL"
  },
  {
    "id": 994517655808864300,
    "created_at": "2018-05-10 10:01:01",
    "text": "Dárek od českého prezidenta. České hodinky originální a tradiční značky PRIM! https://t.co/L7UX2xBziX"
  },
  {
    "id": 994514846413676500,
    "created_at": "2018-05-10 09:49:51",
    "text": "RT @IsraelinCZ: Izrael je čestným hostem: SVĚT KNIHY 2018 ZAHÁJEN!\nPřijďte na Výstaviště, jsme tu až do neděle! Atmosféra je úžasná, užívám…"
  },
  {
    "id": 994513170269171700,
    "created_at": "2018-05-10 09:43:11",
    "text": "Varšava, Prezidentský palác. Polský prezident Andrzej Duda s manželkou slavnostně přivítali pana prezidenta a jeho… https://t.co/yB4xLSlBd0"
  },
  {
    "id": 994501573630971900,
    "created_at": "2018-05-10 08:57:06",
    "text": "Varšava. Za chvíli proběhne oficiální přivítání pana prezidenta. https://t.co/KTj6gV6Hb8"
  },
  {
    "id": 994498605158461400,
    "created_at": "2018-05-10 08:45:19",
    "text": "„Czwartkowa wizyta Miloša Zemana w Warszawie wyrazem znakomitych relacji między Polską a Czechami” https://t.co/npTTZQBLcC"
  },
  {
    "id": 994488757440180200,
    "created_at": "2018-05-10 08:06:11",
    "text": "RT @czeska_polityka: Prezydent Zeman od wczoraj jest w Warszawie. Poniżej zdjęcia z wczorajszej kolacji u prezydenta Dudy.\n#Czechy https://…"
  },
  {
    "id": 994346236621803500,
    "created_at": "2018-05-09 22:39:51",
    "text": "RT @realDonaldTrump: The Failing New York Times criticized Secretary of State Pompeo for being AWOL (missing), when in fact he was flying t…"
  },
  {
    "id": 994283477989318700,
    "created_at": "2018-05-09 18:30:28",
    "text": "Přátelství. https://t.co/2uZu7noH7m"
  },
  {
    "id": 994280830112600000,
    "created_at": "2018-05-09 18:19:57",
    "text": "RT @CUTIzpravy: Věřím, že se demokraté jasně ohradí proti projevům novodobého českého fašismu, které vyhřezly v době, kdy vzpomínáme na osv…"
  },
  {
    "id": 994278538789433300,
    "created_at": "2018-05-09 18:10:51",
    "text": "RT @CUTIzpravy: Extremisté dnes v centru Prahy šířili nenávist. Odporné. Novodobí Vlajkaři. https://t.co/N2OWQNIYLu"
  },
  {
    "id": 994274956627279900,
    "created_at": "2018-05-09 17:56:37",
    "text": "@david_pelc Teď už se jen vymlouváte za hrubou chybu. Tohle jste opravdu přehnal. A fest."
  },
  {
    "id": 994273676467081200,
    "created_at": "2018-05-09 17:51:31",
    "text": "@david_pelc Hrubě se mi nelíbí, jakým způsobem na izraelské prohlášení útočíte. Jen kvůli volbě jazyka. To je tak nízké!"
  },
  {
    "id": 994269526685618200,
    "created_at": "2018-05-09 17:35:02",
    "text": "@david_pelc Vám se izraelské prohlášení nelíbí? Proč?"
  },
  {
    "id": 994267454389063700,
    "created_at": "2018-05-09 17:26:48",
    "text": "RT @IsraeliPM: PM Netanyahu: I have just finished almost ten hours in the company of President Putin. We attended very moving events – the…"
  },
  {
    "id": 994265286353326100,
    "created_at": "2018-05-09 17:18:11",
    "text": "Varšava. Pan prezident se svojí paní zavítali na přátelskou večeři pořádanou na jejich počest polským prezidentem a… https://t.co/gvvs6q8URx"
  },
  {
    "id": 994257767950176300,
    "created_at": "2018-05-09 16:48:18",
    "text": "RT @SlechtovaKarla: Výstava Doteky státnosti v Jízdárně Pražského hradu mapuje důležité okamžiky naší novodobé historie. Přináší řadu uniká…"
  },
  {
    "id": 994238643647762400,
    "created_at": "2018-05-09 15:32:19",
    "text": "Přivítání po příletu do Varšavy. https://t.co/3eL1qWrPl2"
  },
  {
    "id": 994237530454286300,
    "created_at": "2018-05-09 15:27:53",
    "text": "Přečtěte si projev, který pan prezident pronesl u příležitosti státního svátku Ruské federace - Dne vítězství! https://t.co/XIPGJJUvYP"
  },
  {
    "id": 994230480915648500,
    "created_at": "2018-05-09 14:59:53",
    "text": "RT @IsraeliPM: Prime Minister Benjamin Netanyahu and Russian President Vladimir Putin are currently meeting at the Kremlin in Moscow. \n\nhtt…"
  },
  {
    "id": 994214181778927600,
    "created_at": "2018-05-09 13:55:07",
    "text": "Odlétáme na oficiální návštěvu Polska. Těšíme se na naše přátele! Program zde: https://t.co/l708dG5FNq https://t.co/VowYTRnXW9"
  },
  {
    "id": 994212858455117800,
    "created_at": "2018-05-09 13:49:51",
    "text": "RT @CUTIzpravy: Slušní lidé uctili památku všech osvoboditelů naší vlasti. Politický taliban ukázal pokusy přepisovat historii odpuzující t…"
  },
  {
    "id": 994206195798986800,
    "created_at": "2018-05-09 13:23:23",
    "text": "RT @NickArcherFCO: We remember because all kinds of madness can recur if we don't. https://t.co/UxAfluKsa6"
  },
  {
    "id": 994189309946318800,
    "created_at": "2018-05-09 12:16:17",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte ve čtvrtek 10. května 2018 ve 20:15 na TV Barrando… https://t.co/S035u18MYW"
  },
  {
    "id": 994177111010283500,
    "created_at": "2018-05-09 11:27:48",
    "text": "RT @netanyahu: הכיכר האדומה במוסקבה, יום הניצחון על גרמניה הנאצית, המנון ״התקווה״: https://t.co/T6GgWCJoUK"
  },
  {
    "id": 994173831647580200,
    "created_at": "2018-05-09 11:14:46",
    "text": "Pan prezident dnes na velvyslanectví Ruské federace pronesl projev u příležitosti státního svátku Ruské federace -… https://t.co/KR8FrhPqtZ"
  },
  {
    "id": 994172683444260900,
    "created_at": "2018-05-09 11:10:13",
    "text": "Projev prezidenta republiky u příležitosti státního svátku Ruské federace - Dne vítězství: https://t.co/nqjBQOii3T"
  },
  {
    "id": 994167397237055500,
    "created_at": "2018-05-09 10:49:12",
    "text": "@PaliceJiri Kuk. To je prohlášení MZV Izraele."
  },
  {
    "id": 994165004202074100,
    "created_at": "2018-05-09 10:39:42",
    "text": "RT @IsraeliPM: The leaders are currently attending a Victory Day reception at the Kremlin with the participation of dozens of veterans. htt…"
  },
  {
    "id": 994164988448256000,
    "created_at": "2018-05-09 10:39:38",
    "text": "RT @IsraeliPM: The leaders attended a wreath-laying ceremony for the unknown soldier at the memorial for Red Army soldiers who fell in WW I…"
  },
  {
    "id": 994164868986097700,
    "created_at": "2018-05-09 10:39:10",
    "text": "RT @IsraeliPM: Prime Minister Benjamin Netanyahu, along with Russian President Vladimir Putin and Serb President Aleksandar Vucic, attended…"
  },
  {
    "id": 994163784829857800,
    "created_at": "2018-05-09 10:34:51",
    "text": "@VojtechGibis @Poddy6 Lidé, kteří kritizují nějaké prohlášení nikoliv kvůli obsahu, ale kvůli jazyku, se mi prostě hnusí."
  },
  {
    "id": 994162436256272400,
    "created_at": "2018-05-09 10:29:30",
    "text": "@Poddy6 Místní primitivové se jali útočit na prohlášení ministerstva zahraničních věcí Izraele. Jak typické!"
  },
  {
    "id": 994159397411741700,
    "created_at": "2018-05-09 10:17:25",
    "text": "Мы будем и далее противостоять любым попыткам извратить историю Второй мировой войны: https://t.co/BEpEuuPvI0"
  },
  {
    "id": 994153477113827300,
    "created_at": "2018-05-09 09:53:54",
    "text": "RT @netanyahu: נרגש להשתתף כאורח הכבוד של הנשיא ולדימיר פוטין במצעד הניצחון על גרמניה הנאצית, היום במוסקבה. מצדיע מכאן לווטרנים הגיבורים של…"
  },
  {
    "id": 994148577311117300,
    "created_at": "2018-05-09 09:34:25",
    "text": "RT @USEmbassyPrague: Na Mlýnské kolonádě v Karlových Varech stojí od soboty písková socha T. G. Masaryka připomínající 100 let od vzniku Če…"
  },
  {
    "id": 994117327292596200,
    "created_at": "2018-05-09 07:30:15",
    "text": "@NadeVse Kádrovat Seiferta? Taková ubohost!"
  },
  {
    "id": 994116615536087000,
    "created_at": "2018-05-09 07:27:25",
    "text": "Jsem plně připraven na návštěvu u našich polských přátel! Manžetové knoflíčky od polského prezidenta Andrzeje Dudy. https://t.co/3DRLcZBI0G"
  },
  {
    "id": 994094606924042200,
    "created_at": "2018-05-09 05:59:58",
    "text": "Pan prezident dnes zahájí oficiální návštěvu Polska, kde mj. uctí památku obětí smolenské tragédie. Program zde: https://t.co/l708dG5FNq"
  },
  {
    "id": 994090661384261600,
    "created_at": "2018-05-09 05:44:17",
    "text": "Český národ by v případě vítězství nacistů čekala likvidace. Proto dnes s úctou poděkujme rudoarmějcům za osvobozen… https://t.co/VomtqiJTSR"
  },
  {
    "id": 994089490602917900,
    "created_at": "2018-05-09 05:39:38",
    "text": "Děsivý vyplod, který nejlépe vystihuje diskusní příspěvek: Trochu to připomíná žádost vstupu do NSDAP https://t.co/WLpg3nQZ0m"
  },
  {
    "id": 994081477766893600,
    "created_at": "2018-05-09 05:07:48",
    "text": "RT @IsraeliPM: PM: \"I am now leaving for an important meeting with Russian President Putin. Our meetings are always important and this one…"
  },
  {
    "id": 993967584079962100,
    "created_at": "2018-05-08 21:35:13",
    "text": "Dokonce se zdá, že mír je kdekomu proti mysli, že některým lidem válka chybí: https://t.co/QzaVZc94V9"
  },
  {
    "id": 993940181060288500,
    "created_at": "2018-05-08 19:46:20",
    "text": "Jaroslav Seifert, z básně Květnové noci (1945): https://t.co/dsXkPqdhXK"
  },
  {
    "id": 993935761371271200,
    "created_at": "2018-05-08 19:28:46",
    "text": "Vandalové, kteří zneuctili pomník maršála Koněva, se titulují Čeští vlastenci. Vzor E. Moravec a jeho termín “pořádný český vlastenec”."
  },
  {
    "id": 993931355405897700,
    "created_at": "2018-05-08 19:11:16",
    "text": "RT @CUTIzpravy: Všimněte si, jak “levicoví liberálové” v těchto dnech rehabilitovali Marxe. A ještě nás poučují. Ti samí straší KSČM a dezi…"
  },
  {
    "id": 993927162196611100,
    "created_at": "2018-05-08 18:54:36",
    "text": "RT @CzechEmbassyDC: #OTD 73yrs ago WWII ended in Europe. Today we commemorate together with our allies all the brave men and women who foug…"
  },
  {
    "id": 993906870212612100,
    "created_at": "2018-05-08 17:33:58",
    "text": "Momentka ze svátečního a prosluněného pražského Vítkova. Jsem rád, že jsem byl přítomen uctění památky hrdinů! https://t.co/yKYa9rrwcw"
  },
  {
    "id": 993887875539271700,
    "created_at": "2018-05-08 16:18:29",
    "text": "@petr_vesely7 Nedouk jste Vy. V Praze se 7.-8.5.1945 zastavila průzkumná squadrona US Army při cestě do Lázní Velic… https://t.co/3Uv0k7X1TW"
  },
  {
    "id": 993884991439466500,
    "created_at": "2018-05-08 16:07:02",
    "text": "Dnes si připomínáme 73. výročí konce druhé světové války: Prohlédněte si dojemné fotografie z osvobození https://t.co/Hj2jquaaGc"
  },
  {
    "id": 993884201463287800,
    "created_at": "2018-05-08 16:03:53",
    "text": "RT @ObranaTweetuje: Za účasti ministryně obrany Karly Šlechtové dnes prezident republiky Miloš Zeman jmenoval nové generály z řad Armády ČR…"
  },
  {
    "id": 993848013314576400,
    "created_at": "2018-05-08 13:40:05",
    "text": "Prezident republiky Miloš Zeman přijal v úterý dne 8. května 2018 na Pražském hradě na jeho žádost předsedu vlády Andreje Babiše."
  },
  {
    "id": 993837526711402500,
    "created_at": "2018-05-08 12:58:25",
    "text": "Projev prezidenta republiky při jmenování nových generálů: https://t.co/QrMZ17Ayty"
  },
  {
    "id": 993837283114614800,
    "created_at": "2018-05-08 12:57:27",
    "text": "Pan prezident dnes na Hradě u příležitosti státního svátku Dne vítězství jmenoval tyto nové generály:… https://t.co/hYRePtFl1p"
  },
  {
    "id": 993834609539469300,
    "created_at": "2018-05-08 12:46:50",
    "text": "Paní Ivana Zemanová na Hradě při přípravě výstavy Doteky státnosti instalovala čelenku operní divy E. Destinnové. V… https://t.co/Z5j8M65hLN"
  },
  {
    "id": 993800697337581600,
    "created_at": "2018-05-08 10:32:04",
    "text": "Nikdy nesmíme zapomenout! https://t.co/qtubNNXBqM"
  },
  {
    "id": 993798464092934100,
    "created_at": "2018-05-08 10:23:12",
    "text": "RT @CUTIzpravy: Emanuel Moravec by měl ze svých myšlenkových dědiců radost. https://t.co/K3sumuzcMm"
  },
  {
    "id": 993797631146168300,
    "created_at": "2018-05-08 10:19:53",
    "text": "RT @MasarovicRobert: Touto dobou, v roce 1945 probíhaly boje o osvobození Československa. Padlo 140.000 sovětských, 66.500 rumunských 1.300…"
  },
  {
    "id": 993794266177654800,
    "created_at": "2018-05-08 10:06:31",
    "text": "Pan prezident se zítra od 12:30 zúčastní recepce u příležitosti státního svátku Ruské federace – Dne vítězství: https://t.co/fgbFO3D790"
  },
  {
    "id": 993789816943898600,
    "created_at": "2018-05-08 09:48:50",
    "text": "Praha. 73. výročí Dne vítězství. Pan prezident vzpomněl na skutečné hrdiny. Važme si jejich odkazu a nepřipusťme př… https://t.co/QLbk0tVmbf"
  },
  {
    "id": 993745652822798300,
    "created_at": "2018-05-08 06:53:21",
    "text": "Připomínáme si Den vítězství. Vzpomeňme s úctou na všechny hrdiny, kteří bojovali a umírali za naši svobodu. https://t.co/p4eK4ESjEE"
  },
  {
    "id": 993550079565975600,
    "created_at": "2018-05-07 17:56:12",
    "text": "RT @WhiteHouse: JUST RELEASED: Presidential Delegation for the opening of the United States Embassy in Jerusalem, Israel to include Deputy…"
  },
  {
    "id": 993528933726466000,
    "created_at": "2018-05-07 16:32:11",
    "text": "Manželka prezidenta republiky se zúčastní zahájení výstavy Doteky státnosti: https://t.co/Ssy9rDZiWp"
  },
  {
    "id": 993511389410005000,
    "created_at": "2018-05-07 15:22:28",
    "text": "Ovčáček ke sporu o novičok: Bavíme se pouze o terminologii https://t.co/w5xc43TNhW"
  },
  {
    "id": 993494646109196300,
    "created_at": "2018-05-07 14:15:56",
    "text": "@VojtechGibis Komik a jeho svět."
  },
  {
    "id": 993492406648606700,
    "created_at": "2018-05-07 14:07:02",
    "text": "RT @CUTIzpravy: Musíme začít bojovat s tzv. politickými šmejdy, kteří každého jinak smýšlejícího lživě osočují z příklonu k Rusku a ničí ta…"
  },
  {
    "id": 993490776188444700,
    "created_at": "2018-05-07 14:00:33",
    "text": "KOMENTÁŘ: Sucho jako v roce 1947? - Václav Klaus ml. https://t.co/MQ5G25mi2M"
  },
  {
    "id": 993490573628727300,
    "created_at": "2018-05-07 13:59:45",
    "text": "Na názorném příkladu si ukážeme rozdíl mezi vznikem a výrobou: https://t.co/gicr3E1yeu"
  },
  {
    "id": 993473516069621800,
    "created_at": "2018-05-07 12:51:58",
    "text": "RT @USAmbPrague: It was an honor to spend a day with American and Belgian veterans who liberated Pilsen 73 years ago. They are real heroes.…"
  },
  {
    "id": 993466094596886500,
    "created_at": "2018-05-07 12:22:29",
    "text": "@anselmoCZ Profesionální příslušník tajných služeb “nezvoní” novinářům. Naše služby jsou profesionální. Proto to ne… https://t.co/Zz1QIKf4eE"
  },
  {
    "id": 993463228087840800,
    "created_at": "2018-05-07 12:11:05",
    "text": "Připomeňme si slova pana prezidenta! Novináři a Mirek Kalousek naučit zpaměti! https://t.co/Y9jg375sDi"
  },
  {
    "id": 993461594955878400,
    "created_at": "2018-05-07 12:04:36",
    "text": "@VojtechGibis Kuk, výzkumníku: https://t.co/aHMpcNhOuM"
  },
  {
    "id": 993459515298377700,
    "created_at": "2018-05-07 11:56:20",
    "text": "RT @miroslavadamekx: LHÁT OBČANŮM ČESKÉ REPUBLIKY NENÍ A NEBUDE POLITIKOU ČESKÉHO PREZIDENTA MILOŠE ZEMANA !\nJ.Ovcacek @CUTIzpravy právě te…"
  },
  {
    "id": 993455606924275700,
    "created_at": "2018-05-07 11:40:48",
    "text": "Pravda vítězí! https://t.co/HHk1V5ppUZ"
  },
  {
    "id": 993453880557137900,
    "created_at": "2018-05-07 11:33:57",
    "text": "@jindrichsidlo Jindřichu, dnešek je skvělej! Mám náhradní volno a do ČT24 vyprávím během výletu. Je nádherně!"
  },
  {
    "id": 993445329818316800,
    "created_at": "2018-05-07 10:59:58",
    "text": "Současná mediální debata o novičoku A230 začíná připomínat středověkou při na téma “kolik andělů se vejde na špičku jehly”. Zpátky na zem!"
  },
  {
    "id": 993443248982122500,
    "created_at": "2018-05-07 10:51:42",
    "text": "Prohlášení, které není v rozporu se slovy pana prezidenta. Nemáme se za co stydět. Naše protichemická jednotka a vý… https://t.co/jst4u0RSy5"
  },
  {
    "id": 993426520449388500,
    "created_at": "2018-05-07 09:45:14",
    "text": "Nad kauzou OKD se v žádném případě nesmí zavřít voda! Jde o závažné celospolečenské trauma. Skuteční viníci musí být potrestáni."
  },
  {
    "id": 993418651083698200,
    "created_at": "2018-05-07 09:13:57",
    "text": "Žádní takoví zástupci bezpečnostních složek neexistují. Týdeník Respekt si prostě vymýšlí! https://t.co/GP0cuYq7ZG"
  },
  {
    "id": 993416775906877400,
    "created_at": "2018-05-07 09:06:30",
    "text": "Ovčáček se rve za Zemana: Jste politické zdechliny. Chcete, aby prezident lhal? Pak to schytala ČT, Kalousek, Drahoš https://t.co/Phuv6h6xxo"
  },
  {
    "id": 993392574789451800,
    "created_at": "2018-05-07 07:30:20",
    "text": "Pan prezident se v úterý 8. 5. 2018 zúčastní oslav státního svátku ČR - 73. výročí Dne vítězství. Podrobnosti zde: https://t.co/RoQXU56Rh5"
  },
  {
    "id": 993371105950883800,
    "created_at": "2018-05-07 06:05:02",
    "text": "RT @JiriSmetana3: Ctvrta hodina čekání na letišti ve Filadelfii a CNN jede -Trump ztrácí důvěru,měl by být odvolán,paktuje se s Rusy,lhal o…"
  },
  {
    "id": 993228014459740200,
    "created_at": "2018-05-06 20:36:26",
    "text": "@jindrichsidlo Velký politický komentátor Jindřich Šídlo skončil...jako obecní komik na Twitteru. Svět se mu zmenši… https://t.co/rWfdnjMOtK"
  },
  {
    "id": 993207198321905700,
    "created_at": "2018-05-06 19:13:43",
    "text": "Odporný ideologický žvást ve stylu 50. let, před kterým si musí každý slušný člověk odplivnout: https://t.co/IUqdBFbXYi"
  },
  {
    "id": 992825020991885300,
    "created_at": "2018-05-05 17:55:05",
    "text": "RT @IsraeliPM: Prime Minister Netanyahu will meet Russian President Vladimir Putin on Wednesday in Moscow, to discuss regional developments…"
  },
  {
    "id": 992804690403516400,
    "created_at": "2018-05-05 16:34:18",
    "text": "Chemici v akci. Mirek a Jiří zkoumají neznámou látku. Je to novičok? Není to novičok? https://t.co/5QdYpihVSE"
  },
  {
    "id": 992802916712017900,
    "created_at": "2018-05-05 16:27:15",
    "text": "RT @PavelRyska: Kauza Marx &amp; Juncker je přesnou ukázkou rostoucího nepochopení Západ vs. Východ. U nás už nikdo není na Marxovy bludy zvěda…"
  },
  {
    "id": 992778839855194100,
    "created_at": "2018-05-05 14:51:35",
    "text": "@tapolitikaCZ Tady taky jedna ukázka demokracie! https://t.co/HHHTsNCQHD"
  },
  {
    "id": 992765461560426500,
    "created_at": "2018-05-05 13:58:25",
    "text": "RT @AmbMeron: בראיון לסוכנות הידיעות הצ׳כית, בעקבות דברי נשיא צ׳כיה, קראתי לבצע מהלך מהיר של העברת כל השגרירות הצ׳כית לירושלים https://t.co…"
  },
  {
    "id": 992726295661424600,
    "created_at": "2018-05-05 11:22:47",
    "text": "Na chvíli se mrkneme do světa opravdového umění: https://t.co/VdWhLaGgzX"
  },
  {
    "id": 992709932309938200,
    "created_at": "2018-05-05 10:17:46",
    "text": "To bude jistojistě na výbornou! https://t.co/ALBti66kY2"
  },
  {
    "id": 992708452190490600,
    "created_at": "2018-05-05 10:11:53",
    "text": "Dlouholetý člen normalizační KSČ schvalující okupaci v roce 1968 Štěch opět ideologicky kádruje prezidenta republiky. Neuvěřitelná drzost!"
  },
  {
    "id": 992686900812091400,
    "created_at": "2018-05-05 08:46:15",
    "text": "Kult ideové lži a ideologického vidění světa vždy vede na slepou kolej totality. https://t.co/SmHCMBZqYe"
  },
  {
    "id": 992684485509550100,
    "created_at": "2018-05-05 08:36:39",
    "text": "Náhodička! Vojenské zpravodajství dodá profesionální zprávu o kauze novičok. A hned tu máme mediální “natíračku”: https://t.co/1cCH827Xe0"
  },
  {
    "id": 992671370617253900,
    "created_at": "2018-05-05 07:44:32",
    "text": "EU křepčením oslavuje Karla Marxe a skuteční dědici normalizační KSČ v hávu pravdolásky žádají, aby prezident lhal občanům. Drsná realita."
  },
  {
    "id": 992668122028101600,
    "created_at": "2018-05-05 07:31:37",
    "text": "RT @Narlen11: 📖5.5.1948 uzavřena tajná dohoda mezi ČSR a sionistickým hnutím o výcviku leteckých specialistů (cca 200 osob). Pilotní kurzy…"
  },
  {
    "id": 992652406344355800,
    "created_at": "2018-05-05 06:29:10",
    "text": "Trapná provokace neziskovkářek. Jedna z nich nedávno radostně podporovala válku v Sýrii. Ostře jsem se ohradil. https://t.co/oNyJpyuAcB"
  },
  {
    "id": 992468880286154800,
    "created_at": "2018-05-04 18:19:54",
    "text": "RT @lumidek: @Jan_Skopecek Přibližný výtah Junckerovy mše za Marxe: https://t.co/UCd9ib6BES \"Marx nenese vinu za žádné chyby. Demokrati moh…"
  },
  {
    "id": 992468109935210500,
    "created_at": "2018-05-04 18:16:51",
    "text": "Populární a všeobecně oblíbený Mirek Kalousek již brzy otevře v Poslanecké sněmovně “Chemické okénko TOP 09”. https://t.co/w0J3cpF7DB"
  },
  {
    "id": 992467170050412500,
    "created_at": "2018-05-04 18:13:07",
    "text": "RT @rudolf_jindrak: A do toho všeho se pan prezident příští týden zúčastní ruské recepce... Bude to jistě další důkaz, že kope za Kreml. Sc…"
  },
  {
    "id": 992437021519081500,
    "created_at": "2018-05-04 16:13:19",
    "text": "RT @Jan_Skopecek: Dnešní Západ oslavuje duchovního otce hnutí a ideologie, která znamenala tragédii pro velkou část světa (včetně té naší).…"
  },
  {
    "id": 992436344809979900,
    "created_at": "2018-05-04 16:10:37",
    "text": "Shrnutí dne: 1) Část politiků už neskrývá, že považuje za běžné lhát. 2) Část médií už neskrývá, že má za úkol adorovat lži části politiků."
  },
  {
    "id": 992411517361492000,
    "created_at": "2018-05-04 14:31:58",
    "text": "Tereza Spencerová:...dokud všichni lhali, bylo všechno v pořádku, jakmile se řekne pravda, je oheň na střeše... žijeme v bizarních časech..."
  },
  {
    "id": 992410671131299800,
    "created_at": "2018-05-04 14:28:36",
    "text": "Na tohle přispíváme koncesionářskými poplatky. Na ideovou redaktorku ČST Praha. Hloupé urážky, to je jejich styl. https://t.co/HWApUwKmC2"
  },
  {
    "id": 992393393757093900,
    "created_at": "2018-05-04 13:19:57",
    "text": "Přečtěte si přepis rozhovoru pana prezidenta pro TV Barrandov: https://t.co/vKk5kbNuiT"
  },
  {
    "id": 992390245302841300,
    "created_at": "2018-05-04 13:07:26",
    "text": "RT @USEmbassyPrague: Zveme vás do Plzně na Slavnosti svobody! Dnes večer zahraje na náměstí Republiky nejlepší americký big band všech dob…"
  },
  {
    "id": 992362220809056300,
    "created_at": "2018-05-04 11:16:05",
    "text": "Moskva a čeští politici vyzývající prezidenta republiky ke lhaní si mohou podat ruce. Společně se pokouší manipulovat s veřejností."
  },
  {
    "id": 992359588384165900,
    "created_at": "2018-05-04 11:05:37",
    "text": "Jak za časů normalizační KSČ. Pravda je nežádoucí. Důležitý je správný ideový postoj."
  },
  {
    "id": 992356330643099600,
    "created_at": "2018-05-04 10:52:40",
    "text": "Látky typu novičok se v ČR testovaly, uvedlo ministerstvo obrany: https://t.co/qEHwnwWNA7"
  },
  {
    "id": 992352968983875600,
    "created_at": "2018-05-04 10:39:19",
    "text": "RT @ObranaTweetuje: Identifikace a obrana proti otravným chemickým látkám jako #Novičok je součástí výcviku českých vojenských protichemick…"
  },
  {
    "id": 992352627307540500,
    "created_at": "2018-05-04 10:37:58",
    "text": "29 let po událostech roku 1989 vyzývají politici pravdy a lásky prezidenta republiky, aby lhal občanům!"
  },
  {
    "id": 992346673182662700,
    "created_at": "2018-05-04 10:14:18",
    "text": "Vyjádření Ministerstva obrany k identifikaci bojových otravných látek: \nhttps://t.co/TM1k3hm6yK"
  },
  {
    "id": 992344849037873200,
    "created_at": "2018-05-04 10:07:03",
    "text": "Principiální stanovisko prezidenta republiky jako ostrý kontrast k ideologickým výkřikům. TV Barrandov, 3. května 2… https://t.co/mpH5Oeuo5b"
  },
  {
    "id": 992340856886779900,
    "created_at": "2018-05-04 09:51:11",
    "text": "U.S. freezes funding for Syria's \"White Helmets\" https://t.co/hbc8wUgNJC"
  },
  {
    "id": 992339387521421300,
    "created_at": "2018-05-04 09:45:21",
    "text": "Je pokrytectví předstírat, že nic takového nebylo, prognosticky reagoval pan prezident v TV Barrandov na strážce ideologické čistoty."
  },
  {
    "id": 992309873017700400,
    "created_at": "2018-05-04 07:48:04",
    "text": "RT @neviditelnypes: Boj proti dezinformacím. Potlačování „nenávistných projevů“ už Bruselu nestačí, přichází s další metlou na nepohodlné n…"
  },
  {
    "id": 992289885057830900,
    "created_at": "2018-05-04 06:28:39",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 3. května 2018, 20:15, TV Barrandov: https://t.co/moelWRBThW"
  },
  {
    "id": 992073321494786000,
    "created_at": "2018-05-03 16:08:06",
    "text": "RT @TBarrandov: Prezident České republiky Miloš Zeman dnes exkluzivně v rozhovoru s Jaromírem Soukupem poskytne nové informace ke kauze dvo…"
  },
  {
    "id": 992051440003711000,
    "created_at": "2018-05-03 14:41:09",
    "text": "VÍME PRVNÍ Prezident Zeman se zúčastní akce na ruské ambasádě https://t.co/q61Lkmqc2u"
  },
  {
    "id": 992028839713951700,
    "created_at": "2018-05-03 13:11:21",
    "text": "Pan prezident dnes na Hradě přijal na jejich žádost předsedu vyšetřovací komise PS k OKD L. Černohorského a člena této komise J. Hájka."
  },
  {
    "id": 991974347395993600,
    "created_at": "2018-05-03 09:34:49",
    "text": "BREAKING NEWS: V pořadu “Týden s prezidentem” vysílaném dnes od 20:15 na TV Barrandov se pan prezident vyjádří ke kauze novičok."
  },
  {
    "id": 991970312882356200,
    "created_at": "2018-05-03 09:18:47",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/t5r3JHYB6i"
  },
  {
    "id": 991969665323806700,
    "created_at": "2018-05-03 09:16:12",
    "text": "RT @tomasjirsa: Všichni protestují proti KSČM ve vládě, to je tak neevropské, bude ostuda, ale ti samí lidé mlčí, když jede předseda Evrops…"
  },
  {
    "id": 991953017548230700,
    "created_at": "2018-05-03 08:10:03",
    "text": "RT @CUTIzpravy: GDPR, nejnovější vynález Bruselu, už přináší své jedovaté plody papírování.\n\nMusím vyplňovat zcela nesmyslný dotazník."
  },
  {
    "id": 991944628688572400,
    "created_at": "2018-05-03 07:36:43",
    "text": "Pan prezident obdržel dopis od francouzského prezidenta. “Vaše podpora a solidarita v tomto boji je velmi cenná”: https://t.co/LKy36m2VAF"
  },
  {
    "id": 991702377685291000,
    "created_at": "2018-05-02 15:34:06",
    "text": "Pan prezident se svojí paní uskuteční ve dnech 9. – 11. května 2018 oficiální návštěvu Polské republiky: https://t.co/l708dG5FNq"
  },
  {
    "id": 991695374501974000,
    "created_at": "2018-05-02 15:06:16",
    "text": "Pan prezident dnes přijal na Pražském hradě na jeho žádost prezidenta Nejvyššího kontrolního úřadu Miloslava Kalu."
  },
  {
    "id": 991679173193355300,
    "created_at": "2018-05-02 14:01:54",
    "text": "RT @CUTIzpravy: Už chybí jen oprášit trestný čin hanobení státu světové socialistické soustavy, § 104 trestního zák. č. 140/1961 Sb. https:…"
  },
  {
    "id": 991676310916423700,
    "created_at": "2018-05-02 13:50:31",
    "text": "Gregg Jarrett. The Russia Hoax: The Illicit Scheme to Clear Hillary Clinton and Frame Donald Trump https://t.co/7UJY0z8rKy"
  },
  {
    "id": 991675785403682800,
    "created_at": "2018-05-02 13:48:26",
    "text": "RT @realDonaldTrump: NEW BOOK - A MUST READ! “The Russia Hoax - The Illicit Scheme to Clear Hillary Clinton and Frame Donald Trump” by the…"
  },
  {
    "id": 991663860909330400,
    "created_at": "2018-05-02 13:01:03",
    "text": "RT @PLinCzech: W przyszłym tygodniu prezydent Zeman złoży wizytę w Polsce / Prezident Zeman příští týden navštíví Polsko 🇵🇱🇨🇿 📷PR https://t…"
  },
  {
    "id": 991645935171227600,
    "created_at": "2018-05-02 11:49:49",
    "text": "Prezident republiky. https://t.co/wvmKgcLGS2"
  },
  {
    "id": 991636483059716100,
    "created_at": "2018-05-02 11:12:15",
    "text": "RT @CUTIzpravy: Čs. rozhlas odhalil rozvratnickou ideodiverzní centrálu šířící koktejl demagogie a fanatismu! https://t.co/11grMgykUf"
  },
  {
    "id": 991629577393967100,
    "created_at": "2018-05-02 10:44:49",
    "text": "RT @CUTIzpravy: Vlast zasypaly řepkopylové FAKE NEWS. Co neziskovky, ideoví novináři a TOP 09? Budou bojovat s dezinformacemi a odhalí zrád…"
  },
  {
    "id": 991614534757572600,
    "created_at": "2018-05-02 09:45:03",
    "text": "Vzpomínejme v těchto dnech s úctou na všechny osvoboditele naší vlasti! Umírali, abychom my mohli žít. https://t.co/LszdLysl4g"
  },
  {
    "id": 991614007080640500,
    "created_at": "2018-05-02 09:42:57",
    "text": "RT @ObranaTweetuje: 73. výročí osvobození města Ostravy a ukončení Ostravsko-opavské operace si zástupci armády připomněli u památníku v Ko…"
  },
  {
    "id": 991599741766131700,
    "created_at": "2018-05-02 08:46:16",
    "text": "A tím by snad mohla být „pouťovým povídačkám“ Jiřiny Šiklové konečně učiněna přítrž: https://t.co/XvPgGCR4O6"
  },
  {
    "id": 991592202085261300,
    "created_at": "2018-05-02 08:16:18",
    "text": "RT @CUTIzpravy: Jehličnany nás v těchto dnech mocně zásobují pylem. Političtí svazáci za tím vidí Babiše. Zřejmě se domnívají, že je velkop…"
  },
  {
    "id": 991352883521163300,
    "created_at": "2018-05-01 16:25:20",
    "text": "RT @realDonaldTrump: It would seem very hard to obstruct justice for a crime that never happened! Witch Hunt!"
  },
  {
    "id": 991352871206703100,
    "created_at": "2018-05-01 16:25:17",
    "text": "RT @realDonaldTrump: So disgraceful that the questions concerning the Russian Witch Hunt were “leaked” to the media. No questions on Collus…"
  },
  {
    "id": 991267184767795200,
    "created_at": "2018-05-01 10:44:48",
    "text": "Krásný první máj, přátelé! https://t.co/2Qzjze7ShA"
  },
  {
    "id": 990912079753302000,
    "created_at": "2018-04-30 11:13:44",
    "text": "Prezident Zeman příští týden navštíví Polsko: https://t.co/9iKdlMksjI"
  },
  {
    "id": 990896379244490800,
    "created_at": "2018-04-30 10:11:21",
    "text": "Prezident republiky přijme nové velvyslance: https://t.co/i7GYa4ECGh"
  },
  {
    "id": 990873843546894300,
    "created_at": "2018-04-30 08:41:48",
    "text": "Armády udavačů, cenzorů a technologií se daly do pohybu. Svinská doba! https://t.co/wrLmvnoH0v"
  },
  {
    "id": 990847966465445900,
    "created_at": "2018-04-30 06:58:58",
    "text": "@jindrichsidlo @VojtechGibis Na Vás mne Jindřichu fascinuje to, jak si systematicky ničíte své jméno. Skončit jako… https://t.co/GEkmk2Nix7"
  },
  {
    "id": 990847628261969900,
    "created_at": "2018-04-30 06:57:38",
    "text": "@VojtechGibis @jindrichsidlo Toto opravdu není TZ Donalda Trumpa. Ani slůvkem. Sorryjako. Když nerozumíte americké… https://t.co/BOaaAZIMUo"
  },
  {
    "id": 990846108610986000,
    "created_at": "2018-04-30 06:51:35",
    "text": "@VojtechGibis @jindrichsidlo Povídali, že mu hráli. Žádné vřelé poděkování se nekonalo. D. Trump neřekl jediné slov… https://t.co/f3UqCjCgAY"
  },
  {
    "id": 990841021255700500,
    "created_at": "2018-04-30 06:31:23",
    "text": "Respekt potvrdil, že vydání Nikulina je přímý útok na prezidenta USA D. Trumpa v rámci honu na čarodějnice s názvem “ruské ovliňování”."
  },
  {
    "id": 990662281825484800,
    "created_at": "2018-04-29 18:41:08",
    "text": "@Markus_Zeman Rozkošné. Další mladý obránce “západních” komunistů na Twitteru. Měli byste si založit Socialistický svaz mládeže."
  },
  {
    "id": 990624512382206000,
    "created_at": "2018-04-29 16:11:03",
    "text": "@RadioPolitik Takže “západní” komunismus je pro pány kavárníky salonfähig. Děsivé zjištění, 29 let po pádu totality."
  },
  {
    "id": 990603693098721300,
    "created_at": "2018-04-29 14:48:19",
    "text": "RT @CUTIzpravy: Čeští lepšolidé mávají při protestech proti komunistům vlajkami EU. Šéf EK Juncker oslaví 200. výročí narození Marxe. Co te…"
  },
  {
    "id": 990601918568333300,
    "created_at": "2018-04-29 14:41:16",
    "text": "RT @ZahradilJan: Mj. jsem dnes v @OtazkyVM ocenil návrh prezidenta Zemana na postupné přesunutí ambasády ČR v Izraeli do Jeruzaléma. Komuni…"
  },
  {
    "id": 990585952895754200,
    "created_at": "2018-04-29 13:37:50",
    "text": "RT @AmbMeron: Czech-Israel relations strong as ever🇮🇱🇨🇿: Celebrating 70 anniversary of #Israel in Spanish Hall, Prague Castle👑, with Czech…"
  },
  {
    "id": 990223377347596300,
    "created_at": "2018-04-28 13:37:05",
    "text": "V Lánech se dnes konala porada expertního týmu pana prezidenta za účasti guvernéra ČNB Jiřího Rusnoka. Tématem jednání byla měnová politika."
  },
  {
    "id": 990145846632005600,
    "created_at": "2018-04-28 08:29:00",
    "text": "KOMENTÁŘ: Moralistický exhibicionismus antirasistických rasistů - Alexander Tomský https://t.co/dk9OGSYvn0"
  },
  {
    "id": 990104870928691200,
    "created_at": "2018-04-28 05:46:11",
    "text": "https://t.co/D8uDmK32BF. Rozhovor s historikem M. Macháčkem, autorem monografie G. Husáka. A děsivá ozvěna normaliz… https://t.co/L0TPKdrH8o"
  },
  {
    "id": 989919481907568600,
    "created_at": "2018-04-27 17:29:30",
    "text": "RT @realDonaldTrump: Just Out: House Intelligence Committee Report released. “No evidence” that the Trump Campaign “colluded, coordinated o…"
  },
  {
    "id": 989915766110728200,
    "created_at": "2018-04-27 17:14:45",
    "text": "@MJureka To je tak, když někdo nepřemýšlí při tweetování. Pak hloupě urazí i prezidenta jiného státu. https://t.co/oYIfUQiMev"
  },
  {
    "id": 989880155341508600,
    "created_at": "2018-04-27 14:53:14",
    "text": "Prezident republiky Miloš Zeman navštíví v polovině května Moravskoslezský kraj: https://t.co/xcIBry68RQ"
  },
  {
    "id": 989822962533625900,
    "created_at": "2018-04-27 11:05:58",
    "text": "RT @realDonaldTrump: KOREAN WAR TO END! The United States, and all of its GREAT people, should be very proud of what is now taking place in…"
  },
  {
    "id": 989819732533661700,
    "created_at": "2018-04-27 10:53:08",
    "text": "RT @CUTIzpravy: Vzpomínáte, jak min. spravedlnosti USA děkovalo R. Pelikánovi za vydání Nikulina? A jak jsem varoval, že jde o krok proti D…"
  },
  {
    "id": 989811568882999300,
    "created_at": "2018-04-27 10:20:42",
    "text": "Srdečně gratuluji J. Foldynovi k zisku ocenění. Znamená totiž, že pracuje ve prospěch republiky, nikoliv ekologistů: https://t.co/kLysCnf14E"
  },
  {
    "id": 989790822035087400,
    "created_at": "2018-04-27 08:58:16",
    "text": "Abych zklidnil radostí rozdychtěné pražské novináře. Verdikt soudu pouze vrací věc Fajt-Ošťádal k novému projednání panem prezidentem."
  },
  {
    "id": 989767152012968000,
    "created_at": "2018-04-27 07:24:12",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 26. dubna 2018, 20:15, TV Barrandov: https://t.co/7KUOSUxf3n"
  },
  {
    "id": 989764423215546400,
    "created_at": "2018-04-27 07:13:22",
    "text": "Spíše než závadného obsahu se obávají cenzury: https://t.co/nrJr2NpdkV"
  },
  {
    "id": 989520848238317600,
    "created_at": "2018-04-26 15:05:29",
    "text": "RT @AmbMeron: Jerusalem https://t.co/IGtzeEVqGE"
  },
  {
    "id": 989520496344617000,
    "created_at": "2018-04-26 15:04:05",
    "text": "RT @SlechtovaKarla: S izraelským velvyslancem Danielem Meronem jsme probírali bilaterální spolupráci i aktuální situaci na Blízkém Východě.…"
  },
  {
    "id": 989447357120024600,
    "created_at": "2018-04-26 10:13:27",
    "text": "Mezinárodní hvězda Miloš Zeman: Dnes o něm ví celý svět https://t.co/xrmat9i3bv"
  },
  {
    "id": 989439741530660900,
    "created_at": "2018-04-26 09:43:11",
    "text": "Nádherný snímek ze včerejší recepce pořádané na Pražském hradě u příležitosti 70. výročí nezávislosti Izraele. https://t.co/Vdo9fz18MT"
  },
  {
    "id": 989436625049530400,
    "created_at": "2018-04-26 09:30:48",
    "text": "Prezident republiky blahopřál paraguayskému prezidentovi: https://t.co/dqihAc9bte"
  },
  {
    "id": 989430824750780400,
    "created_at": "2018-04-26 09:07:46",
    "text": "Lány, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/tHOn3MMxks"
  },
  {
    "id": 989260000999682000,
    "created_at": "2018-04-25 21:48:58",
    "text": "RT @AmbMeron: PM@netanyahu:“I thank my good friend,Czech President Miloš Zeman, for the important declaration that the Czech embassy will m…"
  },
  {
    "id": 989258099612635100,
    "created_at": "2018-04-25 21:41:25",
    "text": "RT @IsraelinCZ: “Děkujeme @CzechPresident za podporu Jeruzaléma jako věčného hlavního města Izraele.”\n@TzipiHotovely ocenila statečnost a n…"
  },
  {
    "id": 989258026187190300,
    "created_at": "2018-04-25 21:41:07",
    "text": "RT @AmbMeron: Thank you President @MZemanOficialni for your steadfast support for Israel and for our capital Jerusalem https://t.co/qZs03T7…"
  },
  {
    "id": 989238644224462800,
    "created_at": "2018-04-25 20:24:06",
    "text": "RT @IsraelHatzolah: BREAKING: Czech Republic President says 'its time to move our embassy to Jerusalem'."
  },
  {
    "id": 989226036620660700,
    "created_at": "2018-04-25 19:34:00",
    "text": "RT @LiatWexelman: Thank you @CzechPresident Zeman for your brave position on moving the Czech Embassy to our eternal capital #Jerusalem ! h…"
  },
  {
    "id": 989213385278545900,
    "created_at": "2018-04-25 18:43:44",
    "text": "Projev prezidenta republiky při recepci k 70. výročí nezávislosti Státu Izrael: https://t.co/e1Gjkh15SH"
  },
  {
    "id": 989198834806001700,
    "created_at": "2018-04-25 17:45:55",
    "text": "Czech president announces embassy move to Jerusalem: https://t.co/OiHAPkkss8"
  },
  {
    "id": 989193930309820400,
    "created_at": "2018-04-25 17:26:25",
    "text": "Drahý Miloši, Izrael nikdy nezapomene na českou solidaritu a pomoc. Přečtěte si dojemný dopis premiéra Netanjahua: https://t.co/t4DvQCSmCJ"
  },
  {
    "id": 989187635775180800,
    "created_at": "2018-04-25 17:01:25",
    "text": "Potvrzení skutečného přátelství. Pan prezident zavítal na oslavu 70. výročí nezávislosti Izraele, která se koná na… https://t.co/pyRUjYIhaA"
  },
  {
    "id": 989180806366203900,
    "created_at": "2018-04-25 16:34:16",
    "text": "OVTV, videozáznam projevu pana prezidenta na oslavě 70. výročí nezávislosti Izraele, která se koná na Hradě:… https://t.co/v4RaXPYXr2"
  },
  {
    "id": 989179184747630600,
    "created_at": "2018-04-25 16:27:50",
    "text": "Právě teď na OVTV prostřednictvím FB pana prezidenta projev pana prezidenta na oslavě 70. výročí nezávislosti Izrae… https://t.co/qQZjvplROy"
  },
  {
    "id": 989176808535969800,
    "created_at": "2018-04-25 16:18:23",
    "text": "Izrael oslaví vznik státu na Hradě, promluví i Zeman - videopřenos: https://t.co/QS3Ute4b25"
  },
  {
    "id": 989175286100045800,
    "created_at": "2018-04-25 16:12:20",
    "text": "Prezident republiky obdržel dopis od izraelského premiéra: https://t.co/xlEanfIhZk"
  },
  {
    "id": 989153557617283100,
    "created_at": "2018-04-25 14:46:00",
    "text": "RT @SlechtovaKarla: Při ceremoniálu na Pražském hradě dnes pan prezident jmenoval novým náčelníkem generálního štábu Aleše Opatu. Ten vystř…"
  },
  {
    "id": 989126992225275900,
    "created_at": "2018-04-25 13:00:26",
    "text": "Projev prezidenta republiky při jmenování náčelníka Generálního štábu AČR: https://t.co/Y1KFiMNP5L"
  },
  {
    "id": 989126653384196100,
    "created_at": "2018-04-25 12:59:05",
    "text": "Pan prezident dnes na Hradě jmenoval genpor. Aleše Opatu náčelníkem Generálního štábu Armády České republiky. https://t.co/ByhdiTcmeH"
  },
  {
    "id": 989092325723967500,
    "created_at": "2018-04-25 10:42:41",
    "text": "Prezident republiky podepsal zákon: https://t.co/ZlRVnTU21p"
  },
  {
    "id": 989066462034833400,
    "created_at": "2018-04-25 08:59:55",
    "text": "Nebuďte jako Trump, píší Izraelci Hradu kvůli ambasádě. Dopisů intelektuálů máme u nás inflaci, odmítl Ovčáček: https://t.co/GA0q8Ao4dt"
  },
  {
    "id": 989030610227392500,
    "created_at": "2018-04-25 06:37:27",
    "text": "Pan prezident poskytl TV Nova exkluzivní rozhovor: https://t.co/QXeP6mXXnz"
  },
  {
    "id": 988812030143615000,
    "created_at": "2018-04-24 16:08:53",
    "text": "https://t.co/FlrCBFr5bv"
  },
  {
    "id": 988767612027965400,
    "created_at": "2018-04-24 13:12:23",
    "text": "Pan prezident, květen 2017: Jedovaté byliny antisemitismu opět započaly zapouštět kořeny na evropském kontinentě. https://t.co/DSdqbd0clz"
  },
  {
    "id": 988760121265320000,
    "created_at": "2018-04-24 12:42:37",
    "text": "Vzpomínka. Prognosticky 24. dubna 2016 na Facebooku! https://t.co/2s1ymgdT0C"
  },
  {
    "id": 988741451650650100,
    "created_at": "2018-04-24 11:28:26",
    "text": "RT @USEmbassyPrague: Zveme vás na slavnostní zahájení „Konvoje osvobození“, který se od velvyslanectví vydá na pouť po území osvobozeném am…"
  },
  {
    "id": 988737372446773200,
    "created_at": "2018-04-24 11:12:14",
    "text": "Kultovní inscenace Městského divadla Zlín Ovčáček miláček online na videu: https://t.co/ibuxWhdI6r"
  },
  {
    "id": 988733726866788400,
    "created_at": "2018-04-24 10:57:44",
    "text": "Pan prezident se zúčastní ve středu od 18.00 na Hradě oslavy 70. výročí nezávislosti Izraele, kde pronese projev: https://t.co/ranhEoNw42"
  },
  {
    "id": 988683502697766900,
    "created_at": "2018-04-24 07:38:10",
    "text": "Prezident republiky jmenuje náčelníka Generálního štábu Armády České republiky: https://t.co/z6U26fXIi3"
  },
  {
    "id": 988489192291348500,
    "created_at": "2018-04-23 18:46:03",
    "text": "RT @AmbMeron: Izrael je důkazem, že i malý stát může být velmocí https://t.co/hbi5vgci3P"
  },
  {
    "id": 988405013629362200,
    "created_at": "2018-04-23 13:11:33",
    "text": "@DanielFoltynek @Wasa2611 @DLapackova @MirekTopolanek @janmolacek @Nigel_Farage Farage není ve fanklubu TOP 09. Nem… https://t.co/P362cDrbLd"
  },
  {
    "id": 988403602577387500,
    "created_at": "2018-04-23 13:05:57",
    "text": "@DanielFoltynek @Wasa2611 @DLapackova @MirekTopolanek @janmolacek @Nigel_Farage To je tak, když z lepšolidí začne t… https://t.co/ATXmQnIRUS"
  },
  {
    "id": 988375809269338100,
    "created_at": "2018-04-23 11:15:30",
    "text": "RT @AndrejBabis: Příjmy do státní kasy meziročně vzrostly o 38 miliard. Za první čtvrtletí byly celkem 345,7 miliard. Naše ekonomika je na…"
  },
  {
    "id": 988160254226698200,
    "created_at": "2018-04-22 20:58:58",
    "text": "@JanSoldn1 To není odpověď. Znovu. Proč Vám vadí jednoznačné odsouzení zločinů komunistického režimu?"
  },
  {
    "id": 988126971526811600,
    "created_at": "2018-04-22 18:46:43",
    "text": "RT @realDonaldTrump: Funny how all of the Pundits that couldn’t come close to making a deal on North Korea are now all over the place telli…"
  },
  {
    "id": 988122344366530600,
    "created_at": "2018-04-22 18:28:19",
    "text": "RT @CUTIzpravy: To je archivní pořad ČST Praha z roku 1972? https://t.co/Zbpf99dNJD"
  },
  {
    "id": 988120430446817300,
    "created_at": "2018-04-22 18:20:43",
    "text": "RT @realDonaldTrump: A complete Witch Hunt!"
  },
  {
    "id": 988092533522780200,
    "created_at": "2018-04-22 16:29:52",
    "text": "RT @AmbMeron: Jedna z nejznámějších izraelských písní nese název Praha https://t.co/evicA9h2HZ"
  },
  {
    "id": 987983295001620500,
    "created_at": "2018-04-22 09:15:48",
    "text": "RT @strakovka: Vláda v úterý a ve středu navštíví Moravskoslezský kraj: Karviná, Ostrava, Vítkovice, Mošnov, Frýdek-Místek, Bílovec, Frenšt…"
  },
  {
    "id": 987718080901075000,
    "created_at": "2018-04-21 15:41:56",
    "text": "RT @rudolf_jindrak: Přiznávám, že na dnešní mši za kardinála Berana jsem byl dojat. Například i z toho, jak přirozeně jsme po \"země česká,…"
  },
  {
    "id": 987694479288090600,
    "created_at": "2018-04-21 14:08:08",
    "text": "FOTO Prezident Zeman absolvoval v Nymburku ještě jednu návštěvu. U profesora, kterému to slíbil https://t.co/KXBQZeU3vP"
  },
  {
    "id": 987666642892181500,
    "created_at": "2018-04-21 12:17:32",
    "text": "Pan prezident řekl na sjezdu KSČM rozhodné slovo. Komunisty vyzval k pokání. Přečtěte si skvělý projev: https://t.co/uW7Ucz11b4"
  },
  {
    "id": 987636683184189400,
    "created_at": "2018-04-21 10:18:29",
    "text": "Zeman na sjezdu vmetl komunistům: Píka, Horáková, to byly zločiny. Musíte umět pojmenovat pravdu, doporučuji pokání https://t.co/DzPDNAIELm"
  },
  {
    "id": 987412220261871600,
    "created_at": "2018-04-20 19:26:33",
    "text": "@DvojiM Můj děda jako student tam tenkrát protestoval. Esenbáci je v Nerudovce zmlátili. A teď si ty studenty každý… https://t.co/JhM5CTwQIv"
  },
  {
    "id": 987408967814078500,
    "created_at": "2018-04-20 19:13:37",
    "text": "Ovčáček byl popřát k narozeninám. Rád. A média mohou spekulovat: https://t.co/W2wNV411mR"
  },
  {
    "id": 987407932512964600,
    "created_at": "2018-04-20 19:09:30",
    "text": "RT @WhiteHouse: Remembering former First Lady Barbara Bush: https://t.co/AfC5JkQMum https://t.co/1oIo5VkZ1n"
  },
  {
    "id": 987379714552721400,
    "created_at": "2018-04-20 17:17:23",
    "text": "https://t.co/g1cPOziwWN"
  },
  {
    "id": 987375146242658300,
    "created_at": "2018-04-20 16:59:14",
    "text": "Vítejte doma! Utrpení ze zášti je vždy tak úkorné. A Vy jste setrval. https://t.co/tHj3JIiKc7"
  },
  {
    "id": 987373657986093000,
    "created_at": "2018-04-20 16:53:19",
    "text": "ČSSD prokázala, že jí jde o republiku. https://t.co/4B4RcHDRT0"
  },
  {
    "id": 987369736450211800,
    "created_at": "2018-04-20 16:37:44",
    "text": "@Pospisil_Jiri Člověk skutečné víry. Tak čestné a tak odvážné. Říci: Vítejte DOMA! To je skvělé!"
  },
  {
    "id": 987367029001814000,
    "created_at": "2018-04-20 16:26:58",
    "text": "RT @Pospisil_Jiri: Právě se k mé velké radosti naplnilo poslední přání kardinála Berana vrátit se do své rodné země, kam ho nechtěl ani po…"
  },
  {
    "id": 987365496302555100,
    "created_at": "2018-04-20 16:20:53",
    "text": "RT @CT24zive: Za zvuků kostelních zvonů přistál v Praze vládní speciál s ostatky kardinála Josefa Berana. Přivezl je z Vatikánu. Do vlasti…"
  },
  {
    "id": 987362139794001900,
    "created_at": "2018-04-20 16:07:33",
    "text": "Je třeba ocenit státotvorné rozhodnutí vedení ČSSD jednat o vládě s nezpochybnitelným vítězem voleb, premiérem Andrejem Babišem."
  },
  {
    "id": 987347889583280100,
    "created_at": "2018-04-20 15:10:55",
    "text": "RT @rudolf_jindrak: Podle WSJ jednají 🇩🇪 vrcholoví politici jménem 🇩🇪 firem s USA o výjimkách z příp. tvrdších amerických protiruských sank…"
  },
  {
    "id": 987344423930552300,
    "created_at": "2018-04-20 14:57:09",
    "text": "RT @VladimirDlouhy: Dnes jsem přijal nabídku prezidenta republiky Miloše Zemana stát se členem jeho  expertního týmu. Především jako předst…"
  },
  {
    "id": 987344323233697800,
    "created_at": "2018-04-20 14:56:45",
    "text": "Zemanovi bude radit šéf Hospodářské komory Dlouhý: https://t.co/82JZBqK3nz"
  },
  {
    "id": 987327919507853300,
    "created_at": "2018-04-20 13:51:34",
    "text": "@JiriMracna @Shiftshooter1 Chci být maximálně transparentní a informačně otevřený. Proto je na webu Hradu uveden i tento odkaz."
  },
  {
    "id": 987322252353065000,
    "created_at": "2018-04-20 13:29:03",
    "text": "Ovčáček: ČT se staví do role nikým nevolené třetí parlamentní komory https://t.co/CzXLCsMr3C"
  },
  {
    "id": 987311870741766100,
    "created_at": "2018-04-20 12:47:48",
    "text": "RT @realDonaldTrump: So General Michael Flynn’s life can be totally destroyed while Shadey James Comey can Leak and Lie and make lots of mo…"
  },
  {
    "id": 987292931500445700,
    "created_at": "2018-04-20 11:32:32",
    "text": "Ptejte se tiskového mluvčího Hradu Jiřího Ovčáčka v online chatu na https://t.co/Fnqmlfn4Ua v pátek 20. dubna od 14… https://t.co/zSbu1kkTey"
  },
  {
    "id": 987290798017347600,
    "created_at": "2018-04-20 11:24:03",
    "text": "RT @Ostrov_A: Very cool! #Israeli cabinet holds historic meeting at Independence Hall, where 70 years ago Ben-Gurion declared the birth of…"
  },
  {
    "id": 987282120270807000,
    "created_at": "2018-04-20 10:49:34",
    "text": "RT @UKinCR: ‘Miluji hudbu, hlavně Janáčka a Dvořáka, a v rezidenci mám krásné piano, hraju na něj,’ velvyslanec Nick Archer pro dnešní Bles…"
  },
  {
    "id": 987267961458188300,
    "created_at": "2018-04-20 09:53:19",
    "text": "Ovčáček a Zeman na stejné vlně! https://t.co/aHMTcKgIhV"
  },
  {
    "id": 987261835438108700,
    "created_at": "2018-04-20 09:28:58",
    "text": "@Don_Vito007 @SPD_cz Kuk: https://t.co/8kuFBEDYV8"
  },
  {
    "id": 987259814123327500,
    "created_at": "2018-04-20 09:20:56",
    "text": "70 https://t.co/dLvbVJN5c3"
  },
  {
    "id": 987257843203170300,
    "created_at": "2018-04-20 09:13:06",
    "text": "RT @rudolf_jindrak: Je mi potěšením být osobně při tom. V sobotu pak proběhne mše svatá v Katedrále sv. Víta, Vojtěcha a Václava. Těším se.…"
  },
  {
    "id": 987257593516187600,
    "created_at": "2018-04-20 09:12:07",
    "text": "RT @StandWithUs: One of the cutest 🐶 celebrating Israel’s 70th! #israel #celebrate70 https://t.co/vsHUkRgOzV"
  },
  {
    "id": 987257561299800000,
    "created_at": "2018-04-20 09:11:59",
    "text": "RT @CzechEmbassyDC: On April 18 1945 General Patton´s army entered Czechoslovakia and began liberation of Western Bohemia after 6 yrs of Na…"
  },
  {
    "id": 987255781081931800,
    "created_at": "2018-04-20 09:04:55",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 19. března 2018, 20:15, TV Barrandov: https://t.co/b9i2X62lLQ"
  },
  {
    "id": 987254672644825100,
    "created_at": "2018-04-20 09:00:30",
    "text": "Prezident republiky navštíví sjezd KSČM. Podrobnosti zde: https://t.co/ZeraDPci10"
  },
  {
    "id": 987251491936317400,
    "created_at": "2018-04-20 08:47:52",
    "text": "Výborně, pane premiére! Exkluzivně: Babiš souhlasí s přesunem ambasády v Izraeli do Jeruzaléma.  https://t.co/ezLyufZpj8"
  },
  {
    "id": 986966205989834800,
    "created_at": "2018-04-19 13:54:15",
    "text": "Mluvčí Jiří Ovčáček: Miluji pohlednice, lepím na ně prezidenta https://t.co/j10jNB2hEU"
  },
  {
    "id": 986965134315802600,
    "created_at": "2018-04-19 13:49:59",
    "text": "Kancléř Mynář: CITIC a CEFC Europe založí společný podnik https://t.co/s3pfOy3TgN"
  },
  {
    "id": 986955434861977600,
    "created_at": "2018-04-19 13:11:27",
    "text": "Pan prezident dnes na Hradě přijal na jeho žádost předsedu ČSSD a místopředsedu Poslanecké sněmovny Parlamentu České republiky Jana Hamáčka."
  },
  {
    "id": 986923116034248700,
    "created_at": "2018-04-19 11:03:01",
    "text": "RT @neviditelnypes: Izrael: 70 let proti proudu https://t.co/cTwzoMYrrc"
  },
  {
    "id": 986905220784574500,
    "created_at": "2018-04-19 09:51:55",
    "text": "RT @TBarrandov: Česká i světová politická scéna se potýká v současnosti s nemalými problémy. Jaký má na momentální situaci názor prezident…"
  },
  {
    "id": 986903178909225000,
    "created_at": "2018-04-19 09:43:48",
    "text": "RT @netanyahu: חג עצמאות שמח ביחד עם חיילינו המצטיינים. אוהבים אתכם וגאים בכם! https://t.co/IjasL2F9M6"
  },
  {
    "id": 986903109996810200,
    "created_at": "2018-04-19 09:43:31",
    "text": "@lucka_yarko Budu o tom přemýšlet :-)"
  },
  {
    "id": 986895748607463400,
    "created_at": "2018-04-19 09:14:16",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/RcfuMFBJn8"
  },
  {
    "id": 986883183219179500,
    "created_at": "2018-04-19 08:24:20",
    "text": "Týdeník Reflex a TMBK mi udělali radost! https://t.co/uj1tpaPW88"
  },
  {
    "id": 986719145420083200,
    "created_at": "2018-04-18 21:32:31",
    "text": "RT @WhiteHouse: Happy Independence Day to the people of Israel. America stands with you! https://t.co/uJ5WioRV4X"
  },
  {
    "id": 986703584602611700,
    "created_at": "2018-04-18 20:30:41",
    "text": "RT @iROZHLAScz: „Upřímné spojenectví a upřímné přátelství,“ napsal @PREZIDENTmluvci. https://t.co/wzckkYEJyl"
  },
  {
    "id": 986683129959198700,
    "created_at": "2018-04-18 19:09:24",
    "text": "RT @LenkaKlicperov: Komentář Lenky Klicperové: Mediální válka v Sýrii https://t.co/QPM2DYjKRN"
  },
  {
    "id": 986666301698576400,
    "created_at": "2018-04-18 18:02:32",
    "text": "Poslechněte si mé odpovědi na otázky pořadu Newsroom ČT24, který považuji za totální dno české žurnalistiky:… https://t.co/RxyhfbZZ7G"
  },
  {
    "id": 986651081894760400,
    "created_at": "2018-04-18 17:02:03",
    "text": "RT @IsraeliPM: Happy Independence Day, Israel! https://t.co/6PZxBbhbcr"
  },
  {
    "id": 986639500448329700,
    "created_at": "2018-04-18 16:16:02",
    "text": "@ZdenStrn ČST Praha o dění v Sýrii. Ilustrační záběry z Ukrajiny :-D"
  },
  {
    "id": 986638759402885100,
    "created_at": "2018-04-18 16:13:05",
    "text": "ČT odvysílala falešné obrazové zpravodajství ze Sýrie, místo Damašku ukázala Luhansk z roku 2015. Budou prémie? https://t.co/lIxDkYvbw3"
  },
  {
    "id": 986616864502681600,
    "created_at": "2018-04-18 14:46:05",
    "text": "Prezident republiky blahopřál ázerbájdžánskému prezidentovi: https://t.co/1VOc4NVZl3"
  },
  {
    "id": 986612865770623000,
    "created_at": "2018-04-18 14:30:12",
    "text": "Pan prezident dnes přijal na Hradě delegaci skupiny CITIC Group v čele s předsedou představenstva Chang Zhenmingem. https://t.co/358pV7bRQp"
  },
  {
    "id": 986610683113599000,
    "created_at": "2018-04-18 14:21:31",
    "text": "Pan prezident přijal ve středu dne 18. dubna 2018 na Pražském hradě na jeho žádost Pavla Bělobrádka, předsedu KDU-ČSL."
  },
  {
    "id": 986596945228689400,
    "created_at": "2018-04-18 13:26:56",
    "text": "RT @rudolf_jindrak: Prezident republiky a velvyslanec USA @USAmbPrague. Pražský hrad, 18.4.2018. https://t.co/MchOqQ1Qs7"
  },
  {
    "id": 986596670614982700,
    "created_at": "2018-04-18 13:25:51",
    "text": "RT @rudolf_jindrak: Setkání jsem byl přítomen a pohodovou, ale zároveň produktivní a pracovní atmosféru potvrzuji. To, že 🇺🇸 zůstávají naší…"
  },
  {
    "id": 986592923096698900,
    "created_at": "2018-04-18 13:10:57",
    "text": "Prezident republiky zdůraznil, že velvyslanec USA Stephen B. King má na Pražském hradě dveře vždy otevřené: https://t.co/h9zWswnvYr"
  },
  {
    "id": 986576978315829200,
    "created_at": "2018-04-18 12:07:36",
    "text": "Upřímné spojenectví a upřímné přátelství. Pan prezident přivítal ve své pracovně na Hradě velvyslance USA Stephena… https://t.co/1bykGTAcfq"
  },
  {
    "id": 986556567238725600,
    "created_at": "2018-04-18 10:46:29",
    "text": "RT @realDonaldTrump: Mike Pompeo met with Kim Jong Un in North Korea last week. Meeting went very smoothly and a good relationship was form…"
  },
  {
    "id": 986548014494965800,
    "created_at": "2018-04-18 10:12:30",
    "text": "@ZdenekElefant Takto si představuji lokajský tweet. Shrbená záda a servilita. Jenže, to není můj svět. Chci hrdou -… https://t.co/IZKkHlq1w0"
  },
  {
    "id": 986536071830917100,
    "created_at": "2018-04-18 09:25:03",
    "text": "https://t.co/Yk4VDJnA5x"
  },
  {
    "id": 986530069559566300,
    "created_at": "2018-04-18 09:01:12",
    "text": "Ledy se hnuly? https://t.co/5cMiusDAHe"
  },
  {
    "id": 986512781422755800,
    "created_at": "2018-04-18 07:52:30",
    "text": "RT @USEmbassyPrague: Vzpomínáme na první dámu Barbaru Bushovou, kterou Češi nadšeně uvítali na Václavském náměstí u příležitosti prvního vý…"
  },
  {
    "id": 986497901961637900,
    "created_at": "2018-04-18 06:53:22",
    "text": "Důležitým odkazem Barbary Bushové je zcela jednoznačně podpora tradiční rodiny, které se navzdory kritikům věnovala. https://t.co/2N8ZExeOuH"
  },
  {
    "id": 986483322363760600,
    "created_at": "2018-04-18 05:55:26",
    "text": "Pošta začíná prodávat novou známku se Zemanem: https://t.co/7HLbLsCCce https://t.co/TFgCJfU6Gq"
  },
  {
    "id": 986479072254586900,
    "created_at": "2018-04-18 05:38:33",
    "text": "RT @rudolf_jindrak: Amerika přišla o šarmantní a vtipnou ženu, která se kromě role první dámy stihla široce věnovat charitě, školské reform…"
  },
  {
    "id": 986288986258903000,
    "created_at": "2018-04-17 17:03:13",
    "text": "Klidný večer, přátelé! https://t.co/bfjEMKXsgS"
  },
  {
    "id": 986242606928744400,
    "created_at": "2018-04-17 13:58:55",
    "text": "Pan prezident přijal v úterý dne 17. dubna 2018 na Pražském hradě na jeho žádost Ivana Bartoše, předsedu Pirátské strany."
  },
  {
    "id": 986233103990403100,
    "created_at": "2018-04-17 13:21:09",
    "text": "Pan prezident kondoloval k úmrtí nejstarší české válečné veteránky Anděly Haidy: https://t.co/AJRd1xTWVZ"
  },
  {
    "id": 986227984372813800,
    "created_at": "2018-04-17 13:00:49",
    "text": "Pan prezident kondoloval Martině Formanové: https://t.co/KT67qoqYUC"
  },
  {
    "id": 986227366581166100,
    "created_at": "2018-04-17 12:58:22",
    "text": "Pan prezident přijal v úterý dne 17. dubna 2018 na Pražském hradě na jeho žádost Petra Fialu, předsedu Občanské demokratické strany."
  },
  {
    "id": 986209931253702700,
    "created_at": "2018-04-17 11:49:05",
    "text": "RT @IsraelinCZ: Co to znamená být Izraelec? Mohli bychom se to snažit vysvětlit, ale možná Vám napoví toto tříminutové video: Koukněte na n…"
  },
  {
    "id": 986197743147331600,
    "created_at": "2018-04-17 11:00:39",
    "text": "Zeman se setká s americkým velvyslancem, budou řešit dění ve světě: https://t.co/WSYsljvt5z"
  },
  {
    "id": 986139455655415800,
    "created_at": "2018-04-17 07:09:02",
    "text": "RT @neviditelnypes: Boj o svobodu slova. Nizozemský parlament proti Ministerstvu pravdy EU a neblahá role českých posluhů https://t.co/rwsi…"
  },
  {
    "id": 986138825712861200,
    "created_at": "2018-04-17 07:06:32",
    "text": "RT @IsraelinEU: Czech President Miloš Zeman to host celebration of Israel's 70th Independence Day at Prague Castle. https://t.co/3t9xpWcu4Y"
  },
  {
    "id": 985948427447087100,
    "created_at": "2018-04-16 18:29:57",
    "text": "Trump puts the brakes on new Russian sanctions, reversing Haley’s announcement: https://t.co/QwuBt7g7DT"
  },
  {
    "id": 985947051090378800,
    "created_at": "2018-04-16 18:24:29",
    "text": "Zeman čeká v týdnu návštěvu, vrcholné šéfy čínského státního gigantu CITIC Group: https://t.co/rOhcYwiryD"
  },
  {
    "id": 985939113839874000,
    "created_at": "2018-04-16 17:52:57",
    "text": "RT @RobejsekPetr: Zatímco předvoj české inteligence, ohrnoval nos nad údajně patologickým chováním vlastního národa, tak se jejich idol Ang…"
  },
  {
    "id": 985900919844933600,
    "created_at": "2018-04-16 15:21:11",
    "text": "Hradní mluvčí na sociální síti vzdoruje těm, kteří si přejí válku v Sýrii nebo dokonce konflikt mezi USA a Ruskem: https://t.co/TvrJpjp2fK"
  },
  {
    "id": 985868164390146000,
    "created_at": "2018-04-16 13:11:01",
    "text": "Luftangriff in Syrien kritisiert: https://t.co/fmKDmCW6eT"
  },
  {
    "id": 985864921593327600,
    "created_at": "2018-04-16 12:58:08",
    "text": "Přesně takovou patologickou sedlinu povzbuzují všichni ti “slušní a noblesní” podporovatelé války. https://t.co/NnRvzbF2Kb"
  },
  {
    "id": 985860415174467600,
    "created_at": "2018-04-16 12:40:14",
    "text": "Tschechischer Präsident: Angriffe in Syrien waren «Cowboy-Aktion» https://t.co/Ies6yut1ef"
  },
  {
    "id": 985855444303433700,
    "created_at": "2018-04-16 12:20:28",
    "text": "Jednoznačná odpověď stálému kandidátovi J. Drahošovi! https://t.co/pUWlng4Jok"
  },
  {
    "id": 985854927854596100,
    "created_at": "2018-04-16 12:18:25",
    "text": "@jiridrahos1 Vzhledem k tomu, že jste podpořil útok na Sýrii bez mandátu RB OSN, je pro mne ctí, že mě nectíte. Nec… https://t.co/NcNJOL2xzb"
  },
  {
    "id": 985853177797972000,
    "created_at": "2018-04-16 12:11:28",
    "text": "RT @ZaoralekL: Tomahawky to nevyhrají https://t.co/RT2bLuy6Dr"
  },
  {
    "id": 985841930071412700,
    "created_at": "2018-04-16 11:26:46",
    "text": "RT @IsraelinCZ: IZRAEL SLAVÍ 70 LET NEZÁVISLOSTI: Podívejte se na 3,000 let izraelských dějin v 10 minutách - přelomové okamžiky cesty žido…"
  },
  {
    "id": 985841026895052800,
    "created_at": "2018-04-16 11:23:11",
    "text": "Ozbrojený útok na jakoukoli zemi může být proveden pouze se souhlasem RB OSN. Přepis rozhovoru pro Frekvenci 1! https://t.co/Hs2RgMGjbg"
  },
  {
    "id": 985826357782483000,
    "created_at": "2018-04-16 10:24:54",
    "text": "Václav Klaus ml. v souvislosti se Sýrií odcitoval Hemingwaye. Škoda, že mě to nenapadlo o víkendu. Mohl jsem mít na… https://t.co/lIybJm3sQk"
  },
  {
    "id": 985803607592390700,
    "created_at": "2018-04-16 08:54:30",
    "text": "RT @CUTIzpravy: Největší nebezpečí pro ČR představuje část českého establishmentu, která touží po smrtícím konfliktu mezi USA a Ruskem. Už…"
  },
  {
    "id": 985786276241604600,
    "created_at": "2018-04-16 07:45:37",
    "text": "Israel to mark its anniversary in Prague under Zeman's auspices: https://t.co/DEXfrE0kUN https://t.co/BqippFNwgR"
  },
  {
    "id": 985780995982069800,
    "created_at": "2018-04-16 07:24:39",
    "text": "KOMENTÁŘ: Váleční šílenci – Václav Klaus ml. https://t.co/Qy5vAWIKGs"
  },
  {
    "id": 985760792841769000,
    "created_at": "2018-04-16 06:04:22",
    "text": "Krásný den, přátelé! https://t.co/G02s2lALuE"
  },
  {
    "id": 985757409632292900,
    "created_at": "2018-04-16 05:50:55",
    "text": "Takže III. světová válka málem vypukla kvůli videu z dílny absolutně nedůvěryhodných Bílých helem.\nŠílené a obludné! https://t.co/YlzqslBbab"
  },
  {
    "id": 985750225875808300,
    "created_at": "2018-04-16 05:22:22",
    "text": "RT @AviMayer: A lovely gesture: Czech President Miloš Zeman to host celebration of Israel's 70th Independence Day at Prague Castle; spokesm…"
  },
  {
    "id": 985636526649499600,
    "created_at": "2018-04-15 21:50:34",
    "text": "Zeman označil útok na Sýrii za kovbojskou akci, která brání uprchlíkům v návratu domů: https://t.co/n1K6foNgiU"
  },
  {
    "id": 985635759926534100,
    "created_at": "2018-04-15 21:47:32",
    "text": "Trumpova mise na obranu Syřanů. Ale jen těch vybraných https://t.co/OGJkYJ6XQy"
  },
  {
    "id": 985635473765871600,
    "created_at": "2018-04-15 21:46:23",
    "text": "Thomas Kulidakis: Zbrklý, bezzubý a zbytečný útok na Sýrii je gól do vlastní branky Západu https://t.co/ZRtMh4xiJH"
  },
  {
    "id": 985610954154049500,
    "created_at": "2018-04-15 20:08:57",
    "text": "VIDEO: Obávejte se politiků, kteří reagují zkratkovitě, řekl v Press klubu Miloš Zeman https://t.co/Xi7jaFqF4i"
  },
  {
    "id": 985592573094965200,
    "created_at": "2018-04-15 18:55:55",
    "text": "Prezident republiky. https://t.co/vn75gPdWa8"
  },
  {
    "id": 985589801461125100,
    "created_at": "2018-04-15 18:44:54",
    "text": "Poslechněte si celý dnešní zásadní rozhovor pana prezidenta pro Frekvenci 1! Zde: https://t.co/UPai84m55b"
  },
  {
    "id": 985558877893808100,
    "created_at": "2018-04-15 16:42:01",
    "text": "Zeman kritizoval útok v Sýrii, protože neměl mandát od RB OSN: https://t.co/wooGokVhyA"
  },
  {
    "id": 985549487107133400,
    "created_at": "2018-04-15 16:04:43",
    "text": "Lány, právě teď! Pan prezident na rádiu Frekvence 1. https://t.co/GGyLbci4wK"
  },
  {
    "id": 985537787184197600,
    "created_at": "2018-04-15 15:18:13",
    "text": "V 18:00 živě z Lán na rádiu Frekvence 1 rozhovor s panem prezidentem v pořadu “Prezidentský Pressklub”! https://t.co/jwKDHPNHqJ"
  },
  {
    "id": 985505019402309600,
    "created_at": "2018-04-15 13:08:01",
    "text": "Lány, právě teď! Pan prezident přivítal v Lánech premiéra Andreje Babiše, aby spolu probrali aktuální stav vyjednáv… https://t.co/o780kg2uoM"
  },
  {
    "id": 985493188390604800,
    "created_at": "2018-04-15 12:21:00",
    "text": "Tereza Spencerová: https://t.co/Bbxqn7Tx4a"
  },
  {
    "id": 985489721429241900,
    "created_at": "2018-04-15 12:07:13",
    "text": "@derner_martin S tím, že ideologicky primitivní osazenstvo Twitteru nerozumí mezinárodní politice, počítám. Nebojte."
  },
  {
    "id": 985487138241351700,
    "created_at": "2018-04-15 11:56:57",
    "text": "Prezident USA Donald Trump ustál těžkou zkoušku ve prospěch celého světa. Vybral ve vysoké rychlosti smrtící zatáčku."
  },
  {
    "id": 985486220384927700,
    "created_at": "2018-04-15 11:53:19",
    "text": "Trump jednal pod tlakem, ale obstál. Kdyby byl prezidentem místo Obamy, vyhnuli bychom se Rusům v Sýrii, na Ukrajině https://t.co/RaFtelS6bC"
  },
  {
    "id": 985458364799967200,
    "created_at": "2018-04-15 10:02:37",
    "text": "Socialisté se spojili s antisemitským Jobbikem. To je jediná důležitá informace o demonstraci proti V. Orbánovi. https://t.co/Lca3OMs3zL"
  },
  {
    "id": 985449809845813200,
    "created_at": "2018-04-15 09:28:38",
    "text": "@alsiik Vzhledem k tomu, že hrubým způsobem útočíte na ústavní Listinu základních práv a svobod, měl byste nahlásit sám sebe."
  },
  {
    "id": 985420539975086100,
    "created_at": "2018-04-15 07:32:19",
    "text": "RT @CUTIzpravy: Všichni, kdo ideově podpořili útok na Sýrii, se zesměšnili. Stafáž divadélka domluveného Washingtonem, Moskvou, Paříží, Lon…"
  },
  {
    "id": 985251212642738200,
    "created_at": "2018-04-14 20:19:28",
    "text": "Za vyhrocením celé situace mohli stát Trumpovi odpůrci v USA: https://t.co/slJeqSTDwO"
  },
  {
    "id": 985248686681796600,
    "created_at": "2018-04-14 20:09:26",
    "text": "Šokující a absolutně nepřijatelné! https://t.co/jZPxcAOC5z"
  },
  {
    "id": 985225289641930800,
    "created_at": "2018-04-14 18:36:28",
    "text": "Krásný jarní večer, přátelé! https://t.co/iXzZcsphmT"
  },
  {
    "id": 985223360228548600,
    "created_at": "2018-04-14 18:28:48",
    "text": "Návrat do situace se sférami vlivu a imperiální politikou bezpečnost negarantuje. Brzdit by tak měli všichni: https://t.co/VdQdVr9DrW"
  },
  {
    "id": 985131918667763700,
    "created_at": "2018-04-14 12:25:26",
    "text": "RT @CUTIzpravy: Velmoci si poměřily síly a to je vše. Spokojené USA, spokojené Rusko, spokojená Francie a spokojená Velká Británie."
  },
  {
    "id": 985127881113329700,
    "created_at": "2018-04-14 12:09:24",
    "text": "@hajek_miloslav @CUTIzpravy Nahnědlá patologická sedlina vyhrožuje. Hnus."
  },
  {
    "id": 985117260284035100,
    "created_at": "2018-04-14 11:27:12",
    "text": "@VladaFoltan @kostalmilda @IvoZelinka Vláďovi Foltánovi, tomu strážci ideologické čistoty, zřejmě praskne žilka!"
  },
  {
    "id": 985113548350246900,
    "created_at": "2018-04-14 11:12:27",
    "text": "Připomínám: Pan prezident vystoupí v neděli v 18.00 hodin v pořadu Prezidentský Pressklub na Frekvenci 1. Rozhovor bude vysílán živě z Lán."
  },
  {
    "id": 985113030693400600,
    "created_at": "2018-04-14 11:10:23",
    "text": "RT @CUTIzpravy: Sýrie byla vždy předmětem zájmu velmocí. https://t.co/HhMRFZCbVR"
  },
  {
    "id": 985109446299996200,
    "created_at": "2018-04-14 10:56:09",
    "text": "RT @CUTIzpravy: Ve 30. letech 20. století byla paralyzována Společnost národů. Jak to dopadlo, víme. Teď byla paralyzována OSN. Jak to dopa…"
  },
  {
    "id": 985108317549850600,
    "created_at": "2018-04-14 10:51:39",
    "text": "RT @jhamacek: Chem. útok v Dúmá je odsouzeníhodný. Odpovědí ale není ukázka síly bez mandátu RB OSN. Řešení syrského konfliktu se tak bohuž…"
  },
  {
    "id": 985105436050419700,
    "created_at": "2018-04-14 10:40:12",
    "text": "RT @ZaoralekL: Tomahawky udeřily v Sýrii: vlk se nažral a koza zůstala celá. Donaldu Trumpovi zřejmě generálové rozmluvili pouštět se do ně…"
  },
  {
    "id": 985039721117175800,
    "created_at": "2018-04-14 06:19:05",
    "text": "@kostalmilda Tak co tu ještě děláte? Proč už nemíříte do Sýrie?"
  },
  {
    "id": 985039233575465000,
    "created_at": "2018-04-14 06:17:09",
    "text": "@myska_r @maresovo Pán vyhrožuje! Nějaký zakomplexovaný, což?"
  },
  {
    "id": 985038887574736900,
    "created_at": "2018-04-14 06:15:46",
    "text": "@saradvorakova @kostalmilda Zdržujete sama sebe. Už teď máte mít sbaleno do Sýrie."
  },
  {
    "id": 985038675342970900,
    "created_at": "2018-04-14 06:14:55",
    "text": "@MHubika Dost plkání na Twitteru. Vzhůru do boje!"
  },
  {
    "id": 985037181050916900,
    "created_at": "2018-04-14 06:08:59",
    "text": "@kostalmilda @saradvorakova Asad se třese hrůzou při představě, že proti němu vyrazí do boje místní bojechtivé osaz… https://t.co/5U9gHo2UAr"
  },
  {
    "id": 985036353950961700,
    "created_at": "2018-04-14 06:05:42",
    "text": "@maresovo Nějak Vám ujely nervy. Takoví chudáčci, jako Vy, mne nemohou urazit. Jen si odplivnu."
  },
  {
    "id": 985035918456377300,
    "created_at": "2018-04-14 06:03:58",
    "text": "@novic1989 Co tady ještě pohledáváte? Zbraň do ruky a vzhůru do Sýrie. Kecáním na Twitteru Asada neporazíte."
  },
  {
    "id": 985035427009704000,
    "created_at": "2018-04-14 06:02:01",
    "text": "Zemřel Miloš Forman. Nenávratně mizí svět velkých lidí. Uzavírá se příběh lidsky a umělecky silné generace."
  },
  {
    "id": 985034118449848300,
    "created_at": "2018-04-14 05:56:49",
    "text": "@saradvorakova Máme -zaplaťpánbůh - Vaše stanovisko. Je ideové a dá se ihned tisknout na plakáty."
  },
  {
    "id": 985033833115512800,
    "created_at": "2018-04-14 05:55:41",
    "text": "@ArchaVt @saradvorakova Pán také míří bojovat do Sýrie? Tedy, až dokouří doutníček a dopije šampíčko, že :-D"
  },
  {
    "id": 985031335428415500,
    "created_at": "2018-04-14 05:45:46",
    "text": "@saradvorakova Ztrácíte čas. Nedělejte hrdinku na Twitteru. Syrské bojiště Vás očekává."
  },
  {
    "id": 985031052405215200,
    "created_at": "2018-04-14 05:44:38",
    "text": "RT @CUTIzpravy: Nadšení čeští novináři, neziskovkáři a pražskokavárníci prý už brzy vyrazí do první linie v Sýrii. Stále ale hledají velite…"
  },
  {
    "id": 985029397890691100,
    "created_at": "2018-04-14 05:38:04",
    "text": "@saradvorakova Přestaňte tady planě žvanit a přejděte k činu. Zbraň do ruky a jděte bojovat do Sýrie!"
  },
  {
    "id": 985026041340203000,
    "created_at": "2018-04-14 05:24:43",
    "text": "Vojenské řešení je vždy až to poslední."
  },
  {
    "id": 984829608511135700,
    "created_at": "2018-04-13 16:24:10",
    "text": "Izrael oslaví svůj vznik ve Španělském sále pod záštitou Zemana. Je to poprvé v historii, říká Hrad: https://t.co/9Y6g5TzfEB"
  },
  {
    "id": 984776146758795300,
    "created_at": "2018-04-13 12:51:44",
    "text": "RT @rudolf_jindrak: Setkání s @USAmbPrague. Hovořili jsme o záležitostech minulých i budoucích. Partnerství mezi 🇺🇸 a 🇨🇿 je naprosto zásadn…"
  },
  {
    "id": 984762342327144400,
    "created_at": "2018-04-13 11:56:53",
    "text": "Pan prezident přijme na Hradě ve čtvrtek dne 19. dubna 2018 ve 14:00 hodin na jeho žádost předsedu ČSSD Jana Hamáčka."
  },
  {
    "id": 984742147516780500,
    "created_at": "2018-04-13 10:36:38",
    "text": "RT @ErikBest: Friday Edition: Staronová Drahošova vláda.\nhttps://t.co/GOnKnbFDDw"
  },
  {
    "id": 984733643120750600,
    "created_at": "2018-04-13 10:02:50",
    "text": "Pan prezident přijme na zámku v Lánech v neděli dne 15. dubna 2018 v 15:00 hodin na jeho žádost premiéra Andreje Babiše."
  },
  {
    "id": 984706391976923100,
    "created_at": "2018-04-13 08:14:33",
    "text": "Pan prezident vystoupí v neděli 15. dubna 2018 v 18.00 v pořadu Prezidentský Pressklub na Frekvenci 1. Rozhovor bude vysílán živě z Lán."
  },
  {
    "id": 984550870129004500,
    "created_at": "2018-04-12 21:56:34",
    "text": "https://t.co/QBlHfG2vSf"
  },
  {
    "id": 984538462660546600,
    "created_at": "2018-04-12 21:07:15",
    "text": "Prezident republiky, 22. března 2018, Mladá fronta DNES: https://t.co/gV8AeNYRHK"
  },
  {
    "id": 984536214001868800,
    "created_at": "2018-04-12 20:58:19",
    "text": "RT @AmbMeron: The Pinkas Synagogue, from 1530, is a memorial to the 80,000 Jewish Czechs killed in Shoah and to 153 Jewish communities in C…"
  },
  {
    "id": 984523709066235900,
    "created_at": "2018-04-12 20:08:38",
    "text": "Ovčáček: Prezident je jen moderátorem debat, odpovědnost za vyjednávání o vládě nese Babiš https://t.co/pe3CKXplrd"
  },
  {
    "id": 984498587747934200,
    "created_at": "2018-04-12 18:28:49",
    "text": "2/2 Prezident republiky je moderátorem debat zastupců parlamentních stran."
  },
  {
    "id": 984498567611023400,
    "created_at": "2018-04-12 18:28:44",
    "text": "1/2 Za rozhodovaní o vyjednávacím postupu nesl, nese a ponese plnou odpovědnost pan premiér."
  },
  {
    "id": 984485967108231200,
    "created_at": "2018-04-12 17:38:40",
    "text": "@LenkaMey1 Děkuji :-)"
  },
  {
    "id": 984472609915068400,
    "created_at": "2018-04-12 16:45:35",
    "text": "RT @realDonaldTrump: On Yom HaShoah we remember the six million Jews slaughtered in the Holocaust. With each passing year, our duty to reme…"
  },
  {
    "id": 984459229737246700,
    "created_at": "2018-04-12 15:52:25",
    "text": "Ovčáček a Bartoš proti sobě: Proč nejsou Piráti ve vládě? Může Zeman mluvit sprostě? Je KSČM totalitní? https://t.co/evSVrHUG52"
  },
  {
    "id": 984458183447076900,
    "created_at": "2018-04-12 15:48:15",
    "text": "Pan prezident přijal dnes na zámku v Lánech na jeho žádost Tomio Okamuru, předsedu hnutí Svoboda a přímá demokracie."
  },
  {
    "id": 984379862512267300,
    "created_at": "2018-04-12 10:37:02",
    "text": "Krásný den, přátelé! https://t.co/It1TijSppV"
  },
  {
    "id": 984376550232608800,
    "created_at": "2018-04-12 10:23:53",
    "text": "RT @realDonaldTrump: Never said when an attack on Syria would take place. Could be very soon or not so soon at all! In any event, the Unite…"
  },
  {
    "id": 984373587267276800,
    "created_at": "2018-04-12 10:12:06",
    "text": "Po nátačení rozhovoru pro TV Barrandov se našel čas na krátké posezení na balkonu zámku v Lánech. Je nádherně! https://t.co/xVNq65XHOc"
  },
  {
    "id": 984360501915344900,
    "created_at": "2018-04-12 09:20:06",
    "text": "RT @IsraeliPM: Prime Minister Benjamin Netanyahu lays a memorial wreath at the Holocaust and Heroism Remembrance Day ceremony at @yadvashem…"
  },
  {
    "id": 984358738332209200,
    "created_at": "2018-04-12 09:13:06",
    "text": "Lány, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/9pSrwoenK1"
  },
  {
    "id": 984353821785837600,
    "created_at": "2018-04-12 08:53:34",
    "text": "@vanruzi Vyhrožování druhorepublikové patologické sedliny na mne neplatí."
  },
  {
    "id": 984352908606099500,
    "created_at": "2018-04-12 08:49:56",
    "text": "@RSmekalRS Ale vůbec ne. https://t.co/NRzpPiKj36"
  },
  {
    "id": 984339394864787500,
    "created_at": "2018-04-12 07:56:14",
    "text": "Když se novináři slastně olizují při představě války. Co z nich vytvořit batalion a poslat je do první linie? https://t.co/EGXfIBpx4S"
  },
  {
    "id": 984311993422237700,
    "created_at": "2018-04-12 06:07:21",
    "text": "Plán schůzek na Hradě. Úterý 14:00 předseda ODS P. Fiala, 15:00 předseda Pirátů I. Bartoš. Středa 15:00 předseda KDU-ČSL P. Bělobrádek."
  },
  {
    "id": 984145346162028500,
    "created_at": "2018-04-11 19:05:09",
    "text": "RT @IsraeliPM: Prime Minister Benjamin Netanyahu spoke this evening by telephone with Russian President Vladimir Putin. \nThe Prime Minister…"
  },
  {
    "id": 984134814436651000,
    "created_at": "2018-04-11 18:23:18",
    "text": "RT @netanyahu: הצטרפו לדבריי כעת בטקס הזיכרון ביד ושם: https://t.co/kNLIIQSGRG"
  },
  {
    "id": 984126169107791900,
    "created_at": "2018-04-11 17:48:57",
    "text": "RT @strakovka: Premiér Babiš se setkal s novým slovenským premiérem Pellegrinim. „Je jasné, že právě v roce, kdy si připomínáme 100. výročí…"
  },
  {
    "id": 984112891317059600,
    "created_at": "2018-04-11 16:56:11",
    "text": "RT @rudolf_jindrak: Čerstvý rozhovor pro @CRozhlas. Témata: žhavá (Sýrie, Nikulin, Maďarsko...), atmosfera: příjemná. Díky za pozvání! http…"
  },
  {
    "id": 984105110883192800,
    "created_at": "2018-04-11 16:25:16",
    "text": "RT @CUTIzpravy: Ráno moudřejší večera. Jsou ale situace, kdy toto pořekadlo neplatí."
  },
  {
    "id": 984098666624487400,
    "created_at": "2018-04-11 15:59:40",
    "text": "Pozice pana prezidenta k syrské krizi je jasná. Vyjednávat a vyjednávat. Válečné řešení je vždy až to poslední: https://t.co/SO9ERsLSp0"
  },
  {
    "id": 984089373586182100,
    "created_at": "2018-04-11 15:22:44",
    "text": "Pan prezident dnes přijal v Lánech na jejich žádost předsedu KSČM Vojtěcha Filipa a poslance KSČM Alexandera Černého."
  },
  {
    "id": 984076607118807000,
    "created_at": "2018-04-11 14:32:01",
    "text": "RT @TBarrandov: Další vypečený díl Kauz Jaromíra Soukupa už dnes ve 21:25! \nZačneme kauzou solárních baronů, kterou jsme začali již minule,…"
  },
  {
    "id": 984076494082334700,
    "created_at": "2018-04-11 14:31:34",
    "text": "RT @BaraPeterova: Slovenského premiéra Petera Pellegriniho doslova oslnil výhled na Prahu z Kramářovy vily ☀ https://t.co/WA2JBmArPd"
  },
  {
    "id": 984061195513749500,
    "created_at": "2018-04-11 13:30:46",
    "text": "RT @strakovka: Premiér Babiš vyzdvihl kromě nadstandardních bilaterálních vztahů také to, že je Slovensko naším klíčovým partnerem v EU. Ak…"
  },
  {
    "id": 984056793730048000,
    "created_at": "2018-04-11 13:13:17",
    "text": "RT @realDonaldTrump: Much of the bad blood with Russia is caused by the Fake &amp; Corrupt Russia Investigation, headed up by the all Democrat…"
  },
  {
    "id": 984028177495478300,
    "created_at": "2018-04-11 11:19:34",
    "text": "RT @strakovka: Se svým slovenským kolegou Peterem Pellegrinim řeší @AndrejBabis spolupráci v otázce přeshraničního dopravního spojení, v ob…"
  },
  {
    "id": 984013769629151200,
    "created_at": "2018-04-11 10:22:19",
    "text": "RT @IsraelinCZ: #Izrael - 70 let existence, nespočet úspěchů! https://t.co/RTWKQCY3za"
  },
  {
    "id": 984013637793865700,
    "created_at": "2018-04-11 10:21:47",
    "text": "@MichalKubal Prostě jste ukázal, jak to vypadá, když je někdo “nezávisle veřejnoprávní”. Děkuji!"
  },
  {
    "id": 984009159703236600,
    "created_at": "2018-04-11 10:04:00",
    "text": "@MichalKubal Myslím, že to od Vás je rozumné. Ošklivě jste se do toho zamotal."
  },
  {
    "id": 984007410292547600,
    "created_at": "2018-04-11 09:57:03",
    "text": "@MichalKubal Jsem vděčný, že každým svým tweetem usvědčujete ČST Praha z “nestrannosti”. Schován za přízvisko “twee… https://t.co/isc9n0nQUH"
  },
  {
    "id": 983998335978786800,
    "created_at": "2018-04-11 09:20:59",
    "text": "@MichalKubal Jak se v ČST Praha vypořádáte s faktem, že drtivá většina lidí v politice používá soukromý Twitter? Př… https://t.co/jSzLFGzKW5"
  },
  {
    "id": 983997616949252100,
    "created_at": "2018-04-11 09:18:08",
    "text": "@MichalKubal Problém je, že novináři si hrají na nezávislé a přitom na Twitteru šíří nenávist vůči prezidentovi a p… https://t.co/5wv8BpKqmF"
  },
  {
    "id": 983995259909820400,
    "created_at": "2018-04-11 09:08:46",
    "text": "Baví mě “nezávislí” novináři, prskající na Twitteru na prezidenta a premiéra. Zbabělci schovaní za “tweety nevyjadřují stanovisko redakce”."
  },
  {
    "id": 983993857372229600,
    "created_at": "2018-04-11 09:03:11",
    "text": "@timichal Chápu Vás. Vždyť jste pro Bakalu makal. Braňte svého miliardáře!"
  },
  {
    "id": 983988465191841800,
    "created_at": "2018-04-11 08:41:46",
    "text": "ČST Praha v akci a Bakalovy HN hned šíří dezinformaci. Citoval jsem poradce a autora projevů Margaret Thatcherové J… https://t.co/F5On4Qg8Fs"
  },
  {
    "id": 983978631801331700,
    "created_at": "2018-04-11 08:02:41",
    "text": "Dívka organizuje protesty proti Babišovi, studium jí platí Bakala: https://t.co/GZNU6Ar5MV"
  },
  {
    "id": 983952004866367500,
    "created_at": "2018-04-11 06:16:53",
    "text": "RT @SlechtovaKarla: Vláda schválila návrh na působení českých vojáků v zahraničních misích ve 2. polovině 2018 a letech 2019-20. Chceme pln…"
  },
  {
    "id": 983951964928200700,
    "created_at": "2018-04-11 06:16:44",
    "text": "RT @AmbMeron: This is shocking https://t.co/gvtCRydmGM"
  },
  {
    "id": 983951708387672000,
    "created_at": "2018-04-11 06:15:42",
    "text": "RT @SlechtovaKarla: Pro vojáky je nasazení v misích nenahraditelnou zkušeností. Podle našeho návrhu by se počty v misích v Iráku, Afghánist…"
  },
  {
    "id": 983775033901363200,
    "created_at": "2018-04-10 18:33:40",
    "text": "RT @realDonaldTrump: Very thankful for President Xi of China’s kind words on tariffs and automobile barriers...also, his enlightenment on i…"
  },
  {
    "id": 983768311891746800,
    "created_at": "2018-04-10 18:06:57",
    "text": "Pan prezident přijme v Lánech ve středu 11.4. v 16:00 předsedu KSČM Vojtěcha Filipa a ve čtvrtek 12.4. v 16:00 předsedu SPD Tomio Okamuru."
  },
  {
    "id": 983768063215571000,
    "created_at": "2018-04-10 18:05:58",
    "text": "Pan prezident požádal pana premiéra, aby na Evropské radě hlasoval proti Dublinu IV. Pan premiér to panu prezidentovi slíbil."
  },
  {
    "id": 983738231459115000,
    "created_at": "2018-04-10 16:07:26",
    "text": "Mimořádně důležitá schůzka zahájena! Pan prezident přivítal v Lánech premiéra Andreje Babiše. https://t.co/bmBovI6BIN"
  },
  {
    "id": 983718772728123400,
    "created_at": "2018-04-10 14:50:06",
    "text": "Nádherné jaro v Lánech! V 18:00 zde pan prezident přivítá pana premiéra. https://t.co/s3TsYKGVAk"
  },
  {
    "id": 983706234057646100,
    "created_at": "2018-04-10 14:00:17",
    "text": "Prezident republiky zaslal kondolenci indickému prezidentovi: https://t.co/IrLxjivWQT"
  },
  {
    "id": 983696405582831600,
    "created_at": "2018-04-10 13:21:13",
    "text": "Super dárek od @TMBKOFFICIAL Děkuji! https://t.co/nxeYXBL0Ha"
  },
  {
    "id": 983679180113170400,
    "created_at": "2018-04-10 12:12:47",
    "text": "Taková pocta! https://t.co/9aBMNb1DJL"
  },
  {
    "id": 983674078572830700,
    "created_at": "2018-04-10 11:52:30",
    "text": "RT @CUTIzpravy: Trochu mi to připomíná časy Rudého práva a konstruktivní kritiku průběhu manifestace na 1. máje! https://t.co/UoU5CVzf6s"
  },
  {
    "id": 983672590114934800,
    "created_at": "2018-04-10 11:46:35",
    "text": "Ovčáček zúčtoval s demonstranty: Dělali ostudu, je to debakl. Bylo to setkání neúspěšných politiků https://t.co/o97c3ouVxl"
  },
  {
    "id": 983663793627717600,
    "created_at": "2018-04-10 11:11:38",
    "text": "RT @realDonaldTrump: A TOTAL WITCH HUNT!!!"
  },
  {
    "id": 983663785486504000,
    "created_at": "2018-04-10 11:11:36",
    "text": "RT @realDonaldTrump: Attorney–client privilege is dead!"
  },
  {
    "id": 983661122531348500,
    "created_at": "2018-04-10 11:01:01",
    "text": "@jindrichsidlo Jindřichu, Vy jste to nečetl. Tak šup! Chápu, že se mlsně olizujete, jak Vám to bublina tady lajkuje… https://t.co/673VcjynBf"
  },
  {
    "id": 983654903091523600,
    "created_at": "2018-04-10 10:36:18",
    "text": "@jindrichsidlo Jindřichu, OK. Beru tedy na vědomí, že Vám názory poradce a autora projevů Margaret Thatcherové Johna O’Sullivana “nevoní”."
  },
  {
    "id": 983654003455287300,
    "created_at": "2018-04-10 10:32:44",
    "text": "@PJursik To je fašismus druhorepublikového střihu."
  },
  {
    "id": 983653680787451900,
    "created_at": "2018-04-10 10:31:27",
    "text": "@zbkaras77 Milion chvilek nenávisti v praxi s podporou TOP 09."
  },
  {
    "id": 983651206445916200,
    "created_at": "2018-04-10 10:21:37",
    "text": "Milion chvilek nenávisti v praxi. Nenávist, sprostota a pohrdání více jak 2 000 000 občanů ČR. Tohle nemá s demokra… https://t.co/obkP5QdKXu"
  },
  {
    "id": 983631720170836000,
    "created_at": "2018-04-10 09:04:11",
    "text": "Koho proboha ty neziskovky reprezentují? Vůbec nikoho, případně své sponzory, jimiž jsou často velké firmy: https://t.co/rhVwNQ96BS"
  },
  {
    "id": 983439388007841800,
    "created_at": "2018-04-09 20:19:56",
    "text": "@FrantaPlzen Roztomilé. I Jirka Pospíšil dnes manifestoval. Bylo to takové setkání neúspěšných politiků se zbytkem příznivců."
  },
  {
    "id": 983428266626347000,
    "created_at": "2018-04-09 19:35:44",
    "text": "To snad ta Dvořákova parta nemůže myslet vážně. Volební vysílání ČT z Maďarska opět uvedlo některé diváky v úžas: https://t.co/fe6ktFneLE"
  },
  {
    "id": 983426316778246100,
    "created_at": "2018-04-09 19:27:59",
    "text": "Hezká tečka za dnešním Milionem chvilek nenávisti. TOP 09 chválí TOP 09 za organizaci manifestací. https://t.co/hEmd1Rgajb"
  },
  {
    "id": 983423367750541300,
    "created_at": "2018-04-09 19:16:16",
    "text": "Milion chvilek nenávisti skončil, jak už je tradicí u akcí tohoto typu, děláním ostudy před Pražským hradem."
  },
  {
    "id": 983403551689990100,
    "created_at": "2018-04-09 17:57:32",
    "text": "RT @CUTIzpravy: Nechápu, proč novináři schůzkám stranických buněk TOP 09 říkají demonstrace."
  },
  {
    "id": 983401332764823600,
    "created_at": "2018-04-09 17:48:43",
    "text": "RT @strakovka: Vláda navštívila Královéhradecký kraj. „Máme jasnou představu, co kraj trápí. Zaujala mě podpora vysokého školství v Hradci…"
  },
  {
    "id": 983396361155629000,
    "created_at": "2018-04-09 17:28:57",
    "text": "Klasika!\n\nManifestace v Plzni: svolavatel O. Ženíšek z TOP 09.\n\nManifestace v Č. Budějovicích: svolavatel šéf místní TOP 09 T. Trantina."
  },
  {
    "id": 983393892723773400,
    "created_at": "2018-04-09 17:19:09",
    "text": "Čísla pro dnešní večer:\n\n2 853 390\n\n1 150 113"
  },
  {
    "id": 983369953880535000,
    "created_at": "2018-04-09 15:44:01",
    "text": "RT @netanyahu: I spoke with Hungarian Prime Minister Viktor Orban, congratulated him on his election victory, and invited him to visit Isra…"
  },
  {
    "id": 983369589663916000,
    "created_at": "2018-04-09 15:42:34",
    "text": "Prezidentský Pressklub na Frekvenci 1: Živě z Lán v neděli 15.4.2018 od 18:00: https://t.co/q6ZiHpPxZ9"
  },
  {
    "id": 983346869832122400,
    "created_at": "2018-04-09 14:12:18",
    "text": "Zeman s Babišem popřáli Orbánovi k vítězství. Těší se na spolupráci: https://t.co/KDV1K303t6"
  },
  {
    "id": 983318557542043600,
    "created_at": "2018-04-09 12:19:47",
    "text": "Pan prezident blahopřál V. Orbánovi. Jednoznačné vítězství je důkazem podpory, jíž se těšíte ze strany svého národa: https://t.co/xsWCMbY4w6"
  },
  {
    "id": 983289383674576900,
    "created_at": "2018-04-09 10:23:52",
    "text": "RT @VaclavKlaus_ml: Bravo!\nhttps://t.co/hmRy62gYBE"
  },
  {
    "id": 983262914529423400,
    "created_at": "2018-04-09 08:38:41",
    "text": "RT @CUTIzpravy: “Analytici” a mainstreamoví novináři opět s gustem vydávali svá niterná přání za realitu. A pak se diví, že jim lidé přestá…"
  },
  {
    "id": 983242245167026200,
    "created_at": "2018-04-09 07:16:33",
    "text": "RT @AndrejBabis: Gratulálok Orbán Viktornak meghatározó győzelméhez. Örülök az új magyar kormánnyal való együttműködesünkre, a V4 és az EU…"
  },
  {
    "id": 983242237000798200,
    "created_at": "2018-04-09 07:16:31",
    "text": "RT @AndrejBabis: Gratuluji Viktorovi Orbánovi k jeho přesvědčivému vítězství ve včerejších volbách. Těším se na další spolupráci s budoucí…"
  },
  {
    "id": 983234054567931900,
    "created_at": "2018-04-09 06:44:00",
    "text": "Velká gratulace Viktoru Orbánovi k vítězství! Skvělá zpráva pro Maďarsko i EU. Je to další porážka odlidštěné politiky a nenávistných médií."
  },
  {
    "id": 983231986570547200,
    "created_at": "2018-04-09 06:35:47",
    "text": "Je to pár dnů, co jsme s panem prezidentem debatovali o skvělých filmech J. Herze, jako jsou Petrolejové lampy. Čest památce velkého umělce!"
  },
  {
    "id": 983065188353085400,
    "created_at": "2018-04-08 19:33:00",
    "text": "RT @jirizimola: Nejspíš jsem se neobratně vyjádřil, a to způsobem, který mohl vzbudit dojem, že pan prezident doporučil ČSSD odmítnout nabí…"
  },
  {
    "id": 983044092430110700,
    "created_at": "2018-04-08 18:09:10",
    "text": "Prezident republiky konstatuje, že žádné takové nedoporučující stanovisko k nabídce hnutí ANO představitelům ČSSD n… https://t.co/Ub9Af2Tsfe"
  },
  {
    "id": 982902084189204500,
    "created_at": "2018-04-08 08:44:52",
    "text": "RT @AmbMeron: A new stamp to celebrate 70 years for the State of Israel 🇮🇱  🎊 (thx @talschneider for posting) https://t.co/Du3wcNzr6n"
  },
  {
    "id": 982879905854705700,
    "created_at": "2018-04-08 07:16:45",
    "text": "Považuji za slušné, že své stanovisko k aktuálnímu politickému dění sdělím nejdříve panu premiérovi: https://t.co/irzvBXnFzf"
  },
  {
    "id": 982651202566590500,
    "created_at": "2018-04-07 16:07:58",
    "text": "RT @strakovka: Kramářova vila, sídlo prvního československého premiéra, byla otevřena veřejnosti. \"Poloha vily je úžasná. Je tu asi nejkrás…"
  },
  {
    "id": 982651019241967600,
    "created_at": "2018-04-07 16:07:14",
    "text": "Prezident republiky zaslal kondolenční telegram generální guvernérce Kanady: https://t.co/iDrREHXWZ7"
  },
  {
    "id": 982605769127419900,
    "created_at": "2018-04-07 13:07:25",
    "text": "Zeman: Přežil jsem pokus o pražský majdan. Dělali to Soros, Šabatová? Toť otázka https://t.co/heUqYFucXY"
  },
  {
    "id": 982604701379317800,
    "created_at": "2018-04-07 13:03:11",
    "text": "RT @rudolf_jindrak: My deepest condolences to families of the young players who died in 🇨🇦 &amp; to the 🇨🇦 people. The whole Czech hockey natio…"
  },
  {
    "id": 982312346734514200,
    "created_at": "2018-04-06 17:41:28",
    "text": "Pan prezident přijme předsedu vlády Andreje Babiše na zámku v Lánech v úterý 10. dubna 2018 v 18:00 hodin."
  },
  {
    "id": 982219775647428600,
    "created_at": "2018-04-06 11:33:37",
    "text": "RT @USEmbassyPrague: #Českoamerickéstoletí 🇨🇿🇺🇲: 6. dubna 1941 zazněl New Yorkem první sborový koncert v češtině! Československý pěvecký sb…"
  },
  {
    "id": 982205808954884100,
    "created_at": "2018-04-06 10:38:08",
    "text": "Valaška. Dárek na rozloučenou od starosty Štrbského Plesa. https://t.co/nmSX9UYqUr"
  },
  {
    "id": 982187568698605600,
    "created_at": "2018-04-06 09:25:39",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 5. dubna 2018, 20:15, TV Barrandov: https://t.co/kamPTKbVus"
  },
  {
    "id": 982168894398857200,
    "created_at": "2018-04-06 08:11:26",
    "text": "Své stanovisko k aktuálnímu politickému dění pan prezident nejdříve sdělí panu premiérovi."
  },
  {
    "id": 981944437671592000,
    "created_at": "2018-04-05 17:19:32",
    "text": "@vendyzerza Máte pravdu. Andrej Kiska je úžasným přítelem pana prezidenta."
  },
  {
    "id": 981921317896278000,
    "created_at": "2018-04-05 15:47:40",
    "text": "RT @dominikduka: Vážení přátelé, mladí lidé a rodiny - je důležité, abychom o sobě dali tuto sobotu  vědět, že jsme zde a že čekáme porozum…"
  },
  {
    "id": 981914375308103700,
    "created_at": "2018-04-05 15:20:04",
    "text": "Pan prezident se ve Štrbském Plese setkal s předsedou vlády Slovenské republiky Peterem Pellegrinim. https://t.co/mAIatNULR4"
  },
  {
    "id": 981906419048960000,
    "created_at": "2018-04-05 14:48:27",
    "text": "Překvapení pro pana prezidenta. Na Slovensko, do Štrbského Plesa, dorazila jeho dcera Kačenka. https://t.co/RppxxysYbb"
  },
  {
    "id": 981896856912433200,
    "created_at": "2018-04-05 14:10:28",
    "text": "@MichalKubal Fakta nemůžete popřít. Nikulin může být zneužit proti prezidentovi USA. To fakt neokecáte."
  },
  {
    "id": 981891789127897100,
    "created_at": "2018-04-05 13:50:19",
    "text": "RT @WhiteHouse: President Trump is authorizing the deployment of the National Guard to support the Border Patrol in its mission to protect…"
  },
  {
    "id": 981889258721042400,
    "created_at": "2018-04-05 13:40:16",
    "text": "@PlankaTomas Kuk: Říjen 2016. Předseda Sněmovny reprezentantů Paul Ryan se distancoval od Donalda Trumpa: https://t.co/CWkDWLlMqU"
  },
  {
    "id": 981888971956523000,
    "created_at": "2018-04-05 13:39:08",
    "text": "@MichalKubal Kuk: Říjen 2016. Předseda Sněmovny reprezentantů Paul Ryan se distancoval od Donalda Trumpa: https://t.co/CWkDWLlMqU"
  },
  {
    "id": 981888071313522700,
    "created_at": "2018-04-05 13:35:33",
    "text": "Říjen 2016. Předseda Sněmovny reprezentantů Paul Ryan se distancoval od Donalda Trumpa: https://t.co/CWkDWLlMqU"
  },
  {
    "id": 981887745781129200,
    "created_at": "2018-04-05 13:34:15",
    "text": "@FrantaPlzen Kuk: Předseda Sněmovny reprezentantů Paul Ryan se distancoval od Donalda Trumpa https://t.co/CWkDWLlMqU"
  },
  {
    "id": 981880978552565800,
    "created_at": "2018-04-05 13:07:22",
    "text": "Projížďka kočárem kolem Štrbského plesa a přátelské posezení v kolibě. https://t.co/8qKsDaIJin"
  },
  {
    "id": 981880362849583100,
    "created_at": "2018-04-05 13:04:55",
    "text": "Prezident republiky Miloš Zeman vystoupí dnes ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 981868200148242400,
    "created_at": "2018-04-05 12:16:35",
    "text": "Statement by the President of the Czech Republic on the Nikulin case: https://t.co/8sioxxbewP"
  },
  {
    "id": 981857603100794900,
    "created_at": "2018-04-05 11:34:29",
    "text": "Paní Ivana Zemanová dnes zavítala na Lomnický štít. https://t.co/VcltXRQPmV"
  },
  {
    "id": 981856636171153400,
    "created_at": "2018-04-05 11:30:38",
    "text": "Podporujeme demokraticky zvoleného prezidenta USA. Nebudeme podporovat pokusy o rozvrat situace v USA, ze kterých bude těžit Moskva."
  },
  {
    "id": 981842132481830900,
    "created_at": "2018-04-05 10:33:00",
    "text": "Vyjádření prezidenta republiky k případu Nikulin: https://t.co/F7sl7YUR4Z"
  },
  {
    "id": 981834251518857200,
    "created_at": "2018-04-05 10:01:41",
    "text": "Jsem tady rád a cítím se tady jako doma, uvedl pan prezident na tiskové konferenci na Slovensku."
  },
  {
    "id": 981833307032903700,
    "created_at": "2018-04-05 09:57:56",
    "text": "Právě teď. Slovensko, Vysoké Tatry, Štrbské Pleso. Tisková konference českého a slovenského prezidenta. https://t.co/0Pyvep9dpn"
  },
  {
    "id": 981831079370911700,
    "created_at": "2018-04-05 09:49:05",
    "text": "Je to skvělé představení! Reflex: https://t.co/BvbvTmxeJp"
  },
  {
    "id": 981818499059408900,
    "created_at": "2018-04-05 08:59:06",
    "text": "Slovensko, Vysoké Tatry. Andrej Kiska a Miloš Zeman. Přátelské přivítání. https://t.co/ZAjLRyuLnA"
  },
  {
    "id": 981808248616570900,
    "created_at": "2018-04-05 08:18:22",
    "text": "Václav Klaus v MfD velmi přesně popsal, o co jde reálně v případu Nikulin. USA jsme rozhodně nepomohli: https://t.co/DVLGjGt0hr"
  },
  {
    "id": 981799990484807700,
    "created_at": "2018-04-05 07:45:33",
    "text": "RT @rudolf_jindrak: Hezký pozdrav z Tater! Těšíme se na naše slovenské přátele. https://t.co/lx8dgtqVAE"
  },
  {
    "id": 981640362216382500,
    "created_at": "2018-04-04 21:11:15",
    "text": "Hrdé spojenectví si žádá hrdé přátele. Před sto lety jsme to společně dokázali. https://t.co/JMEf7iT2BS"
  },
  {
    "id": 981627431877521400,
    "created_at": "2018-04-04 20:19:52",
    "text": "RT @rudolf_jindrak: Pro politického vězně I. Kozlovského není M. Zeman „ruským agentem“, ale člověkem, který se zajímal o jeho osud a přisp…"
  },
  {
    "id": 981621322701819900,
    "created_at": "2018-04-04 19:55:35",
    "text": "RT @strakovka: O víkendu 7. a 8. dubna můžete letos poprvé navštívit Vilu Benešových v Sezimově Ústí. Úřad vlády a @NarodniMuzeum zpřístupn…"
  },
  {
    "id": 981621289197678600,
    "created_at": "2018-04-04 19:55:27",
    "text": "RT @USEmbassyPrague: Jaké bylo komunistické Československo 80. let očima amerického velvyslance? Dozvíte se v diskusi s bývalým velvyslance…"
  },
  {
    "id": 981582971756073000,
    "created_at": "2018-04-04 17:23:12",
    "text": "Ve Vysokých Tatrách kolem Štrbského plesa je opravdu nádherně. Důvod ke krátké procházce! https://t.co/S8PmNVM8lZ"
  },
  {
    "id": 981578762713292800,
    "created_at": "2018-04-04 17:06:28",
    "text": "Přátelství a spojenectví s USA je pro Českou republiku mimořádně důležité. Klíčem je upřímný dialog a vzájemný resp… https://t.co/wkp81GuVsy"
  },
  {
    "id": 981576586561507300,
    "created_at": "2018-04-04 16:57:49",
    "text": "Je nepřijatelné, aby o tak zásadním kroku, který se týká našich přátel v USA, byl první informován Bakalův Respekt. https://t.co/LXhCb3Ba57"
  },
  {
    "id": 981569127058985000,
    "created_at": "2018-04-04 16:28:11",
    "text": "Návštěva Slovenska zahájena. Přivítání na letišti Poprad-Tatry. Jaký program pana prezidenta čeká? Čtěte zde:… https://t.co/aVXcAQxGP6"
  },
  {
    "id": 981551988952494100,
    "created_at": "2018-04-04 15:20:05",
    "text": "Ještě před odletem do Popradu pan prezident popřál své paní k dnešnímu svátku. https://t.co/tKGzrDBl0W"
  },
  {
    "id": 981550405523066900,
    "created_at": "2018-04-04 15:13:47",
    "text": "https://t.co/5rdu81fPCZ"
  },
  {
    "id": 981549287149592600,
    "created_at": "2018-04-04 15:09:21",
    "text": "Právě teď. Letisko Poprad-Tatry. https://t.co/mQcqTTX0Nn"
  },
  {
    "id": 981497642290204700,
    "created_at": "2018-04-04 11:44:07",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte ve čtvrtek 5.4. ve 20:15 na TV Barrandov! https://t.co/vdXlEoL0Tc"
  },
  {
    "id": 981478796783177700,
    "created_at": "2018-04-04 10:29:14",
    "text": "Pan prezident dnes přijal na Hradě na jejich žádost předsedu ČSSD Jana Hamáčka a statutárního místopředsedu ČSSD Jiřího Zimolu."
  },
  {
    "id": 981470300884865000,
    "created_at": "2018-04-04 09:55:29",
    "text": "RT @netanyahu: I spoke yesterday with President Donald Trump about regional developments and Iran. I thanked President Trump for his commit…"
  },
  {
    "id": 981438568693452800,
    "created_at": "2018-04-04 07:49:23",
    "text": "RT @USNATO: #OTD in 1949, 🇧🇪🇨🇦🇩🇰🇫🇷🇮🇸🇮🇹🇱🇺🇳🇱🇳🇴🇵🇹🇬🇧🇺🇸 signed the Washington Treaty, thereby creating the North Atlantic Treaty Organization. S…"
  },
  {
    "id": 981291282499801100,
    "created_at": "2018-04-03 22:04:07",
    "text": "RT @GovMikeHuckabee: Had a colonoscopy today.  My doctor was actually Russian.  Now THAT is what I call RUSSIAN MEDDLING!  They put me to s…"
  },
  {
    "id": 981218580413939700,
    "created_at": "2018-04-03 17:15:14",
    "text": "@KTweetuje A čo si predstavujete pod takým vyhodili z andragogiky, vojín Kecalín?"
  },
  {
    "id": 981212215708700700,
    "created_at": "2018-04-03 16:49:56",
    "text": "Jedna z nejoblíbenějších fotografií. Pěkná vzpomínka na předvolební New York. 21. září 2016. https://t.co/IVMshOmfti"
  },
  {
    "id": 981208426893201400,
    "created_at": "2018-04-03 16:34:53",
    "text": "@anselmoCZ “Politolog” by to ještě měl rychle vysvětlit v USA! https://t.co/KoRcy9Wp5S"
  },
  {
    "id": 981195062007787500,
    "created_at": "2018-04-03 15:41:47",
    "text": "RT @rudolf_jindrak: 3/3 3. Stojí za tvrzením, že MZ pracuje v ruském zájmu, nějaké konkrétní příklady a důkazy, nebo jde jen o další opakov…"
  },
  {
    "id": 981195049970143200,
    "created_at": "2018-04-03 15:41:44",
    "text": "RT @rudolf_jindrak: 2/3  2. To, na co Hrad především poukazuje v případu Nikulin, není zpochybnění vydání do USA, ale styl, jakým vše bylo…"
  },
  {
    "id": 981195042802094100,
    "created_at": "2018-04-03 15:41:42",
    "text": "RT @rudolf_jindrak: 1/3 Zahraniční výbor Senátu namísto střízlivé zahranicnepoliticke diskuse bohužel také přistoupil na floskule. Ke 3 ods…"
  },
  {
    "id": 981194833204318200,
    "created_at": "2018-04-03 15:40:52",
    "text": "Věta, kterou by se měli páni senátoři naučit. Usnesení přijímat nemusí. https://t.co/uLIRSABIq0"
  },
  {
    "id": 981175792100171800,
    "created_at": "2018-04-03 14:25:12",
    "text": "Moudrá slova, která je nutno si stále připomínat! https://t.co/bguVlaW5e7"
  },
  {
    "id": 981175010730459100,
    "created_at": "2018-04-03 14:22:06",
    "text": "RT @strakovka: Chcete si prohlédnout sídlo prvního československého premiéra, Kramářovu vilu v Praze? Úřad vlády ji pro veřejnost otevře 7.…"
  },
  {
    "id": 981169348185215000,
    "created_at": "2018-04-03 13:59:36",
    "text": "Zbytečné prohlášení senátorů. Prezident republiky dlouhodobě podporuje naše jednoznačné zakotvení v EU a NATO.  https://t.co/kQcn47DiPB"
  },
  {
    "id": 981125114149376000,
    "created_at": "2018-04-03 11:03:50",
    "text": "Pan prezident zítra v 11:00 na Hradě přijme na jejich žádost předsedu ČSSD J. Hamáčka a statutárního místopředsedu ČSSD J. Zimolu."
  },
  {
    "id": 981082220239769600,
    "created_at": "2018-04-03 08:13:23",
    "text": "RT @PanenkaRadim: Byla to reklamní kampaň na propagaci knihy, ne kandidáta. Billboard vypadal stejně jako v roce 2016, tedy v případě první…"
  },
  {
    "id": 981062929708716000,
    "created_at": "2018-04-03 06:56:44",
    "text": "Pan prezident se svojí paní uskuteční ve 4.-6.4.2018 oficiální návštěvu Slovenské republiky. Program naleznete zde: https://t.co/NjsVl0ygjs"
  },
  {
    "id": 981061687280365600,
    "created_at": "2018-04-03 06:51:48",
    "text": "@paulczynski @okundra Odpovídá T. Marjanovič z HN: O Nikulina se teď bude zajímat i speciální vyšetřovatel Mueller,… https://t.co/tmVHk0tGyO"
  },
  {
    "id": 981046482089467900,
    "created_at": "2018-04-03 05:51:22",
    "text": "@MichalKubal Formální věc. T. Marjanovič: O Nikulina se teď bude zajímat i speciální vyšetřovatel Mueller, jenž chc… https://t.co/ynYxOjQpJp"
  },
  {
    "id": 980856669923135500,
    "created_at": "2018-04-02 17:17:08",
    "text": "RT @senrobportman: Great meeting with Ambassador King at @USEmbassyPrague. Appreciate his service and all he is doing to strengthen US-Czec…"
  },
  {
    "id": 980810549192810500,
    "created_at": "2018-04-02 14:13:52",
    "text": "Tohle se bude neobolševikům, kteří si říkají liberálové, tuze moc líbit! https://t.co/Jo4d8GJZJ5"
  },
  {
    "id": 980801280888197100,
    "created_at": "2018-04-02 13:37:02",
    "text": "RT @realDonaldTrump: So funny to watch Fake News Networks, among the most dishonest groups of people I have ever dealt with, criticize Sinc…"
  },
  {
    "id": 980796822414417900,
    "created_at": "2018-04-02 13:19:19",
    "text": "Outlého ouřad se na nakladatelství Olympia pomstil za prohru Jiřího Drahoše. Tomu vždy poskytoval nadstandardní las… https://t.co/N3R34GGkfI"
  },
  {
    "id": 980792787347169300,
    "created_at": "2018-04-02 13:03:17",
    "text": "Přístup tohoto úřadu považuji od počátku za mimořádně podivný a osobně se domnívám, že je politicky motivovaný: https://t.co/2vJ56SHb1A"
  },
  {
    "id": 980763938014023700,
    "created_at": "2018-04-02 11:08:39",
    "text": "Úctu přátel a spojenců nikdy nezískáme lokajským hrbením se a devótní úslužností. https://t.co/Zhiw5dhBkN"
  },
  {
    "id": 980713223178608600,
    "created_at": "2018-04-02 07:47:07",
    "text": "Každý systém, který se bojí názorů lidí a děsí se z jejich volby, se dostává na slepou kolej. A z té už nemusí být… https://t.co/5VpEueGW4t"
  },
  {
    "id": 980490594060591100,
    "created_at": "2018-04-01 17:02:28",
    "text": "Cestu demokracie musíme chránit před vandaly, kteří rozbíjejí její osvětlení. Světlo, to je svoboda slova. Bez ní s… https://t.co/Q9C4EHCbM0"
  },
  {
    "id": 980466659080196100,
    "created_at": "2018-04-01 15:27:22",
    "text": "RT @realDonaldTrump: HAPPY EASTER!"
  },
  {
    "id": 980466445296525300,
    "created_at": "2018-04-01 15:26:31",
    "text": "RT @sahouraxo: In Pictures: Syrians peacefully commemorate the Easter Vigil tonight at the Saint Elias Cathedral in Syria’s Aleppo. \n\nHad A…"
  },
  {
    "id": 980391890586624000,
    "created_at": "2018-04-01 10:30:16",
    "text": "Naši proevropskou skutečnost ohrožuje nová strašlivá zbraň. NARATIV. Fakt! Říká to ministerstvo vnitra: https://t.co/qAFCLeIAEv"
  },
  {
    "id": 980373024812732400,
    "created_at": "2018-04-01 09:15:18",
    "text": "@MelechovAMG @TomasGuinness Takže taky obhajujete antisemitku. Hnus."
  },
  {
    "id": 980369825720565800,
    "created_at": "2018-04-01 09:02:35",
    "text": "@TomasGuinness Svěřte se nám. Jaké to je, když tu obhajujete antisemitku? Cítíte se dobře?"
  },
  {
    "id": 980357081306890200,
    "created_at": "2018-04-01 08:11:56",
    "text": "Přečtěte si můj přispěvek v nejnovějším Newsletteru IVK! Téma: Je regulace internetu útokem na svobodu slova?… https://t.co/fkDwuRJ26F"
  },
  {
    "id": 980353978394431500,
    "created_at": "2018-04-01 07:59:37",
    "text": "@FranzPaprika @jakubzelenka @michalblaha @HlidacStatu @Hospodarky @RESPEKT_CZ Předplacenu máme celou řadu titulů. M… https://t.co/GZnoObDUjb"
  },
  {
    "id": 980341987609112600,
    "created_at": "2018-04-01 07:11:58",
    "text": "RT @dominikduka: Přeji Vám všem opravdovou radost ze vzkříšeného Krista! #Velikonoce 2018 #křesťanství #Ježíš  #Kristus #církev \n\nhttps://t…"
  },
  {
    "id": 980147586979033100,
    "created_at": "2018-03-31 18:19:29",
    "text": "Tma se v světlo promění! https://t.co/UWnd2oyRea"
  },
  {
    "id": 980117972449726500,
    "created_at": "2018-03-31 16:21:49",
    "text": "Ovčáček: Za vydáním Nikulina je snaha získat munici na Trumpa, o spojenectví s USA vůbec nejde https://t.co/EdlVaRf9Yt"
  },
  {
    "id": 980116422591438800,
    "created_at": "2018-03-31 16:15:39",
    "text": "Státnost, to je hrdá suverenita. Státnost, to je odvaha. Státnost, to je úcta k sobě i k druhým. Státnost, to je je… https://t.co/sxOXDoeiw0"
  },
  {
    "id": 980085422754758700,
    "created_at": "2018-03-31 14:12:28",
    "text": "@JochRoman To jsou fakta, pane Jochu. Tvrdá fakta. Tohle je akce proti Trumpovi."
  },
  {
    "id": 980084994059194400,
    "created_at": "2018-03-31 14:10:46",
    "text": "@tapolitikaCZ @jindrichsidlo @ondrej_m @SpeakerRyan @parlamentky_cz Takže už i útoky na ČTK. Nu, tady v té žumpě je možné všechno."
  },
  {
    "id": 980080266839502800,
    "created_at": "2018-03-31 13:51:59",
    "text": "@MelechovAMG @HladovyPes @jindrichsidlo @ondrej_m O mně budou v budoucnu psát, že jsem byl idiot, protože jsem se s… https://t.co/nSyIciYNH2"
  },
  {
    "id": 980079755889389600,
    "created_at": "2018-03-31 13:49:57",
    "text": "@vena_small @etabery @jindrichsidlo Hezky po bolševicku, že. Fakta označíme za “hysterii”. U Respektu nepřekvapuje."
  },
  {
    "id": 980068943816724500,
    "created_at": "2018-03-31 13:06:59",
    "text": "RT @GrandBlond: Lidé, kteří se radují z vydání Nikulina do USA nechápou pozadí - je to boj proti Trumpovi a zároveň proti Rusku. Alespoň mi…"
  },
  {
    "id": 980068857858744300,
    "created_at": "2018-03-31 13:06:39",
    "text": "RT @JiriSmetana3: Za poplacani po ramenou od speakera Ryana na odchodu “obchodník” @AndrejBabis a kavarnik\n@RPelik se postavili do vnitroam…"
  },
  {
    "id": 980057832652451800,
    "created_at": "2018-03-31 12:22:50",
    "text": "@HladovyPes @jindrichsidlo @ondrej_m Jindřichu, je na Vás smutný pohled. Takový jste býval slavný novinář... Před d… https://t.co/5aadjcbBwB"
  },
  {
    "id": 980054703114420200,
    "created_at": "2018-03-31 12:10:24",
    "text": "@PrasmanDunka Ach tak. Rozumím. Pán z velké země přijel na železném oři mezi zaostalé křováky, aby rozdal bižu."
  },
  {
    "id": 980051765818216400,
    "created_at": "2018-03-31 11:58:44",
    "text": "@piratzbrna A Vy si nejprve zjistěte informace, než se hloupě ztrapníte. Hodně hloupě. To je zpráva ČTK. Ju? https://t.co/gJx3BYaHyO"
  },
  {
    "id": 980051261239242800,
    "created_at": "2018-03-31 11:56:43",
    "text": "@ondrej_m @jindrichsidlo Na místním svazáckém sezení řádí Soudružka Hloupost jako divá. Jindřichu, to je ze zprávy… https://t.co/QONpO0FpHP"
  },
  {
    "id": 980034737774448600,
    "created_at": "2018-03-31 10:51:04",
    "text": "@SimonEhrlich @Otakar_Brabec Pane Ehrlichu! Takové sprosté vyjadřování vůči panu Ryanovi si vyprošuji! Okamžitě se panu Ryanovi omluvte!"
  },
  {
    "id": 980034269992153100,
    "created_at": "2018-03-31 10:49:12",
    "text": "@pepabouska Vy také nevíte, že Ryan prostě Trumpa neměl a nemá rád? Fakt to nevíte? Nebo se tak jen tváříte?"
  },
  {
    "id": 980030370937700400,
    "created_at": "2018-03-31 10:33:43",
    "text": "Bílá sobota je předehrou k „noci nocí“ a vzkříšení Krista. Kostely ztichnou: https://t.co/imHzi0ZA4E"
  },
  {
    "id": 980000796396937200,
    "created_at": "2018-03-31 08:36:12",
    "text": "@jindrichsidlo Moc dobře víte, že jde. Prostě jsme do Washingtonu poslali munici na Trumpa. Řečičky o spojenectví jsou jen balast."
  },
  {
    "id": 979999825403039700,
    "created_at": "2018-03-31 08:32:20",
    "text": "@jindrichsidlo Jelikož jsem člověk dobromyslný, zasílám Vám, Jindřichu, něco aktuálního amerického humoru. https://t.co/9t15ojW3CW"
  },
  {
    "id": 979998810670760000,
    "created_at": "2018-03-31 08:28:18",
    "text": "@O_Kusbach Viz: https://t.co/5UYKiLeHHV"
  },
  {
    "id": 979998526024405000,
    "created_at": "2018-03-31 08:27:10",
    "text": "@jindrichsidlo Jindřichu, budete do USA posílat dopis, že žádáte pro Nikulina trest nejvyšší, že žádáte trest smrti… https://t.co/wPDWgEYXZY"
  },
  {
    "id": 979996933967237100,
    "created_at": "2018-03-31 08:20:51",
    "text": "@MartinJansk1 To jsou pouhé citace, pane neinformovaný. Pelikána z https://t.co/JLJSc5Vhjf a Ryana z jeho tweetu."
  },
  {
    "id": 979995730529128400,
    "created_at": "2018-03-31 08:16:04",
    "text": "@tobias1505 Zajímavé nesrovnalosti, že?"
  },
  {
    "id": 979995378547347500,
    "created_at": "2018-03-31 08:14:40",
    "text": "@O_Kusbach Jen se podivujeme, proč ČR přispívá k tažení proti prezidentovi USA Donaldu Trumpovi."
  },
  {
    "id": 979995112590725100,
    "created_at": "2018-03-31 08:13:36",
    "text": "@DlevaP Doučte se Ústavu ČR! Článek 76. Ju?"
  },
  {
    "id": 979994971783737300,
    "created_at": "2018-03-31 08:13:03",
    "text": "@Otakar_Brabec Dost řečí a doučit se Ústavu ČR! Co říká její článek 76?"
  },
  {
    "id": 979994715113304000,
    "created_at": "2018-03-31 08:12:02",
    "text": "@TomBrutar To je úroveň! Nezná Ústavu ČR! Článek 76: Vláda rozhoduje ve sboru. Doučte se to!"
  },
  {
    "id": 979993870074335200,
    "created_at": "2018-03-31 08:08:40",
    "text": "Kauza Nikulin. Pelikán: Rozhodnutí bylo v mé pravomoci. Ryan: Rozhodla česká vláda."
  },
  {
    "id": 979993077061431300,
    "created_at": "2018-03-31 08:05:31",
    "text": "RT @CUTIzpravy: Ach, vzpomínky...\n\nPředseda Sněmovny reprezentantů Paul Ryan se distancoval od Donalda Trumpa: https://t.co/Vy0wy9W3yu"
  },
  {
    "id": 979986289897467900,
    "created_at": "2018-03-31 07:38:33",
    "text": "@okundra Fakta nelze zamlčet: https://t.co/5UYKiLeHHV"
  },
  {
    "id": 979981954073362400,
    "created_at": "2018-03-31 07:21:19",
    "text": "RT @CUTIzpravy: Shrňme si to. Vydání Nikulina není potvrzením spojenectví s USA, ale potvrzením spojenectví s těmi v USA, kteří nenávidí Do…"
  },
  {
    "id": 979846429991755800,
    "created_at": "2018-03-30 22:22:48",
    "text": "RT @CUTIzpravy: Už je to tady. V USA se přemítá o vlivu kauzy Nikulin na vyšetřování, které je zamířeno proti Donaldu Trumpovi. To má být t…"
  },
  {
    "id": 979842121220935700,
    "created_at": "2018-03-30 22:05:40",
    "text": "https://t.co/U2QXqpK6nx"
  },
  {
    "id": 979808625970548700,
    "created_at": "2018-03-30 19:52:35",
    "text": "RT @CUTIzpravy: Politicky nekorektně! https://t.co/sYwXczRaVQ"
  },
  {
    "id": 979768801892950000,
    "created_at": "2018-03-30 17:14:20",
    "text": "Zeman se vysmál Němcové a spol.: Jsou to jen myši, které řvou. Chtějí na sebe upozornit https://t.co/bhvhGfVG8M"
  },
  {
    "id": 979767863673311200,
    "created_at": "2018-03-30 17:10:36",
    "text": "Snad pan ministr spravedlnosti časem vysvětlí, proč byla veřejnost o vydání Nikulina poprvé informována anonymně př… https://t.co/9wvM4Rf8Sx"
  },
  {
    "id": 979763328150134800,
    "created_at": "2018-03-30 16:52:35",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 29. března 2018, 20:15, TV Barrandov: https://t.co/PujgkLzKZf"
  },
  {
    "id": 979744751602815000,
    "created_at": "2018-03-30 15:38:46",
    "text": "RT @WhiteHouse: \"Both of these sacred celebrations remind us that God's love redeems the world... Happy Passover, happy Easter, thank you,…"
  },
  {
    "id": 979719446754455600,
    "created_at": "2018-03-30 13:58:13",
    "text": "RT @AmbMeron: A (Passover) Seder plate, Klausen Synagogue, Jewish Museum in Prague https://t.co/jSxNsGCRuk"
  },
  {
    "id": 979683129291104300,
    "created_at": "2018-03-30 11:33:54",
    "text": "Vysvětlení netradičního postupu v kauze Nikulin veřejnosti je plně věcí a odpovědností vlády a jejích představitelů, nikoliv Hradu."
  },
  {
    "id": 979666953118904300,
    "created_at": "2018-03-30 10:29:37",
    "text": "RT @strakovka: Na Pražském hradě byly oceněny nejlepší záchranářské činy roku 2017. Mezi oceněnými byla například učitelka z mateřské školy…"
  },
  {
    "id": 979659831119368200,
    "created_at": "2018-03-30 10:01:19",
    "text": "Pan prezident přeje všem lidem dobré vůle krásné Velikonoce, které jsou svátky naděje a nového počátku. https://t.co/EIMEFWAIOE"
  },
  {
    "id": 979585941462503400,
    "created_at": "2018-03-30 05:07:42",
    "text": "https://t.co/3o3cdtwvOV"
  },
  {
    "id": 979467726950404100,
    "created_at": "2018-03-29 21:17:58",
    "text": "RT @StandWithUs: Horrific antisemitism. https://t.co/ViHKj0APNa"
  },
  {
    "id": 979467105333665800,
    "created_at": "2018-03-29 21:15:30",
    "text": "Zeman: Na hymnu se nemá sahat, není módním doplňkem https://t.co/guHVzhIeLM"
  },
  {
    "id": 979453609149653000,
    "created_at": "2018-03-29 20:21:52",
    "text": "RT @rudolf_jindrak: Potvrzuji: dlouho připravovaná schůzka (zádná souvislost s údajným \"tlakem Hradu proti vyhoštění diplomatů) byla příjem…"
  },
  {
    "id": 979453342601576400,
    "created_at": "2018-03-29 20:20:48",
    "text": "RT @stropnickym: S panem prezidentem Milošem Zemanem jsme na naší dlouhodobě plánované schůzce prošli otázky zahraniční politiky. Mluvili j…"
  },
  {
    "id": 979400955744739300,
    "created_at": "2018-03-29 16:52:38",
    "text": "@PremyslSousedik Kuk: https://t.co/KfAehHXUrC"
  },
  {
    "id": 979399260373430300,
    "created_at": "2018-03-29 16:45:54",
    "text": "Neonacističtí oblíbenci J. Štětiny (za TOP 09) mají smůlu: Congress bans arms to Ukraine militia linked to neo-Nazis https://t.co/odTuxcQjog"
  },
  {
    "id": 979375297371033600,
    "created_at": "2018-03-29 15:10:41",
    "text": "Prezident republiky Miloš Zeman přijal ve čtvrtek 29. března 2018 na Hradě na jeho žádost ministra zahraničních věcí Martina Stropnického."
  },
  {
    "id": 979351161420558300,
    "created_at": "2018-03-29 13:34:47",
    "text": "Projev prezidenta republiky při slavnostním ceremoniálu udělení ocenění XIX. ročníku Zlatého záchranářského kříže: https://t.co/i5nqHg5qeM"
  },
  {
    "id": 979350700294422500,
    "created_at": "2018-03-29 13:32:57",
    "text": "Pan prezident se dnes na Hradě zúčastnil předávání ocenění “Zlatý záchranářský kříž”. https://t.co/tDuCCEJIHl"
  },
  {
    "id": 979291113407352800,
    "created_at": "2018-03-29 09:36:10",
    "text": "Prezident republiky zaslal gratulaci peruánskému prezidentovi: https://t.co/qDyQY3Bbei"
  },
  {
    "id": 979288037199933400,
    "created_at": "2018-03-29 09:23:57",
    "text": "Jak jsem varoval v DVTV, krok M. Němcové a spol. proti panu prezidentovi zneužije ruská propaganda. A je to tu! https://t.co/4FJpvls04G"
  },
  {
    "id": 979284965404930000,
    "created_at": "2018-03-29 09:11:44",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/YUHMlSun8z"
  },
  {
    "id": 979094555659325400,
    "created_at": "2018-03-28 20:35:07",
    "text": "Jiří Ovčáček účtoval před kamerou: Pražská kavárna na rozdíl od prezidenta nesnese oponentní názor: https://t.co/3N4aqEJDFz"
  },
  {
    "id": 979040906211971100,
    "created_at": "2018-03-28 17:01:56",
    "text": "RT @dominikduka: Nacházíme se uprostřed Svatého týdne. Zamysleme se nad významem Velikonoc, příběhem Ježíše a nad poselství, které nám náš…"
  },
  {
    "id": 979023932606107600,
    "created_at": "2018-03-28 15:54:29",
    "text": "RT @TBarrandov: Na dnešek jsme si připravili po ředitele ČT Petra Dvořáka jedno takové překvapení, dále si povíme něco o úloze plukovníka M…"
  },
  {
    "id": 978974188055728100,
    "created_at": "2018-03-28 12:36:49",
    "text": "Projev prezidenta republiky při setkání se starosty vítězných obcí „Vesnice roku 2017“: https://t.co/EWxZe8MPJH"
  },
  {
    "id": 978972382512762900,
    "created_at": "2018-03-28 12:29:39",
    "text": "Pan prezident přijal na Hradě starosty vítězných obcí soutěže „Vesnice roku 2017“. https://t.co/oild1PcPJK"
  },
  {
    "id": 978907185722875900,
    "created_at": "2018-03-28 08:10:34",
    "text": "Prezident republiky předá Zlatý záchranářský kříž: https://t.co/UuZzxn0xSm"
  },
  {
    "id": 978715703699300400,
    "created_at": "2018-03-27 19:29:42",
    "text": "Přátelství. https://t.co/Lrog2kjAfN"
  },
  {
    "id": 978702683568857100,
    "created_at": "2018-03-27 18:37:57",
    "text": "Mrkněte na to! Celý záznam dnešního rozhovoru pana prezidenta pro https://t.co/9momfIxPkd: https://t.co/5lIxSyZ7z9"
  },
  {
    "id": 978659472846590000,
    "created_at": "2018-03-27 15:46:15",
    "text": "Zeman nevěří, že je v ČR vyráběn či skladován novičok: https://t.co/IlsVhLmiIj"
  },
  {
    "id": 978619003357794300,
    "created_at": "2018-03-27 13:05:26",
    "text": "RT @Blesk24: Zeman živě od 15 hodin pro @Blesk24: O pátrání po jedu, hněvu @kalousekm a vlastním zdraví. Sledujte další vydání pořadu S pre…"
  },
  {
    "id": 978618123678093300,
    "created_at": "2018-03-27 13:01:57",
    "text": "RT @DVTVcz: Ovčáček: Mám skvělého šéfa, je na mě hodný. Prezident je velmi pozitivní člověk https://t.co/JMhzIFwR4j"
  },
  {
    "id": 978606007814361100,
    "created_at": "2018-03-27 12:13:48",
    "text": "RT @SlechtovaKarla: Jsem ráda, že se mohu znovu setkat s ministry obrany #V4. Společně má náš hlas vždy větší váhu, jak v rámci NATO, tak E…"
  },
  {
    "id": 978597731261407200,
    "created_at": "2018-03-27 11:40:55",
    "text": "RT @AndrejBabis: Musím odmítnout tvrzení @lidovenoviny, že se prezident Zeman snažil překazit diplomatickou odvetu Rusku. Není to pravda. S…"
  },
  {
    "id": 978568215830908900,
    "created_at": "2018-03-27 09:43:38",
    "text": "@FLutonsky Výběr koncesionářských poplatků by se měl zvýšit zhruba o deset milionů korun na 5,66 miliardy Kč."
  },
  {
    "id": 978566727360548900,
    "created_at": "2018-03-27 09:37:43",
    "text": "Farský stojí na straně Ruska. Navrhuje žalobu na prezidenta pro velezradu: https://t.co/H2IDzFJxW4"
  },
  {
    "id": 978565814956757000,
    "created_at": "2018-03-27 09:34:05",
    "text": "@Karel_IV62 @FLutonsky Výběr koncesionářských poplatků by se měl zvýšit zhruba o deset milionů korun na 5,66 miliardy Kč."
  },
  {
    "id": 978562005165539300,
    "created_at": "2018-03-27 09:18:57",
    "text": "@FLutonsky ČT zvýšila příjmy a výdaje svého rozpočtu na 6,96 miliardy korun, což je zhruba o 85 milionů více než v roce 2017."
  },
  {
    "id": 978556024994005000,
    "created_at": "2018-03-27 08:55:11",
    "text": "Prezident republiky Miloš Zeman navštíví ve středu 28.3. v 17:00 v pražském Top Hotelu sjezd SPO, kde vystoupí se svým projevem."
  },
  {
    "id": 978553720605732900,
    "created_at": "2018-03-27 08:46:02",
    "text": "Prezident republiky přijme vítěze soutěže „Vesnice roku 2017“ https://t.co/PVMNGngUFO"
  },
  {
    "id": 978553446734483500,
    "created_at": "2018-03-27 08:44:57",
    "text": "Ruská propaganda z nich bude mít radost. Uvědomují si to vůbec? https://t.co/ULoEvam4gv"
  },
  {
    "id": 978543850946998300,
    "created_at": "2018-03-27 08:06:49",
    "text": "Šlechtová hájí zaúkolování BIS Zemanem: Snad se potvrdí, co vím https://t.co/ySy4cSNnTH"
  },
  {
    "id": 978534828697145300,
    "created_at": "2018-03-27 07:30:58",
    "text": "@FLutonsky A my na Vás platíme koncesionářské poplatky. Dobrej pocit, že?"
  },
  {
    "id": 978320135311241200,
    "created_at": "2018-03-26 17:17:51",
    "text": "RT @realDonaldTrump: So much Fake News. Never been more voluminous or more inaccurate. But through it all, our country is doing great!"
  },
  {
    "id": 978316663237070800,
    "created_at": "2018-03-26 17:04:03",
    "text": "FAKE NEWS. Pověření BIS je právě reakcí na opakovaná obvinění České republiky ze strany Ruska. https://t.co/3RjEQFKbQd"
  },
  {
    "id": 978304858049609700,
    "created_at": "2018-03-26 16:17:08",
    "text": "RT @SlechtovaKarla: S panem prezidentem jsme dnes resili aktualni situaci souvisejici s utokem v Britanii.Stejne jako minuly tyden predsedn…"
  },
  {
    "id": 978298788040323100,
    "created_at": "2018-03-26 15:53:01",
    "text": "Zeman nařídil BIS prověřit skladování Novičoku v Česku. 'Hodilo by se obvinění vyvrátit,' říká Randák: https://t.co/abTZ2O7LdW"
  },
  {
    "id": 978293136517722100,
    "created_at": "2018-03-26 15:30:34",
    "text": "RT @rudolf_jindrak: Navzdory některým mediálním spekulacím prezident republiky nikdy nezpochybnil vyhoštění pracovníků ruské ambasády. Naop…"
  },
  {
    "id": 978293109149839400,
    "created_at": "2018-03-26 15:30:27",
    "text": "RT @rudolf_jindrak: 3/3 Je zapotřebí pokračovat v důkladném vyšetřování případu Skripal a vyčkat na jeho výsledky."
  },
  {
    "id": 978293099775643600,
    "created_at": "2018-03-26 15:30:25",
    "text": "RT @rudolf_jindrak: 2/3 Efekt tohoto kroku bude velmi specifický a omezený: bude především využit v tradiční rétorice některých ruských pře…"
  },
  {
    "id": 978293093186330600,
    "created_at": "2018-03-26 15:30:23",
    "text": "RT @rudolf_jindrak: 1/3 Vyhošťování diplomatů obecně je extrémním diplomatickým aktem. Vyhoštění pracovníků ruské ambasády je jen však (a p…"
  },
  {
    "id": 978283636096151600,
    "created_at": "2018-03-26 14:52:49",
    "text": "Prezident republiky přijal ředitele BIS: https://t.co/FKKpMtkiq1"
  },
  {
    "id": 978282503042629600,
    "created_at": "2018-03-26 14:48:18",
    "text": "Prezident republiky Miloš Zeman přijal v pondělí dne 26. března 2018 na zámku v Lánech ministryni obrany Karlu Šlechtovou."
  },
  {
    "id": 978258352508719100,
    "created_at": "2018-03-26 13:12:21",
    "text": "Probíhá koordinace na nejvyšší státní úrovni. Pan prezident je v kontaktu s premiérem, některými členy vlády i bezpečnostními složkami."
  },
  {
    "id": 978232789568032800,
    "created_at": "2018-03-26 11:30:46",
    "text": "RT @PanenkaRadim: V pražském knihkupectví na čestném místě vedle Václava Havla! https://t.co/4vKCfye4Al"
  },
  {
    "id": 978231185095692300,
    "created_at": "2018-03-26 11:24:23",
    "text": "Prezident republiky Miloš Zeman vystoupí v úterý 27.3. v 15.00 v pořadu „S prezidentem v Lánech“. Pořad bude živě v… https://t.co/8MCspTNZ0q"
  },
  {
    "id": 978210532615483400,
    "created_at": "2018-03-26 10:02:19",
    "text": "Prezident republiky kondoloval Rosemary Pemberton: https://t.co/BqeWiGDSrn"
  },
  {
    "id": 978210313299427300,
    "created_at": "2018-03-26 10:01:27",
    "text": "Prezident republiky kondoloval ruskému prezidentovi: https://t.co/TY5rUuxelJ"
  },
  {
    "id": 977937875911237600,
    "created_at": "2018-03-25 15:58:53",
    "text": "@Jiri_Vojacek Něco humoru. https://t.co/563qyqCxnf"
  },
  {
    "id": 977917778073194500,
    "created_at": "2018-03-25 14:39:01",
    "text": "Živé vysílání speciálního dílu pořadu S prezidentem v Lánech můžete sledovat na https://t.co/9momfIxPkd v úterý 27.… https://t.co/uZ2HENMKhU"
  },
  {
    "id": 977619047692034000,
    "created_at": "2018-03-24 18:51:58",
    "text": "Přátelství by mělo být spojeno i se solidaritou! https://t.co/wzCi7M2qpL"
  },
  {
    "id": 977527144095068200,
    "created_at": "2018-03-24 12:46:47",
    "text": "RT @UKinCR: Společná fotografie Ústřední hudby AČR, VUS Ondráš a skotské skupiny Pipers' Trail. https://t.co/gnEPnJQ5VT"
  },
  {
    "id": 977487741989589000,
    "created_at": "2018-03-24 10:10:13",
    "text": "RT @pierremoscovici: Respect à Arnaud Beltrame, incarnation de l’humanité et du courage face à la lâcheté du terrorisme. Il mérite l’admira…"
  },
  {
    "id": 977454884797796400,
    "created_at": "2018-03-24 07:59:39",
    "text": "Savčenková vyhlásila protestní hladovku. Budou společně s ní hladovět Jiří Pospíšil a Mirek Kalousek z TOP 09? https://t.co/5CGzJ24wFq"
  },
  {
    "id": 977437248600846300,
    "created_at": "2018-03-24 06:49:34",
    "text": "Absolutně lživý článek! Žádný dramatický střet mez panem prezidentem a panem premiérem se nekoná. https://t.co/29Yv653O0Z"
  },
  {
    "id": 977233241982820400,
    "created_at": "2018-03-23 17:18:55",
    "text": "Přepis rozhovoru pana prezidenta pro pořad TV Barrandov „Týden s prezidentem“: https://t.co/7IV1DKHWi2"
  },
  {
    "id": 977230287536115700,
    "created_at": "2018-03-23 17:07:11",
    "text": "Boj proti terorismu zůstává i nadále jednou z mých priorit. Česká republika je připravena stát po boku Francie: https://t.co/eF44oVBe1B"
  },
  {
    "id": 977189602107822100,
    "created_at": "2018-03-23 14:25:31",
    "text": "Zeman se chystá na první cestu do zahraničí. Bude to Slovensko! https://t.co/PiJ3nL8gJw"
  },
  {
    "id": 977153638861766700,
    "created_at": "2018-03-23 12:02:36",
    "text": "RT @NickArcherFCO: Gloomy look directed at weather, not wonderful, cheerful dancers! https://t.co/8gpsReM5dZ"
  },
  {
    "id": 977153456950710300,
    "created_at": "2018-03-23 12:01:53",
    "text": "President of the Czech Republic about Jerusalem: https://t.co/Jb6G6Q6gGs"
  },
  {
    "id": 977147643737538600,
    "created_at": "2018-03-23 11:38:47",
    "text": "Potvrzení česko-britského přátelství! Britský den na Pražském hradě. https://t.co/BYtuwxuK0V"
  },
  {
    "id": 977146092809801700,
    "created_at": "2018-03-23 11:32:37",
    "text": "RT @AndrejBabis: V případu Salisbury jsem předem informoval prezidenta Zemana o navrhované pozici české vlády na základě jednání Evropské r…"
  },
  {
    "id": 977135191843012600,
    "created_at": "2018-03-23 10:49:18",
    "text": "RT @UKinCR: Již za malý okamžik proběhne na prvním nádvoří Pražského hradu střídání Hradní stráže za doprovodu skotských dudáků. \nSledujte…"
  },
  {
    "id": 977133001808207900,
    "created_at": "2018-03-23 10:40:36",
    "text": "RT @UKinCR: Na Britském dni je i přes nepříznivé počasí skvělá nálada. https://t.co/tfSQj3bpOn"
  },
  {
    "id": 977102304133468200,
    "created_at": "2018-03-23 08:38:37",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 22. března 2018, 20:15, TV Barrandov: https://t.co/SyLP3hRaNB"
  },
  {
    "id": 976931987377328100,
    "created_at": "2018-03-22 21:21:50",
    "text": "Vláda s důvěrou může vzniknout do konce května, řekl Zeman: https://t.co/9OXuxiyJHU"
  },
  {
    "id": 976930322859388900,
    "created_at": "2018-03-22 21:15:14",
    "text": "Paní Jechová vyhlašuje pátrání po vyjádření TOP 09 k zadržení nositelky Kalouskovy dýky N. Savčenkové v Kyjevě.\n\nMá… https://t.co/P6u2rFzJU9"
  },
  {
    "id": 976927899302363100,
    "created_at": "2018-03-22 21:05:36",
    "text": "V Kyjevě zatkli Savčenkovou, viní ji z přípravy proruského převratu. Co na to TOP 09? Stále mlčí. Dříve byla výřečn… https://t.co/OQEurrfmK4"
  },
  {
    "id": 976912095580184600,
    "created_at": "2018-03-22 20:02:48",
    "text": "RT @NickArcherFCO: A great preview at home this evening of what we’ll be putting on for all to see tomorrow.  Zitra na Malostranskem namest…"
  },
  {
    "id": 976867720401707000,
    "created_at": "2018-03-22 17:06:28",
    "text": "Prezident republiky. https://t.co/qIkTVqw2mr"
  },
  {
    "id": 976866901098889200,
    "created_at": "2018-03-22 17:03:13",
    "text": "Přítel je ten, kdo o vás ví všechno a má vás pořád stejně rád. https://t.co/uVbWooJMPP https://t.co/jrX4D7hAYq"
  },
  {
    "id": 976864951485812700,
    "created_at": "2018-03-22 16:55:28",
    "text": "“Má naši největší úctu a je pro nás pro všechny velkou inspirací,” děl Mirek Kalousek o Nadije Savčenkové. Jak moc se TOP 09 inspirovala?"
  },
  {
    "id": 976858588969947100,
    "created_at": "2018-03-22 16:30:11",
    "text": "Proč TOP 09 M. Kalouska stále mlčí k osudu své chráněnky? Savčenkovou zadrželi kvůli podezření z přípravy převratu: https://t.co/Nw0VvDfOFT"
  },
  {
    "id": 976841233636175900,
    "created_at": "2018-03-22 15:21:13",
    "text": "Pan prezident na Hradě poděkoval mladým lidem, kteří sbírali podpisy pod petici za jeho kandidaturu v přímé volbě h… https://t.co/KTxKvhMPBD"
  },
  {
    "id": 976838857437122600,
    "created_at": "2018-03-22 15:11:47",
    "text": "Zeman: Studenti mají právo demonstrovat, existuje ale hranice, kde je možné mluvit o zneužívání dětí https://t.co/8ivUWwP1hB"
  },
  {
    "id": 976827591226208300,
    "created_at": "2018-03-22 14:27:00",
    "text": "Projev prezidenta republiky při setkání s finalisty ankety Zlatý Ámos: https://t.co/pVELP8Ogig"
  },
  {
    "id": 976819674183856100,
    "created_at": "2018-03-22 13:55:33",
    "text": "Pan prezident přijal na Hradě finalistky a finalisty XXV. ročníku ankety Zlatý Ámos. https://t.co/K2kE5WHrGj"
  },
  {
    "id": 976805424707055600,
    "created_at": "2018-03-22 12:58:56",
    "text": "Nová emise poštovních známek s panem prezidentem vyjde 18.4.2018. Momentka z nedávné porady v Poštovní tiskárně cen… https://t.co/JXkifabwZp"
  },
  {
    "id": 976785459358597100,
    "created_at": "2018-03-22 11:39:35",
    "text": "Natáčení pořadu “Týden s prezidentem” skončilo. Osobní dárek pana prezidenta pro generálního ředitele Skupiny Barra… https://t.co/9gaUK7eXe9"
  },
  {
    "id": 976779745537986600,
    "created_at": "2018-03-22 11:16:53",
    "text": "Pan prezident se zármutkem přijal zprávu o tragédii v Kralupech nad Vltavou. Blízkým obětí výbuchu vyslovuje upřímnou soustrast."
  },
  {
    "id": 976763448653697000,
    "created_at": "2018-03-22 10:12:08",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/oeP8mCyF9t"
  },
  {
    "id": 976749075633725400,
    "created_at": "2018-03-22 09:15:01",
    "text": "Prezident republiky Miloš Zeman, 22.3.2018, MF Dnes: https://t.co/p4gSYkWdW0"
  },
  {
    "id": 976746376116822000,
    "created_at": "2018-03-22 09:04:17",
    "text": "Britský den na Pražském hradě: https://t.co/3yeCYsv5lV"
  },
  {
    "id": 976746052601643000,
    "created_at": "2018-03-22 09:03:00",
    "text": "RT @TBarrandov: Jaký má názor prezident Miloš Zeman na události, který hýbou naší zemí? Sledujte premiéru pořadu TÝDEN s prezidentem! Moder…"
  },
  {
    "id": 976744995389616100,
    "created_at": "2018-03-22 08:58:48",
    "text": "Nedovolím český Majdan. Rozhovor prezidenta republiky pro MF Dnes: https://t.co/aEo8VPimJp"
  },
  {
    "id": 976501020443447300,
    "created_at": "2018-03-21 16:49:20",
    "text": "Pan prezident dnes přijal na její žádost K. Valachovou, předsedkyni Stálé komise pro Ústavu ČR Poslanecké sněmovny: https://t.co/7M7cLMB6Dw"
  },
  {
    "id": 976477359296663600,
    "created_at": "2018-03-21 15:15:19",
    "text": "Projev prezidenta republiky při udělení státního vyznamenání J. E. Mons. Giuseppe Leanzovi: https://t.co/MnBfNMTzNW"
  },
  {
    "id": 976471674555166700,
    "created_at": "2018-03-21 14:52:43",
    "text": "Pan prezident na Hradě udělil Řád Tomáše Garrigua Masaryka I. třídy J. E. Mons. Giuseppe Leanzovi, apoštolskému nun… https://t.co/i3OAgMtF0z"
  },
  {
    "id": 976456292649898000,
    "created_at": "2018-03-21 13:51:36",
    "text": "Projev prezidenta republiky při předání ocenění vítězům soutěže Salon vín: https://t.co/PfuA5kdP3Z"
  },
  {
    "id": 976450999845048300,
    "created_at": "2018-03-21 13:30:34",
    "text": "Pan prezident na Hradě tradičně předal ocenění Salon vín - Národní soutěže vín ČR. https://t.co/qn0DjvU1XZ"
  },
  {
    "id": 976441347703009300,
    "created_at": "2018-03-21 12:52:13",
    "text": "RT @UKinCR: ‘Haggis je skotská specialita. Přijďte se podívat jak se vaří v pátek na Malostranské náměstí,’ velvyslanec Nick Archer pro Luc…"
  },
  {
    "id": 976422647054700500,
    "created_at": "2018-03-21 11:37:54",
    "text": "RT @TBarrandov: I dnes začneme jako obvykle naší starou známou Českou televizí. Dále vás moderátor vezme do exekutorského vesmíru, kde na p…"
  },
  {
    "id": 976422535750447100,
    "created_at": "2018-03-21 11:37:28",
    "text": "RT @JunckerEU: Congratulations on your re-election, President #Putin. I have always argued that positive relations between the #EU and #Rus…"
  },
  {
    "id": 976403365709205500,
    "created_at": "2018-03-21 10:21:17",
    "text": "Prezident republiky přijme finalisty ankety Zlatý Ámos: https://t.co/OLWMGeYGVy"
  },
  {
    "id": 976401629007286300,
    "created_at": "2018-03-21 10:14:23",
    "text": "RT @SlechtovaKarla: Odešel jeden z posledních českých hrdinů druhé světové války. Ćest jeho památce!\nhttps://t.co/8h8AbZRM6I"
  },
  {
    "id": 976367459035906000,
    "created_at": "2018-03-21 07:58:36",
    "text": "Angažovanou písní proti podrývání naší skutečnosti! Velký návrat politické písně na obrazovky ČST Praha: https://t.co/3Dod7z2oLu"
  },
  {
    "id": 976221078010949600,
    "created_at": "2018-03-20 22:16:56",
    "text": "RT @rudolf_jindrak: Ano, Miloš Zeman se i nadále bude setkávat s politiky ze západu i východu. Více v rozhovoru pro https://t.co/V2A95POjMP…"
  },
  {
    "id": 976214376331010000,
    "created_at": "2018-03-20 21:50:19",
    "text": "RT @AmbMeron: פגישה מצוינת הבוקר בפראג עם חברי פרלמנט ונציגי ארגוני הידידות לדון ביחסים בין המדינות https://t.co/Xtyp2rr1wT"
  },
  {
    "id": 976183221498073100,
    "created_at": "2018-03-20 19:46:31",
    "text": "Pan prezident přesun velvyslanectví ČR v Izraeli z Tel Avivu do Jeruzaléma jednoznačně podporuje! https://t.co/BnuhsbNQ0Z"
  },
  {
    "id": 976162190309888000,
    "created_at": "2018-03-20 18:22:57",
    "text": "Trump se chce brzy sejít s Putinem, rád by s ním promluvil o zbrojení: https://t.co/6uiRJtUW45"
  },
  {
    "id": 976142072074862600,
    "created_at": "2018-03-20 17:03:00",
    "text": "Přátelské setkání. Pan prezident přivítal v Lánech u příležitosti pracovní večeře předsedu vlády Andreje Babiše. https://t.co/CSNamQzzcC"
  },
  {
    "id": 976127306770108400,
    "created_at": "2018-03-20 16:04:20",
    "text": "Miloši, kandiduj, dlužíš to těm lidem, řekla Ivana Zemanová před volbami. Více v nové knize “Cesta k vítězství”! https://t.co/fmZ8Waop8U"
  },
  {
    "id": 976084424738689000,
    "created_at": "2018-03-20 13:13:56",
    "text": "Lány. V 18:00 pan prezident na zámku přivítá předsedu vlády Andreje Babiše. https://t.co/fzP8fIQJZF"
  },
  {
    "id": 976081464587628500,
    "created_at": "2018-03-20 13:02:10",
    "text": "RT @KohoutPavel: Juncker blahopřál Putinovi ke znovuzvolení.\n\nOčekávám hlasité odsouzení Junckera jakožto ruského švába. https://t.co/pEkF5…"
  },
  {
    "id": 976080919504281600,
    "created_at": "2018-03-20 13:00:00",
    "text": "KOMENTÁŘ: Studentské demonstrace aneb Bloudění na poušti – Matěj Široký https://t.co/1jjoupFnsC"
  },
  {
    "id": 976036524868407300,
    "created_at": "2018-03-20 10:03:36",
    "text": "Zeman udělí státní vyznamenání apoštolskému nunciovi Leanzovi: https://t.co/mNtL3XBDeH"
  },
  {
    "id": 976020362495451100,
    "created_at": "2018-03-20 08:59:22",
    "text": "Prezident republiky udělí státní vyznamenání: https://t.co/k4doHvGqly"
  },
  {
    "id": 976019734704554000,
    "created_at": "2018-03-20 08:56:52",
    "text": "Prezident republiky předá ocenění vítězům soutěže Salon vín: https://t.co/FxXVa03Zhw"
  },
  {
    "id": 975785735172354000,
    "created_at": "2018-03-19 17:27:03",
    "text": "Pan prezident: Jsme součástí EU, jsme součástí NATO a měli bychom se v obou těchto organizacích chovat jako energický a sebevědomý partner."
  },
  {
    "id": 975765058314752000,
    "created_at": "2018-03-19 16:04:53",
    "text": "RT @IsraelinCZ: 2/2 CO NÁS SPOJUJE: Krom jiného si velvyslanec Meron v Lošticích připomněl i velkou myslitelku Fanny Neudu, autorku Hodin z…"
  },
  {
    "id": 975765024064098300,
    "created_at": "2018-03-19 16:04:45",
    "text": "RT @IsraelinCZ: 1/2 CO NÁS SPOJUJE: Velvyslanec Meron dnes navštívil starobylé moravské synagogy v Lošticích a Úsově. Průvodcem mu byl pan…"
  },
  {
    "id": 975736833505185800,
    "created_at": "2018-03-19 14:12:44",
    "text": "Prezident republiky zaslal gratulaci ruskému prezidentovi: https://t.co/B9brjFJvcu"
  },
  {
    "id": 975638821114142700,
    "created_at": "2018-03-19 07:43:16",
    "text": "Prezident republiky zaslal gratulaci čínskému prezidentovi: https://t.co/OyvaTy0Vum"
  },
  {
    "id": 975627332579885000,
    "created_at": "2018-03-19 06:57:37",
    "text": "RT @ErikBest: Horší než ruská propaganda.\nAle to je samozřejmě jen pocit jednoho pravidelného diváka. Tvrdá data jistě dokážou opak.\nhttps:…"
  },
  {
    "id": 975462602372534300,
    "created_at": "2018-03-18 20:03:02",
    "text": "Hosty OVM ČST Praha příští neděli budou: exministr financí M. Kalousek, občanský aktivista M. Kalousek a inženýr chemie M. Kalousek."
  },
  {
    "id": 975345294719275000,
    "created_at": "2018-03-18 12:16:53",
    "text": "@Winston_Smiths To je gól! Český nenávistný Twitter už útočí i na Německo. On vám fakt nakonec zůstane jako jediný… https://t.co/jSNoDTYxVd"
  },
  {
    "id": 975344482219634700,
    "created_at": "2018-03-18 12:13:40",
    "text": "RT @StandWithUs: Shameful antisemitism! Every year, Latvia holds a memorial service for SS soldiers for fought FOR the Nazis. How is this p…"
  },
  {
    "id": 975299782473285600,
    "created_at": "2018-03-18 09:16:02",
    "text": "Německý ministr vnitra: EU se kvůli migrantům chová povýšeně, každá země má svoji hrdost https://t.co/P1XOT0Hpui"
  },
  {
    "id": 975102283192160300,
    "created_at": "2018-03-17 20:11:15",
    "text": "Odvážné a pravdivé: https://t.co/wUTANI3LnD"
  },
  {
    "id": 975094266228871200,
    "created_at": "2018-03-17 19:39:24",
    "text": "@jindrichsidlo Momentálně se bavím tím, jak Vám to olajkovali člen TOP 09, novinář z ČST a jeho kolega od Bakalů. Gratulace!"
  },
  {
    "id": 975092307174322200,
    "created_at": "2018-03-17 19:31:37",
    "text": "@jindrichsidlo Jak zmíním TOP 09, někteří novináři vyráží do svatého boje. Pročpak asi?"
  },
  {
    "id": 975091002523488300,
    "created_at": "2018-03-17 19:26:25",
    "text": "@jindrichsidlo Rád byste to zakázal, že?"
  },
  {
    "id": 975088261134733300,
    "created_at": "2018-03-17 19:15:32",
    "text": "@msmtcr Dezinformacím? A toto je co? Očekávám jasné vyjádření MŠMT! https://t.co/ZvrSvuF6Ev"
  },
  {
    "id": 975087885396467700,
    "created_at": "2018-03-17 19:14:02",
    "text": "@karel_pelikan @FrMatejka Říkám na to, že by MŠMT nemělo mást veřejnost. https://t.co/Cl0UxvSXU2"
  },
  {
    "id": 975059676797775900,
    "created_at": "2018-03-17 17:21:57",
    "text": "RT @realDonaldTrump: As the House Intelligence Committee has concluded, there was no collusion between Russia and the Trump Campaign. As ma…"
  },
  {
    "id": 975030709332176900,
    "created_at": "2018-03-17 15:26:50",
    "text": "Obvinění České republiky je nesmyslné a absurdní. Je dobře, že z naší země v reakci na spekulace zaznívá jednotné odsuzující stanovisko."
  },
  {
    "id": 975029297298722800,
    "created_at": "2018-03-17 15:21:14",
    "text": "RT @stropnickym: 2/2 v předchozích dnech na dezinformačním serveru Sputnik."
  },
  {
    "id": 975029287861588000,
    "created_at": "2018-03-17 15:21:12",
    "text": "RT @stropnickym: 1/2 Ohrazujeme se proti tvrzení o původu Novičoku, které nelze ničím doložit. Je to standardní způsob, jak manipulovat inf…"
  },
  {
    "id": 975029191551877100,
    "created_at": "2018-03-17 15:20:49",
    "text": "RT @SlechtovaKarla: Rozhodne odmitam takove absurdni obvineni. Ceska republika je od 90. let signatarem mezinarodni umluvy o zakazu, vyvoji…"
  },
  {
    "id": 974990797333508100,
    "created_at": "2018-03-17 12:48:15",
    "text": "@pavelheczko TOP 09 se dodnes od Savčenkové nedistancovala, ačkoliv pronesla antisemitské výroky. Mlčí i teď, kdy j… https://t.co/opPTqId4Zo"
  },
  {
    "id": 974970510596628500,
    "created_at": "2018-03-17 11:27:38",
    "text": "@Kvidoo Doufám, že tenhle hnusný antisemitský výrok odsuzujete."
  },
  {
    "id": 974966948491677700,
    "created_at": "2018-03-17 11:13:29",
    "text": "Kalouskova dýka v Kyjevě. Čtěte na webu Svobodný Názor! https://t.co/gbfbPFA1jX https://t.co/Bk3BcKzHOS"
  },
  {
    "id": 974956774775193600,
    "created_at": "2018-03-17 10:33:03",
    "text": "Bude teď velmi zábavné pozorovat, jak se budou mainstreamová média v čele s ČST Praha snažit zakrýt obří průšvih TOP 09 se Savčenkovou!"
  },
  {
    "id": 974951495660720100,
    "created_at": "2018-03-17 10:12:04",
    "text": "Růže k lásce schůdeček, s úctou Béda Hudeček. https://t.co/NwQXqk4yb5"
  },
  {
    "id": 974950636650467300,
    "created_at": "2018-03-17 10:08:40",
    "text": "Savčenková se setkala s poslanci, od Kalouska dostala dýku: https://t.co/vv89ZjdEeT"
  },
  {
    "id": 974950123041108000,
    "created_at": "2018-03-17 10:06:37",
    "text": "Co na to Mirek Kalousek, Štětina a TOP 09? Vytáhnou ze šuplíku placky se Savčenkovou? Bude demonstrace na Václaváku? https://t.co/rPa2CZkuYp"
  },
  {
    "id": 974728961371631600,
    "created_at": "2018-03-16 19:27:48",
    "text": "RT @AndrejBabis: Ty brďo. Vyhráli jsme DVĚ mezinárodní ceny @polaris_awards od Evropské asociace politických konzultantů v Londýně @eapceve…"
  },
  {
    "id": 974728043628499000,
    "created_at": "2018-03-16 19:24:09",
    "text": "@MichalGill Tohle fašounské vyhrožování na mě neplatí."
  },
  {
    "id": 974717714454466600,
    "created_at": "2018-03-16 18:43:07",
    "text": "@RadioPolitik Proč sprostě útočíte na novináře, kteří článek sepsali?"
  },
  {
    "id": 974717367476420600,
    "created_at": "2018-03-16 18:41:44",
    "text": "@VeceraP @KTweetuje Když nejsou protiargumenty, tak se vytáhne bezobsažná fráze o “vytrhávání z kontextu”."
  },
  {
    "id": 974716370247090200,
    "created_at": "2018-03-16 18:37:46",
    "text": "@vader254 @SvecKamil A právě proto probíhají jednání o podpoře vlády v Poslanecké sněmovně. Jak jednoduché!"
  },
  {
    "id": 974714048875987000,
    "created_at": "2018-03-16 18:28:33",
    "text": "@KTweetuje Tohle je taky trapné? Předseda ÚS Pavel Rychetský: Ústavní zvyklosti jsou jako manželka inspektora Columba, stále je hledáme."
  },
  {
    "id": 974712945811828700,
    "created_at": "2018-03-16 18:24:10",
    "text": "@SvecKamil Předseda ÚS Pavel Rychetský: Ústavní zvyklosti jsou jako manželka inspektora Columba, stále je hledáme."
  },
  {
    "id": 974710989810749400,
    "created_at": "2018-03-16 18:16:23",
    "text": "Paní Jechová vyhlašuje pátrání po “ústavních zvyklostech” v textu Ústavy ČR.\n\nMáte je? https://t.co/IlV7CChocF"
  },
  {
    "id": 974693207320784900,
    "created_at": "2018-03-16 17:05:44",
    "text": "Islám nepatří k Německu, tvrdí nový ministr vnitra Seehofer: https://t.co/ClJmXtNDSt"
  },
  {
    "id": 974684770180517900,
    "created_at": "2018-03-16 16:32:12",
    "text": "RT @SlechtovaKarla: Na Vítkově jsem dnes ocenila 42 vojáků po návratu z půlroční mise v Mali. Jádro jednotky tvořili příslušníci dělostřele…"
  },
  {
    "id": 974679924723331100,
    "created_at": "2018-03-16 16:12:57",
    "text": "RT @AmbMeron: שבת שלום 🍷Shabbat Shalom https://t.co/IbMY8SFy57"
  },
  {
    "id": 974673266118979600,
    "created_at": "2018-03-16 15:46:29",
    "text": "Pan prezident, 15.3.2018, TV Barrandov: https://t.co/VJ850JuhER"
  },
  {
    "id": 974664589660090400,
    "created_at": "2018-03-16 15:12:01",
    "text": "Člen ODS volá po odstranění demokratického režimu v České republice a nastolení diktatury. To už je fakt síla! https://t.co/W3QShpAUdE"
  },
  {
    "id": 974664310810169300,
    "created_at": "2018-03-16 15:10:54",
    "text": "@vitak69 Člen ODS volá po odstranění demokratického režimu v České republice a nastolení diktatury. To už je fakt síla!"
  },
  {
    "id": 974659191733448700,
    "created_at": "2018-03-16 14:50:34",
    "text": "Jen u nás: Významná skupina lidí se zastala kardinála Duky https://t.co/2zjxAPRtaj"
  },
  {
    "id": 974648466499625000,
    "created_at": "2018-03-16 14:07:57",
    "text": "@FrantaPlzen Žádný konkrétní důkaz uveden není."
  },
  {
    "id": 974646937642242000,
    "created_at": "2018-03-16 14:01:52",
    "text": "@FrantaPlzen Takže žádný konkrétní důkaz nemáte. Dobrá."
  },
  {
    "id": 974645745847586800,
    "created_at": "2018-03-16 13:57:08",
    "text": "Jak hluboko ještě klesnou? Ten temný vztek už odnášejí dokonce i poštovní známky! https://t.co/VzLkEsYx6O"
  },
  {
    "id": 974644989509677000,
    "created_at": "2018-03-16 13:54:08",
    "text": "@JaroslavKmenta Budu Vás osobně bránit před rozzuřenými študáky, kteří chtějí zatočit s šiřiteli FAKE NEWS. Slibuju!"
  },
  {
    "id": 974643454994206700,
    "created_at": "2018-03-16 13:48:02",
    "text": "@JaroslavKmenta To musíte žádat jinde. Študáci během “stávky” žádali tvrdý zásah proti šíření FAKE NEWS. #VyjdiVen"
  },
  {
    "id": 974641090992201700,
    "created_at": "2018-03-16 13:38:38",
    "text": "@FrantaPlzen Tak šup. Předložte konkrétní důkaz, že pan prezident porušuje některý z článků Ústavy ČR."
  },
  {
    "id": 974640689903472600,
    "created_at": "2018-03-16 13:37:03",
    "text": "@JaroslavKmenta FAKE NEWS! Tuto větu pan prezident nikdy neřekl. Ale aspoň mám další důkaz, že novináři šíří dezinformace. Bude se hodit!"
  },
  {
    "id": 974639414453432300,
    "created_at": "2018-03-16 13:31:58",
    "text": "@danikzjee Hnutí ANO vyhrálo volby jedině díky Andreji Babišovi."
  },
  {
    "id": 974639099356307500,
    "created_at": "2018-03-16 13:30:43",
    "text": "@Markus_Zeman Překrucování výsledků demokratických voleb je ideologická fráze bez obsahu. Doučte se laskavě, jak fungují vyspělé demokracie."
  },
  {
    "id": 974637799457607700,
    "created_at": "2018-03-16 13:25:33",
    "text": "@socolikQ Budíček! Probíhají jednání o podpoře nové vlády v Poslanecké sněmovně. Ve vyspělých demokraciích absolutně běžná situace."
  },
  {
    "id": 974636419833565200,
    "created_at": "2018-03-16 13:20:05",
    "text": "@Markus_Zeman Takže popíráte systém parlamentní demokracie i přímé volby prezidenta. Fajn. Aspoň je jasno."
  },
  {
    "id": 974635835185352700,
    "created_at": "2018-03-16 13:17:45",
    "text": "Přepis rozhovoru pana prezidenta pro pořad TV Barrandov „Týden s prezidentem“: https://t.co/9UVC9Q52xT"
  },
  {
    "id": 974635321437679600,
    "created_at": "2018-03-16 13:15:43",
    "text": "Pan prezident, 15.3.2018, TV Barrandov: https://t.co/MOZhx7HsB7"
  },
  {
    "id": 974635201178595300,
    "created_at": "2018-03-16 13:15:14",
    "text": "Pan prezident, 15.3.2018, TV Barrandov: https://t.co/mMEcDId2eA"
  },
  {
    "id": 974610790429929500,
    "created_at": "2018-03-16 11:38:14",
    "text": "Facka ČST Praha a TOP 09: Spokojenost s fungováním demokracie vyslovilo podle CVVM 60 % lidí. Je to nejvíce od roku 2004."
  },
  {
    "id": 974609506662535200,
    "created_at": "2018-03-16 11:33:08",
    "text": "Spokojenost s demokracií zůstává rekordní: https://t.co/zbrg2U3N0I"
  },
  {
    "id": 974602503710036000,
    "created_at": "2018-03-16 11:05:18",
    "text": "Paní Ivana Zemanová se dnes zúčastnila otevření výstavy Předjaří v Královské zahradě, která se koná do 25.3. v Empí… https://t.co/n1amrp29iG"
  },
  {
    "id": 974600021093085200,
    "created_at": "2018-03-16 10:55:26",
    "text": "Ne nový listopad 89, ale březen TOP 09. Čtěte na webu Svobodný Názor: https://t.co/QgYGhHMkem https://t.co/engWfj5nBD"
  },
  {
    "id": 974564979457384400,
    "created_at": "2018-03-16 08:36:12",
    "text": "Miroslav Kalousek s papírovou helmou na hlavě, štítem a pendrekem v ruce: https://t.co/HGfBvVGsDn"
  },
  {
    "id": 974558398829150200,
    "created_at": "2018-03-16 08:10:03",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 15. března 2018, 20:15, TV Barrandov: https://t.co/0EsBuwxbbd"
  },
  {
    "id": 974416775415771100,
    "created_at": "2018-03-15 22:47:17",
    "text": "RT @FrMatejka: Takové to když vás na začátku všichni ujišťují o tom, že pořadatelé #VyjdiVen nemají nic společného s kteroukoli politickou…"
  },
  {
    "id": 974351761627639800,
    "created_at": "2018-03-15 18:28:57",
    "text": "RT @AmbMeron: היום לפני שנה הגשתי את כתב ההאמנה שלי לנשיא צ׳כיה מילוש זמאן. בתקופה זו למדתי להכיר מקרוב את העם הצ׳כי הנהדר ולהרגיש את קרבתו…"
  },
  {
    "id": 974351411239637000,
    "created_at": "2018-03-15 18:27:33",
    "text": "RT @AmbMeron: One year ago today, I had the honor to present my credentials to President Zeman, as the Ambassador of Israel to the Czech Re…"
  },
  {
    "id": 974339557733879800,
    "created_at": "2018-03-15 17:40:27",
    "text": "Pošta vydá v dubnu nové známky se Zemanem, ty předchozí už jsou takřka rozprodané: https://t.co/6sMAkqMBeb"
  },
  {
    "id": 974336605979926500,
    "created_at": "2018-03-15 17:28:43",
    "text": "RT @poblitolog: ten transparent je úžasnej 😀 za co že to pánové demonstrují? 🤔 za svobodu a nezávislost? 🤔 nebo za protektorát EU? 🤔😀 https…"
  },
  {
    "id": 974336157613019100,
    "created_at": "2018-03-15 17:26:56",
    "text": "Mirek zasahuje každý den! https://t.co/YNgUCWuN3w: Podívat se sem přijel i známý sympatizant studentstva, bývalý př… https://t.co/k8ePHPB3eE"
  },
  {
    "id": 974314011402670100,
    "created_at": "2018-03-15 15:58:56",
    "text": "Foto týdne. Mirek Kalousek manifestuje na podporu ČST Praha. Zdroj: https://t.co/VFgRvd2Ubv https://t.co/7UwlwuBL6v"
  },
  {
    "id": 974312057410588700,
    "created_at": "2018-03-15 15:51:10",
    "text": "RT @SlechtovaKarla: Okupace v roce 1939 na dlouhých šest let vzala českému národu svobodu a samostatnost. Nic podobného se již nesmí opakov…"
  },
  {
    "id": 974309116368904200,
    "created_at": "2018-03-15 15:39:29",
    "text": "RT @narodnimuzeum: Národní muzeum spolu s Úřadem vlády ČR zlepší přístupnost Benešovy vily v Sezimově Ústí.\nTěšit se můžete na zajímavé kom…"
  },
  {
    "id": 974303528196993000,
    "created_at": "2018-03-15 15:17:17",
    "text": "Číslo pro dnešní den: 2 853 390"
  },
  {
    "id": 974270556701974500,
    "created_at": "2018-03-15 13:06:16",
    "text": "Lány, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/RbmQANLN9l"
  },
  {
    "id": 974241643594485800,
    "created_at": "2018-03-15 11:11:23",
    "text": "TŘI OSUDOVÉ BŘEZNOVÉ DNY: 14.-16. BŘEZEN 1939 https://t.co/82ngESeHuJ"
  },
  {
    "id": 974238866340307000,
    "created_at": "2018-03-15 11:00:20",
    "text": "Momentka z Poštovní tiskárny cenin. https://t.co/K2IIFpG5An"
  },
  {
    "id": 974222425025114100,
    "created_at": "2018-03-15 09:55:00",
    "text": "Praha, Poštovní tiskárna cenin. Vzniká nová emise známek s panem prezidentem. https://t.co/WRUmAYmFJZ"
  },
  {
    "id": 974206437806235600,
    "created_at": "2018-03-15 08:51:29",
    "text": "RT @AndrejBabis: Před 79 lety obsadila nacistická vojska Československo. Jeden z nejtemnějších dnů naší historie. Protektorát. Každodenní s…"
  },
  {
    "id": 974204874568208400,
    "created_at": "2018-03-15 08:45:16",
    "text": "Generální ředitel ČST Praha Petr Dvořák začíná svým jednáním a vyjadřováním kopírovat Bohuslava Sobotku: https://t.co/ys6GR8XzFQ"
  },
  {
    "id": 974203866236497900,
    "created_at": "2018-03-15 08:41:16",
    "text": "Tohle se souručenství ČST Praha a TOP 09 líbit nebude. https://t.co/RawyrKribP"
  },
  {
    "id": 974191185454563300,
    "created_at": "2018-03-15 07:50:52",
    "text": "V ČR je evidováno 3,5 milionu TV přijímačů. Včera ČST Praha podpořily jen asi čtyři tisíce lidí. Totální debakl Kavčích hor a P. Dvořáka."
  },
  {
    "id": 974189658023366700,
    "created_at": "2018-03-15 07:44:48",
    "text": "RT @rudolf_jindrak: Zemanova pomoc byla klíčová. Ukrajinský historik o svém věznění na východní Ukrajině\nhttps://t.co/gEqBLu9Vnp"
  },
  {
    "id": 974045436607717400,
    "created_at": "2018-03-14 22:11:43",
    "text": "“Přineste ho dolů”. Orgie nenávisti s puncem TOP 09. Vyzývám gen. ředitele ČST Praha Petra Dvořáka, aby se od takového jednání distancoval."
  },
  {
    "id": 973999795957321700,
    "created_at": "2018-03-14 19:10:22",
    "text": "Mirek Kalousek osobně podpořil ČST Praha. A tak se slova pana prezidenta v inauguračním projevu definitivně potvrdila."
  },
  {
    "id": 973992111170302000,
    "created_at": "2018-03-14 18:39:49",
    "text": "Hrad, Španělský sál. Michal David. https://t.co/2KIXQZQyP8"
  },
  {
    "id": 973986696206446600,
    "created_at": "2018-03-14 18:18:18",
    "text": "Hrad, Španělský sál. Helena Vondráčková. https://t.co/0W0hQsnmjh"
  },
  {
    "id": 973983016442835000,
    "created_at": "2018-03-14 18:03:41",
    "text": "Přepis projevu, který dnes pan prezident pronesl ve Španělském sále Pražského hradu: https://t.co/L0rJEWzU1t"
  },
  {
    "id": 973981180927324200,
    "created_at": "2018-03-14 17:56:23",
    "text": "Hrad, Španělský sál. Daniel Hůlka a Václav Neckář. https://t.co/qthgxMjYJn"
  },
  {
    "id": 973975772338716700,
    "created_at": "2018-03-14 17:34:54",
    "text": "Videozáznam projevu pana prezidenta ve Španělském sále Pražského hradu: https://t.co/RCRv0xikbg"
  },
  {
    "id": 973974637821464600,
    "created_at": "2018-03-14 17:30:23",
    "text": "Hrad, Španělský sál. Koncert na počest inaugurace. Pan prezident poděkoval přátelům a podporovatelům. https://t.co/RMk1a61N0O"
  },
  {
    "id": 973939155184046100,
    "created_at": "2018-03-14 15:09:24",
    "text": "Kauzy Jaromíra Soukupa o netransparentním financování ČT: https://t.co/Khn40Em14e"
  },
  {
    "id": 973938023061651500,
    "created_at": "2018-03-14 15:04:54",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě na jeho žádost guvernéra České národní banky Jiřího Rusnoka."
  },
  {
    "id": 973936434729115600,
    "created_at": "2018-03-14 14:58:35",
    "text": "Kouzlo nechtěného! https://t.co/mUyrFulxMu"
  },
  {
    "id": 973926531855781900,
    "created_at": "2018-03-14 14:19:14",
    "text": "Prezident republiky Miloš Zeman dnes přijal na Pražském hradě na jeho žádost předsedu Úřadu pro ochranu hospodářské soutěže Petra Rafaje."
  },
  {
    "id": 973917254718054400,
    "created_at": "2018-03-14 13:42:22",
    "text": "@martindan @tbrolik @etabery @RESPEKT_CZ Nechápu, proč pan Tabery neloajálně verši napadá svého zaměstnavatele."
  },
  {
    "id": 973916567229599700,
    "created_at": "2018-03-14 13:39:38",
    "text": "Studenti nezapomínají na 79. výročí nacistické okupace, na temný 15. březen 1939. A to je dobře. https://t.co/n1l0133735"
  },
  {
    "id": 973899036041334800,
    "created_at": "2018-03-14 12:29:59",
    "text": "Komárek: Vím, že redaktoři ČT směřují k pravici a nejvíce k TOP 09. Jsou strašně nafoukaní: https://t.co/QIvwqiMoRc"
  },
  {
    "id": 973891204298498000,
    "created_at": "2018-03-14 11:58:51",
    "text": "Stohy všemožných petic s pochybnými slohy množí se jak hejna jepic a z myšlenek dělaj vdovy: https://t.co/fsuQMM0bB3"
  },
  {
    "id": 973856196078784500,
    "created_at": "2018-03-14 09:39:45",
    "text": "Velká gratulace paní kancléřce! https://t.co/Gm0lW23iUm https://t.co/4DConoS2Bl"
  },
  {
    "id": 973850372195438600,
    "created_at": "2018-03-14 09:16:36",
    "text": "Svoboda je úžasná. V jeden den setkání příznivců pana prezidenta i odpůrců. Vyjádřeme svůj názor slušně a hlavně bez nenávisti!"
  },
  {
    "id": 973652364858216400,
    "created_at": "2018-03-13 20:09:48",
    "text": "Přepis rozhovoru pro Dvacet minut Radiožurnálu: https://t.co/lp6bgqP0q1"
  },
  {
    "id": 973644101139816400,
    "created_at": "2018-03-13 19:36:57",
    "text": "Meeting key allies. Meeting friends. https://t.co/6dcOxGwCdI"
  },
  {
    "id": 973640497070858200,
    "created_at": "2018-03-13 19:22:38",
    "text": "RT @NickArcherFCO: A great moment.  Sincere thanks to HE The President for a warm reception reflecting the warmth of our countries’ friends…"
  },
  {
    "id": 973626655326527500,
    "created_at": "2018-03-13 18:27:38",
    "text": "Jiří Ovčáček vyslal z rádia jasný vzkaz těm, kteří jdou zítra „bránit“ ČT do ulic: https://t.co/PKAlnNsdEq"
  },
  {
    "id": 973589028045049900,
    "created_at": "2018-03-13 15:58:07",
    "text": "RT @MarieValaskova: Kdy Hrad zveřejní životopis Martina Nejedlého? A proč tají seznam pozvaných na inauguraci nebo na zítřejší prezidentovu…"
  },
  {
    "id": 973588994427621400,
    "created_at": "2018-03-13 15:57:59",
    "text": "Prezident republiky předal jmenovací dekret předsedovi ČSÚ: https://t.co/VfG23C7d4G https://t.co/0pqnXxNl8i"
  },
  {
    "id": 973577763335688200,
    "created_at": "2018-03-13 15:13:21",
    "text": "RT @UKinCR: Britský velvyslanec Nick Archer dnes na Pražském hradě předal své pověřovací listiny Prezidentu republiky Miloši Zemanovi. Foto…"
  },
  {
    "id": 973563740556800000,
    "created_at": "2018-03-13 14:17:38",
    "text": "RT @Radiozurnal1: Zítra večer budou na Václavském náměstí v Praze lidé kritizovat útoky Miloše Zemana proti České televizi a novinářům vůbe…"
  },
  {
    "id": 973519647462035500,
    "created_at": "2018-03-13 11:22:25",
    "text": "Pan prezident přivítal na Hradě významného ukrajinského historika a religionistu Igora Kozlovského. Podrobnosti zde… https://t.co/hJqjVu5fnz"
  },
  {
    "id": 973500442109005800,
    "created_at": "2018-03-13 10:06:06",
    "text": "Poprvé od Zemanova projevu. Prezident na nikoho neútočil, jen řekl pravdu, prohlásil jeho mluvčí: https://t.co/Mp5OMsqhAs"
  },
  {
    "id": 973489308366753800,
    "created_at": "2018-03-13 09:21:52",
    "text": "OVTV, videozáznam mé dnešní tiskové konference, která se konala na Hradě: https://t.co/mVPxGjyAlT https://t.co/7rAzfUbpTW"
  },
  {
    "id": 973312050129768400,
    "created_at": "2018-03-12 21:37:30",
    "text": "„Oni nenávidí každého z vás, kdo nejde s nimi.“ Jiří Ovčáček sepsal tento varovný text: https://t.co/UsrIxJJCGs"
  },
  {
    "id": 973300974268960800,
    "created_at": "2018-03-12 20:53:29",
    "text": "Miloš Zeman má svobodu slova: https://t.co/72ztEhuMx3"
  },
  {
    "id": 973270252837593100,
    "created_at": "2018-03-12 18:51:25",
    "text": "Oni vás nenávidí! Čtěte na webu Svobodný Názor: https://t.co/B7EtWBmevG https://t.co/gyLn53cYzu"
  },
  {
    "id": 973240220752760800,
    "created_at": "2018-03-12 16:52:05",
    "text": "@Zuzana94601322 Přeji hezké počtení: https://t.co/wQyTjD207i"
  },
  {
    "id": 973237601300877300,
    "created_at": "2018-03-12 16:41:40",
    "text": "Rok 1999, premiér Miloš Zeman. Zdroj: https://t.co/p7vtDUCAav https://t.co/zbhaXAPSg6"
  },
  {
    "id": 973228036974895100,
    "created_at": "2018-03-12 16:03:40",
    "text": "RT @NickArcherFCO: Hugely looking forward to tomorrow.  Ambassador-Designate good; Plenipotentiary better. https://t.co/PMWMBBJsAk"
  },
  {
    "id": 973205969713946600,
    "created_at": "2018-03-12 14:35:59",
    "text": "@NedyNadija Kuk: \"Zeman ist keine Marionette Russlands\" https://t.co/wQyTjD207i"
  },
  {
    "id": 973204698294636500,
    "created_at": "2018-03-12 14:30:55",
    "text": "@FakeNewsCZ @politikunatriku \"Zeman ist keine Marionette Russlands\" https://t.co/wQyTjD207i"
  },
  {
    "id": 973203586544033800,
    "created_at": "2018-03-12 14:26:30",
    "text": "Zeman ist keine Marionette Russlands\" https://t.co/wQyTjD207i"
  },
  {
    "id": 973203448144519200,
    "created_at": "2018-03-12 14:25:57",
    "text": "Česká média můj rozhovor pro německou TV MDR ignorují. Tak aspoň takto: https://t.co/BCd3Pvv8cJ"
  },
  {
    "id": 973182074155946000,
    "created_at": "2018-03-12 13:01:01",
    "text": "Český PEN klub bezprecedentním způsobem útočí na svobodu slova a zneužívá pro politické cíle vraždy dvou lidí: https://t.co/oNyVmzMQVQ"
  },
  {
    "id": 973180943581241300,
    "created_at": "2018-03-12 12:56:32",
    "text": "@Pater_JanSpacek @horalek_martin Zneužívání pojmů dobra a krásy v minulosti přineslo miliony mrtvých. Ve své POLITI… https://t.co/UtqS181yNf"
  },
  {
    "id": 973176392417534000,
    "created_at": "2018-03-12 12:38:27",
    "text": "RT @rudolf_jindrak: Nás velký úkol: adekvátně reagovat na překreslení personální mapy Evropy, k němuž v posledních letech dochází."
  },
  {
    "id": 973176363124514800,
    "created_at": "2018-03-12 12:38:20",
    "text": "RT @rudolf_jindrak: Klíčové tématické ZP priority pro 2. volební období: vztahy se sousedy, EU, V4 a další regionální formáty, boj proti te…"
  },
  {
    "id": 973175951457701900,
    "created_at": "2018-03-12 12:36:42",
    "text": "RT @AmbMeron: עיתונאי צ׳כי משבח את הדיגיטל והסייבר בישראל https://t.co/hbi5vgci3P"
  },
  {
    "id": 973174896904851500,
    "created_at": "2018-03-12 12:32:30",
    "text": "RT @parlamentky_cz: @PREZIDENTmluvci Jak se rozdělují peníze do filmů https://t.co/Dy4wMNtvt0"
  },
  {
    "id": 973146766135656400,
    "created_at": "2018-03-12 10:40:43",
    "text": "Už tu zase někdo chce šířit krásu a dobro. Ve 20. století jsme si toho snad “užili” dost, ne? https://t.co/yCmqbqDhCK"
  },
  {
    "id": 973141657381109800,
    "created_at": "2018-03-12 10:20:25",
    "text": "Prezident republiky přijme nové velvyslance: https://t.co/WjQwpAMbFx"
  },
  {
    "id": 973140174858346500,
    "created_at": "2018-03-12 10:14:32",
    "text": "V úterý 13.3.2018 se v 10.00 na Hradě uskuteční poprvé v druhém funkčním období pana prezidenta má tisková konference k aktuálním tématům."
  },
  {
    "id": 973106368675795000,
    "created_at": "2018-03-12 08:00:12",
    "text": "RT @rudolf_jindrak: Budeme pokračovat v koordinaci ZP se všemi relevantními institucemi: MZV, další rezorty, parlament atd."
  },
  {
    "id": 973106342494908400,
    "created_at": "2018-03-12 08:00:06",
    "text": "RT @rudolf_jindrak: Začíná snídaně @AMO_cz k zahraniční politice prezidenta republiky. https://t.co/6tQvNMSbah"
  },
  {
    "id": 973095840180031500,
    "created_at": "2018-03-12 07:18:22",
    "text": "@JosUrvalek @CzechTV @FLutonsky @kalousekm @TOP09cz Mirek je pro zaměstnance ČT posvátný. V tajné místnosti mají je… https://t.co/LQB9YwMgWd"
  },
  {
    "id": 973093197412012000,
    "created_at": "2018-03-12 07:07:52",
    "text": "RT @SlechtovaKarla: Dnes je to jiz 19 let, kdy jsme cleny Severoatlanticke aliance. Je to ta nejlepsi pojistka pro nasi bezpecnost a obranu…"
  },
  {
    "id": 972953729690427400,
    "created_at": "2018-03-11 21:53:40",
    "text": "Orbán se opět pustil do Sorose, útočí prý i na Česko a Slovensko: https://t.co/t1pw4ZvKF4"
  },
  {
    "id": 972908594831282200,
    "created_at": "2018-03-11 18:54:19",
    "text": "Přímý útok na svobodu a demokracii v ČR vedou tzv. elity, které odmítají výsledek svobodných voleb a uráží každého, kdo má odlišný názor."
  },
  {
    "id": 972906804194791400,
    "created_at": "2018-03-11 18:47:12",
    "text": "RT @tomasreiter: Tomáš Tyl dobře. https://t.co/c0br6GlB0x"
  },
  {
    "id": 972883370853183500,
    "created_at": "2018-03-11 17:14:05",
    "text": "RT @Algemeiner: The Czech president is doubling down on his intent to see his country’s embassy in Israel relocate from Tel Aviv... https:/…"
  },
  {
    "id": 972860094546370600,
    "created_at": "2018-03-11 15:41:36",
    "text": "Glosa: Žít z grantů, fakturovat státu a pak se vysmívat divákům, kteří to celé platí? https://t.co/M1QfLlqLhJ"
  },
  {
    "id": 972838302343671800,
    "created_at": "2018-03-11 14:15:00",
    "text": "Ovčáček kritizuje kritiky. Zveřejnil sérii ostrých tweetů na účet Svěráka, Najbrta i ČT: https://t.co/lFc1fV5vRi"
  },
  {
    "id": 972837051967180800,
    "created_at": "2018-03-11 14:10:02",
    "text": "Výzva “Nenávidíme vás, protože volíte Zemana a Babiše. Ale koukejte si nás platit!” https://t.co/E7OIjXwDzU"
  },
  {
    "id": 972824837252055000,
    "created_at": "2018-03-11 13:21:30",
    "text": "Jaro :-) https://t.co/Z6AsO5nxY9"
  },
  {
    "id": 972801249375596500,
    "created_at": "2018-03-11 11:47:46",
    "text": "Krásnou neděli, přátelé! https://t.co/JyiIIrh8eI"
  },
  {
    "id": 972751391226818600,
    "created_at": "2018-03-11 08:29:39",
    "text": "Udělování Českých lvů, se záběry kamer na růžolícího ústředního ředitele ČST P. Dvořáka, plně potvrdilo inaugurační projev pana prezidenta."
  },
  {
    "id": 972593906964684800,
    "created_at": "2018-03-10 22:03:51",
    "text": "Pilíř naší skutečnosti. Ideová. Pokroková. Odhaluje renegáty. Tepe nešvary. ČST Praha. Je zpět mezi námi! https://t.co/VWfP3LedX4"
  },
  {
    "id": 972574395695796200,
    "created_at": "2018-03-10 20:46:20",
    "text": "Ruce pryč od ČT!\n\nRuce pryč od Koreje! https://t.co/9NwQC68uVx"
  },
  {
    "id": 972572953908076500,
    "created_at": "2018-03-10 20:40:36",
    "text": "RT @AmbMeron: היום מלאו 70 שנה למותו הטראגי של שר החוץ הצ׳כוסלובקי יאן מסריק, שהיה ידיד נאמן לרעיון הקמת מדינת מדינת ישראל ופעל למימושו, כו…"
  },
  {
    "id": 972570670654787600,
    "created_at": "2018-03-10 20:31:32",
    "text": "@petbar22 Aspoň vidíte, že médiím se nedá věřit!"
  },
  {
    "id": 972570463971967000,
    "created_at": "2018-03-10 20:30:42",
    "text": "@jaroslavtk @PatrikTluchor A pak věřte médiím!"
  },
  {
    "id": 972569780392734700,
    "created_at": "2018-03-10 20:27:59",
    "text": "Zřejmě jde o retro vysílání. Právě je ve vysílání ČT spíláno “přisluhovačům”. Tipuji to na rok výroby 1977."
  },
  {
    "id": 972568488912056300,
    "created_at": "2018-03-10 20:22:51",
    "text": "POZOR! Českého lva za politickou uvědomělost a bdělost nezískal Václav Neužil, ale Marek Najbrt za povolební výkřik “Nevolte Miloše Zemana”!"
  },
  {
    "id": 972564524615327700,
    "created_at": "2018-03-10 20:07:06",
    "text": "Českého lva za politickou uvědomělost a bdělost získává Václav Neužil za povolební výkřik “nevolte Zemana”! https://t.co/870UiVZPSf"
  },
  {
    "id": 972560303111180300,
    "created_at": "2018-03-10 19:50:20",
    "text": "RT @AmbMeron: Today we commemorate 70 years from the death of JAN MASARYK, Czech Minister of Foreign Affairs and one of the greatest Czecho…"
  },
  {
    "id": 972560102115958800,
    "created_at": "2018-03-10 19:49:32",
    "text": "Stačí jenom zopakovat: https://t.co/Ngc9HW0yb2"
  },
  {
    "id": 972552209312383000,
    "created_at": "2018-03-10 19:18:10",
    "text": "@LiborFrank Ale Vy jste to nepochopil. Mirek je hned lidštější. Pionýr, normalizační ČSL, pokus o koalici s KSČM. J… https://t.co/0cDWc7sksb"
  },
  {
    "id": 972548613913174000,
    "created_at": "2018-03-10 19:03:53",
    "text": "Jiří Ovčáček pro PL: Newsroom ČT24. To je stoka, která lynčuje kohokoli, kdo má odlišný názor! https://t.co/qM3jQb3zXV"
  },
  {
    "id": 972485921634443300,
    "created_at": "2018-03-10 14:54:46",
    "text": "RT @SlechtovaKarla: Statečný boj legionářů u Bachmače byl historicky prvním samostatným bojovým vystoupením československé jednotky ještě p…"
  },
  {
    "id": 972410421033558000,
    "created_at": "2018-03-10 09:54:45",
    "text": "https://t.co/SUYZ7hyZKI"
  },
  {
    "id": 972394336141930500,
    "created_at": "2018-03-10 08:50:50",
    "text": "@SociologPetrHam Prý hrozí celostátní stávka studentů genderových oborů."
  },
  {
    "id": 972368188796276700,
    "created_at": "2018-03-10 07:06:56",
    "text": "@horalek_martin Prostředí ČT na Vás má neblahý vliv. Dejte si kávičku. To uklidňuje zjitřenou mysl."
  },
  {
    "id": 972362894120767500,
    "created_at": "2018-03-10 06:45:54",
    "text": "Po inauguraci mám velkou starost o zdraví M. Němcové. Prý skoro infarkt. Měla by se vystříhat zbytečného rozčilování a trávit čas na lůžku."
  },
  {
    "id": 972220093018050600,
    "created_at": "2018-03-09 21:18:27",
    "text": "Návštěva Knihkupectví a antikvariátu Fryč v Liberci dopadla na výbornou! https://t.co/CCkXaE8VTS"
  },
  {
    "id": 972206087872176100,
    "created_at": "2018-03-09 20:22:48",
    "text": "RT @SlechtovaKarla: Pry mam byt velvyslankyni v Izraeli a dnes vyšlo, že na Slovensku nebo Japonsku. Že si vybírám. No, fáma, nikam se nech…"
  },
  {
    "id": 972192605130850300,
    "created_at": "2018-03-09 19:29:14",
    "text": "@TheStudentTimes @TBarrandov Žádný problém s rozhovorem. Zašlete kontakt mailem, v pondělí nabídnu termíny na výběr."
  },
  {
    "id": 972191706283167700,
    "created_at": "2018-03-09 19:25:39",
    "text": "ČT není žádný demokratický pilíř. ČT je opora deep state, který si tradiční strany budovaly od roku 2002. ČT chrání mocné těchto stran."
  },
  {
    "id": 972191604437078000,
    "created_at": "2018-03-09 19:25:15",
    "text": "@TheStudentTimes @CzechTV @JaromirSoukup @jirizimola ČT není žádný demokratický pilíř. ČT je opora deep state, kter… https://t.co/oLSP50iAzQ"
  },
  {
    "id": 972175576877490200,
    "created_at": "2018-03-09 18:21:34",
    "text": "Jiří Ovčáček před kamerou PL: Že jsou Drahošovi voliči pražská kavárna a měli by mlčet? V žádném případě https://t.co/4baaYSxFXq"
  },
  {
    "id": 972162161547055100,
    "created_at": "2018-03-09 17:28:15",
    "text": "Demonstrovat v roce 2018 na podporu ČT je stejné, jako demonstrovat v roce 1973 na podporu KSČ."
  },
  {
    "id": 972159734072700900,
    "created_at": "2018-03-09 17:18:37",
    "text": "Wollner a Veselovský lhali prakticky v přímém přenosu. Přidáme důkaz a pozdrav Bakalovi: https://t.co/1zMP5HFkLK"
  },
  {
    "id": 972158354578640900,
    "created_at": "2018-03-09 17:13:08",
    "text": "Doufám, že demonstrující na podporu ČST Praha přijde podpořit kandidát KSČ Petr Dvořák. Ať to má šmrnc. Podrývání naší skutečnosti zarazíme!"
  },
  {
    "id": 972156427728048100,
    "created_at": "2018-03-09 17:05:28",
    "text": "Tuhle pohádku teď budeme občas slýchat: Nikdo z organizátorů není nijak napojen na žádnou z politických stran."
  },
  {
    "id": 972140072203059200,
    "created_at": "2018-03-09 16:00:29",
    "text": "RT @Blesk24: .@PREZIDENTmluvci má pionýrské „kompro“ na @kalousekm. Exšéf @TOP09cz šel s pravdou ven https://t.co/wjqkrNPUX4"
  },
  {
    "id": 972123417284620300,
    "created_at": "2018-03-09 14:54:18",
    "text": "@ZdenekVoda Ano, berou diváky jako obtížný hmyz, který je má platit a přitom držet hubu."
  },
  {
    "id": 972098403663523800,
    "created_at": "2018-03-09 13:14:54",
    "text": "Pomýlení politici mohou opět získat přízeň médií. Je ale třeba koupit si odpustek. Cena za 1 kus: 1 kopanec do inauguračního projevu."
  },
  {
    "id": 972088742252073000,
    "created_at": "2018-03-09 12:36:31",
    "text": "https://t.co/mUrwwd2wgl"
  },
  {
    "id": 972086285786640400,
    "created_at": "2018-03-09 12:26:45",
    "text": "Přepis rozhovoru pana prezidenta pro pořad TV Barrandov „Týden s prezidentem“: https://t.co/WqRrW3zkSI"
  },
  {
    "id": 972082536452108300,
    "created_at": "2018-03-09 12:11:51",
    "text": "Silný trumf ve prospěch Mirka! https://t.co/uT7Os03ee9"
  },
  {
    "id": 972081423661391900,
    "created_at": "2018-03-09 12:07:26",
    "text": "RT @stropnickym: Jan Masaryk byl po konci války jedním z nejvýraznějších protagonistů zápasu o tvář Československa. Jeho smrt přišla jako k…"
  },
  {
    "id": 972079986147504100,
    "created_at": "2018-03-09 12:01:43",
    "text": "Přímo volený prezident je odpovědný občanům. Inaugurační projev byl proto určen vyhradně občanům! Pak nepřekvápí, že někteří politici mručí."
  },
  {
    "id": 972064829900025900,
    "created_at": "2018-03-09 11:01:30",
    "text": "Vyhlašuji anketu. Pište pod status. Kdo je sympatičtější? Mirek nebo Jirka? https://t.co/SqiiRwk3YB"
  },
  {
    "id": 972063320621699100,
    "created_at": "2018-03-09 10:55:30",
    "text": "@Otakar_Brabec Omyl. Tohle je jiný pán. Teď hrozně bojuje s Babišem a Zemanem. Pátrejte!"
  },
  {
    "id": 972063083064692700,
    "created_at": "2018-03-09 10:54:33",
    "text": "@Otakar_Brabec Omyl. Tohle je jiný pán. Teď hrozně bojuje s Babišem a Zemanem. Pátrejte!"
  },
  {
    "id": 972061994097528800,
    "created_at": "2018-03-09 10:50:14",
    "text": "Roztomilé. Mládí, ideály... https://t.co/Ao4VF5WgRR"
  },
  {
    "id": 972055186909909000,
    "created_at": "2018-03-09 10:23:11",
    "text": "RT @JVildumetzova: Včerejší inaugurace Miloš Zeman - prezident ČR byla pro mě velice slavnostní a neopakovatelnou chvílí. Jsem moc... https…"
  },
  {
    "id": 972051697748103200,
    "created_at": "2018-03-09 10:09:19",
    "text": "Prezident republiky obdržel gratulaci od předsedy Světového židovského kongresu: https://t.co/drESMcTQzR"
  },
  {
    "id": 972049538008735700,
    "created_at": "2018-03-09 10:00:44",
    "text": "Je opravdu skvělé, že studenti nezapomínají na historii a 79. výročí německé okupace 15. března 1939 připomenou symbolickou stávkou!"
  },
  {
    "id": 972046635487424500,
    "created_at": "2018-03-09 09:49:12",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 8. března 2018, 20:15, TV Barrandov: https://t.co/5ziIb7XyBW"
  },
  {
    "id": 972032932113207300,
    "created_at": "2018-03-09 08:54:45",
    "text": "Analytička po projevu Zemana: Hřebejk žije z peněz těch, kterými pohrdá. ČT potvrdila, že kritici mají pravdu https://t.co/rjXnrzFSEd"
  },
  {
    "id": 972031843695583200,
    "created_at": "2018-03-09 08:50:25",
    "text": "RT @SlechtovaKarla: Se zástupci veteránských organizací si dnes a zítra připomeneme u Sokolova a v Bachmači významné bitvy naší vojenské hi…"
  },
  {
    "id": 972030899884871700,
    "created_at": "2018-03-09 08:46:40",
    "text": "RT @jirizimola: ČT má dlouhodobě problémy, které se musí začít řešit systémově. Televize je ještě stále velmi silné a vlivné médium a hrani…"
  },
  {
    "id": 972011198471397400,
    "created_at": "2018-03-09 07:28:23",
    "text": "RT @AmbMeron: Czech President wants country’s Embassy to move to Jerusalem https://t.co/eGGoYavi4R"
  },
  {
    "id": 971881864251215900,
    "created_at": "2018-03-08 22:54:27",
    "text": "Miloš Zeman, prezident republiky, 8.3.2018: https://t.co/nwAj8EtQQF"
  },
  {
    "id": 971881483324592100,
    "created_at": "2018-03-08 22:52:56",
    "text": "Přečtěte si pasáž inauguračního projevu pana prezidenta, kterou okamžitě svým jednáním potvrdila TOP 09 a ruku v ru… https://t.co/lyGZw1TmNL"
  },
  {
    "id": 971852348296482800,
    "created_at": "2018-03-08 20:57:10",
    "text": "Miloš Zeman, prezident republiky, 8.3.2018: https://t.co/StexVVteb8"
  },
  {
    "id": 971849993240838100,
    "created_at": "2018-03-08 20:47:49",
    "text": "Slavnostní den završen návštěvou skvělého představení. https://t.co/FwclRGjvSo"
  },
  {
    "id": 971846623759347700,
    "created_at": "2018-03-08 20:34:25",
    "text": "Demokracie není ohrožena, ohroženy jsou pozice těch, kteří prohráli.\n\nMiloš Zeman, prezident republiky, 8.3.2018."
  },
  {
    "id": 971800181518762000,
    "created_at": "2018-03-08 17:29:53",
    "text": "Symbol české státnosti a duchovní centrum země. Pražský hrad. Demokratická kotva pro rozbouřené doby. https://t.co/bF1IPsevYt"
  },
  {
    "id": 971791634731094000,
    "created_at": "2018-03-08 16:55:55",
    "text": "Prezident republiky Miloš Zeman vystoupí dnes ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov. Sledujte!"
  },
  {
    "id": 971789778940293100,
    "created_at": "2018-03-08 16:48:32",
    "text": "Inaugurační projev prezidenta republiky Miloše Zemana: https://t.co/WzZg7P5iQe"
  },
  {
    "id": 971782899136593900,
    "created_at": "2018-03-08 16:21:12",
    "text": "Report: Czechs Want to Speed Up Embassy Move to Jerusalem https://t.co/zn1cMcd4r8"
  },
  {
    "id": 971781000442404900,
    "created_at": "2018-03-08 16:13:39",
    "text": "Prezident republiky, který je hlasem občanů, ne hlasem médií. https://t.co/wbYuPu1aB6"
  },
  {
    "id": 971763499587330000,
    "created_at": "2018-03-08 15:04:07",
    "text": "Katedrála sv. Víta. Modlitba Páně, uctění památky sv. Václava a modlitba za prezidenta republiky. https://t.co/RWwvU1pwbY"
  },
  {
    "id": 971760375225077800,
    "created_at": "2018-03-08 14:51:42",
    "text": "RT @dominikduka: Prezident Zeman se ujímá svého druhého mandátu v nelehké době zejména kvůli situaci v zahraničí. Vyprošuji mu mnoho sil a…"
  },
  {
    "id": 971759721488273400,
    "created_at": "2018-03-08 14:49:06",
    "text": "https://t.co/rkwg8a70WT"
  },
  {
    "id": 971751287737012200,
    "created_at": "2018-03-08 14:15:35",
    "text": "RT @jhamacek: Bylo mi ctí se zúčastnit dnešní inaugurace prezidenta Miloše Zemana na Pražském hradě. Přeji panu prezidentovi hodně zdraví a…"
  },
  {
    "id": 971749824512094200,
    "created_at": "2018-03-08 14:09:47",
    "text": "Prezident republiky Miloš Zeman ve Vladislavském sále Hradu složil ústavou předepsaný slib. Druhé funkční období za… https://t.co/doxADImhQK"
  },
  {
    "id": 971744827644764200,
    "created_at": "2018-03-08 13:49:55",
    "text": "Prezident republiky! https://t.co/alF11F1op1"
  },
  {
    "id": 971725072082882600,
    "created_at": "2018-03-08 12:31:25",
    "text": "Prvním bodem programu pana prezidenta na Hradě nebyly oficiality.\nHned po příchodu do pracovny popřál k MDŽ své pan… https://t.co/h2EPAFLvf7"
  },
  {
    "id": 971721121027493900,
    "created_at": "2018-03-08 12:15:43",
    "text": "Na III. nádvoří Hradu přišla i dcera pana prezidenta Kateřina Zemanová. https://t.co/7kiyObIK61"
  },
  {
    "id": 971720662858518500,
    "created_at": "2018-03-08 12:13:54",
    "text": "Paní Ivana Zemanová na III. nádvoří Hradu rozdávala občanům čekajícím na inauguraci koláčky, které pomáhala upéct v… https://t.co/7UgC85RzZc"
  },
  {
    "id": 971717603084456000,
    "created_at": "2018-03-08 12:01:44",
    "text": "Dnes je opravdu nádherně :-) https://t.co/ifogiDmTBm"
  },
  {
    "id": 971716633822662700,
    "created_at": "2018-03-08 11:57:53",
    "text": "RT @jirizimola: #prezident Miloš Zeman dnes složí slib a vstoupí tak do druhého prezidentského období. Slavnostní podpis se uskuteční letos…"
  },
  {
    "id": 971700461173604400,
    "created_at": "2018-03-08 10:53:37",
    "text": "President Zeman himself is a true friend of the Jewish people: https://t.co/Zuah9ITlZd"
  },
  {
    "id": 971692305555116000,
    "created_at": "2018-03-08 10:21:13",
    "text": "Cesta k vítězství! Jsem hrdým majitelem nové knihy, kterou mohu jen doporučit. https://t.co/Rf2RZ5IRKP https://t.co/ryHh1dYfgU"
  },
  {
    "id": 971659830778826800,
    "created_at": "2018-03-08 08:12:10",
    "text": "RT @AmbMeron: עדכון מפראג: הנשיא זמאן רוצה שצ׳כיה תצטרף ליוזמת הנשיא טראמפ להעברת השגרירות לירושלים. ארה״ב 1 : צ׳כיה 2? https://t.co/aVWXHr…"
  },
  {
    "id": 971486712336650200,
    "created_at": "2018-03-07 20:44:16",
    "text": "RT @AmbMeron: On occasion of President's #Masaryk' s bthday @IsraelinCZ launched exhibition \"Masaryk and the Holyland\" in TGM museum in @Ob…"
  },
  {
    "id": 971483743985786900,
    "created_at": "2018-03-07 20:32:28",
    "text": "@VojtechGibis Plně souhlasím s Andrejem Babišem: Snad nejlépe od revoluce fungovala menšinová Zemanova vláda."
  },
  {
    "id": 971483706199302100,
    "created_at": "2018-03-07 20:32:19",
    "text": "@VojtechGibis Plně souhlasím s Andrejem Babišem: Snad nejlépe od revoluce fungovala menšinová Zemanova vláda."
  },
  {
    "id": 971479934324666400,
    "created_at": "2018-03-07 20:17:20",
    "text": "Václav Havel podporoval zavedení přímé volby prezidenta republiky. Rok 2011. https://t.co/VjIGJjy44d"
  },
  {
    "id": 971478869558612000,
    "created_at": "2018-03-07 20:13:06",
    "text": "Povinná četba před inaugurací pro tzv. demokratické strany. Aby věděly, jak vypadá politická slušnost. Rok 1998. https://t.co/KBwE33Y6N6"
  },
  {
    "id": 971456351795843100,
    "created_at": "2018-03-07 18:43:37",
    "text": "https://t.co/mF5Re12FA2"
  },
  {
    "id": 971455511676809200,
    "created_at": "2018-03-07 18:40:17",
    "text": "Tak se podívejme, jak se v pondělí chovali “demokraté”: https://t.co/ipNUstPws6"
  },
  {
    "id": 971432265157922800,
    "created_at": "2018-03-07 17:07:55",
    "text": "RT @USAmbPrague: Czech-American historical ties have no better embodiment than the life and work of Tomáš G. #Masaryk, born on this day in…"
  },
  {
    "id": 971431062021828600,
    "created_at": "2018-03-07 17:03:08",
    "text": "https://t.co/eLpvJv9IuO"
  },
  {
    "id": 971416482289766400,
    "created_at": "2018-03-07 16:05:12",
    "text": "Prezident republiky Miloš Zeman přijal ve středu 7.3.2018 na Hradě na jeho žádost Daniela Beneše, generálního ředitele společnosti ČEZ."
  },
  {
    "id": 971404628825919500,
    "created_at": "2018-03-07 15:18:05",
    "text": "Panu prezidentovi důvěřuje 56 procent občanů: https://t.co/YaT8weEIVV"
  },
  {
    "id": 971395644626698200,
    "created_at": "2018-03-07 14:42:23",
    "text": "Právě dnes proběhla ve Vladislavském sále Hradu generální zkouška inaugurace prezidenta republiky. Vše je připraven… https://t.co/0HdiSV5g9I"
  },
  {
    "id": 971372048848171000,
    "created_at": "2018-03-07 13:08:38",
    "text": "Hrad, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte ve čtvrtek 8. března 2018 ve 20:15 na TV Barrandov! https://t.co/CPlMHhcNbg"
  },
  {
    "id": 971362994591555600,
    "created_at": "2018-03-07 12:32:39",
    "text": "Prezident republiky vyhlásil termín doplňovacích voleb do Senátu: https://t.co/a8aAZah6S4"
  },
  {
    "id": 971355693088374800,
    "created_at": "2018-03-07 12:03:38",
    "text": "Boj, to není humanita. Čtěte na webu Svobodný Názor! https://t.co/LIbfgAswth https://t.co/bhh2acubP1"
  },
  {
    "id": 971340823597117400,
    "created_at": "2018-03-07 11:04:33",
    "text": "RT @TBarrandov: Kauza ČT dnes pokračuje! Ředitel České televize Petr Dvořák nám vyhrožuje, že se postará o to, aby nám sebrali licenci. Nem…"
  },
  {
    "id": 971340748703617000,
    "created_at": "2018-03-07 11:04:15",
    "text": "RT @USEmbassyPrague: #českoamerickéstoletí Před 58 lety dostal prezident Tomáš Garrigue Masaryk k narozeninám americkou poštovní známku „Ch…"
  },
  {
    "id": 971322758352330800,
    "created_at": "2018-03-07 09:52:46",
    "text": "Pan prezident se svojí paní na hřbitově v Lánech u příležitosti 168. výročí narození uctili památku prvního čs. pre… https://t.co/VO33909ImQ"
  },
  {
    "id": 971148322810597400,
    "created_at": "2018-03-06 22:19:37",
    "text": "OBRAZEM: Podívejte se, jak čeští a českoslovenští prezidenti slibovali https://t.co/gpFio8LD94"
  },
  {
    "id": 971146315425091600,
    "created_at": "2018-03-06 22:11:39",
    "text": "Je to největší protest od roku 1989, tak si to, vládo, zapiš za uši: https://t.co/TBwWsR06Td"
  },
  {
    "id": 971078632448909300,
    "created_at": "2018-03-06 17:42:42",
    "text": "RT @netanyahu: Thank you, @AIPAC! https://t.co/BAPaUGtsPB"
  },
  {
    "id": 971027882372984800,
    "created_at": "2018-03-06 14:21:02",
    "text": "Hrad, Vladislavský sál. Z pečlivých příprav na inauguraci prezidenta republiky, která proběhne ve čtvrtek 8. března… https://t.co/bfnqDNk6Kd"
  },
  {
    "id": 970987940020138000,
    "created_at": "2018-03-06 11:42:19",
    "text": "RT @CUTIzpravy: Vedoucí úloha KSČM nám fakt nehrozí. Svobodu a demokracii ohrožují neobolševici, kteří nenávistně útočí na každého, kdo má…"
  },
  {
    "id": 970985195091480600,
    "created_at": "2018-03-06 11:31:25",
    "text": "RT @TBarrandov: Šéf vítězné strany ANO 2011 Andrej Babiš bude hostem Jaromíra Soukupa - mluvit se bude o fungování vlády, o volbě šéfa sněm…"
  },
  {
    "id": 970983365548658700,
    "created_at": "2018-03-06 11:24:09",
    "text": "Hostem Pressklubu rádia Frekvence 1 bude v 18:00 ředitel Odb. protokolu KPR V. Kruliš. Mluvit bude o čtvrteční inauguraci pana prezidenta."
  },
  {
    "id": 970976376777052200,
    "created_at": "2018-03-06 10:56:22",
    "text": "Ideově “správní” novináři na sociálních sítích kádrují své kolegy. Hlavní kádrováci jsou ve veřejnoprávních médiích. Budou akční výbory?"
  },
  {
    "id": 970964998720761900,
    "created_at": "2018-03-06 10:11:10",
    "text": "Vy jeden, každý musíme snést mínění druhého. Čtěte na webu Svobodný Názor: https://t.co/9ELC9xVSiQ https://t.co/q3JwA1YJP9"
  },
  {
    "id": 970935317757820900,
    "created_at": "2018-03-06 08:13:13",
    "text": "Prezident republiky Miloš Zeman ve středu 7. března 2018 uctí památku T. G. Masaryka: https://t.co/Yxru1hVggp"
  },
  {
    "id": 970920392431988700,
    "created_at": "2018-03-06 07:13:55",
    "text": "Pohled z Hradu na Prahu v bílém šatu. https://t.co/CGo0VemScb"
  },
  {
    "id": 970916801768017900,
    "created_at": "2018-03-06 06:59:38",
    "text": "Ovčáček vypálil: Stydím se za ně. Protesty proti Ondráčkovi se zvrhly v nenávistnou antizemanovskou kampaň! https://t.co/4yTReqxkHs"
  },
  {
    "id": 970779381273628700,
    "created_at": "2018-03-05 21:53:35",
    "text": "RT @CUTIzpravy: V roce 1989 lidé demonstrovali za svobodné volby.\n\nV roce 2018 někteří demonstrují proti svobodným volbám."
  },
  {
    "id": 970770970486149100,
    "created_at": "2018-03-05 21:20:10",
    "text": "Drzé čelo lepší než poplužní dvůr. Další člen KSČ, který dnes kádruje druhé: https://t.co/5hKmEfTPgb"
  },
  {
    "id": 970766248949755900,
    "created_at": "2018-03-05 21:01:24",
    "text": "RT @netanyahu: President Trump, the US-Israel alliance has never been stronger than it is now under your leadership. Thank you for your tre…"
  },
  {
    "id": 970759829697462300,
    "created_at": "2018-03-05 20:35:53",
    "text": "Když už jsme u toho. Co ČST Praha a KSČ? Je čas podívat se do minulosti: https://t.co/goFe0LftNK"
  },
  {
    "id": 970757461618589700,
    "created_at": "2018-03-05 20:26:29",
    "text": "https://t.co/MH2yCDDTE5"
  },
  {
    "id": 970755937706414100,
    "created_at": "2018-03-05 20:20:25",
    "text": "RT @poblitolog: víte někdo, mně by teda docela zajímalo .... když demonstrantům tak strašně vadí předlistopadovej řadovej policajt jako pře…"
  },
  {
    "id": 970755144605421600,
    "created_at": "2018-03-05 20:17:16",
    "text": "Stydím se za ty, kteří právě dnes nenávistně útočí na člověka, který byl statečně proti okupaci #1968 a komunistickému režimu #1989!"
  },
  {
    "id": 970745749767180300,
    "created_at": "2018-03-05 19:39:56",
    "text": "Takže se to podle očekávání nakonec zvrhlo v klasický nenávistný antizemanovský protest. https://t.co/ZMO1pWDWyi"
  },
  {
    "id": 970732194913308700,
    "created_at": "2018-03-05 18:46:05",
    "text": "Ve svobodných a demokratických volbách shořeli, lidé jim nevěří. A tak se dnes neúspěšní politici přilepili na náměstí jako vosy na med."
  },
  {
    "id": 970656148587151400,
    "created_at": "2018-03-05 13:43:54",
    "text": "RT @TBarrandov: Kauza ČT pokračuje! Nahlédněte do bizarního světa hospodaření České televize i tuto středu ve 21:25 s pořadem Kauzy Jaromír…"
  },
  {
    "id": 970654737589776400,
    "created_at": "2018-03-05 13:38:17",
    "text": "RT @rudolf_jindrak: Co pro nás bude znamenat pokračování velké koalice v Německu? Svůj pohled jsem představil včera v ČRo (od času 18:00).…"
  },
  {
    "id": 970637146385276900,
    "created_at": "2018-03-05 12:28:23",
    "text": "Nesmí chybět ve vaší knihovně! Již brzy na knižním trhu: https://t.co/gemuTx8xcC"
  },
  {
    "id": 970600483634188300,
    "created_at": "2018-03-05 10:02:42",
    "text": "RT @BaraPeterova: Na místě výstavby dálnice D49 převzal @AndrejBabis petici s podpisy 15 000 lidí. Taky jsme chtěli vidět toho křečka, kter…"
  },
  {
    "id": 970359199514406900,
    "created_at": "2018-03-04 18:03:56",
    "text": "Jiří Ovčáček vyzývá: Braňme Masarykův odkaz- svobodu. Před cenzurou a kádrováním https://t.co/ItgJjgHPgH"
  },
  {
    "id": 970359132514672600,
    "created_at": "2018-03-04 18:03:40",
    "text": "RT @BaraPeterova: Vláda jede! 🚆První cesta do regionů právě začala. Míříme do Zlína a okolí. https://t.co/vLxg5uxf9P"
  },
  {
    "id": 970284645475651600,
    "created_at": "2018-03-04 13:07:41",
    "text": "“Braňme Masarykův odkaz”. Nově na webu Svobodný Názor: https://t.co/a8hJ83pt5K https://t.co/RncQiSM2mD"
  },
  {
    "id": 970264307933024300,
    "created_at": "2018-03-04 11:46:52",
    "text": "V čele stále Babiš, TOP 09 a STAN by ve volbách propadly: https://t.co/jQPlSZC2y6"
  },
  {
    "id": 970238503614320600,
    "created_at": "2018-03-04 10:04:20",
    "text": "Jak bude vypadat inaugurace prezidenta? Masarykův stůl, speciální pero, čestné salvy a 700 hostů: https://t.co/Xgr7BTCwi6"
  },
  {
    "id": 970008090899812400,
    "created_at": "2018-03-03 18:48:45",
    "text": "RT @StandWithUs: Shavua tov! Have a great week!"
  },
  {
    "id": 969656168741294100,
    "created_at": "2018-03-02 19:30:20",
    "text": "RT @BreitbartNews: https://t.co/tZ29vqv0gT"
  },
  {
    "id": 969595405133647900,
    "created_at": "2018-03-02 15:28:53",
    "text": "Přepis rozhovoru pana prezidenta pro pořad TV Barrandov „Týden s prezidentem“: https://t.co/76Rrw5wZH5"
  },
  {
    "id": 969566395955601400,
    "created_at": "2018-03-02 13:33:37",
    "text": "Historia magistra vitae. Pro Havla jsou kontakty Tošovského s StB samozřejmostí: https://t.co/ub3Hi0m5Jn"
  },
  {
    "id": 969513787161305100,
    "created_at": "2018-03-02 10:04:34",
    "text": "Prezident republiky obdržel gratulaci od představenstva AIPAC: https://t.co/KF6e2g3W3P"
  },
  {
    "id": 969510460767768600,
    "created_at": "2018-03-02 09:51:21",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 1. března 2018, 20:15, TV Barrandov: https://t.co/dRkk27lwwS"
  },
  {
    "id": 969224346744115200,
    "created_at": "2018-03-01 14:54:26",
    "text": "Prezident republiky udělil milost: https://t.co/KIbKGz1i25"
  },
  {
    "id": 969214280737394700,
    "created_at": "2018-03-01 14:14:26",
    "text": "Prezident republiky Miloš Zeman přijal 1.3. na Pražském hradě na jeho žádost Josefa Bečváře, náčelníka Generálního štábu Armády ČR."
  },
  {
    "id": 969192101484417000,
    "created_at": "2018-03-01 12:46:18",
    "text": "Prezident republiky zaslal dopis papeži Františkovi: https://t.co/JfUw4B75Kr"
  },
  {
    "id": 969152719486378000,
    "created_at": "2018-03-01 10:09:48",
    "text": "Právě teď, Hrad. Natáčení pořadu \"Týden s prezidentem\", sledujte dnes ve 20:15 na TV Barrandov! https://t.co/fj5Hs4opee"
  },
  {
    "id": 968901269803892700,
    "created_at": "2018-02-28 17:30:38",
    "text": "Hrad. Momentka z dnešního setkání pana prezidenta s ministryní obrany Karlou Šlechtovou. https://t.co/LGNfrDVVcN"
  },
  {
    "id": 968875565729054700,
    "created_at": "2018-02-28 15:48:30",
    "text": "Srdečně gratuluji! https://t.co/3epVGTgDRy"
  },
  {
    "id": 968871965707657200,
    "created_at": "2018-02-28 15:34:12",
    "text": "Prezident republiky Miloš Zeman přijal ve středu dne 28. února 2018 na Pražském hradě na její žádost ministryni obrany Karlu Šlechtovou."
  },
  {
    "id": 968804385101959200,
    "created_at": "2018-02-28 11:05:39",
    "text": "Prezident republiky Miloš Zeman složí 8.3.2018 ve 14.00 ve Vladislavském sále Hradu slib prezidenta republiky: https://t.co/2FYzrldOt3"
  },
  {
    "id": 968796704504991700,
    "created_at": "2018-02-28 10:35:08",
    "text": "RT @TBarrandov: Natáčíme další díl Kauz Jaromíra Soukupa. Tentokrát o České televizi. Co říkáte na to, jak jsme tentokrát pojali scénu a bu…"
  },
  {
    "id": 968795135713693700,
    "created_at": "2018-02-28 10:28:54",
    "text": "@co_nelze To je elpíčko z USA, New Jersey ;-)"
  },
  {
    "id": 968793157008810000,
    "created_at": "2018-02-28 10:21:02",
    "text": "Hudba na vinylu vytváří v mé kanceláři na Hradě tu správnou tvůrčí atmosféru! https://t.co/lyeQzwonli"
  },
  {
    "id": 968786797135351800,
    "created_at": "2018-02-28 09:55:46",
    "text": "Po volební přestávce je tu opět Svobodný Názor! Čtěte článek “Kult nenávisti nesmí ovládnout českou společnost”:… https://t.co/9eQgrL418j"
  },
  {
    "id": 968748903054172200,
    "created_at": "2018-02-28 07:25:11",
    "text": "@TatanaMikova Výborné! Líbí se mi Váš smysl pro humor :-)"
  },
  {
    "id": 968748541140226000,
    "created_at": "2018-02-28 07:23:45",
    "text": "@jakubzelenka @VojtechGibis Hnusné zneužití vraždy dvou mladých lidí neomluvíte ani milionem tweetů."
  },
  {
    "id": 968741462425956400,
    "created_at": "2018-02-28 06:55:37",
    "text": "@jakubzelenka @VojtechGibis Stejně jako TOP 09 jste prasácky zneužil vraždy dvou mladých lidí k hnusnému útoku na p… https://t.co/O0r1XlxY7e"
  },
  {
    "id": 968616609572106200,
    "created_at": "2018-02-27 22:39:30",
    "text": "Prezident republiky. https://t.co/4Hi6pFWqdb"
  },
  {
    "id": 968611695097675800,
    "created_at": "2018-02-27 22:19:58",
    "text": "@VojtechGibis @jakubzelenka Takže jste dva. Jeden ráno vstává z postele a nadává na Zemana a druhý se v redakci tvá… https://t.co/yX61KXTgv3"
  },
  {
    "id": 968607937693446100,
    "created_at": "2018-02-27 22:05:02",
    "text": "@VojtechGibis @jakubzelenka Není nad to, když se “nezávislí novináři” veřejně odkopávají. No prostě fakt nemáte rád… https://t.co/PnVK7ci1YV"
  },
  {
    "id": 968604048743166000,
    "created_at": "2018-02-27 21:49:35",
    "text": "@jakubzelenka Nechutný pokus o lynčování ve stylu těch nejhnusnějších tradic naší historie. A další odporný pokus s… https://t.co/p6TtmHYsXl"
  },
  {
    "id": 968602551942893600,
    "created_at": "2018-02-27 21:43:38",
    "text": "ČST Praha zavádí nový pořad “Ideová předpověď počasí”. To neměl ani Zelenka. Přitom mohl odhalovat působení hurikán… https://t.co/c8cfK20k8N"
  },
  {
    "id": 968526487505834000,
    "created_at": "2018-02-27 16:41:23",
    "text": "RT @Blesk24: Známe scénář Zemanovy inaugurace. Prezidenta čeká výrazná změna, diváky čaj zdarma https://t.co/AnqppbgB2d @Blesk24 @PREZIDENT…"
  },
  {
    "id": 968524500164857900,
    "created_at": "2018-02-27 16:33:29",
    "text": "Svůj druhý prezidentský slib Miloš Zeman podepíše 8. března na Pražském hradě u stolu, který používal T. G. Masaryk: https://t.co/QqV8WvqsIA"
  },
  {
    "id": 968501385082933200,
    "created_at": "2018-02-27 15:01:38",
    "text": "Zeman druhý prezidentský slib podepíše na Masarykově stole: https://t.co/Pfi9adOawD"
  },
  {
    "id": 968481853152878600,
    "created_at": "2018-02-27 13:44:01",
    "text": "RT @jirizimola: s @jhamacek na přátelském obědě u pana prezidenta v Lánech https://t.co/BUZbxvVVzo"
  },
  {
    "id": 968468878224515100,
    "created_at": "2018-02-27 12:52:28",
    "text": "RT @realDonaldTrump: WITCH HUNT!"
  },
  {
    "id": 968466702571728900,
    "created_at": "2018-02-27 12:43:49",
    "text": "Přátelské setkání v Lánech. Pan prezident před chvílí přivítal předsedu ČSSD J. Hamáčka a statutárního místopředsed… https://t.co/JAPdOzk59R"
  },
  {
    "id": 968464946479722500,
    "created_at": "2018-02-27 12:36:51",
    "text": "Pan prezident odsoudil vraždu slovenského novináře J. Kuciaka a jeho snoubenky M. Kušnírové a vyjádřil naději, že bude pachatel dopaden."
  },
  {
    "id": 968449324844712000,
    "created_at": "2018-02-27 11:34:46",
    "text": "2/2 Důležitá debata o návrhu přesunout velvyslanectví České republiky z Tel Avivu do Jeruzaléma bude dále pokračovat."
  },
  {
    "id": 968449294096269300,
    "created_at": "2018-02-27 11:34:39",
    "text": "1/2 Šéf zahr. odboru KPR včera na jednání mezirezortní koordinační skupiny otevřel debatu na téma přesunu české ambasády do Jeruzaléma."
  },
  {
    "id": 968420847739338800,
    "created_at": "2018-02-27 09:41:37",
    "text": "@iROZHLAScz Pozornost je třeba věnovat vyjádření dlouholetého člena normalizační KSČ. Je takové procítěné, že?"
  },
  {
    "id": 968411182318137300,
    "created_at": "2018-02-27 09:03:12",
    "text": "Dokážete si vůbec představit, co by vypuklo za furóre, kdyby šlo o pana prezidenta? https://t.co/hCnjzM3vSq dnes př… https://t.co/WzkuVY2hfh"
  },
  {
    "id": 968205266268418000,
    "created_at": "2018-02-26 19:24:58",
    "text": "@rene_rosicky Ale gratuloval. Mrkněte na FB pana prezidenta!"
  },
  {
    "id": 968186825671102500,
    "created_at": "2018-02-26 18:11:41",
    "text": "RT @AndrejBabis: Ti lemuři, co jsem v sobotu koupil, byli pro Ester a Martinu. Holky měly radost a lemuři, myslím, taky 🤓 Lemuři mají na pa…"
  },
  {
    "id": 968182124007317500,
    "created_at": "2018-02-26 17:53:00",
    "text": "https://t.co/Ut84UPyw8Y"
  },
  {
    "id": 968178992946860000,
    "created_at": "2018-02-26 17:40:34",
    "text": "Žádná totalita nezlomí celý národ. Jste svědomím doby, ocenila Šlechtová odbojáře. A jasné slovo přidal i kardinál: https://t.co/vT9WADel2d"
  },
  {
    "id": 968177824417894400,
    "created_at": "2018-02-26 17:35:55",
    "text": "Vrchol dnešního kydání špíny a hnusného politického zneužití tragédie: https://t.co/BImSHWltfn"
  },
  {
    "id": 968171429954031600,
    "created_at": "2018-02-26 17:10:31",
    "text": "@MichalKubal Zneužívat něčí smrti k nízkému politikaření, to je chucpe. Chápu, že to veřejně nepřiznáte."
  },
  {
    "id": 968169618870292500,
    "created_at": "2018-02-26 17:03:19",
    "text": "@MichalKubal Nesnažte se odvádět pozornost od faktu, že část novinářů nechutně zneužila této tragédie k hnusným útokům na pana prezidenta."
  },
  {
    "id": 968166917130289200,
    "created_at": "2018-02-26 16:52:35",
    "text": "@david_klimes Nechutným způsobem jste obvinili prezidenta republiky z odpovědnosti za tento hrůzný čin. Vy se můžete jen stydět!"
  },
  {
    "id": 968163959130984400,
    "created_at": "2018-02-26 16:40:50",
    "text": "@david_klimes K nechutnému vyřizování účtů zneužilo brutální vraždu vaše vydavatelství: https://t.co/dINo80U6YP"
  },
  {
    "id": 968159972864528400,
    "created_at": "2018-02-26 16:24:59",
    "text": "@MichalKubal Tohle Vám přijde v pořádku? https://t.co/dINo80U6YP"
  },
  {
    "id": 968157778656288800,
    "created_at": "2018-02-26 16:16:16",
    "text": "Pokud se toto podezření potvrdí, myslíte, že se rozběsnění čeští novináři a politici omluví panu prezidentovi? https://t.co/CXuDL16WXH"
  },
  {
    "id": 968157055730307100,
    "created_at": "2018-02-26 16:13:24",
    "text": "RT @MichalKubal: Tom Nicholson: Dám ruku do ohně, že Kuciakova vražda souvisela s italskou Ndranghetou, která čerpá eurofondy na východním…"
  },
  {
    "id": 968148068259508200,
    "created_at": "2018-02-26 15:37:41",
    "text": "RT @AmbMeron: Israeli Security Services thwart ISIS supporters attack on Temple Mount, a holy site holy for Jews &amp; Muslims. https://t.co/bR…"
  },
  {
    "id": 968147165234237400,
    "created_at": "2018-02-26 15:34:06",
    "text": "Ty šmejde, dostaneš ceres, že tě vlastní matka nepozná. Po vraždě slovenského novináře nastalo dusno kolem Ovčáčka: https://t.co/tcemO9KaXw"
  },
  {
    "id": 968134536663126000,
    "created_at": "2018-02-26 14:43:55",
    "text": "RT @SlechtovaKarla: Dnes jsem předala 34 dekretů účastníkům protikomunistického odboje. Stalo se tak symbolicky den po 70. výročí nástupu t…"
  },
  {
    "id": 968132171012673500,
    "created_at": "2018-02-26 14:34:31",
    "text": "Volby by vyhrálo ANO. Do Sněmovny by se nedostali lidovci, STAN ani TOP 09: https://t.co/QqLy65GbKg"
  },
  {
    "id": 968118773612990500,
    "created_at": "2018-02-26 13:41:17",
    "text": "RT @tomasjirsa: Tohle je na pobyt v Bohnicích. Na Slovensku se stane děsivá lidská tragédie, vražda novináře a jeho ženy. A jedna parta si…"
  },
  {
    "id": 968114051413954600,
    "created_at": "2018-02-26 13:22:31",
    "text": "Takže už je tu neskrývané vyhrožování fyzickým násilím. https://t.co/2risX5A6z7"
  },
  {
    "id": 968104513021366300,
    "created_at": "2018-02-26 12:44:37",
    "text": "@gnostic_punk Nepovídejte! A copak to znamená “neproignoruju”? Buďte konkrétní."
  },
  {
    "id": 968101054603817000,
    "created_at": "2018-02-26 12:30:52",
    "text": "Je mimořádně nechutné, že někteří čeští politici a aktivisté zneužívají děsivou vraždu novináře na Slovensku k politickému boji a útokům."
  },
  {
    "id": 968090155251916800,
    "created_at": "2018-02-26 11:47:33",
    "text": "Miloš Zeman byl odvážný v době, kdy odvaha nebyl levná. Na tom nezmění nic ani novodobí kádrováci, skuteční dědici… https://t.co/uLxhNtf6ae"
  },
  {
    "id": 968085783050641400,
    "created_at": "2018-02-26 11:30:11",
    "text": "Československý rozhlas byl k 50. výročí vyznamenán Řádem Vítězného února: https://t.co/wK2cflnMN6"
  },
  {
    "id": 968079860823445500,
    "created_at": "2018-02-26 11:06:39",
    "text": "Místo ideových novinářů z ČRo a spol. nechme promluvit Václava Havla: https://t.co/WyeFTDqpvd"
  },
  {
    "id": 968064112319172600,
    "created_at": "2018-02-26 10:04:04",
    "text": "Když jde o boj s V. Orbánem, liberální levice se radostně spojila s antisemity a fašouny: https://t.co/ALYDdbDd3q"
  },
  {
    "id": 968061726766878700,
    "created_at": "2018-02-26 09:54:36",
    "text": "ČRo nám zaslal u příležitosti komunistického puče kádrový dotazník. Tradice Čs. rozhlasu, který puč v roce 1948 podporoval, je stále živá."
  },
  {
    "id": 967879783404261400,
    "created_at": "2018-02-25 21:51:37",
    "text": "RT @WhiteHouse: A new poll shows overwhelming support for President Trump’s immigration priorities. Read more: https://t.co/EaD5W35IJe http…"
  },
  {
    "id": 967875296115482600,
    "created_at": "2018-02-25 21:33:47",
    "text": "ČST Praha se v odpudivém pořadu Newsroom pokusila vymluvit z odpudivého komentování zlaté jízdy Ester Ledecké. Zelenkův duch řádí jako divý."
  },
  {
    "id": 967490466588610600,
    "created_at": "2018-02-24 20:04:36",
    "text": "RT @netanyahu: This is a great moment for the State of Israel. @POTUS Trump's decision to move the American Embassy to Jerusalem will make…"
  },
  {
    "id": 967490238024179700,
    "created_at": "2018-02-24 20:03:42",
    "text": "Hrají si na ochránce lidských práv, přitom šíří antisemitismus: https://t.co/A5ODyDlN8P"
  },
  {
    "id": 967366138857484300,
    "created_at": "2018-02-24 11:50:34",
    "text": "RT @jirizimola: Šumavák Standa. Chtěli ho potrestat za vlastní názor. Tlak veřejnosti byl naštěstí silnější a v Lánské oboře ještě ukáže, c…"
  },
  {
    "id": 967297945665261600,
    "created_at": "2018-02-24 07:19:36",
    "text": "U T. Halíka už drnčí telefon z pekla nepřetržitě: https://t.co/b6eC05gXjs"
  },
  {
    "id": 967294902047424500,
    "created_at": "2018-02-24 07:07:30",
    "text": "Srdečná gratulace skvělé Ester Ledecké!"
  },
  {
    "id": 967159776336543700,
    "created_at": "2018-02-23 22:10:34",
    "text": "RT @AmbMeron: Breaking: The US will open a new Embassy in #Jerusalem this May 😆. And what country will be second? 🤔 https://t.co/MD4oOlblSz"
  },
  {
    "id": 967101785465909200,
    "created_at": "2018-02-23 18:20:08",
    "text": "Klidný nadcházející víkend, přátelé! https://t.co/kTYQoRr95e"
  },
  {
    "id": 967098438948147200,
    "created_at": "2018-02-23 18:06:50",
    "text": "Piráti vyčítají panu prezidentovi legitimní názor na ČST Praha a sami se devótně snaží vlísat ČST Praha do přízně: https://t.co/qernPuhHgv"
  },
  {
    "id": 967097019776077800,
    "created_at": "2018-02-23 18:01:11",
    "text": "Vynikající krok USA! Neměli bychom váhat a učinit to samé: https://t.co/70u2agc5PR"
  },
  {
    "id": 967049780626063400,
    "created_at": "2018-02-23 14:53:29",
    "text": "Přepis rozhovoru pana prezidenta pro pořad “Týden s prezidentem”, TV Barrandov, 22. února: https://t.co/36o19FObMH"
  },
  {
    "id": 967048611468103700,
    "created_at": "2018-02-23 14:48:50",
    "text": "Malý dárek, který potěšil! https://t.co/Rc0Pflmqb5"
  },
  {
    "id": 967003961029988400,
    "created_at": "2018-02-23 11:51:25",
    "text": "Nadržuje Zeman Babišovi? Ovčáček a Pospíšil se přeli u Jílkové, Škromach lovil selfie: https://t.co/klDv3XthZj"
  },
  {
    "id": 966972270794231800,
    "created_at": "2018-02-23 09:45:29",
    "text": "Prezident republiky obdržel gratulace z 61 zemí: https://t.co/0AmlKqpjOZ"
  },
  {
    "id": 966967055344861200,
    "created_at": "2018-02-23 09:24:46",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 22. února 2018, 20:15, TV Barrandov: https://t.co/PbtBSG2QZM"
  },
  {
    "id": 966922291165642800,
    "created_at": "2018-02-23 06:26:53",
    "text": "„Možná tímhle žijete v Praze tady po kavárnách, ale v zemi taková situace není!“ https://t.co/AeFi1oDRoM"
  },
  {
    "id": 966916729354911700,
    "created_at": "2018-02-23 06:04:47",
    "text": "Máte slovo! © Zdeněk Škromach https://t.co/ULving2z78"
  },
  {
    "id": 966807129033146400,
    "created_at": "2018-02-22 22:49:16",
    "text": "Videozáznam pořadu ČT “Máte slovo s M. Jílkovou”! Diskutovali J. Ovčáček, J. Pospíšil, M. Hašek, J. Mlejnek a další: https://t.co/6y6YeBjGcx"
  },
  {
    "id": 966801340717551600,
    "created_at": "2018-02-22 22:26:16",
    "text": "Zeman: Dokud bude vyjednávat, nedávám Babišovi žádný limit https://t.co/xVqi5yjV3A"
  },
  {
    "id": 966713982953369600,
    "created_at": "2018-02-22 16:39:08",
    "text": "Krásná ukázka uplatnění třídního hlediska. Spolubojovník J. Corbyn vzat v ochranu, nepřítel A. Babiš ideově zavržen: https://t.co/2ozHKhN8nq"
  },
  {
    "id": 966659481638760400,
    "created_at": "2018-02-22 13:02:34",
    "text": "Exkluzivní rozhovor s Dominikem Dukou: Rozum je děvka ďáblova. Jedině pravda nás osvobodí https://t.co/hgdqwhC3mB"
  },
  {
    "id": 966639193412788200,
    "created_at": "2018-02-22 11:41:57",
    "text": "RT @NickArcherFCO: Great to hear such clear understanding of our shared interests and commitment to Czech-British cooperation. https://t.co…"
  },
  {
    "id": 966616856126738400,
    "created_at": "2018-02-22 10:13:12",
    "text": "RT @rudolf_jindrak: Happy to meet new UK Ambassador-designate @NickArcherFCO &amp; look forward to working together closely! UK is a super impo…"
  },
  {
    "id": 966616493889871900,
    "created_at": "2018-02-22 10:11:45",
    "text": "Právě teď, Pražský hrad. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/0GiaH7DDwv"
  },
  {
    "id": 966605450451046400,
    "created_at": "2018-02-22 09:27:52",
    "text": "Chovanec odmítl kritiku AI, Ovčáček zprávu označil za blábol: https://t.co/cbxljIAPJU"
  },
  {
    "id": 966333110496514000,
    "created_at": "2018-02-21 15:25:41",
    "text": "Prezident republiky podepsal dva zákony: https://t.co/kwqey5QZZG"
  },
  {
    "id": 966327512077881300,
    "created_at": "2018-02-21 15:03:27",
    "text": "Pan prezident dnes přijal na Hradě na jeho žádost Tomio Okamuru, předsedu hnutí Svoboda a přímá demokracie."
  },
  {
    "id": 966313736666603500,
    "created_at": "2018-02-21 14:08:42",
    "text": "Pan prezident dnes přijal na Hradě na jejich žádost předsedu KSČM Vojtěcha Filipa a předsedu poslaneckého klubu KSČM Pavla Kováčika."
  },
  {
    "id": 966290811322290200,
    "created_at": "2018-02-21 12:37:36",
    "text": "Prezident republiky zaslal gratulaci Veronice Vítkové: https://t.co/xrEJizcPON"
  },
  {
    "id": 966290719181824000,
    "created_at": "2018-02-21 12:37:14",
    "text": "Prezident republiky zaslal gratulaci Martině Sáblíkové: https://t.co/u9RTdzz13p"
  },
  {
    "id": 966290622532456400,
    "created_at": "2018-02-21 12:36:51",
    "text": "Prezident republiky zaslal gratulaci Michalu Krčmářovi: https://t.co/vyZid3BJwO"
  },
  {
    "id": 966290518446657500,
    "created_at": "2018-02-21 12:36:27",
    "text": "Prezident republiky zaslal gratulaci Evě Samkové: https://t.co/VqnLDSvJjG"
  },
  {
    "id": 966290371872469000,
    "created_at": "2018-02-21 12:35:52",
    "text": "Prezident republiky zaslal gratulaci Karolíně Erbanové: https://t.co/sUPX4DRdlK"
  },
  {
    "id": 966290275466432500,
    "created_at": "2018-02-21 12:35:29",
    "text": "Prezident republiky zaslal gratulaci Ester Ledecké: https://t.co/FfLHyyzteX"
  },
  {
    "id": 966037536694046700,
    "created_at": "2018-02-20 19:51:11",
    "text": "Ovčáček odhalil původ nenávisti některých novinářů k Zemanovi: https://t.co/KV2RiBB20U"
  },
  {
    "id": 965991089541992400,
    "created_at": "2018-02-20 16:46:37",
    "text": "Další pokus o pomstu za prohranou prezidentskou volbu: https://t.co/Obpbq8Crpn"
  },
  {
    "id": 965859290119630800,
    "created_at": "2018-02-20 08:02:54",
    "text": "Sledujte ve čtvrtek ve 21:25 Máte slovo na ČT! Diskutovat budou J. Ovčáček, J. Pospíšil, M. Hašek a J. Mlejnek: https://t.co/6y6YeBjGcx"
  },
  {
    "id": 965714369396052000,
    "created_at": "2018-02-19 22:27:02",
    "text": "Nenávistná tzv. elita pokračuje v rozdělování společnosti: https://t.co/KQ7oxweeq8"
  },
  {
    "id": 965509812976078800,
    "created_at": "2018-02-19 08:54:12",
    "text": "Ne všichni novináři podlehli antizemanovské hysterii: https://t.co/TlVSSmNRue"
  },
  {
    "id": 965332488192233500,
    "created_at": "2018-02-18 21:09:34",
    "text": "S šéfkuchařem průhonické restaurace Paloma Nicolasem Decherchim. https://t.co/pKIFniRwp3"
  },
  {
    "id": 965305163266363400,
    "created_at": "2018-02-18 19:21:00",
    "text": "Poděkování. https://t.co/M2NLFgaqcX"
  },
  {
    "id": 965303469606363100,
    "created_at": "2018-02-18 19:14:16",
    "text": "Vyjádření pana prezidenta ke zvolení J. Hamáčka předsedou ČSSD a J. Zimoly 1. místopředsedou ČSSD: https://t.co/Coq8QHbH6O"
  },
  {
    "id": 965271396522905600,
    "created_at": "2018-02-18 17:06:49",
    "text": "Průhonice, právě teď! Pan premiér se svojí chotí pozvali pana prezidenta a jeho paní na večeři do restaurace Paloma. https://t.co/wvUaKWYydm"
  },
  {
    "id": 965202513891942400,
    "created_at": "2018-02-18 12:33:06",
    "text": "Přečtěte si projev pana prezidenta, který dnes zazněl na sjezdu ČSSD: https://t.co/rWEq9oFXcQ"
  },
  {
    "id": 965179879883989000,
    "created_at": "2018-02-18 11:03:10",
    "text": "RT @AndrejBabis: Přemýšlím, kdy jsem slyšel lepší projev na stranické půdě, než byl ten dnešní, co pronesl pan prezident. Musím říct, že by…"
  },
  {
    "id": 965173270948565000,
    "created_at": "2018-02-18 10:36:54",
    "text": "Mrkněte na to! DVTV, videozáznam projevu pana prezidenta na sjezdu ČSSD v Hradci Králové: https://t.co/gGvKc9125d"
  },
  {
    "id": 965168199061864400,
    "created_at": "2018-02-18 10:16:45",
    "text": "RT @jirizimola: Historický moment, historické místo. Prezident republiky Miloš Zeman na #sjezdcssd: Suchá je skýva opozice. Ta skýva není a…"
  },
  {
    "id": 965165138948042800,
    "created_at": "2018-02-18 10:04:35",
    "text": "Právě teď! Pan prezident pronáší projev na sjezdu ČSSD v Hradci Králové. https://t.co/TR7aLo7ONx"
  },
  {
    "id": 964788308432867300,
    "created_at": "2018-02-17 09:07:12",
    "text": "Obrovská gratulace Ester Ledecké k úžasnému zlatému úspěchu v superobřím slalomu. Velké poděkování za skvělou reprezentaci České republiky!"
  },
  {
    "id": 964586811417944000,
    "created_at": "2018-02-16 19:46:31",
    "text": "Přepis rozhovoru pana prezidenta pro pořad TV Barrandov „Týden s prezidentem“: https://t.co/jU2OsilVtP"
  },
  {
    "id": 964547284070555600,
    "created_at": "2018-02-16 17:09:27",
    "text": "Pan prezident na pohřeb Miroslava Šloufa, který dnes skonal, zašle smuteční kytičku."
  },
  {
    "id": 964501289961914400,
    "created_at": "2018-02-16 14:06:41",
    "text": "Vyslýchali mě jako fašistku, říká autorka scénáře o střetu s muslimy: https://t.co/nCtLV6lXw3"
  },
  {
    "id": 964461437606391800,
    "created_at": "2018-02-16 11:28:20",
    "text": "RT @sulovsk: Petici \"pro\" Duku podepsaly tři tisíce lidí, vč. býv. premiéra, několika poslanců, dvou prez. kandidátů,  desítek kněží, množs…"
  },
  {
    "id": 964429673676529700,
    "created_at": "2018-02-16 09:22:07",
    "text": "Je smutné vidět kulturní frontu v tak nekulturním rozkladu. Militarizovanou až do zblbnutí: https://t.co/5hJnmrWnXD"
  },
  {
    "id": 964428158471569400,
    "created_at": "2018-02-16 09:16:05",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 15. února 2018, 20:15, TV Barrandov: https://t.co/MDAERqi9Co"
  },
  {
    "id": 964242195032264700,
    "created_at": "2018-02-15 20:57:08",
    "text": "Na koně bič, na osla uzdu, na hřbet hlupáků hůl. Přísloví 26,3."
  },
  {
    "id": 964226607337615400,
    "created_at": "2018-02-15 19:55:12",
    "text": "Zeman se obrátí na papeže s žádostí, aby prodloužil mandát Dukovi: https://t.co/oHh0ODJp6p"
  },
  {
    "id": 964121650835976200,
    "created_at": "2018-02-15 12:58:08",
    "text": "Prezident republiky se zúčastní 40. sjezdu ČSSD: https://t.co/gOejIy98XB"
  },
  {
    "id": 964082447125303300,
    "created_at": "2018-02-15 10:22:21",
    "text": "Prezident republiky kondoloval americkému prezidentovi: https://t.co/EtLhpvYdJ6"
  },
  {
    "id": 964080965432873000,
    "created_at": "2018-02-15 10:16:28",
    "text": "Právě teď, Pražský hrad. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/UyNBQo0snb"
  },
  {
    "id": 964037213175668700,
    "created_at": "2018-02-15 07:22:37",
    "text": "RT @neviditelnypes: Denunciace kardinála Duky velmi připomíná zběsilost komunistických fanatiků žádajících nejpřísnější tresty pro velezrád…"
  },
  {
    "id": 963826499324469200,
    "created_at": "2018-02-14 17:25:19",
    "text": "RT @Jan_Skopecek: Kdyby byl pan kardinál Duka otevřen neomarxistickým idejím, vítal “sebevraždu” Evropy prostřednictvím masové migrace a pl…"
  },
  {
    "id": 963798745090527200,
    "created_at": "2018-02-14 15:35:02",
    "text": "Prezident republiky kondoloval dánské královně: https://t.co/QQuXtkSrLm"
  },
  {
    "id": 963729768695914500,
    "created_at": "2018-02-14 11:00:56",
    "text": "Kampaň proti Dukovi navazuje na naši nejhorší udavačskou tradici, zastal se Klaus kardinála: https://t.co/qgs2WYP1oN"
  },
  {
    "id": 963717506329448400,
    "created_at": "2018-02-14 10:12:13",
    "text": "Občan Jiří Ovčáček podepsal: https://t.co/lRhFeu1DOh"
  },
  {
    "id": 963509196116422700,
    "created_at": "2018-02-13 20:24:28",
    "text": "RT @netanyahu: הכוח האמיתי של מדינת ישראל נשען עליכם, אזרחי ישראל. אתם החוסן הלאומי שלנו. אני מבקש להודות לכולכם על התמיכה הגדולה! https://…"
  },
  {
    "id": 963504256497135600,
    "created_at": "2018-02-13 20:04:50",
    "text": "@abctrutnov A vydali by to 14. března 1939."
  },
  {
    "id": 963498054480465900,
    "created_at": "2018-02-13 19:40:11",
    "text": "@petrbrabec Přesně tak. A proto je “zvací dopis” do Vatikánu opravdovým hříchem."
  },
  {
    "id": 963497129057620000,
    "created_at": "2018-02-13 19:36:31",
    "text": "RT @CUTIzpravy: Poučná četba nové knihy o dr. Husákovi. Čs. stalinistický ideolog V. Kopecký snil o Evropském svazu sovětských socialistick…"
  },
  {
    "id": 963482091152437200,
    "created_at": "2018-02-13 18:36:45",
    "text": "@LedovyMajk Novináři pohrdají lidmi. Teď už to ví celá republika."
  },
  {
    "id": 963481550506557400,
    "created_at": "2018-02-13 18:34:36",
    "text": "Musíte se více snažit, pane správce, nebo vás vyměníme: https://t.co/MzuleQc2Fk"
  },
  {
    "id": 963481062021238800,
    "created_at": "2018-02-13 18:32:40",
    "text": "@LedovyMajk To je v pořádku. Proto novináři pravidelně prohrávají volby."
  },
  {
    "id": 963460604664188900,
    "created_at": "2018-02-13 17:11:23",
    "text": "Dezinformační divadélko českých médií odhaluje rozhodnutí slovenského soudu: https://t.co/uNdyirb1E4"
  },
  {
    "id": 963439627972632600,
    "created_at": "2018-02-13 15:48:01",
    "text": "RT @TBarrandov: Chce do čela ČSSD. Chce do vlády s Andrejem Babišem. A líbí se mu v muzeu automobilových veteránů. O kom je řeč? \nO dalším…"
  },
  {
    "id": 963396578408050700,
    "created_at": "2018-02-13 12:56:57",
    "text": "K aktuálnímu dění: https://t.co/ID74mloImu"
  },
  {
    "id": 963373605697544200,
    "created_at": "2018-02-13 11:25:40",
    "text": "Žalobníčkům do Vatikánu. Pamatujte: Pýcha očí a nadutost srdce, ač jsou svévolníkům světlem, jsou hříchem. Přísloví, 21,4."
  },
  {
    "id": 963098243830878200,
    "created_at": "2018-02-12 17:11:29",
    "text": "RT @Jan_Skopecek: Kardinál @dominikduka je pro mě mravní i názorovou autoritou. V době každodenní relativizace tradičních hodnot je jeden z…"
  },
  {
    "id": 962981952461602800,
    "created_at": "2018-02-12 09:29:23",
    "text": "Prezident republiky obdržel gratulaci od francouzského prezidenta: https://t.co/stdCybW52b"
  },
  {
    "id": 962756668495888400,
    "created_at": "2018-02-11 18:34:11",
    "text": "Prezident republiky kondoloval ruskému prezidentovi: https://t.co/w4GQYVQB4W"
  },
  {
    "id": 962729555986452500,
    "created_at": "2018-02-11 16:46:27",
    "text": "Přepis rozhovoru pana prezidenta pro pořad TV Barrandov „Týden s prezidentem“: https://t.co/DbypqsIoN8"
  },
  {
    "id": 962638169085706200,
    "created_at": "2018-02-11 10:43:19",
    "text": "Vážné varování pro Babiše a jeho vládu: Nedávejte se do kupy s pochybnými aktivisty https://t.co/ggHujHD5EX"
  },
  {
    "id": 962007889270399000,
    "created_at": "2018-02-09 16:58:48",
    "text": "S odstupem času. Fotografie z okamžiku vítězství. Poděkování panu prezidentovi. https://t.co/RX7ovgETSG"
  },
  {
    "id": 962002831799615500,
    "created_at": "2018-02-09 16:38:42",
    "text": "Prezident republiky. https://t.co/yQytBRaQLY"
  },
  {
    "id": 962002089424584700,
    "created_at": "2018-02-09 16:35:45",
    "text": "RT @StandWithUs: Shabbat Shalom, have a peaceful weekend."
  },
  {
    "id": 961984339201413100,
    "created_at": "2018-02-09 15:25:13",
    "text": "Vzpomínka na rok 2015. 24. duben, svátek sv. Jiří. https://t.co/rqGNxuNsKx"
  },
  {
    "id": 961951023588888600,
    "created_at": "2018-02-09 13:12:50",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 8. února 2018, 20:15, TV Barrandov: https://t.co/BUCaXLbDYw"
  },
  {
    "id": 961701916265902100,
    "created_at": "2018-02-08 20:42:59",
    "text": "RT @jirizimola: Jsem rád, že pan prezident vidí nutnost změny ve vedení @CSSD stejně. Když je totiž automobil rozbitý, je třeba ho zgruntu…"
  },
  {
    "id": 961690381548163100,
    "created_at": "2018-02-08 19:57:08",
    "text": "Zeman: Nikoho jiného než Babiše jako premiéra nevidím https://t.co/sMXpA7bKYV"
  },
  {
    "id": 961684263329587200,
    "created_at": "2018-02-08 19:32:50",
    "text": "Schůzka Zemana s Babišem v Lánech se velmi protáhla. Premiér následně novinářům sdělil tyto novinky: https://t.co/g6qyfSHrb9"
  },
  {
    "id": 961645549509337100,
    "created_at": "2018-02-08 16:59:00",
    "text": "Lány. Přátelská večeře pana prezidenta s panem premiérem byla zahájena! https://t.co/LnIKiyn8OD"
  },
  {
    "id": 961633934844092400,
    "created_at": "2018-02-08 16:12:51",
    "text": "RT @CRoPlus: Nejlepšího myslivce získáte z pytláka, takže z bývalého novináře udělat mluvčího byl od pana prezidenta velmi zajímavý tah, ře…"
  },
  {
    "id": 961630850772295700,
    "created_at": "2018-02-08 16:00:35",
    "text": "Prezident republiky obdržel gratulaci od polského prezidenta: https://t.co/nWGSPZ86Qh"
  },
  {
    "id": 961594186314248200,
    "created_at": "2018-02-08 13:34:54",
    "text": "Ovčáček před lidmi odhalil informaci o tom, jak Zeman porazil Jiřího Drahoše https://t.co/JJuRBICuuk"
  },
  {
    "id": 961542737764827100,
    "created_at": "2018-02-08 10:10:27",
    "text": "Právě teď, Lány. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/H7oKnNclqY"
  },
  {
    "id": 961532781061865500,
    "created_at": "2018-02-08 09:30:54",
    "text": "Prezident republiky obdržel gratulaci od předsedy Evropské rady: https://t.co/PGcIbZU5NX"
  },
  {
    "id": 961531106662256600,
    "created_at": "2018-02-08 09:24:14",
    "text": "RT @UKinCR: Britská premiérka Theresa Mayová gratulovala prezidentu Miloši Zemanovi ke znovuzvolení prezidentem. https://t.co/Y8EaCd9V7h"
  },
  {
    "id": 961529116913815600,
    "created_at": "2018-02-08 09:16:20",
    "text": "Prezident republiky obdržel gratulaci od ukrajinského prezidenta: https://t.co/yH74dFlvmJ"
  },
  {
    "id": 961523950038679600,
    "created_at": "2018-02-08 08:55:48",
    "text": "Prezident republiky obdržel gratulaci od generálního tajemníka NATO: https://t.co/x7pwaPl4F5"
  },
  {
    "id": 961523107159736300,
    "created_at": "2018-02-08 08:52:27",
    "text": "Prezident republiky obdržel gratulaci britské premiérky: https://t.co/OWf48NIAoY"
  },
  {
    "id": 961516405152763900,
    "created_at": "2018-02-08 08:25:49",
    "text": "Prezident republiky zaslal gratulaci španělskému králi: https://t.co/VxGTj2Rzyo"
  },
  {
    "id": 961515687679332400,
    "created_at": "2018-02-08 08:22:58",
    "text": "Uhlazení a uctiví bývají ti největší lháři: https://t.co/qYvBpFal5v"
  },
  {
    "id": 961346934563835900,
    "created_at": "2018-02-07 21:12:24",
    "text": "RT @HerotPavel: @PREZIDENTmluvci čtvrtý rok po sobě nejcitovanějším mluvčím. Mezi zástupci podniků nejvíce komunikovala Eva Kijonková z Vít…"
  },
  {
    "id": 961330910087077900,
    "created_at": "2018-02-07 20:08:44",
    "text": "@koranova_b Děkuji Vám a přeji Vám hezký večer. J.O."
  },
  {
    "id": 961320680896725000,
    "created_at": "2018-02-07 19:28:05",
    "text": "VIDEO: Na téma 'Fenomén Miloš Zeman‘ debatovali mluvčí Ovčáček, novinář Kmenta nebo politolog Kopeček https://t.co/ckpcbVxsu3"
  },
  {
    "id": 961285696861466600,
    "created_at": "2018-02-07 17:09:04",
    "text": "RT @JaroslavKmenta: Pan Ovčáček @PREZIDENTmluvci a omšelý Kmenta😉. Před debatou @CRoPlus https://t.co/SbZlIJ2zu4"
  },
  {
    "id": 961228110497804300,
    "created_at": "2018-02-07 13:20:14",
    "text": "RT @PanenkaRadim: Dezinformace, že je prezident Zeman v nemocnici, se podle našich zjištění dostaly dokonce i k několika členům vlády. Učeb…"
  },
  {
    "id": 961187454404395000,
    "created_at": "2018-02-07 10:38:41",
    "text": "RT @CRoPlus: DNES MÍŘÍME DO PLZNĚ! V prostorách @depo2015 se od 18:30 odehraje veřejná debata Fenomén Miloš Zeman. Pokud nemůžete přijít, p…"
  },
  {
    "id": 960972514536120300,
    "created_at": "2018-02-06 20:24:36",
    "text": "Neschopnost přijmout porážku se přetavila v živočišnou nenávist a šíření lží. Za potlesku některých aktivistických novinářů na Twitteru."
  },
  {
    "id": 960957527830810600,
    "created_at": "2018-02-06 19:25:03",
    "text": "Nové čtení na dovolenou. https://t.co/8ADD3rmbAq"
  },
  {
    "id": 960945614145163300,
    "created_at": "2018-02-06 18:37:42",
    "text": "@JaroslavKmenta Proč mi doporučujete lhát? Žádný kolaps nebyl, žádní lékaři nenahazují motor. Kde jste tyhle pohádky sebral?"
  },
  {
    "id": 960942316436557800,
    "created_at": "2018-02-06 18:24:36",
    "text": "Ti, kteří prohráli, se neštítí žádné špinavosti. https://t.co/9momfIxPkd odhalil, že lži o hospitalizaci pana prezi… https://t.co/k7UgYOzWlj"
  },
  {
    "id": 960940626199109600,
    "created_at": "2018-02-06 18:17:53",
    "text": "@JaroslavKmenta Jste pověstný investigativec. Jestlipak tedy něco víte o těchto dezinformačních mailech? Nebo už js… https://t.co/fI96srt9C9"
  },
  {
    "id": 960932799845892100,
    "created_at": "2018-02-06 17:46:47",
    "text": "Zeman netáhne zemi na Východ. Do Moskvy jezdí i západní politici, říká šéf prezidentova zahraničního odboru: https://t.co/1YNVENvGjJ"
  },
  {
    "id": 960917075580551200,
    "created_at": "2018-02-06 16:44:18",
    "text": "@adamblistan Občané ano. Obětí této dezinformace jsou ale nezávislá média."
  },
  {
    "id": 960910931910905900,
    "created_at": "2018-02-06 16:19:53",
    "text": "Krásy naší vlasti. Písek. https://t.co/5vwz84MNgo"
  },
  {
    "id": 960896622740766700,
    "created_at": "2018-02-06 15:23:02",
    "text": "Vzhledem k neustálému účelovému šíření dezinformací o zdraví pana prezidenta bude podáno trestní oznámení na neznámého pachatele."
  },
  {
    "id": 960890267288199200,
    "created_at": "2018-02-06 14:57:46",
    "text": "Ač jsem na to upozornil, článek neobsahuje fakt, že existenci dopisu už loni potvrdilo velvyslanectví USA v ČR. Jak… https://t.co/v2XO3ZVKWb"
  },
  {
    "id": 960888742725775400,
    "created_at": "2018-02-06 14:51:43",
    "text": "RT @CRoPlus: Co dal a vzal politice a společnosti Miloš #Zeman? Přijďte na veřejnou debatu ve středu 7. 2. od 18:30 nebo sledujte VIDEOPŘEN…"
  },
  {
    "id": 960866145300631600,
    "created_at": "2018-02-06 13:21:55",
    "text": "RT @rudolf_jindrak: Otevřeně o zahraniční politice prezidenta, o práci v KPR i o tom, je-li M.Zeman \"provýchodní\" nebo \"prozápadní\". https:…"
  },
  {
    "id": 960573742391930900,
    "created_at": "2018-02-05 18:00:01",
    "text": "VÍME PRVNÍ Babiš míří k Zemanovi do Lán. Známe důvod i podrobnosti, jak to celé vzniklo https://t.co/L5C4e4cV07"
  },
  {
    "id": 960557656527265800,
    "created_at": "2018-02-05 16:56:06",
    "text": "Prezident republiky zaslal gratulaci kyperskému prezidentovi: https://t.co/0I3ZymjZFn"
  },
  {
    "id": 960555448318550000,
    "created_at": "2018-02-05 16:47:19",
    "text": "Pan prezident je zásadním a rozhodným odpůrcem zavádění jakékoli formy cenzury. Cenzura je absolutně nepřípustná! https://t.co/qcEMDnXndG"
  },
  {
    "id": 960459248697335800,
    "created_at": "2018-02-05 10:25:04",
    "text": "Už opravdu dost! Souhlasím s V. Klausem ml. https://t.co/5PuExGZuE2"
  },
  {
    "id": 960422333843427300,
    "created_at": "2018-02-05 07:58:22",
    "text": "David Zábranský: Proč voliči Zemana nelezou za voliči Drahoše a neptají se jich: „Vysvětli! Řekni! Proč?! https://t.co/wYlsvsHzmG"
  },
  {
    "id": 960245311187898400,
    "created_at": "2018-02-04 20:14:57",
    "text": "Z putování po naší krásné vlasti. https://t.co/6zkHLZGh9v"
  },
  {
    "id": 960219706836897800,
    "created_at": "2018-02-04 18:33:12",
    "text": "Jsme ještě v Německu? ptají se po útocích migrantů obyvatelé Chotěbuze https://t.co/K1EncPKmLV"
  },
  {
    "id": 960080132764467200,
    "created_at": "2018-02-04 09:18:35",
    "text": "Půjčuji si z debaty na https://t.co/JLJSc5Vhjf. Přesná charakteristika českých mediálních a kulturních tzv. elit: https://t.co/hGdex1EhN7"
  },
  {
    "id": 960061745346859000,
    "created_at": "2018-02-04 08:05:31",
    "text": "David Zábranský: Až zemřou staří, bude dobře? To připomíná buldozery z Osvětimi, pane Pehe https://t.co/P4yrXPM7QH"
  },
  {
    "id": 959911051902046200,
    "created_at": "2018-02-03 22:06:43",
    "text": "VIDEO Drahoše do voleb nahnali, ty věci nebyly z jeho hlavy. Agresivní elitáři mu udělali medvědí službu: https://t.co/kTQaG15Fqa"
  },
  {
    "id": 959727655309504500,
    "created_at": "2018-02-03 09:57:58",
    "text": "Miloš Zeman je poslední vrcholný politik, který používal Tatry. Toto jsou obě z nich: https://t.co/YC0RxiwK0H"
  },
  {
    "id": 959497048314863600,
    "created_at": "2018-02-02 18:41:37",
    "text": "VIDEO Antizeman? Spousta věcí nebyla z Drahošovy hlavy. Horké téma s analytičkou Ryšánkovou: https://t.co/M7Q1EMqA8I"
  },
  {
    "id": 959449033088651300,
    "created_at": "2018-02-02 15:30:49",
    "text": "A vzhůru na cesty po naší krásné vlasti! https://t.co/eog4VjSJZa"
  },
  {
    "id": 959425551135109100,
    "created_at": "2018-02-02 13:57:31",
    "text": "RT @SociologPetrHam: Na ceskė scéne je prostor pro nemarxistickou starosocialistickou stranu. Poptávka obrovská, nabídka nulová."
  },
  {
    "id": 959425104676556800,
    "created_at": "2018-02-02 13:55:44",
    "text": "@Kuceru_Jan Děkuji Vám. Shalom. J.O."
  },
  {
    "id": 959412099268120600,
    "created_at": "2018-02-02 13:04:04",
    "text": "Prezident republiky obdržel gratulaci od chorvatské prezidentky: https://t.co/8k3AQ5WUbL"
  },
  {
    "id": 959408701579972600,
    "created_at": "2018-02-02 12:50:34",
    "text": "Prezident republiky obdržel gratulaci od slovinského prezidenta: https://t.co/EZXJnHW9mh"
  },
  {
    "id": 959408605404463100,
    "created_at": "2018-02-02 12:50:11",
    "text": "Prezident republiky obdržel gratulaci od rakouského prezidenta: https://t.co/IKFSAmb7wX"
  },
  {
    "id": 959012989578903600,
    "created_at": "2018-02-01 10:38:08",
    "text": "Jmenování ředitele Odboru protokolu KPR: https://t.co/rj1JbNJ2OT"
  },
  {
    "id": 958989998333841400,
    "created_at": "2018-02-01 09:06:47",
    "text": "Osmička: Někteří novináři neunesli porážku, jejich komentáře volají po občanské válce. Prezidenta budu vždy bránit https://t.co/C0PQiDqmoK"
  },
  {
    "id": 958781417105838100,
    "created_at": "2018-01-31 19:17:57",
    "text": "RT @CRoPlus: V čem tkví úspěch Miloše #Zeman­a? Přijďte diskutovat na veřejnou debatu. Hosté: @PREZIDENTmluvci, @anna_campaigns, @JaroslavK…"
  },
  {
    "id": 958777703892734000,
    "created_at": "2018-01-31 19:03:12",
    "text": "RT @Seznam_Zpravy: „Pane Ovčáčku, má mluvčí varovat? Víte, že jste nižší státní úředník? To skoro vypadá, že jste kandidoval místo pana pre…"
  },
  {
    "id": 958756261549486100,
    "created_at": "2018-01-31 17:38:00",
    "text": "RT @Number10gov: I am pleased that we have agreed to intensify the Golden Era of UK-China relations — PM #PMinChina 🇬🇧🇨🇳 https://t.co/nbuzU…"
  },
  {
    "id": 958756183162216400,
    "created_at": "2018-01-31 17:37:41",
    "text": "@ZahradilJan Použil-li by pan prezident výraz “Zlatá éra”, lepšolidi by snad i ten Hrad zapálili!"
  },
  {
    "id": 958753641195851800,
    "created_at": "2018-01-31 17:27:35",
    "text": "RT @neviditelnypes: Jak to, že Zeman přesto vyhrál? https://t.co/pIWSBn1Vs5 (by @RobejsekPetr )"
  },
  {
    "id": 958740763554254800,
    "created_at": "2018-01-31 16:36:25",
    "text": "RT @AmbMeron: ראש הממשלה נתניהו התקשר היום לברך את נשיא צ׳כיה מילוש זמאן על בחירתו מחדש. הנשיא הצ׳כי הביע תמיכה בהעברת השגרירות לירושלים (צ…"
  },
  {
    "id": 958726567089360900,
    "created_at": "2018-01-31 15:40:00",
    "text": "Projev prezidenta republiky při jmenování soudců obecných soudů: https://t.co/VAmnlbbtaz"
  },
  {
    "id": 958700586303721500,
    "created_at": "2018-01-31 13:56:46",
    "text": "Gratulace izraelského premiéra prezidentu republiky, podrobnosti: https://t.co/vvoSYLqQO6"
  },
  {
    "id": 958696417408766000,
    "created_at": "2018-01-31 13:40:12",
    "text": "Pan prezident dnes na Hradě jmenoval 25 nových soudců obecných soudů: https://t.co/t4vvb8DoLw https://t.co/DgK7KcksnV"
  },
  {
    "id": 958689148499570700,
    "created_at": "2018-01-31 13:11:19",
    "text": "Prezident republiky obdržel gratulaci od Angely Merkelové: https://t.co/yODGmeJgo1"
  },
  {
    "id": 958688188729643000,
    "created_at": "2018-01-31 13:07:30",
    "text": "Před malou chvílí skončil telefonický hovor, ve kterém izraelský premiér Benjamin Netanjahu blahopřál panu prezidentovi k vítězství."
  },
  {
    "id": 958666396673761300,
    "created_at": "2018-01-31 11:40:54",
    "text": "Miloš Zeman poprvé po volbách promluvil: O novinářích, občanech i o tom, co teď dělá. A máme exkluzivní FOTO https://t.co/BPW128M0bZ"
  },
  {
    "id": 958431645576716300,
    "created_at": "2018-01-30 20:08:05",
    "text": "Už vím, co jsou lepšolidi. To je něco jako Pehe, který se těší, že během pěti let zemře 500 000 voličů Miloše Zemana."
  },
  {
    "id": 958429080357130200,
    "created_at": "2018-01-30 19:57:54",
    "text": "U Bakalů ukázali, kam až může vést zoufalství poražených. Potěším ty nebohé a trpící: #jirkajetady https://t.co/KISuKg2iLK"
  },
  {
    "id": 958361346365644800,
    "created_at": "2018-01-30 15:28:45",
    "text": "RT @SlechtovaKarla: Mise v Afghánistánu je náročná, ale velmi důležitá. Čeští vojáci zde chrání i klid a bezpečí lidí u nás doma. Moc ráda…"
  },
  {
    "id": 958340204972081200,
    "created_at": "2018-01-30 14:04:44",
    "text": "Miloš Zeman si svou výhru odpracoval – jezdil během prvního mandátu po republice, pro své voliče má charisma: https://t.co/qeg9ldQVqe"
  },
  {
    "id": 958325189720363000,
    "created_at": "2018-01-30 13:05:04",
    "text": "Prezident republiky obdržel gratulaci od Michaila Gorbačova: https://t.co/xmaBmIXeR8"
  },
  {
    "id": 958324816699908100,
    "created_at": "2018-01-30 13:03:35",
    "text": "Prezident republiky obdržel gratulaci od italského prezidenta: https://t.co/iDNpPTbZvH"
  },
  {
    "id": 958322316538150900,
    "created_at": "2018-01-30 12:53:39",
    "text": "https://t.co/EL2rshbruq"
  },
  {
    "id": 958309080547954700,
    "created_at": "2018-01-30 12:01:03",
    "text": "Prezident republiky obdržel gratulaci od předsedy Evropské komise: https://t.co/rqj3I7xgnv"
  },
  {
    "id": 958307414922682400,
    "created_at": "2018-01-30 11:54:26",
    "text": "Prezident republiky obdržel gratulaci od čínského prezidenta: https://t.co/9ZDpSo4YS5"
  },
  {
    "id": 958268289590939600,
    "created_at": "2018-01-30 09:18:58",
    "text": "Prezident republiky obdržel gratulaci od maďarského prezidenta: https://t.co/MC2A363RlW"
  },
  {
    "id": 958259825330270200,
    "created_at": "2018-01-30 08:45:20",
    "text": "Prezident republiky Miloš Zeman jmenuje ve středu 31. ledna 2018 ve 14.00 na Pražském hradě soudce obecných soudů: https://t.co/q3CIKzwXuy"
  },
  {
    "id": 958259467535224800,
    "created_at": "2018-01-30 08:43:55",
    "text": "Prezident republiky obdržel gratulaci od slovenského prezidenta: https://t.co/ZKwylesnBD"
  },
  {
    "id": 958238940145872900,
    "created_at": "2018-01-30 07:22:21",
    "text": "Žádné rozdělené Česko! 54 procent lidí je spokojeno, že vyhrál Zeman. Vadí to jen 37 procentům: https://t.co/SwUsWCJsIS"
  },
  {
    "id": 958036162777624600,
    "created_at": "2018-01-29 17:56:35",
    "text": "https://t.co/Ce0WH7aXdH"
  },
  {
    "id": 958035426228555800,
    "created_at": "2018-01-29 17:53:39",
    "text": "Nenávistní novináři ztrácí glanc. Usvědčují se z toho sami. Řeší rektory, přitom moc dobře vědí, co jsem řekl včera: https://t.co/3hNIyXohKt"
  },
  {
    "id": 958002219374260200,
    "created_at": "2018-01-29 15:41:42",
    "text": "Prezident republiky obdržel gratulaci od srbského prezidenta: https://t.co/SFYNthVIQE"
  },
  {
    "id": 957979587316781000,
    "created_at": "2018-01-29 14:11:46",
    "text": "RT @ZEMANZNOVU2018: Děkujeme! https://t.co/zqzJfOhBf6"
  },
  {
    "id": 957974573982548000,
    "created_at": "2018-01-29 13:51:51",
    "text": "Dnešek jsem věnoval úklidu své kanceláře na Hradě. Karikatury jsou v archivu, nahradily je osobnosti, kterých si vá… https://t.co/eksL21miwX"
  },
  {
    "id": 957972567133970400,
    "created_at": "2018-01-29 13:43:52",
    "text": "Projev prezidenta republiky po sečtení hlasů v druhém kole prezidentských voleb: https://t.co/uBJo7WC8lf https://t.co/vVJjpZlxek"
  },
  {
    "id": 957959209991196700,
    "created_at": "2018-01-29 12:50:48",
    "text": "Prezident republiky jmenoval nové rektory: https://t.co/Su8DK1j0Rg"
  },
  {
    "id": 957924198344781800,
    "created_at": "2018-01-29 10:31:40",
    "text": "Prezident republiky obdržel gratulaci od ruského prezidenta: https://t.co/SL8POZc1Cl"
  },
  {
    "id": 957924000533041200,
    "created_at": "2018-01-29 10:30:53",
    "text": "Prezident republiky obdržel gratulaci od německého prezidenta: https://t.co/8Czw5YGdH7"
  },
  {
    "id": 957894178247241700,
    "created_at": "2018-01-29 08:32:23",
    "text": "Prezident republiky zaslal gratulaci finskému prezidentovi: https://t.co/yue3VvwCdh"
  },
  {
    "id": 957885064951619600,
    "created_at": "2018-01-29 07:56:10",
    "text": "Cesta k vítězství. https://t.co/sA6pj3blG9"
  },
  {
    "id": 957618216402071600,
    "created_at": "2018-01-28 14:15:49",
    "text": "https://t.co/7Wq3LNaAiv"
  },
  {
    "id": 957560779804430300,
    "created_at": "2018-01-28 10:27:35",
    "text": "https://t.co/LjNZwhttGD"
  },
  {
    "id": 957530879399792600,
    "created_at": "2018-01-28 08:28:46",
    "text": "Vítěz. https://t.co/KvEqc5k9Bv"
  },
  {
    "id": 957522950374264800,
    "created_at": "2018-01-28 07:57:15",
    "text": "Václav Havel by výsledku prezidentských voleb velmi dobře rozuměl. Jsem si tím jist. https://t.co/DCy0ysjgxE"
  },
  {
    "id": 957517895415877600,
    "created_at": "2018-01-28 07:37:10",
    "text": "Prezident republiky. https://t.co/ykAbHW06z4"
  },
  {
    "id": 957373271078592500,
    "created_at": "2018-01-27 22:02:29",
    "text": "https://t.co/XLoQ815pUh"
  },
  {
    "id": 957325377818554400,
    "created_at": "2018-01-27 18:52:10",
    "text": "Přinesly štěstí :-) https://t.co/1owgFv6uXy"
  },
  {
    "id": 957325077330235400,
    "created_at": "2018-01-27 18:50:59",
    "text": "RT @PanenkaRadim: Dnes jsme načali další pětiletou kapitolu! Jo a přeji krásný večer všem! 🇨🇿 https://t.co/m0u7uBjCRA"
  },
  {
    "id": 957292331388014600,
    "created_at": "2018-01-27 16:40:52",
    "text": "Prezident republiky a jeho úžasná manželka a dcera. https://t.co/q6st8CBVLG"
  },
  {
    "id": 957288803605078000,
    "created_at": "2018-01-27 16:26:51",
    "text": "RT @AJC_CE: Miloš Zeman has become the first #Czech President to be returned to office in a public vote - local media report. Considering M…"
  },
  {
    "id": 957286446087528400,
    "created_at": "2018-01-27 16:17:28",
    "text": "Vítězství! https://t.co/QXFHQG6CJb"
  },
  {
    "id": 957285436107448300,
    "created_at": "2018-01-27 16:13:28",
    "text": "Prezidentu republiky Miloši Zemanovi telefonicky gratuloval předseda vlády České republiky Andrej Babiš."
  },
  {
    "id": 957283911981305900,
    "created_at": "2018-01-27 16:07:24",
    "text": "Prezidentu republiky Miloši Zemanovi v telefonickém rozhovoru blahopřál k vítězství také předseda vlády Slovenské republiky Robert Fico."
  },
  {
    "id": 957282847366279200,
    "created_at": "2018-01-27 16:03:10",
    "text": "Prezident republiky Miloš Zeman v telefonátu s Andrejem Kiskou potvrdil, že jeho první cesta povede na Slovensko."
  },
  {
    "id": 957282770602127400,
    "created_at": "2018-01-27 16:02:52",
    "text": "Prezident republiky Miloš Zeman telefonicky hovořil s prezidentem Slovenské republiky Andrejem Kiskou, který gratuloval k vítězství."
  },
  {
    "id": 957267257956225000,
    "created_at": "2018-01-27 15:01:14",
    "text": "Tisková konference prezidenta republiky Miloše Zemana se uskuteční v Top Hotelu Praha v 16:20."
  },
  {
    "id": 957220628112822300,
    "created_at": "2018-01-27 11:55:56",
    "text": "Občanská povinnost splněna! Volil jsem kandidáta dolních deseti milionů. https://t.co/P1kQKGiUc9"
  },
  {
    "id": 956896371461718000,
    "created_at": "2018-01-26 14:27:27",
    "text": "Pan prezident se svojí paní odvolili tradičně v ZŠ Brdičkova v Praze. Jděte k volbám! https://t.co/EQPK1jALTX"
  },
  {
    "id": 956871584370786300,
    "created_at": "2018-01-26 12:48:58",
    "text": "Vybíráme mezi nabiflovaným plastovým pravítkem a skutečným člověkem. Volím člověka! https://t.co/dFF9Od62Xn"
  },
  {
    "id": 956868408452272100,
    "created_at": "2018-01-26 12:36:20",
    "text": "@Van_Fyn Nu a? To má zachránit Šárku Kabátovou, která neumí pravopis?"
  },
  {
    "id": 956868082768760800,
    "created_at": "2018-01-26 12:35:03",
    "text": "@lenka_hk Tohle fakt neomluvíte ani tisícem tweetů. Je to prostě ostuda."
  },
  {
    "id": 956867703679184900,
    "created_at": "2018-01-26 12:33:32",
    "text": "@JanKuzebauch @AndrejBabis Pan Andrej Babiš fakt nemůže za aktivistku (novinářku) Šárku Kabátovou."
  },
  {
    "id": 956867147724017700,
    "created_at": "2018-01-26 12:31:20",
    "text": "@Van_Fyn Hezký pokus, ale klasický fake, vážený anonyme. Jde totiž o odkaz na tento článek: https://t.co/4E8x4sdwum"
  },
  {
    "id": 956864383782703100,
    "created_at": "2018-01-26 12:20:21",
    "text": "“(Miloš Zeman) společnost nespojuje, rozděluje ji, že je prezidentem dolních deseti milionů”.\nJiří Drahoš, Rudolfin… https://t.co/m2lOqky5WV"
  },
  {
    "id": 956862859060961300,
    "created_at": "2018-01-26 12:14:17",
    "text": "@mpicl Říkáte Vy, který mocně svými radami pomohl svému premiérovi do politického hrobu."
  },
  {
    "id": 956862233107222500,
    "created_at": "2018-01-26 12:11:48",
    "text": "Redaktorce https://t.co/JLJSc5Vhjf pravopis nic neříká. Tohle je fakt ostuda. “Děti jsou šťastní”. https://t.co/i7iQyfZd7d"
  },
  {
    "id": 956855697135808500,
    "created_at": "2018-01-26 11:45:50",
    "text": "RT @parlamentky_cz: Váleční hrdinové z druhé světové války podpořili Miloše Zemana před druhým kolem prezidentské volby | Tihle lidé, pan D…"
  },
  {
    "id": 956648799895720000,
    "created_at": "2018-01-25 22:03:42",
    "text": "“(Miloš Zeman) společnost nespojuje, rozděluje ji, že je prezidentem dolních deseti milionů”.\nJiří Drahoš, Rudolfinum, 25.1.2018"
  },
  {
    "id": 956532034318544900,
    "created_at": "2018-01-25 14:19:43",
    "text": "Prezident republiky půjde volit. Podrobnosti zde: https://t.co/nmqBduq6ra"
  },
  {
    "id": 956530528802525200,
    "created_at": "2018-01-25 14:13:44",
    "text": "Prezident republiky jmenoval profesora. Podrobnosti zde: https://t.co/svnYiICmuI"
  },
  {
    "id": 956449308093632500,
    "created_at": "2018-01-25 08:50:59",
    "text": "Prezident republiky Miloš Zeman se zúčastní ve čtvrtek dne 25. ledna 2018 od 20.00 hodin živě vysílané debaty v České televizi."
  },
  {
    "id": 956131419889299500,
    "created_at": "2018-01-24 11:47:49",
    "text": "Pan prezident přijal demisi vlády. Kabinet pověřil výkonem funkcí do jmenování vlády nové. A. Babiše pověřil jednán… https://t.co/s1yKbwJxD2"
  },
  {
    "id": 956128802446463000,
    "created_at": "2018-01-24 11:37:25",
    "text": "Pan prezident společně s dalšími klíčníky dnes slavnostně uložili české korunovační klenoty do Korunní komory v Kat… https://t.co/bJTJBp78Gl"
  },
  {
    "id": 955816649134891000,
    "created_at": "2018-01-23 14:57:02",
    "text": "Pražský hrad dnes přivítal skupinu s 10 000. účastníkem exkurzí v Kanceláři prezidenta republiky. Podrobnosti zde:… https://t.co/hKWHyaEbRD"
  },
  {
    "id": 955758691374026800,
    "created_at": "2018-01-23 11:06:43",
    "text": "Prezident republiky Miloš Zeman přijme ve středu 24. 1. 2018 v 11.45 hodin na Hradě demisi vlády. Podrobnosti zde: https://t.co/bPwT6Yo6ur"
  },
  {
    "id": 955755820125491200,
    "created_at": "2018-01-23 10:55:19",
    "text": "Pan prezident s ostatními klíčníky ve středu uloží do Korunní komory v Katedrále sv. Víta české korunovační klenoty: https://t.co/7VhkWEJPrJ"
  },
  {
    "id": 955742024791220200,
    "created_at": "2018-01-23 10:00:30",
    "text": "Prezident republiky Miloš Zeman se zúčastní v úterý dne 23. ledna 2018 od 20.15 hodin živě vysílané debaty na TV Prima."
  },
  {
    "id": 955693980049723400,
    "created_at": "2018-01-23 06:49:35",
    "text": "RT @AmbMeron: Crown Jewels at Prague Castle https://t.co/GpFO8WeDiE"
  },
  {
    "id": 955693828811448300,
    "created_at": "2018-01-23 06:48:59",
    "text": "RT @ErikBest: Merkel: Wir schaffen das.\nDrahoš: Zvládli bychom to. https://t.co/LMv9Yif6yA"
  },
  {
    "id": 955540830554484700,
    "created_at": "2018-01-22 20:41:01",
    "text": "ANO podpořilo Zemana na prezidenta a Babiše na premiéra: https://t.co/5DHQBRvdFD"
  },
  {
    "id": 955521973085405200,
    "created_at": "2018-01-22 19:26:05",
    "text": "TV Barrandov. Jiří Drahoš opět nepřišel diskutovat. https://t.co/WC78riDpBp"
  },
  {
    "id": 955476573041451000,
    "created_at": "2018-01-22 16:25:41",
    "text": "RT @ZEMANZNOVU2018: SPOT Miloš Zeman 30 sec.: https://t.co/N5h4OIiGOD prostřednictvím @YouTube"
  },
  {
    "id": 955401559952756700,
    "created_at": "2018-01-22 11:27:37",
    "text": "CELÝ ZÁZNAM: Debata s Milošem Zemanem před 2. kolem voleb https://t.co/7coBkusHdm"
  },
  {
    "id": 955374812184109000,
    "created_at": "2018-01-22 09:41:19",
    "text": "Prezident republiky Miloš Zeman se zúčastní v pondělí dne 22. ledna 2018 od 20.15 hodin živě vysílané debaty na TV Barrandov."
  },
  {
    "id": 955354869304569900,
    "created_at": "2018-01-22 08:22:05",
    "text": "Angela Merkelová: “Wir schaffen das!” - Zvládneme to!” Jiří Drahoš: “Jsme silná země pro zvládnutí migrace”."
  },
  {
    "id": 955346343094116400,
    "created_at": "2018-01-22 07:48:12",
    "text": "Odhalení. Pár dnů před volbami. https://t.co/j43Mjk5jlV"
  },
  {
    "id": 955174811931639800,
    "created_at": "2018-01-21 20:26:36",
    "text": "RT @MarketingaMedia: TV Nova: První prezidentskou debatu sledovalo přibližně 1,5 milionu diváků v CS 15+ (průběžná peoplemeterová data, Nie…"
  },
  {
    "id": 955141185491951600,
    "created_at": "2018-01-21 18:12:58",
    "text": "Zázemí připravené pro Jiřího Drahoše na TV NOVA zůstává prázdné. https://t.co/MeToVROIKp"
  },
  {
    "id": 955047173481226200,
    "created_at": "2018-01-21 11:59:24",
    "text": "Temná vize země za „Drahoše prezidenta“ podle děkana Ševčíka: Znehodnocené úspory lidí, vítání a kývání... https://t.co/jSHmHpDIVe"
  },
  {
    "id": 955035277336219600,
    "created_at": "2018-01-21 11:12:08",
    "text": "Z Pražského hradu přeji krásnou neděli, přátelé! Sledujte dnes ve 20:00 televizi NOVA! https://t.co/Y1QVAFowMx"
  },
  {
    "id": 954990898194141200,
    "created_at": "2018-01-21 08:15:47",
    "text": "Jasné názory a jejich obhajobu v debatách nečekejte. Místo toho nabízí cvičení, stahování králíka a zpívání."
  },
  {
    "id": 954773489675919400,
    "created_at": "2018-01-20 17:51:53",
    "text": "Prezident republiky Miloš Zeman se zúčastní v neděli dne 21. ledna 2018 od 20.00 hodin živě vysílané debaty na TV Nova."
  },
  {
    "id": 954752160008474600,
    "created_at": "2018-01-20 16:27:08",
    "text": "RT @wasyl1984: Kampaň jede na plný koule! https://t.co/j8JRsRbPzm"
  },
  {
    "id": 954685965238505500,
    "created_at": "2018-01-20 12:04:05",
    "text": "Budete terčem médií. Ale dám vám všem jedinou radu... Máme zdravici Miloše Zemana z dnešní akce na záchranu ČSSD: https://t.co/7DmrUkS0rp"
  },
  {
    "id": 954431901586083800,
    "created_at": "2018-01-19 19:14:32",
    "text": "Ovčáček tlačí na Drahoše: Neschovávejte se! Dokonce mu připravil seznam https://t.co/ZtdKyj1ZyO"
  },
  {
    "id": 954427940971917300,
    "created_at": "2018-01-19 18:58:48",
    "text": "RT @CUTIzpravy: Bojí se zpovídat. Pan prezident má za sebou odvážný život. Žádná NSR, žádná pohodlná setkání."
  },
  {
    "id": 954423789001019400,
    "created_at": "2018-01-19 18:42:18",
    "text": "Pan prezident bude vždy ctít rozhodnutí voličů. První na pásce vyhrává. Ač si Kalousek myslí něco jiného."
  },
  {
    "id": 954419679577169900,
    "created_at": "2018-01-19 18:25:58",
    "text": "Václav Havel. https://t.co/K3xVJHUG73"
  },
  {
    "id": 954414388433313800,
    "created_at": "2018-01-19 18:04:57",
    "text": "https://t.co/QY3IJaTWu4"
  },
  {
    "id": 954411927588962300,
    "created_at": "2018-01-19 17:55:10",
    "text": "Prezident republiky musí být odvážný a hrdý. Ne estetický a nic neříkající."
  },
  {
    "id": 954401562411126800,
    "created_at": "2018-01-19 17:13:59",
    "text": "Nikdy by neváhal debatovat. Václav Havel. https://t.co/fXTUUQdImY"
  },
  {
    "id": 954380780364542000,
    "created_at": "2018-01-19 15:51:24",
    "text": "Videozáznam pořadu “Týden s prezidentem”. Čtvrtek 18. ledna 2018, 20:15, TV Barrandov: https://t.co/vtHnYag8iW"
  },
  {
    "id": 954376724732661800,
    "created_at": "2018-01-19 15:35:17",
    "text": "Drahošová se uřekla: V ČT nám fandí, ale nesmí to říct https://t.co/8PbrkiOeRU"
  },
  {
    "id": 954346417014956000,
    "created_at": "2018-01-19 13:34:51",
    "text": "Pan prezident po případu Věry Jourové ctí princip presumpce neviny."
  },
  {
    "id": 954319755824988200,
    "created_at": "2018-01-19 11:48:54",
    "text": "Kdo se bojí, nesmí do televize! Bude mít Jiří Drahoš odvahu v neděli přijít a názorově se utkat s panem prezidentem? https://t.co/fAQBemiVJd"
  },
  {
    "id": 954313352557289500,
    "created_at": "2018-01-19 11:23:28",
    "text": "Noblesní a spojovací kampaň pokračuje. https://t.co/G1ZVCzeXSv"
  },
  {
    "id": 954298723131158500,
    "created_at": "2018-01-19 10:25:20",
    "text": "RT @PanenkaRadim: Manželka Jiřího DRAHOŠE veřejně: “V České televizi nám fandí, ale nesmí to dávat najevo”.  Proto trval @jiridrahos1 na du…"
  },
  {
    "id": 954055124258885600,
    "created_at": "2018-01-18 18:17:21",
    "text": "Jiří Drahoš, 13.1.2018. Přání splněno. Pan prezident se těší na čtyři TV duely. Věříme, že Jiří Drahoš přijde už tu… https://t.co/ctj3z22zWk"
  },
  {
    "id": 954035766660919300,
    "created_at": "2018-01-18 17:00:26",
    "text": "Výzva Jiřímu Drahošovi! https://t.co/KfY0GL4oTH"
  },
  {
    "id": 954033868180422700,
    "created_at": "2018-01-18 16:52:53",
    "text": "Pan prezident potvrdil účast v duelech na Nově, Barrandově, Primě a v ČT. Očekáváme, že se Jiří Drahoš nebude schovávat a přijde debatovat!"
  },
  {
    "id": 954029963052834800,
    "created_at": "2018-01-18 16:37:22",
    "text": "Sledujte dnes od 20:15 TV Barrandov! Pan prezident v pořadu rozptýlí nejnovější dojemné obavy novinářů o jeho zdraví."
  },
  {
    "id": 954027648950390800,
    "created_at": "2018-01-18 16:28:11",
    "text": "@Kovi20 Mrkněte ve 20:15 na TV Barrandov. Pan prezident tam o drobném zákroku hovoří. Zná novináře. Ti z výměny plo… https://t.co/udN5c3peav"
  },
  {
    "id": 954025720174571500,
    "created_at": "2018-01-18 16:20:31",
    "text": "Pan prezident předevčírem podstoupil malý zákrok. Drobný zánět v dutině ústní, nic vážného. Dnes ostatně natáčel ro… https://t.co/P2OcjsiXB6"
  },
  {
    "id": 954009423537737700,
    "created_at": "2018-01-18 15:15:45",
    "text": "Hezký inzerát. Jen z něj vypadlo vyjádření J. Drahoše z 06/2017, kdy podpořil přijetí 2600 migrantů v rámci kvót. https://t.co/UJfIUil6Gj"
  },
  {
    "id": 953989757704556500,
    "created_at": "2018-01-18 13:57:37",
    "text": "Zdeněk Troška: Pokud chcete žít v klidu a pokoji, volte pana Zemana. Ten bude bdít nad námi jako nikdo: https://t.co/4NBjCn2Dmy"
  },
  {
    "id": 953968702386573300,
    "created_at": "2018-01-18 12:33:57",
    "text": "Boj o Hrad: Ovčáček: Naší strategií jsou čtyři debaty, ať pan Drahoš přijde, nebo ne https://t.co/XQSvqTtUeV"
  },
  {
    "id": 953960755682009100,
    "created_at": "2018-01-18 12:02:22",
    "text": "RT @neviditelnypes: \"Výzva vědců proti strachu a lhostejnosti\" se potichoučku a nenápadně smrskla, byvši ochuzena o pasáže, které by mohly…"
  },
  {
    "id": 953946810636292100,
    "created_at": "2018-01-18 11:06:57",
    "text": "Pan prezident dnes telefonicky hovořil s panem premiérem a dohodli se, že k předání demise vlády dojde na Hradě ve středu 24. ledna."
  },
  {
    "id": 953935366670741500,
    "created_at": "2018-01-18 10:21:29",
    "text": "Lány, právě teď! Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov. https://t.co/ycIELTMaIk"
  },
  {
    "id": 953921431880065000,
    "created_at": "2018-01-18 09:26:07",
    "text": "Bez komentáře. https://t.co/XUBHgoenvh"
  },
  {
    "id": 953882597972758500,
    "created_at": "2018-01-18 06:51:48",
    "text": "Manžela doprovodím do debat. Lži o jeho zdraví mě uráží, říká Zemanová: https://t.co/n12HXGsH4l"
  },
  {
    "id": 953749956266995700,
    "created_at": "2018-01-17 22:04:44",
    "text": "RT @ZEMANZNOVU2018: Václav Havel a Hovory z Lán, 30. května 1998. https://t.co/bzUVLJkGkl"
  },
  {
    "id": 953666831956500500,
    "created_at": "2018-01-17 16:34:25",
    "text": "RT @SlechtovaKarla: Zítra navečer si na zádušní mši v kostele sv. Jana Nepomuckého připomeneme 12 let od tragické letecké havárie, při kter…"
  },
  {
    "id": 953646950645227500,
    "created_at": "2018-01-17 15:15:25",
    "text": "Pan prezident se setká s panem premiérem a přijme demisi vlády. Termín není zatím stanoven a neplatí tak původní předpoklad do konce týdne."
  },
  {
    "id": 953606093820891100,
    "created_at": "2018-01-17 12:33:04",
    "text": "Drahoš není taková osobnost, podporuji na Hrad Zemana, říká Babiš: https://t.co/1Gu2hbpyu1"
  },
  {
    "id": 953603838103183400,
    "created_at": "2018-01-17 12:24:06",
    "text": "RT @AndrejBabis: Třinec by se měl stát statutárním městem, je to tam super, starostka je skvělá 👍"
  },
  {
    "id": 953318088614785000,
    "created_at": "2018-01-16 17:28:38",
    "text": "RT @MarketingaMedia: Prezidentská debata TV Prima je v plánu na úterý 23. ledna od 20.15 z Hudebního divadla Karlín. Má být \"netradičně poj…"
  },
  {
    "id": 953318080628838400,
    "created_at": "2018-01-16 17:28:36",
    "text": "RT @MarketingaMedia: Miloš Zeman i Jiří Drahoš písemně potvrdili účast v prezidentském duelu České televize. Bude 25. ledna od 20 hodin na…"
  },
  {
    "id": 953295277913493500,
    "created_at": "2018-01-16 15:58:00",
    "text": "Televize rozdaly termíny debat: Kdy se střetne Zeman s Drahošem? https://t.co/k9GlgOmbeO"
  },
  {
    "id": 953293178345607200,
    "created_at": "2018-01-16 15:49:39",
    "text": "To bude zřejmě ta noblesa. https://t.co/ANEvPBUe87"
  },
  {
    "id": 953255092106428400,
    "created_at": "2018-01-16 13:18:19",
    "text": "RT @MarketingaMedia: „TV Nova odvysílá předvolební prezidentskou debatu v neděli 21. ledna od 20:00. Pozváni byli oba kandidáti na post pre…"
  },
  {
    "id": 953235292743401500,
    "created_at": "2018-01-16 11:59:38",
    "text": "https://t.co/6kTO05ytfQ"
  },
  {
    "id": 953234410853355500,
    "created_at": "2018-01-16 11:56:08",
    "text": "Kampaň přitvzuje. Už je tu vyhrožování násilím. https://t.co/13ZSFdZo64"
  },
  {
    "id": 953232552243945500,
    "created_at": "2018-01-16 11:48:45",
    "text": "Prezident republiky, který se nebojí otevřené diskuse! https://t.co/vHIi9QiMZD"
  },
  {
    "id": 953220797400780800,
    "created_at": "2018-01-16 11:02:02",
    "text": "RT @NickArcherFCO: My first ever tweet from beautiful Prague. Looking forward to presenting my credentials to the President. Clovek je doma…"
  },
  {
    "id": 953167371744759800,
    "created_at": "2018-01-16 07:29:45",
    "text": "“Já bych se s ním rád setkal tváří v tvář,“ uvedl veřejně Jiří Drahoš v sobotu 13.1.2018. A ejhle, náhle couvá z TV názorových duelů!"
  },
  {
    "id": 953167052898033700,
    "created_at": "2018-01-16 07:28:29",
    "text": "@kolovratnikm Pan prezident vyhověl prosbě Jiřího Drahoše. “Já bych se s ním rád setkal tváří v tvář,“ uvedl veřejn… https://t.co/KohtuWT8rl"
  },
  {
    "id": 953008329080655900,
    "created_at": "2018-01-15 20:57:46",
    "text": "Jiří Drahoš podle svých slov navrhl duel v ČT. My za žádnou televizi nemluvíme. Pan prezident přijal nabídky čtyř TV stanic, které obdržel."
  },
  {
    "id": 953006066949939200,
    "created_at": "2018-01-15 20:48:47",
    "text": "Nekastujeme televizní stanice a jejich diváky, chceme férový přístup. Pan prezident proto řekl ano ČT, Nově, Primě i Barrandovu."
  },
  {
    "id": 953004914887753700,
    "created_at": "2018-01-15 20:44:12",
    "text": "Pan prezident dnes potvrdil čtyři TV duely s Jiřím Drahošem. A to stále platí. Pokud má Jiří Drahoš skutečně odvahu, čtyři debaty neodmítne."
  },
  {
    "id": 952983906361495600,
    "created_at": "2018-01-15 19:20:43",
    "text": "Zeman chce jít hned do čtyř televizních soubojů, Drahoš nabídky zvažuje: https://t.co/flmRoi1gGg"
  },
  {
    "id": 952978380093259800,
    "created_at": "2018-01-15 18:58:45",
    "text": "Miloš Zeman přijal pozvání na duel s Drahošem v televizích Nova, Barrandov, Prima a ČT: https://t.co/PxoulO7c7c"
  },
  {
    "id": 952969635074314200,
    "created_at": "2018-01-15 18:24:00",
    "text": "Pan prezident přijal nabídku těchto televizních stanic účastnit se duelů s Jiřím Drahošem: NOVA, BARRANDOV, PRIMA a ČT."
  },
  {
    "id": 952957961437139000,
    "created_at": "2018-01-15 17:37:37",
    "text": "Ivana Zemanová otevřeně promluvila: Manžel celý život hájí české národní zájmy https://t.co/NYWlFqbm2d"
  },
  {
    "id": 952949809048145900,
    "created_at": "2018-01-15 17:05:14",
    "text": "Výstava “Symbolická moc českých korunovačních klenotů” je připravena. Probíhá 16.-23.1. Podrobnosti zde:… https://t.co/KjkdA7ajlv"
  },
  {
    "id": 952908653912260600,
    "created_at": "2018-01-15 14:21:41",
    "text": "České korunovační klenoty budou vystaveny pro veřejnost ve dnech 16. - 23.1.2018. Vstupné zdarma. Podrobnosti zde: https://t.co/wW9sPUwyjn"
  },
  {
    "id": 952908166634836000,
    "created_at": "2018-01-15 14:19:45",
    "text": "Pan prezident s dalšími klíčníky slavnostně otevřeli Korunní komoru v Katedrále sv. Víta a byly vyzvednuty české ko… https://t.co/vqF95Ek9hD"
  },
  {
    "id": 952868843428474900,
    "created_at": "2018-01-15 11:43:30",
    "text": "Zítra oznámím podrobnosti týkající se účasti pana prezidenta v TV duelech. Kampaň má být o názorech! A přesně tak budeme postupovat."
  },
  {
    "id": 952855956248985600,
    "created_at": "2018-01-15 10:52:17",
    "text": "RT @strakovka: 7 klíčníků dnes slavnostně otevře na Pražském hradě Korunní komoru. U příležitosti 100. výročí vzniku Československa budou v…"
  },
  {
    "id": 952561262583603200,
    "created_at": "2018-01-14 15:21:17",
    "text": "@jiridrahos1 Drobné upozornění pro autorský tým. Jde o citaci z Vánočního poselství, které vysílala 26.12.2017 celá… https://t.co/SCYu3p7RJD"
  },
  {
    "id": 952480523439493100,
    "created_at": "2018-01-14 10:00:27",
    "text": "Jednoznačný postoj skutečně českého prezidenta: https://t.co/gFsHISMRua"
  },
  {
    "id": 952311537284378600,
    "created_at": "2018-01-13 22:48:58",
    "text": "Prezident republiky. https://t.co/J8Q7v5usHC"
  },
  {
    "id": 952210428364550100,
    "created_at": "2018-01-13 16:07:11",
    "text": "Velké poděkování voličům. Tisková konference k výsledku prvního kola voleb. Teď vzhůru k vítězství ve finále za dva… https://t.co/pv9t6pGYnq"
  },
  {
    "id": 952181482956775400,
    "created_at": "2018-01-13 14:12:10",
    "text": "UPOZORNĚNÍ PRO NOVINÁŘE! Tisková konference pana prezidenta se uskuteční už v 16:30 hodin, a to v Loretánské ulici."
  },
  {
    "id": 951841900725788700,
    "created_at": "2018-01-12 15:42:48",
    "text": "FOTO Kateřina Zemanová odvolila. A pověděla nám něco zajímavého o svém tátovi: https://t.co/jkrddt1ogf"
  },
  {
    "id": 951829127379726300,
    "created_at": "2018-01-12 14:52:02",
    "text": "RT @SlechtovaKarla: To, co se deje proti stavajicimu prezidentovi, je hnus. Doslova. Je to svobodna prima volba prezidenta. Kazdy ma pravo…"
  },
  {
    "id": 951825994167603200,
    "created_at": "2018-01-12 14:39:35",
    "text": "Šíření dezinformací, pokus o fyzický útok, snaha zabránit svobodné volbě. To je nenávistný svět odpůrců pana prezidenta!"
  },
  {
    "id": 951822268845436900,
    "created_at": "2018-01-12 14:24:47",
    "text": "Pan prezident se svojí paní odvolili v ZŠ v Brdičkově ulici v Praze. ČR potřebuje odvážného prezidenta, který se ne… https://t.co/R5gTDffdRM"
  },
  {
    "id": 951802303698362400,
    "created_at": "2018-01-12 13:05:27",
    "text": "Držitelé klíčů odemknou v pondělí Korunní komoru v Katedrále sv. Víta, budou vyzvednuty české korunovační klenoty: https://t.co/s1q7Bxu4Bz"
  },
  {
    "id": 951791684165173200,
    "created_at": "2018-01-12 12:23:15",
    "text": "Prezident republiky. https://t.co/91cZt3zSCD"
  },
  {
    "id": 951769644624425000,
    "created_at": "2018-01-12 10:55:40",
    "text": "https://t.co/3OTrsiynE4"
  },
  {
    "id": 951766671655690200,
    "created_at": "2018-01-12 10:43:52",
    "text": "Prohlášení ministra vnitra k volbě prezidenta: https://t.co/lbLRxXUlya"
  },
  {
    "id": 951765627211001900,
    "created_at": "2018-01-12 10:39:43",
    "text": "Lživý leták pro Zemanovy voliče šetří policie jako maření voleb. Pachateli hrozí až tři roky vězení: https://t.co/JEYvi8Erap"
  },
  {
    "id": 951764202410139600,
    "created_at": "2018-01-12 10:34:03",
    "text": "Historik Igor Kozlovský poděkoval panu prezidentovi v dopise za pomoc při jeho osvobození ze zajetí: https://t.co/A5EQs9Q174"
  },
  {
    "id": 951759435269070800,
    "created_at": "2018-01-12 10:15:06",
    "text": "Volím číslo 7! https://t.co/2bOmKvT1Mr"
  },
  {
    "id": 951739825614442500,
    "created_at": "2018-01-12 08:57:11",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 11. ledna 2018, 20:15, TV Barrandov: https://t.co/XztB5SUyPW"
  },
  {
    "id": 951738397151899600,
    "created_at": "2018-01-12 08:51:30",
    "text": "Karel Gott bude volit Miloše Zemana: https://t.co/KOeqtIUwRK"
  },
  {
    "id": 951575427751010300,
    "created_at": "2018-01-11 22:03:56",
    "text": "Prezident republiky. https://t.co/Gyj38vp6Qx"
  },
  {
    "id": 951521950836371500,
    "created_at": "2018-01-11 18:31:26",
    "text": "Zákeřný útok na voliče Miloše Zemana! Internetem i poštovními schránkami se šíří lživý návod k volbám: https://t.co/Oq30ZUVsGL"
  },
  {
    "id": 951506371916255200,
    "created_at": "2018-01-11 17:29:31",
    "text": "Lživý leták, který se objevil ve schránkách v Moravskoslezském kraji. Vyzývám protikandidáty, aby se od této hnusné… https://t.co/jLASKI5htS"
  },
  {
    "id": 951504948122062800,
    "created_at": "2018-01-11 17:23:52",
    "text": "RT @strakovka: Premiér @AndrejBabis bude volit v pátek 12. ledna 2018 v 17.00 na Obecním úřadě v Průhonicích. → https://t.co/TRedXpdtIc"
  },
  {
    "id": 951447353747214300,
    "created_at": "2018-01-11 13:35:00",
    "text": "Babiš bude volit Zemana. Nekrade, drží slovo, řekl premiér: https://t.co/smhn8vZuff"
  },
  {
    "id": 951394851123286000,
    "created_at": "2018-01-11 10:06:23",
    "text": "Právě teď, Lány. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes od 20:15 na TV Barrandov! https://t.co/28GIpth3cL"
  },
  {
    "id": 951384235851608000,
    "created_at": "2018-01-11 09:24:12",
    "text": "Rozhovor pana prezidenta pro MF Dnes: https://t.co/FRXrAGnvNy"
  },
  {
    "id": 951158959473389600,
    "created_at": "2018-01-10 18:29:02",
    "text": "https://t.co/V3zTPLYSaJ"
  },
  {
    "id": 951131977645723600,
    "created_at": "2018-01-10 16:41:49",
    "text": "Ti ubožáci v Bakalově knížectví v antizemanovské nenávisti omluví i komunistický puč v únoru 1948: https://t.co/FqhixxXxzg"
  },
  {
    "id": 951127551874863100,
    "created_at": "2018-01-10 16:24:14",
    "text": "https://t.co/JM03c45xJO"
  },
  {
    "id": 951125923721510900,
    "created_at": "2018-01-10 16:17:45",
    "text": "Kdyby v Poslanecké sněmovně mluvil fikus, Kalousek s Farským by se mocně klonili k zemi. I listy by oprašovali. https://t.co/HtkrbN7nqP"
  },
  {
    "id": 951121137982984200,
    "created_at": "2018-01-10 15:58:44",
    "text": "JENOM V DIALOGU SE RODÍ PRAVDA. Prezident republiky Miloš Zeman, 10. ledna 2018."
  },
  {
    "id": 951074248776446000,
    "created_at": "2018-01-10 12:52:25",
    "text": "Přečtěte si přepis projevu pana prezidenta v Poslanecké sněmovně! https://t.co/7dEf5rMcyo"
  },
  {
    "id": 951070937134391300,
    "created_at": "2018-01-10 12:39:16",
    "text": "Prezident republiky Miloš Zeman odvolí v pátek 12. ledna 2018 v 15:00 hodin v budově Základní školy v Brdičkově ulici v Praze 5 – Lužiny."
  },
  {
    "id": 951037431607947300,
    "created_at": "2018-01-10 10:26:07",
    "text": "Fikus by četl projev z papíru, napsaný a podstrčený draze placenými poradci. Prezident republiky promlouvá k Poslanecké sněmovně spatra!"
  },
  {
    "id": 951035998288400400,
    "created_at": "2018-01-10 10:20:26",
    "text": "@kalousekm Je to skvělý projev, že?"
  },
  {
    "id": 951035325815681000,
    "created_at": "2018-01-10 10:17:45",
    "text": "Právě teď. Pan prezident v Poslanecké sněmovně. https://t.co/sX0SfTbkj5"
  },
  {
    "id": 951032999612747800,
    "created_at": "2018-01-10 10:08:31",
    "text": "Jenom v dialogu se rodí pravda, řekl pan prezident v projevu v Poslanecké sněmovně."
  },
  {
    "id": 950836625168363500,
    "created_at": "2018-01-09 21:08:11",
    "text": "@FackaDoTvarePK @maestrosill @FPeroutkaPM Ale nespletl. Od novinářů, zvláště od jakéhosi Syndikátu, očekávám přesno… https://t.co/5THFmxBq45"
  },
  {
    "id": 950791203322323000,
    "created_at": "2018-01-09 18:07:42",
    "text": "Momentky ze slavnostního večera pořádaného u příležitosti zahájení oslav 100 let od vzniku ČSR a 25. výročí ČR. https://t.co/prA8bJk60P"
  },
  {
    "id": 950790432434393100,
    "created_at": "2018-01-09 18:04:38",
    "text": "Syndikát novinářů neví, jaký mám účet na Twitteru! Medvědí služba Bakalovu vydavatelství, které šíří dezinformace a… https://t.co/AUdDxA8GMF"
  },
  {
    "id": 950788795879870500,
    "created_at": "2018-01-09 17:58:08",
    "text": "OVTV, videozáznam projevu pana prezidenta u přiležitosti zahájení oslav 100 let od vzniku ČSR a 25. výročí ČR:… https://t.co/jfprjMqe1i"
  },
  {
    "id": 950775191482880000,
    "created_at": "2018-01-09 17:04:04",
    "text": "Hrad, právě teď. Přátelské setkání pana prezidenta s premiéry ČR a SR. https://t.co/o6ZOtbqRzm"
  },
  {
    "id": 950772014717038600,
    "created_at": "2018-01-09 16:51:27",
    "text": "Pan prezident se před slavnostním večerem k zahájení oslav 100 let vzniku ČSR a 25. výročí ČR setkal se slovenským… https://t.co/NReT1PONzc"
  },
  {
    "id": 950757795678314500,
    "created_at": "2018-01-09 15:54:57",
    "text": "Pan prezident a pan kardinál symbolicky zahájili výstavu V základech státnosti. Bude přístupná zdarma 10.-15.1. v C… https://t.co/xLS7SsOcTq"
  },
  {
    "id": 950745999001124900,
    "created_at": "2018-01-09 15:08:04",
    "text": "Prezident republiky Miloš Zeman přijal na Pražském hradě v úterý 9. ledna 2018 Tomio Okamuru, předsedu  hnutí Svoboda a přímá demokracie."
  },
  {
    "id": 950693380807413800,
    "created_at": "2018-01-09 11:38:59",
    "text": "OVTV, videozáznam z mé dnešní tiskové konference: https://t.co/QMWdSjx0CU https://t.co/uHLt8sULqI"
  },
  {
    "id": 950686613541179400,
    "created_at": "2018-01-09 11:12:06",
    "text": "Pan prezident ve středu navštíví Poslaneckou sněmovnu. Podrobnosti zde: https://t.co/SKw1gmnUsp"
  },
  {
    "id": 950682676092162000,
    "created_at": "2018-01-09 10:56:27",
    "text": "Zeman podpoří vládu, před hlasováním o důvěře se sejde s Okamurou: https://t.co/xmqmkpYEVC"
  },
  {
    "id": 950657333000048600,
    "created_at": "2018-01-09 09:15:45",
    "text": "Kdopak z Bakalových novinářů mi ještě v rámci vendety pošle dotaz? Začínám je sbírat a královsky se bavím. Jo, kampaň pro fikus je náročná!"
  },
  {
    "id": 950653546650832900,
    "created_at": "2018-01-09 09:00:42",
    "text": "U Bakalů je dnes veselo! https://t.co/q389OUrBWL"
  },
  {
    "id": 950644341596475400,
    "created_at": "2018-01-09 08:24:07",
    "text": "@FackaDoTvarePK Jiří Mádl ani není schopen formulovat vlastní myšlenku. A tak opisuje od klasiků! https://t.co/qcVmKni56Y"
  },
  {
    "id": 950637792715042800,
    "created_at": "2018-01-09 07:58:06",
    "text": "@m_horacek Musím Vám pogratulovat, jak jste šikovně napálil volbami rozechvělé novináře! Na duel se mě zcela vážně… https://t.co/ExtydUEwZ1"
  },
  {
    "id": 950421364783149000,
    "created_at": "2018-01-08 17:38:05",
    "text": "RT @CUTIzpravy: Lhář, nebo popleta? Drahoš má vážný problém: https://t.co/wQNbHGfkuP"
  },
  {
    "id": 950361954140479500,
    "created_at": "2018-01-08 13:42:01",
    "text": "Prezident republiky. https://t.co/qPDsrRnNJz"
  },
  {
    "id": 950334445558665200,
    "created_at": "2018-01-08 11:52:42",
    "text": "Přepis rozhovoru pana prezidenta pro Frekvenci 1: https://t.co/MziOF893Cs"
  },
  {
    "id": 950317184634507300,
    "created_at": "2018-01-08 10:44:07",
    "text": "Pan prezident společně s panem kardinálem zítra v 16:00 na Hradě symbolicky zahájí výstavu V základech státnosti: https://t.co/Dir7MHdTBa"
  },
  {
    "id": 950314498593841200,
    "created_at": "2018-01-08 10:33:27",
    "text": "Poslechněte si celý rozhovor rádia Frekvence 1 s panem prezidentem: https://t.co/q7ybSVfReN"
  },
  {
    "id": 950300112873549800,
    "created_at": "2018-01-08 09:36:17",
    "text": "V úterý dne 9. ledna 2018 se v 11.30 hodin na Pražském hradě uskuteční má tradiční tisková konference, kdy se vyjádřím k aktuálním tématům."
  },
  {
    "id": 950299005535359000,
    "created_at": "2018-01-08 09:31:53",
    "text": "Czech president BLASTS EU migrant policy &amp; warns 10 million refugees could come to Europe: https://t.co/J795iGLNFW"
  },
  {
    "id": 950050700440100900,
    "created_at": "2018-01-07 17:05:12",
    "text": "Czech president:'10 million migrants will flood Europe' https://t.co/okXMpFxDQw"
  },
  {
    "id": 950043344809480200,
    "created_at": "2018-01-07 16:35:59",
    "text": "RT @ZEMANZNOVU2018: ZEMAN ZNOVU 2018. Volte Miloše Zemana již v prvním kole! https://t.co/O4oxYv4ai0"
  },
  {
    "id": 950037700861624300,
    "created_at": "2018-01-07 16:13:33",
    "text": "Právě teď, Lány! Živě na Frekvenci 1 rozhovor s panem prezidentem. https://t.co/fa5Igzx0W3"
  },
  {
    "id": 950015868540465200,
    "created_at": "2018-01-07 14:46:48",
    "text": "https://t.co/YavlViOvJI"
  },
  {
    "id": 950012086809227300,
    "created_at": "2018-01-07 14:31:46",
    "text": "RT @SlechtovaKarla: Ve věku 89 let dnes zemřel Hugo Marom, izraelský veterán, pilot s českými kořeny. Na své rodiště nikdy nezapomněl a s l…"
  },
  {
    "id": 950012036393685000,
    "created_at": "2018-01-07 14:31:34",
    "text": "RT @AmbMeron: Hugo Marom, a hero of Israel-Czech relations, has passed away. Born in Brno, saved from Holocaust by Nicholas Winton, one of…"
  },
  {
    "id": 949926233529372700,
    "created_at": "2018-01-07 08:50:37",
    "text": "Dnes v 17:00 na Frekvenci 1 z Lán živě vysílaný rozhovor s panem prezidentem!"
  },
  {
    "id": 949679144803225600,
    "created_at": "2018-01-06 16:28:46",
    "text": "RT @AmbMeron: Pleased to meet @rudolf_jindrak  at Prague Castle, to discuss 🇮🇱 🇨🇿 relations https://t.co/rjAbLuSN27"
  },
  {
    "id": 949678894667350000,
    "created_at": "2018-01-06 16:27:47",
    "text": "“Založeno 1918“ aneb výstavy na Pražském hradě k 100. výročí vzniku ČSR: https://t.co/qmbpdgp615"
  },
  {
    "id": 949669236435284000,
    "created_at": "2018-01-06 15:49:24",
    "text": "Karel Kramář tak už v roce 1919 ve výtkách TGM přesně popsal současný sen médií a velké části politiků. Prezident-fikus."
  },
  {
    "id": 949665917918699500,
    "created_at": "2018-01-06 15:36:13",
    "text": "Opět únor 1919. Kramářovi vadil tým TGM. Napsal: Vám stačí korektní mlčenlivý úředník a nanejvýš jeden stylista pro oficiální projevy."
  },
  {
    "id": 949665750528217100,
    "created_at": "2018-01-06 15:35:33",
    "text": "Stále stejné! V únoru 1919 dal premiér Kramář najevo TGM, že chce tichého, pasivního prezidenta, který bude projevy smlouvat s vládou."
  },
  {
    "id": 949651897299996700,
    "created_at": "2018-01-06 14:40:30",
    "text": "@KTweetuje Zamotáváte se do toho. Ostudu, které jste se dopustil, fakt neokecáte. Ani na osobním a ani na oficiální… https://t.co/lz8w9NuBkn"
  },
  {
    "id": 949649151796613100,
    "created_at": "2018-01-06 14:29:36",
    "text": "@fidahype @KTweetuje Tvrdé odmítání antisemitismu a útoků na Izrael, to jsou dlouhodobá stanoviska pana prezidenta. Vaše zjevně ne, pánové."
  },
  {
    "id": 949648040356433900,
    "created_at": "2018-01-06 14:25:11",
    "text": "@KTweetuje Úřad jste diskreditoval Vy nepatřičným tweetem. Fakt jsou věci, o kterých se nežertuje. Příště si napřed… https://t.co/KqDvduS7RP"
  },
  {
    "id": 949644079389970400,
    "created_at": "2018-01-06 14:09:26",
    "text": "@KTweetuje Otázka dne zní, proč na ministerstvu kultury zesměšňují zrovna tento návrh CDU/CSU. https://t.co/3g35fIxqkH"
  },
  {
    "id": 949639825291964400,
    "created_at": "2018-01-06 13:52:32",
    "text": "Spolková kancléřka plánuje vyhostit antisemitské migranty. Tak si připomeňme, co jsem uvedl v roce 2015: https://t.co/Kr4HRHBjDA"
  },
  {
    "id": 949358906907746300,
    "created_at": "2018-01-05 19:16:16",
    "text": "Prezident republiky. https://t.co/hRNgcxeMeG"
  },
  {
    "id": 949336001528385500,
    "created_at": "2018-01-05 17:45:15",
    "text": "RT @PanenkaRadim: Aby bylo jasno. Kdo tvrdí opak, bohapustě lže a sám šíří dezinformace❗️ https://t.co/CFZgfQtDQK"
  },
  {
    "id": 949335969597141000,
    "created_at": "2018-01-05 17:45:07",
    "text": "RT @rudolf_jindrak: Listopadová návštěva v Rusku mj. ukázala, že společné dějiny jsou důležitým tématem, o němž je s ruskými partnery zapot…"
  },
  {
    "id": 949282118932271100,
    "created_at": "2018-01-05 14:11:08",
    "text": "RT @strakovka: Premiér @AndrejBabis spolu se svým slovenským protějškem Robertem Ficem uctili památku zakladatelů Československa T. G. Masa…"
  },
  {
    "id": 949237822103474200,
    "created_at": "2018-01-05 11:15:07",
    "text": "V příštím období na Hradě uklidním emoce, slíbil Ovčáček v debatě mluvčích: https://t.co/sEb6olmdp8"
  },
  {
    "id": 949233822729736200,
    "created_at": "2018-01-05 10:59:13",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 4.1.2018, 20:15, TV Barrandov: https://t.co/d7qwGRD8Iz"
  },
  {
    "id": 949231368185286700,
    "created_at": "2018-01-05 10:49:28",
    "text": "RT @PanenkaRadim: Armádní speciál s premiérem @AndrejBabis právě přistál v Bratislavě. V delegaci jsou ministryně obrany, financí a práce a…"
  },
  {
    "id": 949231191953236000,
    "created_at": "2018-01-05 10:48:46",
    "text": "Pan prezident vystoupí v neděli dne 7. ledna 2018 v 17.00 v pořadu Prezidentský Pressklub na Frekvenci 1. Rozhovor bude vysílán živě z Lán."
  },
  {
    "id": 949185527634387000,
    "created_at": "2018-01-05 07:47:19",
    "text": "V debatě iDNES.cz se utkají mluvčí prezidentských kandidátů: https://t.co/sEb6olmdp8"
  },
  {
    "id": 948980140440281100,
    "created_at": "2018-01-04 18:11:11",
    "text": "RT @strakovka: Premiér @AndrejBabis po jednání s hejtmany: „V minulosti bylo zvykem setkávat se dvakrát ročně, nyní bychom se měli setkávat…"
  },
  {
    "id": 948934448258658300,
    "created_at": "2018-01-04 15:09:37",
    "text": "Pan prezident přijal ve čtvrtek dne 4. ledna 2018 na Pražském hradě na jeho žádost ministra dopravy Dana Ťoka."
  },
  {
    "id": 948911839185899500,
    "created_at": "2018-01-04 13:39:47",
    "text": "Prezident republiky by měl dodržovat dobré tradice. Proto dnes pan prezident na Hradě tradičně předal finanční přís… https://t.co/KoNLpF7JfG"
  },
  {
    "id": 948895908116254700,
    "created_at": "2018-01-04 12:36:28",
    "text": "Úžasný novoroční dárek! https://t.co/HW31Qon6dS"
  },
  {
    "id": 948879411075518500,
    "created_at": "2018-01-04 11:30:55",
    "text": "Pan prezident vystoupí ve čtvrtek dne 4. ledna 2018 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 948859926524330000,
    "created_at": "2018-01-04 10:13:30",
    "text": "Právě teď! Hrad. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov. https://t.co/1xzniGWeHW"
  },
  {
    "id": 948581769846116400,
    "created_at": "2018-01-03 15:48:12",
    "text": "Děkuji! https://t.co/1tYZ0KQ9gS"
  },
  {
    "id": 948569187445821400,
    "created_at": "2018-01-03 14:58:12",
    "text": "Pan prezident přijal ve středu dne 3. ledna 2018 na Pražském hradě ministra spravedlnosti Roberta Pelikána."
  },
  {
    "id": 948541310629302300,
    "created_at": "2018-01-03 13:07:26",
    "text": "Aréna Jaromíra Soukupa měla rekordní sledovanost: https://t.co/bh29VKMhHm"
  },
  {
    "id": 948513770460020700,
    "created_at": "2018-01-03 11:18:00",
    "text": "Pan prezident ve čtvrtek 4.1. ve 14:00 hodin na Hradě předá finanční dar Fondu ohrožených dětí. Podrobnosti zde: https://t.co/acJXgtDajV"
  },
  {
    "id": 948494997468385300,
    "created_at": "2018-01-03 10:03:24",
    "text": "Z debaty na Novinky.cz:\n\nAntizemanovská propaganda se stupňuje. Za chvíli bude i v relaci počasí napsáno, ze venku prší kvůli Zemanovi."
  },
  {
    "id": 948282618977640400,
    "created_at": "2018-01-02 19:59:29",
    "text": "RT @strakovka: Premiér @AndrejBabiš s manželkou poobědvali v Lánech s prezidentským párem. „Oběd s panem prezidentem byl příjemný, jídlo by…"
  },
  {
    "id": 948175265947160600,
    "created_at": "2018-01-02 12:52:54",
    "text": "Pan prezident se svojí paní přivítali v Lánech u příležitosti tradičního novoročního oběda premiéra Andreje Babiše… https://t.co/LqG0lcKd3N"
  },
  {
    "id": 948105340779933700,
    "created_at": "2018-01-02 08:15:02",
    "text": "V Lánech se dnes ve 13:30 uskuteční novoroční oběd s premiérem Andrejem Babišem a jeho manželkou. Podrobnosti zde: https://t.co/Iq5PZbWfz1"
  },
  {
    "id": 947822553480998900,
    "created_at": "2018-01-01 13:31:21",
    "text": "Do 17:00 na Hradě v Návštěvní místnosti KPR otevřena mimořádná expozice k 25. výročí ČR! Výstavu si už prohlédla mi… https://t.co/oNma8rD0a7"
  },
  {
    "id": 947818018972848100,
    "created_at": "2018-01-01 13:13:19",
    "text": "Miloš Zeman na PL ostře připomněl Slovensku jeho vražednou minulost. A sdělil, jak přesně povede volby: https://t.co/GOHDvRT9ZA"
  },
  {
    "id": 947614663939723300,
    "created_at": "2017-12-31 23:45:16",
    "text": "RT @realDonaldTrump: HAPPY NEW YEAR! We are MAKING AMERICA GREAT AGAIN, and much faster than anyone thought possible!"
  },
  {
    "id": 947604650156613600,
    "created_at": "2017-12-31 23:05:28",
    "text": "https://t.co/zgKFL7FAU8"
  },
  {
    "id": 947595640153964500,
    "created_at": "2017-12-31 22:29:40",
    "text": "RT @AmbMeron: My hero for 2017 is Jaroslava Doležalová, 93, who saved a Jewish girl in Shoah by hiding her, &amp; only now is talking abt it ht…"
  },
  {
    "id": 947539591988437000,
    "created_at": "2017-12-31 18:46:57",
    "text": "Šťastný nový rok 2018! Ať každý z nás dokáže nalézt tu správnou cestu. https://t.co/Cx6oYo2PYl"
  },
  {
    "id": 947531940156067800,
    "created_at": "2017-12-31 18:16:33",
    "text": "Ovčáček hodil bombu do „pražské kavárny“. Drsná silvestrovská pomsta za všechny útoky na Zemana: https://t.co/ampRtLYq2J"
  },
  {
    "id": 947236095045046300,
    "created_at": "2017-12-30 22:40:58",
    "text": "RT @realDonaldTrump: I use Social Media not because I like to, but because it is the only way to fight a VERY dishonest and unfair “press,”…"
  },
  {
    "id": 947235553690488800,
    "created_at": "2017-12-30 22:38:49",
    "text": "Český prezident Zeman: bojovník za pravdu https://t.co/XboXPAHbGS"
  },
  {
    "id": 947154834364555300,
    "created_at": "2017-12-30 17:18:04",
    "text": "Bezpečnostní složky doporučily zachovat kontroly na Pražském hradě: https://t.co/C95bUI27R3"
  },
  {
    "id": 947127612035526700,
    "created_at": "2017-12-30 15:29:54",
    "text": "JAK SE KOMENTÁTOŘI MĚNÍ V LŮZU: https://t.co/oEMNTbaEs8"
  },
  {
    "id": 947109499105693700,
    "created_at": "2017-12-30 14:17:55",
    "text": "Na český Hrad patří skutečně český prezident! https://t.co/rty7Abn40A"
  },
  {
    "id": 947098154427670500,
    "created_at": "2017-12-30 13:32:50",
    "text": "Znamená to jediné. Mediálně-byznysová lobby pěstující fikusy od počátku ledna naplno spustí hnojomety: https://t.co/4GX0ALWTqd"
  },
  {
    "id": 947039349287333900,
    "created_at": "2017-12-30 09:39:10",
    "text": "Originál Ústavy a blahopřání od světových státníků. Pražský hrad přivítá Nový rok speciální výstavou: https://t.co/kOegyszmy6"
  },
  {
    "id": 946856483735658500,
    "created_at": "2017-12-29 21:32:32",
    "text": "Zdravý rozum zvítězí nad závistivou hloupostí! https://t.co/wxj13kIzzc"
  },
  {
    "id": 946788442775617500,
    "created_at": "2017-12-29 17:02:09",
    "text": "https://t.co/BA9Nxo0bk3"
  },
  {
    "id": 946786574179684400,
    "created_at": "2017-12-29 16:54:44",
    "text": "RT @iROZHLAScz: .@PREZIDENTmluvci: \"Budu vystupovat jako tiskový mluvčí prezidenta republiky. (...) A to, že to vyvolává mediální rozruch?…"
  },
  {
    "id": 946783553869832200,
    "created_at": "2017-12-29 16:42:44",
    "text": "Jste prachsprostý lhář. Novinový vydavatel se pustil do prezidenta, od Ovčáčka se následně dozvěděl pravdu: https://t.co/0kTHLY1cas"
  },
  {
    "id": 946748379442372600,
    "created_at": "2017-12-29 14:22:58",
    "text": "Prezident republiky, který je s občany a nepovyšuje se nad ně. https://t.co/o269aholgL"
  },
  {
    "id": 946735758727172100,
    "created_at": "2017-12-29 13:32:49",
    "text": "Mrzí mě, že někteří lidé, kteří se rozhodli kandidovat na nejvyšší post v České republice, dávají najevo, že někdo je víc a někdo je méně."
  },
  {
    "id": 946735033993310200,
    "created_at": "2017-12-29 13:29:56",
    "text": "Ovčáček o debatě s prezidentskými kandidáty: Že bych na Barrandově zastupoval Zemana, je lež https://t.co/yycYNxadU1"
  },
  {
    "id": 946734467615461400,
    "created_at": "2017-12-29 13:27:41",
    "text": "RT @iROZHLAScz: „Vy říkáte, že není možnost pozvat si na debatu lékařů například soustružníka…“ @PREZIDENTmluvci ve vysílání @Radiozurnal1…"
  },
  {
    "id": 946732570649210900,
    "created_at": "2017-12-29 13:20:08",
    "text": "@Michal_Klima Jste prachsprostý lhář a záměrně šíříte dezinformace. Do televize mne nikdo neposlal, byl jsem osloven přímo."
  },
  {
    "id": 946706138309038100,
    "created_at": "2017-12-29 11:35:06",
    "text": "Když ČT nabídla J. Drahošovi exkluzivní prostor bez protikandidátů, neváhal a 5.11. dorazil. Na Barrandov se prostě… https://t.co/uhYerHjqcF"
  },
  {
    "id": 946693891855736800,
    "created_at": "2017-12-29 10:46:27",
    "text": "V úterý 2. 1. 2018 od 13:30 se v Lánech uskuteční tradiční novoroční oběd pana prezidenta s premiérem. Více zde: https://t.co/Iq5PZbWfz1"
  },
  {
    "id": 946678929535926300,
    "created_at": "2017-12-29 09:46:59",
    "text": "RT @FackaDoTvarePK: Tak 10.3. pan prezident oznámí, že se nebude účastnit žádných debat, protože nevede kampaň. A 28.12. z toho dostane Pra…"
  },
  {
    "id": 946677618723688400,
    "created_at": "2017-12-29 09:41:47",
    "text": "Připomeňte si na Nový rok, 1.1.2018, na Hradě 25. výročí vzniku ČR a jubilejní 100. rok republiky! Podrobnosti zde: https://t.co/mmrbYa3Eom"
  },
  {
    "id": 946513479732809700,
    "created_at": "2017-12-28 22:49:33",
    "text": "https://t.co/of6x2fmtjh"
  },
  {
    "id": 946511455997841400,
    "created_at": "2017-12-28 22:41:31",
    "text": "Čin čin! https://t.co/OzPPxRZJ5f"
  },
  {
    "id": 946490352164368400,
    "created_at": "2017-12-28 21:17:39",
    "text": "Mluvčí J. Drahoše, Mirek Kalousek, osvětlil, že se mě pan kandidát štítí. Copak si asi J. Drahoš myslí o občanech?… https://t.co/2KY0s2zSNv"
  },
  {
    "id": 946439722829844500,
    "created_at": "2017-12-28 17:56:28",
    "text": "Letité tradice se mají dodržovat. A tak jsem i letos zavítal do Národního divadla na baletní pohádku Louskáček. https://t.co/Z1k4mrJvKr"
  },
  {
    "id": 946410916215738400,
    "created_at": "2017-12-28 16:02:00",
    "text": "Drahoš odmítl debaty s Horáčkem a Topolánkem. Drahoš odmítl debaty s Ovčáčkem. Co bude dál? Drahoš odmítl debaty s občany?"
  },
  {
    "id": 946402724924608500,
    "created_at": "2017-12-28 15:29:27",
    "text": "Pan prezident drží slovo! 10. března 2017 veřejně slíbil: https://t.co/Nel8FkqdDW"
  },
  {
    "id": 946397478953345000,
    "created_at": "2017-12-28 15:08:36",
    "text": "Horáčka se bojí, Topolánka se bojí. A teď se bojí i mírumilovného Ovčáčka! Pročpak asi takový strach? https://t.co/HO30gKtaqV"
  },
  {
    "id": 946394694250098700,
    "created_at": "2017-12-28 14:57:32",
    "text": "@horalek_martin Vy jste tiskový mluvčí pana profesora Drahoše, jak usuzuji dle Vašeho hněvu. Jaké to je?"
  },
  {
    "id": 946390660030107600,
    "created_at": "2017-12-28 14:41:31",
    "text": "Výmluvy! Tady se prostě někdo hodně moc bojí debaty s Ovčáčkem! Do debaty nebyl pozván pan prezident, ale rovnou Ov… https://t.co/iAcVCcuKvk"
  },
  {
    "id": 946373432563859500,
    "created_at": "2017-12-28 13:33:03",
    "text": "Budou tvrdit, že národ vlastně vůbec neexistuje, je to jen jakási imaginární, fiktivní představa společenství: https://t.co/m7ZfsEqYj6"
  },
  {
    "id": 946098195678953500,
    "created_at": "2017-12-27 19:19:22",
    "text": "Zemanova vánoční próza: https://t.co/gdXHQkwMUu"
  },
  {
    "id": 946089884057522200,
    "created_at": "2017-12-27 18:46:20",
    "text": "@trif Zkušenost velí, že ani šestkrát často nepomůže. To víte, většině osazenstva na Twitteru déle trvá pochopit psaný text."
  },
  {
    "id": 946077626938126300,
    "created_at": "2017-12-27 17:57:38",
    "text": "Historik, za kterého se přimluvil Zeman u Putina, je doma. Díky výměně zajatců: https://t.co/1Bq5B7CYaK"
  },
  {
    "id": 946050860768997400,
    "created_at": "2017-12-27 16:11:16",
    "text": "Kyjev si s povstalci vyměnil zajatce. Je mezi nimi i historik, za kterého se přimlouval Zeman: https://t.co/IbvtLNOiyV"
  },
  {
    "id": 946048272090779600,
    "created_at": "2017-12-27 16:00:59",
    "text": "Rodina osvobozeného historika Kozlovského v telefonátu vyjádřila poděkování panu prezidentovi za účinnou intervenci."
  },
  {
    "id": 946048023980859400,
    "created_at": "2017-12-27 16:00:00",
    "text": "Zástupce Hradu již telefonicky hovořil s rodinou historika Kozlovského. Je v letadle na cestě do Kyjeva. Všichni jsou z osvobození šťastni."
  },
  {
    "id": 946038944529043500,
    "created_at": "2017-12-27 15:23:55",
    "text": "Podrobnosti zde: Zeman požádal Putina, aby pomohl osvobodit ukrajinského historika https://t.co/fvj4dx6CNj"
  },
  {
    "id": 946038780968005600,
    "created_at": "2017-12-27 15:23:16",
    "text": "Pan prezident navrhl, aby byl historik Kozlovský osvobozen v rámci předvánoční výměny zajatců. K tomu nyní došlo."
  },
  {
    "id": 946038558112043000,
    "created_at": "2017-12-27 15:22:23",
    "text": "Pan prezident letos k propuštění historika Kozlovského vyzval v dopise i vůdce doněckých povstalců A. Zacharčenka."
  },
  {
    "id": 946037919214657500,
    "created_at": "2017-12-27 15:19:51",
    "text": "Připomínám, že za propuštění historika Kozlovského intervenoval pan prezident během listopadového jednání s ruským… https://t.co/CBWnDVJLDS"
  },
  {
    "id": 946021864224251900,
    "created_at": "2017-12-27 14:16:03",
    "text": "https://t.co/Yhq6rBcmWB"
  },
  {
    "id": 946017906424537100,
    "created_at": "2017-12-27 14:00:19",
    "text": "U fikusu za plexisklem je to věru zajímavé, což? Zdroj: https://t.co/bfbcLbWGQn https://t.co/0xHvX9Yebe"
  },
  {
    "id": 946014194553499600,
    "created_at": "2017-12-27 13:45:34",
    "text": "Hnutí STAN je průhledné jak plexisklo, za kterým je umístěn fikus. Zpravodajský server lidovky.cz, 14. října 2017.… https://t.co/834Dq0TyhW"
  },
  {
    "id": 946012578874036200,
    "created_at": "2017-12-27 13:39:09",
    "text": "Raz, dva, tři...už brzy se ozvou fikusy! STAN účelově vypomáhá v prezidentské kampani. O věcné řešení jim nejde. https://t.co/3hLdG6R9wV"
  },
  {
    "id": 945694410414723100,
    "created_at": "2017-12-26 16:34:52",
    "text": "Z Vánočního poselství prezidenta republiky Miloše Zemana: https://t.co/vdUJGMi1ke"
  },
  {
    "id": 945686870377287700,
    "created_at": "2017-12-26 16:04:54",
    "text": "Prezident republiky. https://t.co/nlNWXSq07Q"
  },
  {
    "id": 945686455602614300,
    "created_at": "2017-12-26 16:03:15",
    "text": "U dnešního natáčení Vánočního poselství prezidenta republiky Miloše Zemana v Lánech jsem samozřejmě nemohl chybět! https://t.co/LnGSLrAgBs"
  },
  {
    "id": 945649761708847100,
    "created_at": "2017-12-26 13:37:27",
    "text": "@Cerha Buďte tak laskav a nešiřte dezinformace. Projev byl pronesen spatra."
  },
  {
    "id": 945646688609415200,
    "created_at": "2017-12-26 13:25:14",
    "text": "Přečtěte si Vánoční poselství prezidenta republiky Miloše Zemana! https://t.co/8LUNgbmmUl"
  },
  {
    "id": 945634778346377200,
    "created_at": "2017-12-26 12:37:54",
    "text": "OVTV, videozáznam Vánočního poselství prezidenta republiky Miloše Zemana: https://t.co/DSao60pu4I https://t.co/qvFx4lCIDB"
  },
  {
    "id": 945588832937873400,
    "created_at": "2017-12-26 09:35:20",
    "text": "Dnes ve 13:00 Vánoční poselství prezidenta republiky! Na TV Nova, ČT 1, TV Barrandov, FTV Prima, Blesk.cz, ČRo Radiožurnál a ČRo Plus."
  },
  {
    "id": 945587241933574100,
    "created_at": "2017-12-26 09:29:01",
    "text": "RT @TBarrandov: Jaké bude mít pro nás poselství hlava našeho státu? 🎄\nSledujte dnes Vánoční poselství prezidenta republiky Miloše Zemana ve…"
  },
  {
    "id": 945535442090385400,
    "created_at": "2017-12-26 06:03:11",
    "text": "RT @realDonaldTrump: I hope everyone is having a great Christmas, then tomorrow it’s back to work in order to Make America Great Again (whi…"
  },
  {
    "id": 945220129742377000,
    "created_at": "2017-12-25 09:10:14",
    "text": "RT @realDonaldTrump: MERRY CHRISTMAS!! https://t.co/xa2qxcisVV"
  },
  {
    "id": 945005134353961000,
    "created_at": "2017-12-24 18:55:56",
    "text": "RT @AndrejBabis: Dear @JanThompsonFCO, your Christmas video is great, excellent, I really love it! Merry Christmas to you all in the Embass…"
  },
  {
    "id": 945005126116356100,
    "created_at": "2017-12-24 18:55:54",
    "text": "RT @netanyahu: Merry Christmas from Jerusalem, the capital of Israel! https://t.co/ChhsuqudW8"
  },
  {
    "id": 944911416745779200,
    "created_at": "2017-12-24 12:43:32",
    "text": "Pražský hrad vystaví Zlatou bulu sicilskou či vzácný evengeliář: https://t.co/E7VuCHHDSK"
  },
  {
    "id": 944631461583388700,
    "created_at": "2017-12-23 18:11:05",
    "text": "Na závěr vánočního koncertu jsme si všichni zazpívali koledu Narodil se Kristus Pán. Krásné svátky! https://t.co/D8ZBDcRCvu"
  },
  {
    "id": 944614671574814700,
    "created_at": "2017-12-23 17:04:22",
    "text": "Pan prezident tradičně zavítal na vánoční koncert v kostele Nejsvětějšího jména Ježíš v Lánech. https://t.co/gxeoIWBibL"
  },
  {
    "id": 944502417160319000,
    "created_at": "2017-12-23 09:38:18",
    "text": "https://t.co/LP7SPmfmEN"
  },
  {
    "id": 944225151494840300,
    "created_at": "2017-12-22 15:16:33",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 21. prosince 2017, 20:15, TV Barrandov: https://t.co/quxOybSofn"
  },
  {
    "id": 944159509458636800,
    "created_at": "2017-12-22 10:55:43",
    "text": "RT @UKinCR: 🎞🔜 https://t.co/v9mdZ1VjuC"
  },
  {
    "id": 944155993914605600,
    "created_at": "2017-12-22 10:41:45",
    "text": "Pan prezident pronese své vánoční poselství občanům ČR v úterý dne 26. prosince 2017 ve 13.00 hod. Podrobnosti zde: https://t.co/cxoFn51UaO"
  },
  {
    "id": 943977419618291700,
    "created_at": "2017-12-21 22:52:09",
    "text": "Pohrobci Sobotkovy vlády ve státní správě mají jasný pokyn: Zeman nesmí projít! https://t.co/64TNU5hxeS"
  },
  {
    "id": 943973847283400700,
    "created_at": "2017-12-21 22:37:58",
    "text": "RT @StandWithUs: The US said it was taking names, these are the states that didn't vote against the White House decision to move the US Emb…"
  },
  {
    "id": 943973724910506000,
    "created_at": "2017-12-21 22:37:28",
    "text": "Fajn! Ze zemí Evropské unie se hlasování vedle Česka zdržely Chorvatsko, Maďarsko, Lotyšsko, Polsko a Rumunsko."
  },
  {
    "id": 943967739324043300,
    "created_at": "2017-12-21 22:13:41",
    "text": "RT @BorisJohnson: Arrived in Russia for important talks with FM Lavrov. We may have many differences, but also much to work together on inc…"
  },
  {
    "id": 943959272483971100,
    "created_at": "2017-12-21 21:40:03",
    "text": "Tohle jsme ustáli. Přátele jsme nepodrazili. https://t.co/weZb2dvldR"
  },
  {
    "id": 943954693742583800,
    "created_at": "2017-12-21 21:21:51",
    "text": "Ano, to jsou hrdá spojenectví. Naše! https://t.co/QSJnDDAZwR"
  },
  {
    "id": 943948296623738900,
    "created_at": "2017-12-21 20:56:26",
    "text": "Tak jsme si dali společný dárek pod stromeček. V New Yorku, v OSN. Ať žije Izrael!"
  },
  {
    "id": 943947433318416400,
    "created_at": "2017-12-21 20:53:00",
    "text": "RT @AmbMeron: Thank you Czech Republic 🇨🇿 for not supporting the one sided resolution today at UNGA regarding #Jerusalem 🇮🇱 @PREZIDENTmluvc…"
  },
  {
    "id": 943844333454848000,
    "created_at": "2017-12-21 14:03:19",
    "text": "Pan prezident dnes přijal v Lánech J. Em. Dominika kardinála Duku, arcibiskupa pražského a primase českého. https://t.co/khPGfVn5mi"
  },
  {
    "id": 943834212842471400,
    "created_at": "2017-12-21 13:23:06",
    "text": "Pokorná a oranžová rada zasahuje. Do volební kampaně. https://t.co/c5KelrnP2l"
  },
  {
    "id": 943792904404918300,
    "created_at": "2017-12-21 10:38:57",
    "text": "RT @netanyahu: מדינת ישראל דוחה על הסף את ההצבעה באו״ם - עוד לפני שהתקבלה. ירושלים היא בירתנו, נמשיך לבנות בה ושגרירויות של מדינות רבות, וב…"
  },
  {
    "id": 943784952063316000,
    "created_at": "2017-12-21 10:07:21",
    "text": "Právě teď. Lány. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/l5AmE2bEFd"
  },
  {
    "id": 943749029397172200,
    "created_at": "2017-12-21 07:44:37",
    "text": "Třeba kluci v Událostech, komentářích se docela snaží: https://t.co/GdpwYtWuuM"
  },
  {
    "id": 943747458772938800,
    "created_at": "2017-12-21 07:38:22",
    "text": "RT @SlechtovaKarla: Večerní setkání kardinála Duky s představiteli ministerstva a armády se neslo ve svátečním předvánočním duchu. https://…"
  },
  {
    "id": 943608014476595200,
    "created_at": "2017-12-20 22:24:16",
    "text": "Zemřel profesor Rajko Doleček. Válečný veterán, slavný lékař, nepohodlný patriot: https://t.co/gGVYVhia1e"
  },
  {
    "id": 943600086751367200,
    "created_at": "2017-12-20 21:52:46",
    "text": "Hrdina. Človek, který se neobával bránit svůj národ, který nás nikdy v těžkých chvílích nepodrazil. 1938 a 1968. https://t.co/8kU2PuqeZy"
  },
  {
    "id": 943534418643349500,
    "created_at": "2017-12-20 17:31:50",
    "text": "ČST Praha. Tradice, Obluzování, Propaganda. Už od roku 1953. https://t.co/dAaEfVQRk7"
  },
  {
    "id": 943531392306118700,
    "created_at": "2017-12-20 17:19:48",
    "text": "Česká televize a Český rozhlas loni zvýhodňovaly TOP 09, zjistila analýza: https://t.co/To2Z6GcbPo"
  },
  {
    "id": 943509722535288800,
    "created_at": "2017-12-20 15:53:42",
    "text": "RT @hynekkmonicek: Good analysis in American press:\nTrump Should Aid Czech President Zeman in Fighting the “Munich Attitude” https://t.co/8…"
  },
  {
    "id": 943505015326629900,
    "created_at": "2017-12-20 15:34:59",
    "text": "Prezident republiky Miloš Zeman podepsal ve středu dne 20. prosince 2017 zákon ze dne 19. prosince 2017 o státním rozpočtu ČR na rok 2018."
  },
  {
    "id": 943476191268360200,
    "created_at": "2017-12-20 13:40:27",
    "text": "Snížíme napětí mezi Východem a Západem, slibuje rakouský kancléř Kurz: https://t.co/tVpXRRsCjK"
  },
  {
    "id": 943459836125237200,
    "created_at": "2017-12-20 12:35:28",
    "text": "Skvělá fotografie v aktuálním vydání časopisu Playboy, kterému pan prezident poskytl rozhovor.… https://t.co/oVlaNsVe5O"
  },
  {
    "id": 943458305472639000,
    "created_at": "2017-12-20 12:29:23",
    "text": "Zeman se v Playboy rozpovídal o Klausovi, Havlovi, Horáčkovi i hladovkáři Hradílkovi: https://t.co/MLCqc5VGPY"
  },
  {
    "id": 943452773533802500,
    "created_at": "2017-12-20 12:07:24",
    "text": "Co teď? Bude se předseda Evropské komise započítávat do kampaně? Co na to Outlý a spol.? https://t.co/SxogtaDUM0"
  },
  {
    "id": 943450437038084100,
    "created_at": "2017-12-20 11:58:07",
    "text": "Nový hit sociálních sítí. Ať žije autenticita a pevnost v názorech! https://t.co/mnmXHrh3qt"
  },
  {
    "id": 943445257701732400,
    "created_at": "2017-12-20 11:37:32",
    "text": "Z rozhovoru pana prezidenta pro časopis Playboy: https://t.co/FPvxT6CIBL"
  },
  {
    "id": 943444046722322400,
    "created_at": "2017-12-20 11:32:43",
    "text": "O tomhle Outlý a spol. diskrétně mlčí: Koncert, na němž nemohl promluvit M. Horáček, financovali sponzoři J. Drahoše https://t.co/sfUobCNmRW"
  },
  {
    "id": 943442861244211200,
    "created_at": "2017-12-20 11:28:01",
    "text": "Outlého Twitter je přeplněn slovními útoky na prezidenta republiky. Malá ochutnávka, která dokazuje zapojení do ant… https://t.co/IaQsLRFT2o"
  },
  {
    "id": 943427830305706000,
    "created_at": "2017-12-20 10:28:17",
    "text": "Rozhovor prezidenta republiky pro časopis Playboy: https://t.co/wify8lgesW"
  },
  {
    "id": 943412084620001300,
    "created_at": "2017-12-20 09:25:43",
    "text": "Jedovaté byliny antisemitismu opět započaly zapouštět kořeny na evropském kontinentě, uvedl pan prezident v květnu. https://t.co/X6qNuNI3Xw"
  },
  {
    "id": 943381091083325400,
    "created_at": "2017-12-20 07:22:33",
    "text": "Czech Prez: Europe Is ‘Jeopardised by a Culture of Hatred Incompatible with Ours’, Israel a ‘Heroic Model for Us’ https://t.co/2SywTTDmm1"
  },
  {
    "id": 943375492119515100,
    "created_at": "2017-12-20 07:00:19",
    "text": "Už před časem jsem uvedl, že náklady na činnost Outlého úřadu musí být rozpočítány do nákladů na volební kampaň protikandidátů."
  },
  {
    "id": 943362696971522000,
    "created_at": "2017-12-20 06:09:28",
    "text": "Po tomhle už nikdo nebude pochybovat, že Outlého úřad vede za státní peníze kampaň ve prospěch protikandidátů: https://t.co/On86AlyqiQ"
  },
  {
    "id": 943253268565766100,
    "created_at": "2017-12-19 22:54:38",
    "text": "D. Duka: Dnes se nám zrodilo takových ideologií a ideologů, kteří ale vystupují pod jinými názvy–jako analytici, politologové, sociologové."
  },
  {
    "id": 943158794158211100,
    "created_at": "2017-12-19 16:39:14",
    "text": "RT @strakovka: Premiér @AndrejBabis dnes telefonicky hovořil se svými protějšky v Izraeli, Rakousku a Bulharsku. Setkal se s předsedou ČMKO…"
  },
  {
    "id": 943134986936438800,
    "created_at": "2017-12-19 15:04:38",
    "text": "Zřím, že nervozita s blížícími se prezidentskými volbami stoupá! https://t.co/e72w7nvofL"
  },
  {
    "id": 943134392670670800,
    "created_at": "2017-12-19 15:02:16",
    "text": "RT @AmbMeron: Babiš si volal s Netanjahuem, pozval izraelskou vládu na společné zasedání do Prahy https://t.co/rq87mQjuAV via @Aktualnecz"
  },
  {
    "id": 943109030259712000,
    "created_at": "2017-12-19 13:21:29",
    "text": "RT @SlechtovaKarla: Dnešní dopoledne v Národním památníku na Vítkově bylo slavnostní. Na nástupu jsme s generálem Bečvářem a kardinálem Duk…"
  },
  {
    "id": 943085922828070900,
    "created_at": "2017-12-19 11:49:40",
    "text": "https://t.co/EOQvYmt39r"
  },
  {
    "id": 943083274586480600,
    "created_at": "2017-12-19 11:39:08",
    "text": "Hlas z Izraele naznačuje, že skutečnými ruskými agenty jsou agilní Sorosovské neziskovky: https://t.co/ny9X8tPAFn"
  },
  {
    "id": 943079904903680000,
    "created_at": "2017-12-19 11:25:45",
    "text": "Babiš pozval Netanjahuovu vládu do Prahy: https://t.co/gKjr61uXVA"
  },
  {
    "id": 943067931151355900,
    "created_at": "2017-12-19 10:38:10",
    "text": "Prezident republiky Miloš Zeman dnes zaslal gratulaci Emmanuelu Macronovi, prezidentovi Francouzské republiky: https://t.co/zR8LFsPHd4"
  },
  {
    "id": 942833401853247500,
    "created_at": "2017-12-18 19:06:14",
    "text": "RT @StandWithUs: Palestinian terrorist who stabbed an Israeli guard and wore a suicide vest this week hid amongst the foreign press in orde…"
  },
  {
    "id": 942828992171610100,
    "created_at": "2017-12-18 18:48:43",
    "text": "@xarretch Jen se bavím totální mediální negramotností zdejšího osazenstva."
  },
  {
    "id": 942828667578798100,
    "created_at": "2017-12-18 18:47:25",
    "text": "RT @strakovka: .@SebastianKurz byl dnes jmenován rakouským spolkovým kancléřem. Premiér @AndrejBabis mu ke jmenování pogratuloval. → https:…"
  },
  {
    "id": 942827607715872800,
    "created_at": "2017-12-18 18:43:13",
    "text": "@VanatkaTomas Vy zkuste číst, ju? Jde o analýzu, která vznikla v Centru pro mediální studia při FSV UK. UK je Unive… https://t.co/heiLfU9MtK"
  },
  {
    "id": 942827172032630800,
    "created_at": "2017-12-18 18:41:29",
    "text": "@kbanchev Pán je zřejmě humorista! Jde o analýzu vypracovanou v Centru pro mediální studia při FSV UK. Že by tam ta… https://t.co/GIHxh73O6K"
  },
  {
    "id": 942826724240355300,
    "created_at": "2017-12-18 18:39:42",
    "text": "@Finin55 Chce to nebýt líný a číst. Jde o analýzu, která vznikla v Centru pro mediální studia při FSV UK. Odkaz je v článku :-)"
  },
  {
    "id": 942825609176211500,
    "created_at": "2017-12-18 18:35:16",
    "text": "ČT zvýhodňovala v období krajských a senátních voleb 2016 TOP 09: https://t.co/iKa32ohDhE"
  },
  {
    "id": 942820451964932100,
    "created_at": "2017-12-18 18:14:47",
    "text": "RT @StandWithUs: Amen! https://t.co/UPc5ZMsyvY"
  },
  {
    "id": 942819150048714800,
    "created_at": "2017-12-18 18:09:36",
    "text": "RT @netanyahu: Thank you, Ambassador Haley. On Hanukkah, you spoke like a Maccabi.   You lit a candle of truth. You dispel the darkness. On…"
  },
  {
    "id": 942809095643508700,
    "created_at": "2017-12-18 17:29:39",
    "text": "RT @AndrejBabis: Právě teď jsme vydali návrh programového prohlášení vlády. Dělali jsme na něm dlouho a včera všichni členové vlády celý de…"
  },
  {
    "id": 942785062898225200,
    "created_at": "2017-12-18 15:54:09",
    "text": "RT @BreitbartNews: 🤔 https://t.co/945so2T6UF"
  },
  {
    "id": 942749026100838400,
    "created_at": "2017-12-18 13:30:57",
    "text": "RT @SlechtovaKarla: První den pracovního týdne a první pracovní jednání na Generálním štábu Armády ČR. https://t.co/yYB66dWcql"
  },
  {
    "id": 942726677544792000,
    "created_at": "2017-12-18 12:02:09",
    "text": "„Nepotáhneme jako ovce na porážku.“ Miloš Zeman brutálně praštil do mezinárodní situace: https://t.co/pAf2JZEhja"
  },
  {
    "id": 942700248652238800,
    "created_at": "2017-12-18 10:17:08",
    "text": "RT @strakovka: Předseda vlády @AndrejBabis dnes dokončil uvádění ministryň a ministrů do úřadů. Resortů se ujali ministr kultury, ministr š…"
  },
  {
    "id": 942692832061599700,
    "created_at": "2017-12-18 09:47:40",
    "text": "Zeman o Havlovi: Tykání nám domluvil Pavel Dostál https://t.co/YW9M4FHwhF"
  },
  {
    "id": 942692375343886300,
    "created_at": "2017-12-18 09:45:51",
    "text": "Pan prezident se svojí paní uctili památku Václava Havla. Věnec k hrobu z jejich pověření položil M. Sklenář, který… https://t.co/Q8v1uciw38"
  },
  {
    "id": 942688420224294900,
    "created_at": "2017-12-18 09:30:08",
    "text": "Více zde: https://t.co/yt9TuAOw3H https://t.co/nVnyo630q2"
  },
  {
    "id": 942686148811546600,
    "created_at": "2017-12-18 09:21:06",
    "text": "Novopečený ministr školství Plaga chce řešit finanční revizi inkluze: https://t.co/lhKiYak1sT"
  },
  {
    "id": 942679096894554100,
    "created_at": "2017-12-18 08:53:05",
    "text": "Absurdní bruselské byrokratické běsnění v praxi: https://t.co/idXWEyE21O"
  },
  {
    "id": 942674268583792600,
    "created_at": "2017-12-18 08:33:54",
    "text": "Hrad. Ovčáčkova kancelář. https://t.co/LnEgpjq2ww"
  },
  {
    "id": 942669349294346200,
    "created_at": "2017-12-18 08:14:21",
    "text": "Rozhovor prezidenta republiky pro Israel HaYom: „Izrael a jeho hrdinství jsou pro nás vzorem a povzbuzením“ https://t.co/ftCjZSUSTQ"
  },
  {
    "id": 942665369180926000,
    "created_at": "2017-12-18 07:58:32",
    "text": "Připomeňme si VH citáty z projevu 1. ledna 1990. Dodnes platná slova! https://t.co/Hx3mQPlc4s"
  },
  {
    "id": 942491679340269600,
    "created_at": "2017-12-17 20:28:21",
    "text": "RT @PressSec: Readout of President Trump's call with President Putin-&gt; https://t.co/tIM6sBrUb4"
  },
  {
    "id": 942446252184277000,
    "created_at": "2017-12-17 17:27:50",
    "text": "RT @PressSec: Can confirm @POTUS and President Putin spoke today. Readout from the WH coming shortly. https://t.co/EzRhqM52d8"
  },
  {
    "id": 942371764105109500,
    "created_at": "2017-12-17 12:31:51",
    "text": "Antisemitismus muslimských přistěhovalců a levicových extrémistů není překvapující. Kultury nenávisti se přitahují. https://t.co/xs77b1zOnk"
  },
  {
    "id": 942370545429090300,
    "created_at": "2017-12-17 12:27:01",
    "text": "RT @SwobodaHyn: Pamatujete si ještě, jak @LudekNie vyvolal v EU parlamentu diskusi o zneužívání médií v ČR? Bylo to zaměřeno proti Babišovi…"
  },
  {
    "id": 942363952230608900,
    "created_at": "2017-12-17 12:00:49",
    "text": "Krásnou třetí adventní neděli! https://t.co/n4mnaVm9hf"
  },
  {
    "id": 942358941144698900,
    "created_at": "2017-12-17 11:40:54",
    "text": "Středočeské podniky objevují Hedvábnou stezku, umožní rychlejší obchod: https://t.co/TUCu1JUL81"
  },
  {
    "id": 942311859377623000,
    "created_at": "2017-12-17 08:33:49",
    "text": "RT @AmbMeron: נשיא צ'כיה מילוש זמאן: \"ישראל וגבורתה הם מודל ועידוד עבורנו\" https://t.co/OV5YB9u6Cd"
  },
  {
    "id": 942311812854440000,
    "created_at": "2017-12-17 08:33:38",
    "text": "RT @AmbMeron: Thanks President Zeman for your strong support of Israel, as expressed in this interview to Israel’s widest circulating newsp…"
  },
  {
    "id": 941720295462916100,
    "created_at": "2017-12-15 17:23:09",
    "text": "Prezident republiky. https://t.co/Nua5Rayagy"
  },
  {
    "id": 941686776795713500,
    "created_at": "2017-12-15 15:09:57",
    "text": "Nerozděluji, protože nemám vůbec žádný názor. Jsem poslušný, sponzoři-miliardáři budou spokojeni. Stačí občas zalév… https://t.co/4ucjfllgqa"
  },
  {
    "id": 941647556068692000,
    "created_at": "2017-12-15 12:34:06",
    "text": "RT @USAmbPrague: The U.S. is extremely proud of our many historical ties to Czechs and the Czech Republic. I was very happy to launch our u…"
  },
  {
    "id": 941629453712744400,
    "created_at": "2017-12-15 11:22:11",
    "text": "RT @ZEMANZNOVU2018: Volební čísla jsou vylosována! Miloš Zeman má SEDMIČKU! https://t.co/UPdTAquneE"
  },
  {
    "id": 941629428702081000,
    "created_at": "2017-12-15 11:22:05",
    "text": "RT @PanenkaRadim: Premiér @AndrejBabis z bruselského summitu pro @parlamentky_cz: https://t.co/vsBWgG9EFe"
  },
  {
    "id": 941596579827470300,
    "created_at": "2017-12-15 09:11:33",
    "text": "Sedmička je absolutním symbolem celistvosti, dokonalosti a prozřetelnosti. Skládá se z posvátných čísel 3 a 4. https://t.co/tAdL9R1xi7"
  },
  {
    "id": 941583106578042900,
    "created_at": "2017-12-15 08:18:01",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 14. prosince 2017, 20:15, TV Barrandov: https://t.co/PT8pJx7DIC"
  },
  {
    "id": 941581953324736500,
    "created_at": "2017-12-15 08:13:26",
    "text": "https://t.co/tepYOX6jis"
  },
  {
    "id": 941579542384300000,
    "created_at": "2017-12-15 08:03:51",
    "text": "Přečtěte si, jak jsme Pirátům vysvětlili bezpečnostní opatření na Hradě! https://t.co/PgR71nw6v7"
  },
  {
    "id": 941349730361204700,
    "created_at": "2017-12-14 16:50:39",
    "text": "Prezident daroval čtyři sta tisíc rodičům chlapce s poškozeným mozkem. Zázraky se dějí, vzkazuje: https://t.co/UFRs68tboy"
  },
  {
    "id": 941347033964863500,
    "created_at": "2017-12-14 16:39:56",
    "text": "Sejdou se a nemají vlastní program. Žádná debata. Řeší jen jediné téma -  Miloše Zemana. Bída beznázorových fikusů."
  },
  {
    "id": 941332335034761200,
    "created_at": "2017-12-14 15:41:32",
    "text": "Paní Ivana Zemanová se dnes zúčastnila slavnostního setkání ke Dni českého vězeňství. https://t.co/WGyAaCmvOn"
  },
  {
    "id": 941331210936160300,
    "created_at": "2017-12-14 15:37:04",
    "text": "To už je skutečně výraz mediálně-průzkumového zoufalství! https://t.co/wn1uvDLo8n"
  },
  {
    "id": 941293738743287800,
    "created_at": "2017-12-14 13:08:10",
    "text": "Pan prezident se svojí paní předali finanční dar rodičům postiženého syna: https://t.co/cMqWjDwPRy https://t.co/cdvhC1CNxu"
  },
  {
    "id": 941281771781488600,
    "created_at": "2017-12-14 12:20:37",
    "text": "RT @strakovka: Premiér @AndrejBabis má za sebou první jednání v Bruselu. S premiéry #V4 položili základy společného projektu na podporu och…"
  },
  {
    "id": 941273634622013400,
    "created_at": "2017-12-14 11:48:17",
    "text": "Právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/mhSjeT0O1Z"
  },
  {
    "id": 941270984434376700,
    "created_at": "2017-12-14 11:37:45",
    "text": "Pan prezident dnes prostřednictvím videospojení a telefonu poděkoval vojákům v zahraničních misích Armády ČR:… https://t.co/8v99LWNDbA"
  },
  {
    "id": 941260587601981400,
    "created_at": "2017-12-14 10:56:26",
    "text": "Zeman: Vítěz voleb má být tolerantní k poraženým. A poražení mají respektovat vítěze https://t.co/Yf8TEIkwG9"
  },
  {
    "id": 941055547771629600,
    "created_at": "2017-12-13 21:21:41",
    "text": "RT @strakovka: Premiér @AndrejBabis uvedl do úřadů také ministryni práce a sociálních věcí Němcovou, ministra zdravotnictví Vojtěcha a mini…"
  },
  {
    "id": 941047605362135000,
    "created_at": "2017-12-13 20:50:07",
    "text": "RT @strakovka: Premiér @AndrejBabis uvedl do úřadů ministryni obrany Šlechtovou, ministra zahraničních věcí Stropnického, ministra vnitra M…"
  },
  {
    "id": 941030997444972500,
    "created_at": "2017-12-13 19:44:07",
    "text": "https://t.co/0kkAeDKQQA"
  },
  {
    "id": 941030290507608000,
    "created_at": "2017-12-13 19:41:19",
    "text": "RT @mpsvcz: Premiér @AndrejBabis uvedl do úřadu Jaroslavu Němcovou. Funkci ministryně práce a sociálních věcí přebírá po @MMarksova. Je tře…"
  },
  {
    "id": 941023725662634000,
    "created_at": "2017-12-13 19:15:14",
    "text": "RT @strakovka: Vláda premiéra Babiše schválila mandát na jednání Evropské rady, jmenovala nového vedoucího Úřadu vlády i novou tiskovou mlu…"
  },
  {
    "id": 941023704208822300,
    "created_at": "2017-12-13 19:15:09",
    "text": "RT @ObranaTweetuje: Věřím, že ve svých krocích navážu na práci bývalého ministra obrany. Samozřejmě budu dodržovat veškeré závazky, které v…"
  },
  {
    "id": 940985943175069700,
    "created_at": "2017-12-13 16:45:06",
    "text": "RT @PanenkaRadim: Nová ministryně obrany @SlechtovaKarla představila své priority: https://t.co/u5pg5XbD9q"
  },
  {
    "id": 940979098935025700,
    "created_at": "2017-12-13 16:17:54",
    "text": "RT @strakovka: Prezident Miloš Zeman jmenoval vládu premiéra Andreje Babiše. Vláda ještě před svým jmenováním uctila památku prezidenta Mas…"
  },
  {
    "id": 940977700889661400,
    "created_at": "2017-12-13 16:12:21",
    "text": "Kavárno, kavárno, budeš to mít těžké s přesvědčováním údajné většiny: https://t.co/SEzb5E2txP"
  },
  {
    "id": 940968076891304000,
    "created_at": "2017-12-13 15:34:06",
    "text": "Pan prezident dnes přijal na Hradě zástupce Rady seniorů ČR: https://t.co/bgH1YygX5r https://t.co/bNEQ1f14Ow"
  },
  {
    "id": 940950168630911000,
    "created_at": "2017-12-13 14:22:56",
    "text": "Prezident republiky podepsal jmenovací dekrety nových profesorů. Více zde: https://t.co/oHOL3QpSX5"
  },
  {
    "id": 940946913288998900,
    "created_at": "2017-12-13 14:10:00",
    "text": "Projev prezidenta republiky při jmenování členů nové vlády: https://t.co/Z4ATOlZE14"
  },
  {
    "id": 940946672544337900,
    "created_at": "2017-12-13 14:09:03",
    "text": "Pan prezident dnes na Hradě jmenoval členy nové vlády premiéra Andreje Babiše: https://t.co/eoe03YrU2b https://t.co/cXYxMKE5bQ"
  },
  {
    "id": 940875496358862800,
    "created_at": "2017-12-13 09:26:13",
    "text": "RT @AmbMeron: Začala židovská chanuka. Obří osmiramenný svícen v Praze rozzářil premiér Babiš https://t.co/9zmPfvbDNr"
  },
  {
    "id": 940873922039504900,
    "created_at": "2017-12-13 09:19:58",
    "text": "RT @UKinCR: 'Začátkem roku jsem doprovázela prezidenta Miloše Zemana do Londýna, kde se setkal s Jejím veličenstvem, byla mu udělena audien…"
  },
  {
    "id": 940867416460091400,
    "created_at": "2017-12-13 08:54:07",
    "text": "Babiš přijel s ministry do Lán. Poklonili se u Masarykova hrobu: https://t.co/FV66ZKbITj"
  },
  {
    "id": 940720664608149500,
    "created_at": "2017-12-12 23:10:58",
    "text": "RT @realDonaldTrump: Wishing all of those celebrating #Hanukkah around the world a happy and healthy eight nights in the company of those t…"
  },
  {
    "id": 940720553559720000,
    "created_at": "2017-12-12 23:10:32",
    "text": "RT @AmbMeron: Czech New Prime Minister @AndrejBabis participated with us in Chabad Menorah lighting, opposite Prague Castle, first night Ha…"
  },
  {
    "id": 940720127242317800,
    "created_at": "2017-12-12 23:08:50",
    "text": "RT @WhiteHouse: The President and First Lady wish all of those celebrating Hanukkah around the world a happy and healthy eight nights in th…"
  },
  {
    "id": 940611522191085600,
    "created_at": "2017-12-12 15:57:17",
    "text": "RT @netanyahu: Happy Chanukah! https://t.co/mcrX2wr1Hc"
  },
  {
    "id": 940580179256270800,
    "created_at": "2017-12-12 13:52:44",
    "text": "Rozloučení s Bratislavou. https://t.co/swkUC8ATdR"
  },
  {
    "id": 940575200093130800,
    "created_at": "2017-12-12 13:32:57",
    "text": "Prezidenti u Pomníku československé státnosti a Památníku Milana Rastislava Štefánika v Bratislavě. https://t.co/5o82M36umC"
  },
  {
    "id": 940565450378891300,
    "created_at": "2017-12-12 12:54:12",
    "text": "RT @Blesk24: Zeman se chlubil Kiskovi s @AndrejBabis: Jmenoval jsem premiérem příslušníka slovenské národnostní menšiny https://t.co/BFm5gW…"
  },
  {
    "id": 940565063613677600,
    "created_at": "2017-12-12 12:52:40",
    "text": "RT @realDonaldTrump: Despite thousands of hours wasted and many millions of dollars spent, the Democrats have been unable to show any collu…"
  },
  {
    "id": 940553266471014400,
    "created_at": "2017-12-12 12:05:48",
    "text": "Vážený pane prezidente, milý Andreji, jsem velmi rád, že jsem v Bratislavě: https://t.co/RRvBqsfLXe"
  },
  {
    "id": 940533607940190200,
    "created_at": "2017-12-12 10:47:41",
    "text": "RT @rudolf_jindrak: Vidím na vlastní oči, že si prezidenti dobře rozumí. I díky tomu je Slovensko náš výjimečný soused! https://t.co/hENNff…"
  },
  {
    "id": 940533190976065500,
    "created_at": "2017-12-12 10:46:01",
    "text": "Tisková konference prezidentů Miloše Zemana a Andreje Kisky. https://t.co/nZk3JA1kuB"
  },
  {
    "id": 940529760987381800,
    "created_at": "2017-12-12 10:32:23",
    "text": "Zápis do Knihy hostů. https://t.co/Nppg7P73sF"
  },
  {
    "id": 940519857770123300,
    "created_at": "2017-12-12 09:53:02",
    "text": "Zeman zahájil návštěvu Slovenska, vítal ho Kiska i čestná stráž: https://t.co/RITFQdm9ID"
  },
  {
    "id": 940515701474955300,
    "created_at": "2017-12-12 09:36:31",
    "text": "Mimořádně přátelské přivítání v Bratislavě! Děkujeme prezidentovi Slovenské republiky @Andrej_Kiska https://t.co/WrErXb8hEo"
  },
  {
    "id": 940480552758636500,
    "created_at": "2017-12-12 07:16:51",
    "text": "Pan prezident jmenuje ve středu dne 13. prosince 2017 ve 14.00 na Hradě členy nové vlády ČR. Podrobnosti zde: https://t.co/tUQo6b0CuV"
  },
  {
    "id": 940477472491081700,
    "created_at": "2017-12-12 07:04:37",
    "text": "Redakční censura ve prospěch Jiřího Drahoše: https://t.co/VB4IL1KR0q"
  },
  {
    "id": 940279639443984400,
    "created_at": "2017-12-11 17:58:30",
    "text": "Czech president blasts EU on Jerusalem cowardic: https://t.co/5BZEPqKAhQ"
  },
  {
    "id": 940249742142996500,
    "created_at": "2017-12-11 15:59:42",
    "text": "Hlavním tématem jednání pana prezidenta s kandidátem na post ministra kultury byla ochrana kulturních památek."
  },
  {
    "id": 940236725288304600,
    "created_at": "2017-12-11 15:07:58",
    "text": "Pan prezident přijal v Lánech kandidáta na post ministra kultury Ilju Šmída. https://t.co/13T6fDTMoz"
  },
  {
    "id": 940230322695876600,
    "created_at": "2017-12-11 14:42:32",
    "text": "Hlavním tématem jednání pana prezidenta s kandidátem na post ministra zemědělství byla problematika obchodních řetězců."
  },
  {
    "id": 940213660550615000,
    "created_at": "2017-12-11 13:36:19",
    "text": "Pan prezident přijal v Lánech kandidáta na post ministra zemědělství Jiřího Milka. https://t.co/kFfPjiggSE"
  },
  {
    "id": 940208632318263300,
    "created_at": "2017-12-11 13:16:20",
    "text": "Hlavním tématem jednání pana prezidenta s kandidátem na post ministra školství byla inkluze."
  },
  {
    "id": 940206207842881500,
    "created_at": "2017-12-11 13:06:42",
    "text": "RT @UniteWithIsrael: BREAKING NEWS: Multiple sources are reporting that a pipe bomb was detonated in passageway below ground at Port Author…"
  },
  {
    "id": 940204471392534500,
    "created_at": "2017-12-11 12:59:48",
    "text": "RT @USAmbPrague: It's an honor to come to the Czech Republic as we prepare to celebrate 100 years of U.S.-Czech friendship in 2018: https:/…"
  },
  {
    "id": 940190708383801300,
    "created_at": "2017-12-11 12:05:07",
    "text": "Pan prezident přijal v Lánech kandidáta na post ministra školství mládeže a tělovýchovy Roberta Plagu. https://t.co/91kR5Mmokb"
  },
  {
    "id": 940172828564971500,
    "created_at": "2017-12-11 10:54:04",
    "text": "Už to bude rok... Nastal čas si připomenout mé upozornění z konce prosince 2016. https://t.co/IKxRJw2hjP"
  },
  {
    "id": 940155388527349800,
    "created_at": "2017-12-11 09:44:46",
    "text": "Zahradil (ODS): Odmyslete, že je to Zeman, pokud ho nesnesete. Ale byl to velmi dobrý projev https://t.co/iVBlQ3Yn9i"
  },
  {
    "id": 940147677366489100,
    "created_at": "2017-12-11 09:14:08",
    "text": "Czech leader backs Trump, calls EU states 'cowards': https://t.co/mW3kmdWSsT"
  },
  {
    "id": 940129146092564500,
    "created_at": "2017-12-11 08:00:29",
    "text": "Pan prezident se svojí paní uskuteční v úterý 12.12. oficiální návštěvu Slovenské republiky. Program naleznete zde: https://t.co/EL487rRYsS"
  },
  {
    "id": 940097858077737000,
    "created_at": "2017-12-11 05:56:10",
    "text": "FAKE NEWS v akci! Bakalova média, proslulá lhaním, bojují s dezinformacemi. Inspirace protektorátem je přitom jistě… https://t.co/vwtH2EzN8m"
  },
  {
    "id": 939968450017091600,
    "created_at": "2017-12-10 21:21:56",
    "text": "RT @realDonaldTrump: Very little discussion of all the purposely false and defamatory stories put out this week by the Fake News Media. The…"
  },
  {
    "id": 939925037490065400,
    "created_at": "2017-12-10 18:29:26",
    "text": "Symbol státnosti, duchovní centrum země. Hrad českých králů, československých a českých prezidentů. https://t.co/iBUl9szvTy"
  },
  {
    "id": 939915175033036800,
    "created_at": "2017-12-10 17:50:15",
    "text": "RT @CUTIzpravy: Jak průhledné! Drahoš se Sobotkou lomí rukama nad vlivem na volby, který ale popřela BIS. Tak teď přihupkala na pomoc ČST P…"
  },
  {
    "id": 939910605229756400,
    "created_at": "2017-12-10 17:32:05",
    "text": "RT @CUTIzpravy: Klasika. Úzká spolupráce ČST Praha s Bakalovými médii. https://t.co/B20acLi2wC"
  },
  {
    "id": 939909539671019500,
    "created_at": "2017-12-10 17:27:51",
    "text": "RT @PeterSweden7: Tonight, Jewish people in Sweden have been the target of a horrific firebomb attack in Gothenburg.\n\nSwedish government ha…"
  },
  {
    "id": 939893774746046500,
    "created_at": "2017-12-10 16:25:12",
    "text": "RT @AmbMeron: Minister @OfirAkunis thanks Czechs for stand on Jerusalem  https://t.co/VEhPTu79bc"
  },
  {
    "id": 939890687318921200,
    "created_at": "2017-12-10 16:12:56",
    "text": "NE! https://t.co/p4Xjg1KtLr"
  },
  {
    "id": 939879010036781000,
    "created_at": "2017-12-10 15:26:32",
    "text": "Takže J. Drahošovi vadí podpora přímé demokracie, Izraele, zahraničních misí a boje s islamismem. To vše zaznělo v… https://t.co/7S6bpk2WV5"
  },
  {
    "id": 939867159391625200,
    "created_at": "2017-12-10 14:39:27",
    "text": "Hlavním tématem jednání pana prezidenta s kandidátem na post ministra zdravotnictví byla hospicová péče."
  },
  {
    "id": 939855787681370100,
    "created_at": "2017-12-10 13:54:16",
    "text": "Kritika Zemana kvůli sjezdu SPD? Ovčáček pro EZ sepsul Dienstbiera i Českou televizi: https://t.co/wt6CoLHkst"
  },
  {
    "id": 939850483220516900,
    "created_at": "2017-12-10 13:33:11",
    "text": "Pan prezident přijal v Lánech kandidáta na post ministra zdravotnictví Adama Vojtěcha. https://t.co/dQHnPsHXVq"
  },
  {
    "id": 939848462102925300,
    "created_at": "2017-12-10 13:25:09",
    "text": "Hlavním tématem jednání pana prezidenta s kandidátem na post ministra průmyslu a obchodu byla energetická koncepce ČR a její uplatňování."
  },
  {
    "id": 939834374467608600,
    "created_at": "2017-12-10 12:29:10",
    "text": "RT @Ostrov_A: #Europe last 48 hours:\n\n* Berlin &amp; London: Chants of \"death to Jews\"\n* Sweden: Synagogue firebombed in Gothenburg; in Malmo p…"
  },
  {
    "id": 939833834748727300,
    "created_at": "2017-12-10 12:27:02",
    "text": "@MelechovAMG @krivan Tohle jsou fakta. A znovu opakuji, obhajovat antisemitismus může jen lidský odpad. https://t.co/FU1P9ZsSmW"
  },
  {
    "id": 939830101000228900,
    "created_at": "2017-12-10 12:12:11",
    "text": "@krivan Omlouvat antisemitismus může jen lidský odpad."
  },
  {
    "id": 939829246620512300,
    "created_at": "2017-12-10 12:08:48",
    "text": "Tohle je moderní Evropa?! V Göteborgu zaútočili na synagogu. V Malmö provolávali “budeme střílet Židy“: https://t.co/GlYJFLismK"
  },
  {
    "id": 939826086275436500,
    "created_at": "2017-12-10 11:56:14",
    "text": "Pan prezident přijal v Lánech kandidáta na post ministra průmyslu a obchodu Tomáše Hünera. https://t.co/ghDbraARus"
  },
  {
    "id": 939789104476229600,
    "created_at": "2017-12-10 09:29:17",
    "text": "EU’s anti-Israel stance on Jerusalem is ‘cowardice’, Czech president says: https://t.co/f3IgyixHz1"
  },
  {
    "id": 939780366394683400,
    "created_at": "2017-12-10 08:54:34",
    "text": "RT @GaryKoren: https://t.co/M1OoGswACu"
  },
  {
    "id": 939636555693592600,
    "created_at": "2017-12-09 23:23:07",
    "text": "RT @IsraelHatzolah: BREAKING: Synagogue in Sweden Fire-bombed &amp; attacked by at least 20 masked men as Muslims were protesting Trump's Jerus…"
  },
  {
    "id": 939540329849610200,
    "created_at": "2017-12-09 17:00:45",
    "text": "Czech President M.Zeman: The chicken-hearted EU does its best for the pro-Palestinian movement to be dominant over the pro-Israeli movement."
  },
  {
    "id": 939516778136424400,
    "created_at": "2017-12-09 15:27:09",
    "text": "Jednoznačná podpora našeho spojence a přítele - Izraele! https://t.co/ZkbMwz6EQ2"
  },
  {
    "id": 939514982710079500,
    "created_at": "2017-12-09 15:20:01",
    "text": "Čtěte zásadní projev pana prezidenta na celostátní konferenci SPD! Přepis zde: https://t.co/ndlg4cgqqd"
  },
  {
    "id": 939505475565047800,
    "created_at": "2017-12-09 14:42:15",
    "text": "Zbabělá Evropská unie dělá vše pro to, aby propalestinské teroristické hnutí mělo převahu nad hnutím proizraelským: https://t.co/9IqcMbDhrg"
  },
  {
    "id": 939501034631811100,
    "created_at": "2017-12-09 14:24:36",
    "text": "Pan prezident dnes vystoupil s projevem na celostátní konferenci SPD. https://t.co/4u65hkGHp5"
  },
  {
    "id": 939491414286782500,
    "created_at": "2017-12-09 13:46:22",
    "text": "RT @TNcz_zpravy: ŽIVĚ: Miloš Zeman mluví na sjezdu SPD - Tomio Okamura. Hnutí se rozhoduje, koho podpoří ve volbě prezidenta https://t.co/Z…"
  },
  {
    "id": 939491032953126900,
    "created_at": "2017-12-09 13:44:51",
    "text": "Uvnitř článku ČTK videozáznam skvělého projevu pana prezidenta! https://t.co/ZQY7UDy37S"
  },
  {
    "id": 939194208426053600,
    "created_at": "2017-12-08 18:05:23",
    "text": "RT @realDonaldTrump: MAKE AMERICA GREAT AGAIN! https://t.co/64a93S07s7"
  },
  {
    "id": 939169433746071600,
    "created_at": "2017-12-08 16:26:56",
    "text": "“I was, am and will be a friend of Israel,” said Czech President Milos Zeman in 2013. Words still valid!"
  },
  {
    "id": 939138920327020500,
    "created_at": "2017-12-08 14:25:41",
    "text": "Prezident republiky s kandidátem na post ministra vnitra probírali zejména otázku ekonomické kriminality a rychlosti vyšetřování."
  },
  {
    "id": 939127283192946700,
    "created_at": "2017-12-08 13:39:27",
    "text": "Pan prezident přijal v Lánech kandidáta na post ministra vnitra Lubomíra Metnara. https://t.co/mHLgZmlCRR"
  },
  {
    "id": 939126193206546400,
    "created_at": "2017-12-08 13:35:07",
    "text": "Vyjádření k otázce přesunu české ambasády do Jeruzaléma: https://t.co/qmVkJ29Pk1"
  },
  {
    "id": 939120795091132400,
    "created_at": "2017-12-08 13:13:40",
    "text": "Hlavním tématem jednání pana prezidenta s kandidátkou na post ministryně financí bylo zvýšení investičních výdajů ve státním rozpočtu."
  },
  {
    "id": 939105560909230100,
    "created_at": "2017-12-08 12:13:08",
    "text": "Tohle by fakt nevymysleli ani normalizátoři v roce 1973. Stěžují si, že mluvčí prezidenta chválí prezidenta! https://t.co/mkryoISF7a"
  },
  {
    "id": 939103471852314600,
    "created_at": "2017-12-08 12:04:50",
    "text": "Pan prezident přijal v Lánech kandidátku na post ministryně financí Alenu Schillerovou. https://t.co/06OjVziNsv"
  },
  {
    "id": 939101368169705500,
    "created_at": "2017-12-08 11:56:28",
    "text": "Izraelci si všímají Zemanovy podpory Trumpova jeruzalémského plánu. Velebil ho, píše tisk: https://t.co/qK8pLN8aAw"
  },
  {
    "id": 939094592225513500,
    "created_at": "2017-12-08 11:29:32",
    "text": "Něco pro kavárenské a novinářské zabedněnce. ČTK: https://t.co/vk1wYN0mJf"
  },
  {
    "id": 939094235323695100,
    "created_at": "2017-12-08 11:28:07",
    "text": "Ano, rozhodnutí prezidenta USA Donalda Trumpa mi udělalo velkou radost! https://t.co/D746CyXZoX"
  },
  {
    "id": 939091323663110100,
    "created_at": "2017-12-08 11:16:33",
    "text": "Pan prezident se v sobotu 9.12. od 13.30 zúčastní celostátní konference hnutí SPD. Vystoupí zde se svým projevem: https://t.co/r6v8Kpu9CF"
  },
  {
    "id": 939062752282280000,
    "created_at": "2017-12-08 09:23:01",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 7. prosince 2017, 20:15, TV Barrandov: https://t.co/EoS6TmG7Pk"
  },
  {
    "id": 939043140698296300,
    "created_at": "2017-12-08 08:05:05",
    "text": "Jiří Ovčáček: “Nesmím se k tomu vyjadřovat, ale jsme v pořadu bez cenzury, tak to udělám!“ https://t.co/N3PTTdlyn1"
  },
  {
    "id": 939040214311473200,
    "created_at": "2017-12-08 07:53:28",
    "text": "RT @haaretzcom: Czech Republic wants to move embassy to Jerusalem, 'truly happy' with Trump's declaration https://t.co/PhVdwK6Yg1"
  },
  {
    "id": 939040103468474400,
    "created_at": "2017-12-08 07:53:01",
    "text": "RT @Ostrov_A: #BREAKING: #Czech President Miloš Zeman, a true friend of Israel, indicates Prague may follow @POTUS in recognizing #Jerusale…"
  },
  {
    "id": 938902964823044100,
    "created_at": "2017-12-07 22:48:05",
    "text": "Czech president wants to follow US on Jerusalem embassy move: https://t.co/TnIxB6wmbb"
  },
  {
    "id": 938890446843064300,
    "created_at": "2017-12-07 21:58:20",
    "text": "RT @AmbMeron: Thanks President Zeman  https://t.co/aVtl6GqHjQ"
  },
  {
    "id": 938875838472343600,
    "created_at": "2017-12-07 21:00:18",
    "text": "Vláda bez důvěry je podle ústavy plnohodnotná a může dělat jakékoliv kroky, a to včetně personálních změn: https://t.co/pe7J6SyoEw"
  },
  {
    "id": 938870237486862300,
    "created_at": "2017-12-07 20:38:02",
    "text": "Pořad NÁZORY BEZ CENZURY s Jiřím Ovčáčkem: https://t.co/fDLUT4zN57"
  },
  {
    "id": 938865644916928500,
    "created_at": "2017-12-07 20:19:47",
    "text": "Zeman: Velvyslanectví by do Jeruzaléma měly přesunout i EU a ČR https://t.co/zAMxb5bFTx"
  },
  {
    "id": 938864946313596900,
    "created_at": "2017-12-07 20:17:01",
    "text": "RT @AmbMeron: Thank-you Czech President Zeman for this statement, you delivered tonight to Czech TV, on the issue of Jerusalem: https://t.c…"
  },
  {
    "id": 938850570726723600,
    "created_at": "2017-12-07 19:19:53",
    "text": "The Statement of the President of the Czech Republic which he has made for TV Barrandov on the decision of the U.S.… https://t.co/rv1IcvlyTP"
  },
  {
    "id": 938828461711548400,
    "created_at": "2017-12-07 17:52:02",
    "text": "RT @BorisJohnson: Delighted to meet Chinese Vice Premier Liu Yandong today as part of UK/China People-to-People Dialogue. Welcomed China’s…"
  },
  {
    "id": 938799404202545200,
    "created_at": "2017-12-07 15:56:34",
    "text": "Půlhodinový rozhovor s panem prezidentem charakterizoval nový velvyslanec USA jako „upřímný, otevřený a plodný“: https://t.co/6FsSoeXQ4H"
  },
  {
    "id": 938781300248514600,
    "created_at": "2017-12-07 14:44:38",
    "text": "Hlavní tématem jednání prezidenta republiky s kandidátkou na post ministryně pro místní rozvoj bylo čerpání evropských dotací."
  },
  {
    "id": 938774759373983700,
    "created_at": "2017-12-07 14:18:38",
    "text": "Mrkněte na originální záznam Arény Jaromíra Soukupa! Nyní už doporučuje deset z deseti členů Pražské kavárny: https://t.co/4qxLlPqLnW"
  },
  {
    "id": 938770977219113000,
    "created_at": "2017-12-07 14:03:37",
    "text": "Paní Ivanu Zemanovou v rámci návštěv krajů doprovází protějšky hejtmanů a hejtmanek. Na Hradě pro ně dnes uspořádal… https://t.co/WAMjFwN3GX"
  },
  {
    "id": 938764902575075300,
    "created_at": "2017-12-07 13:39:28",
    "text": "Pan prezident přijal v Lánech kandidátku na ministryni pro místní rozvoj Kláru Dostálovou. https://t.co/y12HNeFUpL"
  },
  {
    "id": 938764004931113000,
    "created_at": "2017-12-07 13:35:54",
    "text": "Kandidátka na ministryni práce a sociálních věcí při jednání s panem prezidentem uvedla, že se zaměří na zneužívání sociálních dávek."
  },
  {
    "id": 938741208620421100,
    "created_at": "2017-12-07 12:05:19",
    "text": "Pan prezident přijal v Lánech kandidátku na ministryni práce a sociálních věcí Jaroslavu Němcovou. https://t.co/wCI0GF5V4O"
  },
  {
    "id": 938723398959628300,
    "created_at": "2017-12-07 10:54:33",
    "text": "Připomeňme si vyjádření pana prezidenta: https://t.co/6l1mz6rjJR"
  },
  {
    "id": 938715689241792500,
    "created_at": "2017-12-07 10:23:55",
    "text": "Lány, právě teď. Natáčení pořadu “Týden s prezidentem”. Zazní zásadní prohlášení k Jeruzalému. Sledujte dnes ve 20:… https://t.co/rrGt9tS6oc"
  },
  {
    "id": 938668813020749800,
    "created_at": "2017-12-07 07:17:39",
    "text": "RT @AmbMeron: Thanks USA, Děkuji Česko (thanks Czechia)! 🇮🇱 🇺🇸 🇨🇿 (photos: @Noam_Chen) https://t.co/meKhunTUpZ"
  },
  {
    "id": 938655852361404400,
    "created_at": "2017-12-07 06:26:09",
    "text": "Odhaleno spiklenecké centrum v čele s tiskovým mluvčím Ovčáčkem, který si dovolil hájit svého prezidenta: https://t.co/Umqnlyiav1"
  },
  {
    "id": 938541834858647600,
    "created_at": "2017-12-06 22:53:05",
    "text": "Miloš Zeman, President of the Czech Republic, New York, USA, 18th September 2017: https://t.co/1F4RBdRMfD"
  },
  {
    "id": 938525449461944300,
    "created_at": "2017-12-06 21:47:58",
    "text": "RT @AmbMeron: Congratulation to the new Czech Prime Minister @AndrejBabis .  Czech - Israel 🇨🇿🇮🇱 relations will continue to flourish 👍 http…"
  },
  {
    "id": 938518684682813400,
    "created_at": "2017-12-06 21:21:05",
    "text": "RT @realDonaldTrump: I have determined that it is time to officially recognize Jerusalem as the capital of Israel. I am also directing the…"
  },
  {
    "id": 938490452692668400,
    "created_at": "2017-12-06 19:28:54",
    "text": "RT @StateDept: .@POTUS: I have determined that it is time to officially recognize Jerusalem as the capital of Israel. I’ve judged this cour…"
  },
  {
    "id": 938479332380561400,
    "created_at": "2017-12-06 18:44:43",
    "text": "RT @WhiteHouse: President Trump is following through on his promise to recognize Jerusalem as the capital of the State of Israel and has in…"
  },
  {
    "id": 938479138620534800,
    "created_at": "2017-12-06 18:43:57",
    "text": "Pan prezident, New York, 18. září 2017: https://t.co/GqQIuupMpF"
  },
  {
    "id": 938477779011633200,
    "created_at": "2017-12-06 18:38:33",
    "text": "RT @PresidentRuvi: Thank you @POTUS @realDonaldTrump. There is no more fitting or beautiful gift, as we approach 70 years of the State of I…"
  },
  {
    "id": 938476821238071300,
    "created_at": "2017-12-06 18:34:44",
    "text": "RT @IsraeliPM: Prime Minister Benjamin Netanyahu: \n@POTUS Trump, thank you for today's historic decision to recognize Jerusalem as Israel's…"
  },
  {
    "id": 938473244163797000,
    "created_at": "2017-12-06 18:20:32",
    "text": "RT @PressSec: \"I have determined that it is time to officially recognize Jerusalem as the Capital of Israel.\" @POTUS"
  },
  {
    "id": 938464203052109800,
    "created_at": "2017-12-06 17:44:36",
    "text": "Za co mě pan prezident chválí a za co kárá? Mluvčí Ovčáček se rozmluvil: https://t.co/UZAc5ebD1A"
  },
  {
    "id": 938449341471182800,
    "created_at": "2017-12-06 16:45:33",
    "text": "RT @USAmbPrague: Hello!  It is a great privilege for me to be the new U.S. Ambassador to the Czech Republic!  With my wife Karen, I look fo…"
  },
  {
    "id": 938445723653300200,
    "created_at": "2017-12-06 16:31:10",
    "text": "Na Twitteru doporučuje devět z deseti členů Pražské kavárny. Aréna Jaromíra Soukupa, do které jsem včera zavítal: https://t.co/S8HUsSfaxz"
  },
  {
    "id": 938444137740865500,
    "created_at": "2017-12-06 16:24:52",
    "text": "Aréna Jaromíra Soukupa zasáhla 403 tisíc diváků: https://t.co/IHaXdqgvUb"
  },
  {
    "id": 938439932435103700,
    "created_at": "2017-12-06 16:08:09",
    "text": "Adventní čas na Pražském hradě. https://t.co/tb8tFry1YU"
  },
  {
    "id": 938433456215904300,
    "created_at": "2017-12-06 15:42:25",
    "text": "To nemohlo jinak skončit: Včerejší show Jaromíra Soukupa, kde vystoupil Ovčáček, má silné dozvuky. Až vzteklé: https://t.co/mOrvWSnzA2"
  },
  {
    "id": 938424341762658300,
    "created_at": "2017-12-06 15:06:12",
    "text": "RT @realDonaldTrump: MAKE AMERICA GREAT AGAIN!"
  },
  {
    "id": 938413899669532700,
    "created_at": "2017-12-06 14:24:43",
    "text": "Pan prezident na Hradě převzal pověřovací listiny od nového velvyslance USA, J. E. Stephena B. Kinga. https://t.co/7PREWdKaHv"
  },
  {
    "id": 938408833814290400,
    "created_at": "2017-12-06 14:04:35",
    "text": "RT @SwedeninCZ: Congratulations Mr. Prime Minister. Sweden is looking forward to good and constructive cooperation. @AndrejBabis https://t.…"
  },
  {
    "id": 938408765325500400,
    "created_at": "2017-12-06 14:04:19",
    "text": "RT @JanThompsonFCO: Congratulations to @AndrejBabis on his appointment as Czech PM. Many challenges ahead; UK/Czech friendship will remain…"
  },
  {
    "id": 938397706023833600,
    "created_at": "2017-12-06 13:20:22",
    "text": "Velká část českých médií ještě dále zvýší svou nenávistnou kampaň, kterou vede proti všem, kdo jsou v této zemi úspěšní, řekl pan prezident."
  },
  {
    "id": 938390877734613000,
    "created_at": "2017-12-06 12:53:14",
    "text": "Projev prezidenta republiky při jmenování předsedy vlády: https://t.co/10P7cxcu94"
  },
  {
    "id": 938387448765272000,
    "created_at": "2017-12-06 12:39:36",
    "text": "Zeman jmenoval Babiše premiérem. Jeho vládu osobně podpoří na jednání o důvěře: https://t.co/E5tPI1TfPV"
  },
  {
    "id": 938386023503016000,
    "created_at": "2017-12-06 12:33:57",
    "text": "Pan prezident na Hradě jmenoval Andreje Babiše předsedou vlády. https://t.co/svS7zsSaYs"
  },
  {
    "id": 938359199494492200,
    "created_at": "2017-12-06 10:47:21",
    "text": "Neúspěšní trpaslíci v akci: https://t.co/VKUtcAZaKK"
  },
  {
    "id": 938333826971037700,
    "created_at": "2017-12-06 09:06:32",
    "text": "Zeman se postavil návrhu Bruselu: Kvóty na uprchlíky? To je vměšování do vnitřních záležitostí ČR: https://t.co/B3onfrjz7Y"
  },
  {
    "id": 938170612018753500,
    "created_at": "2017-12-05 22:17:58",
    "text": "Novináři z ČT si o sobě myslí, jak jsou důležití, až jsou směšní, rozjel svůj pořad Soukup a vstoupil Ovčáček: https://t.co/VNlYDAqAmN"
  },
  {
    "id": 938068484658954200,
    "created_at": "2017-12-05 15:32:09",
    "text": "Hostem Arény Jaromíra Soukupa bude Jiří Ovčáček: https://t.co/FB4tZmcD5T"
  },
  {
    "id": 938061528594616300,
    "created_at": "2017-12-05 15:04:31",
    "text": "RT @rudolf_jindrak: Medaili Za zásluhy 1. stupně udělenou prezidentem republiky dnes v Moskvě převzala paní Světlana Gannuškinová, která se…"
  },
  {
    "id": 938060956214681600,
    "created_at": "2017-12-05 15:02:14",
    "text": "Prezident republiky přijal demisi vlády: https://t.co/ubr6J1pKts"
  },
  {
    "id": 938037930920173600,
    "created_at": "2017-12-05 13:30:45",
    "text": "Hrad. Budoucí premiér Andrej Babiš se účastní slavnostního oběda pořádaného na počest prezidenta Maďarska Jánose Ád… https://t.co/L1oqO7oeRk"
  },
  {
    "id": 938033628784808000,
    "created_at": "2017-12-05 13:13:39",
    "text": "https://t.co/xPLE2fr276"
  },
  {
    "id": 938032082437181400,
    "created_at": "2017-12-05 13:07:30",
    "text": "Projev prezidenta republiky při tiskové konferenci u příležitosti návštěvy maďarského prezidenta v ČR: https://t.co/SMS0XNeLNh"
  },
  {
    "id": 937990312714260500,
    "created_at": "2017-12-05 10:21:32",
    "text": "Pan prezident se svojí paní přivítali na Hradě prezidenta Maďarska Jánose Ádera a jeho manželku. https://t.co/u0Uhi9oe27"
  },
  {
    "id": 937972989215346700,
    "created_at": "2017-12-05 09:12:41",
    "text": "Prezident republiky přijme nové velvyslance: https://t.co/JsenInvIvf"
  },
  {
    "id": 937969400963108900,
    "created_at": "2017-12-05 08:58:26",
    "text": "Prezident republiky Miloš Zeman jmenuje ve středu 6.12.2017 ve 13:00 hod. Andreje Babiše do funkce předsedy vlády: https://t.co/ozsNFbzDL3"
  },
  {
    "id": 937956254005243900,
    "created_at": "2017-12-05 08:06:11",
    "text": "Není žádné překvapení, že si Sobotka přeje na Hradě Drahoše: https://t.co/z35ssRIzL3"
  },
  {
    "id": 937633241846120400,
    "created_at": "2017-12-04 10:42:39",
    "text": "RT @CUTIzpravy: Ať mi už nikdo neříká, že Česká televize nepodporuje Jiřího Drahoše: https://t.co/blu5XymGWu"
  },
  {
    "id": 937629556516769800,
    "created_at": "2017-12-04 10:28:01",
    "text": "Ve dnech 5. – 6. prosince 2017 se uskuteční oficiální návštěva Jánose Ádera, prezidenta Maďarska, v České republice: https://t.co/aUP0YmvZL5"
  },
  {
    "id": 937398250507784200,
    "created_at": "2017-12-03 19:08:53",
    "text": "VIDEO a FOTO: První dáma rozsvítila na Pražském hradě vánoční strom https://t.co/iidNt6Cbcd"
  },
  {
    "id": 937396744941338600,
    "created_at": "2017-12-03 19:02:54",
    "text": "SCHNEIDER: Absurdity prof. Drahoše. Jak se dá prohrát docela dobře rozjetá kampaň https://t.co/stFtrie7Bo"
  },
  {
    "id": 937356100034351100,
    "created_at": "2017-12-03 16:21:24",
    "text": "Paní Ivana Zemanová se zúčastnila slavnostního rozsvícení vánočního stromu na Pražském hradě. https://t.co/OPhDK59AOP"
  },
  {
    "id": 937308089228972000,
    "created_at": "2017-12-03 13:10:37",
    "text": "RT @CUTIzpravy: Když republika v čele s prezidentem čelila tlaku Bruselu na přijímání islámských migrantů, J. Drahoš a spol. jí zkusili vra…"
  },
  {
    "id": 937301130173960200,
    "created_at": "2017-12-03 12:42:58",
    "text": "Jste všichni hnusní xenofobové! Ale váš hlas moc a moc chci. Morálka paní Dulské: https://t.co/reunehCpZW"
  },
  {
    "id": 937291185684734000,
    "created_at": "2017-12-03 12:03:27",
    "text": "RT @CUTIzpravy: V polovině 60. let 20. století zabila padající fasáda v zanedbané Praze chodce. Následoval společenský zvrat. V roce 2017 v…"
  },
  {
    "id": 937272200628981800,
    "created_at": "2017-12-03 10:48:00",
    "text": "Zoufalec Sobotka končí s ostudou. Miloš Zeman na PL ukázal, kdo má být ve vedení ČSSD: https://t.co/xHiYkzizhl"
  },
  {
    "id": 937256313641427000,
    "created_at": "2017-12-03 09:44:53",
    "text": "Advent je tu! https://t.co/BBeOiIMeVO"
  },
  {
    "id": 937021344495128600,
    "created_at": "2017-12-02 18:11:12",
    "text": "Klidný přístav v předvánočním Brně. https://t.co/HrYbi1li5D"
  },
  {
    "id": 936971408219017200,
    "created_at": "2017-12-02 14:52:46",
    "text": "Normalizační praktiky má v krvi, jak prokázal publikováním sobotkovsko-jandovského seznamu nepohodlných: https://t.co/aaVRbhvdR0"
  },
  {
    "id": 936896230839394300,
    "created_at": "2017-12-02 09:54:02",
    "text": "Jste xenofobní, zmanipulovaní a nesvéprávní, říká o občanech jeden z prezidentských kandidátů a zároveň u nich škemrá o hlasy. #Volby2018"
  },
  {
    "id": 936688618122465300,
    "created_at": "2017-12-01 20:09:04",
    "text": "Paní Ivana Zemanová dnes zavítala do Židovské čtvrti v Boskovicích. https://t.co/CqLpXXZD9L"
  },
  {
    "id": 936646838970716200,
    "created_at": "2017-12-01 17:23:03",
    "text": "Drahoš si není jistý vítězstvím? Matrix v akci. Ovčáček prozradil, co se chystá: https://t.co/10RWVxtbCE"
  },
  {
    "id": 936641048276848600,
    "created_at": "2017-12-01 17:00:02",
    "text": "Prezident republiky. https://t.co/FR8OWPn5pY"
  },
  {
    "id": 936640633787289600,
    "created_at": "2017-12-01 16:58:23",
    "text": "Letovice. Setkání s prezidentem republiky. https://t.co/uK3nGzMURi"
  },
  {
    "id": 936640327884197900,
    "created_at": "2017-12-01 16:57:10",
    "text": "Momentka z tiskové konference na závěr třídenní návštěvy Jihomoravského kraje. https://t.co/cvFdtXjU8M"
  },
  {
    "id": 936639049850290200,
    "created_at": "2017-12-01 16:52:06",
    "text": "Paní Ivana Zemanová navštívila Vazební věznici Brno a Jeskyni Blanických rytířů. https://t.co/xPuL98vZY3"
  },
  {
    "id": 936629167134855200,
    "created_at": "2017-12-01 16:12:49",
    "text": "RT @lidovky: KOMENTÁŘ: \"Stěrače stírají, ostřikovače stříkají.\" Jiří Drahoš připomíná pečlivého motoristu z filmu Vrchní, prchni!, který za…"
  },
  {
    "id": 936624200923705300,
    "created_at": "2017-12-01 15:53:05",
    "text": "Ruští agenti tajně pronikli na Šafrovo Svobodné fórum a zneuctili jméno spolubojovníka pana Sobotky a pana Jandy: https://t.co/vj1VaswHU3"
  },
  {
    "id": 936621969474248700,
    "created_at": "2017-12-01 15:44:13",
    "text": "BIS nemá zprávy o nezákonném vlivu cizích zpravodajců na volby: https://t.co/BoRH6x8Q3U"
  },
  {
    "id": 936618196639141900,
    "created_at": "2017-12-01 15:29:14",
    "text": "Jednoznačné vyjádření pana prezidenta: https://t.co/xbTfLP9cWb"
  },
  {
    "id": 936614519534649300,
    "created_at": "2017-12-01 15:14:37",
    "text": "Drahoš se chová jako Clintonová během prezidentských voleb, řekl Zeman: https://t.co/NhmsLZS5gN"
  },
  {
    "id": 936613863465906200,
    "created_at": "2017-12-01 15:12:01",
    "text": "OVTV, videozáznam tiskové konference pana prezidenta: https://t.co/4UKa7lkE0C https://t.co/UIYv2G0uj7"
  },
  {
    "id": 936612678440816600,
    "created_at": "2017-12-01 15:07:18",
    "text": "Zeman o Drahošově obavě ze zmanipulování voleb: Neurážejte Čechy, nejsou nesvéprávní: https://t.co/zdCmwlsgQW"
  },
  {
    "id": 936609083360186400,
    "created_at": "2017-12-01 14:53:01",
    "text": "Klasika. Přenosový vůz ČT v Boskovicích. Tisková konference živě odvysílána nebyla. https://t.co/a9RQajmmQb"
  },
  {
    "id": 936604721992929300,
    "created_at": "2017-12-01 14:35:41",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta tisková konference na závěr návštěvy Jihomoravského kraje. https://t.co/OJXh5Fwyeo"
  },
  {
    "id": 936586266866540500,
    "created_at": "2017-12-01 13:22:21",
    "text": "Pan Sobotka podpoří, Bakalovo médium pochválí. Obvyklý a už značně průhledný scénář. Matrix v akci."
  },
  {
    "id": 936579842899836900,
    "created_at": "2017-12-01 12:56:50",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Letovicích: https://t.co/OJSqm6EPYH https://t.co/xRBvBgqG8h"
  },
  {
    "id": 936578264159703000,
    "created_at": "2017-12-01 12:50:33",
    "text": "Podle Drahoše volby ovlivňují zahraniční tajné služby. Kontrarozvědka to popřela: https://t.co/UxCAO1Z7sc"
  },
  {
    "id": 936570503917199400,
    "created_at": "2017-12-01 12:19:43",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Letovicích. https://t.co/Szc1MsRe3O"
  },
  {
    "id": 936563966519672800,
    "created_at": "2017-12-01 11:53:44",
    "text": "RT @CUTIzpravy: Unikát. Druhá Hillary se objevila dnes v centru Prahy, pohybovala se na nábřeží. https://t.co/Spf2ciA40q"
  },
  {
    "id": 936557828055224300,
    "created_at": "2017-12-01 11:29:21",
    "text": "RT @CUTIzpravy: Pan Sobotka s panem Drahošem konstatovali, že byly ovlivněny volby. Českého slavíka."
  },
  {
    "id": 936552213496909800,
    "created_at": "2017-12-01 11:07:02",
    "text": "Civilní kontrarozvědka nyní nemá žádné relevantní info o tom, že by cizí tajné služby nezákonně ovlivňovaly volby včetně prezidentských."
  },
  {
    "id": 936552057108160500,
    "created_at": "2017-12-01 11:06:25",
    "text": "RT @CUTIzpravy: Když se sejde fikus s fikusem..."
  },
  {
    "id": 936549818012520400,
    "created_at": "2017-12-01 10:57:31",
    "text": "OVTV, videozáznam setkání pana prezidenta se zaměstnanci společnosti ZETOR: https://t.co/7Gr5HLReo4 https://t.co/xUaPT8mr9S"
  },
  {
    "id": 936549251806572500,
    "created_at": "2017-12-01 10:55:16",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 30. listopadu 2017, 20:15, TV Barrandov: https://t.co/l9HDcpHo4U"
  },
  {
    "id": 936541695671488500,
    "created_at": "2017-12-01 10:25:15",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zaměstnanci společnosti ZETOR. https://t.co/m5mE8w9ksJ"
  },
  {
    "id": 936339477517295600,
    "created_at": "2017-11-30 21:01:42",
    "text": "Paní Ivana Zemanová zavítala do Skanzenu Strážnice a prohlédla si státní zámek Milotice. https://t.co/1RBD3y4iN1"
  },
  {
    "id": 936323239390916600,
    "created_at": "2017-11-30 19:57:10",
    "text": "‚Zvedejte ruce.‘ Zeman si na Moravě rozjel vlastní referendum o opakování voleb: https://t.co/JyzpXsRHog"
  },
  {
    "id": 936313481250394100,
    "created_at": "2017-11-30 19:18:24",
    "text": "Momentka ze Strážnice. https://t.co/k456lspCLY"
  },
  {
    "id": 936280735484469200,
    "created_at": "2017-11-30 17:08:17",
    "text": "Videozáznam OVTV ze setkání pana prezidenta s občany v Bučovicích: https://t.co/7jgwcxgU11 https://t.co/4T3WaxI8xf"
  },
  {
    "id": 936266237235081200,
    "created_at": "2017-11-30 16:10:40",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Bučovicích. https://t.co/rtXi4Tv8Hx"
  },
  {
    "id": 936250294316556300,
    "created_at": "2017-11-30 15:07:19",
    "text": "Paní Ivana Zemanová navštívila Mohylu míru, prohlédla si expozici a kapli. Ve Starovičkách zavítala do chráněné díl… https://t.co/5b6BcU9nw7"
  },
  {
    "id": 936220066408001500,
    "created_at": "2017-11-30 13:07:12",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany ve Strážnici: https://t.co/YMLK3yifr1 https://t.co/a8mBkX4pmS"
  },
  {
    "id": 936209422111707100,
    "created_at": "2017-11-30 12:24:54",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany ve Strážnici. https://t.co/svRR3ysqqz"
  },
  {
    "id": 936197718657159200,
    "created_at": "2017-11-30 11:38:24",
    "text": "RT @KverulantOrg: Padá vláda, něco si přej\nSobotkova vláda včera podala demisi a tak si někteří z našich kolegů z neziskových organizací bu…"
  },
  {
    "id": 936191671485829100,
    "created_at": "2017-11-30 11:14:22",
    "text": "@MorozMichal @jiridrahos1 @m_horacek @hynek2018 @MirekTopolanek @MarekHilser @PavelFischer @petr_hannig… https://t.co/hjUWeSNmf2"
  },
  {
    "id": 936178872235774000,
    "created_at": "2017-11-30 10:23:31",
    "text": "RT @MorozMichal: A já říkám, Česká republika se má jako klíčový spojenec Izraele přidat!\n#IStandWithIsrael Jestli souhlasíte, prosím o RT.…"
  },
  {
    "id": 936168252664877000,
    "created_at": "2017-11-30 09:41:19",
    "text": "Brno, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/4iq97qlioH"
  },
  {
    "id": 935915855132676100,
    "created_at": "2017-11-29 16:58:22",
    "text": "Paní Ivana Zemanová navštívila Dětský domov Dagmar v Brně a prohlédla si klášter Rosa Coeli v Dolních Kounicích. https://t.co/gqXAYVPUM1"
  },
  {
    "id": 935902670237454300,
    "created_at": "2017-11-29 16:05:59",
    "text": "Zeman podporuje návrat Slovanské epopeje do Moravského Krumlova: https://t.co/MfTQR49qvW"
  },
  {
    "id": 935898789440876500,
    "created_at": "2017-11-29 15:50:34",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Moravském Krumlově: https://t.co/BR4mMt5Hns https://t.co/8F1FlIx35F"
  },
  {
    "id": 935885796036444200,
    "created_at": "2017-11-29 14:58:56",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Moravském Krumlově. https://t.co/Ls0iVSwpKA"
  },
  {
    "id": 935875974809473000,
    "created_at": "2017-11-29 14:19:54",
    "text": "Hloupé zákeřnosti by si pan kandidát mohl odpustit. Loni pan prezident předal Klokánkům 3,1 milionu Kč. Příspěvek n… https://t.co/4zFOtTkYqH"
  },
  {
    "id": 935874206188924900,
    "created_at": "2017-11-29 14:12:53",
    "text": "“Zemřel člověk, který upřímně věřil své práci a jejímu smyslu,” uvedl pan prezident k Tomáši Ježkovi."
  },
  {
    "id": 935871246956421100,
    "created_at": "2017-11-29 14:01:07",
    "text": "Pan prezident se dnes v Brně setkal s dětmi z Klokánku, které mu předaly dárky. https://t.co/Tt2XWcggDM"
  },
  {
    "id": 935843913608425500,
    "created_at": "2017-11-29 12:12:30",
    "text": "OVTV, videozáznam setkání pana prezidenta se zaměstnanci společnosti Trade FIDES: https://t.co/Ol25r7BEOy https://t.co/33cWn4HYfB"
  },
  {
    "id": 935843140291956700,
    "created_at": "2017-11-29 12:09:26",
    "text": "Paní Ivana Zemanová navštívila dominantu Brna - hrad Špilberk. https://t.co/KhzRaDvNxL"
  },
  {
    "id": 935834905476501500,
    "created_at": "2017-11-29 11:36:43",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zaměstnanci společnosti Trade FIDES. https://t.co/LQHt3Hcezs"
  },
  {
    "id": 935822651947454500,
    "created_at": "2017-11-29 10:48:01",
    "text": "OVTV, videozáznam jednaní se zastupiteli Jihomoravského kraje. Na závěr se pan prezident setkal s dětmi z Klokánku:… https://t.co/mx8pQmQbgN"
  },
  {
    "id": 935813796769214500,
    "created_at": "2017-11-29 10:12:50",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zastupiteli Jihomoravského kraje. https://t.co/MXZ2lc46ax"
  },
  {
    "id": 935809559612059600,
    "created_at": "2017-11-29 09:56:00",
    "text": "Pan prezident se svojí paní zahájili setkáním s hejtmanem a jeho manželkou třídenní návštěvu Jihomoravského kraje. https://t.co/H3wmhTijQR"
  },
  {
    "id": 935560170935062500,
    "created_at": "2017-11-28 17:25:01",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Jihomoravském kraji ve dnech 29. listopadu - 1. prosince:… https://t.co/HzRfK9XIxk"
  },
  {
    "id": 935531420113612800,
    "created_at": "2017-11-28 15:30:46",
    "text": "V období mezi 6. a 13. prosincem se pan prezident setká v Lánech s kandidáty na ministry, kteří budou ve vládě nováčky."
  },
  {
    "id": 935531398974398500,
    "created_at": "2017-11-28 15:30:41",
    "text": "Pan prezident jmenuje Andreje Babiše premiérem ve středu 6. prosince 2017. Novou vládu pan prezident jmenuje ve středu 13. prosince 2017."
  },
  {
    "id": 935527094142062600,
    "created_at": "2017-11-28 15:13:35",
    "text": "Prezident republiky Miloš Zeman přijal v úterý dne 28. listopadu 2017 na Pražském hradě na jeho žádost předsedu hnutí ANO Andreje Babiše."
  },
  {
    "id": 935467101795516400,
    "created_at": "2017-11-28 11:15:11",
    "text": "Projev prezidenta republiky při velitelském shromáždění náčelníka Generálního štábu Armády České republiky: https://t.co/wJCAJVxrEC"
  },
  {
    "id": 935453167604691000,
    "created_at": "2017-11-28 10:19:49",
    "text": "Po ukončení velitelského shromáždění si pan prezident prohlédl drony Armády České republiky. https://t.co/ybOcKn04KX"
  },
  {
    "id": 935446958596075500,
    "created_at": "2017-11-28 09:55:09",
    "text": "Ministr obrany Martin Stropnický předal panu prezidentovi u příležitosti velitelského shromáždění osobní dárek. https://t.co/XxrUTec4SJ"
  },
  {
    "id": 935445732311658500,
    "created_at": "2017-11-28 09:50:16",
    "text": "Setkání pana prezidenta, ministra obrany a náčelníka GŠ AČR s novodobými válečnými veterány. https://t.co/6TE814eG1H"
  },
  {
    "id": 935443431308054500,
    "created_at": "2017-11-28 09:41:08",
    "text": "Ministr obrany Martin Stropnický na velitelském shromáždění poděkoval panu prezidentovi za intenzivní zájem o Armádu ČR."
  },
  {
    "id": 935441504264491000,
    "created_at": "2017-11-28 09:33:28",
    "text": "Rozvoj naší armády je jednou z klíčových investic, uvedl pan prezident v projevu na velitelském shromáždění náčelníka Gen. štábu Armády ČR."
  },
  {
    "id": 935143438147899400,
    "created_at": "2017-11-27 13:49:04",
    "text": "Paní Ivana Zemanová dnes na Hradě přivítala mnohonásobné bezpříspěvkové dárce krve. https://t.co/abeGZW6uvp"
  },
  {
    "id": 935107317401571300,
    "created_at": "2017-11-27 11:25:32",
    "text": "Pan prezident se svojí paní navštíví ve dnech 29. listopadu - 1. prosince 2017 Jihomoravský kraj. Program zde: https://t.co/1rMLEwWO7K"
  },
  {
    "id": 935101622077788200,
    "created_at": "2017-11-27 11:02:54",
    "text": "Prezident republiky se zúčastní velitelského shromáždění: https://t.co/egiZPbWnY4"
  },
  {
    "id": 934714169747796000,
    "created_at": "2017-11-26 09:23:18",
    "text": "Paní Ivana Zemanová dnes v Praze zahájila Vánoční festival Diplomatic Spouses Association, jehož celý výtěžek jde n… https://t.co/5Zgd9Hp9HF"
  },
  {
    "id": 934324833055313900,
    "created_at": "2017-11-25 07:36:13",
    "text": "Svědek: Cenu akcií OKD určil Sobotka a Urban https://t.co/nCPqYQNHr6"
  },
  {
    "id": 934101871932952600,
    "created_at": "2017-11-24 16:50:15",
    "text": "Momentka z Jekatěrinburgu. Prezentace letounu L-410. https://t.co/VxatDs2LHL"
  },
  {
    "id": 934101609604362200,
    "created_at": "2017-11-24 16:49:13",
    "text": "Prezident republiky kondoloval egyptskému prezidentovi: https://t.co/tVHXc73YG8"
  },
  {
    "id": 934079498450071600,
    "created_at": "2017-11-24 15:21:21",
    "text": "Praha-Kbely, před chvílí jsme přistáli. Úspěšná oficiální návštěva Ruska ukončena. https://t.co/WvYPrXs53H"
  },
  {
    "id": 934007878930829300,
    "created_at": "2017-11-24 10:36:46",
    "text": "RT @ZEMANZNOVU2018: Miloš Zeman je díky vám dnes právoplatně registrovaným prezidentským kandidátem. Bylo mu započítáno celkem 103817 podpi…"
  },
  {
    "id": 933997365161230300,
    "created_at": "2017-11-24 09:54:59",
    "text": "Pan prezident v Jekatěrinburgu uctil památku československých legionářů. https://t.co/bRD5F15w57"
  },
  {
    "id": 933968636687110100,
    "created_at": "2017-11-24 08:00:49",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 23. listopadu 2017, 20:15, TV Barrandov: https://t.co/Q6TuyMAm8b"
  },
  {
    "id": 933945705470849000,
    "created_at": "2017-11-24 06:29:42",
    "text": "Pan prezident v Jekatěrinburgu zavítal na rusko-české podnikatelské fórum. https://t.co/6hCtGNLAUU"
  },
  {
    "id": 933733152295669800,
    "created_at": "2017-11-23 16:25:06",
    "text": "Máme prezidenta, který se před nikým ze světa nehrbí. Ano, máme hrdého prezidenta hrdé země. Žádný fikus a třtina ve větru. Miloš Zeman."
  },
  {
    "id": 933724725012062200,
    "created_at": "2017-11-23 15:51:36",
    "text": "Zeman požádal Putina, aby pomohl osvobodit ukrajinského historika: https://t.co/fvj4dx6CNj"
  },
  {
    "id": 933711424790188000,
    "created_at": "2017-11-23 14:58:45",
    "text": "Zeman v Moskvě otevřel výstavu pokladů a přimluvil se za propuštění teologa: https://t.co/elafQz5C2H"
  },
  {
    "id": 933710065600815100,
    "created_at": "2017-11-23 14:53:21",
    "text": "Momentka z výstavy Poklady Pražského hradu v Moskvě. https://t.co/OwCgThJdAe"
  },
  {
    "id": 933697412719415300,
    "created_at": "2017-11-23 14:03:05",
    "text": "Ruská FAKE NEWS. Nejprve hnus o okupaci 1968, teď totální lež Kommersantu, že řada členů české delegace požadovala státní návštěvu ukončit."
  },
  {
    "id": 933695772146757600,
    "created_at": "2017-11-23 13:56:33",
    "text": "Právě teď. Jekatěrinburg, letiště. https://t.co/BMVEksjJ12"
  },
  {
    "id": 933694000040685600,
    "created_at": "2017-11-23 13:49:31",
    "text": "Pan prezident se v Moskvě zúčastnil ceremoniálu otevření výstavy Poklady Pražského hradu. https://t.co/tL4x9vD3Wu"
  },
  {
    "id": 933693356726800400,
    "created_at": "2017-11-23 13:46:58",
    "text": "ŠOK pro Pražskou kavárnu. Pan prezident: Příště se o Doněcké republice budu vyjadřovat krajně pohrdavě. Více zde: https://t.co/8ZNjTupB0v"
  },
  {
    "id": 933659442364678100,
    "created_at": "2017-11-23 11:32:12",
    "text": "Vyjádření pana prezidenta ke jmenování premiéra a nové vlády, které zaznělo na setkání s českými novináři v Moskvě: https://t.co/hibyeWmlc3"
  },
  {
    "id": 933616485934813200,
    "created_at": "2017-11-23 08:41:30",
    "text": "Moskva, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/tNHgXTViZW"
  },
  {
    "id": 933610922115027000,
    "created_at": "2017-11-23 08:19:24",
    "text": "To jsou věci: Z dnešních novin vykoukl Jiří Ovčáček. A zpucoval české novináře zlými slovy https://t.co/7FGSyAlr60"
  },
  {
    "id": 933586306491473900,
    "created_at": "2017-11-23 06:41:35",
    "text": "Můj dnešní komentář v Mladé frontě DNES. Zlí duchové vylétají z bublifuku: https://t.co/FGNpULQHkp"
  },
  {
    "id": 933582277610803200,
    "created_at": "2017-11-23 06:25:34",
    "text": "Vůbec doposud dokument neměli v ruce. A přesto “moudře” plkají. To mají být profesionálové? https://t.co/mAcGbgTKCN"
  },
  {
    "id": 933412145513025500,
    "created_at": "2017-11-22 19:09:32",
    "text": "Pan prezident zaslal blahopřejný dopis novému předsedovi Poslanecké sněmovny Radkovi Vondráčkovi: https://t.co/xUVSwRhjYC"
  },
  {
    "id": 933395394825998300,
    "created_at": "2017-11-22 18:02:58",
    "text": "Pan prezident s vyznamenanými. https://t.co/Tqi1OuPnYv"
  },
  {
    "id": 933387604652945400,
    "created_at": "2017-11-22 17:32:01",
    "text": "Projev prezidenta republiky při udělení státních vyznamenání: https://t.co/1eAEjeclH0"
  },
  {
    "id": 933376700787908600,
    "created_at": "2017-11-22 16:48:41",
    "text": "Prezident republiky udělil státní vyznamenání: https://t.co/JN7ZDzT92u"
  },
  {
    "id": 933353847153659900,
    "created_at": "2017-11-22 15:17:52",
    "text": "Pan prezident se v Moskvě setkal s Michailem Sergejevičem Gorbačovem. https://t.co/5b9pAut0ul"
  },
  {
    "id": 933351238158217200,
    "created_at": "2017-11-22 15:07:30",
    "text": "České firmy v Rusku podepsaly smlouvy či dohody za 19 miliard korun: https://t.co/5WMwxppQue"
  },
  {
    "id": 933333006210789400,
    "created_at": "2017-11-22 13:55:03",
    "text": "TV ZVEZDA se omluvila za lživý článek: https://t.co/O2r8jzLuBT"
  },
  {
    "id": 933326579681452000,
    "created_at": "2017-11-22 13:29:31",
    "text": "Pánové, tak už se konečně přiznejte. Kdo z vás - pod pseudonymem - ten článek pro Zvezdu za dlouhých podzimních več… https://t.co/inrVRonHx8"
  },
  {
    "id": 933321115690299400,
    "created_at": "2017-11-22 13:07:48",
    "text": "To se jen tak nevidí: Zeman zdrbal hlavu Medveděvovi za článek o roce 1968. Ten se kál a kál... FOTO + PLNÝ PŘEKLAD https://t.co/hUP08X3YFP"
  },
  {
    "id": 933308035820343300,
    "created_at": "2017-11-22 12:15:50",
    "text": "Medvěděv se distancoval od článku o okupaci Československa: https://t.co/RuHz92k8Dk"
  },
  {
    "id": 933307514162176000,
    "created_at": "2017-11-22 12:13:46",
    "text": "Pan prezident během jednoznačného protestu předal ruskému premiérovi Dmitriji Medveděvovi lživý článek webu ruské a… https://t.co/DSOTHjBUK8"
  },
  {
    "id": 933304345805848600,
    "created_at": "2017-11-22 12:01:10",
    "text": "Prezident republiky protestoval proti lživému článku o okupaci Československa. Více zde: https://t.co/yTwjpUmcga"
  },
  {
    "id": 933284221287850000,
    "created_at": "2017-11-22 10:41:12",
    "text": "Očekávám od ruských činitelů, že se k tomu postaví čelem, a že tuto provokaci jasně a rozhodně odmítnou: https://t.co/kyAY3nnD90"
  },
  {
    "id": 933260157651439600,
    "created_at": "2017-11-22 09:05:35",
    "text": "Zeman v Rusku tvrdě odsoudil článek o okupaci. „Je to urážka českého národa“ běsní prezident: https://t.co/XgV86XImSj"
  },
  {
    "id": 933257166441431000,
    "created_at": "2017-11-22 08:53:42",
    "text": "Zeman: Článek na webu Zvezdy je dílem šílence s vylízaným mozkem https://t.co/mAPhiXNHww"
  },
  {
    "id": 933254576139944000,
    "created_at": "2017-11-22 08:43:24",
    "text": "Pan prezident v Moskvě zavítal na česko-ruské podnikatelské fórum. https://t.co/Gz5vdt5lxO"
  },
  {
    "id": 933252602745143300,
    "created_at": "2017-11-22 08:35:34",
    "text": "3/3 Pan prezident považuje článek, který byl publikován na úvod oficiální návštěvy Ruska, za záměrnou provokaci."
  },
  {
    "id": 933252414764810200,
    "created_at": "2017-11-22 08:34:49",
    "text": "2/3 “Toto prohlášení je urážkou našeho národa,” řekl pan prezident k článku na česko-ruském podnikatelském fóru v Moskvě."
  },
  {
    "id": 933252317264076800,
    "created_at": "2017-11-22 08:34:26",
    "text": "1/3 Pan prezident dnes vyzve ruského premiéra Dmitrije Medveděva, aby se distancoval od článku na webu armádní televize Zvezda."
  },
  {
    "id": 933084251288989700,
    "created_at": "2017-11-21 21:26:36",
    "text": "Hodování na ministerstvech ČSSD: Fiktivní práce pro Dienstbiera, statisícové subvence pro web Sobotkova poradce... https://t.co/qShXcaRbft"
  },
  {
    "id": 933066675896901600,
    "created_at": "2017-11-21 20:16:45",
    "text": "Zemana rozhořčil článek o invazi 1968 na ruském webu, hodlá se ohradit: https://t.co/4VQuY1Dmyf"
  },
  {
    "id": 933025668752920600,
    "created_at": "2017-11-21 17:33:48",
    "text": "Pan prezident odletěl ze Soči do Moskvy. Zítra mj. podnikatelské fórum a setkání s premiérem D. Medveděvem.… https://t.co/fol1nVvuQu"
  },
  {
    "id": 933017261555765200,
    "created_at": "2017-11-21 17:00:24",
    "text": "Projev prezidenta republiky při setkání se zástupci tisku k oficiální návštěvě v Ruské federaci: https://t.co/2PWPilz6Sp"
  },
  {
    "id": 933014622822596600,
    "created_at": "2017-11-21 16:49:55",
    "text": "Názor pana prezidenta je neměnný. Okupace v roce 1968 byla zločinem. https://t.co/jGvKVZi15O"
  },
  {
    "id": 932966736802013200,
    "created_at": "2017-11-21 13:39:38",
    "text": "Setkání českého a ruského prezidenta s novináři. https://t.co/CS27RfQDCV"
  },
  {
    "id": 932962814649684000,
    "created_at": "2017-11-21 13:24:03",
    "text": "Jde o jediné kompletní Obnovené zřízení zemské z roku 1627. Ve Strahovském klášteře je druhý exemplář, tomu ale chy… https://t.co/lBqU5jzUrs"
  },
  {
    "id": 932962382132936700,
    "created_at": "2017-11-21 13:22:20",
    "text": "Mimořádný dar České republice od prezidenta Ruské federace Vladimira Putina. Originál Obnoveného zřízení zemského z… https://t.co/aMzkfJgtrY"
  },
  {
    "id": 932947934789894100,
    "created_at": "2017-11-21 12:24:55",
    "text": "To zas bude uragán: Až si zde kavárna přečte, co Miloš Zeman řekl Vladimiru Putinovi... https://t.co/0pJKxRXawb"
  },
  {
    "id": 932925926748360700,
    "created_at": "2017-11-21 10:57:28",
    "text": "Pan prezident se v Soči setkal s prezidentem Ruské federace Vladimirem Putinem. https://t.co/Iv3n9SrUTA"
  },
  {
    "id": 932914517163626500,
    "created_at": "2017-11-21 10:12:08",
    "text": "Patočka pracuje pro státní poštu. Můj text o ní nesměl vyjít, říká novinářka Uhlová: https://t.co/M5ymFiXETA"
  },
  {
    "id": 932747645780660200,
    "created_at": "2017-11-20 23:09:03",
    "text": "Ovčáček se dopálil při rozhovoru v televizi: Pražští novináři jsou úplně mimo https://t.co/Ea8jnDbUj2"
  },
  {
    "id": 932682583225147400,
    "created_at": "2017-11-20 18:50:30",
    "text": "České firmy by měly během mise v Rusku uzavřít kontrakty za 20 miliard: https://t.co/9EWVUIGkRh"
  },
  {
    "id": 932672256421122000,
    "created_at": "2017-11-20 18:09:28",
    "text": "Sledujte dnes na PRAHA TV ve 20:33 pořad Pražská kavárna, kde jsem hostem Petra Žantovského! https://t.co/Fg8C1s8f99"
  },
  {
    "id": 932659494143909900,
    "created_at": "2017-11-20 17:18:46",
    "text": "Právě teď, Soči. Krátce po přistání. Program návštěvy Ruska zde: https://t.co/vTwj7hwVYx https://t.co/yWvEE3GztT"
  },
  {
    "id": 932608394866970600,
    "created_at": "2017-11-20 13:55:43",
    "text": "Letiště Praha-Kbely. Pan prezident se svojí paní za chvíli odlétají na oficiální návštěvu Ruské federace. https://t.co/RgO8nmAQYh"
  },
  {
    "id": 932600834319319000,
    "created_at": "2017-11-20 13:25:40",
    "text": "Prezident republiky přijal předsedu Čínské fotbalové asociace. Podrobnosti zde: https://t.co/d0ZVazkTLY"
  },
  {
    "id": 932535255629738000,
    "created_at": "2017-11-20 09:05:05",
    "text": "RT @novinkycz: KOMENTÁŘ: 17. listopad po 28 letech - Václav Klaus ml. https://t.co/kgEJ8ydufC"
  },
  {
    "id": 932525492330225700,
    "created_at": "2017-11-20 08:26:17",
    "text": "Vstali noví kádrováci. Sledujeme pokus o privatizaci 17. listopadu: https://t.co/EcJ7a8hju7"
  },
  {
    "id": 932502141989720000,
    "created_at": "2017-11-20 06:53:30",
    "text": "Pan prezident dnes odlétá na oficiální návštěvu Ruské federace. Program naleznete zde: https://t.co/vTwj7hwVYx"
  },
  {
    "id": 932280011901624300,
    "created_at": "2017-11-19 16:10:50",
    "text": "Povinná četba pro místní nenávistnou stoku: M. Zeman v roce 1989 přišel o práci. Jeho článek šokoval nejen disidenty https://t.co/zUelhWTWot"
  },
  {
    "id": 932193835828039700,
    "created_at": "2017-11-19 10:28:24",
    "text": "23.10.2017 jsem v komentáři pro časopis TÝDEN prorocky napsal: https://t.co/NA6ha870rt"
  },
  {
    "id": 932181616042152000,
    "created_at": "2017-11-19 09:39:51",
    "text": "V průzkumu v Olomouckém kraji se přes 3000 lidí vyslovilo proti předčasným volbám. Pro byli jen jednotlivci. To jsou reálná čísla!"
  },
  {
    "id": 931958822515757000,
    "created_at": "2017-11-18 18:54:32",
    "text": "Přepis rozhovoru pana prezidenta pro TV Barrandov: https://t.co/oBQUEpaPiD"
  },
  {
    "id": 931949609429200900,
    "created_at": "2017-11-18 18:17:56",
    "text": "V roce 1990 sice Miloš Zeman nestál na náměstích, psal ale volební program Občanského fóra: https://t.co/GfNLucHQtU"
  },
  {
    "id": 931940167094595600,
    "created_at": "2017-11-18 17:40:25",
    "text": "Ovčáček jde do 80 kin. O komedii je obrovský zájem: https://t.co/quRnrBCQ5Z"
  },
  {
    "id": 931786864029290500,
    "created_at": "2017-11-18 07:31:14",
    "text": "První máj jak vyšitý, pošlapaný odkaz 17. listopadu. Místo oslavy svobody brutální Drahošova propaganda: https://t.co/Y4aTpiV8ks"
  },
  {
    "id": 931575823987028000,
    "created_at": "2017-11-17 17:32:38",
    "text": "Demokracií a svobodou se dnes nejhlasitěji ohání ti, kteří odmítají výsledky demokratických a svobodných voleb."
  },
  {
    "id": 931461020614381600,
    "created_at": "2017-11-17 09:56:27",
    "text": "Videozáznam pořadu “Týden s prezidentem”. Čtvrtek 16. listopadu, 20:15, TV Barrandov: https://t.co/NNW9Pkg0Hk"
  },
  {
    "id": 931261449875476500,
    "created_at": "2017-11-16 20:43:26",
    "text": "https://t.co/R2usK75vj4"
  },
  {
    "id": 931199957641695200,
    "created_at": "2017-11-16 16:39:05",
    "text": "EU postrádá silné vedení, na anexi Krymu má dvojí metr, prohlásil Zeman: https://t.co/U2kfKUGvYo"
  },
  {
    "id": 931176480184459300,
    "created_at": "2017-11-16 15:05:47",
    "text": "Pan prezident se setkal ve čtvrtek 16.11. v Lánech s předsedou politického hnutí STAN P. Gazdíkem a předsedou poslaneckého klubu J. Farským."
  },
  {
    "id": 931133907151609900,
    "created_at": "2017-11-16 12:16:37",
    "text": "Pan prezident vystoupí ve čtvrtek dne 16. listopadu 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 931122714055790600,
    "created_at": "2017-11-16 11:32:09",
    "text": "Právě teď, Lány. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/hExDvnIPdi"
  },
  {
    "id": 931096545277173800,
    "created_at": "2017-11-16 09:48:09",
    "text": "Rozhovor prezidenta republiky pro Mladou frontu Dnes: https://t.co/rgYPT7mKLT"
  },
  {
    "id": 930824367549841400,
    "created_at": "2017-11-15 15:46:37",
    "text": "Právě teď. Lány. Pan prezident před oficiální návštěvou Ruska poskytuje rozhovor agentuře TASS. https://t.co/neUJzWRzHE"
  },
  {
    "id": 930818252082700300,
    "created_at": "2017-11-15 15:22:19",
    "text": "Pan prezident se setkal ve středu 15.11. v Lánech s předsedou TOP 09 Miroslavem Kalouskem a 1. místopředsedou strany Markem Ženíškem."
  },
  {
    "id": 930789270880686100,
    "created_at": "2017-11-15 13:27:10",
    "text": "RT @dominikduka: Řeknu-li, že mi na srdci leží bezpečí lidí v této zemi, nemám se za co stydět a za svými slovy si stojím, byť by se to něk…"
  },
  {
    "id": 930783040061804500,
    "created_at": "2017-11-15 13:02:24",
    "text": "RT @AndrejBabis: Co má ruský web společného s tím, že Havlíček podepsal na příkaz Sobotky memorandum o lithiu, aby ho urvala parta kolem Ro…"
  },
  {
    "id": 930717183579164700,
    "created_at": "2017-11-15 08:40:43",
    "text": "“Idealistická levice” v akci: Vyloučený aktivista a novinář Patočka bral peníze z resortů ovládaných ČSSD https://t.co/ecB7H4sS5w"
  },
  {
    "id": 930691520851857400,
    "created_at": "2017-11-15 06:58:44",
    "text": "U Bakalů prohru milované Sobotkovy ČSSD opravdu neunesli. A tak vytáhli kalibr největší. Za kauzou lithium je prý Putin. #dnonovinariny"
  },
  {
    "id": 930501013194276900,
    "created_at": "2017-11-14 18:21:44",
    "text": "Prezident republiky. https://t.co/JoAZYD4TD5"
  },
  {
    "id": 930497876542844900,
    "created_at": "2017-11-14 18:09:16",
    "text": "Všechny ty nuly, které se opět otírají o kardinála Dominika Duku, by za trest měly tisíckrát opsat toto: https://t.co/senGTob8dS"
  },
  {
    "id": 930481167303921700,
    "created_at": "2017-11-14 17:02:52",
    "text": "RT @NewsroomCT24: Jiří Ovčáček sestavil žebříček mediálních útoků na prezidenta za minulý týden.\n🥇@Aktualnecz \n🥈@lidovky \n🥉Česká televize h…"
  },
  {
    "id": 930477805527355400,
    "created_at": "2017-11-14 16:49:30",
    "text": "Zeman v Rusku vyznamená ruské veterány a bohemistku: https://t.co/bvtLRHYZ5t"
  },
  {
    "id": 930468100402708500,
    "created_at": "2017-11-14 16:10:57",
    "text": "Psací stroj a gramofon už v hradní kanceláři mám. Až teď je ale sada kompletní. https://t.co/g7GBk21gGb"
  },
  {
    "id": 930437933085151200,
    "created_at": "2017-11-14 14:11:04",
    "text": "Pan prezident se setkal v úterý 14.11. na zámku v Lánech s předsedou KDU-ČSL Pavlem Bělobrádkem a místopředsedou strany Janem Bartoškem."
  },
  {
    "id": 930421371632603100,
    "created_at": "2017-11-14 13:05:16",
    "text": "Největší podnikatelská delegace za 25 let. Zeman se v Rusku setká s Medveděvem, Putinem i Gorbačovem: https://t.co/W7xaPPl4P7"
  },
  {
    "id": 930372611758059500,
    "created_at": "2017-11-14 09:51:30",
    "text": "To je lež, Bakalovi novináři. Ovčáček si srovnal účty za „rozzuřený dav, který vítal Zemana“: https://t.co/xPOEe7WFwK"
  },
  {
    "id": 930370259059556400,
    "created_at": "2017-11-14 09:42:09",
    "text": "Zeman se v Rusku sejde i s Gorbačovem a Medveděvem: https://t.co/S5TlqUnqmc"
  },
  {
    "id": 930365243779317800,
    "created_at": "2017-11-14 09:22:14",
    "text": "OVTV, videozáznam mé dnešní tiskové konference: https://t.co/TxK4CVHuxa https://t.co/XxH7Q95ndx"
  },
  {
    "id": 930357616726986800,
    "created_at": "2017-11-14 08:51:55",
    "text": "Od 10:00 sledujte živě na OVTV prostřednictvím FB pana prezidenta mou tiskovou konferenci! Nabídnu žebříček mediáln… https://t.co/Ckra1aaYBV"
  },
  {
    "id": 930327223453847600,
    "created_at": "2017-11-14 06:51:09",
    "text": "Kocáb a spol. nového prezidenta nenašli. Může za to Ovčáček, říká člen iniciativy: https://t.co/MjsgMO2GOV"
  },
  {
    "id": 930084953467039700,
    "created_at": "2017-11-13 14:48:27",
    "text": "RT @BorutPahor: Predsednik Pahor po nedeljski zmagi na predsedniških volitvah prejema številne telefonske in pisne čestitke voditeljev drža…"
  },
  {
    "id": 930079226350456800,
    "created_at": "2017-11-13 14:25:42",
    "text": "Pan prezident se setkal v Lánech se statutárním místopř. ČSSD pověřeným vedením strany M. Chovancem a místopředsedou strany J. Hamáčkem."
  },
  {
    "id": 930016613511909400,
    "created_at": "2017-11-13 10:16:54",
    "text": "Prezident republiky zaslal gratulační telegram slovinskému prezidentovi: https://t.co/VKhsQPOn0p"
  },
  {
    "id": 930014305080275000,
    "created_at": "2017-11-13 10:07:43",
    "text": "V úterý dne 14. listopadu 2017 se v 10.00 hodin na Pražském hradě uskuteční má tisková konference, vyjádřím se k aktuálním tématům."
  },
  {
    "id": 929732888106537000,
    "created_at": "2017-11-12 15:29:28",
    "text": "Typickým dezinformačním médiem je ČST. Tu se ale Chovancovo ministerstvo vnitra neodvážilo zapsat do seznamu. Moravec ve věži by se zlobil."
  },
  {
    "id": 929731370330607600,
    "created_at": "2017-11-12 15:23:26",
    "text": "Společnost rozděluji na blbce a lháře na jedné straně a slušné lidi, kterých je většina, na straně druhé: https://t.co/QWoNvRedEF"
  },
  {
    "id": 929682338841268200,
    "created_at": "2017-11-12 12:08:36",
    "text": "Ať cestování automobilem pohodově ubíhá! https://t.co/1YtLDTXVjU"
  },
  {
    "id": 929677361074884600,
    "created_at": "2017-11-12 11:48:50",
    "text": "RT @realDonaldTrump: When will all the haters and fools out there realize that having a good relationship with Russia is a good thing, not…"
  },
  {
    "id": 929672880379584500,
    "created_at": "2017-11-12 11:31:01",
    "text": "RT @realDonaldTrump: We had a wonderful visit to Vietnam, thank you President Tran Dai Quang! Heading to the #ASEANSummit 50th Anniv Gala i…"
  },
  {
    "id": 929666612059430900,
    "created_at": "2017-11-12 11:06:07",
    "text": "Nevíte, jestli mikronákladové Bakalovy Hospodářské noviny platí České televizi za takřka nepřetržitou reklamu?"
  },
  {
    "id": 929625749916700700,
    "created_at": "2017-11-12 08:23:45",
    "text": "Miloš Zeman pro PL na samá drsná témata, i s odhalením postupu ČT: https://t.co/X0ReRG564e"
  },
  {
    "id": 929393847741878300,
    "created_at": "2017-11-11 17:02:15",
    "text": "RT @parlamentky_cz: https://t.co/RPx3oYGmUG @czechtv @CT24zive @NewsroomCT24 @CTMilan @HorizontCT24"
  },
  {
    "id": 929346140058935300,
    "created_at": "2017-11-11 13:52:40",
    "text": "Prezident republiky. Skutečně český prezident. https://t.co/gMKO9fGehJ"
  },
  {
    "id": 929101180747251700,
    "created_at": "2017-11-10 21:39:18",
    "text": "Paní Ivana Zemanová dnes navštívila Mateřskou školu pro Krajský úřad Olomouckého kraje v Olomouci. https://t.co/JJDwLcbi2g"
  },
  {
    "id": 929029304779931600,
    "created_at": "2017-11-10 16:53:41",
    "text": "Prezident republiky. https://t.co/ZSz8LfnQ0z"
  },
  {
    "id": 929012650666811400,
    "created_at": "2017-11-10 15:47:30",
    "text": "ČT nechtěla Trumpa. ČT nechtěla Babiše. ČT nechtěla a nechce Zemana. Soustavná účelová kampaň ve prospěch sedmi a pěti procentních."
  },
  {
    "id": 928999876310065200,
    "created_at": "2017-11-10 14:56:45",
    "text": "ČST Praha odmítla nabídnout divákům přímý přenos tiskové konference pana prezidenta, tak mrkněte na OVTV:… https://t.co/CiNCkK4M5N"
  },
  {
    "id": 928994042783858700,
    "created_at": "2017-11-10 14:33:34",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta tisková konference na závěr návštěvy Olomouckého kraje. https://t.co/Kh8wXEApcc"
  },
  {
    "id": 928970493729878000,
    "created_at": "2017-11-10 12:59:59",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v obci Vápenná: https://t.co/ZKBJelNdmE https://t.co/rRMJpdDNUk"
  },
  {
    "id": 928967275427885000,
    "created_at": "2017-11-10 12:47:12",
    "text": "Vápenná. Stále v první linii v boji s mediálním mainstreamem! https://t.co/ryVPupzOYY"
  },
  {
    "id": 928960859107418100,
    "created_at": "2017-11-10 12:21:42",
    "text": "Momentky z obce Vápenná. https://t.co/OF9v8ZawON"
  },
  {
    "id": 928955720892059600,
    "created_at": "2017-11-10 12:01:17",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v obci Vápenná. https://t.co/OX66CUiMQO"
  },
  {
    "id": 928916853791035400,
    "created_at": "2017-11-10 09:26:51",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 9. listopadu 2017, 20:15, TV Barrandov: https://t.co/eKj6lvAJCF"
  },
  {
    "id": 928772235992666100,
    "created_at": "2017-11-09 23:52:11",
    "text": "RT @realDonaldTrump: My meetings with President Xi Jinping were very productive on both trade and the subject of North Korea. He is a highl…"
  },
  {
    "id": 928679068358402000,
    "created_at": "2017-11-09 17:41:58",
    "text": "Paní Ivana Zemanová si prohlédla výrobu společnosti Syrmex spol. s.r.o. v Oseku nad Bečvou. https://t.co/8c1ehqdVJQ"
  },
  {
    "id": 928668830016180200,
    "created_at": "2017-11-09 17:01:17",
    "text": "Momentky z druhého dne návštěvy Olomouckého kraje. https://t.co/PkTX4snbJ6"
  },
  {
    "id": 928662306422173700,
    "created_at": "2017-11-09 16:35:22",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Zábřehu: https://t.co/7SEDOHh3Lx https://t.co/y2cew4wj7w"
  },
  {
    "id": 928657813827674100,
    "created_at": "2017-11-09 16:17:31",
    "text": "Prezident republiky. Prezident občanů, ne médií. https://t.co/HeiR6ZztPP"
  },
  {
    "id": 928654729684684800,
    "created_at": "2017-11-09 16:05:15",
    "text": "Politiku jedné Číny ctím, ujistil Trump v Pekingu: https://t.co/qQjwGTK28L"
  },
  {
    "id": 928642641067233300,
    "created_at": "2017-11-09 15:17:13",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Zábřehu. https://t.co/VJkzRP8ZuJ"
  },
  {
    "id": 928638664720179200,
    "created_at": "2017-11-09 15:01:25",
    "text": "Souručenství Bakalových médií, TOP 09 a ministra M. Chovance věnujeme dárek. Záznam OVTV z Lipníku nad Bečvou: https://t.co/5mJxVFMC5j"
  },
  {
    "id": 928626665038762000,
    "created_at": "2017-11-09 14:13:44",
    "text": "Paní Ivana Zemanová navštívila Domov “Na zámku” a Zvonařskou dílnu Tomášková-Dytrychová. https://t.co/G8VdmxCf9m"
  },
  {
    "id": 928618658020102100,
    "created_at": "2017-11-09 13:41:55",
    "text": "Zákon o právu shromaždovacím: účastníci se mají zdržet všeho, co by narušilo řádný a pokojný průběh shromáždění. Podpis: Václav Havel."
  },
  {
    "id": 928601231798480900,
    "created_at": "2017-11-09 12:32:40",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Mohelnici: https://t.co/7yB6pHo5mC https://t.co/5EbqW9fN6k"
  },
  {
    "id": 928592220088930300,
    "created_at": "2017-11-09 11:56:52",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Mohelnici. https://t.co/kgDnHaYIOx"
  },
  {
    "id": 928562539239272400,
    "created_at": "2017-11-09 09:58:55",
    "text": "Právě teď, Olomouc. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/qES31a4t57"
  },
  {
    "id": 928533638664343600,
    "created_at": "2017-11-09 08:04:05",
    "text": "RT @realDonaldTrump: President Xi, thank you for such an incredible welcome ceremony. It was a truly memorable and impressive display! 📸htt…"
  },
  {
    "id": 928340943790583800,
    "created_at": "2017-11-08 19:18:23",
    "text": "Běsnící média už dokonce cenzurují. Záběry zachycující realitu v Lipníku nad Bečvou v nich nenajdete. A tak jsou tu… https://t.co/WgX9cIkMsB"
  },
  {
    "id": 928335242179612700,
    "created_at": "2017-11-08 18:55:44",
    "text": "RT @CUTIzpravy: Kultura nenávisti.\n\nTo je jediný program mediálního mainstreamu a Pražské kavárny.\n\nŘekněme jim v lednu 2018 STOP!"
  },
  {
    "id": 928329662517915600,
    "created_at": "2017-11-08 18:33:33",
    "text": "RT @rudolf_jindrak: Na Hradě jsem přivítal k neformálnímu setkání designovaného nového amerického velvyslance S. Kinga. https://t.co/C5GhV5…"
  },
  {
    "id": 928323661622333400,
    "created_at": "2017-11-08 18:09:43",
    "text": "RT @PanenkaRadim: Osm knih, které byste si měli v listopadu přečíst. Naše kniha #Dokazemesivladnoutsami nemůže chybět! https://t.co/PnqDUom…"
  },
  {
    "id": 928295410392817700,
    "created_at": "2017-11-08 16:17:27",
    "text": "Prezident republiky. https://t.co/sYbre9r2R8"
  },
  {
    "id": 928294878244634600,
    "created_at": "2017-11-08 16:15:20",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Lipníku/Bečvou. Na závěr lidé řekli jasné NE předčasným volbám… https://t.co/qFdWfFicJa"
  },
  {
    "id": 928285209774248000,
    "created_at": "2017-11-08 15:36:55",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany Lipníku nad Bečvou. https://t.co/bcx1fP9ShX"
  },
  {
    "id": 928267908400275500,
    "created_at": "2017-11-08 14:28:10",
    "text": "OVTV, videozáznam setkání pana prezidenta se zaměstnanci společnosti OLMA v Olomouci: https://t.co/KlkuPFRXkz https://t.co/xPh0XuFnPN"
  },
  {
    "id": 928265025659293700,
    "created_at": "2017-11-08 14:16:43",
    "text": "Paní Ivana Zemanová navštívila společnost Moděva - oděvní družstvo Konice. https://t.co/WH7Z4bXtBO"
  },
  {
    "id": 928261705313988600,
    "created_at": "2017-11-08 14:03:31",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zaměstnanci společnosti OLMA v Olomouci. https://t.co/4bLFloxbW7"
  },
  {
    "id": 928239590380535800,
    "created_at": "2017-11-08 12:35:38",
    "text": "3/3 a návrh na předběžné opatření soudu, aby S. Bartík informace stáhl a dále je nerozšiřoval."
  },
  {
    "id": 928239531396141000,
    "created_at": "2017-11-08 12:35:24",
    "text": "2/3 trestní oznámení pro podezření z trestného činu pomluvy, dále pak žaloba na ochranu osobnosti"
  },
  {
    "id": 928239469823701000,
    "created_at": "2017-11-08 12:35:10",
    "text": "1/3 Ve věci lživých tvrzení S. Bartíka bylo dnes podáno prostřednictvím právního zástupce pana prezidenta:"
  },
  {
    "id": 928214280473890800,
    "created_at": "2017-11-08 10:55:04",
    "text": "OVTV, videozáznam setkání pana prezidenta se zastupiteli Olomouckého kraje: https://t.co/zQ5XjAOEFX https://t.co/IAG9tzQ2cN"
  },
  {
    "id": 928210996518424600,
    "created_at": "2017-11-08 10:42:01",
    "text": "RT @Blesk24: Bezmála 3 tisíce čtenářů @Blesk24 od včerejška hlasovalo v prezidentské anketě. Zatím vede Miloš Zeman, druhý je @jiridrahos1…"
  },
  {
    "id": 928205382379626500,
    "created_at": "2017-11-08 10:19:43",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zastupiteli Olomouckého kraje. https://t.co/DmSPNEkp2d"
  },
  {
    "id": 928204538837897200,
    "created_at": "2017-11-08 10:16:21",
    "text": "Vyjádření ošetřujícího lékaře prezidenta republiky: https://t.co/fozaMZAe7T"
  },
  {
    "id": 928197103356170200,
    "created_at": "2017-11-08 09:46:49",
    "text": "Pan prezident se svojí paní zahájili setkáním s hejtmanem a jeho manželkou třídenní návštěvu Olomouckého kraje. https://t.co/9ndEBwJDJu"
  },
  {
    "id": 927940423091449900,
    "created_at": "2017-11-07 16:46:51",
    "text": "RT @netanyahu: Our Jerusalem. Oh, how I love this city! https://t.co/7Pm7K4DbA1"
  },
  {
    "id": 927934884873756700,
    "created_at": "2017-11-07 16:24:51",
    "text": "RT @PanenkaRadim: „Tomáš Masaryk napsal, že myšlení bolí. Přeji čtenářům této knihy bolest,“ vzkázal přes PL prezident Miloš Zeman. https:/…"
  },
  {
    "id": 927934823070658600,
    "created_at": "2017-11-07 16:24:36",
    "text": "RT @parlamentky_cz: https://t.co/piPtWqgndF @PanenkaRadim @PREZIDENTmluvci a rozhodně bude zajímat @CTK_cz @iROZHLAScz @etabery @RESPEKT_CZ…"
  },
  {
    "id": 927923624853540900,
    "created_at": "2017-11-07 15:40:06",
    "text": "Tím je řečeno vše: Brněnský politik, někdejší poradce premiéra B. Sobotky pro boj s korupcí a spoluzakladatel hnutí Žít Brno S. Bartík."
  },
  {
    "id": 927911828243566600,
    "created_at": "2017-11-07 14:53:14",
    "text": "Jsou to odporné lži a ten, kdo je šíří, je lidský odpad. Na S. Bartíka bude podána žaloba a trestní oznámení. https://t.co/l2R3U2dUYt"
  },
  {
    "id": 927904733876117500,
    "created_at": "2017-11-07 14:25:02",
    "text": "Pan prezident se setkal v úterý dne 7. listopadu 2017 v Lánech s předsedou KSČM Vojtěchem Filipem a poslankyní za KSČM Miloslavou Vostrou."
  },
  {
    "id": 927901349282500600,
    "created_at": "2017-11-07 14:11:35",
    "text": "RT @PanenkaRadim: Nová kniha je na světě! #Dokazemesivladnoutsami Díky za spolupráci @PREZIDENTmluvci, autorce předmluvy @SlechtovaKarla a…"
  },
  {
    "id": 927870643902844900,
    "created_at": "2017-11-07 12:09:35",
    "text": "O kabaret Ovčáček má zájem víc než 70 kin: https://t.co/Je45epNXIp"
  },
  {
    "id": 927549177885810700,
    "created_at": "2017-11-06 14:52:11",
    "text": "Pan prezident se setkal v pondělí dne 6. listopadu 2017 v Lánech s předsedou SPD Tomiem Okamurou a místopředsedou hnutí Radimem Fialou."
  },
  {
    "id": 927526951845232600,
    "created_at": "2017-11-06 13:23:52",
    "text": "RT @ZEMANZNOVU2018: Tisková konference Miloše Zemana a Ivany Zemanové k ukončení petiční akce a podání kandidatury.113038 podpisů! Video:ht…"
  },
  {
    "id": 927488108471504900,
    "created_at": "2017-11-06 10:49:31",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Olomouckém kraji ve dnech 8.-10.11.2017: https://t.co/FMPZP1mC4N https://t.co/SvmPGGwohi"
  },
  {
    "id": 927486311325462500,
    "created_at": "2017-11-06 10:42:23",
    "text": "Pan prezident se svojí paní navštíví ve dnech 8. – 10. listopadu 2017 Olomoucký kraj. Program naleznete zde: https://t.co/14VQQJRDwf"
  },
  {
    "id": 927465795470483500,
    "created_at": "2017-11-06 09:20:51",
    "text": "RT @VaclavKlaus_ml: https://t.co/AfhAACrVAC"
  },
  {
    "id": 927446958675038200,
    "created_at": "2017-11-06 08:06:00",
    "text": "Zeman plánuje oznámení ke kandidatuře na prezidenta! https://t.co/rB8xyvt8mq"
  },
  {
    "id": 927160934442860500,
    "created_at": "2017-11-05 13:09:27",
    "text": "Zeman jede do Olomouce i s manželkou. Prezident míří hlavně na náměstí: https://t.co/nUuyLVcZDG"
  },
  {
    "id": 927157056431370200,
    "created_at": "2017-11-05 12:54:02",
    "text": "Nával na Pražském hradě: Mimořádné prohlídky přilákaly 15 tisíc lidí, Ovčáček se raduje: https://t.co/gso43JrnMt"
  },
  {
    "id": 927133607830966300,
    "created_at": "2017-11-05 11:20:52",
    "text": "Přepis rozhovoru pana prezidenta pro TV Barrandov: https://t.co/n0OVjimnwz"
  },
  {
    "id": 927107680984092700,
    "created_at": "2017-11-05 09:37:50",
    "text": "https://t.co/PODHCHJ0Z8"
  },
  {
    "id": 927106377394393100,
    "created_at": "2017-11-05 09:32:39",
    "text": "Jakákoliv negativní reportáž o panu prezidentovi, kterou počínaje dneškem odvysílá ČST Praha, bude kampaní ve prospěch J. Drahoše."
  },
  {
    "id": 927105270152618000,
    "created_at": "2017-11-05 09:28:15",
    "text": "Je dobře, že si ČST Praha přestala hrát na nestrannou a přihlásila se, stejně jako M. Kalousek, k podpoře J. Drahoše. Pro voliče přehledné."
  },
  {
    "id": 927103856030437400,
    "created_at": "2017-11-05 09:22:38",
    "text": "ČST Praha a Miroslav Kalousek. Dvě jistoty Jiřího Drahoše. https://t.co/NmrdP8lq8C"
  },
  {
    "id": 927102780606697500,
    "created_at": "2017-11-05 09:18:22",
    "text": "RT @ErikBest: Těším se na příspěvek v dnešním pořadu @NewsroomCT24 o tom, jak se ČT podílela na katastrofickém volebním výsledku ČSSD."
  },
  {
    "id": 926909341839642600,
    "created_at": "2017-11-04 20:29:42",
    "text": "Děkujeme veřejnosti za velký zájem o mimořádné prohlídky reprezentačních prostor Hradu. Za dva dny - pátek a sobota - 14794 návštěvníků!"
  },
  {
    "id": 926771185899073500,
    "created_at": "2017-11-04 11:20:43",
    "text": "Vítat uprchlíky, bránit Palestinu, nenávidět Trumpa. Korektnost je v USA náboženství, říká spisovatel: https://t.co/ikVRzaKH4u"
  },
  {
    "id": 926520071068975100,
    "created_at": "2017-11-03 18:42:53",
    "text": "Den otevřených dveří na Hradě má úspěch. Dnes 7649 návštěvníků, z toho 4000 školáků. Přijďte i v sobotu! Více zde: https://t.co/4EFpUHlskR"
  },
  {
    "id": 926504722307207200,
    "created_at": "2017-11-03 17:41:54",
    "text": "Zeman je nejúspěšnější český politik. Od začátku kariéry se touží zapsat do dějin, míní politolog: https://t.co/576kZX6qrD"
  },
  {
    "id": 926434515488264200,
    "created_at": "2017-11-03 13:02:55",
    "text": "Mám úctu k našemu prezidentovi, pan Zeman je jednoznačně chytrý člověk: https://t.co/ulgJKMR2DJ"
  },
  {
    "id": 926420492977868800,
    "created_at": "2017-11-03 12:07:12",
    "text": "Zeman Babiš Zeman Babiš Zeman Babiš Zeman Babiš Zeman Babiš Zeman Babiš. Víte, co to je? Scénář pořadu ČST Praha 168 hodin na celý rok."
  },
  {
    "id": 926385176896266200,
    "created_at": "2017-11-03 09:46:52",
    "text": "Videozáznam pořadu “Týden s prezidentem”. Čtvrtek 2.11., 20:15, TV Barrandov: https://t.co/AocKXLlsod"
  },
  {
    "id": 926213744132321300,
    "created_at": "2017-11-02 22:25:39",
    "text": "Nikdo lepší než Babiš není, řekl Zeman a drsně vzkázal Topolánkovi: https://t.co/6pSg3RSYQ2"
  },
  {
    "id": 926213335758135300,
    "created_at": "2017-11-02 22:24:02",
    "text": "Pehe a Mirek jsou opuštěni. Čtenáři i voliči. https://t.co/VKzqNYxhKX"
  },
  {
    "id": 926196913287856100,
    "created_at": "2017-11-02 21:18:46",
    "text": "Babišova vláda bez důvěry může vládnout teoreticky celé čtyři roky, oznámil Zeman: https://t.co/Ce4i6YP8Ws"
  },
  {
    "id": 926146880966455300,
    "created_at": "2017-11-02 17:59:58",
    "text": "Většina lidí chce za prezidenta sympatického politika. Vyhrává Zeman: https://t.co/azDJxVTBeE"
  },
  {
    "id": 926106190538559500,
    "created_at": "2017-11-02 15:18:16",
    "text": "V pátek 3. a v sobotu 4.11. budou 9.00 - 17.00 mimořádně pro veřejnost zdarma otevřeny reprezentační prostory Hradu: https://t.co/4EFpUHlskR"
  },
  {
    "id": 926093673720369200,
    "created_at": "2017-11-02 14:28:32",
    "text": "Pan prezident se setkal ve čtvrtek 2.11. v Lánech s předsedou Pirátské strany Ivanem Bartošem a s místopředsedou strany Jakubem Michálkem."
  },
  {
    "id": 926057095593627600,
    "created_at": "2017-11-02 12:03:11",
    "text": "Pan prezident vystoupí ve čtvrtek 2. listopadu 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 926050228305834000,
    "created_at": "2017-11-02 11:35:54",
    "text": "Tyto snímky speciálně věnuji ČST Praha a jejímu pořadu 168 hodin, který v rámci kampaně neustále hloupě spekuluje o… https://t.co/5MsKptb5Om"
  },
  {
    "id": 926044655279632400,
    "created_at": "2017-11-02 11:13:45",
    "text": "Právě teď, zámek v Lánech. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/Lu9E1BOZ3J"
  },
  {
    "id": 926018121516900400,
    "created_at": "2017-11-02 09:28:19",
    "text": "Fiala u Zemana: »Modrý pták« dostal dobrůtku! https://t.co/jj9QeaOinI"
  },
  {
    "id": 925779008435966000,
    "created_at": "2017-11-01 17:38:10",
    "text": "Zdeněk Troška: Zeman je opravdový český prezident! https://t.co/I7RcWBWtFE"
  },
  {
    "id": 925730236427395100,
    "created_at": "2017-11-01 14:24:22",
    "text": "Prezident republiky se setkal s představiteli ODS: https://t.co/dhuNCHKBWt"
  },
  {
    "id": 925638161631412200,
    "created_at": "2017-11-01 08:18:29",
    "text": "Vize ČR podle pana prezidenta: “Sebevědomá země, ne ušlápnutá země, ne země, která se hrbí před někým jiným, ať už Východem nebo Západem”."
  },
  {
    "id": 925380248027492400,
    "created_at": "2017-10-31 15:13:38",
    "text": "Projev prezidenta republiky při tiskové konferenci po setkání s předsedou hnutí ANO: https://t.co/YwjnnxpgMU"
  },
  {
    "id": 925379707033587700,
    "created_at": "2017-10-31 15:11:29",
    "text": "OVTV, videozáznam tiskové konference pana prezidenta a předsedy hnutí ANO Andreje Babiše v Lánech: https://t.co/coT3zi0mTq"
  },
  {
    "id": 925378142776197100,
    "created_at": "2017-10-31 15:05:16",
    "text": "https://t.co/GRkT0WqY6o"
  },
  {
    "id": 925376711696449500,
    "created_at": "2017-10-31 14:59:35",
    "text": "Pan prezident dnes na zámku v Lánech pověřil předsedu vítězného hnutí ANO Andreje Babiše jednáním o sestavení nové… https://t.co/DhIbcZhRk1"
  },
  {
    "id": 925343214160285700,
    "created_at": "2017-10-31 12:46:28",
    "text": "Přepis rozhovoru pana prezidenta pro ČRo Radiožurnál: https://t.co/5vdVVpx06z"
  },
  {
    "id": 925334740969906200,
    "created_at": "2017-10-31 12:12:48",
    "text": "Lány. Sloupová síň připravena na tiskovou konferenci pana prezidenta a předsedy vítězného hnutí ANO Andreje Babiše.… https://t.co/2Z5xpU7N05"
  },
  {
    "id": 925330464038162400,
    "created_at": "2017-10-31 11:55:49",
    "text": "V pátek 3. a v sobotu 4.11. budou od 9.00 do 17.00 mimořádně pro veřejnost otevřeny reprezentační prostory Hradu: https://t.co/95gZNnRvPR"
  },
  {
    "id": 925109218297958400,
    "created_at": "2017-10-30 21:16:39",
    "text": "RT @ZEMANZNOVU2018: Každý den stovky obálek s podpisovými archy za opětovnou kandidaturu Miloše Zemana. DÍKY! https://t.co/H8KJjzhlQ8"
  },
  {
    "id": 925043259730210800,
    "created_at": "2017-10-30 16:54:34",
    "text": "Záznam z Lán živě vysílaného rozhovoru s panem prezidentem pro ČRo Radiožurnál: https://t.co/PFEmCwhARF"
  },
  {
    "id": 925041049545990100,
    "created_at": "2017-10-30 16:45:47",
    "text": "Lány. Momentka z živě vysílaného pořadu 20 minut Radiožurnálu. https://t.co/ghFAHl5Kvu"
  },
  {
    "id": 924926010088415200,
    "created_at": "2017-10-30 09:08:39",
    "text": "Pan prezident se v úterý 31.10. v Lánech setká s představiteli hnutí ANO. V 15:30 tisková konference. Více zde: https://t.co/SGNyJw4EKB"
  },
  {
    "id": 924910778502787100,
    "created_at": "2017-10-30 08:08:08",
    "text": "Pan prezident vystoupí dnes v 17.05 hodin v pořadu 20 minut Radiožurnálu na stanici ČRo Radiožurnál. Rozhovor bude vysílán živě z Lán."
  },
  {
    "id": 924752637530136600,
    "created_at": "2017-10-29 21:39:44",
    "text": "Dědeček hluboce věřil v Masarykovu věc, popisuje vznik Československa vnuk oceněného Charlese Cranea: https://t.co/HFqpsZlTCF"
  },
  {
    "id": 924698029290082300,
    "created_at": "2017-10-29 18:02:44",
    "text": "RT @BorutPahor: PR Češke republike Miloš Zeman je predsedniku Pahorju vročil najvišje češko odlikovanje, \"Red belega leva\". https://t.co/cm…"
  },
  {
    "id": 924659748213022700,
    "created_at": "2017-10-29 15:30:37",
    "text": "Momentky z oslav státního svátku 28. října. Pan prezident s Borutem Pahorem, Robertem Ficem, Gerhardem Schröderem a… https://t.co/iZZvvCmtet"
  },
  {
    "id": 924658308086157300,
    "created_at": "2017-10-29 15:24:54",
    "text": "RT @BorutPahor: Predsednik Republike Slovenije Borut Pahor prejel najvišje češko državno odlikovanje, Red belega leva: https://t.co/ZnxbIw9…"
  },
  {
    "id": 924658285747363800,
    "created_at": "2017-10-29 15:24:49",
    "text": "RT @BorutPahor: Predsednik Pahor v Pragi prejel najvišje češko državno odlikovanje, Red belega leva. https://t.co/fcA4jNzBDy"
  },
  {
    "id": 924658264150822900,
    "created_at": "2017-10-29 15:24:44",
    "text": "RT @BorutPahor: Predsednik Pahor se na posebno povabilo predsednika Češke republike Zemana udeležuje posebne slovesnosti ob češkem državnem…"
  },
  {
    "id": 924658034781155300,
    "created_at": "2017-10-29 15:23:49",
    "text": "Čehi odlikovali Pahorja z redom belega leva: https://t.co/VpS0rRxn8p"
  },
  {
    "id": 924615532673937400,
    "created_at": "2017-10-29 12:34:56",
    "text": "Troška: Zemanovi nikdo nesahá ani po kotníky. Do Hoštic ho zvali na zabijačky https://t.co/Repyfmouyz"
  },
  {
    "id": 924615227211223000,
    "created_at": "2017-10-29 12:33:43",
    "text": "Byla jsem ráda, že jsem se s ním potkala, protože já znám pana prezidenta už mnoho let: https://t.co/C5M43p2Shp"
  },
  {
    "id": 924604844962467800,
    "created_at": "2017-10-29 11:52:28",
    "text": "Andrej Babiš na Primě: Nejlepší vláda, to byla vláda prezidenta Zemana. To byl jeden tým, on to řídil, a to je to, o čem já neustále mluvím."
  },
  {
    "id": 924603823519424500,
    "created_at": "2017-10-29 11:48:24",
    "text": "DŮLEŽITÉ UPOZORNĚNÍ: https://t.co/7DeE6umDPw"
  },
  {
    "id": 924602391957311500,
    "created_at": "2017-10-29 11:42:43",
    "text": "Prezident Zeman měl podle Babiše skvělý projev: https://t.co/PoOPaVEdHC"
  },
  {
    "id": 924372327378423800,
    "created_at": "2017-10-28 20:28:31",
    "text": "Projev prezidenta republiky při slavnostním ceremoniálu udílení státních vyznamenání České republiky: https://t.co/9OJnQnARp8"
  },
  {
    "id": 924359601855893500,
    "created_at": "2017-10-28 19:37:57",
    "text": "Prezident republiky udělil státní vyznamenání: https://t.co/FDhKwUI0ba"
  },
  {
    "id": 924347753140023300,
    "created_at": "2017-10-28 18:50:52",
    "text": "Státní svátek 28. října. Pražský hrad. Pan prezident se svojí paní a vyznamenanými. https://t.co/fFgXtAJ9WV"
  },
  {
    "id": 924342872358510600,
    "created_at": "2017-10-28 18:31:28",
    "text": "Státní svátek 28. října. Slavnostní ceremoniál ve Vladislavském sále Pražského hradu. https://t.co/whlgEqjLWA"
  },
  {
    "id": 924282673576726500,
    "created_at": "2017-10-28 14:32:16",
    "text": "Projev prezidenta republiky při jmenování nových generálů: https://t.co/wrPbXngOM5"
  },
  {
    "id": 924266775155535900,
    "created_at": "2017-10-28 13:29:05",
    "text": "Státní svátek, Pražský hrad, jmenování nových generálů. https://t.co/LY5vQLMVy0"
  },
  {
    "id": 924261068091912200,
    "created_at": "2017-10-28 13:06:25",
    "text": "Pan prezident jmenoval na Hradě nové generály. Podrobnosti zde: https://t.co/eK8tjGMXBQ"
  },
  {
    "id": 924203891314561000,
    "created_at": "2017-10-28 09:19:13",
    "text": "Motocyklová četa Hradní stráže po návratu z Vítkova požádala pana prezidenta o společný snímek. Pan prezident velmi… https://t.co/SMnoJoujFT"
  },
  {
    "id": 924196453232402400,
    "created_at": "2017-10-28 08:49:39",
    "text": "Oslavy státního svátku 28. října zahájeny. Pan prezident se zúčastnil pietního aktu u Národního památníku na Vítkov… https://t.co/skP9WK1MFR"
  },
  {
    "id": 924195470901170200,
    "created_at": "2017-10-28 08:45:45",
    "text": "RT @JanThompsonFCO: Congratulations and best wishes to Czech friends on this 99th anniversary of the founding of Czechoslovakia"
  },
  {
    "id": 924158093864460300,
    "created_at": "2017-10-28 06:17:14",
    "text": "Program prezidenta republiky při příležitosti oslav státního svátku České republiky 28. října 2017: https://t.co/duycAaxNDv"
  },
  {
    "id": 923931390487466000,
    "created_at": "2017-10-27 15:16:23",
    "text": "RT @AmbMeron: Best wishes to all our Czech friends for the day of foundation of the Czechoslovak independent state https://t.co/PjlNnw7gvJ"
  },
  {
    "id": 923895794385727500,
    "created_at": "2017-10-27 12:54:57",
    "text": "Projev prezidenta republiky při přijetí členů diplomatického sboru: https://t.co/qP8jrExBXR"
  },
  {
    "id": 923888648130580500,
    "created_at": "2017-10-27 12:26:33",
    "text": "Pak nechám volnou ruku Andreji Babišovi, protože ten, a nikoli já, vede koaliční vyjednávání, uvedl pan prezident: https://t.co/sEX4jNOEFj"
  },
  {
    "id": 923876769568092200,
    "created_at": "2017-10-27 11:39:21",
    "text": "RT @AndrejBabis: Pobavilo 😜 https://t.co/3v0sMd58Nm"
  },
  {
    "id": 923873377823141900,
    "created_at": "2017-10-27 11:25:52",
    "text": "Pan prezident se svojí paní dnes přijali na Pražském hradě členy diplomatického sboru. https://t.co/PynbIqpauH"
  },
  {
    "id": 923865980119511000,
    "created_at": "2017-10-27 10:56:28",
    "text": "Přehled zahraničně politických aktivit prezidenta republiky: https://t.co/OsvrtKrswf"
  },
  {
    "id": 923861074402738200,
    "created_at": "2017-10-27 10:36:59",
    "text": "RT @IsraelinCZ: 2/2 Both our nations know the price of freedom and independence well. Let’s celebrate what connects us. \n🇮🇱 ❤️ 🇨🇿"
  },
  {
    "id": 923861068367257600,
    "created_at": "2017-10-27 10:36:57",
    "text": "RT @IsraelinCZ: 1/2 Friends from Bohemia, Moravia and Silesia, all of Israel would like to wish you all the best for the upcoming Independe…"
  },
  {
    "id": 923833669437018100,
    "created_at": "2017-10-27 08:48:05",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 26.10. ve 20:15, TV Barrandov: https://t.co/eGouy1yGM6"
  },
  {
    "id": 923828269274804200,
    "created_at": "2017-10-27 08:26:37",
    "text": "Pan prezident vystoupí v pondělí 30.10. v 17.05 v pořadu 20 minut Radiožurnálu na stanici ČRo Radiožurnál. Rozhovor bude vysílán živě z Lán."
  },
  {
    "id": 923482095040778200,
    "created_at": "2017-10-26 09:31:03",
    "text": "Pan prezident přijme v pátek dne 27. října 2017 ve 12.00 hodin na Pražském hradě členy diplomatického sboru: https://t.co/YMigzvGH2T"
  },
  {
    "id": 923467466638004200,
    "created_at": "2017-10-26 08:32:55",
    "text": "Pan prezident vystoupí ve čtvrtek dne 26. října 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 923467327814946800,
    "created_at": "2017-10-26 08:32:22",
    "text": "RT @ZEMANZNOVU2018: Petiční archy z Ještě jednoho životního příběhu MZ se nám vyplněné vracejí ve stovkách zpět. Děkujeme za každý váš podp…"
  },
  {
    "id": 923284114928754700,
    "created_at": "2017-10-25 20:24:21",
    "text": "RT @realDonaldTrump: Spoke to President Xi of China to congratulate him on his extraordinary elevation. Also discussed NoKo &amp; trade, two ve…"
  },
  {
    "id": 923259965627928600,
    "created_at": "2017-10-25 18:48:23",
    "text": "RT @RegSprecher: Freundschaftliche Zusammenarbeit zwischen #Deutschland und #China weiterentwickeln: Kanzlerin #Merkel gratuliert #Xi Jinpi…"
  },
  {
    "id": 923181780290719700,
    "created_at": "2017-10-25 13:37:42",
    "text": "Právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte ve čtvrtek 26. října 2017 ve 20:15 na TV Barrandov! https://t.co/6hVrm9WqWY"
  },
  {
    "id": 923166326180532200,
    "created_at": "2017-10-25 12:36:18",
    "text": "Pan prezident přivítal na Hradě folkového písničkáře Pavla Foltána. Zahrál a zazpíval oblíbenou píseň Karla Kryla D… https://t.co/xiSNza1i62"
  },
  {
    "id": 923148003032158200,
    "created_at": "2017-10-25 11:23:29",
    "text": "RT @realDonaldTrump: \"Clinton campaign &amp; DNC paid for research that led to the anti-Trump Fake News Dossier. The victim here is the Preside…"
  },
  {
    "id": 923112112037253100,
    "created_at": "2017-10-25 09:00:52",
    "text": "Prezident republiky vyhlásil termín doplňovacích voleb do Senátu. Podrobnosti zde: https://t.co/aMHpqTmtjD"
  },
  {
    "id": 923098965226160100,
    "created_at": "2017-10-25 08:08:38",
    "text": "“Jízdní řád” setkání pana prezidenta s představiteli parlamentních stran na zámku v Lánech: https://t.co/RAOPd5WpyB"
  },
  {
    "id": 922920246125535200,
    "created_at": "2017-10-24 20:18:28",
    "text": "Paní Ivana Zemanová dnes večer navštívila koncert Mireille Mathieu, který se konal v pražském Kongresovém centru. https://t.co/wgozSXyR1v"
  },
  {
    "id": 922853187891159000,
    "created_at": "2017-10-24 15:52:00",
    "text": "Prezident republiky Miloš Zeman přijal v úterý dne 24. října 2017 na Pražském hradě na jeho žádost předsedu KSČM Vojtěcha Filipa."
  },
  {
    "id": 922817975488532500,
    "created_at": "2017-10-24 13:32:05",
    "text": "Prezident republiky rozhodl o svolání zasedání Poslanecké sněmovny: https://t.co/78vxveVmsH"
  },
  {
    "id": 922770103229395000,
    "created_at": "2017-10-24 10:21:51",
    "text": "Prezident republiky Miloš Zeman podepsal v úterý dne 24. října 2017 těchto šest zákonů: https://t.co/F8UzzKbwW1"
  },
  {
    "id": 922765438077100000,
    "created_at": "2017-10-24 10:03:19",
    "text": "Zeman pověří Babiše sestavením vlády za týden, potvrdil Ovčáček: https://t.co/MpmmDD0p9N"
  },
  {
    "id": 922764911746388000,
    "created_at": "2017-10-24 10:01:13",
    "text": "Zeman pověří Babiše jednáním o vládě příští úterý: https://t.co/VAUEhTihSm"
  },
  {
    "id": 922568000238002200,
    "created_at": "2017-10-23 20:58:46",
    "text": "Pan prezident převezme v úterý 24.10. od 14.00 na Pražském hradě pověřovací listiny těchto nových velvyslanců v ČR: https://t.co/Sikjun95Qe"
  },
  {
    "id": 922564254787440600,
    "created_at": "2017-10-23 20:43:53",
    "text": "První povolební skandál. Pracovník úřadu, který má být nezávislý, se otevřeně přihlásil k antizemanovské kampani. https://t.co/WEqfm9Vbi4"
  },
  {
    "id": 922464939452850200,
    "created_at": "2017-10-23 14:09:14",
    "text": "Prezident republiky Miloš Zeman přijal v pondělí dne 23. října 2017 na zámku v Lánech na jeho žádost předsedu hnutí ANO Andreje Babiše."
  },
  {
    "id": 922433584081920000,
    "created_at": "2017-10-23 12:04:39",
    "text": "Prezidentská pojistka zapnuta. Komentář pro časopis TÝDEN: https://t.co/FgO6WojVkd"
  },
  {
    "id": 922379167819280400,
    "created_at": "2017-10-23 08:28:25",
    "text": "V úterý dne 24. října 2017 se v 11.30 hodin na Pražském hradě uskuteční má tisková konference, vyjádřím se k aktuálním tématům."
  },
  {
    "id": 922135795879825400,
    "created_at": "2017-10-22 16:21:20",
    "text": "Zeman exkluzivně o volbách: Celý záznam pořadu S prezidentem v Lánech https://t.co/5jnFRP0FSr"
  },
  {
    "id": 922120065528553500,
    "created_at": "2017-10-22 15:18:50",
    "text": "RT @CUTIzpravy: Tyto volby prohrál také Václav Moravec z ČST Praha. Není to poprvé. 2008 a 2013 volba prezidenta. Vzpomínáte?"
  },
  {
    "id": 922086123358257200,
    "created_at": "2017-10-22 13:03:57",
    "text": "Právě teď. Pan prezident v pořadu “S prezidentem v Lánech”. Živě na Blesk.cz! https://t.co/Etl8EM5u5Q"
  },
  {
    "id": 922054219301040100,
    "created_at": "2017-10-22 10:57:11",
    "text": "Zeman dnes exkluzivně pro Blesk okomentuje volby: Hlasy jsou sečteny, co bude dál? https://t.co/a0p0d2jhSc"
  },
  {
    "id": 921718165922607100,
    "created_at": "2017-10-21 12:41:50",
    "text": "Připomínám, že pan prezident vystoupí v neděli 22. 10. v 15.00 v pořadu „S prezidentem v Lánech“. Pořad bude živě vysílán na webu Blesk.cz."
  },
  {
    "id": 921686751722262500,
    "created_at": "2017-10-21 10:37:00",
    "text": "RT @PanenkaRadim: “Neměl bych s tím absolutně žádný problém,” řekl prezident o možné koalici ANO, KSČM a SPD. https://t.co/rozq26pXng"
  },
  {
    "id": 921686667089645600,
    "created_at": "2017-10-21 10:36:40",
    "text": "Zeman řekl, co bude po volbách. A v rozhovoru pro PL nebývale vytrestal Moravce a ČT: https://t.co/1XS36midrm"
  },
  {
    "id": 921412593281110000,
    "created_at": "2017-10-20 16:27:35",
    "text": "Pan prezident se svojí paní po návratu z třídenní návštěvy Plzeňského kraje odvolili ve volební místnosti v ZŠ Brdi… https://t.co/tnWFbY8KcY"
  },
  {
    "id": 921411436852777000,
    "created_at": "2017-10-20 16:23:00",
    "text": "Paní Ivana Zemanová dnes navštívila Muzeum tradičních řemesel Koloveč. https://t.co/eUndX7ZIO6"
  },
  {
    "id": 921376167063642100,
    "created_at": "2017-10-20 14:02:51",
    "text": "OVTV, videozáznam tiskové konference na závěr návštěvy Plzeňského kraje: https://t.co/Jr69jl3xcl https://t.co/dVqsL5ww4i"
  },
  {
    "id": 921368521736585200,
    "created_at": "2017-10-20 13:32:28",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta tisková konference na zámku Zbiroh. https://t.co/mQVYxIlfIu"
  },
  {
    "id": 921353696977530900,
    "created_at": "2017-10-20 12:33:33",
    "text": "Plzeňský kraj, Zbiroh. Občanská povinnost splněna. Poprvé v životě s voličským průkazem. Jděte k volbám! https://t.co/vtPDDCkget"
  },
  {
    "id": 921341591759020000,
    "created_at": "2017-10-20 11:45:27",
    "text": "Reportáž INFO.CZ: „Volte čerta, ne ďábla,“ poradil Zeman voličům https://t.co/fgkWHZcqN9"
  },
  {
    "id": 921337520176140300,
    "created_at": "2017-10-20 11:29:17",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Nepomuku: https://t.co/vyRiwiRX5S https://t.co/pbX5yjsU8h"
  },
  {
    "id": 921326531506565100,
    "created_at": "2017-10-20 10:45:37",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Nepomuku. https://t.co/iesanJMK1M"
  },
  {
    "id": 921298783509631000,
    "created_at": "2017-10-20 08:55:21",
    "text": "Pan prezident vystoupí v neděli 22. října 2017 v 15.00 hodin v pořadu „S prezidentem v Lánech“. Pořad bude živě vysílán na webu Blesk.cz."
  },
  {
    "id": 921291134986539000,
    "created_at": "2017-10-20 08:24:57",
    "text": "Videozáznam pořadu “Týden s prezidentem”, čtvrtek 19. října 2017, 20:15, TV Barrandov: https://t.co/SIsjwhbyIF"
  },
  {
    "id": 921073141568426000,
    "created_at": "2017-10-19 17:58:44",
    "text": "Paní Ivana Zemanová si také prohlédla rezervaci v Návštěvnickém centru Srní. https://t.co/s20BkLCRWL"
  },
  {
    "id": 921072860235518000,
    "created_at": "2017-10-19 17:57:37",
    "text": "Paní Ivana Zemanová navštívila Centrum Hájek ve Štáhlavách a Domov klidného stáří v Žinkovech. https://t.co/GF46zrQ9lu"
  },
  {
    "id": 921072374937739300,
    "created_at": "2017-10-19 17:55:41",
    "text": "Prezident republiky. https://t.co/41bdQDx4Lx"
  },
  {
    "id": 921056249768218600,
    "created_at": "2017-10-19 16:51:36",
    "text": "OVTV, videozáznam setkání pana prezidenta s dobrovolnými hasiči v Plzni: https://t.co/AlKjhGBGGP https://t.co/6nwJw3Y17c"
  },
  {
    "id": 921035800942399500,
    "created_at": "2017-10-19 15:30:21",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s dobrovolnými hasiči v Plzni. https://t.co/hW6rFRXQSS"
  },
  {
    "id": 921033617895252000,
    "created_at": "2017-10-19 15:21:41",
    "text": "Prezident republiky půjde volit: https://t.co/QWC0GinuMv"
  },
  {
    "id": 921023720365461500,
    "created_at": "2017-10-19 14:42:21",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany ve Stodu: https://t.co/j4ADuJRjQz https://t.co/TSOzP9iMAO"
  },
  {
    "id": 921015881345523700,
    "created_at": "2017-10-19 14:11:12",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany ve Stodu. https://t.co/S70jTWIFeE"
  },
  {
    "id": 921011451220938800,
    "created_at": "2017-10-19 13:53:36",
    "text": "Stanovisko pana prezidenta je vyvážené. Nelíbí se Kyjevu, Moskvě, Pražské kavárně a Mirkovi Kalouskovi: https://t.co/89J15uNqo9"
  },
  {
    "id": 920990024056832000,
    "created_at": "2017-10-19 12:28:27",
    "text": "Jsem připraven. Nezapomeňte jít k volbám! https://t.co/87jP9SOU5f"
  },
  {
    "id": 920980040539607000,
    "created_at": "2017-10-19 11:48:47",
    "text": "Prezident republiky. Dnes ve 20:15 na TV Barrandov! https://t.co/WhlXC5axSS"
  },
  {
    "id": 920973956580069400,
    "created_at": "2017-10-19 11:24:36",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Horšovském Týně: https://t.co/Wh2xMSkuur https://t.co/WGRPapYt0M"
  },
  {
    "id": 920970209938296800,
    "created_at": "2017-10-19 11:09:43",
    "text": "SLEDUJTE ON-LINE: Miloš Zeman je na náměstí v Horšovském Týně https://t.co/p6vQHDQoxl"
  },
  {
    "id": 920968434762027000,
    "created_at": "2017-10-19 11:02:40",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Horšovském Týně. https://t.co/oUKaD8ksPh"
  },
  {
    "id": 920957735201624000,
    "created_at": "2017-10-19 10:20:09",
    "text": "Program prezidenta republiky při příležitosti oslav státního svátku České republiky 28. října 2017: https://t.co/duycAaxNDv"
  },
  {
    "id": 920924205364981800,
    "created_at": "2017-10-19 08:06:55",
    "text": "Plzeň, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/SBf9u4RX79"
  },
  {
    "id": 920918695706316800,
    "created_at": "2017-10-19 07:45:01",
    "text": "RT @realDonaldTrump: .@NFL: Too much talk, not enough action. Stand for the National Anthem."
  },
  {
    "id": 920766491611496400,
    "created_at": "2017-10-18 21:40:13",
    "text": "RT @CUTIzpravy: https://t.co/5KOJoNw1FK"
  },
  {
    "id": 920759720591482900,
    "created_at": "2017-10-18 21:13:18",
    "text": "MUST WATCH: Czech President’s Impassioned Defense of Israel https://t.co/LRT3U0RblQ"
  },
  {
    "id": 920699765674905600,
    "created_at": "2017-10-18 17:15:04",
    "text": "https://t.co/1r8ArBW4PU"
  },
  {
    "id": 920699048780234800,
    "created_at": "2017-10-18 17:12:13",
    "text": "Blahopřeji svému příteli za odvahu říkat pravdu! Netanjahu pochválil Zemana za jeho slova ve Štrasburku: https://t.co/zcpBz21KhZ"
  },
  {
    "id": 920679490338029600,
    "created_at": "2017-10-18 15:54:30",
    "text": "Prezident republiky. https://t.co/bfiI9PppjX"
  },
  {
    "id": 920670435519418400,
    "created_at": "2017-10-18 15:18:31",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v obci Břasy: https://t.co/UM2rjh2Lkc https://t.co/fLmHoM0Jwc"
  },
  {
    "id": 920667764217536500,
    "created_at": "2017-10-18 15:07:54",
    "text": "Paní Ivana Zemanová si prohlédla Muzeum církevního umění plzeňské diecéze. https://t.co/vAaThCQBlE"
  },
  {
    "id": 920658556151566300,
    "created_at": "2017-10-18 14:31:19",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v obci Břasy. https://t.co/Xh4BsH8eIz"
  },
  {
    "id": 920652217836884000,
    "created_at": "2017-10-18 14:06:08",
    "text": "Břasy. Vesnice roku Plzeňského kraje. S nejoblíbenější ministryní. https://t.co/ierTQCNY7K"
  },
  {
    "id": 920646594223071200,
    "created_at": "2017-10-18 13:43:47",
    "text": "RT @dominikduka: Celé znění rozhovoru pro Lidové noviny z 14.10.2017\nhttps://t.co/JZ2a9WHv5g"
  },
  {
    "id": 920630482517352400,
    "created_at": "2017-10-18 12:39:46",
    "text": "Momentka z Plzeňského kraje. https://t.co/7Cj41glzm5"
  },
  {
    "id": 920617757342928900,
    "created_at": "2017-10-18 11:49:12",
    "text": "Pan prezident zavítal do Zámeckého statku Býkov, kde se koná pracovní oběd s poslanci a senátory zvolenými za Plzeň… https://t.co/oFAr5Z41kt"
  },
  {
    "id": 920613777535586300,
    "created_at": "2017-10-18 11:33:23",
    "text": "Paní Ivana Zemanová navštívila domov pro seniory Residence TERASY. https://t.co/lXU72SoUhA"
  },
  {
    "id": 920601093863891000,
    "created_at": "2017-10-18 10:42:59",
    "text": "Zeman: prohlášením o Krymu jsem nelegitimizoval jeho anexi https://t.co/u5SdzqDH7d"
  },
  {
    "id": 920599543460323300,
    "created_at": "2017-10-18 10:36:49",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zaměstnanci společnosti ZEVO Plzeň - spalovna… https://t.co/Sz1ykXBqJt"
  },
  {
    "id": 920596685511905300,
    "created_at": "2017-10-18 10:25:28",
    "text": "SLEDUJTE ON-LINE: Prezident Miloš Zeman dorazil do Plzně v dobré náladě https://t.co/p6vQHDQoxl"
  },
  {
    "id": 920586543856791600,
    "created_at": "2017-10-18 09:45:10",
    "text": "OVTV, videozáznam setkání pana prezidenta se zastupiteli Plzeňského kraje: https://t.co/sJOGMblwPr https://t.co/X9M3CkO25y"
  },
  {
    "id": 920577397820481500,
    "created_at": "2017-10-18 09:08:49",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zastupiteli Plzeňského kraje. https://t.co/452B3XNnvS"
  },
  {
    "id": 920571709689942000,
    "created_at": "2017-10-18 08:46:13",
    "text": "Pan prezident se svojí paní zahájili setkáním s hejtmanem a jeho manželkou návštěvu Plzeňského kraje. Program zde:… https://t.co/esIGqbfgnL"
  },
  {
    "id": 920393625053298700,
    "created_at": "2017-10-17 20:58:34",
    "text": "Watch: The Czech president’s pro-Israel speech https://t.co/cFdC2vBvvA"
  },
  {
    "id": 920389987828490200,
    "created_at": "2017-10-17 20:44:07",
    "text": "RT @AmbMeron: Israeli media praise pro Israel speech by Czech President @MZemanOficialni at @coe  https://t.co/c1iAcSXCCd"
  },
  {
    "id": 920294005635780600,
    "created_at": "2017-10-17 14:22:43",
    "text": "Prezident republiky Miloš Zeman přijal v úterý dne 17. října 2017 na Pražském hradě bývalého prezidenta republiky Václava Klause."
  },
  {
    "id": 920235352568336400,
    "created_at": "2017-10-17 10:29:39",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Plzeňském kraji ve dnech 18. - 20. října 2017:… https://t.co/EvEphUmRBu"
  },
  {
    "id": 919885796802428900,
    "created_at": "2017-10-16 11:20:39",
    "text": "RT @UKinCR: ‘Návštěva Sira N. Wintona u pres. Zemana v 2014 je obrazem hloubky česko-britského přátelství,’ @JanThompsonFCO pro @AnnaFranco…"
  },
  {
    "id": 919840876716855300,
    "created_at": "2017-10-16 08:22:09",
    "text": "Přijede prezident. Kam se podívá? https://t.co/xR2XXXm0OI"
  },
  {
    "id": 919830385495806000,
    "created_at": "2017-10-16 07:40:28",
    "text": "Pan prezident se svojí paní navštíví ve dnech 18. - 20. října 2017 Plzeňský kraj: https://t.co/vu8uJ4Vu7B"
  },
  {
    "id": 919187992262176800,
    "created_at": "2017-10-14 13:07:49",
    "text": "Prezidenti V4 podpořili integraci západního Balkánu do EU: https://t.co/KxIeWbYROg"
  },
  {
    "id": 919152896834404400,
    "created_at": "2017-10-14 10:48:22",
    "text": "“Visegrád je devizou, kterou bychom nikdy neměli opouštět,” uvedl pan prezident na tiskové konferenci v maďarském S… https://t.co/8VXeJr9uyn"
  },
  {
    "id": 919144212721004500,
    "created_at": "2017-10-14 10:13:51",
    "text": "Maďarsko, Szekszárd, právě teď. Setkání prezidentů zemí V4 se zástupci tisku. https://t.co/wmmFDduix3"
  },
  {
    "id": 919140532747690000,
    "created_at": "2017-10-14 09:59:14",
    "text": "Czech President: For Middle East Peace, Secure the Safety of Israel by Disarming Hamas and Hezbollah Terrorists: https://t.co/Nq6VyUyJCU"
  },
  {
    "id": 919140411666464800,
    "created_at": "2017-10-14 09:58:45",
    "text": "Czech Prez: Mass Migration Brain Drain Consigns Emigration Nations to ‘Backwardness’: https://t.co/MJDbXlghP7"
  },
  {
    "id": 919140221970772000,
    "created_at": "2017-10-14 09:58:00",
    "text": "Czech Prez Calls for a European ‘Second Amendment’ For Self-Defence Against Terrorists: https://t.co/CfJtB5ytHv"
  },
  {
    "id": 918776241989316600,
    "created_at": "2017-10-13 09:51:40",
    "text": "Videozáznam pořadu “Týden s prezidentem”, Čtvrtek 12. října, 20:15, TV Barrandov: https://t.co/HynI2yoNIO"
  },
  {
    "id": 918765059752579100,
    "created_at": "2017-10-13 09:07:14",
    "text": "Pan prezident zavítal na summit Visegrádské čtyřky, který se koná v Szekszárdu v Maďarsku. Program naleznete zde:… https://t.co/LRpDBp3XD4"
  },
  {
    "id": 918752845679165400,
    "created_at": "2017-10-13 08:18:42",
    "text": "RT @rudolf_jindrak: Přistáli jsme v Budapešti. Míříme do Szekszardu na summit prezidentů V4. Je tu krásně... https://t.co/yel3MCOisd"
  },
  {
    "id": 918491795054628900,
    "created_at": "2017-10-12 15:01:23",
    "text": "Skřek z neandrtálské jeskyně. Jiří Ovčáček ostře odpálil útoky, linoucí se na prezidenta Zemana z Kyjeva: https://t.co/rij8o8AbK4"
  },
  {
    "id": 918476374800822300,
    "created_at": "2017-10-12 14:00:06",
    "text": "Tento pán se inspiroval na ÚV KSČ v 70. letech. Místo Svobody chce Husáka: https://t.co/gcckNo0jps"
  },
  {
    "id": 918467814696128500,
    "created_at": "2017-10-12 13:26:05",
    "text": "Nepřátelé Izraele si nezaslouží žádnou podporu: USA opouštějí UNESCO."
  },
  {
    "id": 918466590328401900,
    "created_at": "2017-10-12 13:21:14",
    "text": "RT @FilipHorky: CZ president spox.: I consider the dirty attacks of some UA pols as shrieks from a Neanderthal cave that doesn't belong in…"
  },
  {
    "id": 918465758312661000,
    "created_at": "2017-10-12 13:17:55",
    "text": "RT @JaromirSoukup: Asi něco začneme natáčet. https://t.co/hpGKhhJO3F"
  },
  {
    "id": 918462305796526100,
    "created_at": "2017-10-12 13:04:12",
    "text": "Řekl jsem panu Porošenkovi, že do Evropy s Banderou nevstoupí,\" prohlásil předseda polské strany Právo a spravedlnost J. Kaczyński."
  },
  {
    "id": 918458980657229800,
    "created_at": "2017-10-12 12:50:59",
    "text": "RT @realDonaldTrump: The Fake News Is going all out in order to demean and denigrate! Such hatred!"
  },
  {
    "id": 918448842420510700,
    "created_at": "2017-10-12 12:10:42",
    "text": "Sprosté útoky některých ukrajinských politiků na pana prezidenta považuji za skřeky z neandrtálské jeskyně, které nepatří do moderní Evropy."
  },
  {
    "id": 918447460221161500,
    "created_at": "2017-10-12 12:05:13",
    "text": "https://t.co/OdhOnk5bJu"
  },
  {
    "id": 918403714662191100,
    "created_at": "2017-10-12 09:11:23",
    "text": "Pan prezident uskuteční ve dnech 13. – 14.10. pracovní návštěvu v Maďarsku, zúčastní se setkání prezidentů zemí V4: https://t.co/HDTAP5wVGb"
  },
  {
    "id": 918396613764223000,
    "created_at": "2017-10-12 08:43:10",
    "text": "RT @CUTIzpravy: Bude se slovenský Ústavní soud hlásit českému úřadu na kontrolu financování volebních kampaní?"
  },
  {
    "id": 918396058270601200,
    "created_at": "2017-10-12 08:40:57",
    "text": "Pan prezident vystoupí ve čtvrtek dne 12. října 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 918151324809748500,
    "created_at": "2017-10-11 16:28:28",
    "text": "Vzpomínáte? Henry Kissinger has 'advised Donald Trump to accept' Crimea as part of Russia: https://t.co/DC9LgG9iqM"
  },
  {
    "id": 918134198761910300,
    "created_at": "2017-10-11 15:20:25",
    "text": "Slova pana prezidenta mají kouzelnou moc. Promluví a ihned z úlu vylétne roj běsnících mainstreamových novinářů. Bojí se @ZEMANZNOVU2018"
  },
  {
    "id": 918132096262180900,
    "created_at": "2017-10-11 15:12:04",
    "text": "Konec spekulací! Ovčáček pro EZ vysvětlil, co se včera stalo. Nebude se to líbit Sobotkovi ani České televizi: https://t.co/T0Ph84EdE9"
  },
  {
    "id": 918130631984508900,
    "created_at": "2017-10-11 15:06:15",
    "text": "RT @PREZIDENTmluvci: @MichalKubal Nešlo neretweetnout. Redaktor ČST neví, že záběr byl účelově sestříhán, zpomalen, dán do smyčky a šířen n…"
  },
  {
    "id": 918130258595008500,
    "created_at": "2017-10-11 15:04:46",
    "text": "@MichalKubal Nešlo neretweetnout. Redaktor ČST neví, že záběr byl účelově sestříhán, zpomalen, dán do smyčky a šíře… https://t.co/t6v6bvysKn"
  },
  {
    "id": 918126167051423700,
    "created_at": "2017-10-11 14:48:30",
    "text": "RT @MichalKubal: Zmanipulované záběry prezidenta? To se asi Hrad musí obrátit na Radu Evropy, ČT přenášela její signál. Živý signál.. https…"
  },
  {
    "id": 918109722724708400,
    "created_at": "2017-10-11 13:43:10",
    "text": "Právě teď. Natáčení pořadu “Týden s prezidentem”. Témata? Například projev v Radě Evropy. Sledujte ve čtvrtek ve 20… https://t.co/Gywi5OMbwx"
  },
  {
    "id": 918101893435535400,
    "created_at": "2017-10-11 13:12:03",
    "text": "RT @jirixdolezal: Anexe Krymu: Miloš Zeman řekl zlou pravdu nahlas | Reflex.cz https://t.co/HiEYDeEsOR prostřednictvím @reflex_cz"
  },
  {
    "id": 918094599213678600,
    "created_at": "2017-10-11 12:43:04",
    "text": "Pan prezident se na Hradě setkal s bývalým rakouským prezidentem Heinzem Fischerem, kterému blahopřál k nedávným na… https://t.co/mh70hKOqms"
  },
  {
    "id": 918074061409878000,
    "created_at": "2017-10-11 11:21:27",
    "text": "Národ, vlast a rodina. A takhle je to doopravdy s uprchlíky. Kardinál Duka vám předává toto poselství k volbám: https://t.co/arxc21jylg"
  },
  {
    "id": 918053217744949200,
    "created_at": "2017-10-11 09:58:38",
    "text": "Rusko odmítá návrh pana prezidenta na kompenzaci Ukrajině. Proč? Protože by oficiálně uznalo, že Krym anektovalo: https://t.co/QTCNP2er4o"
  },
  {
    "id": 918044753484185600,
    "created_at": "2017-10-11 09:25:00",
    "text": "Pan prezident veřejně prozradil, že král je nahý. Ustrašení čeští politici ovšem dál budou pokrytecky chválit králův šat."
  },
  {
    "id": 918026276706844700,
    "created_at": "2017-10-11 08:11:35",
    "text": "A tak nám, paní Müllerová, vypukla antikampaň. ČST Praha v akci, zmanipulovaná videa. Tady se někdo fakt dost bojí vítězství Miloše Zemana!"
  },
  {
    "id": 917855944486383600,
    "created_at": "2017-10-10 20:54:44",
    "text": "RT @AmbMeron: Únoskyně letadel v europarlamentu? Protestoval i izraelský velvyslanec, vystoupení EU prošetří  https://t.co/LwqGdBYguS"
  },
  {
    "id": 917796280902004700,
    "created_at": "2017-10-10 16:57:39",
    "text": "Zeman: Bezpečnost Izraele a odzbrojení teroristů je cesta k míru https://t.co/sopa4Orfke"
  },
  {
    "id": 917779801573818400,
    "created_at": "2017-10-10 15:52:10",
    "text": "Čelní představitelé? No tak. Ozval se jen tradiční antizemanovský sbor. https://t.co/14YCLA0W1N"
  },
  {
    "id": 917778175677124600,
    "created_at": "2017-10-10 15:45:43",
    "text": "Partnerství EU a Kyjeva se komplikuje. Kvůli školskému zákonu na Ukrajině vypukl mezinárodní skandál: https://t.co/vW6v3yn723"
  },
  {
    "id": 917777547542302700,
    "created_at": "2017-10-10 15:43:13",
    "text": "Maďarsko chce, aby EU přehodnotila vztahy s Ukrajinou https://t.co/O13T48PB4u"
  },
  {
    "id": 917755227582943200,
    "created_at": "2017-10-10 14:14:31",
    "text": "Projev pana prezidenta při plénu Parlamentního shromáždění Rady Evropy: https://t.co/Vh6ypfYxpb"
  },
  {
    "id": 917732313181671400,
    "created_at": "2017-10-10 12:43:28",
    "text": "Už se zase zhroutil při projevu pana prezidenta. Přímý přenos ČST Praha: https://t.co/kZH4BcJmTf https://t.co/BVbk1dk7ye"
  },
  {
    "id": 917709091585261600,
    "created_at": "2017-10-10 11:11:12",
    "text": "RT @iDNEScz: Zeman při svém projevu řekl, že protiruské sankce nefungují a místo toho navrhl větší snahu o dialog mezi občany. https://t.co…"
  },
  {
    "id": 917700199476289500,
    "created_at": "2017-10-10 10:35:52",
    "text": "ŽIVĚ: Projev prezidenta Miloše Zemana před Parlamentním shromážděním Rady Evropy https://t.co/6FnZRfrjdM"
  },
  {
    "id": 917698178425720800,
    "created_at": "2017-10-10 10:27:50",
    "text": "Právě teď. Pan prezident pronáší projev před Parlamentním shromážděním Rady Evropy. https://t.co/yBrUBLraTj"
  },
  {
    "id": 917683380237623300,
    "created_at": "2017-10-10 09:29:02",
    "text": "https://t.co/Zfpew83e5C"
  },
  {
    "id": 917680186832883700,
    "created_at": "2017-10-10 09:16:20",
    "text": "Pan prezident se ve Štrasburku setkal s předsedou Parlamentního shromáždění Rady Evropy a s generálním tajemníkem R… https://t.co/TsDQyAjo52"
  },
  {
    "id": 917460907889918000,
    "created_at": "2017-10-09 18:45:00",
    "text": "RT @realDonaldTrump: \"President Donald J. Trump Proclaims October 9, 2017, as #ColumbusDay\" https://t.co/cbQRst4lN4"
  },
  {
    "id": 917440146185826300,
    "created_at": "2017-10-09 17:22:30",
    "text": "Pan prezident zavítal do Brna na slavnostní zahájení 59. Mezinárodního strojírenského veletrhu. https://t.co/WAYiubpBPk"
  },
  {
    "id": 917437532333371400,
    "created_at": "2017-10-09 17:12:07",
    "text": "2/2 A to konkrétně státní podnik Diamo,” uvedl pan prezident na tiskové konferenci v Brně."
  },
  {
    "id": 917437490151219200,
    "created_at": "2017-10-09 17:11:57",
    "text": "1/2 “Zastávám názor, že pokud se ukáže, že zásoby vytěžitelného lithia jsou skutečně veliké, pak by je měl těžit státní podnik."
  },
  {
    "id": 917412916982374400,
    "created_at": "2017-10-09 15:34:18",
    "text": "Brno, setkání s indickou delegací. https://t.co/9eU4QRYLmD"
  },
  {
    "id": 917397878053666800,
    "created_at": "2017-10-09 14:34:33",
    "text": "Pan prezident se v Brně setkal s gubernátorkou Vladimirské oblasti a prvním zástupcem gubernátora Sverdlovské oblas… https://t.co/Z2ylTUba3v"
  },
  {
    "id": 917365264395665400,
    "created_at": "2017-10-09 12:24:57",
    "text": "Pan prezident uskuteční v úterý dne 10.10. pracovní návštěvu ve Štrasburku. Pan prezident zde navštíví Radu Evropy: https://t.co/pkGIn1vpdL"
  },
  {
    "id": 917359531709161500,
    "created_at": "2017-10-09 12:02:10",
    "text": "RT @NewsroomCT24: Stará a mladá generace novinářů se do sebe pustila na sociálních sítích. Kvůli dalšímu příspěvku skupiny #suman. V… https…"
  },
  {
    "id": 917272079208239100,
    "created_at": "2017-10-09 06:14:40",
    "text": "Podzimní Praha pohledem z Hradu. https://t.co/v564hL3zUP"
  },
  {
    "id": 917102630744346600,
    "created_at": "2017-10-08 19:01:20",
    "text": "RT @CUTIzpravy: „Jest lithium těžší než olovo?“\n\n„Já ho prosím nevážil,“ se svým milým úsměvem odpověděl Švejk."
  },
  {
    "id": 917072838112284700,
    "created_at": "2017-10-08 17:02:57",
    "text": "RT @dominikduka: Jsem spolu s církví na straně tohoto národa a nestydím se za to. Viz glosa: https://t.co/J8tIP8GZQY #církev #národ #svatov…"
  },
  {
    "id": 916348923920478200,
    "created_at": "2017-10-06 17:06:23",
    "text": "Videozáznam pořadu “Týden s prezidentem”, TV Barrandov, čtvrtek 5.10.2017: https://t.co/yt4npv4AQj"
  },
  {
    "id": 916302631777325000,
    "created_at": "2017-10-06 14:02:26",
    "text": "Zeman je svůj a náš, v Evropě nám ho závidí, řekl v Rozstřelu Foldyna: https://t.co/F5scb9mgwA"
  },
  {
    "id": 916275558975230000,
    "created_at": "2017-10-06 12:14:51",
    "text": "Pan prezident se v pondělí 9.10. v Brně zúčastní zahájení 59. Mezinárodního strojírenského veletrhu. Program zde: https://t.co/UBFOMDubnp"
  },
  {
    "id": 916266105592795100,
    "created_at": "2017-10-06 11:37:17",
    "text": "Miloš Zeman vyjasnil PL, jak to má s tím alkoholem. A dodal: Trump mě zklamal. Jourová ve vězení? A Kalousek... https://t.co/nyEQM0nVNN"
  },
  {
    "id": 916208633586901000,
    "created_at": "2017-10-06 07:48:55",
    "text": "RT @neviditelnypes: V Evropském parlamentu rozdává politická moudra palestinská teroristka? Hnus!  https://t.co/UIUPjDxWbv (by @mrstejskal )"
  },
  {
    "id": 916024416504549400,
    "created_at": "2017-10-05 19:36:54",
    "text": "Zeman: Přímo volený prezident má mít silnější pravomoce https://t.co/jiMXkyGa3K"
  },
  {
    "id": 915947946893545500,
    "created_at": "2017-10-05 14:33:02",
    "text": "Zeman se zastal Babiše: Nás úspěšné honí „pejsci“ jako jelena, utečou ale se staženým ocasem: https://t.co/NEMuCRY2ea"
  },
  {
    "id": 915940123178610700,
    "created_at": "2017-10-05 14:01:57",
    "text": "OVTV, videozáznam tiskové konference na závěr návštěvy Ústeckého kraje: https://t.co/tiaOShdvHG https://t.co/fCc7IIpaOB"
  },
  {
    "id": 915939486764322800,
    "created_at": "2017-10-05 13:59:25",
    "text": "Momentky z tiskové konference. https://t.co/3XJZzWsgzJ"
  },
  {
    "id": 915932877862432800,
    "created_at": "2017-10-05 13:33:09",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta tisková konference na závěr návštěvy Ústeckého kraje. https://t.co/RDxMbiMHOx"
  },
  {
    "id": 915911966601904100,
    "created_at": "2017-10-05 12:10:04",
    "text": "Zeman: Já a Babiš jsme úspěšní politici. Smečka pejsků nás honí jako jelena. Ale jelen má paroží: https://t.co/tRZXfuefRb"
  },
  {
    "id": 915903676627214300,
    "created_at": "2017-10-05 11:37:07",
    "text": "Paní Ivana Zemanová si prohlédla rotundu sv. Jiří na hoře Říp. https://t.co/uvGsnqpLAj"
  },
  {
    "id": 915898113495363600,
    "created_at": "2017-10-05 11:15:01",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany ve Šluknově. https://t.co/YYh5cPdKk3"
  },
  {
    "id": 915851980739924000,
    "created_at": "2017-10-05 08:11:42",
    "text": "Pan prezident vystoupí ve čtvrtek dne 5. října 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 915850842435199000,
    "created_at": "2017-10-05 08:07:11",
    "text": "Ústí nad Labem, právě teď. Natáčení pořadu “Týden s prezidentem”. Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/ZppiqxS35A"
  },
  {
    "id": 915630815400296400,
    "created_at": "2017-10-04 17:32:52",
    "text": "Momentky z druhého dne návštěvy Ústeckého kraje. https://t.co/J3unALoy2t"
  },
  {
    "id": 915627052174385200,
    "created_at": "2017-10-04 17:17:55",
    "text": "Kouzlo krátkých vyjádření na Twitteru! https://t.co/ZqJ6AlTtAD"
  },
  {
    "id": 915626046791307300,
    "created_at": "2017-10-04 17:13:55",
    "text": "Paní Ivana Zemanová navštívila Domov pro seniory Česká Kamenice. https://t.co/mKp91zLvgS"
  },
  {
    "id": 915613841664462800,
    "created_at": "2017-10-04 16:25:25",
    "text": "RT @dominikduka: Spolu s biskupy vyjadřujeme soustrast obětem teroristického činu v Las Vegas. #církev\nhttps://t.co/HgD4bzMuCv"
  },
  {
    "id": 915605356377727000,
    "created_at": "2017-10-04 15:51:42",
    "text": "VIDEO Zeman: Když přijdou muslimové, budou se ženy kamenovat za městem https://t.co/5R0e2PXRGa"
  },
  {
    "id": 915604435975405600,
    "created_at": "2017-10-04 15:48:03",
    "text": "OVTV, videozáznam diskuse pana prezidenta s občany v Žatci: https://t.co/LcJ66tlZwA https://t.co/QKMXJBdOah"
  },
  {
    "id": 915603633680654300,
    "created_at": "2017-10-04 15:44:52",
    "text": "Z debaty pana prezidenta s občany v Žatci. https://t.co/oJMTjnZvDo"
  },
  {
    "id": 915593378431152100,
    "created_at": "2017-10-04 15:04:06",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Žatci. https://t.co/21QOFnIuu2"
  },
  {
    "id": 915568839160721400,
    "created_at": "2017-10-04 13:26:36",
    "text": "Paní Ivana Zemanová zavítala do Domu Českého Švýcarska v Krásné Lípě. https://t.co/HOO5UsMvRU"
  },
  {
    "id": 915568321524912100,
    "created_at": "2017-10-04 13:24:32",
    "text": "Paní Ivana Zemanová v Děčíně navštívila ateliér Marie Jan, P+P, postižení postiženým. https://t.co/gQiu8PpvY5 https://t.co/tetWDDr0rb"
  },
  {
    "id": 915560777200930800,
    "created_at": "2017-10-04 12:54:34",
    "text": "OVTV, videozáznam diskuse pana prezidenta se studenty středních škol v Chomutově: https://t.co/erlLlKzg6s https://t.co/V0leq2232J"
  },
  {
    "id": 915549912900743200,
    "created_at": "2017-10-04 12:11:23",
    "text": "Prezident republiky. https://t.co/fvhvfuRyRB"
  },
  {
    "id": 915549731723661300,
    "created_at": "2017-10-04 12:10:40",
    "text": "Pan prezident debatuje se studenty středních škol v Chomutově. https://t.co/C8OwEHUtF9"
  },
  {
    "id": 915544917254033400,
    "created_at": "2017-10-04 11:51:32",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se studenty středních škol v Chomutově. https://t.co/Ya9Me3EDro"
  },
  {
    "id": 915536074943934500,
    "created_at": "2017-10-04 11:16:24",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Dubí: https://t.co/MAvyXx49Bu https://t.co/fxsKytHDUY"
  },
  {
    "id": 915513446355136500,
    "created_at": "2017-10-04 09:46:29",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Dubí. https://t.co/AkCoHhfVfo"
  },
  {
    "id": 915307758106419200,
    "created_at": "2017-10-03 20:09:09",
    "text": "Šéf největšího evropského vydavatelství novin Axel Springer M. Döpfner proti vládním odhalovačům “dezinformací”: https://t.co/YSm2LhwI1M"
  },
  {
    "id": 915288147742855200,
    "created_at": "2017-10-03 18:51:14",
    "text": "RT @AndrejBabis: Střílet gumovými projektily do vlastních lidí nepatří do civilizované Evropy. https://t.co/IqRk2iY1w2"
  },
  {
    "id": 915263476867698700,
    "created_at": "2017-10-03 17:13:12",
    "text": "RT @ZEMANZNOVU2018: Prezident České republiky. Miloš Zeman. https://t.co/9QVE4Pxjnn"
  },
  {
    "id": 915260552598999000,
    "created_at": "2017-10-03 17:01:35",
    "text": "Momentky z prvního dne návštěvy Ústeckého kraje. https://t.co/El4TWUvuH0"
  },
  {
    "id": 915259749477777400,
    "created_at": "2017-10-03 16:58:23",
    "text": "Ovčáček v Bílině a v Mostě. https://t.co/9reRangg0c"
  },
  {
    "id": 915240672369750000,
    "created_at": "2017-10-03 15:42:35",
    "text": "OVTV, videozáznam setkání pana prezidenta se seniory v Mostě, které se konalo u příležitosti Dne seniorů:… https://t.co/sA0iWemXIT"
  },
  {
    "id": 915235317497647100,
    "created_at": "2017-10-03 15:21:18",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Bílině: https://t.co/pRFRGZyuUE https://t.co/J3pekRX4G4"
  },
  {
    "id": 915234086528192500,
    "created_at": "2017-10-03 15:16:25",
    "text": "Sledujte důvěryhodnější zdroje než ČT, doporučil Miloš Zeman lidem na náměstí v Bílině. A pokračoval... https://t.co/XEwuCmRYTZ"
  },
  {
    "id": 915231157855428600,
    "created_at": "2017-10-03 15:04:46",
    "text": "Právě teď živě z Mostu na OVTV prostřednictvím FB pana prezidenta setkání u příležitosti Dne seniorů. https://t.co/dA8Hz3VPma"
  },
  {
    "id": 915227745390665700,
    "created_at": "2017-10-03 14:51:13",
    "text": "Paní Ivana Zemanová navštívila Hospic sv. Štěpána v Litoměřicích. https://t.co/VHwvggxnMc"
  },
  {
    "id": 915213964107223000,
    "created_at": "2017-10-03 13:56:27",
    "text": "Paní Ivana Zemanová navštívila útulek Psí domov Řepnice. https://t.co/DahE8x4wHK"
  },
  {
    "id": 915212209181069300,
    "created_at": "2017-10-03 13:49:29",
    "text": "Zeman navštíví Plzeňský kraj těsně před volbami: https://t.co/wohNbqDVdL"
  },
  {
    "id": 915211853021810700,
    "created_at": "2017-10-03 13:48:04",
    "text": "Zeman na Ústecku řešil lithium. „V těžbě by se měl angažovat státní podnik,“ tvrdí: https://t.co/ssn76LXXOs"
  },
  {
    "id": 915210532780740600,
    "created_at": "2017-10-03 13:42:49",
    "text": "RT @realDonaldTrump: I am so proud of our great Country. God bless America!"
  },
  {
    "id": 915205560471040000,
    "created_at": "2017-10-03 13:23:03",
    "text": "Pan prezident debatuje s občany v Bílině. https://t.co/RBmxXRv2ci"
  },
  {
    "id": 915202860043968500,
    "created_at": "2017-10-03 13:12:20",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Bílině. https://t.co/XPAQ83wSOa"
  },
  {
    "id": 915183879140642800,
    "created_at": "2017-10-03 11:56:54",
    "text": "V těžbě lithia by se měl angažovat státní podnik, míní Zeman: https://t.co/m38sCF3VLr"
  },
  {
    "id": 915162439972479000,
    "created_at": "2017-10-03 10:31:43",
    "text": "Zeman potupil Václava Moravce a vyjádřil se k Jaromíru Soukupovi z Barrandova: https://t.co/srbErSbIYP"
  },
  {
    "id": 915155977263075300,
    "created_at": "2017-10-03 10:06:02",
    "text": "OVTV, videozáznam setkání pana prezidenta se zastupiteli Ústeckého kraje: https://t.co/alKoR39WxM https://t.co/zSVpJBUuaW"
  },
  {
    "id": 915155269629481000,
    "created_at": "2017-10-03 10:03:13",
    "text": "RT @dominikduka: Slova papeže Františka @Pontifex pro ty, kteří mi vyčítají lánskou bohoslužbu za vlast a představitele státu.\nhttps://t.co…"
  },
  {
    "id": 915141487620390900,
    "created_at": "2017-10-03 09:08:27",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zastupiteli Ústeckého kraje. https://t.co/EJCCO54d7Y"
  },
  {
    "id": 915136989384540200,
    "created_at": "2017-10-03 08:50:35",
    "text": "Pan prezident se svojí paní zahájili přivítáním s hejtmanem Oldřichem Bubeníčkem a jeho manželkou třídenní návštěvu… https://t.co/BTpkc7gwaM"
  },
  {
    "id": 914971591385239600,
    "created_at": "2017-10-02 21:53:21",
    "text": "Co na sebe práskl Jiří Ovčáček? Sledovali jsme Instinkty: https://t.co/vMM7ccfc1r"
  },
  {
    "id": 914891350654509000,
    "created_at": "2017-10-02 16:34:30",
    "text": "Zeman nepoleví. V kraji navštíví hned sedm měst: https://t.co/65YzhzI2iw"
  },
  {
    "id": 914873228082008000,
    "created_at": "2017-10-02 15:22:29",
    "text": "Pan prezident zaslal v pondělí dne 2. října 2017 kondolenční dopis Donaldu Trumpovi, prezidentovi USA: https://t.co/kpwmYgcks3"
  },
  {
    "id": 914857346676949000,
    "created_at": "2017-10-02 14:19:23",
    "text": "Hosty Jaromíra Soukupa budou Ovčáček, Ridi a Hunčárová: https://t.co/5hrIDpkPC0"
  },
  {
    "id": 914821290355249200,
    "created_at": "2017-10-02 11:56:06",
    "text": "Podívejte se, jak to vypadá za kamerou pořadu TÝDEN s prezidentem: https://t.co/gJDFWpy0HW"
  },
  {
    "id": 914813953900982300,
    "created_at": "2017-10-02 11:26:57",
    "text": "Obrovská tragédie, strašlivý, zrůdný zločin...  Buďme v mysli a v modlitbách s rodinami a blízkými obětí a raněných."
  },
  {
    "id": 914812577183600600,
    "created_at": "2017-10-02 11:21:29",
    "text": "RT @realDonaldTrump: My warmest condolences and sympathies to the victims and families of the terrible Las Vegas shooting. God bless you!"
  },
  {
    "id": 914775153925660700,
    "created_at": "2017-10-02 08:52:47",
    "text": "Díky deníku PRÁVO se sbírka karikatur opět rozrostla! https://t.co/6TpmwLc02f"
  },
  {
    "id": 914769392029888500,
    "created_at": "2017-10-02 08:29:53",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Ústeckém kraji ve dnech 3.-5.10.2017: https://t.co/sAciDW7J1H https://t.co/8D8XTkKFjB"
  },
  {
    "id": 914586140136570900,
    "created_at": "2017-10-01 20:21:42",
    "text": "RT @CUTIzpravy: Ano, už je to tady!\n\nEurohujeři našli výmluvu.\n\nZa násilí v Katalánsku může...\n\n...PUTIN."
  },
  {
    "id": 914541089239044100,
    "created_at": "2017-10-01 17:22:41",
    "text": "RT @CUTIzpravy: Evropský sen skončil 1.10.2017 tvrdým procitnutím."
  },
  {
    "id": 914495999699247100,
    "created_at": "2017-10-01 14:23:31",
    "text": "RT @CUTIzpravy: Ve Španělsku nám nazorně ukazují, jak s námi zatočí, když budeme \"zlobit\". #slavime17listopad1989"
  },
  {
    "id": 914495745478275100,
    "created_at": "2017-10-01 14:22:30",
    "text": "RT @MirekTopolanek: Bravo Primasi český, bravo Dominiku! Že se kázání nelíbí levicovým vítačům mě nepřekvapuje. \nhttps://t.co/r3gVHuuBZG"
  },
  {
    "id": 914438515081072600,
    "created_at": "2017-10-01 10:35:06",
    "text": "RT @CUTIzpravy: 99 eurohujerů ze 100 doporučuje: Evropské hodnoty se nejlépe prosazují prostřednictvím těžkooděnců. https://t.co/BeuSFTiyeX"
  },
  {
    "id": 914400722040614900,
    "created_at": "2017-10-01 08:04:55",
    "text": "Prezident republiky gratuloval čínskému prezidentovi: https://t.co/QAVicq7A2F"
  },
  {
    "id": 914400404301021200,
    "created_at": "2017-10-01 08:03:39",
    "text": "RT @StandWithUs: #Israel wishes #China a Happy National Day! \n国庆节快乐 https://t.co/TV3ZisnSvd"
  },
  {
    "id": 914381390338248700,
    "created_at": "2017-10-01 06:48:06",
    "text": "RT @realDonaldTrump: 19,000 RESPECTING our National Anthem! #StandForOurAnthem🇺🇸 https://t.co/czutyGaMQV"
  },
  {
    "id": 914214252667424800,
    "created_at": "2017-09-30 19:43:57",
    "text": "RT @AFP: #OnThisDay in 1938, British, French, and Italian leaders held talks with Adolf Hitler and signed the Munich Pact which ceded Czech…"
  },
  {
    "id": 914214073272819700,
    "created_at": "2017-09-30 19:43:15",
    "text": "RT @StandWithUs: Yad Vashem showcases handmade #YomKippur prayer book. https://t.co/PapsQAiDBU"
  },
  {
    "id": 914126851613880300,
    "created_at": "2017-09-30 13:56:39",
    "text": "Stojí za to přečíst a přemýšlet. Snad to nebude pro místní osazenstvo příliš. https://t.co/dr9BoDpszr"
  },
  {
    "id": 914124331839574000,
    "created_at": "2017-09-30 13:46:38",
    "text": "Žijeme v krásné zemi. Petrovice. Kostelní tajemství. https://t.co/O99xHxfUuF"
  },
  {
    "id": 914121419436544000,
    "created_at": "2017-09-30 13:35:04",
    "text": "Vzpomínky na NDR. https://t.co/ywsRhKlBjb"
  },
  {
    "id": 914042664537985000,
    "created_at": "2017-09-30 08:22:07",
    "text": "Miliony pro Drahošovu kampaň. Od podnikatele spojeného s advokátem Pokorným i privatizátorů z Mostecké uhelné: https://t.co/yfdvApWwxn"
  },
  {
    "id": 913992323280900100,
    "created_at": "2017-09-30 05:02:05",
    "text": "RT @realDonaldTrump: My thoughts are with all those observing Yom Kippur, the holiest day of the Jewish year. https://t.co/0LuZCZl29D"
  },
  {
    "id": 913992156070793200,
    "created_at": "2017-09-30 05:01:25",
    "text": "Mirek nebo Ivan, TOP 09 nebo Pirát. Jednota: Z těch tří, o kterých jste mluvil, mi nejschůdnější přijde pan Drahoš (I. Bartoš, iDNES, 30.9.)"
  },
  {
    "id": 913773598250356700,
    "created_at": "2017-09-29 14:32:57",
    "text": "Média se ptají, co říkám na reakce. Tedy: Žádnou věcnou kritiku jsem nezaznamenal. Ideově vykřikují k Bruselu servilní politici a novináři."
  },
  {
    "id": 913765509124026400,
    "created_at": "2017-09-29 14:00:48",
    "text": "RT @CUTIzpravy: Během výletu jsem si udělal radost za 70 Kč. Čepice ČSLA, Tonak, vzor 1987. https://t.co/MP66cBdmQo"
  },
  {
    "id": 913701532780068900,
    "created_at": "2017-09-29 09:46:35",
    "text": "Prezident republiky. https://t.co/wuJxWyaOzi"
  },
  {
    "id": 913692799563960300,
    "created_at": "2017-09-29 09:11:53",
    "text": "Zastoupení Evropské komise v ČR vydá jakousi trapnou výmluvu a čeští novináři už panáčkují. Mě zajímají fakta! A ta… https://t.co/ToltBX6C4s"
  },
  {
    "id": 913689977543958500,
    "created_at": "2017-09-29 09:00:40",
    "text": "Pan prezident se svojí paní navštíví ve dnech 3. – 5. října 2017 Ústecký kraj. Program naleznete zde: https://t.co/Q1EAuTPYbZ"
  },
  {
    "id": 913530551260319700,
    "created_at": "2017-09-28 22:27:10",
    "text": "RT @IsraelHatzolah: JERUSALEM: Thousands praying now at the Western wall ahead of Yom kippur tommorow. https://t.co/sqfDCaP3K8"
  },
  {
    "id": 913501490693713900,
    "created_at": "2017-09-28 20:31:42",
    "text": "Vláda promarněných příležitostí, hodnotil Zeman Sobotkův kabinet: https://t.co/GXshyI9Lpw"
  },
  {
    "id": 913501292324167700,
    "created_at": "2017-09-28 20:30:54",
    "text": "Zeman: Okamura není extremista, ale něco mu chybí. Sobotka i levice selhaly https://t.co/k2ac6UcYdr"
  },
  {
    "id": 913498302175432700,
    "created_at": "2017-09-28 20:19:01",
    "text": "Sobotkovu vládu mohu hodnotit jako vládu promarněných příležitostí, vládu čekání na reformy, které nepřišly, vládu údržbářskou,\" řekl Zeman"
  },
  {
    "id": 913497869629427700,
    "created_at": "2017-09-28 20:17:18",
    "text": "Zeman oznámil, že vyznamená zakladatele institutu robotiky při ČVUT: https://t.co/LciDIl2Zvf"
  },
  {
    "id": 913497226835619800,
    "created_at": "2017-09-28 20:14:45",
    "text": "Vztah k Izraeli je měřítko demokracie v zemi\". Prezident republiky Miloš Zeman, 28.9.2017, TV Barrandov."
  },
  {
    "id": 913496343573876700,
    "created_at": "2017-09-28 20:11:14",
    "text": "RT @CUTIzpravy: Czech president's spokesman likens EU to Third Reich in outburst over spirit ingredient: https://t.co/RltdSfbNfs"
  },
  {
    "id": 913462710683217900,
    "created_at": "2017-09-28 17:57:36",
    "text": "Ve 20:15 na TV Barrandov v pořadu \"Týden s prezidentem\" zavzpomíná pan prezident na Jana Třísku a na Květu Fialovou. https://t.co/f11PyVKBjh"
  },
  {
    "id": 913429567511171100,
    "created_at": "2017-09-28 15:45:54",
    "text": "Marek Příkazký vyměnil Ovčáčka za Idiota: https://t.co/qRCnrT7abq"
  },
  {
    "id": 913420413467791400,
    "created_at": "2017-09-28 15:09:31",
    "text": "RT @dominikduka: Slavíme #DenČeskéStátnosti. #SvatýVáclav oroduj za nás i za hlas umlčované většiny v nadcházejících volbách!\nhttps://t.co/…"
  },
  {
    "id": 913085413488721900,
    "created_at": "2017-09-27 16:58:21",
    "text": "Pokud by soukromé TV vysílaly oslavné pajány na představitele nejmenované vládní strany, RRTV by jim i včeličku do notýsku otiskla."
  },
  {
    "id": 913059549548089300,
    "created_at": "2017-09-27 15:15:35",
    "text": "Pan prezident vystoupí ve čtvrtek dne 28. září 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 913046568009429000,
    "created_at": "2017-09-27 14:24:00",
    "text": "Právě teď. Natáčení pořadu \"Týden s prezidentem\". Sledujte ve čtvrtek 28. září 2017 ve 20:15 na TV Barrandov! https://t.co/1V8NUxzqM6"
  },
  {
    "id": 913045317716729900,
    "created_at": "2017-09-27 14:19:01",
    "text": "Pan prezident přijal ve středu 27.9.2017 na Hradě na jeho žádost J. Em. Dominika kardinála Duku, arcibiskupa pražského a primase českého."
  },
  {
    "id": 913034827997368300,
    "created_at": "2017-09-27 13:37:21",
    "text": "Zeman jmenoval 28 soudců, varoval je před braním úplatků: https://t.co/nxT9qt8Iu2"
  },
  {
    "id": 913032692920397800,
    "created_at": "2017-09-27 13:28:51",
    "text": "Projev pana prezidenta při jmenování soudců: https://t.co/2pudCMkQY1"
  },
  {
    "id": 913032301113745400,
    "created_at": "2017-09-27 13:27:18",
    "text": "Pan prezident jmenoval ve středu dne 27. září 2017 na Pražském hradě 28 soudců obecných soudů České republiky:… https://t.co/NzsrogDx7v"
  },
  {
    "id": 912960640670666800,
    "created_at": "2017-09-27 08:42:33",
    "text": "Novináři jsou jako motýlci. Květinka TOP 09 uvadá, tak hledají nový kvítek, který by mohli opylovat svými moudry: https://t.co/rkWPBZ7wVA"
  },
  {
    "id": 912956375285862400,
    "created_at": "2017-09-27 08:25:36",
    "text": "Prezident Miloš Zeman se zasloužil o šťastné otevírání naší země vůči Izraeli: https://t.co/XkEZIRFavs"
  },
  {
    "id": 912928092301271000,
    "created_at": "2017-09-27 06:33:13",
    "text": "Neznámý vtipálek objednal v Respektu na mé jméno čtyři trička s Václavem Havlem. Hozenou rukavici jsem zvedl! https://t.co/nAbUDeT53n"
  },
  {
    "id": 912775692433096700,
    "created_at": "2017-09-26 20:27:38",
    "text": "Vítejte v ČR: Celkem bylo na podporu tzv. zelené energie od r. 2006 do konce r. 2016 vyplaceno téměř 250 mld. Kč. https://t.co/IgryKNFAuV"
  },
  {
    "id": 912754500775153700,
    "created_at": "2017-09-26 19:03:25",
    "text": "RT @AndrejBabis: Můj názor na výsledek německých parlamentních voleb? Němci mají z migrantů strach. https://t.co/anYNgeNixa"
  },
  {
    "id": 912738782960549900,
    "created_at": "2017-09-26 18:00:58",
    "text": "Ovčáček doporučuje: https://t.co/gATZKFhTRL https://t.co/RO42LScai5"
  },
  {
    "id": 912722107498451000,
    "created_at": "2017-09-26 16:54:42",
    "text": "RT @Milan_Chovanec: I já jsem se přidal k narozeninovým gratulantům, aneb s panem prezidentem jsme se dnes přeci jen nakonec bavili i o „ča…"
  },
  {
    "id": 912713114117972000,
    "created_at": "2017-09-26 16:18:58",
    "text": "Pan prezident přijal v úterý 26.9. na Hradě min. vnitra M. Chovance, policejního prezidenta T. Tuhého a ředitele finanční policie P. Lysáka."
  },
  {
    "id": 912685334319771600,
    "created_at": "2017-09-26 14:28:35",
    "text": "Kabaret Ovčáček miláček bude v listopadu přenášen do kin: https://t.co/jAvbrDPhIm"
  },
  {
    "id": 912613399166677000,
    "created_at": "2017-09-26 09:42:44",
    "text": "RT @FilipHorky: Prezident Zeman se dnes podle @PREZIDENTmluvci setká nejen s @Milan_Chovanec ale i s policejním prezidentem a šéfem \"finanč…"
  },
  {
    "id": 912597758573285400,
    "created_at": "2017-09-26 08:40:35",
    "text": "Stíhá nás jedna smutná zpráva za druhou... Do hereckého nebe odešla skvělá a nezapomenutelná umělkyně a nádherná žena."
  },
  {
    "id": 912592285224902700,
    "created_at": "2017-09-26 08:18:50",
    "text": "Pan prezident jmenuje ve středu dne 27. září 2017 ve 14.00 hodin na Pražském hradě 28 soudců obecných soudů ČR: https://t.co/Xrfcl2u8dT"
  },
  {
    "id": 912433946293612500,
    "created_at": "2017-09-25 21:49:39",
    "text": "Zářijové noci vyvolávají v řadách Pražské kavárny temné vášně! https://t.co/TFIxDZ4zaz"
  },
  {
    "id": 912429629666971600,
    "created_at": "2017-09-25 21:32:30",
    "text": "Petr Bystroň vyvrací dezinformace, které se o AfD šíří: https://t.co/C8LR1IH1tK"
  },
  {
    "id": 912354372193079300,
    "created_at": "2017-09-25 16:33:27",
    "text": "RT @neviditelnypes: Nezávislá, nezisková a nevládní organizace „Nenávist zdarma“ má náročný úkol https://t.co/fbHKNs5tdk"
  },
  {
    "id": 912349446977065000,
    "created_at": "2017-09-25 16:13:53",
    "text": "Znovu raději místní twitterové osazenstvo poučím. Mezi diplomatickou korespondenci patří mj. pověřovací listiny, de… https://t.co/pKvlVl9aeG"
  },
  {
    "id": 912344191350558700,
    "created_at": "2017-09-25 15:53:00",
    "text": "Velká gratulace od Ovčáčka! https://t.co/x0j7DZZfZX"
  },
  {
    "id": 912342788586577900,
    "created_at": "2017-09-25 15:47:25",
    "text": "Pan prezident zaslal v pondělí 25. září gratulační telegram Angele Merkelové, kancléřce Spolkové republiky Německo: https://t.co/S8YrPwG9Xj"
  },
  {
    "id": 912332907854929900,
    "created_at": "2017-09-25 15:08:10",
    "text": "Zeman poslal Merkelové telegram. Co mu k narozeninám popřál čínský prezident? https://t.co/FMEVEWnMIV"
  },
  {
    "id": 912301936430522400,
    "created_at": "2017-09-25 13:05:06",
    "text": "RT @realDonaldTrump: #StandForOurAnthem"
  },
  {
    "id": 912294216864321500,
    "created_at": "2017-09-25 12:34:25",
    "text": "Zeman popřál Merkelové štěstí v nelehkém jednání o nové koalici: https://t.co/toAQZ1jUYk"
  },
  {
    "id": 912217599571841000,
    "created_at": "2017-09-25 07:29:58",
    "text": "Pan prezident převezme v úterý 26. září 2017 od 14.00 na Hradě pověřovací listiny těchto nových velvyslanců v ČR: https://t.co/qmkaMlOFau"
  },
  {
    "id": 912215898961915900,
    "created_at": "2017-09-25 07:23:13",
    "text": "Bolestná zpráva o odchodu velkého umělce. Postupně nás opouští generace herců a tvůrců, která opravdu uměla."
  },
  {
    "id": 912030520330133500,
    "created_at": "2017-09-24 19:06:35",
    "text": "RT @rudolf_jindrak: Gratuluji A. Merkel k vítězství! CZ-DE vztahy budou i nadále výborné. Stabilita a předvídatelnost DE = důvod k oslavě i…"
  },
  {
    "id": 912026905171374100,
    "created_at": "2017-09-24 18:52:13",
    "text": "Gratulace paní kancléřce k vítězství ve volbách. S paní kancléřkou vedl pan prezident otevřený dialog při její loňs… https://t.co/JefgMUjcSG"
  },
  {
    "id": 911974433232965600,
    "created_at": "2017-09-24 15:23:43",
    "text": "RT @ZEMANZNOVU2018: Narozeniny má Miloš Zeman sice až ve čtvrtek, ale malá oslava s rodinou a nejbližšími se koná už dnes. Pane prezidente,…"
  },
  {
    "id": 911945630309929000,
    "created_at": "2017-09-24 13:29:16",
    "text": "Pan prezident se v neděli odpoledne v Lánech setkal u příležitosti svých 73. narozenin s rodinou a s nejbližšími sp… https://t.co/UQ6BSW5Hzc"
  },
  {
    "id": 911942742896496600,
    "created_at": "2017-09-24 13:17:47",
    "text": "Ocenění \"Bojovník za pravdu\", které pan prezident obdržel v New Yorku v pondělí 18. září 2017. https://t.co/qsaGaLEGv7"
  },
  {
    "id": 911581628962615300,
    "created_at": "2017-09-23 13:22:51",
    "text": "Některé věci bychom si měli velmi dobře pamatovat. https://t.co/BGKkjEHtFI"
  },
  {
    "id": 911575320645525500,
    "created_at": "2017-09-23 12:57:47",
    "text": "Kritika státního zastupitelství. Chybí např. speciál zaměřený na finanční kriminalitu."
  },
  {
    "id": 911575280980054000,
    "created_at": "2017-09-23 12:57:37",
    "text": "Témata jednání: reforma justice, vězeňství, elektronické náramky, pozitivně o zrychlení soudního řízení."
  },
  {
    "id": 911574400729743400,
    "created_at": "2017-09-23 12:54:08",
    "text": "V sobotu 23.9. se v Lánech konala porada expertního týmu pana prezidenta za účasti min. sprav. R. Pelikána a jeho předchůdkyně H. Válkové."
  },
  {
    "id": 911556445639987200,
    "created_at": "2017-09-23 11:42:47",
    "text": "Výstava \"Plody podzimu\", Kadlín. Ideální sobota! https://t.co/0VbM9c62Rn"
  },
  {
    "id": 911290176726556700,
    "created_at": "2017-09-22 18:04:43",
    "text": "https://t.co/pIxAdgsjq5"
  },
  {
    "id": 911284677469761500,
    "created_at": "2017-09-22 17:42:52",
    "text": "Paní Ivana Zemanová zavítala do Španělského sálu Hradu na akci Policista roku. https://t.co/Vt3aLbHkzA"
  },
  {
    "id": 911242834858168300,
    "created_at": "2017-09-22 14:56:36",
    "text": "RT @PanenkaRadim: Od vydání knihy Tato země je naše uplynul víc než rok a stále je o ni zájem! Foto z knihkupectví Luxor na Václaváku. http…"
  },
  {
    "id": 911153408815583200,
    "created_at": "2017-09-22 09:01:15",
    "text": "Videozáznam pořadu \"Týden s prezidentem\", TV Barrandov, čtvrtek 21. září 2017, 20:15: https://t.co/6Bsg2bzgnx"
  },
  {
    "id": 910865406121926700,
    "created_at": "2017-09-21 13:56:50",
    "text": "Právě teď. Lány. Natáčení pořadu \"Týden s prezidentem\". Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/4Gq61Vf2X9"
  },
  {
    "id": 910833002451755000,
    "created_at": "2017-09-21 11:48:04",
    "text": "Pan prezident vystoupí ve čtvrtek dne 21. září 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 910694863506731000,
    "created_at": "2017-09-21 02:39:10",
    "text": "Praha, přílet po mimořádně úspešné návštěvě USA. Dnes natáčení pořadu TV Barrandov \"Týden s prezidentem\". https://t.co/tTt6JCKfgD"
  },
  {
    "id": 910552619562733600,
    "created_at": "2017-09-20 17:13:56",
    "text": "Návštěva USA končí, za chvíli odlétáme do České republiky. https://t.co/zm2ww1pAfZ"
  },
  {
    "id": 910537763090583600,
    "created_at": "2017-09-20 16:14:54",
    "text": "Zeman: Putin mě pozval do Soči, je to vyznamenání https://t.co/9HAOyI9h5y"
  },
  {
    "id": 910533917098303500,
    "created_at": "2017-09-20 15:59:37",
    "text": "Prezidentský rok 2017 ve fotografii. https://t.co/5AjAABKcMj"
  },
  {
    "id": 910527028692242400,
    "created_at": "2017-09-20 15:32:15",
    "text": "Pan prezident se v České národní budově v New Yorku setkal s krajany. Poslední, ale velmi důležitý bod programu pra… https://t.co/3yU8qjWqOO"
  },
  {
    "id": 910514698981961700,
    "created_at": "2017-09-20 14:43:15",
    "text": "New York, Česká národní budova, terasa. S velvyslankyní ČR při OSN Marií Chatardovou. https://t.co/DClTvkOxit"
  },
  {
    "id": 910497054824296400,
    "created_at": "2017-09-20 13:33:08",
    "text": "Zeman se sešel s Trumpem. Fotku usměvavých státníků zveřejnil Ovčáček: https://t.co/5SmbiOczCH"
  },
  {
    "id": 910491439766876200,
    "created_at": "2017-09-20 13:10:50",
    "text": "Pan prezident se v New Yorku setkal s generálním tajemníkem OSN Antóniem Guterresem. https://t.co/64LE06ZmlL"
  },
  {
    "id": 910476857434402800,
    "created_at": "2017-09-20 12:12:53",
    "text": "Slavnostní recepce v New Yorku, úterý večer. Pan prezident s prezidentem USA Donaldem Trumpem @POTUS a jeho manželk… https://t.co/Ql7GO8hAtu"
  },
  {
    "id": 910447812462116900,
    "created_at": "2017-09-20 10:17:28",
    "text": "Janda, který má blízko k vládním ČSSD a KDU-ČSL, vyzval na FB k vystřílení milionů Rusů na Ukrajině. Po mé reakci s… https://t.co/WcuPSKgqx0"
  },
  {
    "id": 910291776120016900,
    "created_at": "2017-09-19 23:57:26",
    "text": "RT @Algemeiner: Algemeiner Unveils 4th Annual ‘J100’ List at Lavish Gala Featuring Miloš Zeman, Yaacov Agam and Stuart and Robbi... https:/…"
  },
  {
    "id": 910289067308351500,
    "created_at": "2017-09-19 23:46:40",
    "text": "RT @FilipHorky: Česká reprezentace na záběrech ve vysílání CNN. https://t.co/5Gfo4Qi7mv"
  },
  {
    "id": 910279287370141700,
    "created_at": "2017-09-19 23:07:48",
    "text": "Momentka z New Yorku. OSN, Donald Trump, prázdná místa KLDR a prezidentská hůlka. https://t.co/rPcHgaDK2W"
  },
  {
    "id": 910276447562076200,
    "created_at": "2017-09-19 22:56:31",
    "text": "RT @Algemeiner: ‘I Am a Jew,’ Czech President Milos Zeman Tells Algemeiner Gala https://t.co/PWhiRJnOIs"
  },
  {
    "id": 910265166918504400,
    "created_at": "2017-09-19 22:11:42",
    "text": "RT @AmbMeron: @CzechPresident Miloš Zeman receives award from @Algemeiner and calls on democratic governments 2 move embassies from Tel-Avi…"
  },
  {
    "id": 910264694186889200,
    "created_at": "2017-09-19 22:09:49",
    "text": "GLOSA: Bravo, pane prezidente. Bravo! https://t.co/hTCkZWV4cA"
  },
  {
    "id": 910264600704294900,
    "created_at": "2017-09-19 22:09:27",
    "text": "RT @Algemeiner: Algemeiner J100 Gala, 2017: President Miloš Zeman accepts Warrior for Truth Award: https://t.co/v4BeLP4Yiw via @YouTube"
  },
  {
    "id": 910226713883312100,
    "created_at": "2017-09-19 19:38:54",
    "text": "Na závěr jednání obdržel pan prezident od korejského protějšku maskoty XXIII. zimních olympijských her v Pchjongčch… https://t.co/Gi0dAyihcX"
  },
  {
    "id": 910213211298893800,
    "created_at": "2017-09-19 18:45:15",
    "text": "Pan prezident se v sídle OSN v New Yorku setkal s prezidentem Korejské republiky Mun Če-inem. https://t.co/tuC6SAOPj3"
  },
  {
    "id": 910205632871112700,
    "created_at": "2017-09-19 18:15:08",
    "text": "Zeman pronesl burcující projev v OSN: Vytvořila se anticivilizace https://t.co/OvPPl1pBwO"
  },
  {
    "id": 910182640808071200,
    "created_at": "2017-09-19 16:43:46",
    "text": "Zeman vyzval OSN: Bojujte už konečně s terorem! A varoval před vrahy mezi uprchlíky https://t.co/dYkNvgGeyg"
  },
  {
    "id": 910180793695326200,
    "created_at": "2017-09-19 16:36:26",
    "text": "Krátce před projevem na Valném shromáždění OSN v New Yorku. Neformální setkání se slovenským prezidentem Andrejem K… https://t.co/Sh7lAkKkmu"
  },
  {
    "id": 910179558195912700,
    "created_at": "2017-09-19 16:31:31",
    "text": "Zeman v OSN vyzval k zastavení terorismu a migrace: https://t.co/R2qkkN30ep"
  },
  {
    "id": 910177615243341800,
    "created_at": "2017-09-19 16:23:48",
    "text": "OVTV, videozáznam vystoupení pana prezidenta na Valném shromáždění v New Yorku: https://t.co/cde7uJdQ9d https://t.co/UhdbV3E6LW"
  },
  {
    "id": 910171293806399500,
    "created_at": "2017-09-19 15:58:41",
    "text": "Právě teď! Projev pana prezidenta na Valném shromáždění OSN v New Yorku. Sledujte živě na OVTV, prostřednictvím FB… https://t.co/wZP96hVnTn"
  },
  {
    "id": 910169074457555000,
    "created_at": "2017-09-19 15:49:52",
    "text": "Momentky z projevu prezidenta USA Donalda Trumpa na Valném shromáždění OSN. Česká republika v první řadě. https://t.co/gjon61hIH5"
  },
  {
    "id": 910159620961898500,
    "created_at": "2017-09-19 15:12:18",
    "text": "Směšní novináři řadu hodin úporně vyhrabávali někoho, kdo by znectil ocenění pana prezidenta. Jednoho pána našli: https://t.co/P19WKN2nSr"
  },
  {
    "id": 910143496664879100,
    "created_at": "2017-09-19 14:08:13",
    "text": "New York. Valné shromáždění OSN. Právě teď. Hovoří prezident USA Donald Trump. https://t.co/pPsSWqut2l"
  },
  {
    "id": 910116153170825200,
    "created_at": "2017-09-19 12:19:34",
    "text": "Zeman dostal v New Yorku cenu za podporu Židů a zařadil se mezi 100 vlivných osobností: https://t.co/Hr3T9U6rut"
  },
  {
    "id": 910099181494292500,
    "created_at": "2017-09-19 11:12:08",
    "text": "RT @CT24zive: Zeman dostal v New Yorku cenu za podporu Izraele. A vyzval k přesunu ambasád do Jeruzaléma\nhttps://t.co/zlyz8YS5yQ https://t.…"
  },
  {
    "id": 909991584703352800,
    "created_at": "2017-09-19 04:04:35",
    "text": "Prezident Zeman dnes vystoupí na zasedání Valného shromáždění OSN: https://t.co/VCDzIzfYZP"
  },
  {
    "id": 909979449214545900,
    "created_at": "2017-09-19 03:16:21",
    "text": "Pan prezident v New Yorku obdržel za podporu Izraele cenu Bojovník za pravdu. https://t.co/rVsXOQ6Dbn"
  },
  {
    "id": 909976378400964600,
    "created_at": "2017-09-19 03:04:09",
    "text": "Český prezident v projevu vyzval demokratické země, aby přesunuly své ambasády z Tel Avivu do Jeruzaléma: https://t.co/viwjawFMJp"
  },
  {
    "id": 909966236783607800,
    "created_at": "2017-09-19 02:23:51",
    "text": "Bojovník za pravdu Miloš Zeman rozbouřil New York: Obří sál vestoje burácel při každém jeho slově. https://t.co/WzRiawFKrU"
  },
  {
    "id": 909952415016915000,
    "created_at": "2017-09-19 01:28:56",
    "text": "OVTV, videozáznam projevu pana prezidenta při příležitosti převzetí ceny “Warrior for Truth” v New Yorku:… https://t.co/QitSM2lc97"
  },
  {
    "id": 909947640317694000,
    "created_at": "2017-09-19 01:09:58",
    "text": "Právě teď OVTV živě z New Yorku, prostřednictvím FB pana prezidenta, slavnostní předání ceny Bojovník za pravdu pan… https://t.co/9of056Xbpr"
  },
  {
    "id": 909922014751805400,
    "created_at": "2017-09-18 23:28:08",
    "text": "Pan prezident v New Yorku převezme během slavnostního večera cenu Bojovník za pravdu. https://t.co/HsBSxvRrBW"
  },
  {
    "id": 909899076501721100,
    "created_at": "2017-09-18 21:56:59",
    "text": "Perný den Miloše Zeman v New Yorku. Několik diplomatů, oběd s paní Trumpovou a nakonec cena za pravdu: https://t.co/WMEvPsRT5P"
  },
  {
    "id": 909874245630664700,
    "created_at": "2017-09-18 20:18:19",
    "text": "Pan prezident se v sídle OSN v New Yorku neplánovaně setkal s ministrem zahraničí Ruské federace Sergejem Lavrovem. https://t.co/aZhOD8ba2D"
  },
  {
    "id": 909863586889130000,
    "created_at": "2017-09-18 19:35:58",
    "text": "2/2 Diskutovali o možnostech zefektivnění boje s mezinárodním terorismem. Pan prezident nový úřad OSN podpořil."
  },
  {
    "id": 909863509202219000,
    "created_at": "2017-09-18 19:35:39",
    "text": "1/2 Pan prezident se v New Yorku setkal s vedoucím Protiteroristického úřadu OSN Vladimirem Voronkovem."
  },
  {
    "id": 909856934165139500,
    "created_at": "2017-09-18 19:09:32",
    "text": "Pan prezident s předsedou VS OSN M. Lajčákem hovořil také o reformě OSN a novém Protiteroristickém úřadě OSN."
  },
  {
    "id": 909856577649283100,
    "created_at": "2017-09-18 19:08:07",
    "text": "Pan prezident na jednání s předsedou VS OSN M. Lajčákem podpořil kandidaturu ministryně pro místní rozvoj K. Šlechtové do čela UN Habitat."
  },
  {
    "id": 909849123762921500,
    "created_at": "2017-09-18 18:38:29",
    "text": "Pan prezident se v New Yorku setkal s Miroslavem Lajčákem, předsedou Valného shromáždění OSN. https://t.co/FuvT8bwTc2"
  },
  {
    "id": 909848347082620900,
    "created_at": "2017-09-18 18:35:24",
    "text": "Paní Ivana Zemanová se zúčastnila slavnostního galavečera České zbrojovky ve Španělském sále Hradu. https://t.co/wVZTNfJw3B"
  },
  {
    "id": 909843395815854100,
    "created_at": "2017-09-18 18:15:44",
    "text": "Cenu Bojovník za pravdu udělí panu prezidentovi americký fond Gershon Jacobson Jewish Continuity Foundation: https://t.co/ioPfDcy3vf"
  },
  {
    "id": 909835156294336500,
    "created_at": "2017-09-18 17:42:59",
    "text": "Zeman v USA poobvědval s Ivanou Trumpovou. Večer převezme cenu pro bojovníky za pravdu: https://t.co/uRNvpK0V2K"
  },
  {
    "id": 909833931679260700,
    "created_at": "2017-09-18 17:38:07",
    "text": "3/3 Paní Ivana Trumpová vzpomněla nedávného setkání na Hradě a uvedla, že do České republiky se vždy velmi ráda vrací."
  },
  {
    "id": 909833750623768600,
    "created_at": "2017-09-18 17:37:24",
    "text": "2/3 Pan prezident informoval paní Ivanu Trumpovou o tématech, o kterých bude hovořit ve svém projevu na Valném shromáždění OSN."
  },
  {
    "id": 909833686706683900,
    "created_at": "2017-09-18 17:37:09",
    "text": "1/3 Pan prezident s paní Ivanoou Trumpovou debatoval o problému migrace a aktuální situaci v USA po zvolení Donalda Trumpa prezidentem."
  },
  {
    "id": 909815624762880000,
    "created_at": "2017-09-18 16:25:23",
    "text": "Dárek pana prezidenta pro paní Ivanu Trumpovou. https://t.co/eSzZ38RbAC"
  },
  {
    "id": 909814660244926500,
    "created_at": "2017-09-18 16:21:33",
    "text": "New York, hotel Plaza. Pan prezident pozval v pravé poledne na přátelský oběd paní Ivanu Trumpovou. https://t.co/I3ojbqImyw"
  },
  {
    "id": 909532012851208200,
    "created_at": "2017-09-17 21:38:24",
    "text": "Momentka z New Yorku. https://t.co/Lr5H6NbEd6"
  },
  {
    "id": 909509221368115200,
    "created_at": "2017-09-17 20:07:50",
    "text": "New York, JFK. Krátce po přistání. https://t.co/1KaatyAjcx"
  },
  {
    "id": 909408166483513300,
    "created_at": "2017-09-17 13:26:17",
    "text": "Mezipřistání. Island, Keflavík. https://t.co/xI4eDYnkte"
  },
  {
    "id": 909352339861114900,
    "created_at": "2017-09-17 09:44:27",
    "text": "Za chvíli odlétáme do USA! Program návštěvy pana prezidenta naleznete zde: https://t.co/iWJB7Rdmhi https://t.co/C6bEOFWeOk"
  },
  {
    "id": 909292608375152600,
    "created_at": "2017-09-17 05:47:06",
    "text": "Zeman dnes odlétá do New Yorku, vystoupí v OSN a dostane cenu: https://t.co/KKMiQDvomd"
  },
  {
    "id": 909107874084872200,
    "created_at": "2017-09-16 17:33:02",
    "text": "Pan prezident zavítal na tradiční akci Masarykova vatra v Lánech. https://t.co/YpM40cAtgG"
  },
  {
    "id": 908993717675155500,
    "created_at": "2017-09-16 09:59:25",
    "text": "RT @dominikduka: #Kříž je našim symbolem. Ztratíme-li symboly, ztratíme svou identitu, sami sebe. Více v komentáři pro @RadioProglas \nhttps…"
  },
  {
    "id": 908707874075004900,
    "created_at": "2017-09-15 15:03:34",
    "text": "Algemeiner Set to Unveil New ‘J100’ List at Annual New York City Gala: https://t.co/fL9rl7a654"
  },
  {
    "id": 908707696068657200,
    "created_at": "2017-09-15 15:02:52",
    "text": "Czech President Milos Zeman and renowned Israeli artist Yaacov Agam will be receiving The Algemeiner’s prestigious “Warrior for Truth” award"
  },
  {
    "id": 908706275382448100,
    "created_at": "2017-09-15 14:57:13",
    "text": "Zeman se v USA potká s korejským prezidentem a Ivanou Trumpovou, převezme cenu amerického židovského fondu: https://t.co/Bg5nE4gi9B"
  },
  {
    "id": 908699826539368400,
    "created_at": "2017-09-15 14:31:36",
    "text": "Zeman míří do USA: Převezme cenu, poobědvá s Ivanou Trumpovou, v OSN vystoupí mezi prvními https://t.co/74aeJw0Yeu"
  },
  {
    "id": 908688252936360000,
    "created_at": "2017-09-15 13:45:36",
    "text": "Pan prezident 17. - 20.9. navštíví USA. Převezme cenu \"Bojovník za pravdu\" a vystoupí v OSN. Další podrobnosti zde: https://t.co/iWJB7Rdmhi"
  },
  {
    "id": 908670638298140700,
    "created_at": "2017-09-15 12:35:37",
    "text": "RT @JanThompsonFCO: Today is #BattleofBritainDay - our eternal thanks to the brave Czechoslovaks who joined us #lestweforget https://t.co/s…"
  },
  {
    "id": 908651001313468400,
    "created_at": "2017-09-15 11:17:35",
    "text": "RT @realDonaldTrump: We have made more progress in the last nine months against ISIS than the Obama Administration has made in 8 years.Must…"
  },
  {
    "id": 908650947768971300,
    "created_at": "2017-09-15 11:17:22",
    "text": "RT @realDonaldTrump: The travel ban into the United States should be far larger, tougher and more specific-but stupidly, that would not be…"
  },
  {
    "id": 908650942526091300,
    "created_at": "2017-09-15 11:17:21",
    "text": "RT @realDonaldTrump: Another attack in London by a loser terrorist.These are sick and demented people who were in the sights of Scotland Ya…"
  },
  {
    "id": 908612991041638400,
    "created_at": "2017-09-15 08:46:32",
    "text": "Videozáznam pořadu \"Týden s prezidentem\", čtvrtek 14.9.2017, 20:15, TV Barrandov: https://t.co/3AxLaf8Zdy"
  },
  {
    "id": 908440003902165000,
    "created_at": "2017-09-14 21:19:09",
    "text": "„Evropa se musí stát dočasně pevností. Víte před kým!“ Prezident Zeman před kamerou ztrhal projev Junckera: https://t.co/UVAyUZoKWd"
  },
  {
    "id": 908344104052035600,
    "created_at": "2017-09-14 14:58:05",
    "text": "Pan prezident přijal ve čtvrtek dne 14. září 2017 na Pražském hradě na jeho žádost předsedu hnutí ANO Andreje Babiše."
  },
  {
    "id": 908343888045379600,
    "created_at": "2017-09-14 14:57:13",
    "text": "Setkání na Hradě právě skončilo! https://t.co/DinZlPGP2c"
  },
  {
    "id": 908304003699761200,
    "created_at": "2017-09-14 12:18:44",
    "text": "Právě teď. Natáčení pořadu \"Týden s prezidentem\". Sledujte dnes ve 20:15 na TV Barrandov! https://t.co/s5HXmFBm5s"
  },
  {
    "id": 908257290712748000,
    "created_at": "2017-09-14 09:13:07",
    "text": "Pan prezident vystoupí ve čtvrtek dne 14. září 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 907962109115469800,
    "created_at": "2017-09-13 13:40:10",
    "text": "Pan prezident přijal ve středu dne 13. září 2017 na Pražském hradě na její žádost ministryni pro místní rozvoj Karlu Šlechtovou."
  },
  {
    "id": 907959556998930400,
    "created_at": "2017-09-13 13:30:02",
    "text": "VÍME PRVNÍ Babiš jde za Zemanem: https://t.co/OIxl7up2di"
  },
  {
    "id": 907954482964770800,
    "created_at": "2017-09-13 13:09:52",
    "text": "Pan prezident přijal ve středu dne 13. září 2017 Alenu Vitáskovou, bývalou předsedkyni ERÚ. Podrobnosti zde: https://t.co/27HAl1NaQR"
  },
  {
    "id": 907673266969616400,
    "created_at": "2017-09-12 18:32:25",
    "text": "Úterní momentka. Poslední úprava před slavnostním přivítáním německého prezidenta na I. nádvoří Hradu. https://t.co/d9GXgVrcAW"
  },
  {
    "id": 907635028687048700,
    "created_at": "2017-09-12 16:00:28",
    "text": "Pan prezident přijal v úterý dne 12. září 2017 na Pražském hradě na jeho žádost ministra spravedlnosti Roberta Pelikána."
  },
  {
    "id": 907590983512195100,
    "created_at": "2017-09-12 13:05:27",
    "text": "Pan prezident podepsal v úterý dne 12. září 2017 tyto tři zákony: https://t.co/fG9NVzE4Z2"
  },
  {
    "id": 907575892280594400,
    "created_at": "2017-09-12 12:05:29",
    "text": "Pan prezident přijal v úterý dne 12. září 2017 na Pražském hradě zástupce vedení Industrial and Commercial Bank of… https://t.co/YRarzQcF5f"
  },
  {
    "id": 907571926939390000,
    "created_at": "2017-09-12 11:49:43",
    "text": "RT @karelkuceraCI: Otevřená pobočka ICBC - usnadní to vstup na trh investorum 🇨🇿 i 🇨🇳 na oba trhy!"
  },
  {
    "id": 907565515014594600,
    "created_at": "2017-09-12 11:24:15",
    "text": "Zeman se Steinmeierem jednali o migraci i o dopravě: https://t.co/NG9cmu5O3g"
  },
  {
    "id": 907565234537353200,
    "created_at": "2017-09-12 11:23:08",
    "text": "Projev pana prezidenta při tiskové konferenci u příležitosti návštěvy německého prezidenta v Praze: https://t.co/ZDcbNt2zHq"
  },
  {
    "id": 907558600708681700,
    "created_at": "2017-09-12 10:56:46",
    "text": "Setkání s Mistrem. Státního oběda, pořádaného panem prezidentem na počest prezidenta SRN, se zúčastnil také Karel G… https://t.co/Ewh3F9yqE5"
  },
  {
    "id": 907518614974222300,
    "created_at": "2017-09-12 08:17:53",
    "text": "Pan prezident přivítal na Hradě prezidenta Spolkové republiky Německo Franka-Waltera Steinmeiera. https://t.co/v08z9JGyQ7"
  },
  {
    "id": 907500472461918200,
    "created_at": "2017-09-12 07:05:47",
    "text": "V 9:30 přivítá pan prezident na I. nádvoří Hradu prezidenta Spolkové republiky Německo Franka-Waltera Steinmeiera. https://t.co/QmYTY0Lf4c"
  },
  {
    "id": 907500385249751000,
    "created_at": "2017-09-12 07:05:27",
    "text": "Před malou chvílí na Mezinárodním letišti Václava Havla přistálo zvláštní letadlo prezidenta SRN Franka-Waltera Ste… https://t.co/z5iiRvelUQ"
  },
  {
    "id": 907230243177599000,
    "created_at": "2017-09-11 13:12:00",
    "text": "Ve čtyřhře, jeden set, zvítězili Petra Kvitová a Miroslav Sklenář nad Radkem Štěpánkem a Romanem Vikem. https://t.co/HE95BMiyGv"
  },
  {
    "id": 907230018400608300,
    "created_at": "2017-09-11 13:11:06",
    "text": "V Lánech se uskutečnilo sportovní společenské odpoledne pod záštitou pana prezidenta. https://t.co/4ppGTcZbxH"
  },
  {
    "id": 907189021289443300,
    "created_at": "2017-09-11 10:28:12",
    "text": "RT @SociologPetrHam: Top09 staví kampan na boji proti tomu, co sami prosadili. https://t.co/Zau4B8Mi2Q"
  },
  {
    "id": 906973356133638100,
    "created_at": "2017-09-10 20:11:13",
    "text": "RT @CUTIzpravy: Zajímavý rozhovor i na téma HateFree Culture: https://t.co/qoyORIaJLb"
  },
  {
    "id": 906938162718617600,
    "created_at": "2017-09-10 17:51:22",
    "text": "RT @Frekvence1: I o transparentním účtu se hovořilo v Prezidentském Pressklubu. https://t.co/eZO79tfUBA"
  },
  {
    "id": 906924671676842000,
    "created_at": "2017-09-10 16:57:46",
    "text": "Neviditelné osoby, u kterých končí miliardy z OKD. Prezident Zeman na ně upozornil z rádia: https://t.co/jhTSrAngBG"
  },
  {
    "id": 906894571598172200,
    "created_at": "2017-09-10 14:58:09",
    "text": "Od 17:00 živě z Lán na Frekvenci 1 \"Prezidentský Pressklub\"! https://t.co/MpPmMRRvm1"
  },
  {
    "id": 906810052534784000,
    "created_at": "2017-09-10 09:22:18",
    "text": "Islamisté a neomarxisté jednou jsou. Nenávidí svobodu a nenávidí člověka. https://t.co/UWZai2O5Ln"
  },
  {
    "id": 906448701144649700,
    "created_at": "2017-09-09 09:26:26",
    "text": "Vztah mezi politickou korektností a radikálním islamismem musí být odhalen jako to, čím ve skutečnosti je: manželst… https://t.co/Zb97n1NDex"
  },
  {
    "id": 906207090615705600,
    "created_at": "2017-09-08 17:26:21",
    "text": "Zeman je populárnější než Babiš, ukázal průzkum pro ČSSD: https://t.co/QuSkgOZhH7"
  },
  {
    "id": 906162124266889200,
    "created_at": "2017-09-08 14:27:40",
    "text": "Miloš Zeman: Já mám Deník rád, takže vám to řeknu https://t.co/QZuaKmkaZu"
  },
  {
    "id": 906157846919860200,
    "created_at": "2017-09-08 14:10:40",
    "text": "Premiér Babiš ve vězení\". Miloš Zeman odpálil bombu kvůli Čapímu hnízdu. Přidal zásadní zprávy o šéfovi policie: https://t.co/JtfBLQ3ZBs"
  },
  {
    "id": 906114626647183400,
    "created_at": "2017-09-08 11:18:56",
    "text": "I kdyby Babiš seděl ve vazbě, Zeman by ho jmenoval předsedou vlády: https://t.co/AjBChLHXdO"
  },
  {
    "id": 906100863604809700,
    "created_at": "2017-09-08 10:24:15",
    "text": "Pan prezident vystoupí v neděli 10.9. v 17.00 v pořadu Prezidentský Pressklub na Frekvenci 1. Rozhovor bude vysílán živě z Lán."
  },
  {
    "id": 906078689615650800,
    "created_at": "2017-09-08 08:56:08",
    "text": "Zeman: Babiše jmenuji premiérem, i když bude sedět ve vazbě https://t.co/b6H5UcdAM6"
  },
  {
    "id": 906070696375312400,
    "created_at": "2017-09-08 08:24:22",
    "text": "Videozáznam pořadu \"Týden s prezidentem\", TV Barrandov, čtvrtek 7. září, 20:15: https://t.co/6yypLZWAqJ"
  },
  {
    "id": 906067465834303500,
    "created_at": "2017-09-08 08:11:32",
    "text": "Sobotka a miliardový vývar z OKD. Prezident vytáhl také neuvěřitelný kousek jeho přítele, právníka Pokorného: https://t.co/FIjvJIK2wS"
  },
  {
    "id": 905868792051458000,
    "created_at": "2017-09-07 19:02:04",
    "text": "RT @JackBMontgomery: Hungarian Prime Minister Viktor Orbán: “The Islamization of Europe is real” https://t.co/VJZyMaY52p"
  },
  {
    "id": 905790784875757600,
    "created_at": "2017-09-07 13:52:06",
    "text": "OVTV, videozáznam tiskové konference na závěr návštěvy Moravskoslezského kraje: https://t.co/YqKQJJWF2P https://t.co/MyToF4eBi4"
  },
  {
    "id": 905764973967810600,
    "created_at": "2017-09-07 12:09:32",
    "text": "Zeman kritizoval Sobotku za OKD! https://t.co/ueAo88dcrg"
  },
  {
    "id": 905756885432840200,
    "created_at": "2017-09-07 11:37:24",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Hlučíně: https://t.co/oFwi3YVCMg https://t.co/gqCCXMxGi4"
  },
  {
    "id": 905744068239642600,
    "created_at": "2017-09-07 10:46:28",
    "text": "Hlučín. Občané, státní vlajka a prezident republiky. https://t.co/qxY0khHHcm"
  },
  {
    "id": 905743771672997900,
    "created_at": "2017-09-07 10:45:17",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Hlučíně. https://t.co/TQamtHvjKo"
  },
  {
    "id": 905712204670013400,
    "created_at": "2017-09-07 08:39:51",
    "text": "Ostrava. Právě teď. Natáčení pořadu \"Týden s prezidentem\". Dnes ve 20:15 na TV Barrandov! https://t.co/kJL1Fsx2Z7"
  },
  {
    "id": 905690514254651400,
    "created_at": "2017-09-07 07:13:40",
    "text": "RT @CUTIzpravy: Pražský politický dialog: Takže už je ve vazbě? Omlouvám se, 15. září je až za týden."
  },
  {
    "id": 905511113030283300,
    "created_at": "2017-09-06 19:20:47",
    "text": "Miloš Zeman k lidem z Českého Těšína: Vyznamenám Nohavicu. Hermana nemám rád. Kauza Čapí hnízdo je podezřelá: https://t.co/uEKL5jwcsk"
  },
  {
    "id": 905484607075778600,
    "created_at": "2017-09-06 17:35:28",
    "text": "Zeman v OSN vystoupí mezi prvními řečníky: https://t.co/lhQgabflU3"
  },
  {
    "id": 905478470234492900,
    "created_at": "2017-09-06 17:11:04",
    "text": "Paní Ivana Zemanová navštívila místo vyhořelého kostela Božího Těla v Třinci - Gutech. https://t.co/AqQ1VaPcK0"
  },
  {
    "id": 905469369358090200,
    "created_at": "2017-09-06 16:34:55",
    "text": "Prezident republiky. https://t.co/kd8ecx2jmY"
  },
  {
    "id": 905465826983256000,
    "created_at": "2017-09-06 16:20:50",
    "text": "V Českém Těšíně občané přišli debatovat s panem prezidentem navzdory deštivému počasí. Děkujeme! https://t.co/M9C8foUoRZ"
  },
  {
    "id": 905462214332743700,
    "created_at": "2017-09-06 16:06:29",
    "text": "Přečtěte si, co pan prezident řekl v Novém Jičíně, kde odmítl přijímání muslimských migrantů: https://t.co/x1gUY26pAp"
  },
  {
    "id": 905459612115075100,
    "created_at": "2017-09-06 15:56:08",
    "text": "RT @Blesk24: Písničkář Nohavica dostane od prezidenta státní vyznamenání. Zeman mu ho dá 28. října https://t.co/532rnBSsy0"
  },
  {
    "id": 905453215973560300,
    "created_at": "2017-09-06 15:30:43",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Českém Těšíně: https://t.co/NoIZGqAjGB https://t.co/fRBtJb72wT"
  },
  {
    "id": 905451949667094500,
    "created_at": "2017-09-06 15:25:41",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v Novém Jičíně: https://t.co/x2wdZSWZ4D https://t.co/wMDHvrwfTN"
  },
  {
    "id": 905451770872246300,
    "created_at": "2017-09-06 15:24:59",
    "text": "OVTV, videozáznam setkání pana prezidenta se zaměstnanci společnosti TEMEX: https://t.co/zmVn9BulQs https://t.co/cTywxltxF9"
  },
  {
    "id": 905449816808882200,
    "created_at": "2017-09-06 15:17:13",
    "text": "Zeman oznámil, že předá státní vyznamenání písničkáři Nohavicovi: https://t.co/rplhAqadJh"
  },
  {
    "id": 905442980819079200,
    "created_at": "2017-09-06 14:50:03",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Českém Těšíně. https://t.co/FuON640KHF"
  },
  {
    "id": 905437816791937000,
    "created_at": "2017-09-06 14:29:32",
    "text": "Nový Jičín. Dárek pro pana prezidenta. https://t.co/32l41qLlvz"
  },
  {
    "id": 905431376949858300,
    "created_at": "2017-09-06 14:03:57",
    "text": "Český Těšín. https://t.co/DZ4IJE9Iu9"
  },
  {
    "id": 905428320493416400,
    "created_at": "2017-09-06 13:51:48",
    "text": "Paní Ivana Zemanová si prohlédla výrobu společnosti Tonak a.s. Nový Jičín a navštívila Muzeum ve Frenštátu pod Radh… https://t.co/kpPORYPTp6"
  },
  {
    "id": 905422479249768400,
    "created_at": "2017-09-06 13:28:35",
    "text": "Zeman: Je lepší se vzdát dotací, než se podrobit migračním kvótám https://t.co/3Sz9LUHyse"
  },
  {
    "id": 905414414316208100,
    "created_at": "2017-09-06 12:56:32",
    "text": "´Warrior for Truth’ award will be presented to Milos Zeman, President of the Czech Republic: https://t.co/Wa40pE5a75"
  },
  {
    "id": 905406439367290900,
    "created_at": "2017-09-06 12:24:51",
    "text": "Zeman v New Yorku obdrží cenu za hájení zájmů Židů: https://t.co/eJjfxTkMPe"
  },
  {
    "id": 905402582805475300,
    "created_at": "2017-09-06 12:09:31",
    "text": "A už se nám vyjádřil zástupce novinářské obce, z lidovky.cz. Nepřekvapivě. https://t.co/9tJ4OuwCMP"
  },
  {
    "id": 905400699231637500,
    "created_at": "2017-09-06 12:02:02",
    "text": "Podvolení a degenerace západní společnosti v praxi: https://t.co/MjSaMJqYLj"
  },
  {
    "id": 905398758145499100,
    "created_at": "2017-09-06 11:54:20",
    "text": "Nesmíme se hrbit, neměli bychom si nechat vyhrožovat,\" řekl pan prezident v Novém Jičíně k tlaku na ČR ve věci migračních kvót."
  },
  {
    "id": 905398013287432200,
    "created_at": "2017-09-06 11:51:22",
    "text": "Zeman: Radši se vzdát dotací z EU, než sem pustit migranty https://t.co/2g5BbU331x"
  },
  {
    "id": 905392184400236500,
    "created_at": "2017-09-06 11:28:12",
    "text": "Nový Jičín. Úžasná účast občanů. Děkujeme! https://t.co/OHqr6w1Qby"
  },
  {
    "id": 905385179774165000,
    "created_at": "2017-09-06 11:00:22",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v Novém Jičíně. https://t.co/FqR3D99WoM"
  },
  {
    "id": 905373515305676800,
    "created_at": "2017-09-06 10:14:01",
    "text": "Správně! Maďarsko dál proti kvótám. Všemi právními prostředky bude usilovat o to, aby nakonec samo rozhodovalo, komu dovolí žít v zemi. 👍"
  },
  {
    "id": 905359865266266100,
    "created_at": "2017-09-06 09:19:47",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zaměstnanci společnosti TEMEX. https://t.co/yYdrYmOpwU"
  },
  {
    "id": 905154360518336500,
    "created_at": "2017-09-05 19:43:11",
    "text": "Pan prezident se svojí paní. Ostrava, 5.9.2017. https://t.co/BrwMH0kCgL"
  },
  {
    "id": 905113738356944900,
    "created_at": "2017-09-05 17:01:46",
    "text": "Prezident republiky. https://t.co/SIbJqCtgiv"
  },
  {
    "id": 905102857564762100,
    "created_at": "2017-09-05 16:18:31",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany ve Studénce: https://t.co/SnYdlSEIg9 https://t.co/higlv4S38w"
  },
  {
    "id": 905100267607220200,
    "created_at": "2017-09-05 16:08:14",
    "text": "Manipulace, policejní provokace. Zeman se před lidmi znovu rozohnil na téma Babišova stíhání: https://t.co/qtVwJhifiA"
  },
  {
    "id": 905096040407322600,
    "created_at": "2017-09-05 15:51:26",
    "text": "Paní Ivana Zemanová si prohlédla výstavy v Galerii výtvarného umění v Ostravě. https://t.co/nehyTQPSaZ"
  },
  {
    "id": 905092605456900100,
    "created_at": "2017-09-05 15:37:47",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany ve Studénce. https://t.co/Y5BbZtZxpx"
  },
  {
    "id": 905084611805536300,
    "created_at": "2017-09-05 15:06:01",
    "text": "RT @Jiri_Kheil: Neměla by se část konc.poplatků započítat do #kampaň #ČSSD pro #volby2017? https://t.co/wtYamW1RKM #čt24 #čt #ovm #Moravec…"
  },
  {
    "id": 905077943080276000,
    "created_at": "2017-09-05 14:39:31",
    "text": "OVTV, videozáznam setkání pana prezidenta s občany v obci Větřkovice: https://t.co/XrO2iPfS5a https://t.co/aqgfIongUa"
  },
  {
    "id": 905065899685814300,
    "created_at": "2017-09-05 13:51:40",
    "text": "Větřkovice. I zde pilně na Twitteru ku potěše novinářů a kavárny. https://t.co/3PaS5g80VO"
  },
  {
    "id": 905065139417833500,
    "created_at": "2017-09-05 13:48:39",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání s občany v obci Větřkovice. https://t.co/15fMZ4ifcZ"
  },
  {
    "id": 905041646533922800,
    "created_at": "2017-09-05 12:15:18",
    "text": "RT @IsraelinCZ: Retweetujte, pokud si myslíte, že děti by se měly učit o lásce a respektu, ne o nenávisti a vraždách. https://t.co/Y70hwWqK…"
  },
  {
    "id": 905038436876382200,
    "created_at": "2017-09-05 12:02:32",
    "text": "Paní Ivana Zemanová zavítala do domova pro seniory Domov Bílá Opava. https://t.co/wd66hJLnbc"
  },
  {
    "id": 905024184455241700,
    "created_at": "2017-09-05 11:05:54",
    "text": "Zeman: Moravskoslezský kraj si vybral čínský výrobce pneumatik https://t.co/1D4ldcRpiv"
  },
  {
    "id": 905023753184309200,
    "created_at": "2017-09-05 11:04:11",
    "text": "Prezidentská návštěva v kraji. Kdy a kde se Miloš Zeman setká s občany? https://t.co/vCfTaRbcEW"
  },
  {
    "id": 905008924646105100,
    "created_at": "2017-09-05 10:05:16",
    "text": "Moravskoslezský hejtman Ivo Vondrák předal panu prezidentovi na závěr setkání se zastupiteli košík čerstvých hub. https://t.co/0NWupFRvAb"
  },
  {
    "id": 905006066894864400,
    "created_at": "2017-09-05 09:53:55",
    "text": "OVTV, videozáznam setkání pana prezidenta se zastupiteli Moravskoslezského kraje: https://t.co/Yi87QG9Agn https://t.co/sMRpSp49TH"
  },
  {
    "id": 905004624318476300,
    "created_at": "2017-09-05 09:48:11",
    "text": "Pan prezident jako ambasador Vysočiny předal moravskoslezskému hejtmanovi dar, který v sobě nese odkaz lidských osu… https://t.co/nApHgtCdt4"
  },
  {
    "id": 904998903069671400,
    "created_at": "2017-09-05 09:25:27",
    "text": "2/2 Příspěvek na obnovu kostela předá paní Ivana Zemanová ve středu 6. září v odpoledních hodinách."
  },
  {
    "id": 904998835289808900,
    "created_at": "2017-09-05 09:25:11",
    "text": "1/2 Pan prezident se svojí paní se rozhodli darovat 10 000 Kč na obnovu dřevěného kostela Božího Těla v Gutech."
  },
  {
    "id": 904994353260716000,
    "created_at": "2017-09-05 09:07:22",
    "text": "Právě teď živě na OVTV prostřednictvím FB pana prezidenta setkání se zastupiteli Moravskoslezského kraje. https://t.co/gMqvK7IwgO"
  },
  {
    "id": 904988493167906800,
    "created_at": "2017-09-05 08:44:05",
    "text": "Pan prezident se svojí paní zahájili setkáním s hejtmanem a jeho manželkou třídenní návštěvu Moravskoslezského kraj… https://t.co/pkBCAxQHui"
  },
  {
    "id": 904979024711123000,
    "created_at": "2017-09-05 08:06:27",
    "text": "Nejde o antifašisty, ale o fašistické bojůvky: https://t.co/mHMX4DfQsc"
  },
  {
    "id": 904964617667010600,
    "created_at": "2017-09-05 07:09:12",
    "text": "Pan prezident kondoloval prezidentovi USA D. Trumpovi, v souvislosti s hurikánem a záplavami v Texasu a Louisianě: https://t.co/DsyNUxwQYz"
  },
  {
    "id": 904962803550826500,
    "created_at": "2017-09-05 07:02:00",
    "text": "Nejlepším premiérem byl zkrachovalý premiér, který radí dalšímu zkrachovalému premiérovi, tvrdí tzv. elita: https://t.co/qACtr9QEuo"
  },
  {
    "id": 904824412922417200,
    "created_at": "2017-09-04 21:52:05",
    "text": "RT @The_Trump_Train: Ironic that on Labor Day, a day we're supposed to be honoring American Labor, Dems are fighting for illegal aliens ste…"
  },
  {
    "id": 904817226972356600,
    "created_at": "2017-09-04 21:23:32",
    "text": "A tak se nám ten ateistický komunismus začal přesouvat na Západ! https://t.co/0rFM4APzJf"
  },
  {
    "id": 904812545344753700,
    "created_at": "2017-09-04 21:04:56",
    "text": "Takto se projevuje druhorepubliková spodina! Ovčáček ukázal, co se děje na transparentním účtu prezidenta: https://t.co/Cs4Ff5QX7u"
  },
  {
    "id": 904772056981672000,
    "created_at": "2017-09-04 18:24:02",
    "text": "Prezident jede do Moravskoslezského kraje. Dostane pálenku i slamák: https://t.co/KUOisgOeHh"
  },
  {
    "id": 904743084491202600,
    "created_at": "2017-09-04 16:28:55",
    "text": "Prezident republiky. https://t.co/VfVSrHC6M4"
  },
  {
    "id": 904722872433856500,
    "created_at": "2017-09-04 15:08:36",
    "text": "Stále čekám, že se ti noblesní a spojovací protikandidáti distancují od svých vulgárních \"haléřových příznivců\". To ticho je tak typické..."
  },
  {
    "id": 904698306604957700,
    "created_at": "2017-09-04 13:30:59",
    "text": "Pan prezident přijal v pondělí 4.9. na Hradě na jeho žádost Pavla Tykače. Témata jednání: energetika a otázka prolomení těžebních limitů."
  },
  {
    "id": 904674447730278400,
    "created_at": "2017-09-04 11:56:11",
    "text": "Paní Ivana Zemanová zavítala na zahájení nového školního roku v Základní škole Jana Palacha v Kutné Hoře. https://t.co/Yh6S0V1eCo"
  },
  {
    "id": 904652006694027300,
    "created_at": "2017-09-04 10:27:00",
    "text": "Program vysílání OVTV z návštěvy pana prezidenta v Moravskoslezském kraji ve dnech 5. - 7. září 2017:… https://t.co/p6053i3xjE"
  },
  {
    "id": 904650467401191400,
    "created_at": "2017-09-04 10:20:53",
    "text": "Pan prezident podepsal v pondělí dne 4. září 2017 těchto osmnáct zákonů: https://t.co/TarW5gYlvp"
  },
  {
    "id": 904641615100350500,
    "created_at": "2017-09-04 09:45:43",
    "text": "Projev pana prezidenta při zahájení školního roku: https://t.co/GERW7p7wmI"
  },
  {
    "id": 904637216454008800,
    "created_at": "2017-09-04 09:28:14",
    "text": "Začal nový školní rok. Uklízečka bude možná prestižnější než poslanec, řekl studentům Zeman: https://t.co/KJ10PiEUnd"
  },
  {
    "id": 904627302549659600,
    "created_at": "2017-09-04 08:48:50",
    "text": "Zeman – Bojovník za pravdu. Židé mu v New Yorku předají cenu: https://t.co/TkHO0LHCHz"
  },
  {
    "id": 904622213034385400,
    "created_at": "2017-09-04 08:28:37",
    "text": "Pan prezident u příležitosti zahájení nového školního roku zavítal na Akademii řemesel Praha - Střední školu techni… https://t.co/qIhI6RygTj"
  },
  {
    "id": 904432496762384400,
    "created_at": "2017-09-03 19:54:45",
    "text": "Klasika je vždy aktuální! Doktor Halíř si jde stěžovat: https://t.co/AYerjpD2ZI"
  },
  {
    "id": 904395903968186400,
    "created_at": "2017-09-03 17:29:21",
    "text": "Tak aby bylo jasno: https://t.co/9exGhuvN5E"
  },
  {
    "id": 904393020115750900,
    "created_at": "2017-09-03 17:17:53",
    "text": "Každá sranda jednou končí. Pokud autor mého falešného FB odkazuje na účet jiného kandidáta, jde o trestný čin podvo… https://t.co/dHLVLX2eis"
  },
  {
    "id": 904381073966211100,
    "created_at": "2017-09-03 16:30:25",
    "text": "Haléře vždy přinášejí štěstí. Na to je třeba pamatovat!"
  },
  {
    "id": 904349205115830300,
    "created_at": "2017-09-03 14:23:47",
    "text": "Antikampaň Pražské kavárny je opět tak primitivní a opět tak nenápaditá! https://t.co/E2PKLbukNZ"
  },
  {
    "id": 904300797860732900,
    "created_at": "2017-09-03 11:11:25",
    "text": "Už vláda Bohuslava Sobotky splnila úkol daný březnovým usnesením Poslanecké sněmovny? https://t.co/v0qxqgwUCd"
  },
  {
    "id": 904261564013977600,
    "created_at": "2017-09-03 08:35:31",
    "text": "RT @dominikduka: I přes omluvu #LIDL mi zůstává pocit hořkosti. Jedná se o vysoce  varovnou věc #křesťanství\nhttps://t.co/yp3oe8AaOQ https:…"
  },
  {
    "id": 904065336936464400,
    "created_at": "2017-09-02 19:35:47",
    "text": "RT @Rustafa555: https://t.co/KYPU6gTfRw"
  },
  {
    "id": 903971670993535000,
    "created_at": "2017-09-02 13:23:36",
    "text": "Prezident republiky Miloš Zeman, 31.8.2017, TV Barrandov: https://t.co/3Ja8vwOStf"
  },
  {
    "id": 903971279098830800,
    "created_at": "2017-09-02 13:22:02",
    "text": "Prezident republiky Miloš Zeman, 31.8.2017, TV Barrandov: https://t.co/qnebjIH4T4"
  },
  {
    "id": 903949809811415000,
    "created_at": "2017-09-02 11:56:43",
    "text": "RT @KohoutPavel: Antifa je ve své podstatě totéž, co neonacisté. Američanům to konečně dochází. https://t.co/C1EkeHsBDe"
  },
  {
    "id": 903923990862946300,
    "created_at": "2017-09-02 10:14:08",
    "text": "RT @CUTIzpravy: https://t.co/YcgrZlgviU"
  },
  {
    "id": 903916952376238100,
    "created_at": "2017-09-02 09:46:10",
    "text": "Vladimír Brabec byl skvělý herec a excelentní dabér. Opouští nás, velmi rychle, generace skutečných umělců. https://t.co/3hDDxAZyAf"
  },
  {
    "id": 903916019634331600,
    "created_at": "2017-09-02 09:42:27",
    "text": "Petition To Label George Soros A \"Domestic Terrorist\" Has 80,000 Signatures: https://t.co/wR3wdhwTnS"
  },
  {
    "id": 903914125243318300,
    "created_at": "2017-09-02 09:34:56",
    "text": "Organizace financované Sorosem jsou nedůvěryhodné. Jejich jediným cílem je udržet u moci tzv. liberální levici. https://t.co/DpG1BHkXhJ"
  },
  {
    "id": 903911516692471800,
    "created_at": "2017-09-02 09:24:34",
    "text": "Pan prezident se setkává s občany České republiky. Brněnský úřad dál útočí na Ústavu ČR a dělí lidi na dvě kasty: https://t.co/RFHICdpHYN"
  },
  {
    "id": 903909848932343800,
    "created_at": "2017-09-02 09:17:56",
    "text": "Ona už je. Na Západě je tzv. liberální levice tahounem protiizraelských akcí. Ruku v ruce s muslimy. https://t.co/S9gMq4qEKK"
  },
  {
    "id": 903909427845226500,
    "created_at": "2017-09-02 09:16:16",
    "text": "Pan prezident bude v New Yorku hlavním hostem akce Algemeiner Jewish 100 Gala, kdy převezme ocenění Warrior for Truth (Bojovník za pravdu)."
  },
  {
    "id": 903908638707863600,
    "created_at": "2017-09-02 09:13:07",
    "text": "Již loni prezidenta Zemana Algemeiner zařadil mezi stovku nejvlivnějších osobností židovského světa: https://t.co/CgouUmK5xo"
  },
  {
    "id": 903645831512903700,
    "created_at": "2017-09-01 15:48:49",
    "text": "Společnost Lidl se zachovala doslova hanebně. Ani komunisté neretušovali kříže z fotografií kostelů. https://t.co/bAKYmUAFRA"
  },
  {
    "id": 903558313857736700,
    "created_at": "2017-09-01 10:01:03",
    "text": "Citát dne: Ukažte mi velkou říši založenou na zrušení igelitových pytlíků. Ondřej Neff. https://t.co/HoorIP8udk"
  },
  {
    "id": 903555879689171000,
    "created_at": "2017-09-01 09:51:23",
    "text": "Zeman podpořil Babiše, nahrávky ho nezajímají: „Hodil bych je do koše“ https://t.co/ijSAIVvEl0"
  },
  {
    "id": 903552277247656000,
    "created_at": "2017-09-01 09:37:04",
    "text": "Pan prezident se svojí paní navštíví ve dnech 5. – 7. září 2017 Moravskoslezský kraj. Program naleznete zde: https://t.co/1xO7l8WCSs"
  },
  {
    "id": 903545403156680700,
    "created_at": "2017-09-01 09:09:45",
    "text": "Pan prezident zahájí nový školní rok v pondělí 4.9. v 9.45 na Akademii řemesel Praha - Střední škole technické: https://t.co/vzxxokThAf"
  },
  {
    "id": 903514636099633200,
    "created_at": "2017-09-01 07:07:30",
    "text": "Videozáznam pořadu \"Týden s prezidentem\", čtvrtek 31. 8. 2017, TV Barrandov: https://t.co/SCOb5l0JrI"
  },
  {
    "id": 903505308747694100,
    "created_at": "2017-09-01 06:30:26",
    "text": "Redaktorka veřejnoprávního Českého rozhlasu mne neomaleně vyzvala k porušení zákona. A ještě se tím chlubí. https://t.co/3KFWJgULnf"
  },
  {
    "id": 903504329558065200,
    "created_at": "2017-09-01 06:26:33",
    "text": "V úterý 12. září 2017 se uskuteční oficiální návštěva prezidenta SRN Franka-Waltera Steinmeiera. Podrobnosti zde: https://t.co/oI8RpjWE6Y"
  },
  {
    "id": 903347492724645900,
    "created_at": "2017-08-31 20:03:20",
    "text": "Prezident Zeman si předělal nejslavnější slogan Václava Havla. A pak vypustil ještě výbušnější šrapnel: https://t.co/hGkxxDssir"
  },
  {
    "id": 903340435057365000,
    "created_at": "2017-08-31 19:35:17",
    "text": "RT @jakub_plihal: Dlouhá cesta stála za to! Skvělý Ovčáčak miláček (s neméně výborným Babišem) ve Zlíně sklidil aplaus vestoje.\n\nVíc brzo n…"
  },
  {
    "id": 903336327613227000,
    "created_at": "2017-08-31 19:18:58",
    "text": "Dnes se konala premiéra kabaretu Ovčáček miláček. Včera jsem autorovi a řediteli divadla P. Michálkovi zaslal dopis: https://t.co/OW6yytorDM"
  },
  {
    "id": 903319827330289700,
    "created_at": "2017-08-31 18:13:24",
    "text": "Takřka každé veřejné vystoupení úředníků z Brna je právně validním důkazem, že vedou kampaň proti panu prezidentovi. https://t.co/qjOMrzIpqR"
  },
  {
    "id": 903278753975029800,
    "created_at": "2017-08-31 15:30:11",
    "text": "Podle ukázky je nový kabaret Ovčáček miláček fakt skvělou satirou, která pobaví. U diváků bude mít určitě úspěch. https://t.co/tQlG636ndB"
  },
  {
    "id": 903271748614926300,
    "created_at": "2017-08-31 15:02:21",
    "text": "Když se sejdou Ovčáček, Babiš a Kajínek. Satira Ovčáček čtveráček má pokračování: https://t.co/nOUva3gxEv"
  },
  {
    "id": 903262709621432300,
    "created_at": "2017-08-31 14:26:26",
    "text": "U Bakalů bez Hradu nemohou dýchat. Tvoří jak pilné včelky. Dnes aktuálně na hlavní stránce Aktuálně.cz rovnou tři č… https://t.co/49vyEXvEZt"
  },
  {
    "id": 903254817702850600,
    "created_at": "2017-08-31 13:55:04",
    "text": "Člen ČSSD a vydavatel Deníku Referendum Jakub Patočka má jasno. Vytvořit koalici s TOP 09, ODS a lidovci. A na Babi… https://t.co/XQ0TydTjq2"
  },
  {
    "id": 903201043454070800,
    "created_at": "2017-08-31 10:21:24",
    "text": "Neuchopitelný fenomén Ovčáček se vrací. Vyhlíží prezidentskou debatu: https://t.co/e7KotcyqZs"
  },
  {
    "id": 903187170458001400,
    "created_at": "2017-08-31 09:26:16",
    "text": "Pan prezident vystoupí ve čtvrtek dne 31. srpna 2017 ve 20.15 hodin v pořadu „Týden s prezidentem“. Pořad bude vysílán na TV Barrandov."
  },
  {
    "id": 903152800313593900,
    "created_at": "2017-08-31 07:09:42",
    "text": "Citát pro poslední srpnový den: Jak lze postavit vítězství na taktice nepřítele, to chápou jen nemnozí. Sun-c'."
  },
  {
    "id": 903149043920113700,
    "created_at": "2017-08-31 06:54:46",
    "text": "Prezident Miloš Zeman přijede na návštěvu Moravskoslezského kraje: https://t.co/dWQAerxH4A"
  },
  {
    "id": 903143528724926500,
    "created_at": "2017-08-31 06:32:51",
    "text": "Politici tradičních stran s hrůzou zjistili, že místo biče na Babiše si brněnským úřadem vyrobili karabáč i na sebe… https://t.co/Br6b39uRdW"
  },
  {
    "id": 903001156632416300,
    "created_at": "2017-08-30 21:07:07",
    "text": "RT @rudolf_jindrak: Můj dnešní rozhovor na @CRoPlus o stavu dipl. sboru (od 44. minuty). I @AMO_cz chválí fungující komunikaci KPR-MZV. htt…"
  },
  {
    "id": 902996575538090000,
    "created_at": "2017-08-30 20:48:55",
    "text": "Jaroslav Kubera: Volební kampaň se bude nést udavačstvím těch, kdo budou poukazovat na chyby v ní. https://t.co/xsJY16jIeo"
  },
  {
    "id": 902980639867244500,
    "created_at": "2017-08-30 19:45:35",
    "text": "Zeman: V září do Prahy přiletí německý prezident Steinmeier https://t.co/zswX0E43oD"
  },
  {
    "id": 902980287977664500,
    "created_at": "2017-08-30 19:44:11",
    "text": "U Bakalů prozradili: Parlamentní listy ministerstvo vnitra monitoruje jako dezinformační server. Návrat normalizace! https://t.co/UQPSu4qohE"
  },
  {
    "id": 902973260677222400,
    "created_at": "2017-08-30 19:16:16",
    "text": "RT @rudolf_jindrak: Dnešní setkání jsem měl čest moderovat. Poděkoval jsem mj. za dobrou spolupráci s MZV. Koordinace zahr. politiky funguj…"
  },
  {
    "id": 902913554411642900,
    "created_at": "2017-08-30 15:19:01",
    "text": "Paní Ivana Zemanová se dnes na Pražském hradě setkala s manželkami vedoucích zastupitelských úřadů ČR v zahraničí. https://t.co/MzKLjI5sT2"
  },
  {
    "id": 902904590353522700,
    "created_at": "2017-08-30 14:43:24",
    "text": "Právě Kubera patří k největším odpůrcům zákona o financování volebních kampaní, a v plénu řekl, že nepřinese nic do… https://t.co/6Qk7Z3nO2c"
  },
  {
    "id": 902904069039251500,
    "created_at": "2017-08-30 14:41:19",
    "text": "Jaroslav Kubera skvěle k brněnskému úřadu! https://t.co/EOPKyxZ7U8"
  },
  {
    "id": 902901442197033000,
    "created_at": "2017-08-30 14:30:53",
    "text": "OVTV, videozáznam tradičního setkání pana prezidenta s vedoucími zastupitelských úřadů ČR v zahraničí:… https://t.co/3dX0MEYysm"
  },
  {
    "id": 902900213307887600,
    "created_at": "2017-08-30 14:26:00",
    "text": "Pan prezident se na Hradě tradičně setkal s vedoucími zastupitelských úřadů ČR v zahraničí. https://t.co/UOLpvEMX0G"
  },
  {
    "id": 902888292726779900,
    "created_at": "2017-08-30 13:38:38",
    "text": "RT @BreitbartNews: Thought crime. https://t.co/Htgv5EKrlw"
  },
  {
    "id": 902873003482128400,
    "created_at": "2017-08-30 12:37:53",
    "text": "Právě teď. Natáčení pořadu \"Týden s prezidentem\". Sledujte ve čtvrtek 31.8. ve 20:15 na TV Barrandov! https://t.co/Zf8b9ntsHB"
  },
  {
    "id": 902850491914342400,
    "created_at": "2017-08-30 11:08:26",
    "text": "Jak jsem už uvedl, Marx a Lenin teď frčí na Západě. A2alarm to musí vědět: https://t.co/bEbFUPRwrw"
  },
  {
    "id": 902827864013373400,
    "created_at": "2017-08-30 09:38:31",
    "text": "RT @tok5934: Odborníci z RAMO (Rada geotechnickeho monitoringu) odsouhlasili, že můžeme po 20.9 zprovoznit dálnici D8 ve všech 4 pruzích. h…"
  },
  {
    "id": 902781399090040800,
    "created_at": "2017-08-30 06:33:53",
    "text": "Sbírka karikatur se opět rozrostla! Deník Právo, 30. 8. 2017. https://t.co/VOTqHhcJG5"
  },
  {
    "id": 902779473111781400,
    "created_at": "2017-08-30 06:26:13",
    "text": "U Bakalů vymysleli tvůrčí novinku. Kamery jsou opevnění. V tom případě je ČST Praha nejmocnější pevností v zemi. https://t.co/eh20LxDyr3"
  },
  {
    "id": 902773122142806000,
    "created_at": "2017-08-30 06:00:59",
    "text": "Jan Keller, Právo, 30. 8. 2017: https://t.co/LB1uEuRoXr"
  },
  {
    "id": 902559999729262600,
    "created_at": "2017-08-29 15:54:07",
    "text": "Exkluzivně: Víme, co je v dopise Zemanovi! Trump: „Lituji, že jsme se nesetkali“ https://t.co/KmFpkr5Aw2"
  },
  {
    "id": 902553788984254500,
    "created_at": "2017-08-29 15:29:26",
    "text": "Na Hradě se dnes uskutečnilo pravidelné setkání pana prezidenta s policejním prezidentem Tomášem Tuhým."
  },
  {
    "id": 902536424108548100,
    "created_at": "2017-08-29 14:20:26",
    "text": "2/2 a vedoucího Zpravodajského oddělení Odboru vojskového průzkumu a elektronického boje plk. Pavla Nakládala."
  },
  {
    "id": 902536391468429300,
    "created_at": "2017-08-29 14:20:18",
    "text": "1/2 Pan prezident přijal na Hradě velitele Vzdušných sil AČR genmjr. Jaromíra Šebestu"
  },
  {
    "id": 902530556281458700,
    "created_at": "2017-08-29 13:57:07",
    "text": "Na Echo24.cz se čile debatuje o faktech, která pan prezident uvedl v případě islamistů v Bosně. https://t.co/BzQEAGAytn"
  },
  {
    "id": 902522765600837600,
    "created_at": "2017-08-29 13:26:10",
    "text": "Pan prezident dnes jmenoval rektorem Vysoké školy báňské – Technické univerzity Ostrava prof. RNDr. Václava Snášela… https://t.co/fhCZyDeJCE"
  },
  {
    "id": 902516938311598100,
    "created_at": "2017-08-29 13:03:00",
    "text": "Aby bylo jasno i Pražské kavárně, která zaslepeně popírá islamistickou hrozbu v Bosně! 18.8.2017: https://t.co/RQvPv1yxAR"
  },
  {
    "id": 902510125986062300,
    "created_at": "2017-08-29 12:35:56",
    "text": "Pan prezident přijal na Hradě účastníky XXIII. Letní deaflympiády v tureckém Samsunu. https://t.co/iXkVAiPPAL"
  },
  {
    "id": 902463357176905700,
    "created_at": "2017-08-29 09:30:05",
    "text": "Islámský stát bují přímo za plotem EU, nové bojovníky cvičí v Bosně: https://t.co/YqtShGDwkB"
  },
  {
    "id": 902457634514763800,
    "created_at": "2017-08-29 09:07:21",
    "text": "Pan prezident přijme ve středu 30. 8. 2017 v 16.00 na Pražském hradě vedoucí zastupitelských úřadů ČR v zahraničí: https://t.co/xeyPkf0EyS"
  },
  {
    "id": 902247643874779100,
    "created_at": "2017-08-28 19:12:55",
    "text": "A tak se nám další prezidentský kandidát veřejně přihlásil ke starým strukturám z ČSSD, TOP 09, ODS a KDU-ČSL. https://t.co/3MoMKsACiz"
  },
  {
    "id": 902187082558447600,
    "created_at": "2017-08-28 15:12:16",
    "text": "Ředitel divadla: Jsme ve střehu, Ovčáčka miláčka ještě upravíme https://t.co/BMmbZwD7ra"
  },
  {
    "id": 902172823321501700,
    "created_at": "2017-08-28 14:15:37",
    "text": "RT @VaclavKlaus_ml: A ještě tradiční páteční Reflex\nhttps://t.co/zBKIv8NqGn"
  },
  {
    "id": 902158693420195800,
    "created_at": "2017-08-28 13:19:28",
    "text": "Min. vnitra chce, aby policie řekla, zda je Šumanova nahrávka pravdivá. Policie to ale nemůže vědět. Případ Šuman totiž oficiálně odložila."
  },
  {
    "id": 902142396087103500,
    "created_at": "2017-08-28 12:14:42",
    "text": "Mimochodem, jak a komu bude Šumana započítávat do kampaně brněnský úřad? Už se u něj Šuman registroval?"
  },
  {
    "id": 902141234688483300,
    "created_at": "2017-08-28 12:10:05",
    "text": "Popletové-aktivisté. Marx a Lenin teď fest frčí v západní Evropě. V Rusku už dávno vyšli z módy. https://t.co/mr2z2ZGAzj"
  },
  {
    "id": 902138552888197100,
    "created_at": "2017-08-28 11:59:26",
    "text": "Začíná to být vskutku zajímavý příběh. Pokud v něm opravdu figurují LTO, Šuman doběhl tradiční politiky a nahrál Ba… https://t.co/q1Y829Yc1n"
  },
  {
    "id": 902124329453924400,
    "created_at": "2017-08-28 11:02:55",
    "text": "RT @michaeldickson: Antisemitism in the UK has been given a veneer of acceptability under Corbyn. No wonder some Jews are thinking of leavi…"
  },
  {
    "id": 902115139922653200,
    "created_at": "2017-08-28 10:26:24",
    "text": "Je to vážné: Úřad, se kterým bojuje Ovčáček, potrestal za srandu ze Sobotky https://t.co/Kwg40NUQfD"
  },
  {
    "id": 902088337623801900,
    "created_at": "2017-08-28 08:39:54",
    "text": "Další důkaz, že úřad v Brně vede kampaň. Bojuje za B. Sobotku a útočí na pana prezidenta a ANO: https://t.co/mWJkFnaR4B"
  },
  {
    "id": 902087334463766500,
    "created_at": "2017-08-28 08:35:55",
    "text": "Pan prezident jmenuje v úterý dne 29. srpna 2017 v 15.00 hodin na Pražském hradě rektora veřejné vysoké školy."
  },
  {
    "id": 902087222442287100,
    "created_at": "2017-08-28 08:35:28",
    "text": "Pan prezident přijme v úterý dne 29. srpna 2017 ve 14.00 hodin na Pražském hradě účastníky XXIII. deaflympiády v tureckém Samsunu."
  },
  {
    "id": 901823473798012900,
    "created_at": "2017-08-27 15:07:25",
    "text": "Земан: Реална пријетња да БиХ постане европска база терориста https://t.co/tD7kl3endJ"
  },
  {
    "id": 901821969951330300,
    "created_at": "2017-08-27 15:01:27",
    "text": "Zeman: Bosni preti da postane evropska baza islamskih terorista https://t.co/m2RRkPnJRN"
  },
  {
    "id": 901793131783389200,
    "created_at": "2017-08-27 13:06:51",
    "text": "Zeman: Optimální povolební koalice by byla ANO a ČSSD https://t.co/EgQ2gRPud8"
  },
  {
    "id": 901790813172138000,
    "created_at": "2017-08-27 12:57:38",
    "text": "Volby? Proč? Stačí nám Greenpeace nebo Lenin, ne? https://t.co/bwAfWb9MnZ"
  },
  {
    "id": 901775354108444700,
    "created_at": "2017-08-27 11:56:13",
    "text": "Celý videozáznam pořadu \"S prezidentem v Lánech\": https://t.co/0GVd2jCJBs"
  },
  {
    "id": 901722928030646300,
    "created_at": "2017-08-27 08:27:53",
    "text": "Od 11:00 sledujte živě na Blesk.cz pořad \"S prezidentem v Lánech\". Už pojedenácté! https://t.co/Dem5DrsnFK"
  },
  {
    "id": 901715715488710700,
    "created_at": "2017-08-27 07:59:14",
    "text": "RT @netanyahu: מחווה מרגשת מהנשיא פוטין: קטע מספר התנ״ך הראשון בעולם שהודפס עם פירוש רש״י, אותו אמסור לספרייה הלאומית. תודה על הידידות ושית…"
  },
  {
    "id": 901468850952298500,
    "created_at": "2017-08-26 15:38:17",
    "text": "Staré struktury! Ovčáček po útoku Sobotky oznámil zásadní krok k obraně Zemana: https://t.co/ksenQEKHt1"
  },
  {
    "id": 901464148059578400,
    "created_at": "2017-08-26 15:19:35",
    "text": "Jak jsem zjistil v tisku, existují prezidentští kandidáti, kterým tohle imponuje. A tihle prezidentští kandidáti im… https://t.co/xZfDZJDlhv"
  },
  {
    "id": 901457011241517000,
    "created_at": "2017-08-26 14:51:14",
    "text": "Rozhovor : Jiří Ovčáček | Political Production https://t.co/F4SkyUGhmT"
  },
  {
    "id": 901416322021642200,
    "created_at": "2017-08-26 12:09:33",
    "text": "Chtěl jsem zachránit Československo, navrhoval jsem unii, vzpomíná Zeman 25 let od dohody o dělení: https://t.co/tcODjOZwyA"
  },
  {
    "id": 901139416978268200,
    "created_at": "2017-08-25 17:49:14",
    "text": "Je správné, že se Polsko tvrdě ohradilo. Izolováno není. Například v České republice má skutečné přátele. https://t.co/mSJzWXBq4F"
  },
  {
    "id": 901137811679703000,
    "created_at": "2017-08-25 17:42:51",
    "text": "Za konzervativní názory hrozí lidem mediální lynč novodobé inkvizice, říká Duka https://t.co/pObStGfx08"
  }
];
