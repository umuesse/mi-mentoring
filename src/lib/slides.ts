/** Ein Bild mit kurzer Bildunterschrift (Folientyp `figures`). */
export type FigureImage = { src: string; alt: string; caption: string };

export type Slide =
	| {
			type: 'intro';
			title: string;
			subtitle?: string;
			/** z. B. `/img/...` aus `static/img/` */
			image?: { src: string; alt: string };
	  }
	| {
			type: 'figures';
			/** Genau 1 oder 2 Bilder, jeweils mittig mit `caption` darunter (keine Folienüberschrift) */
			images: [FigureImage] | [FigureImage, FigureImage];
	  }
	| {
			type: 'bullets';
			title?: string;
			items: string[];
			/** Wenn true: Pfeil rechts deckt erst alle Punkte auf, dann nächste Folie */
			sequential?: boolean;
	  }
	| {
			type: 'code';
			title?: string;
			code: string;
	  }
	| {
			type: 'quote';
			text: string;
			attribution?: string;
	  }
	| {
			type: 'linkQr';
			title?: string;
			url: string;
			hint?: string;
	  };

/**
 * Starting Guide WiSe 2026/27 — Bullet-Folien mit QR bewusst max. 2 Punkte,
 * damit ohne Scrollen alles sichtbar bleibt.
 *
 * Freitext (Zitate, Bullets, Untertitel …): kein Markdown, aber in LinkifiedText:
 * **fett**, *kursiv*, Zeilenumbruch `\n`, URLs/E-Mails werden automatisch verlinkt.
 */
export const slides: Slide[] = [
	{
		type: 'intro',
		title: 'Hello MI',
		subtitle: 'Starting Guide · Medieninformatik Mentoring · WiSe 2026/27',
		image: {
			src: '/img/logo-th-koeln.png',
			alt: 'Logo Technische Hochschule Köln'
		}
	},

	/* —— Mentaler Switch —— */
	{
		type: 'intro',
		title: 'Mentaler Switch',
		subtitle: 'Von der Schule ins Studium — Eigenverantwortung statt Kontrolle'
	},
	{
		type: 'quote',
		text: '**Schule:** Aufgaben werden klar vorgegeben.\n**Studium:** Selbstständigkeit und Eigeninitiative sind gefordert.',
		attribution: 'Mindset — aus dem Mentoring'
	},
	{
		type: 'bullets',
		title: 'Eigenverantwortung',
		items: [
			'Niemand kontrolliert Anwesenheit oder Hausaufgaben',
			'Lernfortschritt liegt bei euch',
			'Prüfungsanmeldung (CaMS) ist aktive Pflicht — passiert nicht automatisch'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Anderes Lerntempo',
		items: [
			'Höheres Stofftempo, weniger Wiederholung — Selbststudium ist Standard',
			'Lerngruppen sind fast notwendig, um mitzukommen'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Fehlerkultur & Initiative',
		items: [
			'Durchfallen kann passieren, ist aber keine Katastrophe',
			'Prüfungsordnung regelt die Anzahl an Fehlversuchen',
			'Nachfragen bei Dozierenden ist erwünscht — ihr müsst selbst aktiv werden'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Administratives Selbstmanagement',
		items: [
			'E-Mails checken ist Pflicht — sMail ist rechtsverbindliche Kommunikation',
			'Fristen (Prüfung, Rückmeldung, Urlaubssemester) selbst im Blick behalten'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Beratung früh kennen',
		items: [
			'Studienzweifel, Mental Health, Finanzierung — Angebote jetzt merken, nicht erst in der Krise — https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/informatik-und-ingenieurwissenschaften/beratung_19432.php'
		],
		sequential: true
	},

	/* —— Digitale Zugänge —— */
	{
		type: 'intro',
		title: 'Digitale Zugänge',
		subtitle: 'Diese Dinge zuerst erledigen'
	},
	{
		type: 'bullets',
		title: 'Erste Handlungen',
		items: [
			'CaMS: Bescheinigungen, Personendaten, ab Nov. 2026 auch Prüfungsanmeldung — https://cams.th-koeln.de/',
			'WLAN: eduroam an Hochschulen weltweit — https://www.th-koeln.de/hochschule/eduroam_25369.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Erste Handlungen · Teil 2',
		items: [
			'VPN für Zugriff auf Hochschulressourcen von außen — https://www.th-koeln.de/hochschule/vpn---virtual-private-network_26952.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Identität & Kommunikation',
		items: [
			'campusID aktivieren (Immatrikulations-Mail): Passwort, E-Mail — https://campusid.th-koeln.de/',
			'Multi-Faktor-Authentifizierung im campusID-Center — https://www.th-koeln.de/hochschule/zwei-faktor-authentisierung-2fa_83214.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Identität & Kommunikation · Teil 2',
		items: [
			'sMail: vorname.nachname@smail.th-koeln.de — rechtsverbindlich — https://webmail.th-koeln.de/login.php'
		],
		sequential: true
	},
	{
		type: 'code',
		title: 'Kurz-Checkliste',
		code: `// Diese vier Dinge zuerst erledigen:
1. eduroam einrichten
2. CampusID / E-Mail aktivieren
3. MFA hinterlegen
4. GMID registrieren`
	},

	/* —— Campus —— */
	{
		type: 'intro',
		title: 'Campus Gummersbach',
		subtitle: 'Steinmüllerallee 1 · 51643 Gummersbach'
	},
	{
		type: 'bullets',
		title: 'Orientierung',
		items: [
			'Lageplan Campus GM (Stand September 2026) — https://www.th-koeln.de/mam/downloads/deutsch/hochschule/fakultaeten/informatik_und_ingenieurwissenschaften/lageplan_campus_gummersbach.pdf',
			'Raumnummern: Ebene.Gebäude, z. B. 3.216'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'GMID',
		items: [
			'GMID-Center: Erstaccount mit campusID anlegen — https://id.gm.th-koeln.de/ — Wichtig für Zugriff auf PC-Pools, Praktikumstool, Server'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/GMID.png',
				alt: 'GMID-Terminal',
				caption: 'GMID-Terminal · 3. Etage'
			}
		]
	},
	{
		type: 'bullets',
		title: 'MultiCa',
		items: [
			'MultiCa jedes Semester validieren (Bibliothek, Mensa) — https://www.th-koeln.de/studium/studierendenausweis-multica_361.php'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/MensaMC.png',
				alt: 'Mensa MultiCa',
				caption: 'Mensa · Validierung'
			},
			{
				src: '/img/Schranke.png',
				alt: 'Parkplatzschranke Campus Gummersbach',
				caption: 'Parkplatz-Zugang nach Validierung'
			}
		]
	},
	{
		type: 'bullets',
		title: 'Erstsemesterbegrüßung',
		items: [
			'Freitag, 25.09.2026 · 10:00–16:00 Uhr · Hörsaal 0.401/0.402 — https://www.th-koeln.de/hochschule/erstsemesterbegruessung-am-campus-gummersbach_116742.php',
			'Begrüßung, Kickoffs der Studiengänge, Labore, Bibliotheksführung, Info-Points'
		],
		sequential: true
	},

	{
		type: 'quote',
		text: 'Der Mensch mit seinen Bedürfnissen steht im Zentrum der Medieninformatik.',
		attribution: 'Studiengangsphilosophie — Medieninformatik TH Köln'
	},

	/* —— Bachelor —— */
	{
		type: 'intro',
		title: 'Bachelor Medieninformatik',
		subtitle: '1. Fachsemester · BPO5 · Campus Gummersbach'
	},
	{
		type: 'bullets',
		title: 'Willkommen in der Medieninformatik',
		items: [
			'Eigene Ersti-Seite mit Modulen, Stundenplan und Mentoring — https://www.medieninformatik.th-koeln.de/study/bachelor/erstsemester/',
			'Informatik + Design + Kommunikation — gemeinsames Grundstudium, einfacher Wechsel bis Beginn 3. Semester möglich'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Studium organisieren',
		items: [
			'Curriculum und Angebote MI — https://www.medieninformatik.th-koeln.de/study/bachelor'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Module im 1. Fachsemester',
		items: [
			'Algorithmen und Programmierung 1 — Prof. Dr. Christian Kohls und Prof. Dr. Uwe van Heesch',
			'Einführung in die Medieninformatik — Prof. Dr. Elisabeth Kaliva'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Module im 1. Fachsemester · Teil 2',
		items: [
			'Mathematik 1 — Prof. Dr. Dietlind Zühlke',
			'Screendesign — Prof. Christian Noss'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Module im 1. Fachsemester · Teil 3',
		items: [
			'Theoretische Informatik — Prof. Dr. Florian Niebling',
			'Beschreibungen und ILU-Links auf der Ersti-Seite — https://www.medieninformatik.th-koeln.de/study/bachelor/erstsemester/'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Studienverlauf & Ordnung',
		items: [
			'Studienverlaufsplan Bachelor BPO5 — https://www.medieninformatik.th-koeln.de/mi-5.0/medieninformatik-bachelor/modulhandbuch-bpo5/#studienverlaufsplan',
			'Prüfungsordnung Medieninformatik Bachelor — https://www.th-koeln.de/studium/medieninformatik-bachelor--ordnungen-und-formulare_3963.php'
		],
		sequential: true
	},

	/* —— Master —— */
	{
		type: 'intro',
		title: 'Master Medieninformatik',
		subtitle: 'Curriculum · Schwerpunkte · Guided Projects · WiSe 2026/27'
	},
	{
		type: 'bullets',
		title: 'Studium organisieren',
		items: [
			'Curriculum und Angebote MI — https://www.medieninformatik.th-koeln.de/study/master'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/Curriculum.png',
				alt: 'Curriculum Master Medieninformatik',
				caption: 'Curriculum MI Master'
			}
		]
	},
	{
		type: 'bullets',
		title: 'Lehrveranstaltungen & Projekte',
		items: [
			'Modulübersicht und Guided Projects WiSe 2026/27 — https://www.medieninformatik.th-koeln.de/mi-5.0/medieninformatik-master/semester/2026-wise/',
			'Schwerpunkte: Designing for User Experiences · Developing Interactive Systems · Exploring Advanced Interactive Media'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/Guided_Projects.png',
				alt: 'Guided Projects',
				caption: 'Guided Projects — aktuelle Liste auf der Semesterseite'
			}
		]
	},

	/* —— Organisation —— */
	{
		type: 'intro',
		title: 'Studium organisieren',
		subtitle: 'Stundenplan · Module · Fristen · HOPS'
	},
	{
		type: 'bullets',
		title: 'Stundenplan & Module',
		items: [
			'Stundenplan Campus GM (Kürzel V/Ü/P/S/T, Raum, Dozierende)',
			'Modulhandbuch: Inhalte, Workload, Verantwortliche',
			' — https://mate.gm.th-koeln.de/'
		],
		sequential: true
	},

	/* —— Veranstaltungstypen (nach Stundenplan-Einführung) —— */
	{
		type: 'intro',
		title: 'Veranstaltungstypen',
		subtitle: 'Die Kürzel V · S · P · Ü · T im Stundenplan — Details im Modulhandbuch'
	},
	{
		type: 'bullets',
		title: 'Vorlesung & Seminar',
		items: [
			'**Vorlesung (V):** Stoff in größerer Gruppe, in der Regel ohne Anwesenheitspflicht — wird selten wiederholt, Nacharbeit liegt bei euch',
			'**Seminar (S):** vertieft Themen in kleineren Gruppen — Referate, Diskussion, aktive Mitarbeit erwartet'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Praktikum',
		items: [
			'**Praktikum (P):** praktisches Arbeiten am Rechner oder im Labor — häufig *Anwesenheitspflicht* (siehe Modulbeschreibung)',
			'Testate, Protokolle oder Abgaben werden abgenommen — Termine und Vorgaben der Dozierenden einhalten',
			'Pool-Regeln und Sicherheitshinweise gelten — vor dem ersten Termin klären, was mitgebracht werden muss'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Übung & Tutorium',
		items: [
			'**Übung (Ü):** Aufgaben und Anwendung des Stoffs, meist geleitet von Profs oder Mitarbeiter:innen — hier merkt ihr, ob das Gelernte sitzt - manchmal können hier Bonuspunkte für die Klausur gesammelt werden',
			'**Tutorium (T):** freiwillig, oft von Studierenden geleitet — Nachfragen ohne Hemmschwelle, bitte nutzen'
		],
		sequential: true
	},

	{
		type: 'bullets',
		title: 'Semesterplan & Fristen',
		items: [
			'Semesterplan Informatik / Termine und Fristen — https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/informatik-und-ingenieurwissenschaften/termine-und-fristen_19440.php',
			'Rund ums Studium: Organisation, Beratung, Prüfungsausschüsse — https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/informatik-und-ingenieurwissenschaften/rund-ums-studium_19430.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Prüfungspläne',
		items: [
			'HOPS: Prüfungspläne und -termine (ca. einen Monat vorher) — https://hops.gm.th-koeln.de:8080/apex/f?p=139:1'
		],
		sequential: true
	},

	/* —— Prüfungen —— */
	{
		type: 'intro',
		title: 'Prüfungen & Lernen',
		subtitle: 'CaMS ab November 2026 · ILU · Spaces · Sciebo'
	},
	{
		type: 'bullets',
		title: 'Prüfungsanmeldung',
		items: [
			'Medieninformatik: An- und Abmeldung ab Nov. 2026 im CaMS-Studienplaner — https://cams.th-koeln.de/',
			'Termine und Räume zusätzlich in HOPS — https://hops.gm.th-koeln.de:8080/apex/f?p=139:1'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Lernplattformen',
		items: [
			'ILU: Kursmaterial Campus GM — https://ilu.th-koeln.de',
			'TH Spaces: Lern-Community — https://spaces.th-koeln.de/'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Cloud',
		items: [
			'Sciebo: 30 GB Cloud (nichtkommerziell) — https://www.th-koeln.de/hochschule/sciebo_21988.php'
		],
		sequential: true
	},

	/* —— KI —— */
	{
		type: 'intro',
		title: 'Umgang mit KI',
		subtitle: 'Expertise vor Tooleinsatz — Kernkompetenz der Medieninformatik'
	},
	{
		type: 'bullets',
		title: 'Grundprinzip',
		items: [
			'KI-Tools sind meist nicht verboten — beurteilen könnt ihr Ergebnisse nur mit eigenem Fachwissen',
			'Kein Ersatz fürs Lernen: Grundlagen (Code, Mathe, Konzepte) selbst aneignen'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Regeln & Kennzeichnung',
		items: [
			'Ob KI erlaubt ist, entscheidet das Modul — im Zweifel bei Dozierenden nachfragen',
			'Prüfungsleistungen persönlich erbringen; KI nur als zugelassenes, gekennzeichnetes Hilfsmittel'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'THKI Chat',
		items: [
			'Offizielles Tool der TH: Login mit campusID, ohne Weitergabe der campusID-Daten — https://ki.th-koeln.de/',
			'Handreichung für Studierende (PDF) — https://www.th-koeln.de/mam/downloads/deutsch/studium/rundumsstudium/thki_chat_handreichung_studierende_v07.pdf'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Weitere KI-Zugänge',
		items: [
			'Academic Cloud (GWDG): Login mit campusID, verschiedene LLMs — https://academiccloud.de/',
			'Bibliothek: Recherche & KI, Grenzen bei Quellen und Halluzinationen — https://www.th-koeln.de/hochschulbibliothek/recherche--ki_134488.php'
		],
		sequential: true
	},

	/* —— Software & MI-Tools —— */
	{
		type: 'intro',
		title: 'Software & Tools',
		subtitle: 'Campuslizenzen · MI-Werkzeuge · Education-Angebote'
	},
	{
		type: 'bullets',
		title: 'Software der TH Köln',
		items: [
			'Campuslizenzen: Adobe Creative Cloud, Citavi, Microsoft, MATLAB, think-cell — https://www.th-koeln.de/hochschule/software_25067.php',
			'Bezug oft über OnTheHub eStore (campusID) — https://www.th-koeln.de/hochschule/onthehub-estore_73530.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Weitere Angebote',
		items: [
			'Linksammlung günstiger Education-Software (ohne Campus-IT-Support) — https://www.th-koeln.de/hochschule/linksammlung-software-fuer-studierende_28123.php',
			'Miro, Figma, JetBrains Education, GitHub Education — kollaborativ arbeiten'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Tools der Medieninformatik',
		items: [
			'Übersicht: Git, Verleih, Styleguide, wissenschaftliches Arbeiten — https://www.medieninformatik.th-koeln.de/tools/',
			'Git & GitHub — früh im Studium relevant — https://www.medieninformatik.th-koeln.de/tools/github'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Tools der Medieninformatik · Teil 2',
		items: [
			'Verleih: Kameras, Licht, Ton — https://www.medieninformatik.th-koeln.de/tools/verleih',
			'Styleguide für Präsentationen und Poster — https://www.medieninformatik.th-koeln.de/tools/styleguide'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Tools der Medieninformatik · Teil 3',
		items: [
			'Wissenschaftliches Arbeiten, Zitieren, LaTeX — https://www.medieninformatik.th-koeln.de/tools/wissenschaftliches-arbeiten',
			'Bewährte Software für die Module — https://www.medieninformatik.th-koeln.de/tools/software'
		],
		sequential: true
	},

	/* —— Anlaufstellen —— */
	{
		type: 'intro',
		title: 'Anlaufstellen',
		subtitle: 'Studienbüro · Fachschaft · Mentoring · Beratung'
	},
	{
		type: 'bullets',
		title: 'Studienbüro Campus GM',
		items: [
			'Einschreibung, Beurlaubung, Prüfungen, Bescheinigungen · Raum 1.126b · studium-gm@th-koeln.de',
			'Bitte Matrikelnummer in jeder Mail angeben'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/Studierendenbuero.png',
				alt: 'Studienbüro Campus Gummersbach',
				caption: 'Studienbüro · Raum 1.126b'
			}
		]
	},
	{
		type: 'bullets',
		title: 'Fachschaft',
		items: [
			'Fachschaft Gummersbach · Raum 1.123 · info@fachschaftgm.de — https://fachschaftgm.de/',
			'Instagram @fachschaftgm — https://www.instagram.com/fachschaftgm/',
			'Discord Fachschaft GM — https://discord.gg/tgHyeAVzp'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/Fachschaft.png',
				alt: 'Fachschaft Gummersbach',
				caption: 'Fachschaft · Raum 1.123'
			}
		]
	},
	{
		type: 'bullets',
		title: 'MI-Mentoren',
		items: [
			'Simon Porten, Uwe Müsse — mimentor@gm.fh-koeln.de',
			'Ersti-Seite der Medieninformatik — https://www.medieninformatik.th-koeln.de/study/bachelor/erstsemester/'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Psychosoziale Beratung',
		items: [
			'AStA: während des Semesters Mi 9:00–13:00 Uhr, Raum 1.112 — https://www.th-koeln.de/studium/beratung-bei-psycho-sozialen-problemen_64638.php',
			'Weitere Angebote von AStA und Kölner Studierendenwerk auf derselben Seite'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Mental Health & Finanzierung',
		items: [
			'Mental Health am Campus GM (u. a. Volker Schaefer, Uwe Müsse, Simon Porten) — https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/informatik-und-ingenieurwissenschaften/beratung_19432.php',
			'BAföG, Kredite, Jobtipps — https://www.th-koeln.de/studium/finanzierung-und-foerderung_208.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Weitere Beratung',
		items: [
			'Familienservicebüro — Studieren mit Kind — https://www.th-koeln.de/hochschule/familienfreundlichkeit_3759.php',
			'Studieren mit Beeinträchtigung — https://www.th-koeln.de/studium/unterstuetzung-im-studium_123932.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Gleichstellung',
		items: [
			'Gleichstellungsbeauftragte der Fakultät — Aline Kamp — https://www.th-koeln.de/personen/aline.kamp/'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/Kamp.png',
				alt: 'Aline Kamp',
				caption: 'Gleichstellungsbeauftragte · Aline Kamp'
			}
		]
	},
	{
		type: 'bullets',
		title: 'IT-Support',
		items: [
			'ADV-Labor GM: Netzzugang, GMID, lokale Dienste (Raum 3.206 oder3.207) — https://www.gm.th-koeln.de/advlabor/',
			'ILU-Support bei technischen Problemen — https://www.th-koeln.de/hochschule/lehr-lern-plattformen_115864.php',
			'CampusIT-Support — https://www.th-koeln.de/hochschule/campus-it_3866.php'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Bibliothek',
		items: [
			'Hochschulbibliothek — https://www.th-koeln.de/hochschulbibliothek/hochschulbibliothek_3862.php',
			'Infos für Studienanfänger*innen — https://www.th-koeln.de/hochschulbibliothek/informationen-fuer-studienanfaengerinnen_81392.php'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/BibMC.png',
				alt: 'Hochschulbibliothek Campus Gummersbach',
				caption: 'Bibliothek · MultiCa und Ausleihe'
			}
		]
	},

	/* —— Campusleben —— */
	{
		type: 'intro',
		title: 'Campusleben',
		subtitle: 'Mensa · Sport · Aufenthaltsorte'
	},
	{
		type: 'bullets',
		title: 'Alltag am Campus',
		items: [
			'Mensa Campus Gummersbach — Speiseplan — https://www.kstw.de/gastronomie/speiseplan',
			'Hochschulsport Köln und Gummersbach — https://hochschulsport-koeln.de/'
		],
		sequential: true
	},
	{
		type: 'figures',
		images: [
			{
				src: '/img/Testbar.png',
				alt: 'Testbar Medieninformatik',
				caption: 'Testbar · 3. Etage'
			},
			{
				src: '/img/Teekueche.png',
				alt: 'Teeküche Campus Gummersbach',
				caption: 'Teeküche am Campus'
			}
		]
	},

	/* —— Downloads —— */
	{
		type: 'intro',
		title: 'Zum Mitnehmen',
		subtitle: 'Offizielle PDFs der Fakultät — QR scannen'
	},
	{
		type: 'linkQr',
		title: 'Starthilfe · Ersti-Guide 2026',
		url: 'https://www.th-koeln.de/mam/downloads/deutsch/hochschule/fakultaeten/informatik_und_ingenieurwissenschaften/starthilfe_-_ersti-guide_campus_gummersbach_2026.pdf',
		hint: 'Guide für Erstsemester*innen am Campus Gummersbach (PDF).'
	},
	{
		type: 'linkQr',
		title: 'Ansprechpartner*innen Informatik',
		url: 'https://www.th-koeln.de/mam/downloads/deutsch/hochschule/fakultaeten/informatik_und_ingenieurwissenschaften/ansprechpartner_studienbereich_informatik_0925.pdf',
		hint: 'Kontakte Studienbereich Informatik, u. a. Prüfungsausschuss und Studiengangsleitung (PDF).'
	},
	{
		type: 'linkQr',
		title: 'Ersti-Infos Campus Gummersbach',
		url: 'https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/campus-gummersbach-informationen-fuer-erstsemester_77721.php',
		hint: 'Checkliste, Tools und Vorkurse — die zentrale Fakultätsseite für Erstis.'
	},

	/* —— Online —— */
	{
		type: 'intro',
		title: 'Medieninformatik online',
		subtitle: 'Website · Instagram · YouTube · Blog · Mastodon'
	},
	{
		type: 'linkQr',
		title: 'Medieninformatik-Website',
		url: 'https://www.medieninformatik.th-koeln.de/',
		hint: 'Zum Mitschreiben oder später nach dem Termin: QR scannen oder URL abtippen.'
	},
	{
		type: 'bullets',
		title: 'Kanäle der Medieninformatik',
		items: [
			'Instagram @mithkoeln — https://www.instagram.com/mithkoeln/',
			'YouTube MI Köln — https://www.youtube.com/mikoeln',
			'MI-Blog — https://www.medieninformatik.th-koeln.de/blog/'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Kanäle am Campus',
		items: [
			'Instagram @thkoeln_gm — Events und Campus-Infos — https://www.instagram.com/thkoeln_gm/',
			'WhatsApp-Kanal (Fristen, Semesterpläne) und Discord „TH Köln Gummersbach“ — Infos auf der Ersti-Seite'
		],
		sequential: true
	},

	/* —— Tipps —— */
	{
		type: 'bullets',
		title: 'Tipps',
		items: [
			'Lerngruppen bilden — gemeinsames Erarbeiten verbessert das Verständnis',
			'Fahrgemeinschaften — z. B. bei RB25-Ausfall'
		],
		sequential: true
	},
	{
		type: 'bullets',
		title: 'Tipps · Teil 2',
		items: [
			'Deutschlandstipendium — https://www.th-koeln.de/studium/deutschlandstipendium_225.php'
		],
		sequential: true
	},
	{
		type: 'quote',
		text: 'Beratungsangebote kennt ihr jetzt. Nutzt sie, bevor aus einer Unsicherheit ein Problem wird.',
		attribution: 'Mentoring Medieninformatik · WiSe 2026/27'
	},
	{
		type: 'linkQr',
		title: 'Handout Mentoring',
		url: 'https://th-koeln.sciebo.de/s/i7nrGSqDKgq28Ke',
		hint: '**Handout-MI-Mentoring-WiSe-2026-27.pdf** auf sciebo — Download zum Mitnehmen und Teilen.'
	}
];
