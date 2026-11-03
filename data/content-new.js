// Contenu des pages, repris du site Google d'origine (Garde de Coruscant).
// Les clés correspondent aux `id` des pages définies dans script.js.
// Les tableaux (Google Sheets) sont dans data/ et chargés à la demande.
const CONTENT = {
  "site-pour-protocoles": `
<div class="gs-section">
<p><a class="btn primary" href="https://protocoles-shock.onrender.com/" target="_blank" rel="noopener">Site de Gestion des Protocoles</a></p>
</div>
<div class="gs-section">
<div class="embed video"><iframe src="https://www.youtube.com/embed/d3hv_7WMEzw" title="Pour Shock Trooper : tuto site Gestion des Protocoles" loading="lazy" allowfullscreen></iframe></div>
</div>
`,

  "casier-shock": `
<div class="gs-section">
<div class="sheet" data-sheet="casier-shock"></div>
</div>
`,

  "document-protocoles": `
<div class="gs-section">
<div class="sheet" data-sheet="protocoles"></div>
</div>
<div class="gs-section">
<div class="gdoc">
<p><strong>Système de Sanction - Garde de Coruscant</strong></p>
<h2 class="doc-title">Système de Sanction</h2>
<p class="doc-subtitle"><strong>Document à l’attention des hommes de la Flotte Cosmos</strong></p>
<p><em>Si une infraction n’est pas répertorié, les personnes qui en ont l’autorité décideront eux même quelle sanction sera appliquée.</em></p>
<p><em>Les personnes ordonnant les protocoles se réservent le droit de choisir une autre sanction en fonction du contexte de la situation.</em></p>
<p><em>Des blâmes régimentaires peuvent automatiquement être appliqués à partir de </em><strong><em>P4</em></strong><em>, en dessous, il faut que ce soit indiqué </em><strong>[Blâme]</strong><em>.</em></p>
<h3>I - INFRACTIONS RÉPÉTITIVES OU ACCUMULÉS</h3>
<p>La répétition ou l’accumulation d’infractions entraîne une augmentation de la sanction appliquée.</p>
<h3><strong>II - INFRACTIONS MINEURS (P1 à P4)</strong></h3>
<h4><strong>Avertissement oral :</strong></h4>
<ul class="lvl-0"><li>Oublie de garde à vous / salut</li><li>Prise de parole sans permission</li><li>Arme sortie sans code</li><li>Prise de hangar non autorisée</li><li>Entre / sort du code marron sans autorisation</li></ul>
<h4><strong>Protocole 1</strong></h4>
<ul class="lvl-0"><li>Utilisation d’un jetpack / grappin sur base ou venator sans code</li><li>Marche sur la tête de ses camarades <em>(en Code Marron, marcher sur la tête pour retourner / sortir des rangs est toléré pour ne pas déranger tout le monde)</em></li><li>Perturbe d’autres clones</li></ul>
<h4><strong>Protocole 2</strong></h4>
<ul class="lvl-0"><li>Utilisation interdite de matériel non létal</li><li>Mensonge<strong> léger</strong></li></ul>
<h4>Protocole <strong>3</strong></h4>
<ul class="lvl-0"><li>Dégradation du matériel / base <em>(utilisation d'explosifs en SDE..)</em></li><li>Dénonciation calomnieuses <strong>[Blâme]</strong></li><li>Automutilation</li><li>Ordonne un protocole sans raison valable <strong>[Blâme]</strong></li><li>Comportement non militaire <em>(manque de sérieux, langage inapproprié..) </em></li><li>Acte ayant mis en danger d’autres clones sans avoir blessé quiconque <em>(utilisation de grenade bacta en première ligne/Utilisation de bouclier énergetique dans un milieu clos..) </em><strong>[Blâme Médical]</strong></li><li>Intrusion d’un endroit interdit</li><li>Interfère dans un combat entre deux utilisateurs de sabre</li><li>Pilotage sans licence</li><li>Tentative de fuite</li><li>Décollage sans autorisation</li><li>Sortie de la base sans autorisation</li><li>Perturbation du travail de la Shock Trooper <strong>[Blâme]</strong></li></ul>
<h4>Protocole <strong>4</strong></h4>
<ul class="lvl-0"><li>Utilisation interdite de matériel létal</li><li>Trophée illégale</li><li>Consommation de contrebande</li><li>Provocation</li><li>Vol / Tentative de vol</li><li>Abus d’autorité <strong>sur la hiérarchie</strong></li><li>Bagarre mineur</li><li>Mensonge <strong>grave</strong></li><li>Infliction<strong> involontaire</strong> d’une blessure sur un frère d’arme</li><li>Compromission d’une mission</li><li>Tentative de libération / libération d’un individu en cours d’arrestation</li><li>Espionnage non autorisé d’un membre de la République</li><li>Action suicidaire</li></ul>
<h3>III - DÉLITS<strong> (P5 à P7)</strong></h3>
<h4><strong>Protocole 5</strong></h4>
<ul class="lvl-0"><li>Manque de respects envers un supérieur</li><li>Insubordination</li><li>Refus d'obéissance</li><li>Menace envers un frère d’arme</li><li>Conflit verbale</li><li>Faux témoignage</li><li>Refus de former les CCT</li><li>Outrage envers un supérieur <strong>par un non-officier</strong></li><li>Injustice (non impartialité)</li><li>Usurpation de grade / d’identité</li><li>Refuse de soigner une personne (uniquement pour un médecin)</li><li>Applique un protocole sans être Shock Trooper</li><li>Prise d’alcool sur base en dehors des permissions</li><li>Relation sexuelle</li></ul>
<h4><strong>Protocole 6</strong></h4>
<ul class="lvl-0"><li>Tentative de corruption</li><li>Harcèlement moral</li><li>Incitation à l’effraction du règlement</li><li>Outrage envers un supérieur <strong>par un officier</strong></li><li>Dénigrement de régiment</li><li>Rixe / Bagarre <strong>majeur</strong></li><li>Ordonne ou incite à une action suicidaire</li></ul>
<h4><strong>Protocole 7</strong></h4>
<ul class="lvl-0"><li>Pression, menace, incitation à un clone pour qu’il ne dépose pas plainte</li><li>Manque de respect grave (insulte)</li><li>Menace de mort</li><li>Complot militaire</li><li>Sabotage volontaire de matériel Républicain</li><li>Désertion</li></ul>
<h3><strong>IV - CRIMES (P8)</strong></h3>
<h4><strong>Protocole 8</strong></h4>
<ul class="lvl-0"><li>Infliction <strong>volontaire</strong> d’une blessure sur un frère d’arme</li><li>Homicide volontaire</li><li>Séquestration / Torture</li><li>Kidnapping</li><li>Viol</li><li>Collaboration avec l'ennemi</li><li>Agression d’un autre clone</li><li>Crime de guerre</li><li>Comportement d’un clone défaillant</li><li>Divulgation de données Confidentiel</li><li>Trahison</li></ul>
<p class="center"><em>Document fait par Achref, validé par les Officiers Shock Trooper, l’Amirauté, la Direction BOS ainsi que le Grand Amiral.</em></p>
<p><em>/</em></p>
</div>
</div>

<div class="gs-section">
<h3>Protocoles</h3>
<div class="gdoc">
<p class="center"><strong>Protocole Shock</strong><em><br></em></p>
<p><strong><u>Qui peut ordonner des protocoles : </u></strong><br></p>
<p>-Les Shocktrooper</p>
<p>-Les MR sauf Cadet et Enseigne</p>
<p>-Les CMD et Gérants de régiment ( 408th et RC Compris )</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de VCMD <br>-Les Chimaera à partir de LTN</p>
<p>-La Direction BOS</p>
<p>-Les Généraux Jedi</p>
<p>-Les MDCJ / HCJ</p>
<p>-Les membres de l'Amirauté</p>
<p>Toutes les personnes citées ci-dessus peuvent ordonner des protocoles mais pas n’importe lesquels.<br><br><strong><u>Qui peut ordonner quel protocole :</u></strong></p>
<p>Comme vous le savez il y a 10 protocoles + 1 réservé au Jedi au total. Selon votre grade et votre régiment vous pouvez ordonner certains protocoles et d'autres non. Voici la liste des protocoles qui peuvent être ordonnés selon votre grade et votre régiment :</p>
<p><em><u>Shocktrooper :</u></em> Protocole : 1;2;3;4;J</p>
<p><em><u>CMD et CMDM Shocktrooper :</u></em> Protocole : 1;2;3;4;5;6;J</p>
<p><em><u>Major, VCMD Shocktrooper :</u></em> Protocole : 1;2;3;4;5;J</p>
<p><em><u>Marine Républicaine :</u></em> Protocole : 1;2;3;4;J</p>
<p><em><u>Commodore</u></em> : Protocole : 1;2;3;4;5;J</p>
<p><em><u>CMD :</u></em> Protocole : 1;2;3;4;J</p>
<p><em><u>Gérants de régiment :</u></em> Protocole : 1;2;3;4;5;J</p>
<p><em><u>Membre du BRS :</u></em> Protocole : 1;2;3;4;5;J</p>
<p><em><u>ARC Alpha à partir de Vice-Commandant :</u></em> Protocole : 1;2;3;4;J</p>
<p><em><u>CMDM ARC Alpha :</u></em> 1;2;3;4;5;J<br><em><u>Chimaera à partir de Lieutenant :</u></em> 1;2;3;4;5;J</p>
<p><em><u>Généraux Jedi :</u></em> Protocole : 1;2;3;4;5;J</p>
<p><em><u>MDCJ / HCJ :</u></em> Protocole : 1;2;3;4;5;J</p>
<p><em><u>Membres de l’Amirauté :</u></em> 1;2;3;4;5;6;7;8;J</p>
<p><em><u>Direction BOS :</u></em> 1;2;3;4;5;6;7;8;J</p>
<p>À l'exception du CMDM Shock, des CMD Shock ( Exclusivement le protocole 6 ), de la Direction BOS et de l’amirauté : les protocoles 6 et 7 ne peuvent être ordonnés que par les officiers uniquement sur leur propre régiment.</p>
<p>Tous les grades et régiments cités ci-dessus peuvent ordonner des protocoles mais pas contre n'importe qui, voici en fonction de votre grade et votre régiment sur qui vous pouvez ordonner des protocoles.</p>
<p><strong><u>Qui peut ordonner un protocole sur qui :</u></strong></p>
<p><strong>Shocktrooper -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les Shocktrooper de grade supérieur</p>
<p>-Les CMDM</p>
<p>-Les MR</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera<br><br><strong>MJR et VCMD Shock -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera<br><br><strong>CMD et CMDM Shock -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p><strong>Marine Républicaine -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p><br>-Les Shocktrooper</p>
<p>-Les CMDM</p>
<p>-Les MR de grade supérieur</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Jedi ( En fonction du grade ) et CMDJ ( Seulement à partir de Commandant )</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p><strong>Direction BOS -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les MDCJ / HCJ</p>
<p>-Les Chimaera</p>
<p><strong>CMD et Gérants de régiment -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p><br>-Les Shocktrooper</p>
<p>-Les CMDM</p>
<p>-Les MR à partir de Lieutenant</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p><strong>Membre du BRS -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les Shocktroooper</p>
<p>-Les CMDM <br>-Les MR</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p><strong>ARC Alpha a partir de Vice-Commandant -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p><br>-Les Shocktrooper</p>
<p>-Les CMDM</p>
<p>-Les MR</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha de grade supérieur</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p>-Les MDCJ / HCJ</p>
<p><strong>CMDM ARC Alpha -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p><br>-Les Shocktrooper</p>
<p>-Les membres du BRS</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p><strong>Chimaera à partir de Lieutenant -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les Shocktrooper</p>
<p>-Les CMDM</p>
<p>-Les MR</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha à partir de Capitaine</p>
<p>-Les RC</p>
<p>-Les Généraux Jedi et MDCJ / HCJ</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p><strong>Généraux Jedi -&gt;</strong> Tous les membres de leur régiment sauf le CMDM</p>
<p><strong>Membre de l'Amirauté -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-La Direction BOS</p>
<p>-Les MDCJ / HCJ</p>
<p>-Les Chimaera</p>
<p><strong>MDCJ et HCJ -&gt;</strong> Tous les membres de l'armée sauf :</p>
<p>-Les Shocktrooper</p>
<p>-Les CMDM</p>
<p>-Les MR</p>
<p>-Les membres du BRS</p>
<p>-Les ARC Alpha dès le grade de Capitaine</p>
<p>-Les RC</p>
<p>-La Direction BOS</p>
<p>-Les membres de l’Amirauté</p>
<p>-Les Chimaera</p>
<p>Si vous ne pouvez ordonner un protocole mais que vous constatez des faits graves qui méritent un protocole, vous pouvez toujours passer par le Bureau des plaintes ou alors faire une demande de protocole auprès d'un Shocktrooper en apportant des témoins ou des preuves.</p>
<p><em>Document par Power, validé par les officiers Shocktrooper ainsi que les Responsables serveur</em></p>
</div>
</div>
`,

  "effectif": `
<div class="gs-section">
<div class="sheet" data-sheet="effectif"></div>
</div>
`,

  "reglement-shock": `
<div class="gs-section">
<h2 class="center">RÈGLEMENT SHOCK TROOPER</h2>
<p class="center"><strong>Tout enfreint à ce règlement pourra entraîner des sanctions allant du simple avertissement à la rétrogradation.</strong></p>
<p class="center"><strong>Ce règlement doit être respecté par TOUS peu importe votre grade.</strong></p>
<p class="center"><strong>Ce règlement n’est pas prioritaire au règlement du serveur :</strong><a href="https://sites.google.com/view/clone-wars-rp-cosmos/fonctionnement-du-serveur/r%C3%A8glements-rp/r%C3%A8glement-g%C3%A9n%C3%A9ral?authuser=0" target="_blank" rel="noopener"> <strong>Règlement Serveur</strong></a></p>
<h3 class="center">1. Discipline et comportement</h3>
<p class="center"><strong>1.1 :</strong> Un Shock se doit d’être sérieux en toutes circonstances.</p>
<p class="center"><strong>1.2 :</strong> En cas de manque de sérieux, de non respect des règles, la personne concernée s’expose à des sanctions de la part du corps Officier.</p>
<p class="center"><strong>1.3 :</strong> Lorsqu’un supérieur hiérarchique vous donne un ordre, vous vous devez de l'exécuter sur le champ sauf si cela contredit les règles d’or.</p>
<p class="center"><strong>1.4 :</strong> Vous devez avoir un langage militaire correct sur base.</p>
<p class="center"><strong>1.5 :</strong> Vous devez garder votre sang froid durant toutes vos interventions.</p>
<p class="center"><strong>1.6 :</strong> Même en HRP, vous vous devez de garder votre sang froid et de ne pas commencer à vous énerver. Lors d’embrouilles, merci de ne pas répondre.</p>
<p class="center"><strong>1.7 :</strong> Seul le HRP vocal est autorisé dans les quartiers (zone de spawn). À ne pas confondre avec la zone carcérale.</p>
<p class="center"><strong>1.8 :</strong> Lors d’un code <strong>Orange</strong>, <strong>Rouge</strong>, <strong>Vert</strong> ou <strong>Noir</strong>, il est obligatoire de protéger les zones sensibles en priorité, de protéger les membres de la marine républicaine, lorsqu’ils sont à côté de vous, ou si ces derniers vous le demandent.</p>
<p class="center"><strong>1.9 :</strong> Autorisation de rentrer dans les quartiers BOS UNIQUEMENT en code<strong> Orange</strong> ou<strong> Rouge</strong> et lorsque qu’il n’y a pas des membres BOS.</p>
<p class="center"><strong>1.10 :</strong> Les prisonniers républicains ne doivent en aucun cas être torturés (physiquement).</p>
<p class="center"><strong>1.11 :</strong> Votre présence sur la radio Discord lors des missions est obligatoire et vous devez rester sérieux.</p>
<p class="center"><strong>1.12 :</strong> Toute insulte est prohibée au sein de la Shock et avec les autres régiments.</p>
<p class="center"><strong>1.13 :</strong> Les Shock Trooper sont les représentants de la république. Ils doivent protéger et veiller à la sécurité du Venator / Base et de ses occupants.</p>
<p class="center"><strong>1.14 :</strong> Les Shock Troopers doivent se limiter de parler au maximum sauf autorisation d’un supérieur.</p>
<p class="center"><strong>1.15 :</strong> Les Shock Trooper doivent retirer leur casque et peuvent porter leur béret lors du débriefing interne dans les quartiers Shock de fin de mission.</p>
<p class="center"><strong>1.16 :</strong> Les Shock Trooper ont l'autorisation de patrouiller sur base, en Code Blanc et sans menace sérieuse avec leur béret. Néanmoins, pour toute sortie à l'extérieur de la base, ou lorsqu'un Code Orange / Rouge est déclenché ou lors du départ en mission, ils doivent remettre leur casque.</p>
<p class="center"><strong>1.17 :</strong> Le port du béret est interdit en briefing d'avant mission (Code Marron d'avant mission).</p>
<p class="center"><strong>1.18 :</strong> Il est obligatoire de faire 3 sommations orales avant de tazer un clone récalcitrant sauf en cas de mise en danger de votre vie ou celle d'autrui.</p>
<p class="center">Exeption : Les sommations ne sont pas exigés dans le secteur carcéral. Si un clone part en courant dans ce secteur, il est obligatoire de le tazer de suite.</p>
<h3 class="center">2. Protocoles</h3>
<p class="center"><strong>2.1 :</strong> Il est obligatoire de respecter l’ensemble des procédures pour une mise en protocole.</p>
<p class="center"><strong>2.2 :</strong> Pour ordonner un P5, vous devez obligatoirement avoir l’autorisation d’un MJR Shock ou plus.</p>
<p class="center"><strong>2.3 :</strong> Seuls les Shock Trooper sont autorisés à appliquer des protocoles.</p>
<p class="center"><strong>2.4 :</strong> Pour tout autre information sur les protocoles, se référer à ce document :<a href="#document-protocoles"> Protocole Shock</a></p>
<p class="center"><strong>2.5 :</strong> Pour le P9, la personne concernée perdra son grade et son régiment (retour en CCT).</p>
<p class="center"><strong>2.6 :</strong> Pour le P10, la personne concernée sera RPK donc perdra son nom, son grade ainsi que toutes ses médailles (peu importe s’ils les a reçues dans ce job).</p>
<p class="center"><strong>2.7 :</strong> Lorsqu’un 408th se prend un protocole, il à une semaine pour le faire sauf en cas d’absence. Dans le cas contraire, il se verra attribuer un ultra blâme.</p>
<p class="center">2.8 : Avant toute mise en cellule pour un protocole, le Shock Trooper doit obligatoirement annoncer la raison du protocole au clone concerné et lui laisser la possibilité de déposer une plainte. En cas de plainte, le clone doit être relâché et un officier Shock doit être informé afin de suspendre le protocole. L’unité concernée doit déposer sa plainte le jour même. Si aucune plainte n’est déposée dans ce délai et que le protocole est ultérieurement considéré comme abusif, l’Amirauté pourra être contactée afin d’envisager une sanction supplémentaire.</p>
<h3 class="center">3. Rapport</h3>
<p class="center"><strong>3.1 :</strong> De CT ASP à CPT-2nd compris, vous devez faire au minimum un rapport par semaine (du lundi au dimanche).</p>
<p class="center"><strong>3.2 :</strong> Votre rapport doit faire 4 lignes complètes minimum sur un écran de 1920 x 1080 sur<a href="https://discord.com/channels/733070665569140769/1054867209861742603" target="_blank" rel="noopener"> <strong>Discord</strong></a>.</p>
<p class="center"><strong>3.3 :</strong> Vous êtes exempté de rapport pour une absence supérieure ou égale à 4 jours dans une semaine (vous devez donc faire un rapport si vous êtes présent au moins 4 jours dans la semaine).</p>
<p class="center"><strong>3.4 :</strong> Votre rapport peut-être un rapport passif ou de mission.</p>
<p class="center"><strong>3.5 :</strong> Sur une semaine, si aucun rapport n'est effectué et qu'aucune absence n'est déclarée, un rappel sera envoyé au soldat concerné. Celui-ci disposera alors de 48 heures pour transmettre son rapport.</p>
<p class="center"><strong>3.5.1 :</strong> Après 3 rappels consécutifs pour absence de rapport, le 4ème oubli entraînera automatiquement l'application d'un blâme sans rappel préalable.</p>
<h3 class="center">4. Blâme et Sanctions Internes</h3>
<p class="center"><strong>4.3 :</strong> Un blâme de rapport non fait a un délai de 1 mois. Il sera supprimé passé ce délai.</p>
<p class="center"><strong>4.5 :</strong> Système de blâme :</p>
<p class="center"><strong>- 1er blâme : Rien</strong></p>
<p class="center"><strong>- 2ème blâme : Rétrogradation d’un rang</strong></p>
<p class="center"><strong>- 3ème blâme : Exclusion</strong></p>
<p class="center"><strong>4.6 :</strong> Lorsqu’un Shock Trooper se prend un protocole, il reçoit automatiquement un blâme.</p>
<h3 class="center">5. Promotion</h3>
<p class="center"><strong>5.1 :</strong> Lors d’une promotion, vous devez ranger votre arme et vous mettre au salut.</p>
<p class="center"><strong>5.2 :</strong> A la suite d’une de vos promotions, vous devrez réciter vos Valeurs, les Mentalités et Objectifs dans les quartiers.</p>
<p class="center"><strong>5.3 :</strong> A la suite d’une promotion d’un Shock, tous les Shock présents devront réciter leurs serment en même temps.</p>
<p class="center"><strong>5.4 :</strong> Il est strictement interdit de forcer pour une promotion sous peine de sanction.<br><strong>5.5 :</strong> Il est cependant autorisé de demander aux officiers pourquoi sa promotion est retardée sous un délai de 3 jours.</p>
<p class="center"><strong>5.6 :</strong> Il est possible de faire des promotions à partir du grade d’Adjudant (<strong>Système de Promotion</strong>), cependant, il faut l’accord d’un officier.</p>
<p class="center">5.7 : Tout Shock qui refuse de réciter le serment Shock lors de la cérémonie de promotion, en invoquant un prétexte fallacieux, ou qui se déconnecte sans prévenir, sera sanctionné par 40 tours de tarmac. En cas de récidive, un blâme disciplinaire sera appliqué.</p>
<h3 class="center">6. Recrutement</h3>
<p class="center"><strong>6.1 :</strong> A partir du grade de Sergent-Chef, après avoir passé l'accréditation, vous pouvez devenir recruteur Shock et donc faire passer les tests au CT ASP pour rejoindre la Shock.</p>
<p class="center"><strong>6.2 :</strong> Il est strictement interdit, sous peine de sanction lourde, de donner des informations sur les recrutements à un autre clone n’étant pas de la Shock Trooper.</p>
<p class="center"><strong>6.3 :</strong> Il est strictement interdit de faire passer les recrutements à un clone blacklist.</p>
<p class="center"><strong>6.4 :</strong> Un CT ASP à deux semaines pour reprendre son recrutement en cas d’interruption de ce dernier. Au-delà de ce délai, le CT ASP devra recommencer le recrutement de 0.</p>
<p class="center"><strong>6.5 :</strong> Lors de l’échec du recrutement, le CT ASP pourra repasser les tests de recrutement une semaine après son échec. En cas de tentative de triche en revenant avec un autre personnage, ce dernier se verra blacklisté de la Shock Trooper.</p>
<p class="center"><strong>6.6 :</strong> Lors des simulations, vous êtes libres de choisir le nom que vous souhaitez, tant que celui-ci ne comporte aucun caractère insultant, offensant ou inapproprié.</p>
<p class="center"><strong>6.7 :</strong> Lors des simulations, il est strictement interdit de communiquer sur la radio textuelle visible par les autres régiments. Vous pouvez cependant utiliser la commande : <em>/advert *R-Simu* texte...</em></p>
<p class="center"><strong>6.8 :</strong> Par respect envers les autres régiments, vous devez faire le maximum pour ne pas déranger les autres clones présents. Veillez donc à bien encadrer votre recrutement et à éviter tout débordement.</p>
<h3 class="center">7. Réserviste</h3>
<p class="center"><strong>7.1 :</strong> Pour devenir réserviste, il faut avoir un minimum d'ancienneté et d'implication dans la Shock Trooper.</p>
<p class="center"><strong>7.2 :</strong> Pour le devenir, il faut faire la demande dans la radio-rp et les officiers feront un vote.</p>
<p class="center"><strong>7.3 :</strong> Lorsque vous passez réserviste, vous pouvais avoir au minimum une retro de 1 ou 2 rang ou +</p>
<p class="center"><strong>7.4 :</strong> Un réserviste se doit d'avoir tout de même un minimum de présence (5h) mais est dispensé de rapport. En cas de non présence pendant 50 jours ce derniers ne peut pas/plus prétendre ou rester en réserve.</p>
<p class="center"><strong>7.5 :</strong> Seuls les anciens membres officiers peuvent être réserviste Lieutenant.</p>
<h3 class="center">8. Département de la Justice Militaire</h3>
<p class="center"><strong>8.1 :</strong> A partir du grade de 2nd LTN, vous pouvez faire la demande au CMDM 1010 Fox afin d'intégrer le DJM en tant qu'Agent et de pouvoir traiter des plaintes.</p>
<p class="center"><strong>8.2 :</strong> Votre CMDM se réserve le droit de refuser cette demande s’il ne vous fait pas entièrement confiance.</p>
<p class="center"><strong>8.3 :</strong> En cas de mauvais comportement dans une plainte, le CMDM se réserve le droit de vous retirer votre accès.</p>
<p class="center"><strong>8.4 :</strong> Toutes informations concernant les plaintes traitées, en cours de traitement ou celles à venir ne doivent pas quitter le DJM sous risque de sanctions (HRP ou RP).</p>
<p class="center"><strong>8.5 :</strong> Il est strictement interdit d’exposer son avis sur une plainte en cours de traitement, que vous soyez concernés par cette dernière ou non (HRP ou RP).</p>
<h3 class="center">9. Armement</h3>
<p class="center"><strong>9.1 :</strong> Il est interdit de paralysé les droïdes ou utilisateur de sabre laser que ce soit en event ou mini-event et sur des job extérieure a l'armé (job : Civil, Mando, Job évent) avec le stun DC-15S (uniquement avec la Stun Grenade)</p>
<p class="center"><strong>9.2 :</strong> Si un jedi se montre récalcitrant ou fait quelconque erreurs méritant un Protocole, la sortie de l'électro-staff est autorisée. (Par exemple : pour le faire sortir des quartiers Shock)</p>
<p class="center"><strong>9.3 :</strong> L’utilisation du stun Stick est réglementée, seulement utilisable sur les personnes menottées récalcitrantes.</p>
<p class="center"><strong>9.4 :</strong> Un protocole ordonné ne peut pas être discuté si la personne qui ordonne est concernée par la raison de celui-ci. Sinon, cela reste à partir de Major que les sanctions données peuvent être discutées.</p>
<p class="center"><em><strong>Exemple :</strong> Un CMDM ordonne un proto pour 2 personnes qui se sont giflé l’un l’autre. [Discutable]<br>Un CMDM ordonne un proto sur une 1 personne qui l’a giflé. [Non discutable].</em></p>
<p class="center"><strong>9.5 :</strong> Il est strictement interdit de se battre à l’électro-staff. Cette arme sert de moyen de dissuasion contre les prisonniers et de garde des lieux sensibles.</p>
<p class="center"><strong>9.6 :</strong> Le <strong>DC-17 Stun</strong> est accessible à partir du grade de <strong>CPT-2nd</strong>. Il est considéré comme une variante du <strong>DC-15S Stun</strong>.</p>
<h3 class="center">10. Spécialisations</h3>
<p class="center"><strong>10.1 :</strong> Les spécialisations accessibles dès le grade de CPL sont les CRS, BIR et STE ; 50 % de leurs effectifs peuvent devenir Médecins, à l’exception des SD (100 %) et des RC (Interdit).</p>
<p class="center"><strong>10.2 :</strong> Le Service Diplomatique est accessible à partir de SGT.</p>
<p class="center"><strong>10.3 :</strong> Les RC Régimentaires sont accessibles à partir d'Adjudant sous <a href="https://discord.com/channels/733070665569140769/1396562595510747136/1396894765651329026" target="_blank" rel="noopener"><strong>certaines conditions</strong></a>.</p>
<p class="center"><strong>10.4 :</strong> Pour rejoindre une spécialité (hormis Médecins et RC Régimentaire), vous devez contacter le gérant de la spécialité. S’il n’y en as pas, contactez votre CMDM.</p>
<p class="center"><strong>10.5 :</strong> Dès CPL / CPL-C, il faut impérativement rejoindre une spécialisation pour pouvoir monter en grade, en plus des autres prérequis.</p>
<h3 class="center">11. Pilotage</h3>
<p class="center"><strong>11.1 :</strong> A partir du grade de CPL, vous pouvez passer le FP1 qui vous permettra de piloter un AT-PT ainsi qu'un Répulsor Tank.</p>
<p class="center"><strong>11.2 :</strong> A partir du grade de SGT, vous pouvez passer votre FP2 qui vous permettra de piloter une LAAT-I, une LAAT-LE et une RHO-Class.</p>
<p class="center"><strong>11.3 :</strong> A partir du grade de CPT, vous pouvez passer votre FP1 qui vous permettra de piloter le Radian VII Consular.</p>
<p class="center"><strong>11.4 :</strong> Seuls les membres du 212th peuvent vous former au pilotage des véhicules aériens. La formation FP1 se fait par un Adjudant ou plus de la Shock Trooper.</p>
<p class="center"><strong>11.5 :</strong> En cas de mauvais pilotage à répétition, le Corps Officier peut décider de vous retirer votre licence.</p>
<p class="center"><strong>11.6 :</strong> Dès votre entrée dans le Service Diplomatique, vous pouvez passer votre formation pour piloter le Républic Consular (réservé au SD)</p>
<p class="center"><strong>11.7 :</strong> Dans le SD, seul le perso RP &quot;1590 Charon&quot; est autorisé à Piloté un V-wing, ARC-170 et LAAT-C (La 212th reste prioritaire)</p>
<h3 class="center">12. Négociateur / Diplomate</h3>
<p class="center"><strong>12.1 :</strong> A partir du grade de Sergent, vous pouvez faire la demande pour devenir négociateur dans le canal adéquat.</p>
<p class="center"><strong>12.2 :</strong> Seuls les membres du Service Diplomatique peuvent vous former.</p>
<p class="center"><strong>12.3 :</strong> Lors des négociations, vous êtes sous les ordres du SD.</p>
<p class="center"><strong>12.4 :</strong> Pour tout autre informations, référez vous à ce document :<a href="#service-diplomatique"> <strong>Diplomatie / Négociation</strong></a>.</p>
<h3 class="center">13. Drone FPV shock</h3>
<p class="center"><strong>12.7 :</strong> L’utilisation du drone est strictement réservée à l’appui des patrouilles en cours. Il doit servir à fournir des informations permettant d’optimiser et d’assurer la sécurité des membres de l’unité.</p>
<p class="center"><strong>12.8 : </strong>Il est formellement interdit de positionner le drone dans des zones sensibles telles que la salle des machines, la salle du noyau, ainsi qu’à l’intérieur des quartiers régimentaires et des espaces réservés au BOS.</p>
<p class="center"><strong>12.9 : </strong>Tout usage abusif du drone en dehors d’un cadre de patrouille sera sanctionné. Une première infraction donnera lieu à un ou plusieurs tours de tarmac, et en cas de récidive, un blâme sera appliqué.</p>
<p class="center"><strong>13.0 : </strong>Il est autorisé de figer le drone afin de l’utiliser comme caméra de surveillance fixe. Toutefois, l’opérateur doit impérativement rester aux commandes du drone et ne pas se livrer à d’autres activités simultanément.</p>
<h3 class="center">14. Divers</h3>
<p class="center"><strong>13.1 :</strong> Votre matricule doit être : SHOCK [Grade] [Spé] [Matricule + Nom]</p>
<p class="center"><strong>13.2 :</strong> Votre nom doit être RP, le corps officier se réserve le droit de vous demander de le changer.</p>
<h3 class="center">15. Fouilles</h3>
<p class="center"><strong>14.1 :</strong> Seuls les VCMD et plus ainsi que les Lieutenant-Commandant et plus peuvent ordonner une fouille des quartiers accompagné de la SHOCK (uniquement Régulière).</p>
<p class="center"><strong>14.2 :</strong> Les quartiers EM et BOS ne peuvent être fouillés que dans certains cas. Se référer au<a href="#guide-shock"> <strong>Guide Shock</strong></a> partie VI - Patrouilles</p>
<p class="center"><strong>14.3 :</strong> Il est strictement interdit de faire des /roll qui impacte fortement les joueurs.</p>
<p class="center"><em><strong>Exemple :</strong> Un paquet de drogue appartenant à un CPL est trouvé avec un /roll et on lui applique une sanction [Interdit]</em></p>
<p class="center"><em>Un /roll montre qu’une armoire est poussiéreuse [Autorisé]</em></p>
<h3 class="center">16. Quartiers Shock</h3>
<p class="center"><strong>15.1 :</strong> L’arme létale est interdite dans la zone carcérale sauf en code <strong>Orange</strong> et <strong>Rouge</strong>.</p>
<p class="center"><strong>15.2 :</strong> Sont autorisés à entrer en Zone Carcérale en <strong>Code Blanc</strong> :</p>
<p class="center">- Marine Républicaine : MR Aspirant (accompagné d'un Shock, avec une autorisation, avec une raison justifiée).</p>
<p class="center">- État major : A partir de CMD (Libre d'accès).</p>
<p class="center">- Chimaera</p>
<p class="center">- Membres du BRS</p>
<p class="center">- Amirauté / Direction BOS</p>
<p class="center"><strong>15.3 :</strong> La BOS n’a pas accès aux quartiers Shock, sauf en code <strong>Orange</strong>, <strong>Rouge</strong> ou <strong>Noir</strong>.</p>
<h3 class="center">17. Code Marron</h3>
<p class="center"><strong>16.1 :</strong> Seules les personnes suivantes peuvent entrer et sortir du Code Marron sans autorisation :</p>
<p class="center">- Amirauté</p>
<p class="center">- Direction BOS</p>
<p class="center">- Gérants de Régiments</p>
<p class="center">- Shock Trooper</p>
<p class="center">- Marine Républicaine</p>
<p class="center">- MDCJ / MDO / MCO</p>
<p class="center">- Généraux Jedi</p>
<p class="center">- BRS</p>
<p class="center">- Chimaera</p>
<p class="center"><strong>16.2 : </strong>Seuls les Shock Troopers peuvent gérer les autorisations liées au Code Marron. Si aucun membre de la Shock n'est présent, c'est à la MR de gérer.</p>
<p class="center"><strong>16.3 :</strong> Il est interdit de croiser les bras dans les rangs.</p>
<p class="center"><strong>16.4 :</strong> Dans les rangs, les unités doivent respecter les ordres de Salut et Garde-à-vous, à l'exception des Jedis, uniquement s'ils sont dans la colonne de l'Ordre Jedi.</p>
<h3 class="center">49.3. La Spéciale</h3>
<p class="center"><strong>49.3 :</strong> Le CMDM 1010 Fox est en mesure de faire passer toute action licite envers la Shock Trooper sans concertation avec le corps officier ou autre organisme de la Shock Trooper.</p>
<p class="center"><em>Règlement réalisé par Achref, mis à jour le 01/07/2026</em></p>
</div>
`,

  "guide-shock": `
<div class="gs-section">
<div class="gdoc">
<p class="center">-<img src="assets/docs/guide-shock-01.webp" alt="" loading="lazy"></p>
<h2 class="doc-title">GUIDE SHOCK</h2>
<p class="center">Document à l’unique intention de la Shock Trooper.</p>
<h3>I. <u>Histoire de la Garde de Coruscant</u><br></h3>
<p><br><strong>La Garde de Coruscant</strong>, a été formée sous la République Galactique en <strong>22 av. BY</strong> en tant que régiment d'élite de la <strong>Grande Armée de la République</strong>, stationné sur la planète capitale <strong>Coruscant</strong>. Composée de <strong>clones Shock Troopers</strong>, ainsi nommés pour leur capacité à réagir avec une rapidité fulgurante, la Garde de Coruscant était considérée comme l'une des unités les plus performantes et les plus loyales de la République durant la <strong>Guerre des Clones. Contrairement</strong> aux autres clones, les <strong>Shock Troopers</strong> ont la particularité d’avoir été <strong>entraînés sur Coruscant</strong>, faisant d’eux des experts en combat urbain et développant leur attachement envers la planète capitale.</p>
<p>La mission principale de la Garde de Coruscant est de <strong>protéger Coruscant et le Sénat Galactique</strong>. Sur Coruscant, la Garde est principalement affectée à la surveillance des infrastructures vitales et des bâtiments gouvernementaux. À travers le <strong>Service Diplomatique</strong>, elle assure également la protection des sénateurs, personnalités importantes et autres dignitaires républicains voyageant hors de la planète. De plus, la Garde sert de force de maintien de l’ordre, collaborant avec la <strong>Force de Sécurité de Coruscant (CSF)</strong>, la police civile de la capitale.</p>
<p>La <strong>Shock Trooper</strong> est également déployée sur les flottes républicaines afin d’y servir en tant que <strong>Police Militaire</strong>, s’occupant ainsi de veiller au <strong>maintien de l’ordre, au respect des procédures et à la bonne tenue de la discipline</strong>. Les Shock Troopers représentent ainsi la principale force de sécurité de la Flotte Cosmos et disposent d’accréditations leur permettant une grande liberté d’action.</p>
<p>La <strong>Shock Trooper</strong> est dirigée par plusieurs Commandants emblématiques :</p>
<p>● Le Commandant 1010 Fox, le Gérant de la Shock Trooper.<br><em>(CC-1010 Fox)</em></p>
<p>● Le Commandant 4515 Thorn.<br><em>(CC-4515 Thorn)</em></p>
<p>● Le Commandant 5869 Stone.<br><em>(CC-5869 Stone)</em></p>
<p>● Le Commandant 4477 Thire.<br><em>(CC-4477 Thire)</em></p>
<figure class="doc-img"><img src="assets/docs/guide-shock-02.webp" alt="" loading="lazy"></figure>
<h3>II. <u>Crédo et Valeurs de la Shock Trooper</u></h3>
<h3>Le Crédo de la Shock Trooper</h3>
<p><strong>Quel est notre devoir ?</strong></p>
<p><em>→ Servir la république.</em><strong><br></strong></p>
<p><strong>Que-ce que c’est servir la république ?</strong></p>
<p><em>→ Combattre et mourir.</em></p>
<p><strong>Qu'est-ce que c'est mourir ? </strong></p>
<p><em>→ C’est notre devoir.</em></p>
<p><strong>Quel est notre devoir ?</strong></p>
<p><em>→</em> <em>Servir la république.</em></p>
<h3>Les Valeurs de la Shock Trooper</h3>
<p>● Honneur<br>● Discipline<br>● Force<br>● Unité<br>● Justice<br>● Exemplarité<br>● Dévouement<br>● Respect<br>● Impartialité</p>
<figure class="doc-img"><img src="assets/docs/guide-shock-03.webp" alt="" loading="lazy"></figure>
<h3>III. <u>Mentalité &amp; Objectifs</u></h3>
<h3>● Impartialité et Justice, <em>quelle que soit la situation.<br></em>● Exemple pour tous,<em> nous nous devons d’être une figure d’élite au sein des régiments clones.</em><br>● Recevoir et Exécuter, <em>les Shocks se doivent de répondre aux ordres, pas à leurs émotions.</em><br>● Calme &amp; Autorité, <em>nous sommes des Shocks, pas des clowns, nous nous tenons à carreaux.</em><br>● Frères d’Armes ≠ Amis, <em>le jugement pour la trahison d’un frère d’arme envers la République ainsi que ses frères, donc sa famille, ne mérite aucune clémence.</em></h3>
<h3 class="center"><u>Serment de la Shock Trooper</u></h3>
<p class="center">Je veillerai à la sécurité, j’assurerai la discipline, je garantirai la protection du Chancelier Suprême ainsi qu’aux membres de l’État-Major, j’incarnerai la Justice et l’Impartialité, je ferai preuve de dévouement envers mes frères d’armes. Gloire à la République !</p>
<figure class="doc-img"><img src="assets/docs/guide-shock-04.webp" alt="" loading="lazy"></figure>
<h3>IV. <u>Les Codes</u></h3>
<p>Les codes suivants sont des <strong><u>ordres prioritaires</u></strong>.</p>
<p>● <strong>Code BD :</strong> Tous les Shocks en Salle de <strong>B</strong>riefing/<strong>D</strong>ebriefing.</p>
<p>● <strong>Code EM :</strong> Tous les Shocks au Pont <strong>EM</strong>.</p>
<p>● <strong>Code TP :</strong> Tous les Shocks au <strong>T</strong>armac <strong>P</strong>rincipal.</p>
<p>● <strong>Code HP : </strong>Tous les Shocks au <strong>H</strong>angar <strong>P</strong>rincipal.</p>
<p>● <strong>Code P :</strong> Tous les Shocks à la <strong>P</strong>rison.</p>
<p>● <strong>Code A : </strong>Tous les Shocks à l’<strong>A</strong>rmurerie.</p>
<p>● <strong>Code SDE :</strong> Tous les Shocks en <strong>S</strong>alle <strong>d</strong>’<strong>E</strong>ntrainement.</p>
<p>● <strong>Code SDM :</strong> Tous les Shocks en <strong>S</strong>alle <strong>d</strong>es <strong>M</strong>achines.</p>
<p>● <strong>Code SDN :</strong> Tous les Shocks en <strong>S</strong>alle <strong>d</strong>u <strong>N</strong>oyaux.</p>
<p>● <strong>Code RSN :</strong> <strong>R</strong>echerche d'individu <strong>S</strong>ans <strong>N</strong>eutralisation. (<strong>Sommations </strong>puis<strong> stun</strong>)</p>
<p>● <strong>Code RAN :</strong> <strong>R</strong>echerche d'individu <strong>A</strong>vec <strong>N</strong>eutralisation. (<strong>Stun sans sommation</strong>)</p>
<figure class="doc-img"><img src="assets/docs/guide-shock-05.webp" alt="" loading="lazy"></figure>
<h3>V. <u>Patrouille</u></h3>
<p><strong>Système de Patrouille</strong></p>
<p>Ce système est à appliquer pour les <strong><u>patrouilles officielles</u></strong>.</p>
<p>● 1. Une patrouille doit être constituée de<strong> 2 effectifs minimum</strong> et d’un <strong>Caporal</strong> minimum.</p>
<p>● 2. Les patrouilles <strong>débutent et se finissent</strong> obligatoirement dans la <strong>Zone Carcérale</strong>.</p>
<p>● 3. Il est obligatoire d’avoir la <strong>Stun DC-15S</strong> ou le <strong>Stun DC-17</strong> en mode safe en main.</p>
<p><strong>Niveaux de Patrouille</strong></p>
<p>● <strong>Niveau 1</strong> : Patrouille du <strong>Vénator/Base</strong>, à l’exception des <strong>zones barrées</strong>.</p>
<p><strong>⤷</strong> Couloirs / Tarmac &amp; Hangars / Salles communes (Mess, CM, CCT etc…) / Pont EM</p>
<p><strong>⤷</strong> Quartiers Réguliers / Quartiers B.O.S / Quartiers MR / Salle des Machines &amp; Noyaux</p>
<p>● <strong>Niveau 2</strong> : Patrouille du <strong>Vénator/Base</strong>, à l’exception des <strong>zones barrées</strong>.</p>
<p><strong>⤷</strong> Couloirs / Tarmac &amp; Hangars / Salles communes (Mess, CM, CCT etc…) / Pont EM</p>
<p><strong>⤷</strong> Quartiers Réguliers / Quartiers MR</p>
<p><strong>⤷ </strong>Quartiers B.O.S</p>
<p><strong>⤷ </strong>Minimum <strong>2nd LTN</strong>, Code <strong>Orange</strong> &amp; <strong>Rouge</strong> et s’il n’y a <strong>pas</strong> de B.O.S</p>
<p><strong>⤷ </strong>Salle des Machines &amp; Noyaux</p>
<p>● <strong>Niveau 3</strong> : Patrouille <strong>complète</strong> du <strong>Vénator/Base</strong>.</p>
<p><strong>⤷</strong> Couloirs / Tarmac &amp; Hangars / Salles communes (Mess, CM, CCT etc…) / Pont EM</p>
<p><strong>⤷</strong> Quartiers Réguliers / Quartiers MR</p>
<p><strong>⤷ </strong>Quartiers B.O.S</p>
<p><strong>⤷ </strong>Minimum <strong>2nd LTN</strong>, Code <strong>Orange</strong> &amp; <strong>Rouge</strong> et s’il n’y a <strong>pas</strong> de B.O.S</p>
<p><strong>⤷ </strong>Salle des Machines &amp; Noyaux</p>
<figure class="doc-img"><img src="assets/docs/guide-shock-06.webp" alt="" loading="lazy"></figure>
<h3>X. <u>Comportement à tenir face à un prisonniers ou personne à un interpeller</u></h3>
<p><strong>Comment se comporter avec un clone récalcitrant ? </strong></p>
<ul class="lvl-0"><li>Ne pas perdre son sang-froid.</li><li>Rester poli et utiliser toujours un langage militaire correct.</li><li>Le grade du clone ne rentre pas en compte lorsque nous faisons notre travail.</li><li>La fonction prime sur le grade.</li><li>Quel que soit le grade du clone, respectez toujours celui-ci.</li><li>Effectuer 3 sommations orales, sauf en cas de danger pour votre vie ou celle d’autrui.</li><li>Si le clone, tous grades compris (dans les clones que l’on peut sanctionner évidemment) refuse d’obtempérer devant un membre de la Shock, il se verra protocoler pour le motif suivant : Refus d’obtempérer.</li></ul>
<p><strong>Lors d’une mise en protocole</strong></p>
<ul class="lvl-0"><li>Si vous interpellez la personne *(vous allez le chercher)*, il est obligatoire de lui annoncer la raison de l'interpellation. (Pour un protocole, lui annoncer le proto appliqué et la raison)</li><li>Si vous convoquez la personne *(La personne vient à vous)*, il est obligatoire de lui annoncer la raison de l'interpellation, quand il est présent en face vous. (Pour un protocole, lui annoncer le proto appliqué et la raison)</li><li>Lui retirer tout son matériel (Armes, armure, radio,...).<br><em>(Nous considérons qu’il ne peut rien cacher, étant donné qu’il va mettre une autre tenue, le /me fouille n’est pas obligatoire)</em></li><li>Le mettre en tenue de détention (Il doit interagir avec la boîte).</li><li>L’emmener dans une cellule.</li><li>Lui expliquer la raison de son protocole, le protocole en question, et ce qu’il implique. ( Temps de prison, etc…)</li><li>Le laisser menotté et accroché au mur durant son protocole.</li><li>Une fois en cellule, quelles que soient ses requêtes, il attendra le temps que le Shock qui s’occupe de son protocole note son protocole à côté de la cellule (3D2D TextScreen) puis remplisse son document de protocole, A partir de la il sera disposé à l’écoute du détenu.</li></ul>
<hr>
<p class="center">ARCHIVE</p>
<p class="center"><strong><u>Niveau de Patrouille</u></strong></p>
<p class="center"><strong>Niveau 1 :</strong> <u>Fouille du venator/base sauf les quartiers et la Salle des machines.</u></p>
<p class="center"><strong>Niveau 2 :</strong> <u>Fouille du venator/base et des quartiers réguliers</u>.</p>
<p class="center"><em>Conditions pour fouilles des quartiers BOS : </em></p>
<p class="center">- En code Orange : avec présence d’un 2nd Ltn MINIMUM ou avec autorisation d’un Capitaine de l’EM.</p>
<p class="center">- En code Blanc : avec autorisation du Commandement Shock.</p>
<p class="center"><strong>Niveau 3 :</strong> <u>Fouille complète du venator/base.</u></p>
<p class="center"><em>Conditions pour fouilles des quartiers BOS : </em></p>
<p class="center">- En code Orange et Rouge : avec autorisation du Commandement Shock ou d’un Capitaine EM et +.</p>
</div>
</div>
`,

  "recrutement-shock": `
<div class="gs-section">
<div class="sheet" data-sheet="recrutement"></div>
</div>
<div class="gs-section">
<p class="note">Le document « CW | Guide Shock Recrutement » est privé : son contenu n'a pas pu être repris.</p>
</div>
`,

  "systeme-de-promotion": `
<div class="gs-section">
<p class="center"><strong>Temps avant Promotions</strong></p>
<p class="center"><strong>Hommes de rang :</strong></p>
<p class="center"><strong>CT Aspirant → CT</strong> = 1 jour</p>
<p class="center"><strong>CT → Caporal =</strong> 4 jours</p>
<p class="center"><strong>Caporal → Caporal Chef =</strong> 5 jours</p>
<p class="center"><strong>Caporal Chef → Sergent =</strong> 7 jours</p>
<p class="center"><strong>Sous Officier Subalterne :</strong></p>
<p class="center"><strong>Sergent → Sergent Chef =</strong> 10 jours + avoir son PH1</p>
<p class="center"><strong>Sergent Chef → Adjudant =</strong> 13 jours + avoir sa formation recrutement</p>
<p class="center"><strong>Adjudant → Adjudant Chef =</strong> 15 jours</p>
<p class="center"><strong>Adjudant Chef → 2nd Lieutenant =</strong> 17 jours</p>
<p class="center"><strong>Sous Officier :</strong></p>
<p class="center"><strong>2nd Lieutenant → Lieutenant =</strong> 17 jours + avoir sa formation négociateur</p>
<p class="center"><strong>Lieutenant → 2nd Capitaine = </strong>20 jours</p>
<p class="center"><strong>2nd Capitaine → Capitaine =</strong> 20 jours + 1.5 commandements de mission</p>
<p class="center"><strong>Officier :</strong></p>
<p class="center"><strong>Capitaine → Major = </strong>22 jours + avoir son PH2 + 3 commandements de mission</p>
<p class="center"><strong>Major -&gt; Vice Commandant =</strong> 30 jours + 5 commandements de mission</p>
<p class="center"><strong>Vice Commandant -&gt; Commandant =</strong> 40 jours + 8 commandements de mission</p>
<p class="center"><strong>A compter le nombre de jours après sa dernière promotion.</strong></p>
<p class="center">* Des promotions peuvent être accélérées selon les besoins du CMDM. Absence non prise en compte dans les jours.</p>
</div>
<div class="gs-section">
<p class="center"><strong>Autorisation de Promotions</strong></p>
<p class="center"><strong>ADJ → Caporal Chef </strong></p>
<p class="center"><strong>ADJ-C → Sergent Chef </strong></p>
<p class="center"><strong>LTN → Adjudant Chef </strong></p>
<p class="center"><strong>CPT → Lieutenant </strong></p>
<p class="center"><strong>MJR → Capitaine en 2nd </strong></p>
<p class="center"><strong>VCMD → Capitaine </strong></p>
<p class="center"><strong>CMD → Major </strong></p>
<p class="center"><strong>CMDM → Tous</strong></p>
</div>
`,

  "fonction-des-grades": `
<div class="gs-section">
<p class="center"><strong>FONCTION DES DIFFÉRENTS GRADES</strong></p>
<p class="center"><strong>Voici les fonctions des différents grades dans la Shock Trooper, ils vous donnent les responsabilités principales que vous avez en fonction de votre grade. La hiérarchie est plus simplement à retrouver ici :</strong></p>
<p class="center"><a href="#fonction-des-grades">Organigramme hiérarchique</a></p>
<h3 class="center"><strong>Homme Du Rang</strong></h3>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Clone Trooper Aspirant</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous venez de réussir les tests de la Shock Trooper.</p>
<p class="center">- Vous êtes donc le plus bas gradé du régiment, vous devez écouter les ordres de vos supérieurs pour bien vous intégrer au régiment.</p>
<p class="center">- Ne prenez pas trop d’initiatives, essayez de suivre les procédures à la lettre et de poser toutes les questions qui vous passent par la tête.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Clone Trooper Confirmé</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous êtes maintenant un soldat confirmé, vous vous êtes bien intégré dans votre régiment.</p>
<p class="center">- Vous devez maintenant faire vos preuves pour monter en grade.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Caporal</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous pouvez désormais rejoindre ces spécialités en contactant le gérant de la spécialisation.</p>
<p class="center">- Vous devez passer votre FP1 pour piloter l'AT-PT et le Repulsor Tank.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Caporal-Chef</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous avez été promu et vos supérieurs vous délèguent maintenant certains ordres.</p>
<p class="center">- Vous devez aider les soldats à bien s’intégrer suite à leur arrivée.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<h3 class="center"><strong>Sous-Officier Subalterne</strong></h3>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Sergent</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous êtes maintenant sous-officier subalterne.</p>
<p class="center">- Vous devez passer votre FP2 pour piloter les LAAT-I et LAAT-LE.</p>
<p class="center">- Vous devez devenir négociateur / diplomate.</p>
<p class="center">- Vous pouvez être instructeur en passant la formation et donc former les CCT.</p>
<p class="center">- Vous transmettez les ordres directement de vos supérieurs.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Sergent-Chef </strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous êtes maintenant un sous-officier subalterne confirmé.</p>
<p class="center">- Vous devez passer votre accréditation pour recruter les CT ASP.</p>
<p class="center">- Vous pouvez désormais rejoindre le Service Diplomatique.</p>
<p class="center">- Vous pouvez diriger une escouade.</p>
<p class="center">- Vous avez les mêmes fonctions que le sergent mais vous l’aider aussi à apprendre la gestion de troupes.</p>
<p class="center">- Vous transmettez les ordres directement de vos supérieurs.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Adjudant</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous avez les mêmes fonctions que le sergent-chef mais vous l’aider aussi à apprendre la stratégie.</p>
<p class="center">- Vous pouvez passer les tests pour devenir RC Régimentaire en demandant à 1010 Fox.</p>
<p class="center">- Vous transmettez les ordres directement de vos supérieurs.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de CPL-C avec l’autorisation d’un officier.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Adjudant-Chef </strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous transmettez les ordres directement de vos supérieurs.</p>
<p class="center">- Faites vos preuves pour passer sous-officier.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de SGT-C avec l’autorisation d’un officier.</p>
<h3 class="center"><strong>Sous-Officier</strong></h3>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>2nd Lieutenant</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous avez été promu sous-officier.</p>
<p class="center">- Pour poursuivre votre évolution, vous devrez passer le test 2nd LTN avec l’un des officiers.</p>
<p class="center">- Vous avez maintenant plus de responsabilités dans votre régiment :</p>
<p class="center">- Vous diriger les actions des Sergents et Adjudants.</p>
<p class="center">- Votre CMDM peut vous donner l’accès au DJM.</p>
<p class="center">- A partir de ce grade, vous devenez Responsable Recruteur.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Lieutenant</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous êtes maintenant un sous-officier confirmé.</p>
<p class="center">- Vous avez les mêmes fonctions que le 2nd Lieutenant mais vous l’aider aussi à apprendre la gestion global des troupes.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de ADJ-C avec l’autorisation d’un officier.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Capitaine 2nd</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous devez passer auprès de la ARC Alpha votre formation de CMD de Mission.</p>
<p class="center">- Vous devez commander 1 mission pour monter Capitaine.</p>
<p class="center">- Vous devez observer leurs actions et prendre exemple.</p>
<p class="center">- Vous pouvez donner votre avis pour les décisions importantes pour l’évolution du régiment mais ne pouvez pas voter.</p>
<p class="center">- Faites vos preuves pour entrer officiellement dans le corps restreint des officiers.</p>
<p class="center">- Vous devez faire un rapport par semaine.</p>
<h3 class="center"><strong>Officier</strong></h3>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Capitaine</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous atteignez le rang d’officier de votre régiment.</p>
<p class="center">- Vous avez un poste décisif pour votre régiment</p>
<p class="center">- Vous contrôlez l’ensemble des actions de votre régiment et redispachter directement les ordres donnés par vos supérieurs à l’ensemble des hommes.</p>
<p class="center">- Vous participez aux décisions importantes du corps officier en votant.</p>
<p class="center">- Vous devez passer votre FP3 pour piloter le Némésis Class Gunship ainsi que le Republic Consular.</p>
<p class="center">- Vous êtes désormais exempté de rapport.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de LTN.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Major</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous êtes Major de votre régiment ce qui implique de grosse responsabilité de gestion.</p>
<p class="center">- Vous aidez le Capitaine à s'habituer à son nouveau poste.</p>
<p class="center">- Vous pouvez ordonner et autoriser l’application d’un P5.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de CPT 2nd.</p>
<h3 class="center"><strong>Haut Commandement</strong></h3>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Vice-Commandant</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Il seconde les Commandants et prend leur place lorsque ces derniers sont absents.</p>
<p class="center">- Vous gérez les unités moins gradé que vous</p>
<p class="center">- Vous pouvez demander une cour martiale sans passer par le Bureau des Plaintes.</p>
<p class="center">- Vous pouvez ordonner une fouille des quartiers.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de CPT.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Commandant</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">- Vous êtes le 2nd dirigeant de votre régiment.</p>
<p class="center">- Vous seconder le Commandant Maréchal. Vous dispatcher l’ensemble des ordres pour que votre régiment soit le plus parfait possible.</p>
<p class="center">- Vous pouvez désormais ordonner et autoriser un P6.</p>
<p class="center">- Vous pouvez promouvoir jusqu’au grade de MJR.</p>
<p class="center">┌───────────────────────────────────┐</p>
<h4 class="center"><em><strong>Commandant Maréchal</strong></em></h4>
<p class="center">└───────────────────────────────────┘</p>
<p class="center">-  Vous êtes le gérant de votre régiment.</p>
<p class="center">- Vous dispatcher l’ensemble des ordres pour que votre régiment soit le plus parfait possible.</p>
<p class="center">- Vous pouvez, après avoir été formé, remettre des médailles aux membres de votre régiment.</p>
<p class="center">- Vous pouvez promouvoir toutes les unités de votre régiment.</p>
</div>

<div class="gs-section">
<h3>Organigramme hiérarchique</h3>
<div class="sheet" data-sheet="hierarchie"></div>
</div>
`,

  "guide-tenues": `
<div class="gs-section">
<p class="center">Tous les équipements des grades inférieur au vôtre peuvent être équipés</p>
<p class="center">RAPPEL : Si un équipement n’est pas noté sur ce guide, alors vous n’avez pas la possibilité de l’équiper</p>
</div>
<div class="gs-section">
<p class="center"><strong>GUIDE DES TENUES UNIVERSELLES</strong></p>
</div>
<div class="gs-section">
<h3>Soldat Aspirant <em>(CT ASP)</em></h3>
<p>Dès votre arrivée dans la Shock Trooper,</p>
<ul><li>👔 Nouveau skin : <em>trp</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-01.png" alt="Trooper" loading="lazy"><figcaption>Trooper</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Caporal <em>(CPL)</em></h3>
<p>A partir de Caporal,</p>
<ul><li>💍 Bodygroup : Tous les <em>Holsters</em></li><li>👔 Nouveau skin : <em>eng</em></li></ul>
<p>↳ <em>Seulement Helmet n°0 &amp; 2</em> +</p>
<p>les cheuveux</p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-02.png" alt="Exemple Holster" loading="lazy"><figcaption>Exemple Holster</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-03.png" alt="Eng Helmet 0" loading="lazy"><figcaption>Eng Helmet 0</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-04.png" alt="Eng Helmet 2" loading="lazy"><figcaption>Eng Helmet 2</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Sergent <em>(SGT)</em></h3>
<p>A partir de Sergent,</p>
<ul><li>💍 Bodygroup : Tous les <em>Helmet Attachement </em> <em><strong>sauf n°4</strong></em></li><li>👔 Nouveau skin : <em>cg_jek1</em></li></ul>
<p>↳ <em>Pour cette tenue : Chest pad &amp; strap</em></p>
<p>autorisé à ce grade</p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-05.png" alt="cg_jek1" loading="lazy"><figcaption>cg_jek1</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Sergent Chef <em><strong>(SGT-C)</strong></em></h3>
<p>A partir de Sergent Chef,</p>
<ul><li>💍 Bodygroup : Tous les <em>Chest Strap<strong> sauf n°</strong><strong>2</strong></em></li></ul>
</div>
<div class="gs-section">
<h3>Adjudant <em>(ADJ)</em></h3>
<p>A partir d'Adjudant,</p>
<ul><li>💍 Bodygroup : <em>Helmet Armor n°1</em></li><li>👔 Nouveau skin : <em>cg_jek2</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-06.png" alt="Helmet Armor n°1" loading="lazy"><figcaption>Helmet Armor n°1</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-07.png" alt="cg_jek2" loading="lazy"><figcaption>cg_jek2</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Adjudant Chef <em>(ADJ-C)</em></h3>
<p>A partir d'Adjudant Chef,</p>
<ul><li>💍 Bodygroup : <em>Chest Strap n°2</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-08.png" alt="Chest Strap n°2" loading="lazy"><figcaption>Chest Strap n°2</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Second Lieutenant <em>(2nd LTN)</em></h3>
<p>A partir de Second Lieutenant,</p>
<ul><li>💍 Bodygroup : <em>Kama n°2 &amp; 3 </em></li></ul>
<p>↳ <em>Seulement si remis par 1010 Fox</em></p>
<ul><li>💍 Bodygroup : <em>Backpack n°1</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-09.png" alt="Backpack n°1" loading="lazy"><figcaption>Backpack n°1</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Lieutenant <em>(LTN)</em></h3>
<p>A partir de Lieutenant,</p>
<ul><li>💍 Bodygroup : <em>Shoulder n°2</em></li><li>👔 Nouveau skin : <em>cg_pibs</em></li></ul>
<p>↳ <em>Bodygroups sur photo autorisées</em></p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-10.png" alt="Shoulder n°2" loading="lazy"><figcaption>Shoulder n°2</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-11.png" alt="cg_pibs" loading="lazy"><figcaption>cg_pibs</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Capitaine 2nd <em>(CPT 2nd)</em></h3>
<p>A partir de Capitaine 2nd,</p>
<ul><li>💍 Bodygroup : <em>Pauldron Base n°1 + Pauldron Noir</em></li></ul>
<p>↳ <em>Un seul  : celui de droite</em></p>
<ul><li>💍 Bodygroup : <em>Backpack n°3</em></li><li>👔 Nouveau skin : <em>cg_mire</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-12.png" alt="Pauldron Droit Noir" loading="lazy"><figcaption>Pauldron Droit Noir</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-13.png" alt="Backpack n°3" loading="lazy"><figcaption>Backpack n°3</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-14.png" alt="cg_mire" loading="lazy"><figcaption>cg_mire</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Capitaine <em>(CPT)</em></h3>
<p>A partir de Capitaine,</p>
<ul><li>💍 Bodygroup : <em>Kama n°1</em></li><li>💍 Bodygroup : <em>Pauldron Rouge</em></li></ul>
<p>↳ <em>Un seul : celui de gauche !</em></p>
<ul><li>💍 Bodygroup : <em>Pauldron Base n°2 &amp; 3</em></li><li>💍 Bodygroup : <em>Backpack n°2</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-15.png" alt="Kama n°1" loading="lazy"><figcaption>Kama n°1</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-16.png" alt="Pauldron Gauche Rouge" loading="lazy"><figcaption>Pauldron Gauche Rouge</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-17.png" alt="Backpack n°2" loading="lazy"><figcaption>Backpack n°2</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Major <em>(MJR)</em></h3>
<p>A partir de Major,</p>
<ul><li>💍 Bodygroup : <em>Pauldron Base n°4</em></li><li>💍 Bodygroup : <em>Rangefinder</em></li><li>💍 Bodygroup : <em>Shoulder n°1</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-18.png" alt="Pauldron Base n°4" loading="lazy"><figcaption>Pauldron Base n°4</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-19.png" alt="Rangefinder" loading="lazy"><figcaption>Rangefinder</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-20.png" alt="Shoulder n°1" loading="lazy"><figcaption>Shoulder n°1</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Vice Commandant <em>(VCMD)</em></h3>
<p>A partir de Vice Commandant,</p>
<ul><li>💍 Bodygroup : <em>Pauldron Rouge et Noire</em></li></ul>
<p>↳ <em>Le rouge à votre gauche et le noir à </em>	<em>votre droite !</em></p>
<ul><li>💍 Bodygroup : <em>Helmet Comms</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-21.png" alt="Double Pauldron" loading="lazy"><figcaption>Double Pauldron</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-22.png" alt="Helmet Comms" loading="lazy"><figcaption>Helmet Comms</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Commandant <em>(CMD)</em></h3>
<p>A partir de Commandant,</p>
<ul><li>💍 Bodygroup : <em>Pauldron Rouge Double</em></li><li>💍 Bodygroup : <em>Pauldron Base n°5</em></li><li>💍 Bodygroup : <em>Commander Rankplate</em></li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-23.png" alt="Pauldron Rouge Double" loading="lazy"><figcaption>Pauldron Rouge Double</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-24.png" alt="Commander Rankplate" loading="lazy"><figcaption>Commander Rankplate</figcaption></figure>
</div>
</div>
<div class="gs-section">
<p class="center"><strong>GUIDE DES TENUES DE SPÉCIALISATIONS</strong></p>
</div>
<div class="gs-section">
<h3>POUR TOUTES LES SPÉCIALISATIONS</h3>
<ul><li>💍 Bodygroup : <em>Pauldron Blanc</em></li></ul>
<p>↳ <em>A partir de LTN uniquement à votre </em>	<em>droite (impossible de l'équiper donc en </em>	<em>même temps que le pauldron noir) !</em></p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-25.png" alt="Pauldron Blanc" loading="lazy"><figcaption>Pauldron Blanc</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Médecin <em>(MDC)</em></h3>
<p>En tant que Médecin,</p>
<ul><li>👔 Votre skin de base : <em>Medic</em></li><li>👔 Nouveau skin : <em>Achref</em></li></ul>
<p>↳ <em>A partir de SGT-C</em></p>
<p>Autorisation liée à votre spécialisation :</p>
<ul><li>💍 Bodygroup : <em>Cheststrap n°0</em></li></ul>
<p>↳ <em>A partir de CPL</em></p>
<ul><li>💍 Bodygroup : <em>Kama Médical</em></li></ul>
<p>↳ <em>A partir de SGT-C</em></p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-26.png" alt="Médic + Cheststrap n°0" loading="lazy"><figcaption>Médic + Cheststrap n°0</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-27.png" alt="Kama Médical" loading="lazy"><figcaption>Kama Médical</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3><strong>Compagnie Républicaine de Sécurité</strong> <em><strong>(</strong><strong>CRS</strong><strong>)</strong></em></h3>
<p>En tant que CRS,</p>
<ul><li>👔 Votre skin de base : <em>Riot</em></li><li>👔 Nouveau skin : <em>Heavy</em></li></ul>
<p>↳ <em>A partir de 2nd LTN</em></p>
<ul><li>👔 Nouveau skin : <em>sd_diplomatie</em></li></ul>
<p>↳ <em>A partir de CPT</em></p>
<p>Autorisation liée à votre spécialisation :</p>
<ul><li>💍 Bodygroup : <em>Backpack n°1</em></li></ul>
<p>↳ <em>A partir de CPL</em></p>
<ul><li>💍 Bodygroup : <em>Chest Strap n°2</em></li></ul>
<p>↳ <em>A partir de SGT-C</em></p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-28.png" alt="Heavy" loading="lazy"><figcaption>Heavy</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-29.png" alt="Riot" loading="lazy"><figcaption>Riot</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Brigade d'Intervention Rapide <em>(BIR)</em></h3>
<p>En tant que BIR,</p>
<ul><li>👔 Votre skin de base : <em>Paratrooper</em></li><li>👔 Nouveau skin : <em>Barc</em></li></ul>
<p>↳ <em>A partir de SGT-C</em></p>
<ul><li>👔 Nouveau skin : <em>Pubs</em></li></ul>
<p>↳ <em>Réservé au Gérant de spé</em></p>
<p>Autorisation liée à votre spécialisation :</p>
<ul><li>💍 Bodygroup : <em>Chest Strap n°1,3,4,5</em></li></ul>
<p>↳ <em>A partir de CPL</em></p>
<ul><li>💍 Bodygroup : <em>Chest Strap n°2</em></li></ul>
<p>↳ <em>A partir de SGT-C</em></p>
<ul><li>💍 Bodygroup : <em>Backpack n°2</em></li></ul>
<p>↳ <em>A partir de 2nd LTN</em></p>
<ul><li>💍 Bodygroup : <em>Helmet Comms</em></li></ul>
<p>↳ <em>A partir de CPT</em></p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-30.png" alt="Paratrooper" loading="lazy"><figcaption>Paratrooper</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-31.png" alt="Pubs" loading="lazy"><figcaption>Pubs</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-32.png" alt="Barc" loading="lazy"><figcaption>Barc</figcaption></figure>
</div>
</div>
<div class="gs-section">
<h3>Advanced Recon Commandos  <em>(ARC SHOCK)</em></h3>
<p>En tant que ARC,</p>
<ul><li>👔 Votre skin de base : <em>sd_diplomatie</em></li></ul>
<p>Autorisation liée à votre spécialisation :</p>
<ul><li>💍 Bodygroup : <em>ARC Armor n°1</em></li><li>💍 Bodygroup : <em>Helmet Attachement n°0,1</em></li><li>💍 Bodygroup : <em>Rangefinder n°1</em></li><li>💍 Bodygroup : <em>Pauldron Base n°1,2,3,4,5</em></li><li>💍 Bodygroup : <em>Pauldron Left n°1</em></li><li>💍 Bodygroup : <em>Pauldron Right n°2</em></li><li>💍 Bodygroup : <em>Kama n°1</em></li><li>💍 Bodygroup : <em>Holsters</em> <em>n°1</em></li><li>💍 Bodygroup : <em>Chest Strap n°1</em></li><li>💍 Bodygroup : <em>Backpack n°1</em></li></ul>
</div>
<div class="gs-section">
<h3>Service Diplomatique <em>(SD)</em></h3>
<p>En tant que SD,</p>
<ul><li>👔 Skin de base persos RP : <em>voir ci-dessous</em></li></ul>
<p>Autorisation liée à votre spécialisation :</p>
<ul><li>💍 Modif Bodygroup persos RP : <em>Contacter gérant</em></li><li>💍 Bodygroup : <em>Si médecin, accès aux mêmes bodygroups qu'eux </em>(Cf au dessus)</li><li>1590 Charon : Ce fier au accessoires disponible en fonction du grade.</li></ul>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-33.png" alt="1590 Charon" loading="lazy"><figcaption>1590 Charon</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-34.png" alt="4515 Thorn" loading="lazy"><figcaption>4515 Thorn</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-35.png" alt="5869 Stone" loading="lazy"><figcaption>5869 Stone</figcaption></figure>
</div>
</div>
<div class="gs-section">
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-36.png" alt="4477 Thire" loading="lazy"><figcaption>4477 Thire</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-37.png" alt="2187 Jek" loading="lazy"><figcaption>2187 Jek</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-38.png" alt="1863 Rys" loading="lazy"><figcaption>1863 Rys</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-39.png" alt="K-9 9231 Hound" loading="lazy"><figcaption>K-9 9231 Hound</figcaption></figure>
</div>
</div>
<div class="gs-section">
<p class="center"><strong>GUIDE DES TENUES POUR</strong> <strong>CONDITIONS EXTRÊMES</strong></p>
</div>
<div class="gs-section">
<h3>Tenue Evo</h3>
<p>En cas de <strong>danger bactériologique</strong> ou afin de vous protéger contre les <strong>radiations</strong>, vous devez obligatoirement porter la <strong>tenue EVO</strong> correspondant à votre rang.</p>
<ul><li>👔 Votre skin de Soldat : <em>evo65p2trp_pm</em></li></ul>
<p>↳ <em>A partir de CT ASP à CPT-2nd</em></p>
<ul><li>👔 Les skin officiers : <em>evopubs_pm</em></li></ul>
<p>↳ <em>A partir de CPT à CMD</em></p>
<ul><li>👔 Fox et Thorn ont leur propre tenue Evo</li></ul>
<p>Autorisation liée à votre spécialisation :</p>
<ul><li>💍 Bodygroup : <em>Kama</em></li></ul>
<p>↳ <em>Obligatoire</em></p>
<ul><li>💍 Bodygroup : <em>Evoantup &amp; Evoantdown</em></li></ul>
<p>↳ <em>Au choix</em></p>
<div class="gallery">
<figure><img src="assets/pages/guide-tenues-40.png" alt="Paratrooper" loading="lazy"><figcaption>Paratrooper</figcaption></figure>
<figure><img src="assets/pages/guide-tenues-41.png" alt="Pubs" loading="lazy"><figcaption>Pubs</figcaption></figure>
</div>
</div>
`,

  "base-de-donnee-clones": `
<div class="gs-section">
<div class="sheet" data-sheet="recensement"></div>
</div>
`,

  "formation-deplacement": `
<div class="gs-section">
<div class="gdoc">
<figure class="doc-img"><img src="assets/docs/formation-deplacement-01.webp" alt="" loading="lazy"></figure>
<p class="center"><strong>⚠️</strong> Une chose est claire : lors de vos déplacements, vous devez fonctionner par angles droits et par lignes droites. <strong>⚠️</strong></p>
<p class="center"><strong><u>Formation: Colonne</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-02.webp" alt="" loading="lazy"></figure>
<p class="center">Le gradé le plus haut ouvre la marche en tête de colonne, tandis que le membre le moins gradé ferme la marche à l’arrière.</p>
<p class="center"><strong><u>Formation: Double colonne</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-03.webp" alt="" loading="lazy"></figure>
<p class="center">La formation en double colonne est utilisée lorsqu’il y a trop de Shock présents.</p>
<p class="center">Le gradé le plus haut ouvre la marche en tête de colonne.</p>
<p class="center">S’il y a un nombre impair de soldats, le dernier ferme la marche seul, au centre de la colonne.</p>
<p class="center"><strong><u>Formation: Ligne</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-04.webp" alt="" loading="lazy"></figure>
<p class="center">Cette formation consiste en une ligne de soldats, utilisée notamment lors des codes marrons. Elle peut également être intégrée efficacement en situation de combat.</p>
<p class="center"><strong><u>Formation: Ligne de feu avancé</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-05.webp" alt="" loading="lazy"></figure>
<p class="center">Utilisée en plein combat, cette formation place les soldats équipés d’armes lourdes à l’avant, à genoux ou pied à terre, tandis que le reste des troupes reste debout en joue derrière eux.</p>
<p class="center"><strong><u>Formation: Garde de porte</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-06.webp" alt="" loading="lazy"></figure>
<p class="center">Deux Shock se placent aux extrémités de la porte.</p>
<p class="center">S’il y a des Shock en trop, ils prennent la même position de l’autre côté de la porte.</p>
<p class="center">Le gradé le plus haut se met au centre pour superviser et prendre la parole si nécessaire.</p>
<p class="center"><strong><u>Formation: Formation LAAT</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-07.webp" alt="" loading="lazy"></figure>
<p class="center">Utilisée pour faire embarquer des VIP (Marine, Amirauté, Sénat, etc.).</p>
<p class="center">Les Shock se placent aux extrémités de la porte de la rampe. Si d'autres sont disponibles, ils prennent la même position de l’autre côté.</p>
<p class="center">Le gradé le plus haut se positionne au centre, légèrement décalé pour laisser passer le VIP tout en surveillant l’intérieur.</p>
<p class="center">Les Shock à l’intérieur doivent se faire face pour former un couloir sécurisé.</p>
<p class="center"><strong><u>Formation: Convoi</u></strong></p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-08.webp" alt="" loading="lazy"></figure>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-09.webp" alt="" loading="lazy"></figure>
<p class="center">Cette formation est utilisée lors du déplacement d’un VIP.</p>
<p class="center">Une colonne de Shock se place à sa droite, une autre à sa gauche, deux Shock ferment la marche à l’arrière, et le gradé le plus haut ouvre la marche (bien sûr, on s'adapte au niveau du nombre).</p>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-10.webp" alt="" loading="lazy"></figure>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-11.webp" alt="" loading="lazy"></figure>
<p class="center">Lors du déplacement d’un prisonnier en haute-sécurité, le gradé le plus haut l’emmène avec lui, menottes.</p>
<p class="center"><strong><u>Détails</u></strong></p>
<ol class="lvl-0"><li>Une marche : En avant, marche lente.</li><li>Au pas de course : En avant, marche rapide.</li><li>Arme en sécurité : Sortez l'arme, phase 1.</li><li>Arme en joue : Sortez l'arme, phase 2.</li></ol>
<figure class="doc-img"><img src="assets/docs/formation-deplacement-12.webp" alt="" loading="lazy"></figure>
</div>
</div>
`,

  "licences-pilotage": `
<div class="gs-section">
<div class="sheet" data-sheet="licences-pilotage"></div>
</div>
`,

  "at-pt": `
<div class="gs-section">
<p>Grade pour piloter le véhicule</p>
<ul><li>Avoir a FP1 : Formation à partir du grade de Caporal par un Adjudant ou plus de la Shock</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Marcheur légér bipède</li></ul>
<p>Matricule de décollage</p>
<ul><li>AT-PT/MATRICULE</li></ul>
<p>Places</p>
<ul><li>1 place de pilote</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Escorte et soutien d'infanterie</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Deux Canon lasers</li><li>Un lance grenade</li></ol></li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max Marcher : 23 km/h</li><li>Vitesse Max Sprint : 41 km/h</li></ul>
</div>
<div class="gs-section">
<div class="gdoc">
<p><strong>Formation AT-PT - Garde de Coruscant</strong></p>
<h2 class="doc-title">Formation AT-PT Shock</h2>
<p class="doc-subtitle"><strong>Document à l’attention des formateurs AT-PT de la Shock</strong></p>
<figure class="doc-img"><img src="assets/docs/formation-at-pt-01.webp" alt="" loading="lazy"></figure>
<h3><strong>I - INTRODUCTION</strong></h3>
<p>Qui sont les formateurs Shock AT-PT ? Ce sont<strong> tous les Adjudant et plus</strong>.</p>
<p>La formation se déroule en 2 temps : une partie <strong>théorique</strong> et une partie <strong>pratique</strong>.</p>
<p>Le convoquer sur le tarmac (un sur un endroit proche de la sortie de la base), et faire spawn <strong>2 AT-PT</strong>.</p>
<h3><strong>II - PRÉSENTATION DU VÉHICULE</strong></h3>
<p>L’AT-PT : “All Terrain Personal Transport” signifiant “Transport Personnel Tout-Terrain” est un <strong>marcheur léger bipède</strong> utilisé par la Shock pour des missions d’escorte et de soutien d’infanterie.</p>
<p>Haut de 3 mètres, il n’accueille qu’<strong>un seul pilote</strong> dans une cabine blindée. Il est armé de <strong>deux canons blasters</strong> et d’un <strong>lance-grenades</strong>, les deux à l’avant.</p>
<p>Il peut <strong>évoluer sur des terrains accidentés</strong> tout en restant relativement discret, ce qui le rend idéal pour être déployé dans divers environnements.</p>
<p><strong>Attention :</strong> Étant un bipède, l’AT-PT est vulnérable au niveau des pattes. Il faut aussi éviter les pentes trop raides en montée et en descente, au risque de le détruire.</p>
<h3><strong>III - PARTIE PRATIQUE</strong></h3>
<h4><strong>Utilisation des commandes :</strong></h4>
<ul class="lvl-0"><li>Faites le <strong>monter</strong> dedans</li><li>Faites lui <strong>découvrir les commandes</strong> (marcher, reculer, tourner et changer d’arme)</li><li>Apprenez lui à <strong>faire une demande</strong> pour sortir et entrer dans la base : <u>Ex :</u> <em>*R* AT-PT/4789, demande d’autorisation pour sortir de base pour formation. Effectif : 2</em></li><li><strong>Sortir</strong> de base</li></ul>
<h4><strong>Découverte en extérieur</strong></h4>
<ul class="lvl-0"><li><strong>Marchez</strong> dans les alentours sur plusieurs types de terrain si possible</li><li>Faites lui <strong>découvrir les limites</strong> du véhicule</li><li>Faites un <strong>petit combat</strong> entre vous (bien prévenir sur radio)</li><li>Une fois qu’il semble à l’aise,<strong> rentrer sur base</strong></li><li>Faire un court<strong> débrief de la partie pratique</strong></li></ul>
<p class="center"><em>Document réalisé par Achref.</em></p>
<p><em>/</em></p>
</div>
</div>
`,

  "repulsor-tank": `
<div class="gs-section">
<p>Grade pour piloter le véhicule</p>
<ul><li>Avoir la FP1 : Formation à partir du grade de Caporal par un Adjudant ou plus de la Shock</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Véhicule blindé terrestre</li></ul>
<p>Matricule de décollage</p>
<ul><li>Repulsor/MATRICULE</li></ul>
<p>Places</p>
<ul><li>1 place de pilote</li><li>1 place de copilote</li><li>8 places de passagers</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Escorte de personalités importantes</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Deux Canon lasers</li><li>Lampes frontales</li></ol></li><li>Co-pilote :
<ol><li>Canon laser rotatif</li></ol></li></ul>
<p>Vitesses</p>
<ul><li>Vitesse normal : 18 km/h</li><li>Vitesse avec boost : 46 km/h</li></ul>
</div>
<div class="gs-section">
<div class="gdoc">
<p><strong>Formation AT-PT - Garde de Coruscant</strong></p>
<h2 class="doc-title">Formation Repulsor Tank</h2>
<p class="doc-subtitle"><strong>Document à l’attention des formateurs Repulsor de la Shock</strong></p>
<figure class="doc-img"><img src="assets/docs/formation-repulsor-tank-01.webp" alt="" loading="lazy"></figure>
<h3><strong>I - INTRODUCTION</strong></h3>
<p>Qui sont les formateurs Shock Repulsor ? Ce sont<strong> tous les Adjudant et plus</strong>.</p>
<p>La formation se déroule en 2 temps : une partie <strong>théorique</strong> et une partie <strong>pratique</strong>.</p>
<p>Le convoquer sur le tarmac (un sur un endroit proche de la sortie de la base), et faire spawn <strong>2 Repulsor Tank</strong>.</p>
<h3><strong>II - PRÉSENTATION DU VÉHICULE</strong></h3>
<p>Le Repulsor Tank est un véhicule <strong>blindé terrestre</strong> utilisé pour l'<strong>escorte</strong> de personnalités importantes en milieu hostile.</p>
<p>Pouvant embarquer jusqu'à <strong>10 personnels</strong> (conducteur compris), peut atteindre une vitesse de <strong>46 km/h</strong> et est équipé de <strong>2 canons lasers</strong> sur l'avant pour le pilote ainsi qu'un <strong>canon laser rotatif pour</strong> le co-pilote.</p>
<h3><strong>III - PARTIE PRATIQUE</strong></h3>
<h4><strong>Utilisation des commandes :</strong></h4>
<ul class="lvl-0"><li>Faites le <strong>monter</strong> dedans</li><li>Faites lui <strong>découvrir les commandes</strong> (marcher, reculer, tourner et changer d’arme)</li><li>Apprenez lui à <strong>faire une demande</strong> pour sortir et entrer dans la base : <u>Ex :</u> <em>*R* Repulsor/4789, demande d’autorisation pour sortir de base pour formation. Effectif : 2</em></li><li><strong>Sortir</strong> de base</li></ul>
<h4><strong>Découverte en extérieur</strong></h4>
<ul class="lvl-0"><li><strong>Conduisez</strong> dans les alentours sur plusieurs types de terrain si possible</li><li>Faites lui <strong>découvrir les limites</strong> du véhicule</li><li>Faites un <strong>petit combat</strong> entre vous (bien prévenir sur radio)</li><li>Une fois qu’il semble à l’aise,<strong> rentrer sur base</strong></li><li>Faire un court<strong> débrief de la partie pratique</strong></li></ul>
<h4>III - CONCLUSION</h4>
<p>Inscrire dans les promo-rétro qu’il a obtenu la FP1.</p>
<p class="center"><em>Document réalisé par Achref.</em></p>
<p><em>/</em></p>
</div>
</div>
`,

  "laat-i": `
<div class="gs-section">
<p>Grade pour piloter le vaisseau</p>
<ul><li>Avoir la FP2 : Formation par la 212th à partir du grade de Sergent</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Transporteur Lourd / Véhicule d’Appuis apora</li></ul>
<p>Matricule de décollage</p>
<ul><li>LAAT-I/MATRICULE</li></ul>
<p>Places</p>
<ul><li>17 places dont 4 réservés à l’équipage</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Transport de transport de la Marine Républicaine et de toute personnalitée importante de la République</li><li>Patrouille, bien que la LAAT (Low Altitude Assault Transport) est comme son nom l’indique, un véhicule de transport de troupes</li><li>Son armement puissant lui permet également de faire de l'appui AIR-SOL avec une précision redoutable</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Deux canons situés à l'avant</li><li>Deux lances torpilles</li><li>Commandes d’ouverture de portes</li></ol></li><li>Copilote :
<ol><li>Deux boules laser à refroidissement sur chaque ailes</li><li>Un canon à l’arrière</li></ol></li><li>Deux artilleurs disposant chacun de deux boules d’artillerie à laser</li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max : 220 km/h</li><li>Vitesse Min : Stationnaire</li></ul>
</div>
`,

  "laat-le": `
<div class="gs-section">
<p>Grade pour piloter le vaisseau</p>
<ul><li>Avoir la FP2 : Formation par la 212th à partir du grade de Sergent</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Transporteur Léger / Véhicule d'escorte</li></ul>
<p>Matricule de décollage</p>
<ul><li>LAAT-LE/MATRICULE</li></ul>
<p>Places</p>
<ul><li>12 places dont 2 réservés à l’équipage</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Transports de prisonniers sans importance particulière pour un transfert vers Coruscant</li><li>Patrouille et transport de troupes dans les environs de la base.</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Deux lance missile autoguidé</li><li>Lampe frontale</li><li>Mécanisme d'ouverture de la porte</li><li>Commande spéciale : allumage des feux puis des gyrophares.</li></ol></li><li>Copilote :
<ol><li>Deux canon laser sur le devant</li></ol></li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max : 112 km/h</li><li>Vitesse Min : Stationnaire</li></ul>
</div>
`,

  "rho-class": `
<div class="gs-section">
<p>Grade pour piloter le vaisseau</p>
<ul><li>Avoir la FP2 : Formation par la 212th à partir du grade de Sergent</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Transporteur Lourd</li></ul>
<p>Matricule de décollage</p>
<ul><li>Rho-Class/MATRICULE</li></ul>
<p>Places</p>
<ul><li>16 places dont 1 réservé à l’équipage</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Transport de membres de la Marine Républicaine, de l’État-Major, de l’Amirauté ou encore de VIP</li><li>Cependant, ce véhicule ne peut être utilisé <strong>que</strong> lorsqu’il y a des membres de la MR à transporter, et ce sans exception !</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Canon lasers moyens</li><li>Canons laser à double lumière</li><li>Commande d’ouverture de la porte frontale</li><li>Commande spéciale : déploiement des ailes et rétraction des trains d'atterrissage</li><li>Commande d'accroche du caisson</li><li>Lumiere</li></ol></li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max : 180 km/h</li><li>Vitesse Min : Stationnaire</li></ul>
</div>
`,

  "radian-vii": `
<div class="gs-section">
<p>Grade pour piloter le vaisseau</p>
<ul><li>Avoir la FP3 : Formation par la 212th à partir du grade de Capitaine</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Croiseur</li></ul>
<p>Matricule de décollage</p>
<ul><li>Radian-VII/MATRICULE</li></ul>
<p>Places</p>
<ul><li>30 places dont 1 réservé à l’équipage</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Transport de personnes très importantes pour la République ou bien de membres de l’Amirauté</li><li>Ravitaillement</li><li>Transport de personnel dans le cadre de mission diplomatique</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Aucun</li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max : 174 km/h</li><li>Vitesse Min : Stationnaire</li></ul>
</div>
`,

  "republic-consular": `
<div class="gs-section">
<p>Conditions pour piloter le vaisseau</p>
<ul><li>Être du Service Diplomatique</li><li>Faire la formation par la 212th</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Croiseur</li></ul>
<p>Matricule de décollage</p>
<ul><li>Consular/MATRICULE</li></ul>
<p>Places</p>
<ul><li>30 places dont 1 pilote et 3 places pour l’équipage</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Transport de personnes très importantes pour la République ou bien de membres de l’Amirauté</li><li>Ravitaillement</li><li>Transport de personnel dans le cadre de mission diplomatique</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Canon laser</li></ol></li><li>Artilleurs :
<ol><li>Deux cannons lasers latérals</li><li>Un cannon laser arrière</li></ol></li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max : 174 km/h</li><li>Vitesse Min : Stationnaire</li></ul>
</div>
`,

  "barc-speeder-medical": `
<div class="gs-section">
<p>Grade pour piloter le véhicule</p>
<ul><li>Être médecin</li><li>Se renseigner en interne sur les conditions nécessaires</li></ul>
<h3>Type de véhicule</h3>
<ul><li>Moto légère rapide</li></ul>
<p>Matricule de décollage</p>
<ul><li>Barc-Speeder/MATRICULE</li></ul>
<p>Places</p>
<ul><li>1 place de pilote</li><li>1 place sur brancard</li></ul>
<p>Utilité au sein de la SHOCK</p>
<ul><li>Transport terrestre des blessés</li></ul>
<p>Armement et Mécanisation</p>
<ul><li>Pilote :
<ol><li>Deux Canon lasers</li></ol></li></ul>
<p>Vitesses</p>
<ul><li>Vitesse Max Marcher : 87 km/h</li><li>Vitesse Max Sprint : 110 km/h</li></ul>
</div>
`,

  "medecins": `
<div class="gs-section">
<a class="link-card" href="https://sites.google.com/view/site-ordre-medical-cw" target="_blank" rel="noopener">
<span class="link-card-ico">🩺</span>
<span><strong>Site | Ordre Médical</strong>
Bienvenue sur le site médecin ! C'est ici que tu trouveras tout les documents nécessaires lors de tes soins !</span>
</a>
</div>
`,

  "crs": `
<div class="gs-section">
<div class="gdoc">
<p class="center">╔═════════════════════════════════╗<br>Compagnie Républicaine de Sécurité [CRS]</p>
<p class="center">╚═════════════════════════════════╝<br><img src="assets/docs/presentation-crs-01.webp" alt="" loading="lazy"><br><br><strong><u>Sommaire :</u></strong></p>
<p class="center">1 - Présentation et fonction<br></p>
<p class="center">2 - Equipement<br></p>
<p class="center">3 - Compétences requises <br><br></p>
<ol class="lvl-0"><li><strong><u>Présentation et fonction:</u></strong></li></ol>
<p><strong><u><br></u></strong><em>La CRS est la Compagnie Républicaine de Sécurité de la SHOCK Trooper. C’est une spécialité qui permet aux unités d’intervenir en première ligne lors des missions. Leur tenues renforcée et leur équipement lourd leur permettent de combattre plus longtemps et face à une plus grande variété d’ennemis. Il s’agit des unités de combat lourdes de la Shock.<br><br>Ils ont plusieurs fonctions :<br></em></p>
<ul class="lvl-0"><li><em>Appuyer le reste de la Shock avec leurs Z6 et bouclier pour permettre une progression en toute sécurité.<br></em></li><li><em>En mission : Détruire tout obstacle faisant face à la SHOCK Trooper, notamment grâce à leurs explosifs.<br></em></li><li><em>Sécurisation des lieux sensibles nécessitant une protection lourde. En négociation, ils protègent le négociateur<br></em></li><li><em>Garde rapprochée des VIP, de la Marine Républicaine et de l’Amirauté</em></li></ul>
<p><em><br>C’est une spécialisation qui nécessite d'être bon au tir, en gestion des explosifs, en appui stratégique et en protection.</em></p>
<figure class="doc-img"><img src="assets/docs/presentation-crs-02.webp" alt="" loading="lazy"></figure>
<ol class="lvl-0"><li><strong><u>Equipements:<br></u></strong></li></ol>
<p><em>En plus de l’équipement SHOCK standard, la CRS possède les outils suivants pour effectuer leur mission avec succès :<br><br><br>- Grappin : <br><br><br><br></em><img src="assets/docs/presentation-crs-03.webp" alt="" loading="lazy"><img src="assets/docs/presentation-crs-04.webp" alt="" loading="lazy"></p>
<p><em>- Shield déployable (petit) : </em></p>
<p><em>                        <br></em></p>
<p><em>- Detpack (explosifs)</em></p>
<p><em>- Lance-roquettes (avec ciblage thermique)</em></p>
<p><em>- Z-6</em></p>
<p><em>- Thermal Grenade (300 dégâts)</em></p>
<p><em>- Sonic Imploder (800 dégâts)</em></p>
<p><em>- Smoke Grenade</em></p>
<p><em>- Armure améliorée (+50 HP / +50 armure)</em></p>
<ol class="lvl-0"><li><strong><u>Compétences requises:</u></strong></li></ol>
<p><strong><u><br></u></strong><em>Pour prétendre vouloir rejoindre la spécialisation, vous devez avoir les qualités suivantes :<br><br>- Être habile avec une arme à feu, notamment mitrailleuse lourde<br><br>- Savoir se servir d’un grappin en milieu hostile</em></p>
<p><em>- Avoir des connaissances sur l’usage des explosifs<br><br>- Être sérieux et savoir garder son sang froid en mission<br><br>- Connaître les fonctions de la spécialisation pour pouvoir les appliquer au moment venu<br><br><br></em></p>
<p class="center"><strong><em><u>Si vous désirez rejoindre la CRS adressez vous au leader ou au co-leader.</u></em></strong><em><br></em></p>
<p class="center"><em>Leader actuel : SHOCK 9559 Kalouche</em></p>
<p class="center"><em>Co-Leader actuel : SHOCK 1224 Yukon</em></p>
</div>
</div>
`,

  "bir": `
<div class="gs-section">
<div class="gdoc">
<h2 class="doc-title"><strong><u>BRIGADE D’INTERVENTION RAPPROCHÉE</u></strong></h2>
<p class="doc-subtitle">Document officiel de la Brigade d’Intervention Rapprochée</p>
<figure class="doc-img"><img src="assets/docs/presentation-bir-01.webp" alt="" loading="lazy"></figure>
<ol class="lvl-0"><li><strong>QU’EST-CE QUE LA BRIGADE D’INTERVENTION RAPPROCHÉE ?</strong></li></ol>
<p class="center">La <strong>Brigade d’Intervention Rapprochée</strong>, abrégée en <strong>BIR</strong>, est une spécialisation de la <strong>65th Shock Trooper</strong> ayant pour principal objectif <strong>l’intervention au contact direct</strong> et <strong>le combat rapproché</strong> en environnement confiné.</p>
<p class="center">La BIR se distingue par sa <strong>polyvalence au corps à corps</strong> et sa <strong>capacité à intervenir rapidement et efficacement dans les espaces restreints</strong>.<br> Sa particularité repose sur la <strong>maîtrise du Close Quarter Battle (CQB)</strong> et l’acquisition de <strong>techniques de combat avancées</strong>, permettant une efficacité maximale en situation rapprochée.<br> Les membres de la BIR sont également formés à <strong>l’utilisation du bouclier</strong> et du <strong>grappin</strong>, leur permettant de <strong>s’adapter à toutes les situations tactiques</strong> lors des missions d’assaut ou de sécurisation.<br>Elle dispose également du jetpack permettant à ses membres une polyvalence sur le terrain.</p>
<p class="center">Cette spécialisation met l’accent sur la <strong>discipline, la précision et la coordination</strong> d’équipe, faisant de ses membres l’élite du combat rapproché au sein de la  Shocktrooper.</p>
<p class="center">Le <strong>recrutement au sein de la BIR</strong> est strict, afin de garantir <strong>un haut niveau de compétence, de rigueur et de réactivité</strong> sur le terrain.</p>
<p class="center">La <strong>Brigade d’Intervention Rapprochée</strong> est une <strong>spécialisation exigeante</strong>, réservée aux clones démontrant un <strong>excellent contrôle de soi</strong>, une <strong>parfaite maîtrise du CQB</strong> et un <strong>engagement sans faille envers la 65th</strong>.</p>
<ol class="lvl-0"><li><strong>COMMENT REJOINDRE LA <u>BIR</u> ?</strong></li></ol>
<p class="center">➤ Être minimum Caporal.</p>
<p class="center">➤ Savoir utiliser le jetpack.</p>
<p class="center">➤ Être réactif et savoir utiliser les shields.</p>
<p class="center">➤ Maîtriser les techniques de combat à l'électrostaff.</p>
<p class="center">➤ Connaître le règlement de la flotte, de la Shock et de la BIR.</p>
<p class="center">➤ Contactez le leader à la radio. Présentez vos motivations et les raisons de rejoindre la BIR.</p>
<p class="center">➤ Passer les recrutements et les réussir.</p>
<ol class="lvl-0"><li><strong>RÈGLEMENT DE LA BRIGADE D’INTERVENTION RAPPROCHÉE</strong></li></ol>
<p><strong>- 1.0 : </strong>Les seuls à pouvoir réaliser une formation pour intégrer la Brigade d’Intervention Rapprochée sont le gérant de la spécialisation et le Co-gérant.</p>
<p><strong>- 1.1 </strong>: Toute divulgation du document de recrutement interne aux gérants de la BIR sera fortement sanctionnée et pourra même amener votre exclusion de la compagnie. <br></p>
<p><strong>- 2.0 : </strong>Votre gérant vous gère seulement après délégation de la part du Commandant de mission.</p>
<p><strong>- 3.0 : </strong>Il est strictement interdit de passer outre les indications du Guides tenues concernant la tenue sous peine de lourdes sanctions.</p>
<p><strong>- 4.0 : </strong>Sous peine d’infraction au règlement de la Brigade d’Intervention Rapprochée ou de manque de respect du règlement de la Shock Trooper, le gérant se réserve le droit de sanctionner l’unité.</p>
<p><strong>- 4.1 : </strong>Après plusieurs infractions (ou une seule si elle est lourde) au règlement de la Shock ou de la Brigade d’Intervention Rapprochée, le gérant se réserve le droit d’exclure l’unité de la spécialisation.</p>
<p><strong>- 4.2 : </strong>Le gérant se réserve le droit de refuser l’entrée dans la spécialité à n’importe quelle unité susceptible de dégrader l’image de la Brigade d’Intervention Rapprochée par un comportement inapproprié.</p>
<p><strong>- 5.1 : </strong>Votre nom en Shock doit être comme ceci :</p>
<p>[Régiment] [Grade] [BIR] [Matricule] [Nom] <br>- <strong>5.2 : </strong>Le gérant est le BIR-L pour “Leader”.<br>- <strong>5.3 : </strong>Le co-gérant est le BIR-CL pour “Co-Leader”.</p>
<p><strong>- 6.0 : </strong>En tant que BIR vous êtes spécialisé dans la polyvalence au combat donc vous possédez donc ces armes en conséquence : Doom Shield, Purgestaff, Electrostaff et Jetpack.<br>- <strong>6.1 : </strong>Vous pouvez utiliser votre équipement de corps à corps en mission dans la limite du possible.</p>
<p><strong>- 6.2 : </strong>Sur le champ de bataille, vous pouvez utiliser vos armes pour vous défendre, cependant, toute utilisation abusive et/ou rush sera sévèrement sanctionnée.</p>
<p><strong>- 6.3 : </strong>Votre maîtrise des armes de corps à corps vous permet certes de combattre les droïdes au sein d’un milieu clos, mais elle ne vous permet pas de combattre tel un Jedi. Vous ne pouvez donc pas parer les tirs de tout un groupe d'ennemis simultanément.</p>
<p><br><strong>- 7 : </strong>Tout membre de la BIR qu'importe son grade peut réprimander une unité d'une autre compagnie sur une mauvaise utilisation de son electrostaff, que ce soit directement sur le champ de bataille ou ailleurs. <br><br><strong>- 8 : En tant normale, l’utilisation du Jetpack en code blanc est interdite, hormis si vous êtes justement un membre de la BIR. Dans ce cas, lors d’une intervention, crises ou arrestations, vous pouvez l’utiliser à votre guise.</strong></p>
<ol class="lvl-0"><li><strong>INFORMATION ÉQUIPEMENT</strong></li></ol>
<p class="center"><a href="https://docs.google.com/document/d/1BCH-g_bB6Txe62cUjz4hhCT8Rd72dYhst_DkXMeGGCo/edit?usp=sharing" target="_blank" rel="noopener">Informations Equipement :</a></p>
<p class="doc-subtitle"><strong><em>Document mis à jour par ( Billy et Bebert )  le 16/10/2026</em></strong></p>
</div>
</div>
`,

  "ste": `
<div class="gs-section">
<div class="gdoc">
<p class="center">╔═════════════════════════════════╗<br>Section de tireur d’élite [STE]</p>
<p class="center">╚═════════════════════════════════╝<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><strong><u>Sommaire :</u></strong><img src="assets/docs/presentation-ste-01.webp" alt="" loading="lazy"></p>
<p class="center">1 - Présentation et fonction<br></p>
<p class="center">2 - Equipement<br></p>
<p class="center">3 - Qualités requises <br><br><br></p>
<ol class="lvl-0"><li><strong><u>Présentation et fonction:</u></strong></li></ol>
<p><strong><u><br></u></strong><em>La STE est une section de tireurs d’élite de la SHOCK trooper. Leur tenues noir leur permet de se fondre dans le décor pour assuré une protection sur les hauteurs en toute discression.<br><br>Ils ont plusieurs fonctions :<br><br></em></p>
<ul class="lvl-0"><li><em>Appuyer le reste de la Shock avec leurs snipers pour permettre une progression en toute sécurité.<br></em></li><li><em>Pendant les prises d’otages : se poster discrètement et prendre une visée sur l’assaillant pour le neutraliser sous commandement du gérant des négociations.<br></em></li><li><em>Quand on reçoit des VIP : se poster en hauteur et sécuriser la zone de loin et agir si besoin (comme les snipers de la garde républicaine qui sécurisent les ministres / président)<br></em></li><li><em>Se poster sur des endroits stratégiques, donner du renseignement au plus haut gradé Shock pour qu’il prenne les décisions.</em></li></ul>
<p><em><br><br><br>C’est une spécialisation qui nécessite d'être attentif en tout temps et de savoir quelle information peut être utile ou non pour la transmettre au commandement.</em></p>
<p><strong><u><br><br><br></u></strong></p>
<ol class="lvl-0"><li><strong><u>Equipement:<br></u></strong></li></ol>
<p><em>En plus de l’équipement SHOCK standard, il possède les outils suivants pour effectuer leur mission avec succès :<br><br><br>- IQA-11c ( Sniper ) : </em></p>
<p><em><br><br><br><br><br><br><br>- Grappin : <br><br><br><br><br><br><br><br><br>- Jumelles ( Macrobinocular ) : <br><br><br><br><br><br><br><br><br>- Jumelles ( Night Vision ) : <br><br><br><br><br><br><br><br><br><br><br></em><img src="assets/docs/presentation-ste-02.webp" alt="" loading="lazy"><img src="assets/docs/presentation-ste-03.webp" alt="" loading="lazy"><img src="assets/docs/presentation-ste-04.webp" alt="" loading="lazy"><img src="assets/docs/presentation-ste-05.webp" alt="" loading="lazy"></p>
<ol class="lvl-0"><li><strong><u>Qualités requises:</u></strong></li></ol>
<p><strong><u><br><br></u></strong><em>Voici les compétences requises pour rejoindre la spécialisation.<br><br><br><br>- Savoir juger quelle information est utile ou non à fournir au commandement SHOCK lorsque nous sommes sur les hauteurs.<br><br><br>- Savoir se servir d’un grappin en milieu hostile.<br><br><br>- Être habille avec un sniper et savoir abattre une cible de manière précise.<br><br><br>- Il vous faut également connaître les fonctions de la spécialisation pour pouvoir les appliquer au moment venu.<br><br><br><br><br></em></p>
<p class="center"><strong><em><u>Si vous désirez rejoindre la STE adressez vous à la gérance de celle-ci et à bientôt soldat.</u></em></strong><em><br><br></em><img src="assets/docs/presentation-ste-06.webp" alt="" loading="lazy"></p>
</div>
</div>
`,

  "service-diplomatique": `
<div class="gs-section">
<div class="gdoc">
<figure class="doc-img"><img src="assets/docs/presentation-sd-01.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><u>Service Diplomatique</u></strong></p>
<figure class="doc-img"><img src="assets/docs/presentation-sd-02.webp" alt="" loading="lazy"></figure>
<ol class="lvl-0"><li>Le Service Diplomatique est une spécialité de la Garde de Coruscant spécialisée dans la <strong>négociation et la diplomatie</strong> et d’autres spécificités selon le personnage RP.</li></ol>
<ol class="lvl-0"><li>Le gérant du Service Diplomatique est <strong>4515 Thorn</strong>.</li></ol>
<ol class="lvl-0"><li>Il n’y a <strong>que des personnages RP</strong>, qui apparaissent dans la série Clone Wars, dans le Service Diplomatique.</li></ol>
<ol class="lvl-0"><li>Les membres du Service Diplomatique sont les seuls à <strong>pouvoir former les autres clones de la Shock, les membres de la Marine, Alpha, CMDM.</strong></li></ol>
<ol class="lvl-0"><li>Il est possible d’entrer dans le Service Diplomatique <strong>à partir de Sergent</strong> avec les personnages RP de : Rys, Jek ou Hound. <strong>A partir de Lieutenant</strong>, il est possible d’incarner soit Thire ou Stone.</li></ol>
<ol class="lvl-0"><li>Le Service Diplomatique ainsi que les clones, les EM ou Jedis formés à la négociation sont <strong>prioritaires pour la négociation</strong>.</li></ol>
<ol class="lvl-0"><li>Voici les règles concernant les armes/sweps en fonction des perso que vous incarnés :</li></ol>
<p>Thorn :</p>
<ul class="lvl-0"><li>Armes de base shock</li><li>Equipement médical</li><li>Z6</li></ul>
<p>Hound :</p>
<ul class="lvl-0"><li>Armes de base shock</li><li>Equipement médical</li></ul>
<p>Rys :</p>
<ul class="lvl-0"><li>Armes de base shock</li><li>Equipement médical</li></ul>
<p>Jek :</p>
<ul class="lvl-0"><li>Armes de base shock</li><li>Equipement médical</li><li>RPS-6</li><li>Z6</li></ul>
<p>Thire :</p>
<ul class="lvl-0"><li>Armes de base shock</li><li>Equipement médical</li><li>Grappling hook</li></ul>
<p>Stone :</p>
<ul class="lvl-0"><li>Armes de base shock</li><li>Equipement médical</li><li>Dual DC-17</li><li>Stun DC-17</li></ul>
<ol class="lvl-0"><li>Les perso RP sont : <strong>4515 Thorn, 4477 Thire, 5869 Stone, 2187</strong> <strong>Jek, 1863 Rys ainsi que K-9 9231 Hound</strong>, voici leurs tenues et leurs spécificités qui vous aidera à choisir lequel vous souhaitez incarner :</li></ol>
<p class="center"><a href="https://docs.google.com/document/d/1jfMx9gVxOY-K_Pf74IU9rtA_F3_AjuDMYdbU4dVUYqM/edit?usp=sharing" target="_blank" rel="noopener">Tenues SD</a><img src="assets/docs/presentation-sd-03.webp" alt="" loading="lazy"></p>
</div>
</div>
<div class="gs-section">
<div class="gform">
<h2 class="doc-title">Formation Négociateur</h2>
<p><strong>⚡ <u>A lire pour le premier remplissage</u> ⚡</strong></p>
<p>Merci de compléter ce document avec soin et rigueur dans le cadre de toute formation de négociateur. Ces informations sont nécessaires afin de permettre à l’unité d’être habilitée à exercer la fonction de négociateur.</p>
<form class="native-form" data-action="https://docs.google.com/forms/d/e/1FAIpQLScMCKlDT6eLvZCp9CrBS3leJZ21jBsa851Ix-0UKQ1FiZhYYw/formResponse">
<label>Votre Identification + Discord 🙋‍♂️ <span class="req">*</span><input name="entry.1457265857" required></label>
<label>Steam ID 64 <span class="req">*</span><input name="entry.1445080081" required></label>
<label>Son grade + matricule + nom 👨‍💼 <span class="req">*</span><input name="entry.1581140396" required></label>
<fieldset><legend>Son Régiment 📊 <span class="req">*</span></legend>
<label class="radio"><input type="radio" name="entry.1776159824" value="104th" required> 104th</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="212th" required> 212th</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="408th" required> 408th</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="327th" required> 327th</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="501st" required> 501st</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="41st" required> 41st</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="shock" required> shock</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="Marine Républicaine" required> Marine Républicaine</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="Ordre Jedi" required> Ordre Jedi</label>
<label class="radio"><input type="radio" name="entry.1776159824" value="BOS" required> BOS</label>
</fieldset>
<label>Son Discord 🖥️ <span class="req">*</span><input name="entry.2125073988" required></label>
<label>Détails 👀<textarea name="entry.1903360789" rows="4"></textarea></label>
<button class="btn primary" type="submit">Envoyer</button>
<p class="form-status" hidden></p>
</form>
</div>
</div>
<div class="gs-section">
<div class="sheet" data-sheet="reponses-negociateur"></div>
</div>

<div class="gs-section">
<h3>Diplomatie / Négociation</h3>
<div class="sheet" data-sheet="diplomatie"></div>
</div>
`,

  "rc-regimentaire": `
<div class="gs-section">
<div class="gdoc">
<p class="center"><strong><u>Introduction des Republic Commandos.<br><br><br><br></u></strong><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Dans les méandres obscurs de la guerre des clones, dissimulés derrière les affrontements spectaculaires entre Jedi et Seigneurs Sith, se trouvent des soldats d’élite dont l’existence même incarne le paradoxe de la guerre : les Républiques Commandos, ou <em>Clone Commandos</em>. Ces guerriers, produits dans le plus grand secret sur la planète Kamino, sont l’aboutissement d’un programme de clonage sans précédent, destiné à fournir à la République Galactique une force armée capable de tenir tête à la redoutable Confédération des Systèmes Indépendants. Mais au-delà de leur efficacité au combat, les Républiques Commandos symbolisent une facette souvent ignorée de la guerre : l'humanité des clones, leur loyauté programmée, leur condition de soldats façonnés pour un conflit qu’ils n’ont jamais choisi.<img src="assets/docs/rc-regimentaire-01.webp" alt="" loading="lazy"></p>
<p class="center">Les Clone Commandos sont le fruit d’une ingénierie génétique poussée. Ils ne sont pas de simples soldats clones comme ceux que l'on voit en première ligne, mais une version améliorée, plus résistante, plus intelligente, entraînée dès la plus tendre enfance pour exécuter des missions d'infiltration, de sabotage, de reconnaissance et d’élimination ciblée. Formés en escouades de quatre, ces soldats opèrent souvent derrière les lignes ennemies, accomplissant des opérations cruciales pour l'avancée de la République. Leur entraînement intensif, supervisé par des instructeurs mandaloriens (Cuy’val dar), leur a inculqué une discipline impitoyable, une fraternité indéfectible et une efficacité mortelle.</p>
<p class="center">Parmi ces escouades légendaires, l’Escouade Delta est probablement la plus connue, notamment grâce à leurs membres Composée de 1138 Boss, 1140 Fixer, 1262 Scorch, et 1207 Sev, cette unité incarne la rigueur tactique et le professionnalisme absolu des commandos. L’instructeur Walen Vau se chargea de faire de l’escouade des machines a tué efficaces. Il était impitoyable avec eux allant jusqu'à les affronter en combats singuliers.</p>
<p class="center">Le RC 1138 Boss viendra à lui casser le bras lors d’un entraînement et grâce à cette prouesse il deviendra le chef de l’escouade.</p>
<p class="center"><strong><em>Culture mandalorienne </em></strong></p>
<p class="center">Les Clone Commandos ont un lien profond avec la culture mandalorienne, bien plus marqué que les clones standards. Ce lien vient de leur origine, de leur formation, et même de leur identité en tant que guerriers.</p>
<p class="center">Les Clone Commandos ne sont pas de simples soldats : ce sont des héritiers de la culture mandalorienne, par leur sang, leur éducation, et leur mode de vie. Ce lien influence profondément leur façon de penser, de combattre, et de voir le monde.</p>
<p class="center">Voici une explication claire et structurée :</p>
<h4 class="center">1. Origine mandalorienne de Jango Fett</h4>
<ul class="lvl-0"><li>Tous les clones, y compris les Commandos, sont des clones génétiques de Jango Fett, un chasseur de primes qui  est lui-même mandalorien. Il insistera auprès des Kaminoen pour leur transmettre sa culture. <br></li></ul>
<ul class="lvl-0"><li>Les Commandos héritent donc de son ADN, mais aussi de certains principes : fierté guerrière, loyauté à l’escouade, efficacité au combat.<br></li></ul>
<h4 class="center">2. Formation par des instructeurs mandaloriens</h4>
<ul class="lvl-0"><li>Après l'entraînement flash les commandos ont été entraînés différents <br></li><li>Ils sont formés dès l’enfance par des mercenaires et vétérans mandaloriens appelés les Cuy’val Dar (<em>Ceux qui n’existent plus</em>, en mando’a).<br></li><li>Ces formateurs leur enseignent :<br></li></ul>
<ul class="lvl-1"><li>Les valeurs mandaloriennes (discipline, fraternité, honneur).<br></li><li>Le langage mando’a (qu'ils parlent entre eux).<br></li><li>Les techniques de guerre mandaloriennes.<br></li></ul>
<h4 class="center"><br><br><br>3. Fraternité et esprit de clan</h4>
<ul class="lvl-0"><li>Les Commandos opèrent tous le temps en escouades de 4 (formé après l'entraînement flash ) sauf escouade Oméga qui aura un membre en plus. <br></li><li>Apprentissage de la langue et culture mandalorienne. Il n'était pas rare de les entendre parler en mandalorien. <br></li><li>Ils considèrent leur escouade comme leur &quot;vod&quot; (<em>frère</em>, en mando’a).<br></li></ul>
<h4 class="center">4. Code de conduite proche du Resol’nare</h4>
<ul class="lvl-0"><li>Le Resol’nare est un ensemble de 6 principes mandaloriens, dont :<br></li></ul>
<ul class="lvl-1"><li>Défendre sa famille et son clan.<br></li><li>Parler le mando’a.<br></li><li>Porter l’armure.<br></li></ul>
<ul class="lvl-0"><li>Les Clone Commandos respectent souvent ces règles de manière instinctive ou enseignée.<br></li></ul>
<h4 class="center">5. Identité complexe</h4>
<ul class="lvl-0"><li>Chez tous les commandos se développera le facteurs H pour Humain ce qui donnera une personnalité différente à chacun.<br></li><li>Ils remettent en question leur rôle de soldats créés pour la guerre.</li><li>Certains cherchent même à vivre en dehors de la République, à fonder une famille ou à rejoindre Mandalore.<br></li></ul>
<p class="center"><strong><u>Armement:  </u></strong></p>
<h5 class="center">Armure Katarn :</h5>
<ul class="lvl-0"><li>Nom complet : Armure Katarn de classe Commando. (tiré du nom d’une créature redoutable vivant sur kashyyyk) <br></li><li>Caractéristiques :</li></ul>
<ul class="lvl-1"><li>Ultra résistante : protège contre les explosions, tirs de blaster, et environnements hostiles.<br></li><li>Camouflage intégré : certains modèles peuvent se fondre dans l’environnement.</li><li>Vision nocturne et thermique.<br></li><li>Système de communication sécurisé intégré.<br></li><li>Tête dotée d’un affichage HUD (tête haute) avec marquage des cibles et liaison avec l’escouade.</li></ul>
<h5>Arme principale : DC-17m (Interchangeable Weapons System)</h5>
<ul class="lvl-0"><li>Arme modulaire : l'arme peut être transformée en :<br></li></ul>
<ul class="lvl-1"><li>Rifle (mode standard).</li><li>Anti-armor (pour dégâts de zone).</li><li>Sniper (tir longue distance de précision).</li><li>Shotgun ( Fusil a pompe)</li></ul>
<p><u>Quelque Grandes Batailles : </u></p>
<h5><strong>Bataille de Géonosis  (Obligatoire de la connaître)</strong></h5>
<ul class="lvl-0"><li>Première grande bataille de la Guerre des Clones.<br></li><li>Lancement officiel du conflit.<br></li><li>Des milliers de clones affrontent les droïdes séparatistes dans les arènes et déserts de Géonosis.<br></li><li>Les Commandos sont déployés en infiltration et sabotage (ex. : <em>Republic Commando</em> jeu vidéo).</li></ul>
<h5><strong><u>2. Bataille de Kamino</u></strong></h5>
<ul class="lvl-0"><li>Attaque séparatiste sur la planète où sont créés les clones.<br></li><li>Objectif : détruire les installations de clonage.<br></li><li>Les Clone Commandos défendent les cuves à clonage et repoussent les forces droïdes.<br></li></ul>
<hr>
<h5><strong><u>3. Bataille de Kashyyyk</u></strong></h5>
<ul class="lvl-0"><li>Planète natale des Wookiees.<br></li><li>Les forces clones (y compris des commandos) aident les Wookiees contre l’invasion séparatiste.<br></li><li>Yoda est présent, et l’Ordre 66 y sera exécuté.</li></ul>
<p>Autres Missions des Opérations Spécial sont tenues secret<br></p>
</div>
</div>
`,

  "arc-rogue": `
<div class="gs-section">
<div class="gdoc">
<figure class="doc-img"><img src="assets/docs/arc-rogue-01.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><em><u>ARC Rogue</u></em></strong></p>
<figure class="doc-img"><img src="assets/docs/arc-rogue-02.webp" alt="" loading="lazy"></figure>
<figure class="doc-img"><img src="assets/docs/arc-rogue-03.webp" alt="" loading="lazy"></figure>
<figure class="doc-img"><img src="assets/docs/arc-rogue-04.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><u>I- Histoire de la ARC</u></strong></p>
<p><u>La ARC se divise en trois générations :</u></p>
<p>-    Les ARC de première génération : Les ARC Null</p>
<p>Les ARC Null était la première salve de 12 clones conçue sur Kamino avant le début de la guerre. Lors du processus de création, des problèmes ont été rencontrés réduisant l’effectif à 6 clones. De plus, le résultat attendu n’était pas au rendez-vous. Dans cette escouade, nous pouvons retrouver un capitaine bien connu, le Capitaine N-11 connu sous le nom de Ordo. Leur formateur était Kal Skirata.<br></p>
<p>-    Les ARC de deuxième génération : Les ARC Alpha</p>
<p>Après l'échec de la première génération, une autre salve de clone fût créée mais cette fois-ci, 100 Clones ont été créés. Comparées au ARC Null, les ARC Alpha sont moins indépendant, mais tout autant compétent. De ce fait, il ont été entraînés par le mandalorien Jango Fett.<br><br>    -    Les ARC de troisième génération : Les ARC Rogue</p>
<p>Enfin les ARC Rogue sont des soldats régimentaires. Ils obtiennent ce titre suite à un acte honorifique sur le terrain ou tout simplement lors de la fin de leurs formations en sortant de Kamino.</p>
<figure class="doc-img"><img src="assets/docs/arc-rogue-05.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><u>II- Description</u></strong></p>
<p><strong>1- Les <a href="https://www.starwars-universe.com/organisation-114-soldats-arc.html" target="_blank" rel="noopener">Soldats</a><a href="https://www.starwars-universe.com/organisation-114-soldats-arc.html" target="_blank" rel="noopener"> </a><a href="https://www.starwars-universe.com/organisation-114-soldats-arc.html" target="_blank" rel="noopener">ARC</a>, plus connus sous le nom de C<a href="https://starwars.fandom.com/wiki/Advanced_Recon_Commando" target="_blank" rel="noopener">ommandos de Reconnaissance Avancés</a></strong> <strong>(CRA), étaient l'élite de la <a href="https://www.starwars-universe.com/organisation-33-grande-armee-de-la-republique.html" target="_blank" rel="noopener">Grande Armée de la République</a> à l'époque de la guerre des Clones. Ils obtenaient cette promotion soit après une action héroïque sur le terrain, soit à la fin de leur formation sur <a href="https://www.starwars-universe.com/planete-3-kamino.html" target="_blank" rel="noopener">Kamino</a>. Parmi les autres éléments de son armure, mentionnons une double épaulette colorée et une jupe appelée <a href="https://www.starwars-universe.com/objet-220-kama.html" target="_blank" rel="noopener">Kama</a>, qui conférait aux soldats une silhouette remarquable.</strong></p>
<p><strong>2- Un Soldat ARC Rogue représente son régiment devant la Alpha s’il échoue alors son régiment perdra de la réputation, comme vous êtes SHOCK de plus Rogue, vous serez donc dans l’obligation de respecter les règlements en vigueur et surtout les valeurs car vous êtes “L’élite”.</strong></p>
<p><strong>3- Le Soldat ARC SHOCK possède un équipement spécifique : équipement de base / Z-6 / Smart Launcher / Jetpack / Grappin / Kama / double épaulette / Armure renforcée / Shock Grenade / Smoke Grenade / Heavy Shield / Deployable Shield / Riot Shield</strong></p>
<p><strong>4- Un Soldat ARC Rogue est dans l’obligation d'obéir aux ordres de la Alpha sauf contre les règles d’or et respect ou bien si cela entre dans le cadre de vos fonction.</strong></p>
<figure class="doc-img"><img src="assets/docs/arc-rogue-06.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><u>III- Règlement tenue</u></strong></p>
<figure class="doc-img"><img src="assets/docs/arc-rogue-07.webp" alt="" loading="lazy"></figure>
<ul class="lvl-0"><li>Tenue obligatoire :</li></ul>
<ul class="lvl-0"><li>ARC Armor : 1</li></ul>
<ul class="lvl-0"><li>Helmet Attachement : 0 ou 1</li></ul>
<ul class="lvl-0"><li>Rangefinder : 1</li></ul>
<ul class="lvl-0"><li>Pauldron base : 0 à 5</li></ul>
<ul class="lvl-0"><li>Left Pauldron : 1</li></ul>
<ul class="lvl-0"><li>Right Pauldron : 2</li></ul>
<ul class="lvl-0"><li>Kama : 1</li></ul>
<ul class="lvl-0"><li>Holsters : 1</li></ul>
<ul class="lvl-0"><li>Chest Strap : 1</li></ul>
<ul class="lvl-0"><li>Backpack : 1</li></ul>
<figure class="doc-img"><img src="assets/docs/arc-rogue-08.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><u>VI- Prérequis</u></strong></p>
<p>Pour prétendre au recrutement ARC Rogue, vous devez remplir les conditions suivantes :</p>
<ul class="lvl-0"><li>SGT</li></ul>
<ul class="lvl-0"><li>2 Médailles</li></ul>
<ul class="lvl-0"><li>Obtenir l’approbation du Commandant Maréchal 1010 Fox et du responsable Rogue</li></ul>
<p>Pour obtenir l’approbation du responsable, vous devez avoir effectué une batterie d'entraînement avec celui-ci et vous donne son accord que lorsque qu’il estimera que vous serez prêt.</p>
<figure class="doc-img"><img src="assets/docs/arc-rogue-09.webp" alt="" loading="lazy"></figure>
<p class="center"><strong><u>V- Les Mission</u></strong></p>
<p class="center">Vos missions en rapport avec votre fonction sont inchangées cependant étant ARC Rogue vous serez surement amené à faire des missions avec la ARC Alpha, notamment pour avoir un plus gros effectif en fonction de l'importance de la mission et de sa difficulté. Dans les missions rogue, vous priorisez la mission qui vous ai attitrés et non la mission de la shock</p>
<figure class="doc-img"><img src="assets/docs/arc-rogue-10.webp" alt="" loading="lazy"></figure>
<ul class="lvl-0"><li><strong><em>CMDM 1010 Fox (Foster)</em></strong></li><li><strong><em>2nd LTN 6545 Steel</em></strong></li></ul>
</div>
</div>
`,

  "nouveaux-arrivants": `
<div class="gs-section">
<div class="embed video"><iframe src="https://www.youtube.com/embed/DUCnSXZTtSY" title="Vidéo de présentation nouveaux Shock Trooper V4" loading="lazy" allowfullscreen></iframe></div>
</div>
`,

  "guide-mise-en-protocole": `
<div class="gs-section">
<div class="embed video"><iframe src="https://www.youtube.com/embed/sIFUzyfom2M" title="Mise en protocole V4" loading="lazy" allowfullscreen></iframe></div>
</div>
`,

  "peloton-execution": `
<div class="gs-section">
<div class="gdoc">
<figure class="doc-img"><img src="assets/docs/peloton-execution-01.webp" alt="" loading="lazy"></figure>
<p><strong>Procédure n°1 - Garde de Coruscant</strong></p>
<h2 class="doc-title">Peloton d'exécution - P10</h2>
<p class="doc-subtitle"><strong>Document fais pour le corps de la Garde de Coruscant</strong></p>
<h3>DESCRIPTION</h3>
<p>Un peloton d’exécution est l’élimination, par la Garde de Coruscant d’un individu à la suite d'une faute grave. Cette sanction est ce que l’on appelle P10. Il est le plus souvent ordonné à la suite d’une cour martiale ou suite à l’ordre d’un Haut Gradé de la République (Amirauté et Direction minimum) et sera dirigé par un officier de la Garde (Capitaine minimum).</p>
<p>Cette les étapes de cette exécution doit être respectée à la lettre et les ordres de vos supérieurs respectés à la lettre sous peine de lourdes sanctions.</p>
<p>Durant tout ce protocole, certains ordres peuvent être donnés sur Discord, le canal vocal peut donc passer en RP et il est obligatoire à l’ensemble des membres présents d’être connecté sur celle-ci.</p>
<h3>DÉROULEMENT DE L’EXÉCUTION</h3>
<h4>Préparation du prisonnier</h4>
<p>Comme avant chaque début de mise en cellule, le prisonnier doit être fouillé et mis en tenue de prisonnier puis placé en cellule jusqu’à l’ordre d’un supérieur qui vous ordonnera de ramener le prisonnier.</p>
<h4><strong>Préparation des poteaux</strong></h4>
<p>En attendant la préparation du prisonnier, un Shock ira préparer les poteaux où le prisonnier sera attaché. D’autres Shock Trooper se chargeront de placer les spectateurs à quelques mètres <strong>derrière</strong> les Shock Trooper.</p>
<p>Deux médecins, de préférence extérieur à la Shock, désignés par l’officier de la Shock en charge du peloton se mettront sur le côté pour récupérer le corps du prisonnier une fois ce dernier exécuté.</p>
<p>La mise en place doit se faire comme ci-dessous sauf contre ordre de votre supérieur.</p>
<figure class="doc-img"><img src="assets/docs/peloton-execution-02.webp" alt="" loading="lazy"></figure>
<h4><strong>Transport du prisonnier</strong></h4>
<p>A partir de ce moment, l’<strong>ensemble des Shock Trooper doivent avoir leurs <u>DC-15A</u> en mode safe en main</strong> car la sortie de ce prisonnier peut s’avérer dangereuse.</p>
<p>Le prisonnier doit être menotté, protégé et escorté jusqu’à son arrivée aux poteaux, il ne doit pas avoir de contact avec des membres extérieurs comme des spectateurs ou autres (hors Shock et Hauts Gradés)</p>
<p>En arrivant aux poteaux, le prisonnier doit être attaché au poteau par les pieds et par les mains (/me) pour qu’il ne puisse pas bouger.</p>
<p>Une fois le prisonnier placé, l’ensemble des Shock, hormis le plus HG, doivent se placer en face des poteaux toujours leurs <strong><u>DC-15A à la main</u></strong> en mode safe.</p>
<h4><strong>Annonce du maître de cérémonie</strong></h4>
<p>Le maître de cérémonie, étant généralement un membre de l’Amirauté, annoncera aux spectateurs les raisons de son exécution et pourra lui laisser dire quelques derniers mots. Durant ce moment, vous ne bougez pas jusqu’aux ordres de votre supérieur.</p>
<h4><strong>Exécution du prisonnier</strong></h4>
<p>L’officier de la Shock en charge vous annoncera des ordres simples qui doivent être exécutés à la lettre.</p>
<ul class="lvl-0"><li><strong>“PRÉSENTEZ ARME” </strong><em>: vous retirez le mode safe de votre arme sans viser</em></li><li><strong>“EN JOUE” </strong><em>: vous visez le prisonnier</em></li><li><strong>“FEU” </strong><em>: vous tirez jusqu’à l’ordre de votre supérieur (même si vous avez l’impression qu’il à bien été exécuté, vous continuez de tirer jusqu’à l’ordre suivant)</em></li><li><strong>“HALTE” </strong><em>: vous arrêtez de tirer</em></li><li><strong>“RECHARGEZ ARME”</strong> <em>: vous rechargez vos armes</em></li><li><strong>“REPOSEZ ARME” </strong><em>: vous remettez votre <u>arme en safe</u> et ne bougez plus</em></li></ul>
<h4><strong>Procédure finale</strong></h4>
<p>Une fois le prisonnier exécuté, l’officier transmettra aux médecins d’aller se charger du corps.</p>
<h4><strong>Exemple vidéo</strong></h4>
<p><em>A venir…</em></p>
<p class="center"><em>Document fait par Achref</em></p>
<p><em>/</em></p>
</div>
</div>
<div class="gs-section">
<div class="embed video"><iframe src="https://www.youtube.com/embed/2pZLiceIlUk" title="Procédure - Peloton d'Éxecution" loading="lazy" allowfullscreen></iframe></div>
</div>
`,

  "cour-martiale": `
<div class="gs-section">
<a class="link-card" href="https://sites.google.com/view/marinerepublicaine/documents-utiles/cour-martiale" target="_blank" rel="noopener">
<span class="link-card-ico">⚖️</span>
<span><strong>Site | Marine Républicaine - 🎖️ Cour Martiale</strong>
Président de séance : Membre de l'Amirauté — Représentant de l'ordre : 65th CMDM 1010 Fox ou un officier Shock si absent — Votants : l'Amirauté, la Direction B.O.S, la Gérance Jedi, tous les membres de l'État-Major, un membre de chaque régiment venant de la régulière (minimum Capitaine)…</span>
</a>
</div>
`,

  "securite-incendie-venator": `
<div class="gs-section">
<div class="gdoc">
<p class="center">╔═══════════════════════════════════════════════╗</p>
<p class="center"><strong><em>Venator - Risques d’incendie &amp; procédures</em></strong></p>
<p class="center">╚═══════════════════════════════════════════════╝</p>
<p class="center"><em>Dans le cadre des opérations à bord du Venator, vous pourriez être confronté à des départs de feu ou à des incidents techniques présentant un risque d’incendie.</em></p>
<p class="center"><em>Le présent document a pour objectif de vous fournir les consignes essentielles, les zones à risque et les procédures à appliquer afin d’assurer une réaction rapide, coordonnée et sécurisée pour l’ensemble des unités embarquées.</em></p>
<p class="center"><em>Ce document a été réalisé grâce à la collaboration conjointe de la </em><strong><em>Marine Républicaine</em></strong><em> et du </em><strong><em>104th Battalion Wolf Pack</em></strong><em>.</em></p>
<figure class="doc-img"><img src="assets/docs/securite-incendie-venator-01.webp" alt="" loading="lazy"></figure>
<p class="center"><strong>⚠️ <u>RISQUES D’INCENDIE À BORD DU VENATOR</u> ⚠️</strong></p>
<p><strong><u>1. Armurerie :<br></u></strong>        - Outils de réparation au chalumeau<br>        - Colonne tournante (frictions)<br>        - Chambre forte contenant l’armement lourd</p>
<p><strong><u>2. Tarmac :<br></u></strong>        - Départs de vaisseaux</p>
<p><strong><u>3. Infirmerie :<br></u></strong>        - Robots médicaux<br>        - Salle d’IRM<br>        - Noyau d’alimentation<br>        - Salle d’autopsie supérieure (système d’incinération)</p>
<p><strong><u>4. Hangar :<br></u></strong>        - Décollage / Atterrissage des vaisseaux</p>
<p><strong><u>5. Salle du Noyau :<br></u></strong>        - Les noyaux<br>        - Les machines<br>        - Installations électriques (risque élevé)</p>
<p><strong><u>6. Zone Carcérale :<br></u></strong>        - Portes lasers<br>        - Postes de contrôles<br>        - Caméras<br>        - Cellules (risque humain)</p>
<p><strong><u>7. Salle de détente :<br></u></strong>        - Projecteurs<br>        - Boissons alcoolisés (risque humain)<br>        - Poste de contrôle</p>
<p><strong><u>8. Citadelle :<br></u></strong>        - Déflagration de tirs d’entraînements<br>        - Droïdes d’entraînements<br>        - Frictions des modules d’entraînements</p>
<p><strong><u>9. Mess :<br></u></strong>        - Chambre froide<br>        - Fours<br>        - Frigidaires</p>
<p><strong><u>10. Ponts EM :<br></u></strong>        - Consoles (risques élevés)<br>        - Postes de contrôle<br>        - Tables holographiques</p>
<p><strong><u>11. Salles du Bouclier :<br></u></strong>        - Installations électriques</p>
<p><strong><u>12. Salle d’entraînement :<br></u></strong>        - Modules d’entraînements</p>
<p><strong><u>13. Data Center :<br></u></strong>        - Panneaux électriques / Installations électriques<br>        - Poste de contrôle</p>
<p><strong><u>14. Salle des machines :<br></u></strong>        - Machinerie<br>        - Turbine<br>        - Panneaux de contrôle</p>
<p class="center"><strong><u>PROCÉDURE À SUIVRE</u></strong></p>
<h4 class="center"><strong>Vigilance accrue lors des manipulations</strong></h4>
<p><strong>Manipulation de matériaux inflammables</strong> : Toute manipulation d'équipements ou substances inflammables, comme les carburants, lubrifiants ou composants chimiques, doit être effectuée dans des zones bien ventilées et sous supervision.</p>
<p><strong>Utilisation d'équipements électriques</strong> : Inspectez régulièrement les câbles, générateurs, et autres dispositifs pour éviter les courts-circuits ou étincelles pouvant déclencher un incendie.</p>
<p><strong>Contrôle des armes et explosifs</strong> : Lors des nettoyages ou rechargements, assurez-vous que les armes ou munitions ne présentent aucun risque de décharge accidentelle.</p>
<h4 class="center"><strong><u>Mesures en cas d'incendie</u></strong></h4>
<p><strong>Détection</strong> : Alertez immédiatement la flotte via la radio.</p>
<p><strong>Contenir le feu</strong> : utilisez les extincteurs. Les équipes EVO doivent intervenir en priorité.</p>
<p><strong>Évacuation</strong> : En cas de Code Noir, toutes les unités doivent évacuer.</p>
<h4 class="center"><strong><u>Port de la tenue EVO dans les locaux techniques</u></strong></h4>
<p><strong>Description de la tenue EVO</strong> : Cette combinaison est conçue pour résister aux hautes températures, aux projections chimiques et aux risques électriques. Elle comprend :</p>
<ul class="lvl-0"><li>Une visière renforcée contre les éclats.</li></ul>
<ul class="lvl-0"><li>Un système de respiration autonome en cas d’émanations toxiques ou de fumées.</li></ul>
<ul class="lvl-0"><li>Des gants thermiques et ignifugés pour manipuler des équipements chauds ou potentiellement inflammables.</li></ul>
<p><strong>Obligation</strong> : L’accès aux locaux techniques est strictement interdit sans la tenue EVO. Une inspection avant et après utilisation est nécessaire pour garantir son intégrité.</p>
<p class="center"><strong><u>PERSONNES AUTORISÉES À INTERVENIR EN CAS D’INCENDIE</u></strong></p>
<p><strong><u>1. Armurerie :<br></u></strong>        - 104th + BOS si la 104th est indisponible</p>
<p><strong><u>2. Tarmac :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>3. Infirmerie :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>4. Hangar :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>5. Salle du Noyau :<br></u></strong>        - 104th + BOS si les précédents sont indisponibles</p>
<p><strong><u>6. Zone Carcérale :<br></u></strong>        - 104th + BOS si la 104th est indisponible</p>
<p><strong><u>7. Salle de détente :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>8. Citadelle :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>9. Mess :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>10. Ponts EM :<br></u></strong>        - 104th + BOS si la 104th est indisponible</p>
<p><strong><u>11. Salles du Bouclier :<br></u></strong>        - 104th + BOS si la 104th est indisponible</p>
<p><strong><u>12. Salle d’entraînement :<br></u></strong>        - Toute unité munie d’extincteur (Priorité 104th)</p>
<p><strong><u>13. Data Center :<br></u></strong>        - 104th + BOS si la 104th est indisponible</p>
<p><strong><u>14. Salle des machines :<br></u></strong>        - 104th + BOS si la 104th est indisponible</p>
<p class="center"><strong><u>LIEUX DE RALLIEMENTS</u></strong></p>
<p><strong>1. <u>Point A - Hanger Principal / Tarma</u></strong></p>
<p><strong>2. <u>Point B - Hangars Latéraux</u></strong></p>
<ul class="lvl-0"><li><strong><u>Les Protocoles </u></strong></li></ul>
<ul class="lvl-0"><li><strong>Protocoles 1 :</strong> Détection de fumée l’ensemble des régiment se dirige sur le tarmac que le unités apte fond des patrouilles</li></ul>
<ul class="lvl-0"><li><strong>Protocoles 2 :</strong> Incendie confirmé que les unité actes aillent au combat du feu préparation des Laat pour les unité éventuelle évacuation</li></ul>
<ul class="lvl-0"><li><strong>Protocoles 3 :</strong> Incendie incontrôlable évacuation imminente de la base au du venator</li></ul>
<p>Lieutenant Farside</p>
<p>Marine Républicaine<img src="assets/docs/securite-incendie-venator-02.webp" alt="" loading="lazy"></p>
</div>
</div>
`,

  "nos-executions": `
<div class="gs-section">
<h3 class="center"><strong>5 - EXÉCUTION DE :</strong> <strong>408th SDT Merumeru</strong></h3>
<ul><li>Date : 27/01/2026</li><li>Nom des individus : 408th SDT Merumeru</li><li>Coupables de : Comportement non militaire, perturbation du travail de la Shock Trooper, Infliction volontaire d’une blessure sur un frère d’arme, agression d’un autre clone</li><li>Décision de la Cour Martiale : P10</li><li>Feu dirigé par : Commandant Maréchal 1010 Fox <em>(Achref)</em></li><li>Shock Troopers présents :<br>- Commandant 4515 Thorn (Foster)<br>- Major 1301 Power<br>- Major 6521  Macovei<br>- Capitaine 1374 Trapper <br>- Adjudant Chef 2982 Slaan<br>- Sergent 3330 Nariel<br>- Clone Trooper 3141 Pi</li><li>Tirs mortels : Capitaine 1374 Trapper</li></ul>
<div class="embed video"><iframe src="https://www.youtube.com/embed/yDkm5H_J1v4" title="Exécution de Merumeru" loading="lazy" allowfullscreen></iframe></div>
</div>
<div class="gs-section">
<h3 class="center"><strong>4 - EXÉCUTION DE : 327th ADJ 3747 Dio</strong></h3>
<ul><li>Date : 21/01/2026</li><li>Nom des individus : 327th ADJ 3747 Dio</li><li>Coupables de : Porte des coups de BX Blade à l’encontre d’un CT ASP sans raison valable lors d’un recrutement 327th. Se permet de mentir en cour martiale.</li><li>Décision de la Cour Martiale : P10</li><li>Feu dirigé par : Commandant Maréchal 1010 Fox <em>(Achref)</em></li><li>Shock Troopers présents :<br>- Commandant 4515 Thorn (Foster)<br>- Major 1301 Power<br>- Capitaine 1374 Trapper <br>- Adjudant 4489 Rys <em>(Árēs)</em><br>- Adjudant 2982 Slaan<br>- Caporal 9885 Anos<br>- Caporal 1224 Pryck</li></ul>
<div class="embed video"><iframe src="https://www.youtube.com/embed/eYhk9tm3SN4" title="Exécution de 3747 Bloom" loading="lazy" allowfullscreen></iframe></div>
</div>
<div class="gs-section">
<h3 class="center"><strong>3 - EXÉCUTION DE : <br>408th CPL 1006 Wall-E &amp; 408th CPL 7885 Storm</strong></h3>
<ul><li>Date : 19/02/2025</li><li>Nom des individus : 408th CPL 1006 Wall-E &amp; 408th CPL 7885 Storm</li><li>Coupables de : 1006 Wall-E, coupable d'avoir pendu son frère d'arme par la gorge, au plafond, afin de faciliter son assassinat. 7885 Storm, coupable d'avoir participer à l'attaque contre son frère d'arme en le menaçant avec sa vibro sword pendant qu'il se faisait pendre et attaquer.</li><li>Décision de la Cour Martiale : P10</li><li>Feu dirigé par : Commandant Maréchal 1010 Fox <em>(Achref)</em></li><li>Shock Troopers présents :<br>- Commandant 4515 Thorn <em>(Vib)</em> <br>- Lieutenant 2215 Hot<br>- Lieutenant 4489 Rys <em>(Madra)</em><br>- 2nd Lieutenant 4093 Pulsar<br>- 2nd Lieutenant 1911 Scorp <em><br></em>- Sergent-Chef 1222 Kyber <br>- CT 0204 Prior</li><li>Tirs mortels : Sur 7885 Storm, Commandant 4515 Thorn <em>(Vib)</em>. Sur 1006 Wall-E,</li></ul>
<div class="embed video"><iframe src="https://www.youtube.com/embed/r4tHDcDDDr8" title="YouTube Video" loading="lazy" allowfullscreen></iframe></div>
</div>
<div class="gs-section">
<h3 class="center"><strong>2 - EXÉCUTION DE : SHOCK</strong> <strong>SGT</strong> <strong>2512 Shortshot</strong></h3>
<ul><li>Date : 26/12/2024</li><li>Nom de l'individu : SHOCK SGT 2512 Shortshot</li><li>Coupable de : Crime de guerre (exécution d'un mandalorien menotté et désarmé dans les douches)</li><li>Décision de la Cour Martiale : P10</li><li>Feu dirigé par : Commandant 4515 Thorn <em>(Vib)</em></li><li>Shock Troopers présents :<br>- Commandant 1245 Marco<br>- Vice-Commandant 1301 Power<br>- Vice-Commandant 5869 Stone <em>(Fluuxy)<br></em>- Major 1090 Kyle<em><br>- </em>Adjudant-Chef 4093 Pulsar<br>- Adjudant-Chef 9524 Prime <br> - Sergent-Chef 2215 Hot<br>- Caporal-Chef 2222 Alpha<br>- Caporal 1291 Cara</li><li>Tir mortel : Vice-Commandant 5869 Stone <em>(Fluuxy)<br><br></em></li></ul>
<div class="embed video"><iframe src="https://www.youtube.com/embed/dofdEIUmCyk" title="YouTube Video" loading="lazy" allowfullscreen></iframe></div>
</div>
<div class="gs-section">
<h3 class="center"><strong>1 - EXÉCUTION DE : 408th ADJ-C 8988 Shoto</strong></h3>
<ul><li>Date : 22/12/2024</li><li>Nom de l'individu : 408th ADJ-C 8988 Shoto</li><li>Coupable de : Meurtre de 2 clones + Agression envers un clone</li><li>Décision de la Cour Martiale : P10</li><li>Feu dirigé par : Commandant 4515 Thorn <em>(Vib)</em></li><li>Shock Troopers présents :<br>- Commandant 1245 Marco<br>- Adjudant-Chef 4093 Pulsar<br>- Sergent-Chef 2215 Hot<br>- Caporal-Chef 2222 Alpha<br>- Caporal 1291 Cara</li><li>Tir mortel : Caporal 1291 Cara</li></ul>
<div class="embed video"><iframe src="https://www.youtube.com/embed/2pZLiceIlUk" title="YouTube Video" loading="lazy" allowfullscreen></iframe></div>
</div>
`,

};
