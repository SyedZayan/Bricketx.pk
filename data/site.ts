// data/site.ts

export const siteData = {
  company: {
    name: "BricketX Pakistan",
    tagline: "Information technology company",
    description: "BricketX Pakistan powers the ecosystem: providing the core tech infrastructure, coordination, & backend support for seamless global operations.",
  },
  contact: {
    address: "Asia Pacific trade center Plot no 250/1 main Rashid minhas road, Office no 803, Karachi, Pakistan",
    phones: [
      { label: "Landline", number: "(021) 36271852", link: "tel:02136271852" },
      { label: "Mobile 1", number: "0318-0840653", link: "tel:+923180840653" },
      { label: "Mobile 2", number: "0318-0402959", link: "tel:+923180402959" },
    ],
    emails: [
      { address: "info@bricketx.pk", link: "mailto:info@bricketx.pk" },
      { address: "Contact@bricketx.com", link: "mailto:Contact@bricketx.com" }
    ],
    website: "www.BricketX.pk",
    social: {
      linkedin: "https://www.linkedin.com/company/bricketx-pk/",
      facebook: "https://www.facebook.com/bricketxpk",
      instagram: "https://www.instagram.com/bricketxpk/",
    }
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact", href: "#contact" },
  ]
};