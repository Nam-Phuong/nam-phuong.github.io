# 🖌️ Site Web de NAM★ — https://nam-phuong.fr

Ce dépôt contient les fichiers sources du site web, publié automatiquement via **GitHub Pages**.

Tu peux modifier le contenu du site **directement depuis l’interface web de GitHub**, sans avoir besoin d’outils techniques.

---

## 📝 Modifier le texte du site (par exemple la page d’accueil)

1. Va dans l’onglet **“Code”** de ce dépôt.
2. Clique sur le fichier `index.html`.
3. Clique sur l’icône ✏️ (**Edit this file**) en haut à droite.
4. Modifie le texte directement dans l’éditeur (le HTML est simple, le contenu est en clair entre les balises).
5. En bas de page :
   - Ajoute un message de commit (ex: “Mise à jour de la description des séances”).
   - Clique sur **“Commit changes”**.
6. ✅ Le site se met à jour automatiquement en quelques secondes.

> 💡 Tu peux aussi demander à l'IA [Qwen](https://chat.qwen.ai/) de charger la page https://nam-phuong.fr/ et d'en modifier le contenu comme tu le souhaite puis de recopier le résultat dans `index.html`.

---

## 🖼️ Ajouter ou changer une image

Les images sont stockées dans le dossier `img/`.

### Pour ajouter une nouvelle image :
1. Va dans le dossier `img/`.
2. Clique sur **“Add file” → “Upload files”**.
3. Glisse-dépose ton image (format `.jpg`, `.png` ou `.webp` recommandé).
4. Clique sur **“Commit changes”**.

### Pour utiliser cette image sur le site :
1. Édite le fichier `index.html` comme expliqué plus haut.
2. Insère ou modifie une balise image avec le bon chemin, par exemple :
   ```html
   <img src="img/ton-image.jpg" alt="Description de l'image">
   ```
3. Sauvegarde avec un commit.

### Pour remplacer une image existante :
1. Téléverse le nouveau fichier **avec le même nom** que l’ancien dans `img/`.
2. GitHub te demandera de confirmer l’écrasement → Accepte.
3. ✅ L’image est mise à jour partout où elle est utilisée.

---

## 🚀 Aperçu et publication
Tu peux télécharger inde.html puis l'ouvrir pour avoir un aperçu non publié.
Dès que tu le sauvegarde sur Github (commit et/ou push dans le jargon) il est presque immédiatement mis à jour sur https://nam-phuong.fr.

---

## 💡 Astuce

Pour ne pas casser la mise en page :
- Ne supprime pas les balises HTML (`<h1>`, `<p>`, `<div>`, etc.) si tu n’es pas sûr.
- Modifie uniquement le texte à l’intérieur.
- Garde les noms de fichiers/images cohérents.

---

Pour toute question, tu peux demander à l'IA [Qwen](https://chat.qwen.ai/)
