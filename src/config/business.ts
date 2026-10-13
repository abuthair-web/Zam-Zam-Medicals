/**
 * Zam Zam Medicals - Official Verified Business Configuration
 * Centralized business details for authentic identity and verification.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  establishedYear: number;
  address: string;
  streetAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phoneDisplay: string;
  phoneTel: string;
  openingHours: string;
  serviceArea: string;
  googleMapsUrl: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Zam Zam Medicals",
  tagline: "Your Trusted Neighbourhood Pharmacy",
  establishedYear: 2016,
  address: "77, Parthasarathy Road, Balaji Nagar, Pallikaranai, Chennai, Tamil Nadu – 600100",
  streetAddress: "77, Parthasarathy Road, Balaji Nagar",
  neighborhood: "Balaji Nagar, Pallikaranai",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600100",
  country: "India",
  phoneDisplay: "+91 89408 85500",
  phoneTel: "+918940885500",
  openingHours: "8:30 AM–10:30 PM, subject to owner confirmation",
  serviceArea: "Pallikaranai and surrounding areas, Chennai",
  // Google Maps search query using the exact verified address
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zam+Zam+Medicals%2C+77%2C+Parthasarathy+Road%2C+Balaji+Nagar%2C+Pallikaranai%2C+Chennai%2C+Tamil+Nadu+600100",
};
