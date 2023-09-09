import Image1 from "./src/assets/icons/clock.svg";
import Image2 from "./src/assets/icons/marker.svg";
import Image3 from "./src/assets/icons/phone.svg";
import ServiceImg1 from "./src/assets/images/whitening.png";
import ServiceImg2 from "./src/assets/images/cavity.png";
import ServiceImg3 from "./src/assets/images/fluoride.png";
import testimonial_1 from "./src/assets/images/people1.png";

const allData = {
  cards: [
    {
      id: 1,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      image: Image1,
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Lorem Ipsum is simply dummy text of the pri",
      image: Image2,
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      image: Image3,
    },
  ],
  services: [
    {
      id: 1,
      name: "Fluoride Treatment",
      description: "Lorem Ipsum is simply dummy text of the pri",
      image: ServiceImg1,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description: "Lorem Ipsum is simply dummy text of the pri",
      image: ServiceImg2,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description: "lorem Ipsum is simply dummy text of the",
      image: ServiceImg3,
    },
  ],
  testimonial: [
    {
      id: 1,
      name: "Winson Herry",
      rank: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: testimonial_1,
    },
    {
      id: 2,
      name: "Winson Herry",
      rank: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: testimonial_1,
    },
    {
      id: 3,
      name: "Winson Herry",
      rank: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: testimonial_1,
    },
  ],
};
export default allData;
