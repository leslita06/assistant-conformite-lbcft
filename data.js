// Réponses rédigées à partir des textes officiels relus le 23/11/2026.
const SRC = {
  ord: {
    nom: "Ordonnance n° 2023-875 du 23 novembre 2023 relative à la lutte contre le blanchiment de capitaux, le financement du terrorisme et de la prolifération (loi uniforme LBC/FT/FP en Côte d'Ivoire), JO du 1er décembre 2023",
    court: "Ordonnance n° 2023-875",
    url: "https://www.centif.ci/wp-content/uploads/2025/03/ORDONNANCE-N2023-875-DU-23-NOVEMBRE-2023-RELATIVE-A-LA-LUTTE-CONTRE-LES-BLANCHIMENTS-DE-CAPIT.pdf",
    hote: "centif.ci"
  },
  i003: {
    nom: "Instruction BCEAO n° 003-03-2025 du 18 mars 2025 relative à l'identification, la vérification de l'identité et la connaissance de la clientèle par les institutions financières",
    court: "Instruction BCEAO n° 003-03-2025",
    url: "https://www.bceao.int/fr/reglementations/instruction-ndeg003-03-2025-du-18-mars-2025-relative-lidentification-la",
    hote: "bceao.int"
  },
  i001: {
    nom: "Instruction BCEAO n° 001-03-2025 du 18 mars 2025 portant modalités de mise en œuvre par les institutions financières de leurs obligations d'organisation, de contrôle interne et de conformité LBC/FT/FP",
    court: "Instruction BCEAO n° 001-03-2025",
    url: "https://www.bceao.int/sites/default/files/2025-04/Instruction%20n%C2%B0001-03-2025%20du%2018%20mars%2025%20portant%20modalit%C3%A9s%20de%20mise%20en%20oeuvre%20par%20les%20IF%20de%20leurs%20obligations%20en%20mati%C3%A8re%20de%20lutte%20contre%20le%20blanchiment%20de%20capitaux.pdf",
    hote: "bceao.int"
  },
  i020: {
    nom: "Instruction BCEAO n° 020 du 8 octobre 2026 modifiant l'Instruction n° 008-05-2015 sur les émetteurs de monnaie électronique (en vigueur le 2 novembre 2026)",
    court: "Instruction BCEAO n° 020 (8 octobre 2026)",
    url: "https://www.bceao.int/fr/reglementations/instruction-ndeg-020-portant-modification-de-linstruction-ndeg-008-05-2015-du-21",
    hote: "bceao.int"
  }
};

const QA = [
  {
    id: "soupcon",
    q: "À partir de quel montant dois-je faire une déclaration de soupçon ?",
    mots: ["soupcon", "soupçon", "declaration", "déclaration", "suspect", "centif", "seuil", "dos"],
    r: [
      "<b>Il n'y a pas de montant minimum.</b> Toute somme ou opération, même tentée, dont vous soupçonnez ou avez de bonnes raisons de soupçonner qu'elle provient d'une infraction se déclare <b>immédiatement</b> à la CENTIF.",
      "Vous vous abstenez d'exécuter l'opération tant que la déclaration n'est pas faite.",
      "La déclaration est confidentielle : il est interdit d'en informer le client ou un tiers."
    ],
    refs: [
      ["ord", "art. 60 : obligation de déclaration, sans seuil"],
      ["ord", "art. 61 : abstention avant déclaration"],
      ["ord", "art. 63 : confidentialité de la déclaration"]
    ]
  },
  {
    id: "informel",
    q: "Un commerçant du marché sans registre de commerce veut ouvrir un compte : quelles pièces demander ?",
    mots: ["informel", "commercant", "commerçant", "marche", "marché", "piece", "pièce", "pieces", "pièces", "ouverture", "ouvrir", "compte", "rccm", "registre", "identite", "identité"],
    r: [
      "On l'identifie comme une <b>personne physique</b> : nom et prénoms, date et lieu de naissance, nationalité, adresse du domicile, numéro de la pièce d'identité.",
      "Vérification sur <b>l'original d'un document officiel avec photo</b>, en cours de validité (carte d'identité, passeport, carte consulaire, carte de séjour, permis de conduire…).",
      "Adresse : facture d'un service public, document d'un représentant officiel du lieu de résidence, ou bail accompagné d'une attestation du bailleur ; ces pièces datent de moins de trois mois, sauf le bail.",
      "Avant l'ouverture, vous recueillez aussi <b>son activité commerciale et sa situation financière</b> (revenus, autres ressources).",
      "Le numéro de registre du commerce n'est prévu, « le cas échéant », que pour les personnes morales."
    ],
    refs: [
      ["i003", "art. 5 : éléments d'identification"],
      ["i003", "art. 6 : vérification, pièces et justificatif d'adresse"],
      ["i003", "art. 20 : connaissance du client personne physique"],
      ["i003", "art. 7 : personnes morales"]
    ]
  },
  {
    id: "ppe",
    q: "Le client est un député : quelles diligences avant d'ouvrir le compte ?",
    mots: ["ppe", "politiquement", "depute", "député", "ministre", "parlementaire", "maire", "elu", "élu", "expose", "exposée", "exposé"],
    r: [
      "Un parlementaire est une <b>personne politiquement exposée</b> (PPE), comme sa famille proche et les personnes qui lui sont étroitement associées.",
      "Il faut <b>l'autorisation de la haute direction</b> avant d'entrer en relation ou de réaliser une opération ; à la BCEAO, c'est l'organe exécutif qui l'accorde et qui valide la liste des clients PPE.",
      "Vous établissez <b>l'origine du patrimoine et l'origine des fonds</b>, puis vous assurez une surveillance continue et renforcée.",
      "Le profil des clients PPE est réévalué <b>tous les trois ans</b>."
    ],
    refs: [
      ["ord", "art. 2, point 50 : définition des PPE"],
      ["ord", "art. 29 : obligations envers les PPE"],
      ["i001", "art. 5 : rôle de l'organe exécutif"]
    ]
  },
  {
    id: "monnaie",
    q: "Quels sont les plafonds d'un portefeuille de monnaie électronique ?",
    mots: ["monnaie", "electronique", "électronique", "plafond", "portefeuille", "wallet", "mobile", "money", "rechargement", "solde", "avoirs"],
    r: [
      "Depuis le <b>2 novembre 2026</b>, un client identifié ne peut détenir plus de <b>4 millions de francs CFA</b> auprès d'un même émetteur, tous ses instruments cumulés.",
      "Le cumul des rechargements d'un même client, sur un même mois et chez un même émetteur, ne peut dépasser <b>15 millions de francs CFA</b>.",
      "Un dépassement exige l'autorisation préalable de la BCEAO, demandée par l'émetteur. Ces plafonds ne visent ni les distributeurs ni les accepteurs dans leur activité professionnelle.",
      "Le nouvel article ne fixe pas de plafond pour un porteur non identifié : votre responsable conformité vous indiquera la règle interne."
    ],
    refs: [
      ["i020", "article 31 nouveau : plafonds des avoirs et des rechargements"]
    ]
  },
  {
    id: "conservation",
    q: "Combien de temps conserver les pièces d'un client qui a clôturé son compte ?",
    mots: ["conserver", "conservation", "archive", "archiver", "duree", "durée", "ans", "garder", "cloture", "clôture", "documents"],
    r: [
      "<b>Dix ans à compter de la clôture du compte</b> ou de la fin de la relation : pièces d'identité, connaissance du client, analyses de vigilance.",
      "<b>Dix ans après l'exécution</b> pour les pièces des opérations, livres de comptes et correspondances commerciales compris.",
      "Ces pièces doivent permettre de reconstituer chaque opération et se communiquent, sur demande, à la CENTIF, aux autorités de contrôle et aux autorités judiciaires."
    ],
    refs: [
      ["ord", "art. 23 : conservation des pièces et documents"],
      ["ord", "art. 24 : communication des pièces"],
      ["i003", "art. 29 : renvoi à l'article 23"]
    ]
  },
  {
    id: "refus",
    q: "Le client refuse de donner ses pièces : que faire ?",
    mots: ["refuse", "refus", "refuser", "pas de piece", "ne veut pas", "incapacite", "incapacité", "impossible"],
    r: [
      "Si vous ne pouvez pas remplir les obligations de vigilance : <b>ne pas ouvrir le compte</b> s'il s'agit d'une entrée en relation, <b>refuser l'opération</b> s'il s'agit d'une opération ponctuelle, <b>mettre fin à la relation</b> s'il a déjà un compte.",
      "Dans tous les cas, vous faites une <b>déclaration d'opération suspecte</b> à la CENTIF, sans en informer le client."
    ],
    refs: [
      ["ord", "art. 25 : incapacité à satisfaire la vigilance"],
      ["ord", "art. 63 : confidentialité"]
    ]
  }
];
