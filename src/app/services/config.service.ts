import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configuration: ConfigItem[] = [
    {
      id: 1,
      name: 'about',
      data: {
        top: 'ABOUT OUR COMPANY',
        title: 'Dedication, Quality, and Innovation In Every steps',
        description:
          'MFACTORY was founded in 2015, MFACTORY began as a small operation in Lagos, Nigeria, with a focus on providing top-quality products and services. Over the year, we have grown into a leader in the industry, recognized for our commitment to innovation and excellence. Today, MFACTORY continues to evolve, delivering reliable, high-quality solutions to our valued customers. We remain dedicated to pushing the boundaries of what is possible and continue to deliver expected value',
        iconBlocks: [
          {
            id: 1,
            icon: 'fa-building',
            title: 'We Are What?',
            description:
              'A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another.',
          },
          {
            id: 2,
            icon: 'fa-rocket',
            title: 'Our Mission and Vision',
            description:
              'Our mission at MFACTORY is to deliver innovative, eco-friendly products that meet the highest standard of quality and sustainability. Our vision is to become the global leader in sustainable manufacturing,recognized for our commitment to environment stewardship and innovation.',
          },
          {
            id: 3,
            icon: 'fa-star',
            title: 'Core Value',
            description:
              'In MFACTORY, our core values define who we are and guide every decision we make. we operate with unwavering integrity, ensuring transparency and fairness in our actions. we believe in power of teamwork, fostering a collaborative and respective environment where every team member contributes to our shared success.',
          },
          {
            id: 4,
            icon: 'fa-recycle',
            title: 'Social Responsibility',
            description:
              'We are deeply committed to our social responsibilities. We believe that business have a vital role to play in building a better world. Our efforts are focused on promoting sustainability by minimizing our environment impact through eco-friendly manufacturing process and reduced waste',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Client',
      data: {
        top: 'OUR CLIENTS',
        title: 'Companies who use our services',
        description:
          'We work with clients across various industries, providing tailored solutions and building lasing relationships based on trust and excellence.',
        companyBlocks: [
          {
            id: 1,
            img: 'images/company-images/company-logo1.png',
            name: 'EcoCore Enterprises',
          },
          {
            id: 2,
            img: 'images/company-images/company-logo2.png',
            name: 'Titan Industries Group',
          },
          {
            id: 3,
            img: 'images/company-images/company-logo3.png',
            name: 'SwiftFlow Industries',
          },
          {
            id: 4,
            img: 'images/company-images/company-logo4.png',
            name: 'NovaTech Solutions',
          },
          {
            id: 5,
            img: 'images/company-images/company-logo5.png',
            name: 'Vertex Industrial Co.',
          },
          {
            id: 6,
            img: 'images/company-images/company-logo6.png',
            name: 'IronClad Services',
          },
          {
            id: 7,
            img: 'images/company-images/company-logo7.png',
            name: 'Skyline Engineering',
          },
          {
            id: 8,
            img: 'images/company-images/company-logo8.png',
            name: 'Pinnacle Project Ltd.',
          },
          {
            id: 9,
            img: 'images/company-images/company-logo9.png',
            name: 'PrimeSteel Construction',
          },
        ],
      },
    },
    {
      id: 3,
      name: 'gallery',
      data: {
        galleryBlocks: [
          { id: 1, img: '/images/gallery-images/gallery-image-1.jpg' },
          { id: 2, img: 'images/gallery-images/gallery-image-2.jpg' },
          { id: 3, img: 'images/gallery-images/gallery-image-3.jpg' },
          { id: 4, img: 'images/gallery-images/gallery-image-4.jpg' },
          { id: 5, img: 'images/gallery-images/gallery-image-5.jpg' },
          { id: 6, img: 'images/gallery-images/gallery-image-6.jpg' },
        ],
      },
    },
    {
      id: 4,
      name: 'header',
      data: {
        url: '',
        title: "WE'RE MFACTORY ",
        description:
          'It is who we are. It is what we do. We build trust.',
        buttonText: 'ABOUT US',
      },
    },
    {
      id: 5,
      name: 'pricing',
      data: {
        top: 'YOUR CHOICE',
        title: 'We have the right package for you',
        pricingBlocks: [
          {
            id: 1,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            Title: 'Personal',
            subtitle: 'The standard version',
            currency: '$',
            price: 19,
            featured: 'false',
            download: '5 Downloads',
            extension: '2 Extensions',
            tutorial: 'Tutorials',
            support: 'Forum Support',
            update: '1 year free updates',
            buttonText: 'BUY TODAY',
          },
          {
            id: 2,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            Title: 'Student',
            subtitle: 'Most popular choice',
            currency: '$',
            price: 29,
            featured: 'true',
            download: '15 Downloads',
            extension: '5 Extensions',
            tutorial: 'Tutorials with files',
            support: 'Forum Support',
            update: '2 year free updates',
            buttonText: 'BUY TODAY',
          },
          {
            id: 3,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            Title: 'Business',
            subtitle: 'For the whole team',
            currency: '$',
            price: 49,
            featured: 'false',
            download: 'Unlimited Downloads',
            extension: 'Unlimited Extensions',
            tutorial: 'HD Video Tutorials',
            support: 'Chat Support',
            update: 'Lifetime free updates',
            buttonText: 'BUY TODAY',
          },
        ],
      },
    },
    {
      id: 6,
      name: 'service',
      data: {
        quote:
          'MFACTORY has been a vital partner in our supply chain, delivering high-quality products on th time and within budget. Their commitment to use advanced technology and maintaining rigorous quality control measures set them apart from other manufacturers',
        quoteFooter: '— Man Jesus, Happy Customer',
        buttonText: 'WATCH VIDEO',
        img: 'images/dancer.jpg',
        top: 'SERVICES',
        title: 'Solutions We Deliver, Our Capacities',
        subtle:
          'At MFACTORY, we provide a wide range of tailored solution designed to meet your unique needs and ensuring that you receive the best possible outcome.',
        description:
          'One of the services we render is Industrial Services. Our industrial services are designed to meet  the complex needs of various industries. We offer comprehensive support, including equipment maintenance, project optimization, and on-site technical services. With a focus on efficiency and reliability, our team ensures that your industrial operation runs smoothly and safely.Whether it is routine maintenance or specialize project support, we provide the expertise and solutions necessary to keep your operation at peek performance.',
        Description:
          'Another one is Construction Services. Our construction services offer end-to-end solutions for all your building needs. From initial planning and design to execution and project management, we handle every aspect of the construction process with precision and expertise. Whether it is commercial, industrial, or residential projects, our experienced team ensures that each projects is completed on time, within budget, and to the highest standard quality. Other services are: POWER PLANTS, MACHINERY & CNC, EQUIPMENT RELOCATION, OIL AND GAS IND.',
      },
    },
    {
      id: 7,
      name: 'testimonial',
      data: {
        top: 'FEEDBACK',
        title: 'What Clients Says?',
        feedbackBlock: [
          {
            id: 1,
            name: 'John Doe - BusinessMan',
            img: 'images/user-images/user-1.jpg',
            comments:
              "We have been consistently impressed by the quality and reliability of the products manufactures by MFACTORY. This factory's team's is knowledgeable and responsive, making the enter process seamless from start to finish.",
          },
          {
            id: 2,
            name: 'Roslyn Doe - Wholesaler',
            img: 'images/user-images/user-2.jpg',
            comments:
              'MFACTORY has been a vital partner in our supply chain, delivering high-quality products on th time and within budget. Their commitment to use advanced technology and maintaining rigorous quality control measures set them apart from others',
          },
          {
            id: 3,
            name: 'Thomas Doe - Happy CLient',
            img: 'images/user-images/user-3.jpg',
            comments:
              'I am extremely satisfied with the innovation and excellence demonstrated by MFACTORY.',
          },
        ],
      },
    },
    {
      id: 8,
      name: 'footer',
      data: {
        title: 'Made with love by ',
        name: 'Man j',
        socialBlock: [
          {
            id: 1,
            icon: 'fa-facebook',
            url: 'https://www.facebook.com/username',
            iconName: 'Facebook',
          },
          {
            id: 2,
            icon: 'fa-google-plus',
            url: 'http://google.com/+username',
            iconName: 'Google+',
          },
          {
            id: 3,
            icon: 'fa-twitter',
            url: 'http://www.twitter.com/username',
            iconName: 'X',
          },
          {
            id: 4,
            icon: 'fa-instagram',
            url: 'http://www.instagram.com/username',
            iconName: 'Instagram',
          },
          {
            id: 5,
            icon: 'fa-behance',
            url: 'http://www.behance.net',
            iconName: 'Behance',
          },
        ],
      },
    },
  ];

  constructor() {}

  getAllPages(): ConfigItem[]{
    return this.configuration;
  }
  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find((configItem) => configItem.name === pageName);
  }
}
