/* ─────────────────── TEMPLATES ─────────────────── */
window.TEMPLATES = {
blank: `<div class="min-h-screen bg-white p-8">
  <!-- Votre code Tailwind ici -->
  <h1 class="text-2xl font-bold">Mon wireframe</h1>
  <p class="text-gray-500 mt-2">Commencez à écrire votre HTML avec Tailwind CSS.</p>
</div>`,

landing: `<div class="min-h-screen bg-white">
  <!-- Nav -->
  <nav class="flex items-center justify-between px-8 py-4 border-b border-gray-100">
    <div class="font-bold text-xl tracking-tight">Marque</div>
    <div class="hidden md:flex items-center gap-8 text-sm text-gray-600">
      <a href="#" class="hover:text-black transition-colors">Produit</a>
      <a href="#" class="hover:text-black transition-colors">Tarifs</a>
      <a href="#" class="hover:text-black transition-colors">Blog</a>
      <a href="#" class="hover:text-black transition-colors">À propos</a>
    </div>
    <div class="flex items-center gap-3">
      <button class="text-sm text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg">Connexion</button>
      <button class="text-sm bg-black text-white px-4 py-2 rounded-lg">Essayer gratuitement</button>
    </div>
  </nav>

  <!-- Hero -->
  <section class="flex flex-col items-center text-center px-4 pt-20 pb-16">
    <div class="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full mb-6">
      <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
      v2.1 vient de sortir · Voir les nouveautés →
    </div>
    <h1 class="text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl mb-6 leading-tight">
      Construisez plus vite,<br>livrez mieux.
    </h1>
    <p class="text-gray-500 text-xl max-w-xl mb-10 leading-relaxed">
      La plateforme qui donne à votre équipe les outils pour aller de l'idée au produit en un temps record.
    </p>
    <div class="flex flex-col sm:flex-row items-center gap-3 mb-16">
      <button class="bg-black text-white px-7 py-3.5 rounded-xl font-semibold text-sm">
        Démarrer gratuitement →
      </button>
      <button class="border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50">
        Voir la démo
      </button>
    </div>
    <div class="w-full max-w-4xl h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
      Aperçu du produit
    </div>
  </section>

  <!-- Features -->
  <section class="px-8 py-16 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <p class="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center mb-4">Fonctionnalités</p>
      <h2 class="text-3xl font-bold text-center mb-12 tracking-tight">Tout ce dont vous avez besoin</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl p-6 border border-gray-100">
          <div class="w-10 h-10 bg-black rounded-xl mb-4 flex items-center justify-center text-white text-xl">⚡</div>
          <h3 class="font-semibold mb-2">Ultra rapide</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Optimisé de bout en bout pour des performances maximales sur tous les appareils.</p>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-gray-100">
          <div class="w-10 h-10 bg-black rounded-xl mb-4 flex items-center justify-center text-white text-xl">🔒</div>
          <h3 class="font-semibold mb-2">Sécurisé par défaut</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Chiffrement de bout en bout, SSO et conformité RGPD inclus sans configuration.</p>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-gray-100">
          <div class="w-10 h-10 bg-black rounded-xl mb-4 flex items-center justify-center text-white text-xl">📈</div>
          <h3 class="font-semibold mb-2">Évolutif</h3>
          <p class="text-sm text-gray-500 leading-relaxed">De 1 à 100 000 utilisateurs sans changer une ligne d'infrastructure.</p>
        </div>
      </div>
    </div>
  </section>
</div>`,

dashboard: `<div class="h-screen bg-gray-50 flex overflow-hidden">
  <!-- Sidebar -->
  <aside class="w-56 bg-white border-r border-gray-100 flex flex-col py-5 px-3 flex-shrink-0">
    <div class="px-3 font-bold text-base mb-6 flex items-center gap-2">
      <div class="w-6 h-6 bg-black rounded-md"></div>
      Dashboard
    </div>
    <nav class="flex-1 space-y-0.5">
      <a href="#" class="flex items-center gap-3 px-3 py-2 bg-black text-white rounded-lg text-sm font-medium">
        <div class="w-4 h-4 bg-white/30 rounded-sm"></div> Vue d'ensemble
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
        <div class="w-4 h-4 bg-gray-200 rounded-sm"></div> Analytiques
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
        <div class="w-4 h-4 bg-gray-200 rounded-sm"></div> Projets
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
        <div class="w-4 h-4 bg-gray-200 rounded-sm"></div> Équipe
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
        <div class="w-4 h-4 bg-gray-200 rounded-sm"></div> Paramètres
      </a>
    </nav>
    <div class="border-t border-gray-100 pt-3 mt-2">
      <div class="flex items-center gap-2.5 px-2">
        <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-medium">MD</div>
        <div>
          <p class="text-sm font-medium leading-none">Marie Dupont</p>
          <p class="text-xs text-gray-400 mt-0.5">Administratrice</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main -->
  <main class="flex-1 overflow-auto p-8">
    <div class="flex items-center justify-between mb-7">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">Vue d'ensemble</h1>
        <p class="text-sm text-gray-400 mt-0.5">Jeudi 29 mai 2025</p>
      </div>
      <button class="bg-black text-white text-sm px-4 py-2 rounded-lg">+ Nouveau projet</button>
    </div>

    <!-- KPIs -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl border border-gray-100 p-4">
        <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Revenus</p>
        <p class="text-2xl font-bold tracking-tight">48 230 €</p>
        <p class="text-xs text-emerald-600 mt-1">▲ 12% ce mois</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-100 p-4">
        <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Utilisateurs</p>
        <p class="text-2xl font-bold tracking-tight">1 847</p>
        <p class="text-xs text-emerald-600 mt-1">▲ 5% ce mois</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-100 p-4">
        <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Commandes</p>
        <p class="text-2xl font-bold tracking-tight">384</p>
        <p class="text-xs text-red-500 mt-1">▼ 3% ce mois</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-100 p-4">
        <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Satisfaction</p>
        <p class="text-2xl font-bold tracking-tight">94.2%</p>
        <p class="text-xs text-emerald-600 mt-1">▲ 1.4pt</p>
      </div>
    </div>

    <!-- Chart + Table -->
    <div class="grid lg:grid-cols-3 gap-5">
      <div class="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-semibold text-sm">Revenus mensuels</h2>
          <select class="text-xs border border-gray-100 rounded-md px-2 py-1 text-gray-500">
            <option>12 derniers mois</option>
          </select>
        </div>
        <div class="h-44 bg-gray-50 rounded-lg flex items-end gap-1.5 p-3">
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:40%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:55%"></div>
          <div class="flex-1 bg-gray-300 rounded-sm" style="height:45%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:60%"></div>
          <div class="flex-1 bg-gray-300 rounded-sm" style="height:70%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:65%"></div>
          <div class="flex-1 bg-gray-300 rounded-sm" style="height:80%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:75%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:85%"></div>
          <div class="flex-1 bg-black rounded-sm" style="height:100%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:90%"></div>
          <div class="flex-1 bg-gray-200 rounded-sm" style="height:95%"></div>
        </div>
      </div>
      <div class="bg-white rounded-xl border border-gray-100 p-5">
        <h2 class="font-semibold text-sm mb-4">Top utilisateurs</h2>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">AL</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">Alice Martin</p>
              <div class="flex items-center gap-2 mt-0.5">
                <div class="flex-1 h-1 bg-gray-100 rounded-full"><div class="h-full bg-black rounded-full" style="width:84%"></div></div>
                <span class="text-xs text-gray-400">84</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">PL</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">Pierre Leroy</p>
              <div class="flex items-center gap-2 mt-0.5">
                <div class="flex-1 h-1 bg-gray-100 rounded-full"><div class="h-full bg-gray-400 rounded-full" style="width:67%"></div></div>
                <span class="text-xs text-gray-400">67</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">SB</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">Sophie Bernard</p>
              <div class="flex items-center gap-2 mt-0.5">
                <div class="flex-1 h-1 bg-gray-100 rounded-full"><div class="h-full bg-gray-300 rounded-full" style="width:52%"></div></div>
                <span class="text-xs text-gray-400">52</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>`,

cards: `<div class="min-h-screen bg-gray-50 p-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <h1 class="text-2xl font-bold tracking-tight">Catalogue produits</h1>
      <div class="flex items-center gap-3">
        <input type="text" placeholder="Rechercher..." class="border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 w-48">
        <button class="border border-gray-200 bg-white px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Filtrer</button>
        <button class="border border-gray-200 bg-white px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Trier</button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
        <div class="h-44 bg-gradient-to-br from-gray-100 to-gray-200 relative">
          <span class="absolute top-3 left-3 bg-white text-gray-600 text-xs px-2 py-0.5 rounded-full">Nouveau</span>
        </div>
        <div class="p-4">
          <p class="text-xs text-gray-400 mb-1">Catégorie A</p>
          <h3 class="font-semibold mb-1">Produit essentiel</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">Description courte du produit ou service proposé.</p>
          <div class="flex items-center justify-between">
            <span class="font-bold text-lg">29 €</span>
            <button class="bg-black text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800">Ajouter</button>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-44 bg-gradient-to-br from-blue-50 to-blue-100 relative">
          <span class="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Promo</span>
        </div>
        <div class="p-4">
          <p class="text-xs text-gray-400 mb-1">Premium</p>
          <h3 class="font-semibold mb-1">Offre spéciale</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">Accès illimité à toutes les fonctionnalités incluses.</p>
          <div class="flex items-center justify-between">
            <div>
              <span class="font-bold text-lg">39 €</span>
              <span class="text-xs text-gray-400 line-through ml-1">59 €</span>
            </div>
            <button class="bg-black text-white text-xs px-4 py-2 rounded-lg">Ajouter</button>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-44 bg-gradient-to-br from-emerald-50 to-emerald-100"></div>
        <div class="p-4">
          <p class="text-xs text-gray-400 mb-1">Écologique</p>
          <h3 class="font-semibold mb-1">Gamme verte</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">Fabriqué de façon responsable et durable.</p>
          <div class="flex items-center justify-between">
            <span class="font-bold text-lg">19 €</span>
            <button class="bg-black text-white text-xs px-4 py-2 rounded-lg">Ajouter</button>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-44 bg-gradient-to-br from-purple-50 to-purple-100"></div>
        <div class="p-4">
          <p class="text-xs text-gray-400 mb-1">Top vente</p>
          <h3 class="font-semibold mb-1">Best-seller</h3>
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">Le préféré de nos 8 000+ clients ce trimestre.</p>
          <div class="flex items-center justify-between">
            <span class="font-bold text-lg">49 €</span>
            <button class="bg-black text-white text-xs px-4 py-2 rounded-lg">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,

hero: `<div class="min-h-screen bg-black text-white overflow-hidden">
  <nav class="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-sm border-b border-white/10">
    <div class="font-bold text-lg tracking-tight">Studio</div>
    <div class="hidden md:flex items-center gap-8 text-sm text-white/60">
      <a href="#" class="hover:text-white transition-colors">Travaux</a>
      <a href="#" class="hover:text-white transition-colors">Services</a>
      <a href="#" class="hover:text-white transition-colors">À propos</a>
      <a href="#" class="hover:text-white transition-colors">Journal</a>
    </div>
    <div class="flex items-center gap-3">
      <button class="text-sm text-white/60 hover:text-white px-4 py-2">Connexion</button>
      <button class="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-white/90">Contact</button>
    </div>
  </nav>

  <section class="pt-32 pb-24 px-8">
    <div class="max-w-5xl mx-auto">
      <div class="inline-flex items-center gap-2 border border-white/20 text-white/60 text-xs px-3 py-1.5 rounded-full mb-8">
        <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
        Disponible pour de nouveaux projets · 2025
      </div>
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
        Design &<br>
        <span class="text-white/30">Développement</span>
      </h1>
      <div class="flex flex-col md:flex-row items-start gap-8 md:gap-20">
        <p class="text-white/50 text-xl max-w-sm leading-relaxed">
          Nous créons des expériences numériques mémorables pour les marques qui veulent se distinguer.
        </p>
        <div class="flex gap-4">
          <button class="bg-white text-black px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors">
            Voir les projets
          </button>
          <button class="border border-white/20 text-white/70 px-7 py-3.5 rounded-full text-sm hover:border-white/40 transition-colors">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="px-8 py-16 border-t border-white/10">
    <div class="max-w-5xl mx-auto grid grid-cols-3 gap-8">
      <div>
        <p class="text-3xl font-bold mb-1">120+</p>
        <p class="text-sm text-white/40">Projets livrés</p>
      </div>
      <div>
        <p class="text-3xl font-bold mb-1">8 ans</p>
        <p class="text-sm text-white/40">D'expérience</p>
      </div>
      <div>
        <p class="text-3xl font-bold mb-1">98%</p>
        <p class="text-sm text-white/40">Clients satisfaits</p>
      </div>
    </div>
  </section>
</div>`,

blog: `<div class="min-h-screen bg-white">
  <header class="border-b border-gray-100 px-6 py-4 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
    <div class="max-w-4xl mx-auto flex items-center justify-between">
      <span class="font-bold text-lg tracking-tight">Le Journal</span>
      <nav class="hidden md:flex items-center gap-6 text-sm text-gray-500">
        <a href="#" class="hover:text-black">Tech</a>
        <a href="#" class="hover:text-black">Design</a>
        <a href="#" class="hover:text-black">Business</a>
        <a href="#" class="hover:text-black">Culture</a>
      </nav>
      <button class="text-sm border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600">S'abonner</button>
    </div>
  </header>

  <main class="max-w-3xl mx-auto px-6 py-14">
    <div class="mb-5">
      <span class="bg-black text-white text-xs px-2.5 py-1 rounded-full">Design</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
      Comment concevoir pour la clarté plutôt que la complexité
    </h1>
    <div class="flex items-center gap-4 pb-8 border-b border-gray-100 mb-8">
      <div class="w-10 h-10 rounded-full bg-gray-200"></div>
      <div>
        <p class="font-medium text-sm">Sophie Bernard</p>
        <p class="text-xs text-gray-400">28 mai 2025 · 6 min de lecture</p>
      </div>
      <div class="ml-auto flex gap-2">
        <button class="text-xs border border-gray-200 px-3 py-1.5 rounded-full text-gray-500 hover:bg-gray-50">Partager</button>
        <button class="text-xs border border-gray-200 px-3 py-1.5 rounded-full text-gray-500 hover:bg-gray-50">Sauvegarder</button>
      </div>
    </div>
    <div class="space-y-5 text-gray-700 leading-relaxed">
      <p class="text-xl text-gray-500 font-light">Dans un monde saturé d'interfaces complexes, la simplicité est devenue le luxe ultime du design.</p>
      <p>Le design clair ne signifie pas simple ou basique. Il signifie que chaque élément a une raison d'être, chaque interaction est intuitive, et l'utilisateur ne se demande jamais où aller ensuite.</p>
      <div class="bg-gray-50 rounded-2xl p-6 my-8 border-l-4 border-black">
        <p class="text-lg italic text-gray-600">"La complexité est facile. La simplicité est difficile."</p>
        <p class="text-sm text-gray-400 mt-2">— Paul Rand</p>
      </div>
      <h2 class="text-2xl font-bold text-black mt-10 tracking-tight">Les principes fondamentaux</h2>
      <p>Commencer par supprimer. Avant d'ajouter quoi que ce soit, demandez-vous ce qui peut être retiré sans que l'utilisateur le remarque. Chaque élément supprimé est une décision en moins.</p>
      <div class="h-52 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm my-8">Illustration</div>
      <p>La hiérarchie visuelle guide naturellement l'œil. Un bon design crée un chemin évident, sans que l'utilisateur ait à réfléchir consciemment à ce qu'il doit regarder en premier.</p>
    </div>
  </main>
</div>`,

pricing: `<div class="min-h-screen bg-white py-20 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-16">
      <p class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Tarification</p>
      <h1 class="text-4xl font-bold tracking-tight mb-4">Simple, transparent, honnête.</h1>
      <p class="text-gray-500 text-lg">Commencez gratuitement. Évoluez sans surprise.</p>
      <div class="inline-flex items-center gap-2 border border-gray-200 rounded-full p-1 mt-6 text-sm">
        <button class="bg-black text-white px-4 py-1.5 rounded-full">Mensuel</button>
        <button class="text-gray-500 px-4 py-1.5">Annuel <span class="text-green-600 font-medium">−20%</span></button>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-6 items-stretch">
      <div class="border border-gray-100 rounded-2xl p-7 flex flex-col">
        <h2 class="font-bold text-lg mb-1">Gratuit</h2>
        <p class="text-gray-400 text-sm mb-6">Pour explorer et prototyper</p>
        <div class="mb-8"><span class="text-5xl font-bold">0 €</span><span class="text-gray-400 text-sm"> /mois</span></div>
        <ul class="space-y-3 flex-1 text-sm mb-8">
          <li class="flex items-center gap-2"><span class="text-black">✓</span> 3 projets</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> 1 Go de stockage</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> Support communauté</li>
          <li class="flex items-center gap-2 text-gray-300"><span>✗</span> API access</li>
          <li class="flex items-center gap-2 text-gray-300"><span>✗</span> Analytiques avancées</li>
        </ul>
        <button class="w-full border border-gray-200 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition-colors">Commencer</button>
      </div>
      <div class="border-2 border-black rounded-2xl p-7 flex flex-col relative shadow-lg shadow-black/5">
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold px-4 py-1 rounded-full">Recommandé</div>
        <h2 class="font-bold text-lg mb-1">Pro</h2>
        <p class="text-gray-400 text-sm mb-6">Pour indépendants et petites équipes</p>
        <div class="mb-8"><span class="text-5xl font-bold">29 €</span><span class="text-gray-400 text-sm"> /mois</span></div>
        <ul class="space-y-3 flex-1 text-sm mb-8">
          <li class="flex items-center gap-2"><span class="text-black">✓</span> Projets illimités</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> 50 Go de stockage</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> Support prioritaire</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> API access</li>
          <li class="flex items-center gap-2 text-gray-300"><span>✗</span> Analytiques avancées</li>
        </ul>
        <button class="w-full bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Essayer 14 jours</button>
      </div>
      <div class="border border-gray-100 rounded-2xl p-7 flex flex-col bg-gray-50">
        <h2 class="font-bold text-lg mb-1">Entreprise</h2>
        <p class="text-gray-400 text-sm mb-6">Pour les grandes organisations</p>
        <div class="mb-8"><span class="text-3xl font-bold">Sur devis</span></div>
        <ul class="space-y-3 flex-1 text-sm mb-8">
          <li class="flex items-center gap-2"><span class="text-black">✓</span> Tout du plan Pro</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> Stockage illimité</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> SLA 99.9%</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> API access</li>
          <li class="flex items-center gap-2"><span class="text-black">✓</span> Analytiques avancées</li>
        </ul>
        <button class="w-full border border-gray-200 bg-white rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition-colors">Nous contacter</button>
      </div>
    </div>
  </div>
</div>`,

form: `<div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <div class="w-12 h-12 bg-black rounded-2xl mx-auto mb-4"></div>
      <h1 class="text-2xl font-bold tracking-tight">Créer un compte</h1>
      <p class="text-gray-500 text-sm mt-1.5">Déjà inscrit ? <a href="#" class="text-black underline underline-offset-2">Se connecter</a></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium mb-1.5">Prénom</label>
            <input type="text" placeholder="Marie" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1.5">Nom</label>
            <input type="text" placeholder="Dupont" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5">Adresse email</label>
          <input type="email" placeholder="marie@exemple.fr" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5">Mot de passe</label>
          <input type="password" placeholder="8+ caractères" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400">
          <p class="text-xs text-gray-400 mt-1.5">Utilisez lettres, chiffres et symboles</p>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5">Rôle</label>
          <select class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-black/10">
            <option value="">Choisir un rôle</option>
            <option>Designer</option>
            <option>Développeur</option>
            <option>Product Manager</option>
            <option>Directeur</option>
            <option>Autre</option>
          </select>
        </div>
        <div class="flex items-start gap-2.5 pt-1">
          <input type="checkbox" id="tos" class="mt-0.5 rounded">
          <label for="tos" class="text-xs text-gray-500 leading-relaxed">
            J'accepte les <a href="#" class="text-black underline underline-offset-1">conditions d'utilisation</a> et la <a href="#" class="text-black underline underline-offset-1">politique de confidentialité</a> de Marque.
          </label>
        </div>
        <button class="w-full bg-black text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors mt-2">
          Créer mon compte
        </button>
      </div>
    </div>
  </div>
</div>`,

table: `<div class="min-h-screen bg-gray-50 p-8">
  <div class="max-w-6xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold tracking-tight">Commandes récentes</h1>
      <div class="flex items-center gap-3">
        <input type="text" placeholder="Rechercher..." class="border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm outline-none w-48">
        <button class="bg-black text-white text-sm px-4 py-2 rounded-lg">Exporter</button>
      </div>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-100 bg-gray-50">
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Commande</th>
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Client</th>
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Montant</th>
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Statut</th>
            <th class="px-5 py-3.5"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-5 py-4 font-mono text-gray-500">#ORD-4821</td>
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">AM</div>
                Alice Martin
              </div>
            </td>
            <td class="px-5 py-4 text-gray-500">28 mai 2025</td>
            <td class="px-5 py-4 font-semibold">248,00 €</td>
            <td class="px-5 py-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium">Livré</span></td>
            <td class="px-5 py-4 text-right"><button class="text-xs text-gray-400 hover:text-black">···</button></td>
          </tr>
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-5 py-4 font-mono text-gray-500">#ORD-4820</td>
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">PL</div>
                Pierre Leroy
              </div>
            </td>
            <td class="px-5 py-4 text-gray-500">27 mai 2025</td>
            <td class="px-5 py-4 font-semibold">89,00 €</td>
            <td class="px-5 py-4"><span class="bg-yellow-50 text-yellow-700 text-xs px-2.5 py-1 rounded-full font-medium">En transit</span></td>
            <td class="px-5 py-4 text-right"><button class="text-xs text-gray-400 hover:text-black">···</button></td>
          </tr>
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-5 py-4 font-mono text-gray-500">#ORD-4819</td>
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">SB</div>
                Sophie Bernard
              </div>
            </td>
            <td class="px-5 py-4 text-gray-500">26 mai 2025</td>
            <td class="px-5 py-4 font-semibold">512,50 €</td>
            <td class="px-5 py-4"><span class="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">Confirmé</span></td>
            <td class="px-5 py-4 text-right"><button class="text-xs text-gray-400 hover:text-black">···</button></td>
          </tr>
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-5 py-4 font-mono text-gray-500">#ORD-4818</td>
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
                Jean Dubois
              </div>
            </td>
            <td class="px-5 py-4 text-gray-500">25 mai 2025</td>
            <td class="px-5 py-4 font-semibold">156,00 €</td>
            <td class="px-5 py-4"><span class="bg-red-50 text-red-600 text-xs px-2.5 py-1 rounded-full font-medium">Annulé</span></td>
            <td class="px-5 py-4 text-right"><button class="text-xs text-gray-400 hover:text-black">···</button></td>
          </tr>
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-5 py-4 font-mono text-gray-500">#ORD-4817</td>
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-xs font-medium text-orange-600">CL</div>
                Claire Lambert
              </div>
            </td>
            <td class="px-5 py-4 text-gray-500">24 mai 2025</td>
            <td class="px-5 py-4 font-semibold">340,00 €</td>
            <td class="px-5 py-4"><span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium">Livré</span></td>
            <td class="px-5 py-4 text-right"><button class="text-xs text-gray-400 hover:text-black">···</button></td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
        <p class="text-xs text-gray-400">Affichage 1–5 sur 248 résultats</p>
        <div class="flex items-center gap-1">
          <button class="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">Précédent</button>
          <button class="px-3 py-1.5 text-xs bg-black text-white rounded-lg">1</button>
          <button class="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">2</button>
          <button class="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">3</button>
          <button class="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">Suivant</button>
        </div>
      </div>
    </div>
  </div>
</div>`,

settings: `<div class="min-h-screen bg-gray-50">
  <div class="max-w-5xl mx-auto px-8 py-10">
    <h1 class="text-2xl font-bold tracking-tight mb-8">Paramètres</h1>
    <div class="flex gap-8">
      <!-- Sidebar nav -->
      <aside class="w-48 flex-shrink-0">
        <nav class="space-y-0.5 sticky top-8">
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm font-medium shadow-sm">Profil</a>
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:bg-white rounded-lg text-sm">Compte</a>
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:bg-white rounded-lg text-sm">Notifications</a>
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:bg-white rounded-lg text-sm">Sécurité</a>
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:bg-white rounded-lg text-sm">Facturation</a>
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-gray-500 hover:bg-white rounded-lg text-sm">Intégrations</a>
          <div class="border-t border-gray-100 my-2"></div>
          <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg text-sm">Supprimer le compte</a>
        </nav>
      </aside>

      <!-- Content -->
      <div class="flex-1 space-y-5">
        <div class="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 class="font-semibold mb-5">Informations personnelles</h2>
          <div class="flex items-start gap-6 mb-6 pb-6 border-b border-gray-100">
            <div class="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-400">MD</div>
            <div>
              <button class="text-sm border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 mb-1">Changer la photo</button>
              <p class="text-xs text-gray-400">JPG, PNG ou GIF · max 2 Mo</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1.5">Prénom</label>
              <input type="text" value="Marie" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1.5">Nom</label>
              <input type="text" value="Dupont" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10">
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium mb-1.5">Email</label>
              <input type="email" value="marie.dupont@exemple.fr" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10">
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium mb-1.5">Biographie</label>
              <textarea rows="3" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10 resize-none">Designer produit chez Acme. Passionnée d'UX et de typographie.</textarea>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 class="font-semibold mb-1">Notifications</h2>
          <p class="text-sm text-gray-400 mb-5">Choisissez comment vous souhaitez être informé.</p>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium">Emails de résumé</p>
                <p class="text-xs text-gray-400">Résumé hebdomadaire de votre activité</p>
              </div>
              <div class="w-10 h-6 bg-black rounded-full relative cursor-pointer">
                <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-gray-50 pt-4">
              <div>
                <p class="text-sm font-medium">Notifications push</p>
                <p class="text-xs text-gray-400">Alertes en temps réel sur votre appareil</p>
              </div>
              <div class="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between border-t border-gray-50 pt-4">
              <div>
                <p class="text-sm font-medium">Emails marketing</p>
                <p class="text-xs text-gray-400">Nouvelles fonctionnalités et offres spéciales</p>
              </div>
              <div class="w-10 h-6 bg-black rounded-full relative cursor-pointer">
                <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3">
          <button class="border border-gray-200 px-5 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50">Annuler</button>
          <button class="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800">Enregistrer les modifications</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
};