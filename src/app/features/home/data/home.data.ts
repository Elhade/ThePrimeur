import { Feature, Advantage } from '../../../shared/types/feature.types';
import { CarouselSlide } from '../../../shared/types/carousel.types';

export const carouselSlides: CarouselSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1920&q=80',
    title: 'Fruits et Légumes Frais',
    description: 'Découvrez notre sélection de produits de saison'
  },
  {
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1920&q=80',
    title: 'Livraison Rapide',
    description: 'Vos produits livrés en temps et en heure'
  },
  {
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80',
    title: 'Qualité Garantie',
    description: 'Des produits rigoureusement sélectionnés'
  }
];

export const features: Feature[] = [
  {
    title: 'Commandes',
    description: 'Gérez vos commandes de fruits et légumes en ligne',
    link: '/orders',
    linkText: 'Voir les commandes',
    icon: 'shopping-cart'
  },
  {
    title: 'Produits',
    description: 'Consultez notre catalogue de produits frais',
    link: '/products',
    linkText: 'Voir les produits',
    icon: 'fruit'
  },
  {
    title: 'Administration',
    description: 'Accédez au tableau de bord administrateur',
    link: '/admin',
    linkText: 'Aller au dashboard',
    icon: 'dashboard'
  }
];

export const advantages: Advantage[] = [
  {
    title: 'Produits Frais',
    description: 'Sélection rigoureuse de fruits et légumes de saison',
    icon: '<svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
  },
  {
    title: 'Livraison Rapide',
    description: 'Service de livraison efficace et ponctuel',
    icon: '<svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
  },
  {
    title: 'Qualité Garantie',
    description: 'Satisfaction client garantie ou remboursé',
    icon: '<svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  }
];