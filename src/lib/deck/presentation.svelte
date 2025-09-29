<script lang="ts">
	import Slide from './slide.svelte'
	import PicSlide from './picslide.svelte'
</script>



<Slide className="mi-slide-content">
    <h1>Hello MI</h1>
    <h3>Starting Guide</h3>
    
</Slide>

<Slide>
    <Slide className="mi-slide-content">
        <h1>Erste Handlungen</h1>
    </Slide>
    <!-- CaMS-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">CaMS</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://cams.th-koeln.de/" target="_blank" rel="noopener noreferrer">https://cams.th-koeln.de/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Bewerbung für einen Studienplatz
                </li>
                <li>
                    Studierendenmanagement (Zahlungsinformationen, Bescheinigungen, Personendatenverwaltung, ...)
                </li>
                <li>
                    <i>NEU ab November 2025:</i> Prüfungsmanagement im CaMS
                </li>
            </ul>
        </div>
    </Slide>
    <!-- WLAN / eduroam-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">WLAN / eduroam</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/hochschule/eduroam_25369.php" target="_blank" rel="noopener noreferrer">https://www.th-koeln.de/hochschule/eduroam_25369.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    WLAN-Zugang an weitestgehend allen Hochschulen in Deutschland und vielen anderen Ländern
                </li>
            </ul>
        </div>
    </Slide>
    <!-- VPN-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">VPN</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/hochschule/vpn---virtual-private-network_26952.php">https://www.th-koeln.de/hochschule/vpn---virtual-private-network_26952.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Virtual Private Network
                </li>
                <li>
                    Zugriff auf Hochschulressourcen von außerhalb
                </li>
                <li>
                    Sichere Verbindung zum Hochschulnetz
                </li>
            </ul>
        </div>
    </Slide>
    <!-- CampusID-Center-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">CampusID-Center</h2>
            <p style="font-size: 1rem; margin-top: 0rem;">(Zugriff aus dem Hochschulnetz)</p>
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://campusid.th-koeln.de/">https://campusid.th-koeln.de/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Identität an der TH Köln
                </li>
                <li>
                    Einsicht gespeicherter persönlicher Daten 
                </li>
                <li>
                    Änderung des Passwortes
                </li>
                <li>
                   Bearbeitung der E-Mail-Konfiguration
                </li>
            </ul>
        </div>
    </Slide>
    <!-- sMail-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">sMail</h2>
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://webmail.th-koeln.de/login.php">https://webmail.th-koeln.de/login.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    eMail-Dienst der TH Köln
                </li>
                <li>
                    offizielle Kommunikation erfolgt hierüber
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Multi-Faktor-Authentifizierung-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Multi-Faktor-Authentifizierung</h2>
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/hochschule/zwei-faktor-authentisierung-2fa_83214.php">https://www.th-koeln.de/hochschule/zwei-faktor-authentisierung-2fa_83214.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Erhöhung der Sicherheit aller persönlichen Daten
                </li>
                <li>
                    ab 01.10.2025 für alle Dienste der TH Köln erforderlich
                </li>
                <li>
                    Hinterlegung mind. eines weiteren Faktors (eMail, App, Passkey, ...)
                </li>
            </ul>
        </div>
    </Slide>
    <!-- MultiCa-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">MultiCa</h2>
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/studium/studierendenausweis-multica_361.php">https://www.th-koeln.de/studium/studierendenausweis-multica_361.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    muss in jedem Semester validiert werden (Bibliothek, Mensa)
                </li>
                <li>
                    Zugang zum teilöffentlichen Parkplatz an jedem Campus der TH Köln
                </li>
                <li>
                    Ausweis bei Prüfungen
                </li>
            </ul>
        </div>
    </Slide>
    <PicSlide picOne={{src:"/src/lib/assets/img/MensaMC.png", title:"Mensa (Eingangsbereich)"}} picTwo={{src:"/src/lib/assets/img/BibMC.png", title:"Bibliothek (Eingangsbereich)"}} cols={2}></PicSlide>
    <PicSlide picOne={{src:"/src/lib/assets/img/MCAufwerter.png", title:"Aufwerter (Bibliothek)"}} cols={1}></PicSlide>
    <PicSlide picOne={{src:"/src/lib/assets/img/Schranke.png", title:"Schrank (Parkplatz)"}} picTwo={{src:"/src/lib/assets/img/Kopierer.png", title:"Öffentlicher Kopierer (Postfachraum)"}} cols={2}></PicSlide>
    <!-- GMID-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">GMID</h2>
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://id.gm.th-koeln.de">https://id.gm.th-koeln.de</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    spezieller LogIn am Campus Gummersbach
                </li>
                <li>
                    PC-Pools, Praktikumstool
                </li>
            </ul>
        </div>
    </Slide>
    <PicSlide picOne={{src:"/src/lib/assets/img/GMID.png", title:"GMID-Terminal (3. Etage)"}} cols={1}></PicSlide>
    
</Slide>

<Slide>
    <Slide className="mi-slide-content">
        <h1>Vorlesungsbeginn</h1>
    </Slide>
    <!-- Studiengangsinformationen-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Studiengangsinformationen</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/studium/alle-studiengaenge-auf-einen-blick_76.php">https://www.th-koeln.de/studium/alle-studiengaenge-auf-einen-blick_76.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Bachelor: <a href="https://www.th-koeln.de/studium/medieninformatik-bachelor_2379.php">https://www.th-koeln.de/studium/medieninformatik-bachelor_2379.php</a>
                </li>
                <li>
                    Master: <a href="https://www.th-koeln.de/studium/medieninformatik-master_3729.php">https://www.th-koeln.de/studium/medieninformatik-master_3729.php</a>
                </li>
                <li>
                    Inhalte, Ordnungen, Formulare, ...
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Curriculum-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Curriculum</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.medieninformatik.th-koeln.de/study/">https://www.medieninformatik.th-koeln.de/study/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Bachelor: <a href="https://www.medieninformatik.th-koeln.de/study/bachelor/">https://www.medieninformatik.th-koeln.de/study/bachelor/</a>
                </li>
                <li>
                    Master: <a href="https://www.medieninformatik.th-koeln.de/study/master/">https://www.medieninformatik.th-koeln.de/study/master/</a>
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Modulhandbuch-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Modulhandbuch</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://module.gm.th-koeln.de/">https://module.gm.th-koeln.de/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Beschreibung von Modulen
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Stundenplan-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Stundenplan</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://hops.gm.th-koeln.de/hops/modules/timetable/">https://hops.gm.th-koeln.de/hops/modules/timetable/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Übersicht über die geplanten Vorlesungen im aktuellen Semester
                </li>
                <li>
                    Planungsgrundlage des Semesters
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Semesterplan-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Semesterplan</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/informatik-und-ingenieurwissenschaften/termine-und-fristen_19440.php">https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/informatik-und-ingenieurwissenschaften/termine-und-fristen_19440.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Übersicht über Vorlesungszeiten
                </li>
                <li>
                    Darstellung von Projekt- und Prüfungswochen
                </li>
            </ul>
        </div>
    </Slide>
    <!-- PSSO-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">PSSO</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://psso.th-koeln.de">https://psso.th-koeln.de</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    TAN-Generierung
                </li>
                <li>
                    An-/Abmeldung zu/von Prüfungen
                </li>
                <li>
                    Notenübersicht
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Sciebo-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Sciebo</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/hochschule/sciebo_21988.php">https://www.th-koeln.de/hochschule/sciebo_21988.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Cloud-basierter Datei-Speicher
                </li>
                <li>
                    30GB Speicherplatz
                </li>
                <li>
                    nichtkommerzieller, öffentlich-rechtlicher Anbieter
                </li>
            </ul>
        </div>
    </Slide>
    <!-- ILU-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">ILU</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://ilu.th-koeln.de">https://ilu.th-koeln.de</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    zentrale Lernplattform des Campus Gummersbach
                </li>
                <li>
                    Bereitstellung von Lehr- und Lernmaterialien pro Modul
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Praxissemester-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Praxissemester</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://praxissemester.gm.th-koeln.de/informationen/informatik">https://praxissemester.gm.th-koeln.de/informationen/informatik</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Organisationsplattform für das Praxissemester in der Lehreinheit Informatik
                </li>
                <li>
                    Praxissemesterordnung MI: <a href="https://www.th-koeln.de/mam/downloads/deutsch/studium/studiengaenge/f10/ordnungen_plaene/f10_praxissemesterordnung_mif_2024-08-19-2.pdf">https://www.th-koeln.de/mam/downloads/deutsch/studium/studiengaenge/f10/ordnungen_plaene/f10_praxissemesterordnung_mif_2024-08-19-2.pdf</a>
                </li>
            </ul>
        </div>
    </Slide>
</Slide>

<Slide>
    <Slide className="mi-slide-content">
        <h1>Hilfsmittel</h1>
    </Slide>
    <!-- Software für Studierende-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Software für Studierende</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/hochschule/linksammlung-software-fuer-studierende_28123.php">https://www.th-koeln.de/hochschule/linksammlung-software-fuer-studierende_28123.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Allgemeine Softwareangebote für Studierende (GitHub, ...)
                </li>
                <li>
                    Microsoft Office 365: <a href="https://www.th-koeln.de/hochschule/office365_74151.php">https://www.th-koeln.de/hochschule/office365_74151.php</a>
                </li>
                <li>
                    OnTheHub: <a href="https://www.th-koeln.de/hochschule/onthehub-estore_73530.php">https://www.th-koeln.de/hochschule/onthehub-estore_73530.php</a>
                </li>
            </ul>
        </div>
    </Slide>
    <!-- THKI Chat-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">THKI Chat</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://ki.th-koeln.de/">https://ki.th-koeln.de/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    KI-Chat mit diversen Kontexten
                </li>
                <li>
                    Hinweis: Besonnener Umgang mit den Inhalten, Überprüfung der Inhalte, Nutzung als Tool, ...
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Miro-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Miro</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://miro.com">https://miro.com</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Whiteboard-Tool für gemeinsame Arbeit
                </li>
                <li>
                    Kollaboratives Arbeiten in Teams
                </li>
                <li>
                    Ideenvisualisierung, Brainstorming, ...
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Figma-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Figma</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.figma.com/">https://www.figma.com/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Design-Tool für gemeinsame Arbeit
                </li>
                <li>
                    Kollaboratives Design von Prototypen
                </li>
                <li>
                    Werkzeug des Moduls Screen Design im 1.Fachsemester des Bachelors
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Entwicklungsumgebungen-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Entwicklungsumgebungen</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.jetbrains.com/">https://www.jetbrains.com/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Entwicklungsumgebungen für verschiedene Programmiersprachen (Education License)
                </li>
                <li>
                    IntelliJ IDEA, PyCharm, CLion, ...
                </li>
            </ul>
        </div>
    </Slide>
</Slide>

<Slide>
    <Slide className="mi-slide-content">
        <h1>Anlauf- und Beratungsstellen</h1>
    </Slide>
    <!-- Fachschaft Gummersbach-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Fachschaft Gummersbach</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://fachschaftgm.de/">https://fachschaftgm.de/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Vertretung der Studierenden und ihrer Interessen
                </li>
                <li>
                    Anlaufstelle für Fragen zum Studium oder auch persönliche Gespräche
                </li>
            </ul>
        </div>
    </Slide>
    <PicSlide picOne={{src:"/src/lib/assets/img/Fachschaft.png", title:"Fachschaftsraum (1. Etage)"}} cols={1}></PicSlide>
    <!-- Psycho-sozialer Dienst des AStA-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Psycho-sozialer Dienst des AStA</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/studium/beratung-bei-psycho-sozialen-problemen_124006.php">https://www.th-koeln.de/studium/beratung-bei-psycho-sozialen-problemen_124006.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Anlaufstelle für Studierende bei psycho-sozialen Problemen oder persönlichen Krisen verschiedenster Art
                </li>
                <li>
                    donnerstags am Campus Gummersbach, nach vorheriger Anmeldung
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Krisenberatung - Studienberatung-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Krisenberatung - Studienberatung</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/studium/beratung-in-persoenlichen-krisenzeiten_124036.php">https://www.th-koeln.de/studium/beratung-in-persoenlichen-krisenzeiten_124036.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Beratung als Teil der zentralen Studienberatung
                </li>
            </ul>
        </div>
    </Slide>
    <!-- MI-Mentor:innen-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">MI-Mentor:innen</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.medieninformatik.th-koeln.de/study/">https://www.medieninformatik.th-koeln.de/study/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Direkte Anlaufstelle für Fragen zu Studium und Studienfächern  (<a href="mailto:mimentor@gm.fh-koeln.de">mimentor@gm.fh-koeln.de</a>)
                </li>
                <li>
                    Unterstützung bei der Orientierung und Planung des Studiums
                </li>
                <li>
                    Lioba Brandhoff (<a href="mailto:lioba.brandhoff@th-koeln.de">lioba.brandhoff@th-koeln.de</a>), Simon Schulte (<a href="mailto:simon_ludwig.schulte@th-koeln.de">simon_ludwig.schulte@th-koeln.de</a>)
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Bibliothek-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Bibliothek</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/hochschulbibliothek/hochschulbibliothek_3862.php">https://www.th-koeln.de/hochschulbibliothek/hochschulbibliothek_3862.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Online-Präsenz der Bibliothek
                </li>
                <li>
                    Online-Katalog der verfügbaren Medien (Bücher, Online-Medien, ...)
                </li>
            </ul>
        </div>
    </Slide>
</Slide>

<Slide>
    <Slide className="mi-slide-content">
        <h1>Allgemeines</h1>
    </Slide>
    <!-- Online-Präsenz der MI-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Online-Präsenz der MI</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.medieninformatik.th-koeln.de/">https://www.medieninformatik.th-koeln.de/</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Instagram: <a href="https://www.instagram.com/mithkoeln/">https://www.instagram.com/mithkoeln/</a>
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Stipendium-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Stipendium</h2> 
            <p style="font-size: 1rem; margin-top: -0.5rem;">Link: <a href="https://www.th-koeln.de/studium/deutschlandstipendium_225.php">https://www.th-koeln.de/studium/deutschlandstipendium_225.php</a></p>
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Finanzielle Unterstützung für Studierende durch Stipendium
                </li>
            </ul>
        </div>
    </Slide>
</Slide>

<Slide>
    <Slide className="mi-slide-content">
        <h1>Tipps</h1>
    </Slide>
    <!-- Lerngruppen bilden-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Lerngruppen bilden</h2> 
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    gemeinsames Erarbeiten von Lerninhalten verbessert das Verständnis
                </li>
            </ul>
        </div>
    </Slide>
    <!-- Fahrgemeinschaften-->
    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Fahrgemeinschaften</h2> 
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    viele Studierende kommen aus Ballungsräumen wie Köln, Bonn, ...
                </li>
                <li>
                    Hilfe bei z. B. Ausfall der RB25
                </li>
                <li>
                    Entspannung des Parkaufkommens
                </li>
            </ul>
        </div>
    </Slide>

    <Slide className="mi-slide-content">
        <div style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 0;">Mindset</h2> 
        </div>
        <div class="mt-8">
            <ul>
                <li>
                    Schule: Aufgaben wurden klar vorgegeben
                </li>
                <li>
                    Studium: Aufgaben werden selbstständig bearbeitet, Selbstständigkeit und Eigeninitiative sind wichtig
                </li>
                <li>
                    Steigerung der Selbstverantwortung und Entscheidungsfindung
                </li>
            </ul>
        </div>
    </Slide>
</Slide>
