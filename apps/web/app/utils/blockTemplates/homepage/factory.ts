import type { Block } from '@plentymarkets/shop-api';
import { v4 as uuid } from 'uuid';

export const BANNER_BLOCK_NAME = 'Banner';

export const isBannerBlock = (block: Block | null | undefined) => block?.name === BANNER_BLOCK_NAME;

export function createHomepage(): Block[] {
  const blocks = [
    {
      name: 'HnHero',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      content: {
        text1: 'Der härteste Papierstrohhalm',
        text2: 'Hält länger als dein Drink',
        text3: 'Umweltfreundliche Alternative zu Plastik',
      },
      button: {
        label: 'Jetzt zuschlagen',
        link: '',
        variant: 'primary',
      },
      images: {
        hero_img: '/_nuxt-plenty/images/hero_new.svg',
        straw_1: '/_nuxt-plenty/images/straw-v-pink.png',
        straw_2: '/_nuxt-plenty/images/straw-v-pink.png',
      },
    },
    {
      name: 'HnSeperator',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      custom_class: 'sms-seperator--hero',
    },
    {
      name: 'HnTextImage',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      text: {
        headline: 'Sehr sehr stabiler strohhalm',
        copytext:
          'Macht definitiv nicht schlapp, egal wie feucht es wird. Zwei Jahre Forschung und Training haben unsere Papierstrohhalme ausgesprochen belastbar gemacht. Lebensmitteltauglich und komplett frei von bedenklichen Farben und Klebern, stehen sie in jedem Getränk wie eine verführerische Eins und freuen sich auf jede Suck-Action.',
        fact1: 'Standfest bis zum Ende',
        fact1_src: '/_nuxt-plenty/images/strong.svg',
        fact2: '-10 C° bis 100 C°',
        fact2_src: '/_nuxt-plenty/images/temperature.svg',
        fact3: 'Färbt nicht ab',
        fact3_src: '/_nuxt-plenty/images/water.svg',
      },
      images: {
        img1_src: '/_nuxt-plenty/images/straw-v-pink-pointed.png',
        img1_class: '',
        img2_src: '/_nuxt-plenty/images/straw-v-pink.png',
        img2_class: '',
      },
    },
    {
      name: 'HnSeperator',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      custom_class: 'sms-seperator--textimage_1',
    },
    {
      name: 'HnScrollElement',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      text: {
        headline_class: '',
        headline: 'Wahnsinn. diese Farbauswahl.',
        copytext:
          'Klassic. Neon. Metallic. Pastell. 3000 Farben – Wir haben sie alle. Wähle jetzt deinen nächsten Farbhöhepunkt aus und lass dir deine Trinkhalme in genau dieser Farbe liefern. Sexy gestreift oder mit eigenem Style und Design.',
      },
      images: {
        img1_src: '/_nuxt-plenty/images/straw-colours-pink.png',
        img1_class: 'sms-scroll--image1',
        img2_src: '/_nuxt-plenty/images/straw-colours-blue.png',
        img2_class: 'sms-scroll--image2',
        img3_src: '/_nuxt-plenty/images/straw-colours-green.png',
        img3_class: 'sms-scroll--image3',
      },
    },
    {
      name: 'HnSeperator',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      custom_class: 'sms-seperator--textimage_1',
    },
    {
      name: 'HnCenterTextImage',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      text: {
        wrapper_class: 'sms-pt--200',
        headline: 'Es kommt eben doch aufs aussehen an.',
        copytext:
          'Wähle jetzt aus 3000 Farben und unterschiedlichen Dicken und Längen deine individuellen Strohhalme aus. Unsere Favorite Suckers gibt’s natürlich auch in Neon, Metallic und Pastell. Auf Wunsch bekommst du zudem individualisierte Trinkhalme mit eigenem Logo auf jedem Halm und / oder auf der Verpackung. Zeitnah und schnell bis vor die Haustür.',
        fact1: 'Eigenes Logo',
        fact1_src: '/_nuxt-plenty/images/magic.svg',
        fact2: 'Passt genau zu deinen Vorstellungen',
        fact2_src: '/_nuxt-plenty/images/measure.svg',
        fact2_class: 'sms-w--75',
        fact3: 'Färbt nicht ab',
        fact3_src: '/_nuxt-plenty/images/water.svg',
      },
      images: {
        img1_src: '/_nuxt-plenty/images/straw-h-blue.png',
        img1_class: '',
        img2_src: '/_nuxt-plenty/images/nice@4x.png',
        img2_class: '',
      },
    },
    {
      name: 'HnSeperator',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      custom_class: 'sms-seperator--textimage_1',
    },
    {
      name: 'HnCenterTextImage',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      text: {
        wrapper_class: 'sms-pt--4',
        headline: 'Was für ein Stecher. Was für ein Rohr.',
        copytext:
          'Wenn Strohhalme durch Oberflächen stechen sollen, brauchen Sie eine harte Spitze. SuckMyStraw Papierstrohhalme gibt es deswegen aus einem Guss und mit beachtlicher Penetrationsfähigkeit. Modelle aus Plastik können nun nicht mehr anders, als den Schwanz einzuziehen und den Profistechern das Feld zu überlassen.',
      },
      images: {
        img1_src: '/_nuxt-plenty/images/straw-h-pink-pointed.png',
        img1_class: '',
        img2_src: '',
        img2_class: '',
      },
    },
    {
      name: 'HnSeperator',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      custom_class: 'sms-seperator--textimage_1',
    },
    {
      name: 'HnCta',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      text: {
        wrapper_class: 'sms-pt--4',
        headline: 'Nachhaltigkeit',
        headline_class: 'sms-w--50 sms-mobile--w--100 text-white uppercase',
        subline: 'Für die Umwelt',
        subline_class: 'sms-w--50 sms-mobile--w--100 text-grey uppercase sms-mb--30',
        copytext:
          'Nachhaltig hergestellt und voll kompostierbar. Unsere Papierstrohhalme haben die Umwelt im Blick und die Zukunft vor Augen. Eines unserer Mottos lautet daher auch: „Suck with conscience.“',
        copytext_class: 'sms-w--50 sms-mobile--w--100 sms-mb--35',
      },
      button: {
        label: 'Mehr erfahren',
        link: '',
        class: 'primary',
      },
      images: {
        img1_wrapper_class: 'sms-w--50 sms-mobile--w--100 sms--shadowgradient',
        img1_class: 'sms-cta--image-turtle',
        img1_src: '/_nuxt-plenty/images/schildkroete.png',
      },
    },
    {
      name: 'HnCta',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      text: {
        wrapper_class: 'sms-pt--4 sms-cta--bluewrapper sms-my--200 text-center',
        headline: 'Suck it professionally',
        headline_class: 'sms-w--50 sms-mobile--w--100 text-white uppercase text-left',
        subline: 'Individuelle Bestellungen mit großen Stückzahlen',
        subline_class: 'sms-w--50 sms-mobile--w--100 sms-mobile--w--100 text-grey uppercase sms-mb--30 text-left',
        copytext:
          'Nutze nur die stärksten Papierstrohhalme für dein Business. Wähle jetzt einfach deine Wunschlänge, Farbe und Dicke aus und brande deine Trinkhalme mit deinem Logo. Für die Gastro sind SuckMyStraw Strohhalme aus Papier eine ideale Alternative zu Trinkhalmen aus Plastik, die ab Juli 2021 verboten sind. Aber auch für alle anderen Unternehmen und Betriebe sind unsere standfesten Trinkröhrchen perfekt für Gäste und Firmenfeiern geeignet.',
        copytext_class: 'sms-w--50 sms-mobile--w--100  sms-mb--35 text-left',
        copytext_wrapperclass: 'sms-w--50 sms-mobile--w--100 sms-mobile-mb--100  sms-mb--35',
      },
      button: {
        label: 'Individuelle Bestellung',
        link: '/contact',
        class: 'primary',
      },
      images: {
        img1_wrapper_class: 'sms-cta--absolute_images sms-w--50 sms-mobile--w--100',
        img1_class: 'sms-cta--image1',
        img1_src: '/_nuxt-plenty/images/straw-h-pink-pointed.png',
        img2_class: 'sms-cta--image2',
        img2_src: '/_nuxt-plenty/images/straw-h-pink.png',
      },
    },
    {
      name: 'HnSeperator',
      type: 'content',
      meta: {
        uuid: uuid(),
      },
      custom_class: 'sms-seperator--footer',
      color: '#ff009b',
    },
  ];

  // shouldShowBlock() blendet Blöcke ohne nicht-leeres `content` aus; die Hn-Blöcke
  // tragen ihre Daten in Top-Level-Keys (v-bind-Spread) — deshalb hier nach `content` gespiegelt.
  return blocks.map(({ name, type, meta, ...custom }) => ({
    name,
    type,
    meta,
    ...custom,
    content: 'content' in custom ? custom.content : { ...custom },
  })) as unknown as Block[];
}
