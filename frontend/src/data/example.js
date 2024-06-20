import Nanotech from "../assets/nanotech.jpg";
import Systems from "../assets/systems.jpg";
import Ai from "../assets/ai.jpg";
import Math from "../assets/math.jpg";
import Cyber from "../assets/cyber.jpg";

export const messages = [
  {
    id: 1,
    userId: "user1",
    roomId: "room1",
    content: "Hello hello hello hello",
    timestamp: "2024-06-18T10:00:00Z",
  },
  {
    id: 2,
    userId: "user2",
    roomId: "room1",
    content: "Hi hi hi hi hi hi hi hi hi hi ",
    timestamp: "2024-06-18T10:02:00Z",
  },
  {
    id: 3,
    userId: "user3",
    roomId: "room2",
    content: "Welcome welcome welcome welcome welcome welcome",
    timestamp: "2024-06-18T11:30:00Z",
  },
];

export const users = [
  {
    id: "user1",
    username: "Sebti",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/wintro7.appspot.com/o/l60Hf.png?alt=media&token=467e0364-610b-4cb5-82e8-9011a0090a04",
  },
  {
    id: "user2",
    username: "Malek",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/wintro7.appspot.com/o/l60Hf.png?alt=media&token=467e0364-610b-4cb5-82e8-9011a0090a04",
  },
  {
    id: "user3",
    username: "Test",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/wintro7.appspot.com/o/l60Hf.png?alt=media&token=467e0364-610b-4cb5-82e8-9011a0090a04",
  },
];

export const profilesData = [
  {
    id: "user1",
    username: "Sebti",
    name: "Sebti",
    headline: "Engineer",
    bio: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    experience: [
      {
        title: "bla bla bla",
        company: "bla bla bla",
        years: "2023 - Present",
      },
    ],
    education: [
      {
        degree: "bla bla bla",
        university: "bla bla bla",
        years: "2023 - Present",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python"],
    projects: [
      {
        name: "Project Eclipsa",
        description: "bla bla bla bla bla bla bla bla bla",
        link: "https://eclipsa.example.com",
      },
    ],
  },
  {
    id: "user2",
    username: "Malek",
    name: "Malek",
    headline: "Professional Designer",
    bio: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    experience: [
      {
        title: "bla bla bla",
        company: "bla bla bla",
        years: "2023 - Present",
      },
    ],
    education: [
      {
        degree: "bla bla bla",
        university: "bla bla bla",
        years: "2023 - Present",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python"],
    projects: [
      {
        name: "Project Eclipsa",
        description: "bla bla bla bla bla bla bla bla bla",
        link: "https://eclipsa.example.com",
      },
    ],
  },
];

export const blogs = [
  {
    id: 1,
    title: "First Topic",
    excerpt: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    id: 2,
    title: "Second Topic",
    excerpt: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    id: 3,
    title: "Third Topic",
    excerpt: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
];

export const postsData = [
  {
    id: "1",
    userId: "user1",
    username: "Sebti",
    content: "What do you think about Eclipsa Project ?",
    imageUrl: "https://via.placeholder.com/400",
    likes: 12,
    comments: [
      {
        id: "1",
        userId: "user2",
        username: "Malek",
        content: "It's needs a visual identity",
      },
    ],
  },
  {
    id: "2",
    userId: "user2",
    username: "Malek",
    content: "Some big design is coming",
    imageUrl: "",
    likes: 5,
    comments: [
      {
        id: "2",
        userId: "user1",
        username: "Sebti",
        content: "Let's goooooooo",
      },
      { id: "3", userId: "user3", username: "Test", content: "Good" },
    ],
  },
];

export const connections = [
  {
    id: "user1",
    name: "Sebti",
    title: "Engineer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "user2",
    name: "Malek",
    title: "Professional Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "user3",
    name: "Test",
    title: "Developer",
    image: "https://via.placeholder.com/150",
  },
];

export const schools = [
  {
    name: "National School of Nanoscience and Nanotechnology",
    abriviation: "ENSNN",
    image: Nanotech,
    url: "https://www.ensnn.dz",
    information:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    name: "National School of Autonomous Systems Technology",
    abriviation: "NSAST",
    image: Systems,
    url: "https://www.ensnn.dz",
    information:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    name: "National School of Artificial Intelligence",
    abriviation: "ENSIA",
    image: Ai,
    url: "https://www.ensia.edu.dz",
    information:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    name: "National Higher School of Mathematics",
    abriviation: "NHSM",
    image: Math,
    url: "https://www.ensnn.dz",
    information:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    name: "National School of Cyber Security",
    abriviation: "NSCS",
    image: Cyber,
    url: "https://www.ensnn.dz",
    information:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
];

export const clubs = [
  {
    name: "Zeradox",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
    image: "https://via.placeholder.com/800x400",
    url: "https://zeradox.club",
  },
  {
    name: "Ion",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
    image: "https://via.placeholder.com/800x400",
    url: "https://zeradox.club",
  },
  {
    name: "Nexus",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
    image: "https://via.placeholder.com/800x400",
    url: "https://zeradox.club",
  },
  {
    name: "ETC",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
    image: "https://via.placeholder.com/800x400",
    url: "https://zeradox.club",
  },
  {
    name: "GDSC",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
    image: "https://via.placeholder.com/800x400",
    url: "https://zeradox.club",
  },
  {
    name: "Mobius",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
    image: "https://via.placeholder.com/800x400",
    url: "https://zeradox.club",
  },
];
