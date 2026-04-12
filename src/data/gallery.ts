import buetIupcImage from "@/assets/gallery/buet-iupc-2024.jpg";
import icpcDhakaImage2024 from "@/assets/gallery/ICPC-dhaka-regional-2024.jpg";
import icpcDhakaImage2025 from "@/assets/gallery/ICPC-dhaka-regional-2025.jpg";
import duetIupcImage from "@/assets/gallery/duet-iupc-2025.jpg";
import deptPicnicImage from "@/assets/gallery/dept-picnic-2025.jpeg";
import bubtBapsCampImage from "@/assets/gallery/bubt-baps-camp-2025.jpg";
import pracContestImage01 from "@/assets/gallery/prac-contest-01.jpg";
import pracContestImage02 from "@/assets/gallery/prac-contest-02.jpg";
import pracContestImage03 from "@/assets/gallery/prac-contest-03.jpg";

export interface GalleryItem {
  id: number;
  image: string;
  tag: string;
  size: "small" | "medium" | "large";
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: icpcDhakaImage2025,
    tag: "ICPC Dhaka Regional 2025",
    size: "large",
  },
  {
    id: 2,
    image: buetIupcImage,
    tag: "BUET IUPC 2024",
    size: "small",
  },
  {
    id: 3,
    image: icpcDhakaImage2024,
    tag: "ICPC Dhaka Regional 2024",
    size: "small",
  },
  {
    id: 4,
    image: duetIupcImage,
    tag: "DUET IUPC 2025",
    size: "small",
  },
  {
    id: 5,
    image: deptPicnicImage,
    tag: "Department Picnic 2025",
    size: "small",
  },
  {
    id: 6,
    image: bubtBapsCampImage,
    tag: "BUBT-BAPS National Programming Camp 2025",
    size: "small",
  },
  {
    id: 7,
    image: pracContestImage01,
    tag: "Warmup Contest for ICPC Dhaka Regional 2024",
    size: "small",
  },
  {
    id: 8,
    image: pracContestImage02,
    tag: "BUBT ICPC Preliminary Contest 2025",
    size: "small",
  },
  {
    id: 9,
    image: pracContestImage03,
    tag: "Warmup Contest for ICPC Dhaka Regional 2024",
    size: "small",
  },
];
