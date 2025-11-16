import dayjs from 'dayjs';
import {
  IArticle,
  IArticleOptions,
  IBasket,
  ICategory,
  IExtra,
  ILocation,
  INotification,
  IProduct,
  ICourse,
  IChannel,
  IUser,
  ICatagory,
} from './types';

// users
export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Kibreab',
    stats: { posts: 4, followers: 5320, following: 7400 },
    social: { twitter: '', dribbble: '' },
    about:
      'I sell courses on how to become the best version of yourself, follow and be THAT GUY',
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80',
    course_ids: [1, 4, 5, 6]
  },
  {
    id: 2,
    name: 'Bella Audrey',
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: 'CreativeTim', dribbble: 'creativetim' },
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
    course_ids: [1, 4, 5, 6]
  },
  {
    id: 3,
    name: 'Miriam Lendra',
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: 'CreativeTim', dribbble: 'creativetim' },
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
    course_ids: [1, 4, 5, 6]
  },
  {
    id: 4,
    name: 'David Bishop',
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: 'CreativeTim', dribbble: 'creativetim' },
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
    course_ids: [1, 4, 5, 6]
  },
  {
    id: 5,
    name: 'Mathew Glock',
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: 'CreativeTim', dribbble: 'creativetim' },
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
    course_ids: [1, 4, 5, 6]
  },
  {
    id: 6,
    name: 'Emma Roberts',
    stats: { posts: 323, followers: 53200, following: 749000 },
    social: { twitter: 'CreativeTim', dribbble: 'creativetim' },
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
    course_ids: [1, 4, 5, 6]
  },
];

// following cards
export const FOLLOWING: IProduct[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Demo course 1',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'vertical',
    title: "Demo course 2",
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'horizontal',
    title: "Demo course 3",
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'horizontal',
    title: "Demo course 4",
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80',
  },
  {
    id: 5,
    type: 'horizontal',
    title: "Demo course 5",
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
  },
  {
    id: 6,
    type: 'horizontal',
    title: "Demo course 6",
    image:
      'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?fit=crop&w=450&q=80',
  },
];

// trending cards
export const TRENDING: IProduct[] = [
  {
    id: 1,
    type: 'horizontal',
    title: 'Experiences and things to do wherever you are.',
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'vertical',
    title: 'The highest status people.',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'vertical',
    title: 'Unique activities with local experts.',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'vertical',
    title: 'Adventures - Multi day trips with meals and stays.',
    image:
      'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?fit=crop&w=450&q=80',
  },
  {
    id: 5,
    type: 'vertical',
    title: 'New ways to meet your business goals.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
  },
];

// categories
export const CATEGORIES: ICategory[] = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Ongoing' },
];

// article options
export const ARTICLE_OPTIONS: IArticleOptions[] = [
  {
    id: 1,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: { total: 1, type: 'sofa' },
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    title: 'Cosy apartment',
    description:
      'Different people have different taste, and various types of music have many ways of leaving an impact on someone.',
    type: 'apartment',
    guests: 3,
    sleeping: { total: 2, type: 'bed' },
    price: 200,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1603034203013-d532350372c6?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: { total: 1, type: 'sofa' },
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
];

// offers
export const OFFERS: IProduct[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Unique activities with local experts.',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'vertical',
    title: 'The highest status people.',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'vertical',
    title: 'Get more followers and grow.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'vertical',
    title: 'New ways to meet your business goals.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
  },
];

// rental locations
export const LOCATIONS: ILocation[] = [
  { id: 1, city: 'Paris', country: 'France' },
  { id: 2, city: 'Rome', country: 'Italy' },
  { id: 3, city: 'London', country: 'United Kingdom' },
];

// articles
export const ARTICLES: IArticle[] = [
  {
    id: 1,
    title: "Kibreab",
    description: "Hey, where are you?",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
    user: USERS[0],
    timestamp: dayjs().subtract(2, "minute").unix(),
  },
  {
    id: 2,
    title: "Mekdes",
    description: "I just finished the assignment.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80",
    user: USERS[1],
    timestamp: dayjs().subtract(10, "minute").unix(),
  },
  {
    id: 3,
    title: "Daniel",
    description: "Can we meet tomorrow?",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80",
    user: USERS[2],
    timestamp: dayjs().subtract(30, "minute").unix(),
  },
  {
    id: 4,
    title: "Selam",
    description: "I'll send the notes later.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[3],
    timestamp: dayjs().subtract(1, "hour").unix(),
  },
  {
    id: 5,
    title: "Abel",
    description: "Meeting postponed to tomorrow.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80",
    user: USERS[1],
    timestamp: dayjs().subtract(5, "hour").unix(),
  },
  {
    id: 6,
    title: "Helen",
    description: "Check out this cool link!",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    user: USERS[5],
    timestamp: dayjs().subtract(6, "hour").unix(),
  },
  {
    id: 7,
    title: "Amanuel",
    description: "Looking forward to our trip!",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80",
    user: USERS[0],
    timestamp: dayjs().subtract(8, "hour").unix(),
  },
  {
    id: 8,
    title: "Rahel",
    description: "Bro, am at the door!!",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    user: USERS[1],
    timestamp: dayjs().subtract(9, "hour").unix(),
  },
  {
    id: 9,
    title: "Fitsum",
    description: "Good morning!",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
    user: USERS[4],
    timestamp: dayjs().subtract(2, "hour").unix(),
  },
  {
    id: 10,
    title: "Mulu",
    description: "Let's start the project today.",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[5],
    timestamp: dayjs().subtract(3, "hour").unix(),
  },
  {
    id: 11,
    title: "Sara",
    description: "Can you check the email I sent?",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    user: USERS[6],
    timestamp: dayjs().subtract(4, "hour").unix(),
  },
  {
    id: 12,
    title: "Samson",
    description: "Can you review my code?",
    category: CATEGORIES[0],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[6],
    timestamp: dayjs().subtract(7, "hour").unix(),
  },
  {
    id: 13,
    title: "Rahel",
    description: "Bro, am at the door!!",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    user: USERS[1],
    timestamp: dayjs().subtract(9, "hour").unix(),
  },
  {
    id: 14,
    title: "Fitsum",
    description: "Good morning!",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80",
    user: USERS[4],
    timestamp: dayjs().subtract(2, "hour").unix(),
  },
  {
    id: 15,
    title: "Mulu",
    description: "Let's start the project today.",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[5],
    timestamp: dayjs().subtract(3, "hour").unix(),
  },
  {
    id: 16,
    title: "Sara",
    description: "Can you check the email I sent?",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80",
    user: USERS[6],
    timestamp: dayjs().subtract(4, "hour").unix(),
  },
  {
    id: 17,
    title: "Samson",
    description: "Can you review my code?",
    category: CATEGORIES[1],
    options: ARTICLE_OPTIONS,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80",
    user: USERS[6],
    timestamp: dayjs().subtract(7, "hour").unix(),
  },
];

// rental recommendations
export const RECOMMENDATIONS: IArticle[] = [
  {
    id: 1,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.9,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.5,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    description:
      'The most beautiful and complex UI Kits built by Creative Tim.',
    category: CATEGORIES[3], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.8,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
];

// chat messages
export const MESSSAGES = [
  {
    _id: 1,
    text: 'Bye, bye 👋🏻',
    createdAt: dayjs().subtract(1, 'm').toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 2,
    text: 'Ok. Cool! See you 😁',
    createdAt: dayjs().subtract(2, 'm').toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
  {
    _id: 3,
    text: 'Sure, just let me finish somerhing and I’ll call you.',
    createdAt: dayjs().subtract(3, 'm').toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 4,
    text: 'Hey there! How are you today? Can we meet and talk about location? Thanks!',
    createdAt: dayjs().subtract(4, 'm').toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
];

// extras cards
export const EXTRAS: IExtra[] = [
  {
    id: 1,
    name: 'BMW X5',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/x5.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 2,
    name: 'Tesla',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/tesla.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 3,
    name: 'Mercedes GLE',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/gle.png'),
    saved: false,
    booked: false,
    available: false,
  },
];

// shopping basket recommentations
export const BASKET_RECOMMENDATIONS: IBasket['items'] = [
  {
    id: 4,
    title: 'Polo T-Shirt',
    description: 'Impeccably tailored in Italy.',
    image:
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?fit=crop&w=450&q=80',
    stock: true,
    qty: 1,
    size: 'M',
    price: 200,
  },
  {
    id: 5,
    title: 'Orange Jacket',
    description: 'Mustard About Me - South Africa',
    image:
      'https://images.unsplash.com/photo-1599407950360-8b8642d423dc?fit=crop&w=450&q=80',
    stock: true,
    qty: 1,
    size: 'M',
    price: 489,
  },
];

// shopping basket
export const BASKET: IBasket = {
  subtotal: 750,
  recommendations: BASKET_RECOMMENDATIONS,
  items: [
    {
      id: 1,
      title: 'Leather Jacket',
      description: 'Impeccably tailored in Italy from lightweight navy.',
      image:
        'https://images.unsplash.com/photo-1562751361-ac86e0a245d1?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'M',
      price: 250,
      qtys: [1, 2, 3, 4, 5],
      sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    {
      id: 2,
      title: 'Dark T-Shirt',
      description: 'Dark-grey slub wool, pintucked notch lapels.',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'l',
      price: 150,
      qtys: [1, 2, 3, 4, 5],
      sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    {
      id: 3,
      title: 'Leather Handbag',
      description: "Immaculate tailoring is TOM FORD's forte",
      image:
        'https://images.unsplash.com/photo-1608060434411-0c3fa9049e7b?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'm',
      price: 350,
      qtys: [1, 2, 3],
      sizes: ['s', 'm', 'l'],
    },
  ],
};

// notifications
export const NOTIFICATIONS: INotification[] = [
  {
    id: 1,
    subject: 'New Message',
    message: 'You have a new message from the owner.',
    type: 'document',
    business: true,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 2,
    subject: 'New Order',
    message: 'A confirmed request by one client.',
    type: 'extras',
    business: true,
    read: false,
    createdAt: dayjs().subtract(4, 'h').toDate(),
  },
  {
    id: 3,
    subject: 'New Likes',
    message: 'Your posts have been liked by 2,342.',
    type: 'notification',
    business: true,
    read: true,
    createdAt: dayjs().subtract(6, 'h').toDate(),
  },
  {
    id: 4,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
  {
    id: 5,
    subject: 'Check your profile',
    message: 'Your profile has new updates.',
    type: 'profile',
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, 'd').toDate(),
  },
  {
    id: 6,
    subject: 'Product Update',
    message: 'Your product has been updated',
    type: 'documentation',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'w').toDate(),
  },
  {
    id: 7,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, 'w').toDate(),
  },
  {
    id: 8,
    subject: 'Learn new things',
    message:
      'Like so many organizations these days, Autodesk is a company in transition. It was until recently.',
    type: 'document',
    business: false,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 9,
    subject: 'Give your best',
    message:
      'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color.',
    type: 'payment',
    business: false,
    read: false,
    createdAt: dayjs().subtract(9, 'h').toDate(),
  },
  {
    id: 10,
    subject: 'Come and meet us',
    message:
      'Technology is applied science. Science is the study of nature. Mathematics is the language of nature.',
    type: 'office',
    business: false,
    read: false,
    createdAt: dayjs().subtract(12, 'h').toDate(),
  },
];

// Courses
export const ALLCOURSES: ICourse[] = [
    {
    id: 1,
    type: 'vertical',
    title: 'Demo course 1',
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
  },
  {
    id: 2,
    type: 'vertical',
    title: "Demo course 2",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 3,
    type: 'vertical',
    title: "Demo course 3",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 4,
    type: 'vertical',
    title: "Demo course 4",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 5,
    type: 'vertical',
    title: "Demo course 5",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 6,
    type: 'vertical',
    title: "Demo course 6",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
];

export const DESIGN: ICourse[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Demo course 1',
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
  },
  {
    id: 2,
    type: 'vertical',
    title: "Demo course 2",
    seller: "Yisakor",
    rating: 4.2,
    price: 300,
    isbest: true,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 3,
    type: 'vertical',
    title: "Demo course 3",
    seller: "Abebe",
    rating: 4.2,
    price: 40,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 4,
    type: 'vertical',
    title: "Demo course 4",
    seller: "Kibreab",
    rating: 4.2,
    price: 40,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 5,
    type: 'vertical',
    title: "Demo course 5",
    seller: "Kibreab",
    rating: 4.2,
    price: 350,
    isbest: true,
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 6,
    type: 'vertical',
    title: "Demo course 6",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
];
export const BUSINESS: ICourse[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Demo course 1',
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
  },
  {
    id: 2,
    type: 'vertical',
    title: "Demo course 2",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 3,
    type: 'vertical',
    title: "Demo course 3",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 4,
    type: 'vertical',
    title: "Demo course 4",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 5,
    type: 'vertical',
    title: "Demo course 5",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 6,
    type: 'vertical',
    title: "Demo course 6",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
];
export const DEVELOPMENT: ICourse[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Demo course 1',
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
  },
  {
    id: 2,
    type: 'vertical',
    title: "Demo course 2",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 3,
    type: 'vertical',
    title: "Demo course 3",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 4,
    type: 'vertical',
    title: "Demo course 4",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 5,
    type: 'vertical',
    title: "Demo course 5",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 6,
    type: 'vertical',
    title: "Demo course 6",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
];
export const TRADING: ICourse[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Demo course 1',
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
  },
  {
    id: 2,
    type: 'vertical',
    title: "Demo course 2",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 3,
    type: 'vertical',
    title: "Demo course 3",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 4,
    type: 'vertical',
    title: "Demo course 4",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 5,
    type: 'vertical',
    title: "Demo course 5",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 6,
    type: 'vertical',
    title: "Demo course 6",
    seller: "Kibreab",
    rating: 4.2,
    price: 400,
    isbest: false,
    image:
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
];
export const CHANNELS: IChannel[] = [
  {
    id: 1,
    name: "Kibreab Hailu",
    bio: "This is a channel bio",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 1,
    followersCount: 10,
  },
  {
    id: 2,
    name: "Marry Jane",
    bio: "another channel bio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 5,
    followersCount: 1000,
  },
  {
    id: 3,
    name: "Abel Tesfaye",
    bio: "also a channel bio",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880",
    isVerified: false,
    coursesCount: 2,
    followersCount: 5,
  },
  {
    id: 4,
    name: "Henok Wolde",
    bio: "a different channel bio",
    image: "https://plus.unsplash.com/premium_photo-1731334985721-5453195ebe56?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 10,
    followersCount: 2381,
  },
  {
    id: 5,
    name: "Yisakor Eyob",
    bio: "yet another channel bio",
    image: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 2,
    followersCount: 340,
  },
  {
    id: 6,
    name: "Ahmed Salih",
    bio: "again, another channel bio here",
    image: "https://plus.unsplash.com/premium_photo-1669782051589-4f828261b1c2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2030",
    isVerified: false,
    coursesCount: 1,
    followersCount: 253,
  },
  {
    id: 7,
    name: "Liya Mekonnen",
    bio: "Creative designer and course creator",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 7,
    followersCount: 560,
  },
  {
    id: 8,
    name: "Samuel Bekele",
    bio: "Fullstack developer tutorials",
    image: "https://images.unsplash.com/photo-1614289484771-1c9ff19270d6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 3,
    followersCount: 120,
  },
  {
    id: 9,
    name: "Sara Desta",
    bio: "Learn UX/UI design here",
    image: "https://images.unsplash.com/photo-1614289484201-4e23f12e2b1d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 9,
    followersCount: 890,
  },
  {
    id: 10,
    name: "Mulugeta Alemu",
    bio: "Mastering JavaScript courses",
    image: "https://images.unsplash.com/photo-1614289484501-3b2c987b3e3e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 2,
    followersCount: 45,
  },
  {
    id: 11,
    name: "Rahel Tadesse",
    bio: "Marketing strategies and insights",
    image: "https://images.unsplash.com/photo-1614289485001-7d2c1f3f9b1d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 5,
    followersCount: 1320,
  },
  {
    id: 12,
    name: "Henok Gebre",
    bio: "Photography tutorials channel",
    image: "https://images.unsplash.com/photo-1614289485101-2c1f3f4f9a1d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 4,
    followersCount: 230,
  },
  {
    id: 13,
    name: "Martha Fikre",
    bio: "Learn coding in a fun way",
    image: "https://images.unsplash.com/photo-1614289485201-6c1f3f5f9a2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 6,
    followersCount: 480,
  },
  {
    id: 14,
    name: "Dawit Tesfaye",
    bio: "Python and AI tutorials",
    image: "https://images.unsplash.com/photo-1614289485301-5c1f3f6f9b3d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 8,
    followersCount: 920,
  },
  {
    id: 15,
    name: "Selam Yohannes",
    bio: "Design thinking and creativity",
    image: "https://images.unsplash.com/photo-1614289485401-4c1f3f7f9c4d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 3,
    followersCount: 210,
  },
  {
    id: 16,
    name: "Bekele Tadesse",
    bio: "Web development for beginners",
    image: "https://images.unsplash.com/photo-1614289485501-3c1f3f8f9d5d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 5,
    followersCount: 610,
  },
  {
    id: 17,
    name: "Mariam Alem",
    bio: "Digital marketing courses",
    image: "https://images.unsplash.com/photo-1614289485601-2c1f3f9f9e6d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: true,
    coursesCount: 7,
    followersCount: 1120,
  },
  {
    id: 18,
    name: "Abiy Wolde",
    bio: "Learn mobile app development",
    image: "https://images.unsplash.com/photo-1614289485701-1c1f3faf9f7d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    isVerified: false,
    coursesCount: 2,
    followersCount: 300,
  },
];


export const CATAGORIES: ICatagory[] = [
  {
    id: 1,
    title: 'ALL',
  },
  {
    id: 2,
    title: 'DESIGN',
  },
  {
    id: 3,
    title: 'BUSINESS',
  },
  {
    id: 4,
    title: 'DESIGN',
  },
  {
    id: 5,
    title: 'DEVELOPMENT',
  },
  {
    id: 6,
    title: 'TRADING',
  }
]

export default {
  USERS,
  FOLLOWING,
  TRENDING,
  CATEGORIES,
  ARTICLES,
  RECOMMENDATIONS,
  MESSSAGES,
  EXTRAS,
  NOTIFICATIONS,
  DESIGN,
  ALLCOURSES,
  BUSINESS,
  DEVELOPMENT,
  TRADING,
  CHANNELS,
  CATAGORIES
};
